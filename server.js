/**
 * AzzumGMS marketing site + simple lead receiver.
 * No third-party dependencies. Run `npm start`.
 * For production, use persistent storage, monitoring and a real email/CRM integration.
 */
'use strict';
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const PORT=Number(process.env.PORT)||4173;
const ROOT=__dirname;
const DATA_DIR=path.join(ROOT,'server','data');
const MIME={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.ico':'image/x-icon'};
const MAX_BYTES=16*1024;
const attempts=new Map();
function send(res,status,data){res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','X-Frame-Options':'DENY'});res.end(JSON.stringify(data));}
function text(s,max){return typeof s==='string'?s.trim().slice(0,max):'';}
async function requestBody(req){let size=0;let parts=[];for await(const chunk of req){size+=chunk.length;if(size>MAX_BYTES){const err=new Error('Payload too large');err.status=413;throw err}parts.push(chunk)}return JSON.parse(Buffer.concat(parts).toString('utf8'));}
const server=http.createServer(async(req,res)=>{
  let url;try{url=new URL(req.url,'http://localhost')}catch{return send(res,400,{error:'Invalid URL'})}
  if(url.pathname==='/api/demo-requests'){
    if(req.method!=='POST')return send(res,405,{error:'Method not allowed'});
    const ip=req.socket.remoteAddress||'unknown';let a=attempts.get(ip)||{count:0,until:Date.now()+3600000};if(Date.now()>a.until)a={count:0,until:Date.now()+3600000};a.count++;attempts.set(ip,a);if(a.count>12)return send(res,429,{error:'Too many requests. Try later.'});
    try{const input=await requestBody(req);if(text(input.website,300))return send(res,200,{ok:true});const name=text(input.name,120),email=text(input.email,180),company=text(input.company,180),phone=text(input.phone,40),branches=text(input.branches,15),message=text(input.message,2000),language=input.language==='ar'?'ar':'en';
      if(name.length<2||company.length<2||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return send(res,422,{error:'Name, company, and valid email are required'});
      const row={id:crypto.randomUUID(),createdAt:new Date().toISOString(),name,email,company,phone,branches,message,language};
      fs.mkdirSync(DATA_DIR,{recursive:true});fs.appendFileSync(path.join(DATA_DIR,'requests.jsonl'),JSON.stringify(row)+'\n',{encoding:'utf8',mode:0o600});return send(res,201,{ok:true,id:row.id});
    }catch(err){if(err instanceof SyntaxError)return send(res,400,{error:'Invalid JSON'});console.error('Lead submission error',err);return send(res,err.status||500,{error:'Unable to receive request'})}
  }
  if(!['GET','HEAD'].includes(req.method))return send(res,405,{error:'Method not allowed'});
  let pathname;try{pathname=decodeURIComponent(url.pathname)}catch{return send(res,400,{error:'Invalid path'})}
  if(pathname==='/'||pathname==='/index.html')pathname='/index.html';
  if(pathname.startsWith('/server')||pathname.startsWith('/.')||pathname==='/server.js'||pathname==='/package.json'||pathname==='/README.md')return send(res,404,{error:'Not found'});
  const file=path.resolve(ROOT,'.'+pathname);if(!file.startsWith(ROOT+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile())return send(res,404,{error:'Not found'});
  const ext=path.extname(file).toLowerCase();res.writeHead(200,{'Content-Type':MIME[ext]||'application/octet-stream','Cache-Control':ext==='.html'?'no-cache':'public, max-age=3600','X-Content-Type-Options':'nosniff','X-Frame-Options':'DENY','Referrer-Policy':'strict-origin-when-cross-origin'});if(req.method==='HEAD')return res.end();fs.createReadStream(file).pipe(res);
});
server.listen(PORT,()=>console.log(`AzzumGMS running at http://localhost:${PORT}`));
