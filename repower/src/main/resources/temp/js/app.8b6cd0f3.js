(function(){"use strict";var t={1339:function(t,n,e){var o=e(7195),r=function(){var t=this,n=t._self._c;return n("div",{staticClass:"box"},[n("h2",[t._v("222 ---- "+t._s(t.username))]),n("button",{on:{click:t.changeUsername}},[t._v("修改----后面的东西"+t._s(t.rgb))]),n("right",{attrs:{rightB:{test:1}}}),n("left")],1)},u=[],i=e(8358),s=function(){var t=this,n=t._self._c;return n("div",[n("h2",[t._v("Left")]),n("Count",{attrs:{init:6}}),n("button",{on:{click:t.sendBus}},[t._v("向兄弟组件传值")])],1)},c=[],a=new o.ZP,f={name:"Left",methods:{sendBus(){a.$emit("getBus",33)}}},l=f,d=e(1001),h=(0,d.Z)(l,s,c,!1,null,"22a60218",null),v=h.exports,p=function(){var t=this,n=t._self._c;return n("div",[n("h2",[t._v("Right"+t._s(t.rightB.test))]),n("Count",{attrs:{init:22},on:{sendToF:t.getS}}),n("h1",[t._v(t._s(t.count))]),n("h1",[t._v("显示bus结果"+t._s(t.bus))])],1)},b=[],g={name:"Right",props:{rightB:{default:"11",type:Object}},methods:{getS(t){console.log("sss"),this.count=t}},data(){return{count:0,bus:0}},mounted(){a.$on("getBus",(t=>{this.bus=t}))}},_=g,m=(0,d.Z)(_,p,b,!1,null,"19221cd6",null),y=m.exports,C={data(){return{username:"张三",dataCh:{age:1},r:222,g:111,b:213}},methods:{changeUsername(){this.dataCh.age="李四"},async initListFromAjax(){const{data:t}=await i.Z.get("http://localhost:8888/index?id=1");console.log(t)}},watch:{"dataCh.age"(t){console.log(t)}},computed:{rgb(){return`rgb(${this.r},${this.g},${this.b})`}},components:{left:v,right:y},beforeCreate(){console.log("这是生命周期函数刚开始创建组件时触发")},created(){this.initListFromAjax()},beforeMount(){},mounted(){},beforeUpdate(){},updated(){},beforeDestroy(){},destroyed(){}},w=C,x=(0,d.Z)(w,r,u,!1,null,"f06bfe72",null),O=x.exports,j=function(){var t=this,n=t._self._c;return n("div",[n("h2",[t._v("这是Count组件")]),n("p",[t._v(" Count的值为"+t._s(t.count)+" ")]),n("button",{on:{click:t.add}},[t._v("添加")]),n("button",{on:{click:function(n){t.count++}}},[t._v("上面button的简写")])])},k=[],Z={name:"Count",data(){return{count:this.init}},methods:{add(){this.count++,this.$emit("sendToF",this.count)}},props:{init:{default:99,type:Number,required:!0}}},B=Z,$=(0,d.Z)(B,j,k,!1,null,"c55e1a46",null),P=$.exports;o.ZP.config.productionTip=!1,o.ZP.component("Count",P),new o.ZP({render:t=>t(O)}).$mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var u=n[o]={exports:{}};return t[o](u,u.exports,e),u.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,u){if(!o){var i=1/0;for(f=0;f<t.length;f++){o=t[f][0],r=t[f][1],u=t[f][2];for(var s=!0,c=0;c<o.length;c++)(!1&u||i>=u)&&Object.keys(e.O).every((function(t){return e.O[t](o[c])}))?o.splice(c--,1):(s=!1,u<i&&(i=u));if(s){t.splice(f--,1);var a=r();void 0!==a&&(n=a)}}return n}u=u||0;for(var f=t.length;f>0&&t[f-1][2]>u;f--)t[f]=t[f-1];t[f]=[o,r,u]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,u,i=o[0],s=o[1],c=o[2],a=0;if(i.some((function(n){return 0!==t[n]}))){for(r in s)e.o(s,r)&&(e.m[r]=s[r]);if(c)var f=c(e)}for(n&&n(o);a<i.length;a++)u=i[a],e.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return e.O(f)},o=self["webpackChunk_002_demo"]=self["webpackChunk_002_demo"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(1339)}));o=e.O(o)})();
//# sourceMappingURL=app.8b6cd0f3.js.map