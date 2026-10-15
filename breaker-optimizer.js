/* Scenario-based cap-breaker planning. Native reference-body gains are ESTIMATES, not universal. */
(function(root){'use strict';
function index(doc){const out={isolated:{},near_caps:{}};for(const r of doc.data){const m=out[r.scenario];if(!m)continue;const key=r.name+':'+r.rating;(m[key]??=[])[r.application]=r.gain;}return out;}
function options(idx,id,goal,cap,limit=5,body=null){const results=[];for(let base=25;base<=Math.min(goal,cap);base++)for(let n=0;n<=Math.min(5,limit);n++){
 if(n===0){if(base>=goal)results.push({base,used:0,final:base,low:base,high:base,steps:[],confidence:'no-breakers'});continue;}
 const a=idx.isolated[id+':'+base],b=idx.near_caps[id+':'+base];if(!a||!b||a.length<n||b.length<n)continue;
 const low=Math.min(cap,base+Math.min(a.slice(0,n).reduce((x,y)=>x+y,0),b.slice(0,n).reduce((x,y)=>x+y,0)));
 const high=Math.min(cap,base+Math.max(a.slice(0,n).reduce((x,y)=>x+y,0),b.slice(0,n).reduce((x,y)=>x+y,0)));
 if(low>=goal)results.push({base,used:n,final:low,low,high,steps:[a.slice(0,n),b.slice(0,n)],confidence:'reference-scenarios-only'});
 }
 if(body&&body.position==='SG'&&body.height===77&&body.weight===233&&body.wing===82&&id==='driving_dunk'&&cap>=99){const sequence=[5,4,3,2,2];for(let n=1;n<=Math.min(5,limit);n++){const final=Math.min(cap,83+sequence.slice(0,n).reduce((x,y)=>x+y,0));if(final>=goal)results.push({base:83,used:n,final,low:final,high:final,steps:[sequence.slice(0,n)],confidence:'user-observed-sequence'});}}
return results.sort((a,b)=>a.base-b.base||a.used-b.used).slice(0,120);
}
function allocations(idx,targets,caps,available,body=null){let states=[{base:{},plans:{},used:0}];for(const t of targets){const choices=options(idx,t.id,t.rating,caps[t.id],t.breaker==='none'?0:available,body).filter(o=>t.breaker!=='require'||o.used===Number(t.requiredBreakers||5));if(!choices.length)return {status:'no_estimate',reason:'No supported reference-scenario path for '+t.id};let next=[];for(const s of states)for(const o of choices){if(s.used+o.used>available)continue;next.push({base:{...s.base,[t.id]:o.base},plans:{...s.plans,[t.id]:o},used:s.used+o.used})}next.sort((a,b)=>Object.values(a.base).reduce((x,y)=>x+y,0)-Object.values(b.base).reduce((x,y)=>x+y,0)||a.used-b.used);states=next.slice(0,150);if(!states.length)return {status:'no_budget',reason:'Insufficient cap breakers for selected targets'};}return {status:'candidates',states};}
root.HattyBreakerOptimizer={index,options,allocations};if(typeof module!=='undefined')module.exports={index,options,allocations};})(typeof window!=='undefined'?window:globalThis);
