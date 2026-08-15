import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const routes = ['/','/shop','/shop/sdd-bold-pixie-curls','/shop/sdd-bone-straight','/collections','/cart','/checkout'];
const widths = [320,360,375,390,412,430,768,1024,1280,1440];
let issues=0;
for (const r of routes) for (const w of widths) {
  const p = await b.newPage({ viewport:{width:w,height:844} });
  const errs=[]; p.on('pageerror',e=>errs.push(e.message)); p.on('console',m=>{if(m.type()==='error')errs.push(m.text());});
  await p.goto('http://localhost:3260'+r,{waitUntil:'networkidle'});
  await p.evaluate(async()=>{await new Promise(x=>{let y=0;const t=setInterval(()=>{scrollTo(0,y);y+=900;if(y>document.body.scrollHeight){clearInterval(t);x();}},15);});});
  const m = await p.evaluate(()=>({ ovx: document.documentElement.scrollWidth-document.documentElement.clientWidth }));
  if(m.ovx!==0||errs.length){issues++;console.log(`X ${r} @${w} ovx=${m.ovx} ${errs.slice(0,1)}`);}
  await p.close();
}
console.log(issues?`${issues} issues`:`clean across ${routes.length*widths.length} combos`);
await b.close();
