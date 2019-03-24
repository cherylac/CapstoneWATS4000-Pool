(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],m=0,p=[];m<o.length;m++)i=o[m],r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("a026"),r=a("5f30"),s=a.n(r),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],l={name:"app"},c=l,u=(a("034f"),a("2877")),m=Object(u["a"])(c,i,o,!1,null,null,null),p=m.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showForm,expression:"showForm"}],staticClass:"form-container"},[a("h1",[t._v("Welcome to the Birthdate Pool App!")]),a("p",[t._v("Please enter your email to sign in")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.validateForm(e)}}},[a("p",[a("label",{attrs:{for:"email"}},[t._v("Email\n                    "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._m(0)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.showForm,expression:"!showForm"}],staticClass:"success-message"},[a("h1",[t._v("Thank you for signing in!")]),a("p",[t._v("Please click on the pool you wish to enter. \n                                "),a("ul",[a("li",[a("router-link",{attrs:{to:"./Pool"}},[t._v("Pool")])],1)])])])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("input",{attrs:{type:"submit",value:"Submit"}})])}],f={name:"Home",data(){return{email:"",showForm:!0,showError:!1}},methods:{validateForm:function(){""!=this.email?this.showForm=!1:this.showError=!0}}},h=f,y=(a("c5c3"),Object(u["a"])(h,d,v,!1,null,"accf5806",null)),b=y.exports,w=a("8c4f"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"pool"}},[t._m(0),a("div",{staticClass:"panel panel-default"},[t._m(1),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col"},[a("label",{attrs:{for:"yourName"}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newEntry.contestant,expression:"newEntry.contestant"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"enterContestant",id:"entryContestant"},domProps:{value:t.newEntry.contestant},on:{input:function(e){e.target.composing||t.$set(t.newEntry,"contestant",e.target.value)}}})]),a("div",{staticClass:"col"},[a("label",{attrs:{for:"email"}},[t._v("Your email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newEntry.email,expression:"newEntry.email"}],staticClass:"form-control",attrs:{type:"email","aria-describedby":"enterEmail"},domProps:{value:t.newEntry.email},on:{input:function(e){e.target.composing||t.$set(t.newEntry,"email",e.target.value)}}})]),a("div",{staticClass:"col"},[a("label",{attrs:{for:"guessDate"}},[t._v("Guess birthdate")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newEntry.date,expression:"newEntry.date"}],staticClass:"form-control",attrs:{type:"date","aria-describedby":"guessDate"},domProps:{value:t.newEntry.date},on:{input:function(e){e.target.composing||t.$set(t.newEntry,"date",e.target.value)}}})]),a("div",{staticClass:"col"},[a("label",{attrs:{for:"guessWeight"}},[t._v("Guess weight")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newEntry.weight,expression:"newEntry.weight"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"guessWeight"},domProps:{value:t.newEntry.weight},on:{input:function(e){e.target.composing||t.$set(t.newEntry,"weight",e.target.value)}}})]),a("div",{staticClass:"col"},[a("label",{attrs:{for:"guessName"}},[t._v("Guess name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newEntry.babyname,expression:"newEntry.babyname"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"guessName"},domProps:{value:t.newEntry.babyname},on:{input:function(e){e.target.composing||t.$set(t.newEntry,"babyname",e.target.value)}}})])]),a("div",{staticClass:"panel-body"},[a("form",{attrs:{id:"form"},on:{submit:function(e){return e.preventDefault(),t.addEntry(e)}}},[a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Add Entry"}})])])]),a("div",{staticClass:"panel panel-default"},[t._m(2),a("div",{staticClass:"panel-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-striped"},[t._m(3),a("tbody",t._l(t.entries,function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(e.contestant))]),a("td",[t._v(t._s(e.email))]),a("td",[t._v(t._s(e.date))]),a("td",[t._v(t._s(e.weight))]),a("td",[t._v(t._s(e.babyname))]),a("td",[a("span",{staticClass:"far fa-trash-alt",attrs:{"aria-hidden":"true"},on:{click:function(a){t.removeEntry(e)}}})])])}),0)])])])])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jumbotron"},[a("h1",{staticClass:"display-"},[t._v("Baby Pool")]),a("p",{staticClass:"lead"},[t._v("When do you think the baby will be born? Enter below!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-heading"},[a("h3",{staticClass:"panel-title"},[t._v("Enter Contest")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-heading"},[a("h3",{staticClass:"panel-title"},[t._v("Entries")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Name")]),a("th",[t._v("Email")]),a("th",[t._v("Date")]),a("th",[t._v("Weight")]),a("th",[t._v("Baby's Name")]),a("th")])])}],E=a("8aa5"),C=a.n(E),x=a("854a"),P=a.n(x),j=a("0284"),N=a.n(j);n["a"].use(N.a,{id:"UA-129287138-2",checkDuplicatedScript:!0});let k={apiKey:"AIzaSyCQphEKrAx7M6kCA0wqlj2QICzcrycLpeA",authDomain:"birthdate-pool.firebaseapp.com",databaseURL:"https://birthdate-pool.firebaseio.com",projectId:"birthdate-pool",storageBucket:"birthdate-pool.appspot.com",messagingSenderId:"838139933356"},$=C.a.initializeApp(k),O=$.database(),A=O.ref("entries");var S={name:"pool",firebase:{entries:A},data(){return{newEntry:{contestant:"",email:"",date:"",weight:"",babyname:""}}},methods:{addEntry:function(){A.push(this.newEntry),this.newEntry.contestant="",this.newEntry.email="",this.newEntry.date="",this.newEntry.weight="",this.newEntry.babyname=""},removeEntry:function(t){A.child(t[".key"]).remove(),P.a.success("Entry removed successfully")}}},F=S,D=(a("6c27"),Object(u["a"])(F,_,g,!1,null,null,null)),M=D.exports;n["a"].use(w["a"]);var W=new w["a"]({routes:[{path:"/",name:"Home",component:b},{path:"/pool",name:"Pool",component:M}]});n["a"].use(s.a),n["a"].config.productionTip=!1,new n["a"]({el:"#app",router:W,template:"<App/>",components:{App:p}})},"64a9":function(t,e,a){},"6c27":function(t,e,a){"use strict";var n=a("c67b"),r=a.n(n);r.a},c5c3:function(t,e,a){"use strict";var n=a("d7e4"),r=a.n(n);r.a},c67b:function(t,e,a){},d7e4:function(t,e,a){}});
//# sourceMappingURL=app.b00c14c1.js.map