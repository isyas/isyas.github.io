"use strict";var Model=function(){return{saveData:function(e){var t=JSON.stringify(e);console.log(t),localStorage.setItem("data",t)},getData:function(){var e=localStorage.getItem("data");if(console.log(e),null===e)return null;var t=JSON.parse(e);return console.log(t),t}}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(){var e=Model,t=e.getData();t||(t=[]),console.log(t),document.addEventListener("DOMContentLoaded",function(){s(),c(),o(),l()},!1);var n=document.getElementById("add-task-btn"),a=document.getElementById("task-text"),d=document.getElementById("main-contents"),s=function(){n.addEventListener("click",function(){var n=a.value;if(n){if(null===t){var d=[n];console.log(void 0===d?"undefined":_typeof(d)),e.saveData(d)}else t.push({text:n,done:!1}),e.saveData(t);l(),a.value="";var s=document.getElementById("add-task-modal"),c=document.getElementsByClassName("modal-bg");s.classList.add("hide"),c[0].classList.add("hide")}},!1)},l=function(){d.innerHTML="",t.forEach(function(e){var n=t.indexOf(e)+1,a=document.createElement("ul");a.classList.add("task-cell","task-tag");var s=document.createElement("li");s.classList.add("task-check");var l=document.createElement("li");l.classList.add("task-name"),l.textContent=e.text;var c=document.createElement("li");c.classList.add("task-date");var o=document.createElement("input");o.type="checkbox",o.id="task-check-"+n,o.addEventListener("change",function(e){var t=e.target.id.substr(11);document.getElementById("task-finish-"+t).classList.remove("hide")}),s.appendChild(o),a.appendChild(s),a.appendChild(l),a.appendChild(c);var i=document.createElement("ul");i.classList.add("task-cell","task-tag","hide"),i.id="task-finish-"+n;var m=document.createElement("li");m.classList.add("task-done");var r=document.createElement("button");r.classList.add("cancel-btn"),r.textContent="キャンセル";var u=document.createElement("button");u.classList.add("done-btn"),u.textContent="タスク完了",m.appendChild(r),m.appendChild(u),i.appendChild(m);var v=document.createElement("div");v.classList.add("task-cell-bb"),v.appendChild(a),v.appendChild(i),d.appendChild(v)})},c=function(){var e=document.getElementById("all-task"),t=document.getElementById("all-task-flame"),n=document.getElementById("go-to-index");e.addEventListener("click",function(){t.classList.add("show-flame")},!1),n.addEventListener("click",function(){t.classList.remove("show-flame")},!1)},o=function(){var e=document.getElementById("add-btn"),t=document.getElementById("add-task-modal"),n=document.getElementsByClassName("modal-bg"),a=document.getElementById("close-btn");e.addEventListener("click",function(){t.classList.remove("hide"),n[0].classList.remove("hide")},!1),n[0].addEventListener("click",function(){this.classList.contains("hide")||(t.classList.add("hide"),n[0].classList.add("hide"))},!1),a.addEventListener("click",function(){t.classList.add("hide"),n[0].classList.add("hide")},!1)}}();