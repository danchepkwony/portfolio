(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{16:function(e){e.exports=JSON.parse('{"maarc":{"title":"Muncie Afghan Refugee Resettlement","link":"MAARC","tech":["React Typescript","CSS"],"description":"Collecting online donations for a nonprofit","p1":"The Afghan Women\'s And Kids\' Education and Necessities Organization (AWAKEN) needed a website in the midst of the Afghanistan Refugee Crisis in 2021. The Digital Corps had students volunteer to help build their website.","p2":"We spent only a day working on the project and a week to polish any bugs. I worked on the About page with React Typescript and CSS.","image1":true,"image2":true,"alt":"","website":"https://www.awakeninc.org/"},"puzzle":{"title":"Puzzle Wall","link":"Puzzle Wall","tech":["Unity","C#"],"description":"A multiplayer TV Board puzzle game","p1":"David Letterman is an alumni and prominent donor to Ball State University. The Letterman Experience Lab at Ball State wanted to build an interactive Letterman-themed puzzle game that included fun facts about David Letterman\u2019s career. The Digital Corps was given the concept and tasked with developing the game.","p2":"We used Unity where scripts are written in C#. I worked with other developers to implement the fun fact panel, the puzzle functionality, and the ending video.","image1":true},"sportslink":{"title":"Sportslink Application Form","link":"Sportslink","tech":["React Javascript","Azure Functions","C#"],"description":"Sending application information to Google Sheets","p1":"Sportslink at Ball State University needed a new application form and a better way to keep track of the applications they received. We decided to create a Google Sheet with some conditional logic so the Sportslink staff could filter through applicants easily and wouldn\'t need future support.","p2":"After getting guidance from the staff on how to format the Google Sheet, I created a Google Form, connected it to the Google Sheet, and created an Azure Function that would store any files they submitted to Blob Storage then post the link and other fields to the Google Form. Then, I used React Javascript to write the basic functionality for the frontend.","image1":true,"image2":true,"website":"https://ballstatesportslink.com/new-application-page/"},"slack":{"title":"Status Board Slack App","link":"Slack Status","tech":["Azure Functions","C#","MySQL"],"description":"Researching a data analysis framework with a physics professor","p1":"When the Digital Corps went remote, we needed a way to keep track of which employees/staff were on and off the clock. Our staff set up the database, deployed the functions, and created the frontend display. I worked on the Azure Functions with C# and fetched data from our MySQL database.","p2":"In order to write the functions, I had to research how to create slash commands for a Slackbot, how to direct that slash command to Azure, and how to parse and send that data to our frontend. I followed some tutorials and created example Slackbots before working on the final one.","image1":true,"image2":true},"lsamp":{"title":"LSAMP Research","link":"LSAMP","tech":["C/C++","ROOT","Machine Learning"],"description":"Sending application information to Google Sheets","p1":"I did research with Louis Stokes Alliance for Minority Participation. I worked with Dr. Skoby at Ball State University to research ROOT, a software framework for data analysis, so we could implement machine learning on physics data.","image1":true},"techpoint":{"title":"Techpoint SOS Challenge","link":"Techpoint","tech":["React Javascript","Firebase DB","Firebase Auth"],"description":"Creating a telehealth website for a hackathon","p1":"Techpoint Description","image1":true}}')},47:function(e,t,a){e.exports=a.p+"static/media/resume.8887f24d.pdf"},53:function(e,t,a){e.exports=a(80)},60:function(e,t,a){},62:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),o=a(44),i=(a(60),a(25)),l=a(15),c=a(83),s=a(12),m=a(39),u=(a(62),a(16));function p(e){return r.a.createElement("li",{className:"project"},r.a.createElement("h2",null,r.a.createElement(i.b,{to:"/"+e.page,className:"blue"},u[e.page].title)),r.a.createElement("ul",null,u[e.page].tech.map((function(t){return r.a.createElement("li",{key:e.page+" "+t},t)}))))}a(70);var d=function(){return r.a.createElement("section",null,r.a.createElement("div",{className:"projectGrid"},r.a.createElement("h3",null,"Selected Works"),r.a.createElement("ul",{className:"selected"},Object.keys(u).map((function(e,t){return t<=3&&r.a.createElement(p,{key:e,page:e})}))),r.a.createElement("h3",null,"Other Projects"),r.a.createElement("ul",null,Object.keys(u).map((function(e,t){return t>3&&r.a.createElement(p,{key:e,page:e})})))))},h=(a(71),a(47)),f=a.n(h),g=function(){return r.a.createElement("section",{className:"about"},r.a.createElement("h1",{className:"hide-desktop"},"About Me"),r.a.createElement("p",null,"Hi, I'm Dan. I'm a junior at Ball State University majoring in Computer Science."),r.a.createElement("p",null,"During the school year, I work at the Digital Corps, an on-campus agency that makes websites and other digital products."),r.a.createElement("p",null,"More more more blah blah blah me me me"),r.a.createElement("p",null),r.a.createElement("p",{className:"links"},r.a.createElement("a",{className:"blue",href:f.a,download:"Resume_Chepkwony"},"Download my resume"),r.a.createElement("a",{className:"blue",href:"mailto: dan.k.chepkwony@gmail.com"},"Email me")))},b=a(48),E=(a(77),function(){return Object(n.useEffect)((function(){var e=document.getElementById("splineCanvas");new b.a(e).load("https://prod.spline.design/9Va6vISxouIOOeqt/scene.splinecode")}),[]),r.a.createElement("div",{className:"splineContainer"},r.a.createElement("canvas",{id:"splineCanvas"}))}),k=function(){var e=Object(n.useState)(r.a.createElement(r.a.Fragment,null,"Here's ",r.a.createElement("span",{id:"blur"},"some stuff I've done"))),t=Object(s.a)(e,2),a=t[0],o=t[1],i=Object(n.useRef)(null),l=function(){var e=document.getElementById("blur");e&&(e.classList.remove("blur"),setTimeout((function(){e.classList.add("blur")}),50))};return Object(n.useEffect)((function(){var e=new IntersectionObserver((function(e){Object(s.a)(e,1)[0].isIntersecting&&!m.isMobile?o(r.a.createElement(r.a.Fragment,null,"Here's ",r.a.createElement("span",{id:"blur"},"more about me"))):o(r.a.createElement(r.a.Fragment,null,"Here's ",r.a.createElement("span",{id:"blur"},"some stuff I've done"))),l()}),{root:null,rootMargin:"0px",threshold:.75}),t=i.current;return t&&e.observe(t),l(),function(){t&&e.unobserve(t)}}),[i]),r.a.createElement("main",null,r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"left"},r.a.createElement("div",{className:"text"},r.a.createElement("div",{className:"sub"},"Hi, I'm"),r.a.createElement("h1",null,"Dan Chepkwony"),r.a.createElement("p",null,a)),!m.isMobile&&r.a.createElement(E,null)),r.a.createElement("div",{className:"right"},r.a.createElement(d,null),r.a.createElement("div",{ref:i},r.a.createElement(g,null)))))},w=function(e){return r.a.createElement("nav",{className:"project-links"},r.a.createElement("ul",null,Object.keys(u).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement(i.b,{to:t,className:t!=e.page?"blue":"black"},u[t].link))}))))},v=(a(78),a.p+"static/media/maarc.0cdd735b.jpeg"),y=a.p+"static/media/maarc2.44bda214.png",S=a.p+"static/media/sportslink.ec1228eb.png",j=a.p+"static/media/sportslink2.e9db54d5.png",O=a.p+"static/media/slack.1de63a5d.png",N=a.p+"static/media/slack2.58b41b3d.png",I=function(e){var t,a;switch(Object(n.useEffect)((function(){var e=document.getElementsByClassName("page")[0];return e&&(e.classList.add("slideInReverse"),setTimeout((function(){e.classList.remove("slideInReverse")}),500)),function(){e&&(e.classList.remove("slideOutReverse"),setTimeout((function(){e.classList.add("slideOutReverse")}),500))}}),[]),e.page){case"maarc":case"puzzle":t=v,a=y;break;case"sportslink":t=S,a=j;break;case"slack":t=O,a=N;break;default:t=v,a=y}return console.log(t),r.a.createElement("div",{className:"projects"},r.a.createElement(i.b,{to:"/",className:"back blue"},r.a.createElement("span",null,"<")," Back"),r.a.createElement("div",{className:"left"},r.a.createElement("div",{className:"text"},r.a.createElement("div",{className:"sub"},u[e.page].tech.map((function(t,a){return t+(a<u[e.page].tech.length-1?", ":" ")}))),r.a.createElement("h1",null,u[e.page].title),r.a.createElement("p",null,u[e.page].description))),r.a.createElement("div",{className:"right"},r.a.createElement("main",{className:"project"},r.a.createElement("div",null,r.a.createElement("p",null,u[e.page].p1),u[e.page].image1&&r.a.createElement("img",{src:t}),u[e.page].p2&&r.a.createElement("p",null,u[e.page].p2),u[e.page].image1&&r.a.createElement("img",{src:a}))),r.a.createElement(w,{page:e.page})))},C=function(){var e=Object(l.e)().pathname;return Object(n.useEffect)((function(){setTimeout((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),0)}),[e]),null},A=(a(79),a(50)),z=a(41),R=[];Object.keys(u).map((function(e){return R.push({path:"/"+e,project:e,Component:I})}));var L=function(){var e=Object(A.a)({apiKey:"AIzaSyCaP92eoq4bEjfQzxZ26azC8IWJ970HiWU",authDomain:"portfolio2-47919.firebaseapp.com",databaseURL:"https://portfolio2-47919.firebaseio.com",projectId:"portfolio2-47919",storageBucket:"portfolio2-47919.appspot.com",messagingSenderId:"572088866809",appId:"1:572088866809:web:cdb5d225cffe14baa90f28",measurementId:"G-250B7QK8NR"}),t=Object(z.a)(e);return Object(z.b)(t,"notification_received"),console.log("(?!"+R.map((function(e){return e.path})).join("|")+")"),r.a.createElement(i.a,null,r.a.createElement(C,null),r.a.createElement("div",{className:"app-container"},r.a.createElement(l.a,{exact:!0,path:"/"},(function(e){var t=e.match;return r.a.createElement(c.a,{in:null!=t,timeout:1e3,classNames:"home",unmountOnExit:!0,appear:!0},r.a.createElement(k,null))})),R.map((function(e){var t=e.path,a=e.project,n=e.Component;return r.a.createElement(l.a,{key:t,path:t},(function(e){var t=e.match;return r.a.createElement(c.a,{in:null!=t,timeout:1e3,classNames:"projects",unmountOnExit:!0,appear:!0},r.a.createElement(n,{page:a}))}))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=document.getElementById("root");Object(o.createRoot)(T).render(r.a.createElement(L,null)),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.b3e9e3d7.chunk.js.map