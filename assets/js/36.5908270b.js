(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{419:function(e,t,n){"use strict";n.r(t);var a=n(44),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("从官网经典的 HelloWorld 开始学习吧！")]),e._v(" "),n("blockquote",[n("p",[e._v("引入 mxGraph")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('//首先要声名一个全局变量 mxBasePath 指向一个路径，然后引入 mxGraph。\n//mxBasePath 指向的路径作为 mxGraph 的静态资源路径,都是 mxGraph 运行过程中所需要的，所以要在引入 mxGraph 前先设置 mxBasePath\n\n<script type="text/javascript">\nmxBasePath = \'../src\';\n<\/script>\n<script type="text/javascript" src="../src/js/mxClient.js"><\/script>\n\n创建主方法\n\nfunction main(container) {\n if (!mxClient.isBrowserSupported()) {\n mxUtils.error(\'Browser is not supported!\', 200, false)\n } else {\n var graph = new mxGraph(container)\n var parent = graph.getDefaultParent()\n graph.getModel().beginUpdate()\n try {\n //画图 ...\n } finally {\n graph.getModel().endUpdate()\n } }\n}\n//beginUpdate、endUpdate 用于创建一个事务，一次 beginUpdate 必须对应一次 endUpdate\n//为了保证，假如 beginUpdate 执行失败，endUpdate 永远不会被调用，beginUpdate 一定要放到 try 块之外\n//为了保证，假如 try 块内更新失败，endUpdate 也一定被调用，beginUpdate 一定要放到 finally 块 //使用 beginUpdate 与 endUpdate 可提高更新视图性能，框架内部做撤消/重做管理也需要 beginUpdate、endUpdate\n')])])]),n("blockquote",[n("p",[e._v("insertVertex 和 insertEdge")])]),e._v(" "),n("ul",[n("li",[e._v("vertex 和 edge 都是 mxCell(value, geometry, style)的实例;位置信息都是 mxGeometry(x, y, width, height) 的实例;\nvertex 是通过 setVertex(true)设置为节点;edge 是通过 setEdge(true)设置为边;最后通过 addCells 方法将元素添加到画布中")]),e._v(" "),n("li",[e._v("mxGeometry(x, y, width, height)代表图形的几何信息")]),e._v(" "),n("li",[e._v("relative 为 false 的节点，表示以画布左上角为基点进行定位，x、y 使用的是绝对单位 。insertVertex 默认创建 relative 为 false 的节点。")]),e._v(" "),n("li",[e._v("relative 为 true 的节点，表示以父节点左上角为基点进行定位，x、y 使用的是相对单位。x、y 取值范围都是 [-1,1]")]),e._v(" "),n("li",[e._v("relative 为 true 的边，x、y 用于定位 label。insertEdge 会创建一条 relative 为 true 的边。x 取值范围是 [-1,1]，-1 为起点，0 为中点，1 为终点。y 表示 label 在边的正交线上移到的距离。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);