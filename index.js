import{S as u,i as f}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function d(r){const o="https://pixabay.com/",n="api/",s=new URLSearchParams({key:"50383604-c913cf66ede56daf64b093a7e",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${o}${n}?${s}`;return fetch(e).then(t=>{if(t.ok)return t.json();throw new Error("Something vent wrong...Please try again")})}const p=new u(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".gallery"),m=document.querySelector(".loader-wrapper");function g(r){return`<li class="gallery-item">
  <a class="gallery-link" href="${r.largeImageURL}">
    <img
      class="gallery-image"
      src="${r.webformatURL}"
      alt="${r.tags}"
    />
  </a>
   <div class="info">
          <p><b>Likes:</b> ${r.likes}</p>
          <p><b>Views:</b> ${r.views}</p>
          <p><b>Comments:</b> ${r.comments}</p>
          <p><b>Downloads:</b> ${r.downloads}</p>
        </div>
</li>
`}function y(r){const o=r.map(g).join(`
`);c.innerHTML=o,p.refresh()}function h(){c.innerHTML=""}function L(){m.classList.remove("hidden")}function a(){m.classList.add("hidden")}const l={formElem:document.querySelector(".form"),galleryElem:document.querySelector(".gallery")};l.formElem.addEventListener("submit",r=>{r.preventDefault(),L();const o=r.target.elements["search-text"].value.trim();o!==""&&(h(),d(o).then(n=>{n.hits.length>0?(y(n.hits),a()):(a(),f.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",maxWidth:"432px",messageColor:"#ffffff",close:!0,closeOnClick:!0,icon:"icon-error"}),l.galleryElem.innerHTML="")})),r.target.reset()});
//# sourceMappingURL=index.js.map
