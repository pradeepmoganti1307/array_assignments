import { isStrictlyAscending } from "./01_strictly_ascending.js";
import { assert, assertFalse } from "jsr:@std/assert";

Deno.test("should true for empty array", () => assert(isStrictlyAscending([])));

Deno.test("should true for any one number", () =>
  assert(isStrictlyAscending([1]))
);

Deno.test("should true for positive numbers in increasing order", () =>
  assert(isStrictlyAscending([1, 2, 3, 5, 6, 9]))
);

Deno.test("should false for positive numbers not in increasing order", () => {
  assertFalse(isStrictlyAscending([1, 2, 3, 10, 6, 9])),
    assertFalse(isStrictlyAscending([1, 2, 3, 10, 10, 10]));
});
