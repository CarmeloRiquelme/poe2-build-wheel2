'use strict';
function normalizedName(value){return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();}
function nameDistance(a,b){let row=Array.from({length:b.length+1},(_,i)=>i);for(let i=1;i<=a.length;i++){const next=[i];for(let j=1;j<=b.length;j++)next[j]=Math.min(next[j-1]+1,row[j]+1,row[j-1]+(a[i-1]===b[j-1]?0:1));row=next;}return row[b.length];}
function closestWheelItem(w,query){const q=normalizedName(query);if(!q)return null;let best=null,score=Infinity;for(const item of w.items){const name=normalizedName(item.name);let rank;if(name===q)rank=0;else if(name.startsWith(q))rank=1+(name.length-q.length)/1000;else if(name.includes(q))rank=2+name.indexOf(q)/100;else{const distance=nameDistance(q,name);if(distance>Math.max(1,Math.floor(Math.max(q.length,name.length)*.35)))continue;rank=4+distance/Math.max(q.length,name.length);}if(rank<score){score=rank;best=item;}}return best;}
function refreshInteraction(){
 const mode=$('spin-mode').value;
 $('spin-order').disabled=mode!=='sequential';
 $('mode-wheel-order').disabled=mode==='all-simultaneous';
 $('spin-sequence-hint').textContent=t(mode==='all-simultaneous'?'allSimultaneousHint':mode==='simultaneous'?'simultaneousHint':'sequentialHint');
 document.querySelectorAll('[data-i18n="modeHelp"]').forEach(el=>el.textContent=t(mode==='all-simultaneous'?'modeAllHelp':'modeHelp'));
 for(const w of wheels){$(w.id+'-pick').placeholder=t('pickPlaceholder');const query=$(w.id+'-pick').value;if(query){const item=closestWheelItem(w,query);$(w.id+'-pick-match').textContent=item?t('pickMatch',{name:item.name}):t('pickNone');}}
}
function animateWheelSelection(w,item,origin='search'){
 if(!item||!w.items.includes(item)||(w===ascWheel&&!ascClass))return false;
 if(busy()&&!(w.targetMotion?.origin==='search'&&!spinPlan))return false;
 if(origin==='search'&&(w.targetMotion?.item===item||(!w.running&&w.result===item)))return true;
 unlockAudio();batch=false;$('build-result').hidden=true;
 if(w===classWheel&&ascClass!==item.name)invalidateAscendancy();
 const index=w.items.indexOf(item),target=-(index+.5)*TAU/w.items.length;
 const delta=mod(target-w.angle+Math.PI,TAU)-Math.PI;
 w.targetMotion={from:w.angle,to:w.angle+delta,elapsed:0,duration:reduced.checked?.16:origin==='drag'?.22:Math.min(.95,.45+Math.abs(delta)*.12),item,origin};
 w.running=true;w.omega=0;w.result=null;w.updateHub();w.dirty=true;
 $(w.id+'-panel').classList.remove('winner');$(w.id+'-result').textContent=item.name;
 updateControls();return true;
}
function installWheelPicker(w){
 const input=$(w.id+'-pick');
 input.addEventListener('input',()=>{
  if(w===ascWheel&&!ascClass){$(w.id+'-pick-match').textContent=t('chooseClassFirst');return;}
  const query=input.value,item=closestWheelItem(w,query);
  $(w.id+'-pick-match').textContent=query.trim()?(item?t('pickMatch',{name:item.name}):t('pickNone')):'';
  if(item)animateWheelSelection(w,item);
 });
 input.addEventListener('keydown',e=>{if(e.key==='Escape'){input.value='';$(w.id+'-pick-match').textContent='';}if(e.key==='Enter')e.preventDefault();});
}
