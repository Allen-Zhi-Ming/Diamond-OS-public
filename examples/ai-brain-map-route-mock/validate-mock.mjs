import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = dirname(fileURLToPath(import.meta.url));
const route = JSON.parse(readFileSync(join(currentDir, 'mock-route.json'), 'utf8'));
const graph = JSON.parse(readFileSync(join(currentDir, route.entry), 'utf8'));

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

assert(route.routeId === 'ai-brain-map-mock', 'Unexpected routeId');
assert(route.shellPolicy === 'route-module-only', 'Unexpected shell policy');
assert(route.dataPolicy === 'mock-only', 'Unexpected data policy');
assert(Array.isArray(graph.nodes), 'Graph nodes must be an array');
assert(Array.isArray(graph.edges), 'Graph edges must be an array');
assert(graph.nodes.length >= 3, 'Graph should include shell, route, and feature nodes');
assert(graph.edges.length >= 2, 'Graph should include route linkage edges');

console.log('AI Brain Map route mock validation passed');
