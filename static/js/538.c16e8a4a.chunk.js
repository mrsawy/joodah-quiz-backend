"use strict";(self.webpackChunkquiz_app=self.webpackChunkquiz_app||[]).push([[538],{8538:(e,n,o)=>{o.r(n),o.d(n,{default:()=>L});var r=o(1652),t=o(6279),s=o(6688),i=o(1844),l=o(8873),a=o(9586),c=o(7578),u=o(3302),d=o(991),p=o(8818),x=o(8608),h=o(9760),m=o(4378),f=o(9899),y=o(9067),g=o(6014),j=o(3514),A=o(1234);function v(e){return(0,A.Ay)("MuiLink",e)}const b=(0,j.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var w=o(5028),k=o(9448);const C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},B=e=>{let{theme:n,ownerState:o}=e;const r=(e=>C[e]||e)(o.color),t=(0,w.Yn)(n,`palette.${r}`,!1)||o.color,s=(0,w.Yn)(n,`palette.${r}Channel`);return"vars"in n&&s?`rgba(${s} / 0.4)`:(0,k.X4)(t,.4)};var S=o(2882);const G=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],F=(0,m.Ay)(l.A,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,n[`underline${(0,h.A)(o.underline)}`],"button"===o.component&&n.button]}})((e=>{let{theme:n,ownerState:o}=e;return(0,d.A)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&(0,d.A)({textDecoration:"underline"},"inherit"!==o.color&&{textDecorationColor:B({theme:n,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===o.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${b.focusVisible}`]:{outline:"auto"}})})),M=c.forwardRef((function(e,n){const o=(0,f.b)({props:e,name:"MuiLink"}),{className:r,color:t="primary",component:s="a",onBlur:i,onFocus:l,TypographyClasses:a,underline:m="always",variant:j="inherit",sx:A}=o,b=(0,u.A)(o,G),{isFocusVisibleRef:w,onBlur:k,onFocus:B,ref:M}=(0,y.A)(),[R,D]=c.useState(!1),V=(0,g.A)(n,M),z=(0,d.A)({},o,{color:t,component:s,focusVisible:R,underline:m,variant:j}),L=(e=>{const{classes:n,component:o,focusVisible:r,underline:t}=e,s={root:["root",`underline${(0,h.A)(t)}`,"button"===o&&"button",r&&"focusVisible"]};return(0,x.A)(s,v,n)})(z);return(0,S.jsx)(F,(0,d.A)({color:t,className:(0,p.A)(L.root,r),classes:a,component:s,onBlur:e=>{k(e),!1===w.current&&D(!1),i&&i(e)},onFocus:e=>{B(e),!0===w.current&&D(!0),l&&l(e)},ref:V,ownerState:z,variant:j,sx:[...Object.keys(C).includes(t)?[]:[{color:t}],...Array.isArray(A)?A:[A]]},b))}));var R=o(557);const D=(0,c.forwardRef)(((e,n)=>{let{disabledLink:o=!1,sx:r,...s}=e;const i=(0,R.A)(),l=i.palette.primary.light,c=i.palette.primary.main,u=i.palette.primary.dark,d=(0,S.jsx)(t.A,{ref:n,component:"div",sx:{width:40,height:40,display:"inline-flex",...r},...s,children:(0,S.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",children:[(0,S.jsxs)("defs",{children:[(0,S.jsxs)("linearGradient",{id:"BG1",x1:"100%",x2:"50%",y1:"9.946%",y2:"50%",children:[(0,S.jsx)("stop",{offset:"0%",stopColor:u}),(0,S.jsx)("stop",{offset:"100%",stopColor:c})]}),(0,S.jsxs)("linearGradient",{id:"BG2",x1:"50%",x2:"50%",y1:"0%",y2:"100%",children:[(0,S.jsx)("stop",{offset:"0%",stopColor:l}),(0,S.jsx)("stop",{offset:"100%",stopColor:c})]}),(0,S.jsxs)("linearGradient",{id:"BG3",x1:"50%",x2:"50%",y1:"0%",y2:"100%",children:[(0,S.jsx)("stop",{offset:"0%",stopColor:l}),(0,S.jsx)("stop",{offset:"100%",stopColor:c})]})]}),(0,S.jsxs)("g",{fill:c,fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:[(0,S.jsx)("path",{fill:"url(#BG1)",d:"M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"}),(0,S.jsx)("path",{fill:"url(#BG2)",d:"M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"}),(0,S.jsx)("path",{fill:"url(#BG3)",d:"M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"})]})]})});return o?d:(0,S.jsx)(M,{component:a.W,href:"/",sx:{display:"contents"},children:d})})),V=D;function z(){const e=(0,S.jsx)(t.A,{component:"header",sx:{top:0,left:0,width:1,lineHeight:0,position:"fixed",p:e=>({xs:e.spacing(3,3,0),sm:e.spacing(5,5,0)})},children:(0,S.jsx)(V,{})});return(0,S.jsxs)(S.Fragment,{children:[e,(0,S.jsx)(i.A,{children:(0,S.jsxs)(t.A,{sx:{py:12,maxWidth:480,mx:"auto",display:"flex",minHeight:"100vh",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center"},children:[(0,S.jsx)(l.A,{variant:"h3",sx:{mb:3},children:"Sorry, page not found!"}),(0,S.jsx)(l.A,{sx:{color:"text.secondary"},children:"Sorry, we couldn\u2019t find the page you\u2019re looking for. Perhaps you\u2019ve mistyped the URL? Be sure to check your spelling."}),(0,S.jsx)(t.A,{component:"img",src:"/assets/illustrations/illustration_404.svg",sx:{mx:"auto",height:260,my:{xs:5,sm:10}}}),(0,S.jsx)(s.A,{href:"/",size:"large",variant:"contained",component:a.W,children:"Go to Home"})]})})]})}function L(){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(r.mg,{children:(0,S.jsx)("title",{children:" 404 Page Not Found "})}),(0,S.jsx)(z,{})]})}}}]);
//# sourceMappingURL=538.c16e8a4a.chunk.js.map