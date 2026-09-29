import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const repoRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const distRoot = join(repoRoot, 'dist');
const origin = 'https://storage.emfls.com';
const routes = [
  { path: '/', file: 'index.html' },
  { path: '/about/', file: 'about/index.html' },
  { path: '/privacy/', file: 'privacy/index.html' },
  { path: '/contact/', file: 'contact/index.html' },
  { path: '/editorial-policy/', file: 'editorial-policy/index.html' }
];

function readBuiltFile(path) {
  const file = join(distRoot, path);
  assert.ok(existsSync(file), `Expected generated file: dist/${path}`);
  return readFileSync(file, 'utf8');
}

function canonicalOf(html) {
  return html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/i)?.[1]
    ?? html.match(/<link\b[^>]*href="([^"]+)"[^>]*rel="canonical"/i)?.[1];
}

function htmlFiles(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) return htmlFiles(path);
    return path.endsWith('.html') ? [path] : [];
  });
}

test('build emits the home page, Trust routes, and a custom 404', () => {
  for (const route of routes) readBuiltFile(route.file);
  const notFound = readBuiltFile('404.html');
  assert.match(notFound, /Page not found|페이지를 찾을 수 없습니다/i);
});

test('the home page explains the Storage decision method and has unique metadata', () => {
  const home = readBuiltFile('index.html');
  assert.match(home, /분류/);
  assert.match(home, /사용 빈도|사용빈도/);
  assert.match(home, /실제.*(치수|공간)|공간.*(치수|측정)/s);
  assert.match(home, /유지/);
  assert.match(home, /<title>[^<]*수납|<title>[^<]*정리/i);
  assert.match(home, /<meta\b[^>]*name="description"[^>]*content="[^"]{40,}"/i);
  assert.equal(canonicalOf(home), `${origin}/`);
  assert.doesNotMatch(home, /initial technical bootstrap|will be added in later stages/i);
});

test('public routes are indexable, canonical, and reachable from shared navigation', () => {
  for (const route of routes) {
    const html = readBuiltFile(route.file);
    assert.equal(canonicalOf(html), `${origin}${route.path}`);
    assert.match(html, /<title>[^<]+<\/title>/i);
    assert.match(html, /<meta\b[^>]*name="description"[^>]*content="[^"]{30,}"/i);
    assert.doesNotMatch(html, /name="robots"\s+content="noindex/i);

    for (const navRoute of ['/about/', '/privacy/', '/contact/', '/editorial-policy/']) {
      assert.ok(html.includes(`href="${navRoute}"`), `${route.path} navigation is missing ${navRoute}`);
    }
  }
});

test('robots and sitemap expose exactly the canonical public routes', () => {
  const robots = readBuiltFile('robots.txt');
  assert.match(robots, /User-agent:\s*\*/i);
  assert.match(robots, /Allow:\s*\//i);
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));

  const sitemap = readBuiltFile('sitemap.xml');
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(locations, routes.map(({ path }) => `${origin}${path}`));
  assert.ok(locations.every((url) => url.startsWith(`${origin}/`)));
  assert.ok(!locations.some((url) => /404|missing/i.test(url)));
});

test('build publishes the configured IndexNow key document', () => {
  const key = readBuiltFile('indexnow-key.txt').trim();
  assert.match(key, /^[a-f0-9]{64}$/i);
});

test('the custom 404 is noindex and all generated pages are free of placeholder copy', () => {
  const notFound = readBuiltFile('404.html');
  assert.match(notFound, /name="robots"\s+content="noindex,\s*follow"/i);
  assert.ok(notFound.includes('href="/"'), '404 page should link back home');

  for (const file of htmlFiles(distRoot)) {
    const html = readFileSync(file, 'utf8');
    assert.doesNotMatch(html, /initial technical bootstrap|will be added in later stages|lorem ipsum|TODO/i, file);
  }
});
