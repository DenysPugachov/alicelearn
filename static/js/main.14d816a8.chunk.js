(this.webpackJsonpalicelearn=this.webpackJsonpalicelearn||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),c=n.n(r),a=n(19),i=n.n(a),o=n(13),u=n(4),l=n(5),j=n(7),d=n(6),h=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isSingedIn:null},e.onSignInClick=function(){e.auth.signIn()},e.onSignOutClick=function(){e.auth.signOut()},e.onAuthChange=function(){e.setState({isSignedIn:e.auth.isSignedIn.get()})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"1053885146648-kjldknnmt63b1phck3biij2db258nvhk.apps.googleusercontent.com",scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.setState({isSignedIn:e.auth.isSignedIn.get()}),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthBtn",value:function(){switch(this.state.isSignedIn){case null:return Object(s.jsx)("div",{children:"I don't now Auth status"});case!0:return Object(s.jsxs)("button",{className:"btn btn-danger",onClick:this.onSignOutClick,children:[Object(s.jsx)("i",{className:"google icon"}),"Sign Out"]});case!1:return Object(s.jsxs)("button",{className:"btn btn-success",onClick:this.onSignInClick,children:[Object(s.jsx)("i",{className:"google icon"}),"Sign In with Google"]})}}},{key:"render",value:function(){return Object(s.jsx)("div",{children:this.renderAuthBtn()})}}]),n}(r.Component),m=[{label:"+",id:"add",color:"danger"},{label:"-",id:"sub",color:"warning"},{label:"*",id:"mul",color:"success"},{label:"/",id:"dev",color:"primary"}],b=function(){return Object(s.jsx)("nav",{className:"navbar navbar-expand bg-transparent mb-3",children:Object(s.jsxs)("div",{className:"container justify-content-around",children:[function e(){return m.map((function(t){var n=["btn","btn-outline-".concat(t.color)];return Object(s.jsx)(o.b,{className:n.join(" "),activeClassName:"active",to:"/".concat(t.id),onClick:function(){return e},children:t.label},t.id)}))}(),Object(s.jsx)(h,{})]})})},v=(n(31),n(32),n(33),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.onInputChange=function(t){e.setState({inputValue:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.onInputAnswer(e.state.inputValue),e.setState({inputValue:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.inputValue;return Object(s.jsx)("form",{className:"answer-form",onSubmit:this.onSubmit,children:Object(s.jsx)("input",{autoFocus:!0,className:"input-answer",type:"number",placeholder:"...",onChange:this.onInputChange,value:e})})}}]),n}(r.Component));function O(e){return Math.floor(Math.random()*e+1)}var x=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={firstNum:O(1e3),secondNum:O(1e3),rightAnswerCounter:0,wrongAnswerCounter:0},e}return Object(l.a)(n,[{key:"sub",value:function(){var e=this;if(this.state.firstNum<this.state.secondNum){var t=[this.state.secondNum,this.state.firstNum];this.state.firstNum=t[0],this.state.secondNum=t[1]}return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"h3",children:[Object(s.jsxs)("span",{className:"text-success d-block",children:["\u0412\u0435\u0440\u043d\u043e: ",this.state.rightAnswerCounter]}),Object(s.jsxs)("span",{className:"text-danger",children:["\u041c\u0438\u043c\u043e: ",this.state.wrongAnswerCounter]})]}),Object(s.jsx)("hr",{}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"expr-container",children:Object(s.jsxs)("div",{className:"expression-wrapper",children:[Object(s.jsxs)("div",{className:"number-box ",children:[Object(s.jsx)("div",{className:"num",children:this.state.firstNum}),Object(s.jsx)("span",{className:"expr-symbol",children:" - "}),Object(s.jsx)("div",{className:"num",children:this.state.secondNum})]}),Object(s.jsx)("div",{className:"num",children:Object(s.jsx)(v,{onInputAnswer:function(t){if(t){var n=t.split("").reverse().join("");n==e.state.firstNum-e.state.secondNum?e.setState((function(e){var t=e.rightAnswerCounter;return{firstNum:O(1e3),secondNum:O(1e3),rightAnswerCounter:t+1}})):e.setState((function(e){return{wrongAnswerCounter:e.wrongAnswerCounter+1}})),console.log("Right answer = ".concat(e.state.firstNum-e.state.secondNum," \nUser input   = ").concat(n))}}})})]})})]})}},{key:"render",value:function(){return this.sub()}}]),n}(r.Component),f=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={firstNum:O(1e3),secondNum:O(1e3),rightAnswerCounter:0,wrongAnswerCounter:0},e}return Object(l.a)(n,[{key:"add",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"h3",children:[Object(s.jsxs)("span",{className:"text-success d-block",children:["\u0412\u0435\u0440\u043d\u043e: ",this.state.rightAnswerCounter]}),Object(s.jsxs)("span",{className:"text-danger",children:["\u041c\u0438\u043c\u043e: ",this.state.wrongAnswerCounter]})]}),Object(s.jsx)("hr",{}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"expr-container",children:Object(s.jsxs)("div",{className:"expression-wrapper",children:[Object(s.jsxs)("div",{className:"number-box ",children:[Object(s.jsx)("div",{className:"num",children:this.state.firstNum}),Object(s.jsx)("span",{className:"expr-symbol",children:" + "}),Object(s.jsx)("div",{className:"num",children:this.state.secondNum})]}),Object(s.jsx)("div",{className:"num",children:Object(s.jsx)(v,{onInputAnswer:function(t){if(t){var n=t.split("").reverse().join("");n==e.state.firstNum+e.state.secondNum?e.setState((function(e){var t=e.rightAnswerCounter;return{firstNum:O(1e3),secondNum:O(1e3),rightAnswerCounter:t+1}})):e.setState((function(e){return{wrongAnswerCounter:e.wrongAnswerCounter+1}})),console.log("Right answer = ".concat(e.state.firstNum+e.state.secondNum," \n User input   = ").concat(n))}}})})]})})]})}},{key:"render",value:function(){return this.add()}}]),n}(r.Component),N=(n(34),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={firstNum:O(100),secondNum:O(100),rightAnswerCounter:0,wrongAnswerCounter:0},e}return Object(l.a)(n,[{key:"mul",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"h3",children:[Object(s.jsxs)("span",{className:"text-success d-block",children:["\u0412\u0435\u0440\u043d\u043e: ",this.state.rightAnswerCounter]}),Object(s.jsxs)("span",{className:"text-danger",children:["\u041c\u0438\u043c\u043e: ",this.state.wrongAnswerCounter]})]}),Object(s.jsx)("hr",{}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"expr-container",children:Object(s.jsxs)("div",{className:"expression-wrapper",children:[Object(s.jsxs)("div",{className:"number-box ",children:[Object(s.jsx)("div",{className:"num",children:this.state.firstNum}),Object(s.jsx)("span",{className:"expr-symbol mul-symbol",children:" * "}),Object(s.jsx)("div",{className:"num",children:this.state.secondNum})]}),Object(s.jsx)("div",{className:"num",children:Object(s.jsx)(v,{onInputAnswer:function(t){if(t){var n=t.split("").reverse().join("");console.log(n,e.state.firstNum,e.state.secondNum),n==e.state.firstNum*e.state.secondNum?e.setState((function(e){var t=e.rightAnswerCounter;return{firstNum:O(100),secondNum:O(100),rightAnswerCounter:t+1}})):e.setState((function(e){return{wrongAnswerCounter:e.wrongAnswerCounter+1}})),console.log("Right answer = ".concat(e.state.firstNum*e.state.secondNum," \n User input   = ").concat(n))}}})})]})})]})}},{key:"render",value:function(){return this.mul()}}]),n}(r.Component)),p=(n(35),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={firstNum:O(1e3),secondNum:O(10),rightAnswerCounter:0,wrongAnswerCounter:0},e}return Object(l.a)(n,[{key:"dev",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"h3",children:[Object(s.jsxs)("span",{className:"text-success d-block",children:["\u0412\u0435\u0440\u043d\u043e: ",this.state.rightAnswerCounter]}),Object(s.jsxs)("span",{className:"text-danger",children:["\u041c\u0438\u043c\u043e: ",this.state.wrongAnswerCounter]})]}),Object(s.jsx)("hr",{}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"dev-container",children:Object(s.jsxs)("div",{className:"dividend",children:[this.state.firstNum*this.state.secondNum,Object(s.jsxs)("div",{className:"divisor",children:[this.state.secondNum,Object(s.jsx)("div",{className:"dev-answer",children:Object(s.jsx)(v,{onInputAnswer:function(t){t&&(t==e.state.firstNum*e.state.secondNum/e.state.secondNum?e.setState((function(e){return{rightAnswerCounter:e.rightAnswerCounter+1,firstNum:O(1e3),secondNum:O(10)}})):e.setState((function(e){return{wrongAnswerCounter:e.wrongAnswerCounter+1}})),console.log("Right answer = ".concat(e.state.firstNum*e.state.secondNum/e.state.secondNum," \nUser input   = ").concat(t)))}})})]})]})})]})}},{key:"render",value:function(){return this.dev()}}]),n}(r.Component)),g=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={secondsFromStart:0},e}return Object(l.a)(n,[{key:"secondsToTime",value:function(e){var t=e%3600,n=t%60;return{h:Math.floor(e/3600),m:Math.floor(t/60),s:Math.ceil(n)}}},{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.setState((function(e){return{secondsFromStart:e.secondsFromStart+1}}))}),1e3)}},{key:"render",value:function(){var e=this.secondsToTime(this.state.secondsFromStart),t=function(e){return e.toLocaleString(void 0,{minimumIntegerDigits:2})};return Object(s.jsxs)("div",{className:"time",children:["\u041f\u0440\u043e\u0448\u043b\u043e: ",t(e.h),":",t(e.m),":",t(e.s)]})}}]),n}(c.a.Component),w=n(2),C=function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("h1",{className:"m-5",children:"\u0412\u044b\u0431\u0435\u0440\u0438 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0435"})})},A=function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"version",children:"v1.051"}),Object(s.jsxs)(o.a,{children:[Object(s.jsx)(b,{}),Object(s.jsx)("hr",{}),Object(s.jsx)(g,{}),Object(s.jsxs)("section",{className:"expression-container",children:[Object(s.jsx)(w.a,{path:"/",exact:!0,component:C}),Object(s.jsx)(w.a,{path:"/sub",exact:!0,component:x}),Object(s.jsx)(w.a,{path:"/add",exact:!0,component:f}),Object(s.jsx)(w.a,{path:"/mul",exact:!0,component:N}),Object(s.jsx)(w.a,{path:"/dev",exact:!0,component:p})]})]})]})};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(A,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.14d816a8.chunk.js.map