import{a as u,S as f,i as d}from"./assets/vendor-frHSA4Lh.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function p(r){const a="https://pixabay.com/"+"api/",e=new URLSearchParams({key:"50383604-c913cf66ede56daf64b093a7e",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await u.get(a,{params:e})).data}const g=new f(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".gallery"),m=document.querySelector(".loader-wrapper");function y(r){return`<li class="gallery-item">
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
`}function h(r){const o=r.map(y).join(`
`);c.innerHTML=o,g.refresh()}function L(){c.innerHTML=""}function S(){m.classList.remove("hidden")}function n(){m.classList.add("hidden")}const l={formElem:document.querySelector(".form"),galleryElem:document.querySelector(".gallery")};l.formElem.addEventListener("submit",r=>{r.preventDefault(),S();const o=r.target.elements["search-text"].value.trim();o!==""&&(L(),p(o).then(s=>{s.hits.length>0?(h(s.hits),n()):(n(),d.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",maxWidth:"432px",messageColor:"#ffffff",close:!0,closeOnClick:!0,icon:"icon-error"}),l.galleryElem.innerHTML="")})),r.target.reset()});
//# sourceMappingURL=index.js.map
