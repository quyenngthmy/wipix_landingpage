/*! Name: WEB-Wipix ; Version-Deployment : v1.0; Version-Test: v1.0 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Wipix",[],e):"object"==typeof exports?exports.Wipix=e():t.Wipix=e()}(self,(()=>(()=>{"use strict";var t={d:(e,i)=>{for(var o in i)t.o(i,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:i[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{Accordion:()=>r,initAccordions:()=>a});const i=function(){function t(t,e){void 0===e&&(e=[]),this._eventType=t,this._eventFunctions=e}return t.prototype.init=function(){var t=this;this._eventFunctions.forEach((function(e){"undefined"!=typeof window&&window.addEventListener(t._eventType,e)}))},t}();var o=function(){return o=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},o.apply(this,arguments)},s={alwaysOpen:!1,activeClasses:"activeClasses",inactiveClasses:"inactiveClasses",onOpen:function(){},onClose:function(){},onToggle:function(){}},n=function(){function t(t,e){void 0===t&&(t=[]),void 0===e&&(e=s),this._items=t,this._options=o(o({},s),e),this._init()}return t.prototype._init=function(){var t=this;this._items.length&&this._items.map((function(e){e.active&&t.open(e.id),e.triggerEl.addEventListener("click",(function(){t.toggle(e.id)}))}))},t.prototype.getItem=function(t){return this._items.filter((function(e){return e.id===t}))[0]},t.prototype.open=function(t){var e,i,o=this,s=this.getItem(t);this._options.alwaysOpen||this._items.map((function(t){var e,i;t!==s&&((e=t.triggerEl.classList).remove.apply(e,o._options.activeClasses.split(" ")),(i=t.triggerEl.classList).add.apply(i,o._options.inactiveClasses.split(" ")),t.targetEl.style.maxHeight=null,t.triggerEl.setAttribute("aria-expanded","false"),t.active=!1,t.iconEl&&t.iconEl.classList.remove("rotate-180"))})),(e=s.triggerEl.classList).add.apply(e,this._options.activeClasses.split(" ")),(i=s.triggerEl.classList).remove.apply(i,this._options.inactiveClasses.split(" ")),s.triggerEl.setAttribute("aria-expanded","true"),s.targetEl.style.maxHeight=s.targetEl.scrollHeight+"px",s.active=!0,s.iconEl&&s.iconEl.classList.add("rotate-180"),this._options.onOpen(this,s)},t.prototype.toggle=function(t){var e=this.getItem(t);e.active?this.close(t):this.open(t),this._options.onToggle(this,e)},t.prototype.close=function(t){var e,i,o=this.getItem(t);(e=o.triggerEl.classList).remove.apply(e,this._options.activeClasses.split(" ")),(i=o.triggerEl.classList).add.apply(i,this._options.inactiveClasses.split(" ")),o.targetEl.style.maxHeight=null,o.triggerEl.setAttribute("aria-expanded","false"),o.active=!1,o.iconEl&&o.iconEl.classList.remove("rotate-180"),this._options.onClose(this,o)},t}();function a(){document.querySelectorAll("[data-accordion]").forEach((function(t){var e=t.getAttribute("data-accordion"),i=t.getAttribute("data-active-classes"),o=t.getAttribute("data-inactive-classes"),a=[];t.querySelectorAll("[data-accordion-target]").forEach((function(e){if(e.closest("[data-accordion]")===t){var i={id:e.getAttribute("data-accordion-target"),triggerEl:e,targetEl:document.querySelector(e.getAttribute("data-accordion-target")),iconEl:e.querySelector("[data-accordion-icon]"),active:"true"===e.getAttribute("aria-expanded")};a.push(i)}})),new n(a,{alwaysOpen:"open"===e,activeClasses:i||s.activeClasses,inactiveClasses:o||s.inactiveClasses})}))}"undefined"!=typeof window&&(window.Accordion=n);const r=n;return new i("load",[a]).init(),e})()));