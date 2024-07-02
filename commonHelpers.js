import{a as d,S as y,i as n}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g="44743173-b0da996c95212aae97675bf04",h="https://pixabay.com/api/";async function b(s,t=1,o=12){try{return(await d.get(h,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:o}})).data}catch(i){throw console.error("Error fetching images:",i),i}}let c;function L(s){const t=document.querySelector(".gallery"),o=s.map(({webformatURL:i,largeImageURL:e,tags:r,likes:a,views:f,comments:m,downloads:p})=>`
    <div class="photo-card">
      <a href="${e}">
        <img src="${i}" alt="${r}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b> ${a}</p>
        <p class="info-item"><b>Views</b> ${f}</p>
        <p class="info-item"><b>Comments</b> ${m}</p>
        <p class="info-item"><b>Downloads</b> ${p}</p>
      </div>
    </div>
  `).join("");t.innerHTML=o,c?c.refresh():c=new y(".gallery a")}function S(){const s=document.querySelector(".gallery");s.innerHTML=""}const u=document.querySelector("#search-form"),q=u.querySelector("input");let l=1;u.addEventListener("submit",async s=>{s.preventDefault();const t=q.value.trim();if(t===""){n.error({title:"Error",message:"Please enter a search query"});return}l=1,S();try{const o=await b(t,l);if(o.hits.length===0){n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}L(o.hits)}catch{n.error({title:"Error",message:"Something went wrong. Please try again later."})}});
//# sourceMappingURL=commonHelpers.js.map
