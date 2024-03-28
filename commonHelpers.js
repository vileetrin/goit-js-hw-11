import{S as d,i as c}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function p(n){const t="https://pixabay.com/api/?key=",o="43086871-ad01a7cbad34982c2244ec443",s=new URLSearchParams({q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${t}${o}&${s}`;return fetch(e).then(r=>{if(!r.ok)throw new Error("Error");return r.json()}).then(r=>r.hits).catch(r=>{console.error("Error:",r)})}function f(n,t){const o=n.map(e=>`<div class="section">
        <a href="${e.largeImageURL}"
          ><img
            src="${e.webformatURL}"
            alt="${e.tags}"
            class="gallery-image"
        /></a>
        <div class="params">
          <div>
            <h3>Likes</h3>
            <p>${e.likes}</p>
          </div>
          <div>
            <h3>Views</h3>
            <p>${e.views}</p>
          </div>
          <div>
            <h3>Comments</h3>
            <p>${e.comments}</p>
          </div>
          <div>
            <h3>Downloads</h3>
            <p>${e.downloads}</p>
          </div>
        </div>
      </div>`).join("");t.insertAdjacentHTML("beforeend",o),new d(".gallery a").refresh()}const u=document.querySelector(".form"),l=document.querySelector(".gallery"),a=document.querySelector(".loader");u.addEventListener("submit",m);function m(n){n.preventDefault(),l.innerHTML="",a.style.display="inline-block";const t=u.elements.searchInput.value.trim();if(t===""){a.style.display="none",c.error({title:"Error",message:"Please enter word to search!",position:"topRight"});return}p(t).then(o=>{if(o.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(o,l)}).catch(o=>{console.error("Error:",o)}).finally(()=>{a.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
