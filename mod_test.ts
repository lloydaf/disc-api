import { getHelloWorld } from "./mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("get hello world", function (): void {
  assertEquals(getHelloWorld(), "Hello World");
});
