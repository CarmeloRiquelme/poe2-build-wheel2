'use strict';
// One persisted model drives both the catalogue checkboxes and the actual wheel.
class SkillSelection {
 constructor(items,saved,legacy){this.items=items;this.schema={families:[...new Set(items.flatMap(x=>x.families))],elements:['Physical','Fire','Cold','Lightning','Chaos','Wind','None'],types:['Attack','Spell','Minion','Totem','Buff','Aura','Travel','Warcry','Curse','Mark','Meta','Channelling','Projectile','Melee','Grenade','Shapeshift','Other']};const order=['Bow','Crossbow','Mace','Quarterstaff','Spear','Primal','Elemental','Occult','CharacterMeleeSkills','ItemInherentSkills','PassiveSkills','Kalguuran','UniqueItems'];this.schema.families.sort((a,b)=>order.indexOf(a)-order.indexOf(b));this.state={families:[...this.schema.families],elements:[...this.schema.elements],types:[...this.schema.types],excluded:[],mode:'any',query:'',scope:'matches',preset:null,overrides:{}};
  if(saved?.version===3){this.state.preset=Array.isArray(saved.preset)?saved.preset.filter(name=>items.some(it=>it.name===name)):null;for(const k of ['families','elements','types'])if(Array.isArray(saved[k]))this.state[k]=saved[k].filter(x=>this.schema[k].includes(x));this.state.excluded=Array.isArray(saved.excluded)?saved.excluded.filter(x=>this.allTags.includes(x)):[];this.state.mode=saved.mode==='all'?'all':'any';this.state.query=typeof saved.query==='string'?saved.query.slice(0,200):'';this.state.scope=['matches','all','selected'].includes(saved.scope)?saved.scope:'matches';if(saved.overrides&&typeof saved.overrides==='object')for(const it of items)if(typeof saved.overrides[it.name]==='boolean')this.state.overrides[it.name]=saved.overrides[it.name];}
  else if(Array.isArray(legacy)){const enabled=new Set(legacy);for(const it of items)if(!enabled.has(it.name))this.state.overrides[it.name]=false;}
  else this.applyRecommended();
 }
 get allTags(){return [...new Set(this.items.flatMap(x=>x.tags))].sort();}
 snapshot(){return {version:3,...this.state,overrides:{...this.state.overrides}};}
 search(it){const q=this.state.query.trim().toLowerCase();return !q||(it.name+' '+it.group+' '+it.tags.join(' ')+' '+it.families.join(' ')+' '+(it.searchTerms||'')).toLowerCase().includes(q);}
 excluded(it){return this.state.excluded.some(x=>it.tags.includes(x));}
 rule(it){if(this.state.preset&&!this.state.preset.includes(it.name))return false;const s=this.state,els=this.schema.elements.filter(x=>x!=='None'&&it.tags.includes(x)),types=this.schema.types.filter(x=>x!=='Other'&&it.tags.includes(x));if(!els.length)els.push('None');if(!types.length)types.push('Other');return it.families.some(x=>s.families.includes(x))&&els.some(x=>s.elements.includes(x))&&s.types.length>0&&(s.mode==='any'?types.some(x=>s.types.includes(x)):s.types.every(x=>types.includes(x)));}
 enabled(it){return this.search(it)&&!this.excluded(it)&&(this.state.overrides[it.name]??this.rule(it));}
 get selected(){return this.items.filter(it=>this.enabled(it));}
 get matches(){return this.items.filter(it=>this.search(it)&&this.rule(it)&&!this.excluded(it));}
 get visible(){if(this.state.scope==='selected')return this.selected;if(this.state.scope==='all'||!this.state.families.length)return this.items.filter(it=>this.search(it));return this.matches;}
 toggleFacet(group,key,enabled){const a=this.state[group];this.state[group]=enabled?[...new Set([...a,key])]:a.filter(x=>x!==key);}
 setItem(name,enabled){this.state.overrides[name]=!!enabled;}
 setMatches(enabled){for(const it of this.matches)this.setItem(it.name,enabled);}
 selectAll(){this.state.preset=null;for(const k of ['families','elements','types'])this.state[k]=[...this.schema[k]];this.state.excluded=[];this.state.query='';this.state.overrides={};this.state.scope='matches';this.state.mode='any';}
 applyRecommended(){this.selectAll();this.state.scope='all';this.state.preset=[...DEFAULT_SKILL_NAMES];}
 clearAll(){this.selectAll();this.state.families=[];this.state.scope='all';}
 resetManual(){this.state.overrides={};}
}
