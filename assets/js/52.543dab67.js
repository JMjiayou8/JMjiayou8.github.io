(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{438:function(n,e,t){"use strict";t.r(e);var o=t(44),i=Object(o.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("checkbox 和 radio 默认选中是蓝色的，但实际运用中，一般都是会根据系统主题色有所变化。如果是现成 UI 库就不用考虑这个问题啦。但涉及到比较旧的系统，引入 UI 库有点不现实，网上有很多解决方法，我就记录一下个人觉得最简便的吧。")]),n._v(" "),t("p",[t("img",{attrs:{src:"/images/formElem.png",alt:"啦啦"}})]),n._v(" "),t("blockquote",[t("p",[n._v("checkbox")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("/*  效果如上所示\n  *  一般都是用额外元素遮盖，但个人觉得DOM结构就变复杂啦\n  *  用伪类即可实现\n*/\ninput[type='radio'],\ninput[type='checkbox'] {\n  margin-right: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  width: 12px;\n  height: 12px;\n  position: relative;\n  outline: none;\n}\n\ninput[type='radio']:after {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  top: 0;\n  left: 0;\n  content: ' ';\n  background-color: #fff;\n  color: #fff;\n  display: inline-block;\n  visibility: visible;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n\ninput[type='radio']:checked:after {\n  border: 2px solid #eb4b4b;\n}\n\ninput[type='checkbox']:after {\n  content: ' ';\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  top: 0;\n  background-color: #fff;\n  color: #fff;\n  display: inline-block;\n  visibility: visible;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\ninput[type='checkbox']:checked:after {\n  content: '✓';\n  font-size: 12px;\n  line-height: 10px;\n  background-color: #eb4b4b;\n  border: 1px solid #eb4b4b;\n}\n\n")])])]),t("blockquote",[t("p",[n._v("关于 select,主要是它难搞的箭头,以及不同浏览器之间的兼容问题。")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("\nselect {\n/_ 自定义边框字体等 _/\nwidth: 160px;\nheight: 28px;\noutline: none;\nfont-size: 12px;\ncolor: #333;\nline-height: 20px;\npadding: 4px 10px;\n/_如果要加入自定义图片， 就增加这个属性 background: url 或者在 html 中直接加入图标也行_/\nbackground: url('./expand.png') no-repeat 140px center transparent;\nbackground-size: 14px;\n/_Chrome 同 Firefox 与 IE 里面的右侧三角显示的样式不同_/\nborder: solid 1px #ddd;\n/_将默认的 select 选择框样式清除_/\nappearance: none;\n-moz-appearance: none;\n-webkit-appearance: none;\npadding-right: 14px;\n}\n/_清除 iIE 的默认选择框样式_/\nselect::-ms-expand {\ndisplay: none;\n}\n\n")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);