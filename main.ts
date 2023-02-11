import { serve } from "https://deno.land/std@0.159.0/http/server.ts";

const port = 8000;


const handler = async (req: Request): Promise<Response> => {
  const u = new URL(req.url);
  const url = u.searchParams.get('url');
  let params = {};
  u.searchParams.forEach((val, key) => {
    if (key !== 'url') {
      params[key] = val;
    }
  })
  let suffix = '&';
  if (Object.keys(params).length === 0) {
    suffix = ''
  }
  const response = await fetch(`${url}${suffix}` + new URLSearchParams(params), {
    "headers": {
      "Host": "api.bilibili.com",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
      "Upgrade-Insecure-Requests": "1",
      "Pragma": "no-cache",
      "Cache-Control": "no-cache",
      "Cookie": "!!your cookie here",
    }
  });
  const newHeaders = new Headers(response.headers);
  newHeaders.set('Access-Control-Allow-Origin', '*');

  return new Response(response.body, {
    headers: newHeaders,
  });
};

console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);
await serve(handler, { port });