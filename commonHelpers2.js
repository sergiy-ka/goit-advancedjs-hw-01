import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a=document.querySelector(".feedback-form"),o=a.querySelector(".feedback-form-email"),r=a.querySelector(".feedback-form-message"),s="feedback-form-state";a.addEventListener("input",l);a.addEventListener("submit",m);n();function l(t){const e={email:o.value,message:r.value};localStorage.setItem(s,JSON.stringify(e))}function m(t){if(t.preventDefault(),o.value===""||r.value.trim()==="")return alert("Fill please all fields");const e={email:o.value,message:r.value};console.log(e),localStorage.removeItem(s),a.reset()}function n(){const t=localStorage.getItem(s);if(t){const e=JSON.parse(t);o.value=e.email,r.value=e.message}}
//# sourceMappingURL=commonHelpers2.js.map
