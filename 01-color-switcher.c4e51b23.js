const e=document.querySelector("body"),t=document.querySelector("[data-start]"),l=document.querySelector("[data-stop]");let a="null";l.disabled=!0,l.style.width="70px",l.style.height="40px",l.style.textTransform="uppercase",t.style.width="70px",t.style.height="40px",t.style.textTransform="uppercase",t.style.marginRight="10px";t.addEventListener("click",(()=>{a=setInterval((()=>{console.log("start"),e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0,l.disabled=!1})),l.addEventListener("click",(()=>{clearInterval(a),console.log("ciao"),t.disabled=!1,l.disabled=!0}));
//# sourceMappingURL=01-color-switcher.c4e51b23.js.map
