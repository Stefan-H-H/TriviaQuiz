(this.webpackJsonpstefan_hristov_assignment3=this.webpackJsonpstefan_hristov_assignment3||[]).push([[0],{18:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(9),s=n(2),c=n.n(s),i=n(11),r=n.n(i),o=(n(17),n(18),n(3)),l=n(10),u=n.n(l),d=n(12),b=n(0),m=function(e){var t=e.score,n=e.questionCount,s=e.updateScore,c=e.goToSettingsOrQuiz;return Object(b.jsx)("div",{className:"modal fade",id:"finishQuizModal",tabIndex:"-1","aria-labelledby":"finishQuizModalLabel","aria-hidden":"true",children:Object(b.jsx)("div",{className:"modal-dialog",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h5",{className:"modal-title",id:"finishQuizModalLabel",children:"Quiz Score!"}),Object(b.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(b.jsx)("div",{className:"modal-body text-center",children:Object(b.jsxs)("h3",{children:["Your score: ",t,"/",n]})}),Object(b.jsx)("div",{className:"modal-footer",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(){return function(){var e=document.getElementById("finishQuizModal");a.a.getInstance(e).hide(),c(!1,!0),s(0)}()},children:"Start New Quiz"})})]})})})},j=function(){return Object(b.jsxs)("div",{className:"loading",children:[Object(b.jsx)("div",{className:"spinner-border text-info",role:"status"}),Object(b.jsx)("p",{children:"Loading... please wait"})]})},h=function(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsx)("a",{className:"navbar-brand",href:"https://pages.github.ccs.neu.edu/cs7580sp21-seattle/stefan_hristov_assignment3",children:"Trivia Quiz!"})})})},f=function(e){var t=e.allAnswers,n=e.checkAnswer,a=e.answerStyles,s=e.parseEntities;return Object(b.jsx)("div",{className:"answers container mt-4 d-grid",children:t.map((function(e,t){return Object(b.jsx)("button",{id:t,type:"button",className:a[t],onClick:function(e){return n(e)},children:s(e)},t)}))})},O="btn btn-primary m-2",g="btn btn-danger m-2",x="btn btn-success m-2",v="correct_answer",p="incorrect_answers",y="question",S="category",N="difficulty",C=function(e){return(new DOMParser).parseFromString(e,"text/html").body.innerText},E=function(e,t){var n=[];return Object.assign(n,t),n.push(e),function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}}(n),n},w=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2e3,s=(new Date).getTime();document.getElementById("action-feedback").innerHTML='<div class="text-center alert '+e+'" role="alert" id="'+s+'">'+t+"</div>",n&&setTimeout((function(){return k(s)}),a)},k=function(e){e?document.getElementById(e)&&document.getElementById("action-feedback").removeChild(document.getElementById(e)):document.getElementById("action-feedback").innerHTML=""},A=function(e){var t=Array(4).fill(O),n=Object(s.useState)(E(e.question[v],e.question[p])),a=Object(o.a)(n,2),c=a[0],i=a[1],r=Object(s.useState)(t),l=Object(o.a)(r,2),u=l[0],d=l[1],m=Object(s.useState)(!1),j=Object(o.a)(m,2),h=j[0],k=j[1],A=Object(s.useState)(!1),T=Object(o.a)(A,2),M=T[0],Q=T[1],q=Object(s.useState)(!1),I=Object(o.a)(q,2),z=I[0],F=I[1],G=e.questionNumber,L=e.questionCount,B=e.nextQuestion,D=e.increaseScore,P=e.question[v],_=e.question[y],J=e.question[S],H=e.question[N];Object(s.useEffect)((function(){i(E(e.question[v],e.question[p]))}),[e.question]);return Object(b.jsx)("div",{className:"d-flex mt-5 justify-content-center",children:Object(b.jsxs)("div",{className:"card",style:{maxWidth:"800px"},children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"d-flex col-sm justify-content-center",children:Object(b.jsxs)("h3",{className:"text-center",children:["Question ",G,"/",L]})}),Object(b.jsx)("div",{className:"d-flex col-sm align-items-center justify-content-center",children:Object(b.jsx)("span",{className:"badge rounded-pill bg-dark m-2",children:J})}),Object(b.jsx)("div",{className:"d-flex col-sm align-items-center justify-content-center",children:Object(b.jsx)("span",{className:"badge rounded-pill bg-dark m-2",children:H})})]})})}),Object(b.jsxs)("div",{className:"card-body text-justify",children:[Object(b.jsx)("h5",{className:"card-title",children:C(_)}),Object(b.jsx)("div",{id:"action-feedback"}),Object(b.jsx)(f,{correctAnswer:P,allAnswers:c,answerStyles:u,checkAnswer:function(e){if(!z){var t=e.target.innerText,n=Object.assign([],u),a=1500;t===C(P)?(n[e.target.id]=x,w("alert-success","Good Job! Correct.",!0,a),D()):(n[e.target.id]=g,w("alert-danger","Sorry...Incorrect.",!0,a)),setTimeout((function(){G<L?k(!0):Q(!0)}),a),d(n),F(!0)}},parseEntities:C})]}),h?Object(b.jsx)("div",{className:"card-footer text-center",children:Object(b.jsx)("button",{type:"button",className:"btn btn-dark",onClick:function(){return d(t),k(!1),F(!1),void B()},children:"Next Question"})}):null,M?Object(b.jsx)("div",{className:"card-footer text-center",children:Object(b.jsx)("button",{type:"button",className:"btn btn-dark","data-bs-toggle":"modal","data-bs-target":"#finishQuizModal",children:"Finish Quiz"})}):null]})})},T=function(e){var t=e.showSettings,n=e.categories,a=e.difficulties,s=e.amount,c=e.category,i=e.difficulty,r=e.updateParams,o=e.updateStatus,l=e.goToSettingsOrQuiz,u=s>=1&&s<=50;return t&&Object(b.jsx)("div",{className:"container mt-5",style:{maxWidth:"800px"},children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(!0,!1),o(B.LOADING)},className:"needs-validation",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"amount",className:"form-label",children:"Number of Questions:"}),Object(b.jsx)("input",{type:"number",className:"form-control",id:"amount",value:s,onChange:function(e){return r({amount:e.target.value,category:c,difficulty:i})},min:1,max:50})]}),Object(b.jsx)("div",{className:"invalid-feedback",style:u?{display:"none"}:{display:"block"},children:"Please provide a number between ".concat(1," - ").concat(50,".")}),Object(b.jsxs)("div",{className:"mt-3",children:[Object(b.jsx)("label",{htmlFor:"triviaCategory",className:"form-label",children:"Select Category:"}),Object(b.jsx)("select",{className:"form-select",id:"triviaCategory",value:c,onChange:function(e){return r({amount:s,category:e.target.value,difficulty:i})},children:n.map((function(e,t){return Object(b.jsx)("option",{value:e,children:e},t)}))})]}),Object(b.jsxs)("div",{className:"mt-3",children:[Object(b.jsx)("label",{htmlFor:"triviaDifficulty",className:"form-label",children:"Select Difficulty:"}),Object(b.jsx)("select",{className:"form-select",id:"triviaDifficulty",value:i,onChange:function(e){return r({amount:s,category:c,difficulty:e.target.value})},children:a.map((function(e,t){return Object(b.jsx)("option",{value:e,children:e},t)}))})]}),Object(b.jsx)("div",{className:"mt-3",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",disabled:!u,children:"Submit"})})]})})},M=n(5),Q=n(6),q=function(e){var t=e.status,n=e.goToSettingsOrQuiz;return!e.showSettings&&t===B.FAIL&&Object(b.jsxs)("div",{className:"container text-lg-center mt-5",children:[Object(b.jsx)("p",{children:"Oops... Something went wrong. Please try again."}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsxs)("button",{type:"button",className:"btn btn-primary",onClick:function(){return n(!1,!0)},children:[Object(b.jsx)(M.a,{icon:Q.a})," Trivia Criteria"]})})]})},I=function(e){var t=e.status,n=e.responseCode,a=e.setResponseCode,s=e.setShowSettings;return 1===n&&t===B.SUCCESS&&Object(b.jsxs)("div",{className:"container text-xl-center mt-5",children:[Object(b.jsx)("p",{children:"Sorry, we don't have enough questions that match your selected criteria. Please change your selected criteria and try again."}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsxs)("button",{type:"button",className:"btn btn-primary",onClick:function(){return a(0),void s(!0)},children:[Object(b.jsx)(M.a,{icon:Q.a})," Trivia Criteria"]})})]})},z="Any",F=[z,"easy","medium","hard"],G=[z,"General Knowledge","Entertainment: Books","Entertainment: Film","Entertainment: Music","Entertainment: Musicals & Theatres","Entertainment: Television","Entertainment: Video Games","Entertainment: Board Games","Science & Nature","Science: Computers","Science: Mathematics","Mythology","Sports","Geography","History","Politics","Art","Celebrities","Animals","Vehicles","Entertainment: Comics","Science: Gadgets","Entertainment: Japanese Anime & Manga","Entertainment: Cartoon & Animations"],L={"General Knowledge":9,"Entertainment: Books":10,"Entertainment: Film":11,"Entertainment: Music":12,"Entertainment: Musicals & Theatres":13,"Entertainment: Television":14,"Entertainment: Video Games":15,"Entertainment: Board Games":16,"Science & Nature":17,"Science: Computers":18,"Science: Mathematics":19,Mythology:20,Sports:21,Geography:22,History:23,Politics:24,Art:25,Celebrities:26,Animals:27,Vehicles:28,"Entertainment: Comics":29,"Science: Gadgets":30,"Entertainment: Japanese Anime & Manga":31,"Entertainment: Cartoon & Animations":32},B={LOADING:"loading",SUCCESS:"success",FAIL:"fail"},D=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://opentdb.com/api.php",n="https://opentdb.com/api.php"+P(t),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(e){var t=[];for(var n in e)e[n]!==z&&"category"!==n?t.push(n+"="+e[n]):e[n]!==z&&"category"===n&&t.push(n+"="+_(e[n]));return 0===t.length?"":"?"+t.join("&")},_=function(e){return L[e]},J=function(){var e=Object(s.useState)({amount:1,category:z,difficulty:z}),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(0),i=Object(o.a)(c,2),r=i[0],l=i[1],u=Object(s.useState)(G),d=Object(o.a)(u,2),f=d[0],O=(d[1],Object(s.useState)(F)),g=Object(o.a)(O,2),x=g[0],v=(g[1],Object(s.useState)(null)),p=Object(o.a)(v,2),y=p[0],S=p[1],N=Object(s.useState)(0),C=Object(o.a)(N,2),E=C[0],w=C[1],k=Object(s.useState)(0),M=Object(o.a)(k,2),Q=M[0],L=M[1],P=Object(s.useState)(0),_=Object(o.a)(P,2),J=_[0],H=_[1],U=Object(s.useState)(!1),V=Object(o.a)(U,2),K=V[0],R=V[1],W=Object(s.useState)(!0),Y=Object(o.a)(W,2),X=Y[0],Z=Y[1],$=Object(s.useState)(B.SUCCESS),ee=Object(o.a)($,2),te=ee[0],ne=ee[1];Object(s.useEffect)((function(){te===B.LOADING&&D(n).then((function(e){console.log(e),l(e.response_code),S(e.results),w(0),L(e.results.length),ne(B.SUCCESS)})).catch((function(e){ne(B.FAIL),console.log(e)}))}),[te,E,n]);var ae=function(e,t){R(e),Z(t)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{}),Object(b.jsx)(m,{score:J,questionCount:Q,goToSettingsOrQuiz:ae,updateScore:H}),Object(b.jsx)(T,{showSettings:X,categories:f,difficulties:x,amount:n.amount,category:n.category,difficulty:n.difficulty,updateParams:a,updateStatus:ne,goToSettingsOrQuiz:ae}),te===B.LOADING?Object(b.jsx)(j,{}):K&&Q>0&&Object(b.jsx)(A,{questionNumber:E+1,questionCount:Q,question:y[E],increaseScore:function(){H(J+1)},nextQuestion:function(){w(E+1)}}),Object(b.jsx)(I,{status:te,setResponseCode:l,setShowSettings:Z,responseCode:r}),Object(b.jsx)(q,{status:te,goToSettingsOrQuiz:ae,showSettings:X})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(J,{})}),document.getElementById("root")),H()}},[[26,1,2]]]);
//# sourceMappingURL=main.6f9b4878.chunk.js.map