(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(6),s=a.n(c),i=(a(12),a(4)),o=(a(13),a(7)),u=a.n(o),b=a(0),d=function(e){var t=e.options,a=e.onFeedback;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsx)("button",{type:"button",name:e,onClick:a,className:u.a.button,children:e},e)}))})},j=function(e){var t=e.title,a=e.children;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),a]})};function l(e){var t=e.message;return Object(b.jsx)("p",{children:t})}var p=a(2),h=a.n(p),O=a(3),g=a.n(O),f=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,c=e.positivePercentage;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{className:g.a.paragraph,children:["Good: ",t]}),Object(b.jsxs)("p",{className:g.a.paragraph,children:["Neutral: ",a]}),Object(b.jsxs)("p",{className:g.a.paragraph,children:["Bad: ",n]}),Object(b.jsxs)("p",{className:g.a.paragraph,children:["Total: ",r]}),Object(b.jsxs)("p",{className:g.a.positive,children:["Positive feedback: ",c,"%"]})]})};f.protoTypes={good:h.a.number.isRequired,neutral:h.a.number.isRequired,bad:h.a.number.isRequired,total:h.a.number.isRequired,countPositiveFeedbackPercentage:h.a.number.isRequired};var x=f;function m(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),s=Object(i.a)(c,2),o=s[0],u=s[1],p=Object(n.useState)(0),h=Object(i.a)(p,2),O=h[0],g=h[1],f=function(){return a+o+O};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{title:"Pls leave your feedback",children:Object(b.jsx)(d,{options:["good","neutral","bad"],onFeedback:function(e){switch(e.target.name){case"good":r((function(e){return e+1}));break;case"neutral":u((function(e){return e+1}));break;case"bad":g((function(e){return e+1}));break;default:return}}})}),Object(b.jsx)(j,{title:"Statistics",children:a||o||O?Object(b.jsx)(x,{good:a,neutral:o,bad:O,total:f(),positivePercentage:Math.round(a/f()*100)}):Object(b.jsx)(l,{message:"There is no one feedback yet"})})]})}s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))},3:function(e,t,a){e.exports={paragraph:"Statistics_paragraph__2gpV1",positive:"Statistics_positive__297ZB"}},7:function(e,t,a){e.exports={button:"FeedbackOptions_button__1S4Or"}}},[[17,1,2]]]);
//# sourceMappingURL=main.631df3d6.chunk.js.map