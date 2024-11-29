/* export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}  */
 // deno run main.ts

 
  if (import.meta.main) {
    Deno.serve((_req_) => {
      (async () => {
        for await (const el of Deno.readDir(".")) {
          console.log(el.name);
        }
      })();
      const hello = new Response("Hello, World!");
      return hello;
    });
  }

 