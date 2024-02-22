import{S as g,a as L,i as u}from"./assets/vendor-483db976.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const p=document.querySelector(".img-list");function m(t){const o=t.hits.map(s=>`<li class="list-item"><a href="${s.largeImageURL}" class="list-item-link">
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
    </li>`).join("");p.insertAdjacentHTML("beforeend",o),new g(".list-item a",{captionDelay:250,captionSelector:"img",captionsData:"alt",scrollZoom:!1,fadeSpeed:1e3}).refresh()}const f=document.querySelector(".input");async function h(){let t=f.value.split(" ").join("+");const o=new URLSearchParams({key:"42405110-7b28ad03e73a48ed950cc828f",q:t,image_type:"photo",orientation:"horizontal",per_page:v,page:l});return(await L.get(`https://pixabay.com/api/?${o}`)).data}const y=document.querySelector(".form");document.querySelector(".list-item");const a=document.querySelector(".btn-load"),d=document.querySelector(".loader");let l=1,v=15,i;y.addEventListener("submit",b);async function b(t){if(l=1,f.value.trim()===""){t.preventDefault(),y.reset();return}t.preventDefault(),w();try{i=await h(),m(i),d.classList.remove("hidden"),a.classList.remove("hidden"),i.hits.length===0&&(a.classList.add("hidden"),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),setTimeout(()=>{d.classList.add("hidden")},1200);return}catch(n){console.log(n)}}a.addEventListener("click",S);async function S(t){if(t.preventDefault(),l+=1,i=await h(),m(i),q(820),i.hits.length===0){a.classList.add("hidden"),u.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});return}}function w(){p.innerHTML=""}function q(t){window.scrollBy({top:t,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
