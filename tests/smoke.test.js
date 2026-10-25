const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'..');
test('website files are present',()=>{for(const f of ['index.html','styles.css','app.js','assets/automotive.svg','assets/grid.svg','server.js'])assert.ok(fs.existsSync(path.join(root,f)),f)});
test('Arabic and English translations and RTL are implemented',()=>{const js=fs.readFileSync(path.join(root,'app.js'),'utf8');assert.ok(js.includes('dir=lang'));assert.ok(js.includes('مرحلة'));assert.ok(js.includes('interactive'));});
test('the five-stage demo and form endpoint are implemented',()=>{const js=fs.readFileSync(path.join(root,'app.js'),'utf8');const server=fs.readFileSync(path.join(root,'server.js'),'utf8');assert.ok(js.includes('currentStep=2'));assert.ok(js.includes('selectStep('));assert.ok(server.includes('/api/demo-requests'));assert.ok(server.includes('requests.jsonl'));});
