import{S as g,a as L,i as p}from"./assets/vendor-483db976.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u=document.querySelector(".img-list");function m(i){const r=i.hits.map(s=>`<li class="list-item"><a href="${s.largeImageURL}" class="list-item-link">
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
    </li>`).join("");u.insertAdjacentHTML("beforeend",r),new g(".list-item a",{captionDelay:250,captionSelector:"img",captionsData:"alt",scrollZoom:!1,fadeSpeed:1e3}).refresh()}const f=document.querySelector(".input");async function h(){let i=f.value.split(" ").join("+");const r=new URLSearchParams({key:"42405110-7b28ad03e73a48ed950cc828f",q:i,image_type:"photo",orientation:"horizontal",per_page:y,page:l});return u.innerHTML="",(await L.get(`https://pixabay.com/api/?${r}`)).data}const c=document.querySelector(".form"),n=document.querySelector(".btn-load"),d=document.querySelector(".loader");let l=1,y=15;const v=Math.ceil(100/y);c.addEventListener("submit",b);async function b(i){if(f.value.trim()===""){i.preventDefault(),c.reset();return}i.preventDefault();try{const o=await h();m(o),d.classList.remove("hidden"),n.classList.remove("hidden"),o.hits.length===0&&(n.classList.add("hidden"),p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),setTimeout(()=>{d.classList.add("hidden")},1200)}catch(o){console.log(o)}c.reset()}n.addEventListener("click",S);async function S(){if(l+=1,l>v){p.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),n.classList.add("hidden");return}await h(),m(posts)}
//# sourceMappingURL=commonHelpers.js.map
