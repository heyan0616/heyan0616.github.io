(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{290:function(v,_,t){v.exports=t.p+"assets/img/TACCB-1.5368a6be.jpg"},291:function(v,_,t){v.exports=t.p+"assets/img/TACCB-2.90dc0626.jpg"},734:function(v,_,t){"use strict";t.r(_);var s=t(0),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h1",{attrs:{id:"事务、acid、cap、一致性、base"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务、acid、cap、一致性、base"}},[v._v("#")]),v._v(" 事务、ACID、CAP、一致性、BASE")]),v._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[v._v("此文为转载 （通常一篇文章会参考多处，也会添加自己的理解，引用地址如有遗漏，请指出）")]),v._v(" "),s("ul",[s("li",[v._v("https://www.jianshu.com/p/2c30d1fe5c4e")]),v._v(" "),s("li",[v._v("https://www.cnblogs.com/xrq730/p/4944768.html")]),v._v(" "),s("li",[v._v("Others ... ...")])])]),v._v(" "),s("br"),v._v(" "),s("p",[v._v("理论文章。多处参考、理解。")]),v._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),s("p",[v._v("在介绍具体的模型之前，我想先在这里简单的总结！！！")]),v._v(" "),s("p",[v._v("通常模型的产生是基于现实的问题，在最初的单机事务中，ACID提供了很好的理论指导；而随着分布式的产生，人们需要新的模型来解决实际遇到的问题，CAP/BASE应运而生。所以在理解它们之前，我们要多思考，这些理论背后所解决的问题，以及具体实现。")]),v._v(" "),s("h2",{attrs:{id:"什么是事务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是事务"}},[v._v("#")]),v._v(" "),s("strong",[v._v("什么是事务")])]),v._v(" "),s("p",[v._v("事务是指由一系列数据库操作组成的一个完整的逻辑过程，这个过程中的所有操作要么都成功，要么都不成功。比如：常见的例子就是银行转账的例子，一次转账操作会包含多个数据库操作，而这些数据库操作需要放到一个事务当中，保证其要么都成功，要么都不成功。")]),v._v(" "),s("p",[v._v("无论是数据库事务还是分布式事务，概念都是一样的。只是具体要解决的问题有所区别而已。")]),v._v(" "),s("h2",{attrs:{id:"acid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acid"}},[v._v("#")]),v._v(" "),s("strong",[v._v("ACID")])]),v._v(" "),s("p",[v._v("ACID针对的是数据库事务（单机应用事务？）的四大特性(简称ACID)：指的是atomicity(原子性)；consistency(一致性)；isolation(隔离性)；durability(持久性)。")]),v._v(" "),s("ol",[s("li",[v._v("原子性(atomicity): 指所有在事务中的操作要么都成功，要么都不成功，所有的操作都不可分割，没有中间状态。一旦某一步执行失败，就会全部回滚到初始状态。")]),v._v(" "),s("li",[v._v("一致性(consistency): 指的是逻辑上的一致性，即所有操作是符合现实当中的期望的。（参考下文“"),s("em",[v._v("ACID一致性")]),v._v("”）")]),v._v(" "),s("li",[v._v("隔离性(isolation): 即不同事务之间的相互影响和隔离的程度。比如，不同的隔离级别，事务的并发程度也不同，最强的隔离状态是所有的事务都是串行化的（serializable）（即一个事务完成之后才能进行下一个事务），这样并发性也会降到最低，在保证了强一致性的情况下，性能也会受很大影响，所以在实际工程当中，往往会折中一下。")]),v._v(" "),s("li",[v._v("持久性(durability): 可以简单地理解为事务执行完毕后数据不可逆并持久化存储于存储系统当中")])]),v._v(" "),s("p",[s("strong",[v._v("ACID模型要求一个事务必须满足上面的四点，这是对关系型传统数据库的指导性依据。而非关系型数据库NoSql则不再依赖这一模型")]),v._v(", ACID在数据库事务中体现，CAP和BASE则是分布式事务的理论，结合业务系统，例如订单管理，例如仓储管理等，可以借鉴这些理论，从而解决问题。")]),v._v(" "),s("h2",{attrs:{id:"理解一致性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解一致性"}},[v._v("#")]),v._v(" "),s("strong",[v._v("理解一致性")])]),v._v(" "),s("p",[v._v("实际上我们通常说的数据库事务的一致性和分布式系统的一致性并不是一个概念。这里可以区分成“内部一致性”和“外部一致性”。“内部一致性”搞数据库的人很少这么说，一般就直接说一致性，更准确的说是“Consistency in ACID”（“事务 ACID 属性中的一致性”）；“外部一致性”是针对分布式系统而言的，分布式领域提及的 Consistency 表示系统的正确性模型，著名的也是臭名昭著的 CAP 理论中的 C 就是这个范畴的。这主要是由于分布式系统写入和读取都可能不在同一台机器上，而这必然会有一段时间导致不同机器上所存的数据不一致的情况，这就是所谓的“不一致时间窗口”。")]),v._v(" "),s("h3",{attrs:{id:"acid一致性（内部一致性）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acid一致性（内部一致性）"}},[v._v("#")]),v._v(" "),s("strong",[v._v("ACID一致性（内部一致性）")])]),v._v(" "),s("p",[v._v("要理解内部一致性也就是我们通常所说的ACID中的一致性，就必须从反面考虑什么情况下是不一致的。不一致的情况主要有以下几种情况：")]),v._v(" "),s("div",{staticStyle:{display:"flex"}},[s("img",{staticStyle:{display:"block"},attrs:{src:t(290),alt:"",align:"left"}})]),v._v(" "),s("ul",[s("li",[v._v("修改丢失：丢失修改是事务A和B先后更改数据数据x（假设初始是x0)，但是在A未正式更改前，B已经读取了原先的数据x0，最后A更改后为x1，B更改的并不是A更新后的x1，而是更改的x0，更改后假设为x2，这时x2将x1覆盖了，相当于事务A针对x的更改丢失了。")]),v._v(" "),s("li",[v._v("脏读： 事务T1读取了T2更改的x，但是T2在实际存储数据时可能出错回滚了，这时T1读取的实际是无效的数据，这种情况下就是脏读")]),v._v(" "),s("li",[v._v("不可重复读：是说在T1读取x时，由于中间T2更改了x，所以T1前后两次读取的x值不相同，这就是所谓的不可重复读")]),v._v(" "),s("li",[v._v("幻读：在T1读取符合某个条件的所有记录时，T2增加了一条符合该条件的记录，这就导致T1执行过程中前后读取的记录可能不一致，即T2之后读取时会多出一条记录。")])]),v._v(" "),s("p",[v._v("其中前三种（丢失修改、不能重复读、脏读）都是由于并发事务在修改同一份数据的时候导致的问题，此类问题可以通过对同一个资源加锁的方式来解决，而最后一种情况是由于不同事务并发时，新增数据导致的问题，对于新增的记录是无法加锁的，此种情况只能通过事务的串行化来解决。而串行化与并发是矛盾的，所以要在性能和事务的一致性强度上取得一个平衡，就涉及到不同的隔离等级。")]),v._v(" "),s("blockquote",[s("p",[s("strong",[v._v("理解隔离性")])]),v._v(" "),s("p",[v._v("事务的隔离级别从低到高有")]),v._v(" "),s("p",[v._v("读未提交（Read uncommitted）、读提交（read committed）、可重复读（repeatable read）和串行化（Serializable）")]),v._v(" "),s("ul",[s("li",[v._v("Read Uncommitted：事务读数据时不会加锁，写数据时会有行级共享锁。假设事务1先于事务2，当事务1更新数据的时候，事务2可以读取事务1未提交的数据，但是不能更新事务1正在更新的数据。而如果事务1只是读数据，那么事务2既可以读数据，也可以更新数据。")]),v._v(" "),s("li",[v._v("这种情况下无法规避脏读，不可重复读的问题。")]),v._v(" "),s("li",[v._v("Read Committed：即在一个事务修改数据过程中，如果事务还没提交，其他事务不能读该数据，或者说只能读取committed的数据。事务读数据的瞬间会加行级共享锁，一旦读完该行，立即释放该行级共享锁；而写数据的瞬间会加行级排它锁，直到事务结束。这种情况下就避免了脏读，但是却不能避免不可重复读的问题")]),v._v(" "),s("li",[v._v("Repeatable Read：当然就再升一级，为的就是避免不可重复读的问题，所以名字叫repeatable read。怎么实现的呢，我们知道read committed是，事务读操作只在读的一瞬间加锁，读完这行就释放锁了，而repeatable read级别是读的一瞬间加锁，但是一直到事务结束才释放锁。但是repeatable read不能解决幻读的问题，因为幻读是增加记录，并不是更改原先的记录。")]),v._v(" "),s("li",[v._v("Serialization：到达这一级别的隔离，可以彻底解决一致性的所有问题。一般来说是通过加表锁来解决串行化的问题。")])])]),v._v(" "),s("h3",{attrs:{id:"分布式一致性（外部一致性）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式一致性（外部一致性）"}},[v._v("#")]),v._v(" 分布式一致性（外部一致性）")]),v._v(" "),s("p",[v._v("在计算机科学领域，"),s("strong",[v._v("分布式一致性")]),v._v("是一个相当重要且被广泛探索与论证问题，首先来看三种业务场景。")]),v._v(" "),s("p",[s("strong",[v._v("场景一：火车站售票")])]),v._v(" "),s("p",[v._v("假如说我们的终端用户是一位经常坐火车的旅行家，通常他是去车站的售票处购买车 票，然后拿着车票去检票口，再坐上火车，开始一段美好的旅行----一切似乎  都是那么和谐。想象一下，如果他选择的目的地是杭州，而某一趟开往杭州的火车 只剩下最后一张车票，可能在同一时刻，不同售票窗口的另一位乘客也购买了同一张车票。假如说售票系统没有进行一致性的保障，两人都购票成功了。而在检票口 检票的时候，其中一位乘客会被告知他的车票无效----当然，现代的中国铁路售票系统已经很少出现这样的问题了。但在这个例子中我们可以看出，终端用户对 于系统的需求非常简单："),s("br"),v._v('"请售票给我，如果没有余票了，请在售票的时候就告诉我票是无效的"'),s("br"),v._v("这就对购票系统提出了严格的一致性要求----系统的数据（本例中指的就是那趟开往杭州的火车的余票数）无论在哪个售票窗口，每时每刻都必须是准确无误的！")]),v._v(" "),s("p",[s("strong",[v._v("场景二：银行转账")])]),v._v(" "),s("p",[v._v('假如我们的终端用户是一位刚毕业的大学生，通常在拿到第一个月工资的时候，都会选择向家里汇款。当他来到银行柜台，完成转账操作后，银行的柜台服务员会友善地提醒他："您的转账将在N个工作日后到账！"。此时这名毕业生有一定的沮丧，会对那名柜台服务员叮嘱："好吧，多久没关系，钱不要少就好了！"----这也成为了几乎所有用户对于现代银行系统最基本的需求')]),v._v(" "),s("p",[s("strong",[v._v("场景三：网上购物")])]),v._v(" "),s("p",[v._v('假如说我们的终端用户是一位网购达人，当他看见一件库存量为5的心仪商品，会迅速地确认购买，写下收货地址，然后下单----然而，在下单的那个瞬间，系统可能会告知该用户："库存量不足！"。此时绝大部分消费者都会抱怨自己动作太慢，使得心爱的商品被其他人抢走了。'),s("br"),v._v("但其实有过网购系统开发经验的工程师一定明白，在商品详情页上显示的那个库存量，通常不是该商品的真实库存量，只有在真正下单购买的时候，系统才会检查该商品的真实库存量。但是，谁在意呢？")]),v._v(" "),s("p",[s("strong",[v._v("问题的解读")])]),v._v(" "),s("p",[v._v("对于上面三个例子，相信大家一定看出来了，我们的终端用户在使用不同的计算机产品时对于数据一致性的需求是不一样的：")]),v._v(" "),s("ol",[s("li",[v._v("有些系统，既要快速地响应用户，同时还要保证系统的数据对于任意客户端都是真实可靠的，就像火车站售票系统")]),v._v(" "),s("li",[v._v("有些系统，需要为用户保证绝对可靠的数据安全，虽然在数据一致性上存在延时，但最终务必保证严格的一致性，就像银行的转账系统")]),v._v(" "),s("li",[v._v('有些系统，虽然向用户展示了一些可以说是"错误"的数据，但是在整个系统使用过程中，一定会在某一个流程上对系统数据进行准确无误的检查，从而避免用户发生不必要的损失，就像网购系统')])]),v._v(" "),s("p",[s("strong",[v._v("分布一致性的提出")])]),v._v(" "),s("p",[v._v("在分布式系统中要解决的一个重要问题就是数据的复制。在我们的日常开发经验中，相信很多开发人员都遇到过这样的问题：假设客户端C1将系统中的一个值K由V1更新为V2，但客户端C2无法立即读取到K的最新值，需要在一段时间之后才能读取到。这很正常，因为数据库复制之间存在延时。"),s("br"),v._v("分布式系统对于数据的复制需求一般都来自于以下两个原因："),s("br"),v._v("1、为了增加系统的可用性，以防止单点故障引起的系统不可用"),s("br"),v._v("2、提高系统的整体性能，通过负载均衡技术，能够让分布在不同地方的数据副本都能够为用户提供服务"),s("br"),v._v("数据复制在可用性和性能方面给分布式系统带来的巨大好处是不言而喻的，然而数据复制所带来的一致性挑战，也是每一个系统研发人员不得不面对的。"),s("br"),v._v("所谓分布一致性问题，是指在分布式环境中引入数据复制机制之后，不同数据节点之间可能出现的，并无法依靠计算机应用程序自身解决的数据不一致的情况。简单讲，数据一致性就是指在对一个副本数据进行更新的时候，必须确保也能够更新其他的副本，否则不同副本之间的数据将不一致。"),s("br"),v._v('那么如何解决这个问题？一种思路是"'),s("strong",[v._v("既然是由于延时动作引起的问题，那我可以将写入的动作阻塞，直到数据复制完成后，才完成写入动作")]),v._v('"。没错，这似乎能解决问题，而且有一些系统的架构也确实直接使用了这个思路。但这个思路在解决一致性问题的同时，又带来了新的问题：写入的性能。如果你的应用场景有非常多的写请求，那么使用这个思路之后，后续的写请求都将会阻塞在前一个请求的写操作上，导致系统整体性能急剧下降。')]),v._v(" "),s("p",[v._v("总得来说，我们无法找到一种能够满足分布式系统所有系统属性的分布式一致性解决方案。因此，如何既保证数据的一致性，同时又不影响系统运行的性能，是每一个分布式系统都需要重点考虑和权衡的。于是，"),s("strong",[v._v("一致性级别")]),v._v("由此诞生：")]),v._v(" "),s("ol",[s("li",[s("strong",[v._v("强一致性")]),v._v("：这种一致性级别是最符合用户直觉的，它要求系统写入什么，读出来的也会是什么，用户体验好，但实现起来往往对系统的性能影响大")]),v._v(" "),s("li",[s("strong",[v._v("弱一致性")]),v._v("：这种一致性级别约束了系统在写入成功后，不承诺立即可以读到写入的值，也不久承诺多久之后数据能够达到一致，但会尽可能地保证到某个时间级别（比如秒级别）后，数据能够达到一致状态")]),v._v(" "),s("li",[s("strong",[v._v("最终一致性")]),v._v("：最终一致性是弱一致性的一个特例，系统会保证在一定时间内，能够达到一个数据一致的状态。这里之所以将最终一致性单独提出来，是因为它是弱一致性中非常推崇的一种一致性模型，也是业界在大型分布式系统的数据一致性上比较推崇的模型 （详见下文“最终一致性”）")])]),v._v(" "),s("h2",{attrs:{id:"分布式环境的各种问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式环境的各种问题"}},[v._v("#")]),v._v(" "),s("strong",[v._v("分布式环境的各种问题")])]),v._v(" "),s("p",[v._v("在解读分布式理论模型之前，先来看看分布式环境的各种问题。分布式系统体系结构从其出现之初就伴随着诸多的难题和挑战：")]),v._v(" "),s("p",[v._v("1、通信异常")]),v._v(" "),s("p",[v._v("从集中式向分布式演变的过程中，必然引入网络因素，由于网络本身的不可靠性，因此也引入了额外的问题。分布式系统需要在各个节点之间进行网络通信，因此每次网络通信都会伴随着网络不可用的风险，网络光纤、路由器或是DNS等硬件设备或是系统不可用都会导致最终分布式系统无法顺利完成一次网络通信。另外，即使分布式系统各个节点之间的网络通信能够正常进行，其延时也会大于单机操作。通常我们认为现代计算机体系结构中，单机内存访问的延时在纳秒数量级（通常是10ns），而正常的一次网络通信的延迟在0.1~1ms左右（相当于内存访问延时的105倍），如此巨大的延时差别，也会影响到消息的收发过程，因此消息丢失和消息延迟变得非常普遍")]),v._v(" "),s("p",[v._v("2、网络分区")]),v._v(" "),s("p",[s("strong",[v._v("当网络由于发生异常情况，导致分布式系统中部分节点之间的网络延时不断增大，最终导致组成分布式系统的所有节点中，只有部分节点之间能够正常通信，而另一些节点则不能----我们将这个现象称为网络分区")]),v._v("。当网络分区出现时，分布式系统会出现局部小集群，在极端情况下，这些局部小集群会独立完成原本需要整个分布式系统才能完成的功能，包括对数据的事物处理，这就对分布式一致性提出了非常大的挑战")]),v._v(" "),s("p",[v._v("3、三态")]),v._v(" "),s("p",[v._v("上面两点，我们已经了解到在分布式环境下，网络可能会出现各式各样的问题，因此分布式系统的每一次请求与响应，存在特有的三态概念，即"),s("strong",[v._v("成功、失败、超时")]),v._v("。在传统的单机系统中，应用程序在调用一个函数之后，能够得到一个非常明确的响应：成功或失败。而在分布式系统中，由于网络是不可靠的，虽然在绝大部分情况下，网络通信也能够接受到成功或失败的响应，当时当网络出现异常的情况下，就可能会出现超时现象，通常有以下两种情况：")]),v._v(" "),s("ul",[s("li",[v._v("由于网络原因，该请求并没有被成功地发送到接收方，而是在发送过程中就发生了消息丢失现象")]),v._v(" "),s("li",[v._v("该请求成功地被接收方接收后，进行了处理，但是在将响应反馈给发送方的过程中，发生了消息丢失现象")])]),v._v(" "),s("p",[v._v("当出现这样的超时现象时，网络通信的发起方是无法确定当前请求是否被成功处理的")]),v._v(" "),s("p",[v._v("4、节点故障")]),v._v(" "),s("p",[v._v('节点故障则是分布式环境下另一个比较常见的问题，指的是组成分布式系统的服务器节点出现的宕机或"僵死"现象，通常根据经验来说，每个节点都有可能出现故障，并且每天都在发生')]),v._v(" "),s("h2",{attrs:{id:"cap理论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cap理论"}},[v._v("#")]),v._v(" "),s("strong",[v._v("CAP理论")])]),v._v(" "),s("p",[v._v("新的需求，新的挑战，传统本地事务是基于本地数据库实现的，但是在多服务器上，需要新的指导思想，于是有了CAP理论。CAP定理，又被叫作布鲁尔定理。对于设计分布式系统来说(不仅仅是分布式事务)的架构师来说，CAP就是你的入门理论。")]),v._v(" "),s("p",[v._v("所以CAP理论主要是针对分布式系统（特别是分布式存储领域）的，C是指Consistency一致性，A是指Availability可用性，P是指Partition tolerance分区容忍性。CAP定理认为分布式系统中这三个特性最多只能同时满足两个特性。下面我们来分别看下这三个特性究竟是什么意思。")]),v._v(" "),s("div",{staticStyle:{display:"flex"}},[s("img",{staticStyle:{display:"block"},attrs:{src:t(291),alt:"",align:"left"}})]),v._v(" "),s("ul",[s("li",[v._v("一致性(Consistency): 指在分布式系统中的所有数据备份，在同一时刻是否同样的值。（等同于所有节点访问同一份最新的数据副本）")]),v._v(" "),s("li",[v._v("可用性(Availability): 在集群中一部分节点故障后，集群整体是否还能响应客户端的读写请求。（对数据更新具备高可用性）")]),v._v(" "),s("li",[v._v("分区容忍性(Partition tolerance): 即当节点之间无法正常通信时，就产生了分区，而分区产生后，依然能够保证服务可用，那么我们就说系统是分区容忍的。显然如果节点越多，且备份越多，分区容忍度就越高（因为即便是其中一个或多个节点挂了，仍然有其它节点和备份可用）。")])]),v._v(" "),s("p",[v._v("CAP原理指的是，这三个要素最多只能同时实现两点，不可能三者兼顾。因此在进行分布式架构设计时，必须做出取舍。而"),s("strong",[v._v("对于分布式数据系统，分区容忍性是基本要求")]),v._v("，否则就失去了价值。因此设计分布式数据系统，就是在一致性和可用性之间取一个平衡。对于大多数web应用，其实并不需要强一致性，因此牺牲一致性而换取高可用性，是目前多数分布式数据库产品的方向。"),s("br"),v._v("当然，牺牲一致性，并不是完全不管数据的一致性，否则数据是混乱的，那么系统可用性再高分布式再好也没有了价值。牺牲一致性，只是不再要求关系型数据库中的强一致性，而是只要系统能达到"),s("strong",[v._v("最终一致性")]),v._v("即可，考虑到客户体验，这个最终一致的时间窗口，要尽可能的对用户透明，也就是需要保障“用户感知到的一致性”。通常是通过数据的多份异步复制来实现系统的高可用和数据的最终一致性的，“用户感知到的一致性”的时间窗口则取决于数据复制到一致状态的时间。")]),v._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[v._v("辅助阅读")]),v._v(" "),s("p",[v._v("对大型网站，可用性与分区容忍性优先级要高于数据一致性，一般会尽量朝着 A、P 的方向设计，然后通过其它手段保证对于一致性的商务需求。架构设计师不要精力浪费在如何设计能满足三者的完美分布式系统，而是应该进行取舍。\n不同数据对于一致性的要求是不同的。举例来讲，用户评论对不一致是不敏感的，可以容忍相对较长时间的不一致，这种不一致并不会影响交易和用户体验。而产品价格数据则是非常敏感的，通常不能容忍超过10秒的价格不一致。")])]),v._v(" "),s("h2",{attrs:{id:"最终一致性-eventually-consistent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最终一致性-eventually-consistent"}},[v._v("#")]),v._v(" "),s("strong",[v._v("最终一致性(eventually consistent)")])]),v._v(" "),s("p",[v._v("对于一致性，可以分为从客户端和服务端两个不同的视角。从客户端来看，一致性主要指的是多并发访问时更新过的数据如何获取的问题。从服务端来看，则是更新如何复制分布到整个系统，以保证数据最终一致。一致性是因为有并发读写才有的问题，因此在理解一致性的问题时，一定要注意结合考虑并发读写的场景。")]),v._v(" "),s("p",[v._v("从客户端角度，多进程并发访问时，更新过的数据在不同进程如何获取的不同策略，决定了不同的一致性。对于关系型数据库，要求更新过的数据能被后续的访问都能看到，这是"),s("strong",[v._v("强一致性")]),v._v("。如果能容忍后续的部分或者全部访问不到，则是"),s("strong",[v._v("弱一致性")]),v._v("。如果经过一段时间后要求能访问到更新后的数据，则是"),s("strong",[v._v("最终一致性")])]),v._v(" "),s("p",[v._v("最终一致性根据更新数据后各进程访问到数据的时间和方式的不同，又可以区分为:")]),v._v(" "),s("ul",[s("li",[s("strong",[v._v("因果一致性（"),s("strong",[s("strong",[v._v("Causal consistency")])]),v._v("）")]),v._v("。如果进程A通知进程B它已更新了一个数据项，那么进程B的后续访问将返回更新后的值，且一次写入将保证取代前一次写入。与进程A无因果关系的进程C的访问遵守一般的最终一致性规则。")]),v._v(" "),s("li",[s("strong",[v._v("“读己之所写（read-your-writes")]),v._v(" "),s("strong",[v._v("consistency")]),v._v("**）”一致性**。当进程A自己更新一个数据项之后，它总是访问到更新过的值，绝不会看到旧值。这是因果一致性模型的一个特例。")]),v._v(" "),s("li",[s("strong",[v._v("会话（Session）一致性")]),v._v("。这是上一个模型的实用版本，它把访问存储系统的进程放到会话的上下文中。只要会话还存在，系统就保证“读己之所写”一致性。如果由于某些失败情形令会话终止，就要建立新的会话，而且系统的保证不会延续到新的会话。")]),v._v(" "),s("li",[s("strong",[v._v("单调（Monotonic Read）读一致性")]),v._v("。如果进程已经看到过数据对象的某个值，那么任何后续访问都不会返回在那个值之前的值。")]),v._v(" "),s("li",[s("strong",[v._v("单调（Monotonic Write）写一致性")]),v._v("。系统保证来自同一个进程的写操作顺序执行。要是系统不能保证这种程度的一致性，就非常难以编程了。")])]),v._v(" "),s("p",[v._v("上述最终一致性的不同方式可以进行组合，例如单调读一致性和读己之所写一致性就可以组合实现。并且从实践的角度来看，这两者的组合，读取自己更新的数据，和一旦读取到最新的版本不会再读取旧版本，对于此架构上的程序开发来说，会少很多额外的烦恼。")]),v._v(" "),s("p",[v._v("从服务端角度，如何尽快将更新后的数据分布到整个系统，降低达到最终一致性的时间窗口，是提高系统的可用度和用户体验非常重要的方面。"),s("strong",[v._v("对于分布式数据系统：")])]),v._v(" "),s("ul",[s("li",[v._v("N — 数据复制的份数")]),v._v(" "),s("li",[v._v("W — 更新数据是需要保证写完成的节点数")]),v._v(" "),s("li",[v._v("R — 读取数据的时候需要读取的节点数")])]),v._v(" "),s("p",[v._v("如果W+R>N，写的节点和读的节点重叠，则是强一致性。例如对于典型的一主一备同步复制的关系型数据库，N=2,W=2,R=1，则不管读的是主库还是备库的数据，都是一致的。"),s("br"),v._v("如果W+R<=N，则是弱一致性。例如对于一主一备异步复制的关系型数据库，N=2,W=1,R=1，则如果读的是备库，就可能无法读取主库已经更新过的数据，所以是弱一致性。"),s("br"),v._v("对于分布式系统，为了保证高可用性，一般设置N>=3。不同的N,W,R组合，是在可用性和一致性之间取一个平衡，以适应不同的应用场景。")]),v._v(" "),s("ul",[s("li",[v._v("如果N=W,R=1，任何一个写节点失效，都会导致写失败，因此可用性会降低，但是由于数据分布的N个节点是同步写入的，因此可以保证强一致性。")]),v._v(" "),s("li",[v._v("如果N=R,W=1，只需要一个节点写入成功即可，写性能和可用性都比较高。但是读取其他节点的进程可能不能获取更新后的数据，因此是弱一致性。这种情况下，如果W<(N+1)/2，并且写入的节点不重叠的话，则会存在写冲突")])]),v._v(" "),s("h2",{attrs:{id:"base理论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#base理论"}},[v._v("#")]),v._v(" "),s("strong",[v._v("BASE理论")])]),v._v(" "),s("p",[v._v("BASE是Basically Available（基本可用）、Soft state（软状态）和Eventually consistent（最终一致性）三个短语的缩写。BASE理论是对CAP中一致性和可用性权衡的结果，其来源于对大规模互联网系统分布式实践的总结，是基于CAP定理逐步演化而来的。BASE理论的核心思想是：即使无法做到强一致性，但每个应用都可以根据自身业务特点，采用适当的方式来使系统达到最终一致性。接下来看一下BASE中的三要素：")]),v._v(" "),s("p",[s("strong",[v._v("1、基本可用")])]),v._v(" "),s("p",[v._v("基本可用是指分布式系统在出现不可预知故障的时候，允许损失部分可用性----注意，这绝不等价于系统不可用。比如：")]),v._v(" "),s("ul",[s("li",[v._v("响应时间上的损失。正常情况下，一个在线搜索引擎需要在0.5秒之内返回给用户相应的查询结果，但由于出现故障，查询结果的响应时间增加了1~2秒")]),v._v(" "),s("li",[v._v("系统功能上的损失：正常情况下，在一个电子商务网站上进行购物的时候，消费者几乎能够顺利完成每一笔订单，但是在一些节日大促购物高峰的时候，由于消费者的购物行为激增，为了保护购物系统的稳定性，部分消费者可能会被引导到一个降级页面")])]),v._v(" "),s("p",[s("strong",[v._v("2、软状态")])]),v._v(" "),s("p",[v._v("软状态指允许系统中的数据存在中间状态，并认为该中间状态的存在不会影响系统的整体可用性，即允许系统在不同节点的数据副本之间进行数据同步的过程存在延时")]),v._v(" "),s("p",[s("strong",[v._v("3、最终一致性")])]),v._v(" "),s("p",[v._v("最终一致性强调的是所有的数据副本，在经过一段时间的同步之后，最终都能够达到一个一致的状态。因此，最终一致性的本质是需要系统保证最终数据能够达到一致，而不需要实时保证系统数据的强一致性。")]),v._v(" "),s("p",[v._v("总的来说，BASE理论面向的是大型高可用可扩展的分布式系统，和传统的事务ACID特性是相反的，"),s("strong",[v._v("它完全不同于ACID的强一致性模型，而是通过牺牲强一致性来获得可用性，并允许数据在一段时间内是不一致的，但最终达到一致状态")]),v._v("。但同时，在实际的分布式场景中，不同业务单元和组件对数据一致性的要求是不同的，因此在具体的分布式系统架构设计过程中，ACID特性和BASE理论往往又会结合在一起。")]),v._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[v._v("辅助阅读现在NoSQL运动丰富了拓展了BASE思想，可按照具体情况定制特别方案，比如忽视一致性，获得高可用性等等，NOSQL应该有下面两个流派：")]),v._v(" "),s("p",[s("strong",[v._v("key-value存储")]),v._v("：可根据CAP三原则灵活选择不同倾向的数据库产品")]),v._v(" "),s("p",[s("strong",[v._v("领域模型 + 分布式缓存 + 存储")]),v._v("：可根据CAP三原则结合自己项目定制灵活的分布式方案，难度高")])])])}),[],!1,null,null,null);_.default=a.exports}}]);