import { getHelloWorld } from "./mod.ts";
import { assertEquals } from "./test_deps.ts";

Deno.test("get hello world", function (): void {
  assertEquals(getHelloWorld(), "\x1b[1mHello World\x1b[22m");
});
