(this.webpackJsonpalicelearn=this.webpackJsonpalicelearn||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(1),c=s.n(r),a=s(7),i=s.n(a),u=s(2),o=s(3),l=s(5),d=s(4),j=function(e){var t=e.buttons.map((function(t){return Object(n.jsxs)("button",{className:"btn btn-outline-".concat(t.cls," ")+(e.selectedBtn[t.id]&&"active"),onClick:function(){e.btnClicked(t.id)},children:[" ",t.label]},t.id)}));return Object(n.jsx)("nav",{className:"navbar navbar-expand bg-transparent mb-3",children:Object(n.jsx)("div",{className:"container justify-content-around",children:t})})},b=(s(13),s(14),s(15),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.onInputChange=function(t){e.setState({inputValue:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.onInputAnswer(e.state.inputValue),e.setState({inputValue:""})},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this.state.inputValue;return Object(n.jsxs)("form",{className:"answer-form",onSubmit:this.onSubmit,children:[Object(n.jsx)("input",{autoFocus:!0,className:"input-answer",type:"number",placeholder:"...",onChange:this.onInputChange,value:e}),Object(n.jsx)("button",{className:"btn btn-outline-info submit-answer-btn",type:"submit",children:Object(n.jsx)("span",{children:"\u2713"})})]})}}]),s}(r.Component));function h(e){return Math.floor(Math.random()*e+1)}var m=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={firstNum:h(1e3),secondNum:h(1e3),rightAnswerCounter:0,wrongAnswerCounter:0},e}return Object(o.a)(s,[{key:"sub",value:function(){var e=this;if(this.state.firstNum<this.state.secondNum){var t=[this.state.secondNum,this.state.firstNum];this.state.firstNum=t[0],this.state.secondNum=t[1]}return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"h3",children:[Object(n.jsxs)("span",{className:"text-success d-block",children:["\u0412\u0435\u0440\u043d\u043e: ",this.state.rightAnswerCounter]}),Object(n.jsxs)("span",{className:"text-danger",children:["\u041c\u0438\u043c\u043e: ",this.state.wrongAnswerCounter]})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"expr-container",children:Object(n.jsxs)("div",{className:"expression-wrapper",children:[Object(n.jsxs)("div",{className:"number-box ",children:[Object(n.jsx)("div",{className:"num",children:this.state.firstNum}),Object(n.jsx)("span",{className:"expr-symbol",children:" - "}),Object(n.jsx)("div",{className:"num",children:this.state.secondNum})]}),Object(n.jsx)("div",{className:"num",children:Object(n.jsx)(b,{onInputAnswer:function(t){if(t){var s=t.split("").reverse().join("");s==e.state.firstNum-e.state.secondNum?e.setState((function(e){var t=e.rightAnswerCounter;return{firstNum:h(1e3),secondNum:h(1e3),rightAnswerCounter:t+1}})):e.setState((function(e){return{wrongAnswerCounter:e.wrongAnswerCounter+1}})),console.log("Right answer = ".concat(e.state.firstNum-e.state.secondNum," \nUser input   = ").concat(s))}}})})]})})]})}},{key:"render",value:function(){return this.sub()}}]),s}(r.Component),v=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={firstNum:h(1e3),secondNum:h(1e3),rightAnswerCounter:0,wrongAnswerCounter:0},e}return Object(o.a)(s,[{key:"add",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"h3",children:[Object(n.jsxs)("span",{className:"text-success d-block",children:["\u0412\u0435\u0440\u043d\u043e: ",this.state.rightAnswerCounter]}),Object(n.jsxs)("span",{className:"text-danger",children:["\u041c\u0438\u043c\u043e: ",this.state.wrongAnswerCounter]})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"expr-container",children:Object(n.jsxs)("div",{className:"expression-wrapper",children:[Object(n.jsxs)("div",{className:"number-box ",children:[Object(n.jsx)("div",{className:"num",children:this.state.firstNum}),Object(n.jsx)("span",{className:"expr-symbol",children:" + "}),Object(n.jsx)("div",{className:"num",children:this.state.secondNum})]}),Object(n.jsx)("div",{className:"num",children:Object(n.jsx)(b,{onInputAnswer:function(t){if(t){var s=t.split("").reverse().join("");s==e.state.firstNum+e.state.secondNum?e.setState((function(e){var t=e.rightAnswerCounter;return{firstNum:h(1e3),secondNum:h(1e3),rightAnswerCounter:t+1}})):e.setState((function(e){return{wrongAnswerCounter:e.wrongAnswerCounter+1}})),console.log("Right answer = ".concat(e.state.firstNum+e.state.secondNum," \n User input   = ").concat(s))}}})})]})})]})}},{key:"render",value:function(){return this.add()}}]),s}(r.Component),x=(s(16),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={firstNum:h(100),secondNum:h(100),rightAnswerCounter:0,wrongAnswerCounter:0},e}return Object(o.a)(s,[{key:"mul",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"h3",children:[Object(n.jsxs)("span",{className:"text-success d-block",children:["\u0412\u0435\u0440\u043d\u043e: ",this.state.rightAnswerCounter]}),Object(n.jsxs)("span",{className:"text-danger",children:["\u041c\u0438\u043c\u043e: ",this.state.wrongAnswerCounter]})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"expr-container",children:Object(n.jsxs)("div",{className:"expression-wrapper",children:[Object(n.jsxs)("div",{className:"number-box ",children:[Object(n.jsx)("div",{className:"num",children:this.state.firstNum}),Object(n.jsx)("span",{className:"expr-symbol",children:" * "}),Object(n.jsx)("div",{className:"num",children:this.state.secondNum})]}),Object(n.jsx)("div",{className:"num",children:Object(n.jsx)(b,{onInputAnswer:function(t){t&&(t==e.state.firstNum*e.state.secondNum?e.setState((function(e){var t=e.rightAnswerCounter;return{firstNum:h(),secondNum:h(),rightAnswerCounter:t+1}})):e.setState((function(e){return{wrongAnswerCounter:e.wrongAnswerCounter+1}})),console.log("Right answer = ".concat(e.state.firstNum*e.state.secondNum," \nUser input   = ").concat(t)))}})})]})})]})}},{key:"render",value:function(){return this.mul()}}]),s}(r.Component)),O=(s(17),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={firstNum:h(1e3),secondNum:h(10),rightAnswerCounter:0,wrongAnswerCounter:0},e}return Object(o.a)(s,[{key:"dev",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"h3",children:[Object(n.jsxs)("span",{className:"text-success d-block",children:["\u0412\u0435\u0440\u043d\u043e: ",this.state.rightAnswerCounter]}),Object(n.jsxs)("span",{className:"text-danger",children:["\u041c\u0438\u043c\u043e: ",this.state.wrongAnswerCounter]})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"dev-container",children:Object(n.jsxs)("div",{className:"dividend",children:[this.state.firstNum*this.state.secondNum,Object(n.jsxs)("div",{className:"divisor",children:[this.state.secondNum,Object(n.jsx)("div",{className:"dev-answer",children:Object(n.jsx)(b,{onInputAnswer:function(t){t&&(t==e.state.firstNum*e.state.secondNum/e.state.secondNum?e.setState((function(e){return{rightAnswerCounter:e.rightAnswerCounter+1,firstNum:h(1e3),secondNum:h(10)}})):e.setState((function(e){return{wrongAnswerCounter:e.wrongAnswerCounter+1}})),console.log("Right answer = ".concat(e.state.firstNum*e.state.secondNum/e.state.secondNum," \nUser input   = ").concat(t)))}})})]})]})})]})}},{key:"render",value:function(){return this.dev()}}]),s}(r.Component)),N=(s(18),function(e){return Object(n.jsxs)("div",{children:[e.selectedExpression.add&&Object(n.jsx)(v,{}),e.selectedExpression.sub&&Object(n.jsx)(m,{}),e.selectedExpression.dev&&Object(n.jsx)(O,{}),e.selectedExpression.mul&&Object(n.jsx)(x,{})]})}),f=[{label:"+",id:"add",cls:"danger"},{label:"-",id:"sub",cls:"warning"},{label:"*",id:"mul",cls:"success"},{label:"/",id:"dev",cls:"primary"}],p=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={add:!1,sub:!1,mul:!1,dev:!0},e.clearState=function(){e.setState((function(){return{add:!1,sub:!1,mul:!1,dev:!1}}))},e.btnClicked=function(t){switch(e.clearState(),t){case"add":e.setState({add:!0});break;case"sub":e.setState({sub:!0});break;case"mul":e.setState({mul:!0});break;case"dev":e.setState({dev:!0});break;default:console.error("Wrong heder props (clickedBtn)")}},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"version",children:"v1.02"}),Object(n.jsx)(j,{buttons:f,btnClicked:this.btnClicked,selectedBtn:this.state}),Object(n.jsx)("hr",{}),Object(n.jsx)(N,{selectedExpression:this.state})]})}}]),s}(r.Component);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.59973fb7.chunk.js.map