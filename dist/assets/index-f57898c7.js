import{_ as w,D as I,G as S,r as v,t as N,b as d,c as _,f as e,E as U,H as D,j as R,o as T,I as V,J as u,a as k,d as g,w as F,e as f,F as P,h as E,C as H,i as y,g as C}from"./index-67a3101e.js";const L=t=>(U("data-v-520603bd"),t=t(),D(),t),M={class:"checkbox-wrapper-5"},j=L(()=>e("label",{for:"check-5"},null,-1)),z={__name:"darkSwitch",setup(t){const{switchDark:l}=I(),r=S(),a=v({list:[]});N(a);const i=()=>{r.themeConfig.isDark=!r.themeConfig.isDark,l()};return(b,x)=>(d(),_("div",M,[e("div",{class:"check"},[e("input",{checked:"",id:"check-5",type:"checkbox",onClick:i}),j])]))}},Y=w(z,[["__scopeId","data-v-520603bd"]]);const h=t=>(U("data-v-687e7e8c"),t=t(),D(),t),J={class:"content-section menuBar-mv"},K={class:"content-section-title"},O=h(()=>e("h2",{class:"theme-h2"},"深色模式",-1)),q={class:"theme-preset"},Q={class:"content-section"},W=h(()=>e("div",{class:"content-section-title",style:{"margin-bottom":"0px"}},[e("h2",{class:"theme-h2"},"主题")],-1)),X={class:"theme-preset"},Z={class:"content-section",style:{"margin-top":"0px"}},ee={class:"apps-card"},te=["onClick"],se={class:"app-card m-theme"},oe={href:"javascript:;"},ce=h(()=>e("div",{class:"content-section-title"},[e("h2",{class:"theme-h2"},"自定义")],-1)),ae=h(()=>e("div",{class:"footer"},[C(" Copyright © 2013 by Perchouli Shanzhai to Nipponcolors"),e("br"),C(" 参考: 色谱 中科院科技情报编委会名词室.科学出版社,1957. Adobe RGB / CMYK FOGRA39, Dot Gain 15% Screenshot沪ICP备17025116号-2 ")],-1)),ne={__name:"index",setup(t){const{changePrimary:l}=I(),r=S(),a=R(()=>r.themeConfig),i=v({list:[]}),{list:b}=N(i);v([{colorName:"默认",colorUrl:"默认.png",gbrUrl:u},{colorName:"牡丹粉红",gbrUrl:"#eea2a4"},{colorName:"栗紫",gbrUrl:"#5a191b"},{colorName:"香叶红",gbrUrl:"#f07c82"},{colorName:"艳红",gbrUrl:"#ed5a65"},{colorName:"茶花红",gbrUrl:"#ee3f4d"}]);const x=[u,"#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585"],$=s=>{r.setThemeConfig({...a.value,primary:s}),l(a.value.primary)},A=s=>{const n=B(s);l(n)};function B(s){const n=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/,o=s.match(n);if(!o)throw new Error("Invalid RGBA string");const p=parseInt(o[1],10),c=parseInt(o[2],10),m=parseInt(o[3],10);return o[4]&&parseFloat(o[4]),`#${((1<<24)+(p<<16)+(c<<8)+m).toString(16).slice(1)}`}return T(()=>{V.get("https://mock.mengxuegu.com/mock/634f6425369a770d74bbf7b9/example/colorsList").then(s=>{i.list=s.data,i.list.unshift({hex:u,name:"默认",pinyin:"moren"})})}),(s,n)=>{const o=k("el-scrollbar"),p=k("el-color-picker");return d(),_("div",null,[e("div",J,[e("div",K,[O,e("div",q,[e("div",Q,[g(Y)])])]),W,e("div",X,[e("div",Z,[g(o,{height:"350"},{default:F(()=>[e("div",ee,[(d(!0),_(P,null,E(f(b),(c,m)=>(d(),_("div",{class:"apps-item mv-text",key:m,onClick:G=>$(c.hex)},[e("div",se,[e("div",{style:H([{backgroundColor:c.hex},{width:"230px",height:"123px","border-radius":"5px"}])},null,4)]),e("a",oe,y(c.name)+"("+y(c.pinyin)+")",1)],8,te))),128))])]),_:1})])]),ce,g(p,{modelValue:f(a).primary,"onUpdate:modelValue":n[0]||(n[0]=c=>f(a).primary=c),"show-alpha":"",predefine:x,onChange:A},null,8,["modelValue"]),ae])])}}},ie=w(ne,[["__scopeId","data-v-687e7e8c"]]);export{ie as default};