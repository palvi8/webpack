(()=>{"use strict";function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const n=function(){function n(){var e,t;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),t="hello-world-button",(e="helloWorldButton")in this?Object.defineProperty(this,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[e]=t}var t,r;return t=n,(r=[{key:"render",value:function(){var e=document.createElement("button");e.innerText="Hello World",e.classList.add(this.helloWorldButton);var n=document.querySelector("body");e.onclick=function(){var e=document.createElement("p");e.classList.add("hello-world-text"),e.innerText="Hello World",n.appendChild(e)},n.appendChild(e)}}])&&e(t.prototype,r),n}();function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r;return n=e,(r=[{key:"render",value:function(){var e=document.createElement("h1"),n=document.querySelector("body");e.innerText="Webpack is Awesome",n.appendChild(e)}}])&&t(n.prototype,r),e}()),o=new n;r.render(),o.render(),console.log("Production mode")})();