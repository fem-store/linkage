(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{146:function(e,t,l){"use strict";l.r(t);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var l=[],r=!0,n=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(l.push(o.value),!t||l.length!==t);r=!0);}catch(i){n=!0,a=i}finally{try{r||null==c.return||c.return()}finally{if(n)throw a}}return l}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var n={props:["value"],data:function(){return{url:{driver:"",db:"",ip:"",port:""},inputs:[{model:"driver",placeholder:"jdbc",text:":"},{model:"db",placeholder:"mysql",text:"://"},{span:12,model:"ip",placeholder:"127.0.0.1",text:":"},{model:"port",placeholder:"3306",config:{type:"number"}}]}},watch:{value:{handler:function(e){if(e){var t=r(e.match(/([\w]*):([\w]*):\/\/([\w.]*):([\d]*)/),5),l=t[1],n=t[2],a=t[3],o=t[4];this.url=Object.assign({},this.url,{driver:l,db:n,ip:a,port:o})}},immediate:!0},url:{handler:function(e){e.driver&&e.db&&e.ip&&e.port?this.$emit("input","".concat(e.driver,":").concat(e.db,"://").concat(e.ip,":").concat(e.port)):this.$emit("input","")},deep:!0}}},a=l(47),o=Object(a.a)(n,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticStyle:{display:"inline-block"}},[l("el-row",[e._l(e.inputs,function(t,r){return[l("el-col",{key:t.model,attrs:{span:t.span||3}},[l("el-input",e._b({attrs:{placeholder:t.placeholder},model:{value:e.url[t.model],callback:function(l){e.$set(e.url,t.model,l)},expression:"url[input.model]"}},"el-input",t.config,!1))],1),e._v(" "),t.text?l("el-col",{key:r,staticStyle:{"text-align":"center"},attrs:{span:1}},[e._v("\n        "+e._s(t.text)+"\n      ")]):e._e()]})],2)],1)},[],!1,null,null,null).exports,c={mysql:"3306",oracle:"1521"},i={mysql:[{label:"com.mysql.jdbc.Driver",value:"com.mysql.jdbc.Driver"},{label:"com.mysql.cj.jdbc.Driver",value:"com.mysql.cj.jdbc.Driver"}],oracle:[{label:"oracle.jdbc.driver.OracleDriver",value:"oracle.jdbc.driver.OracleDriver"}]},u={data:function(){var e=this;return{content:[{$type:"select",$id:"dialect",label:"\u6570\u636e\u6e90",$options:[{label:"mysql",value:"mysql"},{label:"oracle",value:"oracle"}],atChange:function(t,l){e.$refs.form.setOptions("className",i[l]),e.$refs.form.updateForm({className:""});var r=e.$refs.form.getFormValue().url;e.$refs.form.updateForm({url:r?r.replace(/mysql|oracle/,l):"jdbc:".concat(l,"://:").concat(c[l])})}},{$id:"url",label:"URL",component:o},{$type:"select",$id:"className",label:"\u6570\u636e\u5e93",$enableWhen:"dialect"}],value:{}}},methods:{logVal:function(){this.value=Object.assign({},this.$refs.form.getFormValue())}}},s=Object(a.a)(u,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("h3",[e._v("\u901a\u8fc7\u81ea\u5b9a\u4e49component\u64cd\u63a7\u8054\u52a8")]),e._v(" "),l("el-form-renderer",{ref:"form",attrs:{content:e.content}}),e._v(" "),l("el-button",{on:{click:e.logVal}},[e._v("\u6253\u5370\u6570\u636e")]),e._v(" "),l("pre",[e._v(e._s(e.value))])],1)},[],!1,null,null,null);t.default=s.exports}}]);