### Introduction
A simple typescript program for cors proxy.  
It fetches the param url and adds Allow Access-Control-Allow-Origin: * to response headers.  
Support Content-Type like json html and image.  
It can help you get rid of annoying 403 or cors error.
### Usage
```sh
deno run --allow-read  --allow-net .\main.ts
```
- http://localhost:8000/?url=http://www.baidu.com -> http://www.baidu.com
- http://localhost:8000/?url=http://i0.hdslb.com/bfs/archive/278d3722186c614bca7dc65c9fd1687a62ea646f.jpg  
-> http://i0.hdslb.com/bfs/archive/278d3722186c614bca7dc65c9fd1687a62ea646f.jpg  

Work fine in deno 1.26.1

### Disclaimer
Just for learning and testing.  
Do not use for illegal behavoir.
