import { serve } from "https://deno.land/std@0.159.0/http/server.ts";

const port = 8000;


const handler = async (req: Request): Promise<Response> => {
  const u = new URL(req.url);
  const url = u.searchParams.get('url');
  const response = await fetch(`${url}`);
  const newHeaders = new Headers(response.headers);
  newHeaders.set('Access-Control-Allow-Origin', '*');

  return new Response(response.body, {
    headers: newHeaders,
  });
};

console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);
await serve(handler, { port });