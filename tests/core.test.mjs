import test from "node:test";
import assert from "node:assert/strict";
import { createHarmonicOscillator } from "../.tsbuild/core/packages/scientific-domain/src/harmonic-oscillator.js";
import { integrate } from "../.tsbuild/core/packages/computation/src/integrate.js";
import { parseExpression, evaluateExpression } from "../.tsbuild/core/packages/exploration/src/expression.js";
import { DependencyGraph, DependencyCycleError } from "../.tsbuild/core/packages/exploration/src/dependency-graph.js";

test("harmonic oscillator conserves energy", () => {
  const model = createHarmonicOscillator({ mass: 1, springConstant: 1 });
  const trajectory = integrate(model, 5000, 0.001);
  const initial = trajectory.energies[0];
  const final = trajectory.energies.at(-1);
  assert.notEqual(initial, undefined);
  assert.notEqual(final, undefined);
  assert.ok(Math.abs(final - initial) < 1e-5);
});

test("expression parser rejects unsupported syntax", () => {
  assert.equal(evaluateExpression(parseExpression("2*(x+3)/5"), { x: 2 }), 2);
  assert.throws(() => parseExpression("globalThis.process"), /Unsupported|Unexpected/);
  assert.throws(() => parseExpression("1".repeat(4097)), /maximum input length/);
});

test("dependency graph rejects cycles", () => {
  const graph = new DependencyGraph();
  graph.addNode("a", ["c"]);
  graph.addNode("b", ["a"]);
  graph.addNode("c", ["b"]);
  assert.throws(() => graph.topologicalOrder(), DependencyCycleError);
});

test("invalid scientific inputs fail", () => {
  assert.throws(() => createHarmonicOscillator({ mass: 0, springConstant: 1 }), /positive/);
});
