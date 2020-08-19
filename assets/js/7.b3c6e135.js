(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{355:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git问题记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git问题记录"}},[s._v("#")]),s._v(" Git问题记录")]),s._v(" "),a("h2",{attrs:{id:"git-中-gitignore-使用和-gitignore-无效的解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-中-gitignore-使用和-gitignore-无效的解决方法"}},[s._v("#")]),s._v(" Git 中.gitignore 使用和.gitignore 无效的解决方法")]),s._v(" "),a("ol",[a("li",[s._v("创建gitignore文件")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" .gitignore \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("然后打开文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("open .gitignore\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("添加忽略信息并保存")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("OS X\n.DS_Store\n# Xcode\nbuild/\n*.pbxuser\n!default.pbxuser\n*.mode1v3\n!default.mode1v3\n*.mode2v3\n!default.mode2v3\n*.perspectivev3\n!default.perspectivev3\nxcuserdata\n*.xccheckout\nprofile\n*.moved-aside\nDerivedData\n*.hmap\n*.ipa\n# Bundler\n.bundle\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("可是居然没有效果，后来谷歌才知道：\n.gitignore只能忽略那些原来没有被 track 的文件，如果某些文件已经被纳入了版本管理中，则修改 .gitignore 是无效的。"),a("br"),s._v("\n解决方法是先把本地缓存删除，然后再提交。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -r --cached "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'We really don'")]),s._v("t want Git to track this anymore"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果缓存中有重要的数据更改，那么你需要单独删除不要的缓存：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" --cached logs/xx.log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("补充一下 .gitignore 的匹配规则：\n此为注释 – 将被 Git 忽略")]),s._v(" "),a("ul",[a("li",[s._v(".a        # 忽略所有 .a 结尾的文件")]),s._v(" "),a("li",[s._v("!lib.a    # 但 lib.a 除外")]),s._v(" "),a("li",[s._v("/TODO     # 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO")]),s._v(" "),a("li",[s._v("build/    # 忽略 build/ 目录下的所有文件")]),s._v(" "),a("li",[s._v("doc/.txt  # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt")])]),s._v(" "),a("p",[s._v("参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://segmentfault.com/q/1010000000430426",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git 忽略已经被提交的文件"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"http://www.pfeng.org/archives/840",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git 忽略规则及 .gitignore 规则不生效的解决办法"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);