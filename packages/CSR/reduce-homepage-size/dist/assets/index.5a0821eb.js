const d=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}};d();const f="modulepreload",c={},m="/",s=function(n,i){return!i||i.length===0?n():Promise.all(i.map(t=>{if(t=`${m}${t}`,t in c)return;c[t]=!0;const e=t.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${r}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":f,e||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),e)return new Promise((a,u)=>{o.addEventListener("load",a),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>n())};window.$Page1=()=>s(()=>import("./page1.94dc12f6.js"),[]);window.$Page2=()=>s(()=>import("./page2.c361720d.js"),[]);window.$AllPages={"./pages/page1.js":()=>s(()=>import("./page1.94dc12f6.js"),[]),"./pages/page2.js":()=>s(()=>import("./page2.c361720d.js"),[])};console.log(window.$AllPages);window.$render=async l=>{const{default:n}=await l();n()};
