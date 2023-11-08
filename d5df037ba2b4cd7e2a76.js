/*! Name: WEB-Wipix ; Version-Deployment : v1.0; Version-Test: v1.0 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Wipix",[],e):"object"==typeof exports?exports.Wipix=e():t.Wipix=e()}(self,(()=>(()=>{"use strict";var t={d:(e,i)=>{for(var o in i)t.o(i,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:i[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{Tabs:()=>a,initTabs:()=>r});const i=function(){function t(t,e){void 0===e&&(e=[]),this._eventType=t,this._eventFunctions=e}return t.prototype.init=function(){var t=this;this._eventFunctions.forEach((function(e){"undefined"!=typeof window&&window.addEventListener(t._eventType,e)}))},t}();var o=function(){return o=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},o.apply(this,arguments)},n={defaultTabId:void 0,activeClasses:"active",onShow:function(){}},s=function(){function t(t,e){void 0===t&&(t=[]),void 0===e&&(e=n),this._items=t,this._activeTab=e?this.getTab(e.defaultTabId):null,this._options=o(o({},n),e),this._init()}return t.prototype._init=function(){var t=this;this._items.length&&(this._activeTab||this._setActiveTab(this._items[0]),this.show(this._activeTab.id,!0),this._items.map((function(e){e.triggerEl.addEventListener("click",(function(){t.show(e.id)}))})))},t.prototype.getActiveTab=function(){return this._activeTab},t.prototype._setActiveTab=function(t){this._activeTab=t},t.prototype.getTab=function(t){return this._items.filter((function(e){return e.id===t}))[0]},t.prototype.show=function(t,e){var i,o=this;void 0===e&&(e=!1);var n,s=this.getTab(t),r=s.triggerEl.parentElement;r.querySelector("[aria-selected=true]")&&(n=r.querySelector("[aria-selected=true]").getAttribute("wp-tabs-target")),(s!==this._activeTab||e)&&(n&&this._items.map((function(t){var e;t.id===n&&((e=t.triggerEl.classList).remove.apply(e,o._options.activeClasses.split(" ")),t.targetEl.forEach((function(t){var e;t.classList.add("hidden"),(e=t.classList).remove.apply(e,o._options.activeClasses.split(" "))})),t.triggerEl.setAttribute("aria-selected","false"))})),(i=s.triggerEl.classList).add.apply(i,this._options.activeClasses.split(" ")),s.triggerEl.setAttribute("aria-selected","true"),s.targetEl.forEach((function(t){var e;t.classList.remove("hidden"),(e=t.classList).add.apply(e,o._options.activeClasses.split(" "))})),this._setActiveTab(s),this._options.onShow&&this._options.onShow(this,s))},t}();function r(){document.querySelectorAll("[wp-tabs-toggle]").forEach((function(t){var e=[],i=void 0;t.querySelectorAll('[role="tab"]').forEach((function(o){var n="true"===o.getAttribute("aria-selected"),s={id:o.getAttribute("wp-tabs-target"),triggerEl:o,targetEl:t.querySelectorAll('[wp-tabs-content="'.concat(o.getAttribute("wp-tabs-target"),'"]'))};e.push(s),n&&(i=s.id)})),new s(e,{defaultTabId:i})}))}"undefined"!=typeof window&&(window.Tabs=s);const a=s;return new i("load",[r]).init(),e})()));