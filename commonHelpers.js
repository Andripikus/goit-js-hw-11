import{a as h,S as b,i as a}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const L="44743173-b0da996c95212aae97675bf04",S="https://pixabay.com/api/";async function q(s,t=1,o=12){try{return(await h.get(S,{params:{key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:o}})).data}catch(i){throw console.error("Error fetching images:",i),i}}let c;function v(s){const t=document.querySelector(".gallery"),o=s.map(({webformatURL:i,largeImageURL:e,tags:r,likes:n,views:p,comments:y,downloads:g})=>`
    <div class="photo-card">
      <a href="${e}">
        <img class="card-img" src="${i}" alt="${r}" loading="lazy" />
      </a>
      <div class="card-info">
        <p class="info-item"><b>Likes</b> ${n}</p>
        <p class="info-item"><b>Views</b> ${p}</p>
        <p class="info-item"><b>Comments</b> ${y}</p>
        <p class="info-item"><b>Downloads</b> ${g}</p>
      </div>
    </div>
    `).join("");t.innerHTML=o,c?c.refresh():c=new b(".gallery a")}function w(){const s=document.querySelector(".gallery");s.innerHTML=""}const d=document.querySelector("#search-form"),l=d.querySelector(".form-input"),m=document.querySelector("#loader");let u=1;d.addEventListener("submit",async s=>{s.preventDefault();const t=l.value.trim();if(t===""){a.error({title:"Error",message:"Please enter a search query",position:"center"});return}u=1,w(),P(),l.value="";try{const o=await q(t,u);setTimeout(()=>{if(f(),o.hits.length===0){a.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"});return}v(o.hits)},2e3)}catch{setTimeout(()=>{f(),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"center"})},2e3)}});function P(){m.style.display="block"}function f(){m.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
