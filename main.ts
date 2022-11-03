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
  const response = await fetch(`${url}&` + new URLSearchParams(params), {
    "headers": {
      "Host": "api.bilibili.com",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
      "accept": "application/json, text/plain, */*",
      "Upgrade-Insecure-Requests": "1",
      "Pragma": "no-cache",
      "Cache-Control": "no-cache",
      "Cookie": "_uuid = 7106174D6-1B6A-C7EC-AFF1-AE43789D3C21043699infoc; b_nut=1646897245; buvid3=04E17740-530D-C942-7190-E3A80849C9B744667infoc; buvid4=DEE1B5FB-B10A-1335-4479-EDF1D7F8B34A44667-022031015-T9iDfD7tRvv9ojwSFeGNjw%3D%3D;blackside_state=1;rpdid=|(m~)lmYml|0J'uYR~u~uJ~k;LIVE_BUVID=AUTO2816502951472877;nostalgia_conf=-1;CURRENT_BLACKGAP=0;i-wanna-go-back=-1;b_ut=7;buvid_fp_plain=undefined;CURRENT_QUALITY=32;fingerprint=a3cb784f1ecefff0561bd1266b7ccdf1;buvid_fp=a3cb784f1ecefff0561bd1266b7ccdf1;i-wanna-go-feeds=-1;sid=66nr3sk9;innersign=0;CURRENT_FNVAL=16;PVID=2;bsource=search_google;b_lsid=FCEB4866_1840E550366",
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