(function(){var e={974:function(e,t,a){"use strict";var n=a(963),o=a(252);function i(e,t,a,n,i,s){const r=(0,o.up)("MainPage");return(0,o.wg)(),(0,o.j4)(r)}function s(e,t,a,n,i,s){const r=(0,o.up)("NavBar"),c=(0,o.up)("HeaderSection"),d=(0,o.up)("EmailList"),l=(0,o.up)("About"),u=(0,o.up)("Tracks"),h=(0,o.up)("Sponsors"),m=(0,o.up)("FAQ"),v=(0,o.up)("Team"),p=(0,o.up)("FooterSection");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r),(0,o.Wm)(c),(0,o.Wm)(d),(0,o.Wm)(l),(0,o.Wm)(u),(0,o.Wm)(h),(0,o.Wm)(m),(0,o.Wm)(v),(0,o.Wm)(p)])}var r=a(424);const c=e=>((0,o.dD)("data-v-73131450"),e=e(),(0,o.Cn)(),e),d={id:"header"},l=c((()=>(0,o._)("img",{src:r,alt:"Hack WashU Logo"},null,-1))),u=c((()=>(0,o._)("h1",null,"Hack WashU",-1))),h=c((()=>(0,o._)("h2",null,"OCTOBER 14 - 16, 2022",-1))),m=[l,u,h];function v(e,t,a,n,i,s){return(0,o.wg)(),(0,o.iD)("div",d,m)}var p={name:"HeaderSection"},g=a(744);const f=(0,g.Z)(p,[["render",v],["__scopeId","data-v-73131450"]]);var w=f,b=a(991);const _=(0,o.uE)('<div id="navBg" data-v-62137646></div><div id="mainNav" data-v-62137646><img src="'+b+'" data-v-62137646><a id="mlh-trust-badge" href="https://mlh.io/na?utm_source=na-hackathon&amp;utm_medium=TrustBadge&amp;utm_campaign=2023-season&amp;utm_content=white" target="_blank" data-v-62137646><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg" alt="Major League Hacking 2023 Hackathon Season" style="width:100%;" data-v-62137646></a><ul id="navbar" data-v-62137646><li data-v-62137646><a href="#about" data-v-62137646><h3 data-v-62137646>ABOUT</h3></a></li><li data-v-62137646><a href="#tracks" data-v-62137646><h3 data-v-62137646>TRACKS</h3></a></li><li data-v-62137646><a href="#sponsors" data-v-62137646><h3 data-v-62137646>SPONSORS</h3></a></li><li data-v-62137646><a href="#contact" data-v-62137646><h3 data-v-62137646>CONTACT</h3></a></li><li data-v-62137646><a href="#FAQ" data-v-62137646><h3 data-v-62137646>FAQ</h3></a></li></ul></div>',2),k=[_];function y(e,t,a,n,i,s){return(0,o.wg)(),(0,o.iD)("div",null,k)}var T={name:"NavBar",created(){window.innerWidth>500&&window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)},destroyed(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("scroll",this.handleResize)},data(){return{scrollPosition:window.pageYOffset}},methods:{handleScroll(){let e=window.pageYOffset;this.$data.scrollPosition>e?(document.getElementById("mainNav").style.top="0",document.getElementById("navBg").style.top="0"):(document.getElementById("mainNav").style.top="-14vh",document.getElementById("navBg").style.top="-14vh"),this.$data.scrollPosition=e,console.log("hg")},handleResize(){window.innerWidth>500?window.addEventListener("scroll",this.handleScroll):window.removeEventListener("scroll",this.handleScroll)}}};const W=(0,g.Z)(T,[["render",y],["__scopeId","data-v-62137646"]]);var D=W,x=a(993);const S=e=>((0,o.dD)("data-v-0cdd3530"),e=e(),(0,o.Cn)(),e),E={class:"container"},j=S((()=>(0,o._)("h1",{id:"title"},"ABOUT",-1))),A=S((()=>(0,o._)("div",{id:"about"},[(0,o._)("div",{id:"text"},[(0,o._)("p",null,[(0,o.Uk)(" At HackWashU, you'll meet fellow hackers from around the country, learn new skills, and work alongside seasoned mentors. We'll have free workshops, lecture series, mentorship, prizes, games, and more. Don't have a team, or even an idea? Don't worry! We'll give you the tools to build something incredible. "),(0,o._)("br"),(0,o._)("br"),(0,o.Uk)(" For 36 hours from October 14th to 16th, you’ll have the opportunity to collaborate and build out brilliant, innovative, and impactful ideas. ")])]),(0,o._)("img",{alt:"",src:x})],-1))),C=[j,A];function O(e,t,a,n,i,s){return(0,o.wg)(),(0,o.iD)("div",E,C)}var I={name:"About"};const L=(0,g.Z)(I,[["render",O],["__scopeId","data-v-0cdd3530"]]);var F=L;const z=e=>((0,o.dD)("data-v-7fb9aa35"),e=e(),(0,o.Cn)(),e),B={id:"tracksAndDivisions"},M=z((()=>(0,o._)("h1",null,[(0,o.Uk)("Our "),(0,o._)("span",null,"Tracks")],-1))),U={class:"tracks"},Z=z((()=>(0,o._)("h1",null,[(0,o.Uk)("Our "),(0,o._)("span",null,"Divisions")],-1))),q={class:"divisions"};function H(e,t,a,n,i,s){const r=(0,o.up)("TraDirContainer");return(0,o.wg)(),(0,o.iD)("div",B,[M,(0,o._)("div",U,[(0,o.Wm)(r,{title:"Sustainability",text:"Sustainable practices support ecological, human, and economic health and vitality. The sustainability track is for hackers who aim to improve environmental sustainability through the use of technology."}),(0,o.Wm)(r,{title:"Security and Privacy",text:"The safeguarding of data and user identity in various platforms is an increasingly pressing issue in our data driven world. The Security and Privacy track is for hackers who aim to improve how we protect our data."}),(0,o.Wm)(r,{title:"Interactive Media",text:"From terminal windows in the 60s to full blown virtual reality UIs in modern times, the way we interact with technology has evolved quickly. The Interactive Media track is for hackers who wish to push the limits of how we interact with technology."}),(0,o.Wm)(r,{title:"Another Track",text:"lorem ipsum."})]),Z,(0,o._)("div",q,[(0,o.Wm)(r,{title:"Master",text:"The master division is for more experienced hackers who are comfortable with having full creative control of their projects. We will have exciting speakers and experienced mentors to help take your project to the next level."}),(0,o.Wm)(r,{title:"Emerging",text:"The emerging division is for underclassmen who may not be as experienced in building their own projects. We will have mentors and volunteers to help guide you through building your projects."})])])}var N=a(577);const P={class:"container"};function R(e,t,a,n,i,s){return(0,o.wg)(),(0,o.iD)("div",P,[(0,o._)("h2",null,(0,N.zw)(a.title),1),(0,o._)("p",null,(0,N.zw)(a.text),1)])}var Q={name:"TraDirContainer",components:{},props:["title","text"]};const Y=(0,g.Z)(Q,[["render",R],["__scopeId","data-v-39637387"]]);var $=Y,G={name:"Tracks",components:{TraDirContainer:$}};const J=(0,g.Z)(G,[["render",H],["__scopeId","data-v-7fb9aa35"]]);var K=J,V=a(486);const X={id:"sponsors"},ee=(0,o.uE)('<h1 id="sponsorTitle" data-v-ac2b539c>SPONSORS</h1><div class="sponsorList" data-aos="fade-left" data-aos-duration="1000" data-v-ac2b539c><h2 data-v-ac2b539c>Coming Soon!</h2></div><h1 id="partnerTitle" data-v-ac2b539c>PARTNERS</h1><div class="sponsorList" data-aos="fade-right" data-aos-duration="1000" data-v-ac2b539c><img src="'+V+'" data-v-ac2b539c></div><h3 data-v-ac2b539c>Want to sponsor us? Check out our <a href="https://drive.google.com/file/d/1hDLDHqmddTjC0cWv_k-60YEhz5GkceE9/view" data-v-ac2b539c>guidelines</a> and reach out!</h3>',5),te=[ee];function ae(e,t,a,n,i,s){return(0,o.wg)(),(0,o.iD)("div",X,te)}var ne={name:"Sponsors"};const oe=(0,g.Z)(ne,[["render",ae],["__scopeId","data-v-ac2b539c"]]);var ie=oe;const se=e=>((0,o.dD)("data-v-69b57ac6"),e=e(),(0,o.Cn)(),e),re={id:"team"},ce=se((()=>(0,o._)("div",{class:"titleContainer"},[(0,o._)("h1",{id:"teamHeader"},"MEET THE TEAM")],-1))),de={class:"container"};function le(e,t,a,n,i,s){const r=(0,o.up)("TeamMember");return(0,o.wg)(),(0,o.iD)("div",re,[ce,(0,o._)("div",de,[(0,o.Wm)(r,{name:"Bradley",role:"Director of Technology",photo:"hackwashulogo.png"}),(0,o.Wm)(r,{name:"Emily",role:"Director of Finance",photo:"emsheehan.jpg"}),(0,o.Wm)(r,{name:"Eugene",role:"Director of Design",photo:"eugenesong.jpeg"}),(0,o.Wm)(r,{name:"Lisa",role:"Co-Director of Communications",photo:"lisahan.jpeg"}),(0,o.Wm)(r,{name:"Mitch",role:"Co-Director of Communications",photo:"mitch.png"}),(0,o.Wm)(r,{name:"Sam",role:"Director of Operations",photo:"samkim.jpg"}),(0,o.Wm)(r,{name:"Jack",role:"Co-Director of Technology",photo:"jackh.jpeg"})])])}const ue={class:"member"},he={class:"inner"},me={class:"front"},ve=["src"],pe={class:"nameContainer"},ge={class:"back"};function fe(e,t,n,i,s,r){return(0,o.wg)(),(0,o.iD)("div",ue,[(0,o._)("div",he,[(0,o._)("div",me,[(0,o._)("img",{src:a(173)(`./${s.photo}`)},null,8,ve),(0,o._)("div",pe,[(0,o._)("h3",null,(0,N.zw)(s.name),1)])]),(0,o._)("div",ge,[(0,o._)("h3",null,(0,N.zw)(s.role),1)])])])}var we={name:"TeamMember",props:["name","role","link","photo"],data(){return{name:this.name,role:this.role,link:this.link,photo:this.photo}}};const be=(0,g.Z)(we,[["render",fe],["__scopeId","data-v-4110d123"]]);var _e=be,ke=(a(520),{name:"Team",components:{TeamMember:_e},data(){return{lisaphoto:void 0}}});const ye=(0,g.Z)(ke,[["render",le],["__scopeId","data-v-69b57ac6"]]);var Te=ye;const We=e=>((0,o.dD)("data-v-79d6c5ea"),e=e(),(0,o.Cn)(),e),De={id:"background"},xe=We((()=>(0,o._)("div",{id:"contents"},[(0,o._)("div",{id:"left"},[(0,o._)("h2",{id:"interested"},"interested? "),(0,o._)("h2",null,"join our mailing list!")]),(0,o._)("div",{id:"mc_embed_signup"},[(0,o._)("form",{action:"https://hackwashu.us14.list-manage.com/subscribe/post?u=d6407a071d93443bbb9a61e1c&id=a3154e19e4",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",class:"validate",target:"_blank",novalidate:""},[(0,o._)("div",{id:"mc_embed_signup_scroll"},[(0,o._)("div",{id:"mc-field-group"},[(0,o._)("input",{type:"email",value:"",placeholder:"EMAIL ADDRESS",name:"EMAIL",class:"required email",id:"email"}),(0,o._)("input",{type:"submit",value:"SUBSCRIBE",name:"subscribe",id:"subscribe",class:"button"})]),(0,o._)("div",{id:"mce-responses",class:"clear foot"},[(0,o._)("div",{class:"response",id:"mce-error-response",style:{display:"none"}}),(0,o._)("div",{class:"response",id:"mce-success-response",style:{display:"none"}})]),(0,o._)("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},[(0,o._)("input",{type:"text",name:"b_d6407a071d93443bbb9a61e1c_a3154e19e4",tabindex:"-1",value:""})])])])])],-1))),Se=[xe];function Ee(e,t,a,n,i,s){return(0,o.wg)(),(0,o.iD)("div",De,Se)}var je={name:"EmailList"};const Ae=(0,g.Z)(je,[["render",Ee],["__scopeId","data-v-79d6c5ea"]]);var Ce=Ae;const Oe=e=>((0,o.dD)("data-v-baef70d6"),e=e(),(0,o.Cn)(),e),Ie={id:"FAQ"},Le=Oe((()=>(0,o._)("h1",null,[(0,o.Uk)("Frequently Asked "),(0,o._)("span",null,"Questions")],-1))),Fe={class:"questionsContainer"};function ze(e,t,a,n,i,s){const r=(0,o.up)("Question");return(0,o.wg)(),(0,o.iD)("div",Ie,[Le,(0,o._)("div",Fe,[(0,o.Wm)(r,{question:"what is a hackathon?",answer:"A hackathon is an invention marathon where students build software around a central theme. At Hack WashU, you can look forward to amazing prizes, engaging speakers, and tons of skilled mentors!"}),(0,o.Wm)(r,{question:"when is hack washu?",answer:"hack washu will start on the evening of September 9, 2022 and end on the morning of the 11th"}),(0,o.Wm)(r,{question:"who can attend hack washu?",answer:"any college student in the continental United States can attend hack washu!"}),(0,o.Wm)(r,{question:"is hack washu in-person?",answer:"hack washu will primarily be virtual, but there will be an in-person component for washu students"}),(0,o.Wm)(r,{question:"is hack washu free?",answer:"YES!!!"})])])}const Be={class:"ans"};function Me(e,t,a,i,s,r){const c=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("div",{class:(0,N.C_)(["container",{active_container:s.showAnswer}])},[(0,o._)("button",{onClick:t[0]||(t[0]=e=>s.showAnswer=!s.showAnswer),class:(0,N.C_)({active_button:s.showAnswer,initial_button:!s.showAnswer})},[(0,o._)("h2",null,(0,N.zw)(this.question),1),(0,o.Wm)(c,{icon:"fa-solid fa-user-secret"})],2),(0,o.wy)((0,o._)("div",Be,[(0,o._)("p",null,(0,N.zw)(this.answer),1)],512),[[n.F8,s.showAnswer]])],2)}var Ue={name:"Question",props:["question","answer"],data(){return{showAnswer:!1}}};const Ze=(0,g.Z)(Ue,[["render",Me],["__scopeId","data-v-e3c8e352"]]);var qe=Ze,He={name:"FAQ",components:{Question:qe}};const Ne=(0,g.Z)(He,[["render",ze],["__scopeId","data-v-baef70d6"]]);var Pe=Ne,Re=a(962),Qe=a(509),Ye=a(251),$e=a(583),Ge=a(660);const Je={id:"footer"},Ke=(0,o.uE)('<a href="https://hackwashu.io" data-v-05e501f8><img id="logo" src="'+b+'" alt="Hack WashU Logo" data-v-05e501f8></a><p data-v-05e501f8>have any questions?</p><p data-v-05e501f8>talk to us at <a id="mail" href="mailto:organizer@hackwashu.io" data-v-05e501f8>organizer@hackwashu.io</a></p><div id="social-group" data-v-05e501f8><img class="social" src="'+Re+'" alt="Facebook" data-v-05e501f8><img class="social" src="'+Qe+'" alt="Instagram" data-v-05e501f8><img class="social" src="'+Ye+'" alt="Twitter" data-v-05e501f8><img class="social" src="'+$e+'" alt="LinkedIn" data-v-05e501f8><img class="social" src="'+Ge+'" alt="YouTube" data-v-05e501f8></div>',4),Ve=[Ke];function Xe(e,t,a,n,i,s){return(0,o.wg)(),(0,o.iD)("div",Je,Ve)}var et={name:"FooterSection"};const tt=(0,g.Z)(et,[["render",Xe],["__scopeId","data-v-05e501f8"]]);var at=tt,nt={name:"MainPage",props:{msg:String},components:{NavBar:D,HeaderSection:w,EmailList:Ce,About:F,Tracks:K,Sponsors:ie,Team:Te,FAQ:Pe,FooterSection:at}};const ot=(0,g.Z)(nt,[["render",s]]);var it=ot,st={name:"App",components:{MainPage:it}};const rt=(0,g.Z)(st,[["render",i]]);var ct=rt,dt=a(711),lt=a.n(dt),ut=(a(947),a(810));const ht=(0,n.ri)(ct);ht.component("font-awesome-icon",ut.GN),ht.use(lt().init()),ht.mount("#app")},173:function(e,t,a){var n={"./acm.png":486,"./emsheehan.jpg":604,"./eugenesong.jpeg":350,"./hackwashubrookings.svg":424,"./hackwashulogo.png":991,"./hackwashurabbit.svg":993,"./jackh.jpeg":444,"./lisahan.jpeg":520,"./mitch.png":518,"./samkim.jpg":836,"./socials/Facebook.svg":962,"./socials/Instagram.svg":509,"./socials/LinkedIn.svg":583,"./socials/Twitter.svg":251,"./socials/YouTube.svg":660};function o(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=173},424:function(e,t,a){"use strict";e.exports=a.p+"img/hackwashubrookings.d57ffd43.svg"},993:function(e,t,a){"use strict";e.exports=a.p+"img/hackwashurabbit.687bf75a.svg"},962:function(e,t,a){"use strict";e.exports=a.p+"img/Facebook.dad5ac1b.svg"},509:function(e,t,a){"use strict";e.exports=a.p+"img/Instagram.4d08abf1.svg"},583:function(e,t,a){"use strict";e.exports=a.p+"img/LinkedIn.9c7137ac.svg"},251:function(e,t,a){"use strict";e.exports=a.p+"img/Twitter.812e4552.svg"},660:function(e,t,a){"use strict";e.exports=a.p+"img/YouTube.33964a92.svg"},486:function(e,t,a){"use strict";e.exports=a.p+"img/acm.999f488c.png"},604:function(e,t,a){"use strict";e.exports=a.p+"img/emsheehan.2d95bc9f.jpg"},350:function(e,t,a){"use strict";e.exports=a.p+"img/eugenesong.2d98e4cc.jpeg"},991:function(e,t,a){"use strict";e.exports=a.p+"img/hackwashulogo.da885206.png"},444:function(e,t,a){"use strict";e.exports=a.p+"img/jackh.ec9349b8.jpeg"},520:function(e,t,a){"use strict";e.exports=a.p+"img/lisahan.f842c11d.jpeg"},518:function(e,t,a){"use strict";e.exports=a.p+"img/mitch.ba326be7.png"},836:function(e,t,a){"use strict";e.exports=a.p+"img/samkim.85d633ea.jpg"}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,i){if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],i=e[l][2];for(var r=!0,c=0;c<n.length;c++)(!1&i||s>=i)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(r=!1,i<s&&(s=i));if(r){e.splice(l--,1);var d=o();void 0!==d&&(t=d)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p=""}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,s=n[0],r=n[1],c=n[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(c)var l=c(a)}for(t&&t(n);d<s.length;d++)i=s[d],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(l)},n=self["webpackChunkhackwashu"]=self["webpackChunkhackwashu"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(974)}));n=a.O(n)})();
//# sourceMappingURL=app.a716fc21.js.map