(this.webpackJsonpskydia=this.webpackJsonpskydia||[]).push([[0],{220:function(e,a,t){},226:function(e,a,t){},227:function(e,a,t){},228:function(e,a,t){},236:function(e,a,t){},238:function(e,a,t){"use strict";t.r(a);var s,c,n=t(0),r=t(71),i=t.n(r),l=(t(220),t(66)),o=t(5),j=function(){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("h1",{"data-aos":"fade-down","data-aos-easing":"linear",children:"SKYDIA"}),Object(o.jsx)("p",{"data-aos":"zoom-out-up",children:"Weather App"})]}),Object(o.jsxs)("div",{className:"bottom-wrapper",children:[Object(o.jsx)(l.b,{to:"/search",className:"enter-wrapper","data-aos":"zoom-in",children:Object(o.jsx)("button",{children:"Enter"})}),Object(o.jsx)("small",{"data-aos":"zoom-out-down",children:"created with \u262e\ufe0f & \u2764\ufe0f"})]})]})},d=t.p+"static/media/sky.0f7d682f.mp4",m=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,className:"video-bg",children:Object(o.jsx)("source",{src:d,type:"video/mp4"})})})},h=(t(226),function(){return Object(o.jsxs)("div",{className:"main-enter",children:[Object(o.jsx)(m,{}),Object(o.jsx)(j,{})]})}),p=(t(227),t(195)),u=t(196),b=t(202),x=t(201),O=t(45),f=(t(228),function(e){Object(b.a)(t,e);var a=Object(x.a)(t);function t(){return Object(p.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"nav-container",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/",className:"skydia","data-aos":"zoom-out-right",children:"SKYDIA"})}),"skydia/saved"===window.location.pathname?Object(o.jsx)("li",{className:"right","data-aos":"zoom-out-left",children:Object(o.jsxs)(l.b,{to:"/search",children:[Object(o.jsx)(O.a,{name:"share",size:"small",color:"black"}),"Search"]})}):Object(o.jsx)("li",{className:"right","data-aos":"zoom-out-left",children:Object(o.jsxs)(l.b,{to:"/saved",children:[Object(o.jsx)(O.a,{name:"heart",size:"small",color:"red"}),"My Favourites"]})})]})})}}]),t}(n.Component)),v=t(108),w=t.n(v),g=t(164),y=t(128),k=t(286),N=t(140),z=t(131),S=t(119),C={name:"",sys:{country:""},main:{temp:"",temp_max:"",temp_min:"",feels_like:"",humidity:""},wind:{speed:""}},_=!1,I="",D="",F=function(){var e=Object(n.useState)(C),a=Object(y.a)(e,2),t=a[0],s=a[1],c=[],r=localStorage.getItem("fav-city"),i=JSON.parse(r);null!==i&&i.forEach((function(e){var a={text:e,value:e,key:e};c.push(a)}));var l=function(){var e=Object(g.a)(w.a.mark((function e(a,t){var c,n,r,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.value,e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(c,"&units=metric&appid=").concat("4c64699c4104231e444899cfd67fa821"));case 3:if((n=e.sent).ok){e.next=8;break}console.log(n),e.next=15;break;case 8:return _=!0,e.next=11,n.json();case 11:r=e.sent,(i=r).main.feels_like<-10?(I="It's freezing grab a hot chocolate!",D="https://c4.wallpaperflare.com/wallpaper/364/79/684/snow-8k-tree-forest-wallpaper-preview.jpg"):i.main.feels_like>=-10&&i.main.feels_like<=5?(I="It's pretty cold out there, don't forget your jacket!",D="https://c4.wallpaperflare.com/wallpaper/350/698/382/nature-landscapes-trees-forests-autumn-fall-seasons-winter-snow-frost-shore-lakes-grass-leaves-cold-high-resolution-images-wallpaper-preview.jpg"):i.main.feels_like>5&&i.main.feels_like<20?(I="It's slightly chilly out there!",D="https://hdfreewallpaper.net/wp-content/uploads/2015/08/nice-summer-season-hd-wallpapers-free.jpg"):i.main.feels_like>=20&&i.main.feels_like<=30?(I="Enjoy the great weather!",D="https://p4.wallpaperbetter.com/wallpaper/1021/17/157/summer-scenery-wallpaper-preview.jpg"):(I="It's pretty hot, don't forget your sunglasses!",D="https://www.teahub.io/photos/full/288-2884225_temperature-hot-weather.jpg"),s(i);case 15:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"fav-wrapper",children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{"data-aos":"zoom-in-up",children:[Object(o.jsx)(O.a,{name:"heart",size:"small"}),"Favourite Cities",Object(o.jsx)(O.a,{name:"heart",size:"small"})]}),Object(o.jsx)("div",{className:"city-select-container","data-aos":"zoom-out-down",children:Object(o.jsx)(k.a,{placeholder:"Select a city",fluid:!0,search:!0,selection:!0,value:!0,options:c,onChange:l,className:"city-select"})}),_&&""!==t.name?Object(o.jsx)("div",{className:"fav-wrapper",children:Object(o.jsxs)("div",{className:"fav-weather-data","data-aos":"flip-down",children:[Object(o.jsxs)(N.a,{fluid:!0,children:[Object(o.jsx)(z.a,{src:D,wrapped:!0,ui:!1,"data-aos":"zoom-in"}),Object(o.jsxs)(N.a.Content,{children:[Object(o.jsxs)(N.a.Header,{className:"fav-city-title","data-aos":"fade-down-right",children:[Object(o.jsx)(O.a,{name:"map marker alternate",size:"small"}),t.name," ",t.sys.country]}),Object(o.jsx)(N.a.Meta,{children:Object(o.jsx)("span",{className:"date","data-aos":"fade-up-left",children:I})}),Object(o.jsxs)(N.a.Description,{children:[Object(o.jsxs)("p",{"data-aos":"fade-up-right",children:[Object(o.jsx)(O.a,{name:"circle outline",size:"tiny"}),"Current Temp: ",t.main.temp,Object(o.jsx)("sup",{children:"\u2103"})]}),Object(o.jsxs)("p",{"data-aos":"fade-down-left",children:[Object(o.jsx)(O.a,{name:"sun",size:"small"}),"Max Temp: ",t.main.temp_max,Object(o.jsx)("sup",{children:"\u2103"})]}),Object(o.jsxs)("p",{"data-aos":"fade-up-right",children:[Object(o.jsx)(O.a,{name:"snowflake",size:"small"}),"Min Temp: ",t.main.temp_min,Object(o.jsx)("sup",{children:"\u2103"})]}),Object(o.jsxs)("p",{"data-aos":"fade-down-left",children:[Object(o.jsx)(O.a,{name:"circle outline",size:"tiny"}),"Feels Like: ",t.main.feels_like,Object(o.jsx)("sup",{children:"\u2103"})]}),Object(o.jsxs)("p",{"data-aos":"fade-down-right",children:[Object(o.jsx)(O.a,{name:"rain",size:"small"}),"Humidity: ",t.main.humidity,"%"]}),Object(o.jsxs)("p",{"data-aos":"fade-up-left",children:[Object(o.jsx)(O.a,{name:"leaf",size:"small"}),"Wind Speed: ",t.wind.speed,"m/s"]})]})]}),Object(o.jsx)(N.a.Content,{extra:!0,children:Object(o.jsxs)(S.a,{fluid:!0,color:"red",icon:!0,onClick:function(){alert("".concat(t.name," has been removed from favourites!")),i=i.filter((function(e){return e!=="".concat(t.name)})),c.length=0,i.forEach((function(e){var a={text:e,value:e,key:e};c.push(a)})),localStorage.setItem("fav-city",JSON.stringify(i)),0===i.length&&(_=!1)},"data-aos":"fade-down-right",children:[Object(o.jsx)(O.a,{name:"trash"}),"Delete City"]})})]}),Object(o.jsx)("small",{"data-aos":"zoom-in",children:Object(o.jsx)("a",{href:"https://www.accuweather.com/en/search-locations?query=".concat(t.name),target:"_blank",rel:"noreferrer",children:"Click for more information"})})]})}):Object(o.jsx)(o.Fragment,{})]})})},T=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(f,{}),Object(o.jsx)("div",{className:"favourite-cities-container",children:Object(o.jsx)(F,{})})]})},J=t(284),A=t(288),E=t(285),M=t(173),W=t(127),q=t(198),H=[],K=function(e){var a,t=e.data;if(s=localStorage.getItem("fav-city"),c=JSON.parse(s),H=[],null!==s)for(var n=0;n<c.length;n++)H.push(c[n]);return null===t?null:(a=t.main.temp<=0?"Dont't forget to wear a jacket\ud83e\udde5":t.main.temp>0&&t.main.temp<=25?"Enjoy the great weather\ud83c\udfd6\ufe0f":"Don't forget your sunglasses\ud83d\udd76\ufe0f",Object(o.jsxs)("div",{className:"weather-container",children:[Object(o.jsxs)("h1",{"data-aos":"fade-up-right",children:[Object(o.jsx)(O.a,{name:"map marker alternate",size:"tiny"}),t.name,Object(o.jsxs)("span",{children:[" ",t.sys.country]})]}),Object(o.jsx)("div",{className:"caret-container","data-aos":"fade-up","data-aos-duration":"6000",children:Object(o.jsx)(O.a,{name:"caret down",className:"caret",size:"big"})}),Object(o.jsx)("div",{className:"fav-button","data-aos":"fade-down",children:Object(o.jsxs)("button",{className:"ui red big button",onClick:function(){return e=t.name,void(null!==c&&c.includes(e)||H.includes(e)?Object(M.toast)({type:"warning",icon:"exclamation triangle",title:"Already have that city",description:"Try a different city",animation:"tada",time:2e3}):(H.push(e),localStorage.setItem("fav-city",JSON.stringify(H)),Object(M.toast)({type:"error",icon:"heart",title:"Added to Favourites",description:"".concat(e," has been added your favourites!"),animation:"fly down",time:2e3})));var e},children:[Object(o.jsx)(O.a,{name:"heart",size:"small"})," Save to Favourites"]})}),Object(o.jsxs)("div",{className:"current-weather","data-aos":"flip-up",children:[Object(o.jsx)("div",{className:"ui red fluid card",children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsxs)(W.a,{as:"span",color:"red",ribbon:!0,children:[Object(o.jsx)(O.a,{name:"map pin",size:"small"}),t.name]}),Object(o.jsx)("div",{className:"weather-data",children:Object(o.jsx)(q.a,{stackable:!0,textAlign:"center",children:Object(o.jsxs)(q.a.Row,{columns:2,children:[Object(o.jsxs)(q.a.Column,{children:[Object(o.jsxs)("p",{"data-aos":"fade-up-right",children:[Object(o.jsx)(O.a,{name:"circle outline",size:"tiny"}),"Current Temp: ",t.main.temp,Object(o.jsx)("sup",{children:"\u2103"})]}),Object(o.jsxs)("p",{"data-aos":"fade-left",children:[Object(o.jsx)(O.a,{name:"sun",size:"small"}),"Max Temp: ",t.main.temp_max,Object(o.jsx)("sup",{children:"\u2103"})]}),Object(o.jsxs)("p",{"data-aos":"fade-up-right",children:[Object(o.jsx)(O.a,{name:"snowflake",size:"small"}),"Min Temp: ",t.main.temp_min,Object(o.jsx)("sup",{children:"\u2103"})]}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{className:"details","data-aos":"fade-up-left",children:["Weather Description: ",t.weather[0].description,Object(o.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,".png"),width:"50",height:"50",alt:"logo"})]})]}),Object(o.jsxs)(q.a.Column,{children:[Object(o.jsxs)("p",{"data-aos":"fade-right",children:[Object(o.jsx)(O.a,{name:"circle outline",size:"tiny"}),"Feels Like: ",t.main.feels_like,Object(o.jsx)("sup",{children:"\u2103"})]}),Object(o.jsxs)("p",{"data-aos":"fade-up-left",children:[Object(o.jsx)(O.a,{name:"rain",size:"small"}),"Humidity: ",t.main.humidity,"%"]}),Object(o.jsxs)("p",{"data-aos":"fade-up-right",children:[Object(o.jsx)(O.a,{name:"leaf",size:"small"}),"Wind Speed: ",t.wind.speed,"m/s"]}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{className:"details","data-aos":"fade-up-left",children:a})]})]})})})]})}),Object(o.jsx)("div",{className:"toast",children:Object(o.jsx)(M.SemanticToastContainer,{position:"bottom-right"})})]})]}))},L=function(){var e=Object(n.useState)(""),a=Object(y.a)(e,2),t=a[0],s=a[1],c=Object(n.useState)(!1),r=Object(y.a)(c,2),i=r[0],l=r[1],j=localStorage.getItem("searchedWeatherData"),d=JSON.parse(j),m=function(){var e=Object(g.a)(w.a.mark((function e(a){var c,n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),""===t.trim()&&l(!0),e.prev=2,e.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&appid=").concat("4c64699c4104231e444899cfd67fa821"));case 5:if((c=e.sent).ok){e.next=12;break}return e.next=9,c.json();case 9:n=e.sent,console.log(n.message),l(!0);case 12:return e.next=14,c.json();case 14:r=e.sent,localStorage.setItem("searchedWeatherData",JSON.stringify(r)),e.next=21;break;case 18:return e.prev=18,e.t0=e.catch(2),e.abrupt("return",e.t0);case 21:s("");case 22:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(a){return e.apply(this,arguments)}}();return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"body-container2",children:[Object(o.jsxs)(J.a,{className:"body-wrapper",children:[Object(o.jsx)("h1",{className:"title-desc","data-aos":"zoom-in-down",children:"Search for a city"}),Object(o.jsxs)("form",{className:"ui action huge input search-wrapper","data-aos":"zoom-in",onSubmit:m,children:[Object(o.jsx)("input",{type:"text",placeholder:"Enter a city name",value:t,onChange:function(e){s(e.currentTarget.value)}}),Object(o.jsx)("button",{className:"ui huge black button",children:"Search"})]}),Object(o.jsx)(K,{data:d})]}),Object(o.jsxs)(A.a,{basic:!0,onClose:function(){return l(!1)},onOpen:function(){return l(!0)},open:i,size:"small",children:[Object(o.jsxs)(E.a,{icon:!0,className:"modal-title",children:[Object(o.jsx)(O.a,{name:"exclamation triangle"}),Object(o.jsx)("span",{children:"Incorrect City"})]}),Object(o.jsxs)(A.a.Content,{children:[Object(o.jsx)("p",{className:"modal-desc",children:"Please enter a valid city name"}),Object(o.jsx)(A.a.Actions,{className:"modal-button",children:Object(o.jsxs)(S.a,{color:"green",inverted:!0,onClick:function(){return l(!1)},children:[Object(o.jsx)(O.a,{name:"checkmark"})," Ok"]})})]})]})]})})},P=(t(236),function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(f,{}),Object(o.jsx)(L,{})]})}),Y=t(21),B=function(){return Object(o.jsx)(l.a,{basename:"/skydia",children:Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)(Y.a,{exact:!0,path:"/",children:Object(o.jsx)(h,{})}),Object(o.jsx)(Y.a,{exact:!0,path:"/search",children:Object(o.jsx)(P,{})}),Object(o.jsx)(Y.a,{exact:!0,path:"/saved",children:Object(o.jsx)(T,{})})]})})};t(237);i.a.render(Object(o.jsx)(B,{}),document.getElementById("root"))}},[[238,1,2]]]);
//# sourceMappingURL=main.c78091e8.chunk.js.map