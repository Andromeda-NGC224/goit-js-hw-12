import{S as L,a as v,i as u}from"./assets/vendor-483db976.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p=document.querySelector(".img-list");function m(s){const o=s.hits.map(r=>`<li class="list-item"><a href="${r.largeImageURL}" class="list-item-link">
      <img class="list-item-img" src="${r.webformatURL}" alt="${r.tags}"></a>
      <div class="list-item-description">
        <h2 class="description-name">Likes
          <p class="description-value">${r.likes}</p>
        </h2>
        <h2 class="description-name">Views 
          <p class="description-value">${r.views}</p>
        </h2>
        <h2 class="description-name">Comments 
          <p class="description-value">${r.comments}</p>
        </h2>
        <h2 class="description-name">Downloads 
          <p class="description-value">${r.downloads}</p>
        </h2>
      </div>
    </li>`).join("");p.insertAdjacentHTML("beforeend",o),new L(".list-item a",{captionDelay:250,captionSelector:"img",captionsData:"alt",scrollZoom:!1,fadeSpeed:1e3}).refresh()}const f=document.querySelector(".input");async function h(){let s=f.value.split(" ").join("+");const o=new URLSearchParams({key:"42405110-7b28ad03e73a48ed950cc828f",q:s,image_type:"photo",orientation:"horizontal",per_page:g,page:c});return(await v.get(`https://pixabay.com/api/?${o}`)).data}const y=document.querySelector(".form"),a=document.querySelector(".btn-load"),d=document.querySelector(".loader");let c=1,g=15,n;const b=Math.ceil(100/g);y.addEventListener("submit",S);async function S(s){if(c=1,f.value.trim()===""){s.preventDefault(),y.reset();return}s.preventDefault(),q();try{n=await h(),m(n),d.classList.remove("hidden"),a.classList.remove("hidden"),n.hits.length===0&&(a.classList.add("hidden"),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),setTimeout(()=>{d.classList.add("hidden")},1200);return}catch(i){console.log(i)}}a.addEventListener("click",w);async function w(s){if(s.preventDefault(),c+=1,n=await h(),m(n),c>b){u.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),a.classList.add("hidden");return}}function q(){p.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
