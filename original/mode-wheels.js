'use strict';
const MODE_TEXT={
 es:{optionalWheels:'Ruletas opcionales',survival:'Softcore / Hardcore',economy:'SSF / Trade',modeCount:'{n} opciones',modeHelp:'Activa o desactiva cada ruleta. Al crear una build, las activas giran junto con la primera rueda.',recommended:'Restaurar lista de 167 habilidades'},
 en:{optionalWheels:'Optional wheels',survival:'Softcore / Hardcore',economy:'SSF / Trade',modeCount:'{n} options',modeHelp:'Toggle each wheel. Active wheels spin alongside the first wheel when creating a build.',recommended:'Restore 167-skill list'},
 zh:{optionalWheels:'可选轮盘',survival:'Softcore / Hardcore',economy:'SSF / Trade',modeCount:'{n} 个选项',modeHelp:'可单独启用或关闭。创建流派时，启用的轮盘与第一个轮盘一起转动。',recommended:'恢复 167 项技能列表'}
};
for(const locale of Object.keys(MODE_TEXT))Object.assign(I18N[locale],MODE_TEXT[locale]);
Object.assign(I18N.es,{modeWheelOrder:'Orden de las ruletas finales',survivalFirst:'Softcore / Hardcore → SSF / Trade',economyFirst:'SSF / Trade → Softcore / Hardcore',modeHelp:'Las ruletas activas giran una después de otra, cuando terminan clase, habilidad y ascendencia.'});
Object.assign(I18N.en,{modeWheelOrder:'Final wheel order',survivalFirst:'Softcore / Hardcore → SSF / Trade',economyFirst:'SSF / Trade → Softcore / Hardcore',modeHelp:'Active wheels spin one after another, after class, skill and ascendancy have finished.'});
Object.assign(I18N.zh,{modeWheelOrder:'最后两个轮盘的顺序',survivalFirst:'Softcore / Hardcore → SSF / Trade',economyFirst:'SSF / Trade → Softcore / Hardcore',modeHelp:'职业、技能和升华全部确定后，启用的轮盘将依次转动。'});
function orderedModeWheels(){return $('mode-wheel-order').value==='economy-first'?[...modeWheels].reverse():modeWheels;}
Object.assign(I18N.es,{allSimultaneous:'Todas a la vez (excepto ascendencia)',allSimultaneousHint:'Clase, habilidad y las ruletas opcionales activas giran juntas. La ascendencia empieza 2 segundos después de elegir clase.',modeAllHelp:'En este modo, las ruletas opcionales activas giran junto con clase y habilidad.'});
Object.assign(I18N.en,{allSimultaneous:'All together (except ascendancy)',allSimultaneousHint:'Class, skill and enabled optional wheels spin together. Ascendancy starts 2 seconds after the class settles.',modeAllHelp:'In this mode, enabled optional wheels spin alongside class and skill.'});
Object.assign(I18N.zh,{allSimultaneous:'全部同时转动（升华除外）',allSimultaneousHint:'职业、技能和启用的可选轮盘同时转动。职业确定两秒后，升华轮盘开始转动。',modeAllHelp:'此模式下，启用的可选轮盘与职业和技能一起转动。'});
// Representative in-game art, not official league emblems. Sources stay attached.
const MODE_ITEMS={
 survival:[{name:'Softcore',group:'Softcore / Hardcore',color:'#3d6654',url:'https://cdn.poe2db.tw/image/Art/2DItems/Flasks/Basetypes/FlaskLife09.webp',source:'https://poe2db.tw/us/Ultimate_Life_Flask'},{name:'Hardcore',group:'Softcore / Hardcore',color:'#853c3c',url:'https://cdn.poe2db.tw/image/Art/2DItems/Currency/CurrencyVaal.webp',source:'https://poe2db.tw/us/Vaal_Orb'}],
 economy:[{name:'SSF',group:'SSF / Trade',color:'#496875',url:'https://cdn.poe2db.tw/image/art/2dart/skillicons/4k/warriorforgehammer.webp',source:'https://poe2db.tw/us/Forge_Hammer'},{name:'Trade',group:'SSF / Trade',color:'#82652e',url:'https://cdn.poe2db.tw/image/Art/2DItems/Currency/CurrencyAddModToRare.webp',source:'https://poe2db.tw/us/Exalted_Orb'}]
};
function wheelEnabled(w){return !MODE_ITEMS[w.id]||modeSettings[w.id];}
function activeWheels(){return allWheels.filter(wheelEnabled);}
function modesComplete(){return modeWheels.every(w=>!wheelEnabled(w)||w.result);}
function modeResults(){return Object.fromEntries(modeWheels.filter(w=>wheelEnabled(w)&&w.result).map(w=>[w.id,w.result.name]));}
function syncModeUI(){
 for(const w of modeWheels){const enabled=wheelEnabled(w);$(w.id+'-panel').hidden=!enabled;$(w.id+'-enabled').checked=enabled;$(w.id+'-toggle').setAttribute('aria-pressed',String(enabled));}
 const machine=document.querySelector('.machine');if(machine){machine.dataset.survival=String(modeSettings.survival);machine.dataset.economy=String(modeSettings.economy);}
}
function setModeEnabled(id,enabled){if(busy()||!MODE_ITEMS[id])return;modeSettings[id]=!!enabled;store.set('mode-wheels-v1',modeSettings);syncModeUI();$('build-result').hidden=true;updateControls();}
function initializeModeWheels(){for(const w of modeWheels){$(w.id+'-enabled').addEventListener('change',()=>setModeEnabled(w.id,$(w.id+'-enabled').checked));$(w.id+'-toggle').onclick=()=>setModeEnabled(w.id,!modeSettings[w.id]);}syncModeUI();}
function showModeResults(){const el=$('build-modes');el.replaceChildren();for(const w of modeWheels){if(!wheelEnabled(w)||!w.result)continue;const badge=document.createElement('span'),im=document.createElement('img');setImage(im,w.result);im.alt='';badge.append(im,document.createTextNode(w.result.name));el.append(badge);}el.hidden=!el.children.length;}
