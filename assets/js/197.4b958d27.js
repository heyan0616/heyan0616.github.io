(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{883:function(s,n,t){"use strict";t.r(n);var a=t(0),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"常用的linux命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用的linux命令"}},[s._v("#")]),s._v(" 常用的linux命令")]),s._v(" "),t("p",[s._v("一些linux命令和使用案例总结")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看folder的大小")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$du")]),s._v(" -hs /path\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sshpass使用 - 需要先安装，具体参考前文")]),s._v("\nsshpass -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxxxx"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r /xxx/docker_workspace/nginx_blog/html/* root@heyan.site:/home/nginx_blog/html\nsshpass -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxxxx"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@heyan.site "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rm -rf /home/nginx_blog/html/*"')]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 批量修改文件后缀 - 例：批量修改png后缀为jpg")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" *.png"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(".png}")]),s._v('.jpg"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 去除重复行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找非重复行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" -u\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找重复行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" -d\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 统计")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" -c\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 去除重复的行，并生成新的文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" new_file\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## linux 主机之间免密登录设置 ##")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 例如希望在host1上实现对host2的免密登录，在host1上执行:（会在/root/.ssh/下产生秘钥文件）")]),s._v("\nssh-keygen -t rsa -P "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. host1上copy公钥到host2上的/root下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" /root/.ssh/id_rsa.pub root@192.1.1.1:/root\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. 登录host2,将host1的公钥追加到授权文件(authorized_keys)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /root\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" id_rsa.pub "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .ssh/authorized_keys\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4. 此时，在host1就可以对host2发起免密登录了")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@host2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#case1: 可以用来直接登录host2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r /folder/file root@host2:/folder "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#case2: 可以直接scp文件到host2")]),s._v("\n\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# to be added ...")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);