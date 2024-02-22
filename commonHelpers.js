import{S as d,i as p}from"./assets/vendor-7659544d.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l=document.querySelector(".img-list");function m(o){const i=o.hits.map(s=>`<li class="list-item"><a href="${s.largeImageURL}" class="list-item-link">
      <img class="list-item-img" src="${s.webformatURL}" alt="${s.tags}"></a>
      <div class="list-item-description">
        <h2 class="description-name">Likes
          <p class="description-value">${s.likes}</p>
        </h2>
        <h2 class="description-name">Views 
          <p class="description-value">${s.views}</p>
        </h2>
        <h2 class="description-name">Comments 
          <p class="description-value">${s.comments}</p>
        </h2>
        <h2 class="description-name">Downloads 
          <p class="description-value">${s.downloads}</p>
        </h2>
      </div>
    </li>`).join("");l.insertAdjacentHTML("beforeend",i),new d(".list-item a",{captionDelay:250,captionSelector:"img",captionsData:"alt",scrollZoom:!1,fadeSpeed:1e3}).refresh()}const u=document.querySelector(".input");function f(){let o=u.value.split(" ").join("+");const i=new URLSearchParams({key:"42405110-7b28ad03e73a48ed950cc828f",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return l.innerHTML="",fetch(`https://pixabay.com/api/?${i}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const c=document.querySelector(".form");document.querySelector(".btn");const a=document.querySelector(".loader");c.addEventListener("submit",o=>{if(u.value.trim()===""){o.preventDefault(),c.reset();return}o.preventDefault(),f().then(t=>{a.classList.remove("hidden"),t.hits.length<=0&&p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m(t),setTimeout(()=>{a.classList.add("hidden")},1200)}).catch(t=>console.log(t)),c.reset()});
//# sourceMappingURL=commonHelpers.js.map
