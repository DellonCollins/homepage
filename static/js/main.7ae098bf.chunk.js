(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,function(e,t,n){e.exports=n(51)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(14),o=n.n(r),c=(n(31),n(32),n(33),n(12),n(2)),l=n(10),s=n(16),u=n(3),m=(n(38),n(24)),d=n.n(m);function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];this.p=e,this.x=t,this.y=n,this.mass=a,this.radius=a/2,this.velocity={x:0,y:0},this.isVisible=i}h.prototype.draw=function(){this.isVisible&&(this.p.fill("#353535"),this.p.noStroke(),this.p.ellipse(this.x,this.y,this.mass),this.x+=this.velocity.x,this.y+=this.velocity.y,this.velocity.y>3&&(this.velocity.y=3),this.velocity.y<-3&&(this.velocity.y=-3),this.velocity.x>3&&(this.velocity.x=3),this.velocity.x<-3&&(this.velocity.x=-3))},h.prototype.distance=function(e){try{var t=this.x-e.x,n=this.y-e.y;return t*=t,n*=n,Math.sqrt(t+n)}catch(a){return console.log(e,this),1e3}};var f=10,v=30;function p(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;this.p=e,this.numPoints=n,this.dimensions={x:a,y:i},this.points=[],this.it=0,this.initialize=function(){t.points=[];for(var e=0;e<n;e++){var a=t.p.random(f,v),i=t.p.random(0+a,t.dimensions.x-a),r=t.p.random(0+a,t.dimensions.y-a);t.points.push(new h(t.p,i,r,a))}},this.resize=function(e,n){e&&(t.dimensions.x=e),n&&(t.dimensions.y=n)},this.draw=function(e){var n=t.applyForces(e);t.drawLines(n),t.stayInBounds(),t.drawPoints(),t.it++},this.drawPoints=function(){t.points.forEach(function(e){return e.draw()})},this.applyForces=function(e){var n=[];return t.points.forEach(function(a,i){for(var r=i+1;r<t.points.length;r++){var o=t.points[r],c={x:o.x-a.x,y:o.y-a.y,dist:Math.pow(Math.pow(o.x-a.x,2)+Math.pow(o.y-a.y,2),1.2)};o.velocity.x+=c.x/c.dist,o.velocity.y+=c.y/c.dist,a.velocity.x-=c.x/c.dist,a.velocity.y-=c.y/c.dist,a.distance(o)<100&&n.push({start:{x:a.x,y:a.y,radius:a.radius},end:{x:o.x,y:o.y,radius:o.radius}})}if(e){var l=t.p.mouseX,s=t.p.mouseY;if(!l||!s)return;var u={x:l-a.x,y:s-a.y,dist:Math.pow(Math.pow(l-a.x,2)+Math.pow(s-a.y,2),.85)};a.velocity.x+=u.x/u.dist,a.velocity.y+=u.y/u.dist}}),n},this.drawLines=function(e){e.forEach(function(e){var n=e.start.x,a=e.start.y,i=e.end.x,r=e.end.y;t.p.stroke("#333333"),t.p.strokeWeight(2),t.p.line(n,a,i,r)})},this.stayInBounds=function(){t.points.forEach(function(e){e.x<0+e.radius?(e.x=0+e.radius,e.velocity.x*=-.9):e.x>t.dimensions.x-e.radius&&(e.x=t.dimensions.x-e.radius,e.velocity.x*=-.9),e.y<0+e.radius?(e.y=0+e.radius,e.velocity.y*=-.9):e.y>t.dimensions.y-e.radius&&(e.y=t.dimensions.y-e.radius,e.velocity.y*=-.9)})}}function y(e){var t,n=!1,a=400,i=400;e.setup=function(){e.createCanvas(i,a),(t=new p(e,20,i,a)).initialize()},e.draw=function(){e.clear(),t.draw(n)},e.myCustomRedrawAccordingToNewPropsHandler=function(r){(r.width||r.height)&&(r.width&&(i=r.width),r.height&&(a=r.height),e.resizeCanvas(i,a),t&&t.resize(i,a)),r.mouseOver!==n&&(n=r.mouseOver)}}n(40);function E(){var e=Object(a.useRef)(null),t=(Object(a.useRef)(!1),Object(a.useState)()),n=Object(u.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(),l=Object(u.a)(c,2),s=l[0],m=l[1],h=Object(a.useState)(!1),f=Object(u.a)(h,2),v=f[0],p=f[1];function E(){return document.getElementsByClassName("page-container")[0]}var x=function(){var e=E();o(e.clientWidth),m(e.clientHeight)};return window.onresize=function(){x()},Object(a.useEffect)(function(){return x(),E().onmouseenter=function(){p(!0)},E().onmouseleave=function(){p(!1)},function(){}}),i.a.createElement("div",{className:"constellation"},i.a.createElement(d.a,{ref:e,sketch:y,width:r,height:s,mouseOver:v}))}n(41);function x(){return i.a.createElement("svg",{height:"0",width:"0"},i.a.createElement("defs",null,i.a.createElement("clipPath",{clipPathUnits:"objectBoundingBox",id:"sector"},i.a.createElement("path",{fill:"none",stroke:"#111",strokeWidth:"10",className:"sector",d:" \r M 0.7, 0.5 \r l 0.3, 0 \r A 0.5,0.5 0 0,0 0.5,0 \r l 0, 0.3\r A 0.2,0.2 0 0,1 0.7,0.5 \r z"}))))}n(42);function b(){return i.a.createElement("div",{className:"menubar-container"},i.a.createElement("div",{className:"menubar"}),i.a.createElement("div",{className:"menubar"}),i.a.createElement("div",{className:"menubar"}))}var g=function(e){return{"--n":e}};var w=function(e){var t=e.onRedirect,n=i.a.useState(!1),a=Object(u.a)(n,2),r=a[0],o=a[1],c=i.a.useState([{direction:"top",text:"About",path:"/about",selected:!1},{direction:"right",text:"Skills",path:"/skills",selected:!1},{direction:"bottom",text:"Contact",path:"/contact",selected:!1},{direction:"left",text:"Gallery",path:"/gallery",selected:!1}]),l=Object(u.a)(c,2),s=l[0],m=l[1],d=function(){return r?" active":" "},h=function(e){m(s.map(function(t){return t.selected=e===t.path,t}))};return i.a.createElement(i.a.Fragment,null,i.a.createElement(x,null),i.a.createElement("ul",{className:"menu"+d()},s.map(function(e,n){var a="";return r&&(a=e.text),i.a.createElement("li",{id:n,className:e.direction+" menu-item "+(e.selected?"selected":""),key:n,style:g(n),onClick:function(){return h(e.path)},onAnimationStart:function(n){return a=e.path,void t(a);var a}},i.a.createElement("a",null,i.a.createElement("span",{className:"icon"},a)))}),i.a.createElement("div",{className:"button"+d(),onClick:function(){m(s.map(function(e){return e.selected=!1,e})),o(!r)}},i.a.createElement(b,null))))};n(43);function N(e){var t=e.text;return i.a.createElement(i.a.Fragment,null,t.split("").map(function(e,t){return i.a.createElement("span",{key:t,style:{"--n":"".concat(t)}},e)}))}function k(e){var t=e.value;return i.a.createElement("div",{className:"credentials"},t.map(function(e){return i.a.createElement("div",{className:"cred spanned-text ",key:e.text},i.a.createElement(N,{text:e.text}))}))}var O="Dellon",j="Dellon Collins";function S(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],r=t[1],o=function(){n!==c()&&r(c())},c=function(){return window.innerWidth>600?j:O};return window.addEventListener("resize",function(){o()}),Object(a.useEffect)(function(){o()}),i.a.createElement("div",{className:"salutation"},i.a.createElement("div",{className:"greeting"},"Hi, my name's"),i.a.createElement("div",{className:"name"},n),i.a.createElement("div",{className:"pronun"},"pronunciation : [duh-lawn]"))}var C=Object(l.b)(function(e){return{credentials:e.credentials}})(Object(c.g)(function(e){var t=e.history,n=e.credentials,r=Object(a.useState)(null),o=Object(u.a)(r,2),c=o[0],l=o[1],s=Object(a.useState)(!1),m=Object(u.a)(s,2),d=m[0],h=m[1];return Object(a.useEffect)(function(){return function(){console.log("home is dead")}}),i.a.createElement(i.a.Fragment,null,i.a.createElement(E,null),i.a.createElement("div",{id:"home",className:d?"home exit":"home",onAnimationEnd:function(e){"home"===e.target.id&&c&&t.push(c)}},i.a.createElement(S,null),i.a.createElement(w,{onRedirect:function(e){h(!0),l(e)}}),i.a.createElement(k,{value:n})))}));n(45),n(46);function I(e){return i.a.createElement("div",{className:"grid"},e.children)}function M(e){var t=e.classes,n=e.text;return i.a.createElement("div",{className:(t&&t.forEach(function(e){"spanned-text".concat(" ".concat(e))}),"spanned-text"),style:{position:"relative"}},i.a.createElement(N,{text:n}))}var A=Object(l.b)(function(e){return{aboutInfo:e.aboutInfo}})(function(e){var t=e.aboutInfo;return i.a.createElement("div",{className:"about"},i.a.createElement("div",{className:"title"}," ",i.a.createElement(M,{text:t.title.text})," "),i.a.createElement("div",{className:"grid-wrapper"},i.a.createElement(I,null,i.a.createElement("div",null,i.a.createElement("div",{className:"body"},t.facts.map(function(e,t){return i.a.createElement("p",{key:t},e)}))),i.a.createElement("div",null,i.a.createElement("div",{className:"body"},i.a.createElement("p",null,"Grid 2"))))))});n(47);function B(){return i.a.createElement("div",{className:"skills"},"Skills")}n(48);function z(){return i.a.createElement("div",{className:"gallery"},"Gallery")}n(49);function F(){return i.a.createElement("div",{className:"contact"},"Contact")}var T={credentials:[{text:"Design"},{text:"Functionality"},{text:"Stonks"}],pages:[{text:"Home",path:"/home",component:C},{text:"About",path:"/about",component:A},{text:"Skills",path:"/skills",component:B},{text:"Gallery",path:"/gallery",component:z},{text:"Contact",path:"/contact",component:F}],name:{short:"Dellon",full:"Dellon Collins"},logoText:".dc()",aboutInfo:{title:{text:"About Me"},facts:['"Things I like and things I hate\u2026 I don\'t feel like telling you that. \n            My dreams for the future\u2026 never really thought about it. As for my hobbies\u2026 I have lots of hobbies."',"I was born in Connecticut but I've spent most of my life in Ohio. \n            I graduated from The Ohio State University in 2018 with a degree in Computer Science & Engineering.","My freetime is mostly taken up by making music, reading, and Super Smash Bros. Melee. I main Bowser,\n            Ganon, and Falcon because I'd ruin the game for everyone else if I actually tried."]},skills:[],contact:{email:{personal:"collins.dellon@gmail.com"}}};var P=function(e){return{store:e}},W=Object(s.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T;return(arguments.length>1?arguments[1]:void 0).type,e}),D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P;return Object(l.b)(t)(e)};var G=D(function(e){var t=e.logoText;return i.a.createElement("div",{className:"logo"},i.a.createElement("span",null),i.a.createElement("span",null,t))},function(e){return{logoText:e.logoText}}),R=n(11);function H(e){return i.a.createElement(R.b,{to:e.route},i.a.createElement("div",{className:"nav-link "+function(){return""},onClick:e.onClick},e.text))}function L(e){var t=e.toggleActivity;return i.a.createElement("div",{className:"menu-button",onClick:t},i.a.createElement("div",{className:"bar"}),i.a.createElement("div",{className:"bar"}),i.a.createElement("div",{className:"bar"}))}var J=D(function(e){var t=e.links,n=Object(a.useState)(!1),r=Object(u.a)(n,2),o=r[0],c=r[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"nav-links"+(o?" active":"")},t.map(function(e){return i.a.createElement(H,{key:e.text,text:e.text,route:e.path,onClick:function(){c(!1)}})})),i.a.createElement(L,{toggleActivity:function(){return c(!o)}}))},function(e){return{links:e.pages}});var U=Object(c.g)(function(e){var t=function(){return e.location.pathname.match("/home.*")};return i.a.createElement("nav",{className:t()?"navbar transparent":"navbar"},i.a.createElement(G,null),t()?null:i.a.createElement(J,null))});n(50);function V(){return i.a.createElement("div",{className:"page-container"},i.a.createElement(c.d,null,i.a.createElement(c.b,{path:"/home",component:C}),i.a.createElement(c.b,{path:"/about",component:A}),i.a.createElement(c.b,{path:"/skills",component:B}),i.a.createElement(c.b,{path:"/gallery",component:z}),i.a.createElement(c.b,{path:"/contact",component:F}),i.a.createElement(c.a,{to:"/home"})))}function q(){return i.a.createElement("div",{className:"container"},i.a.createElement(U,null),i.a.createElement(V,null))}var X=function(){return i.a.createElement(R.a,null,i.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(l.a,{store:W},i.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[26,1,2]]]);
//# sourceMappingURL=main.7ae098bf.chunk.js.map