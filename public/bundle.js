(()=>{"use strict";var e={419:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.formData=void 0,t.formData=e=>{const t=e.querySelectorAll("input");let r={};return t.forEach((e=>{r[e.id]=e.value})),r}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}(()=>{const e=r(419),t=document.querySelector("form");t.addEventListener("submit",(r=>{r.preventDefault();const o=(0,e.formData)(t);console.log(o)}))})()})();