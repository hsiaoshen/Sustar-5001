# sustar666
666
# Sustar 知识问答系统

## 网站搭建
***
* 客户端: 结构Bootstrap(>=3.3.0 非alpha版本) 效果jQuery(>=3.0) 交互Ajax,socket(>=1.7.0)
* 服务器端: Node.js(express框架) mongoose
* 数据库: mongodb

## Database(数据库)
> base

### Collections(集合)

****
**用户信息(users)**

中文名字 | 英文名字 | type | 是否必填 | defaults | 备注
-------|-------- |------|---------|----------|-----
id     |    id   | object|  是 　　|系统自动填写|　　 |  
手机或者邮箱|uid   |String |  是　　 |   无　　　|
密码    |password |String|  是　　　|   无　　　|
昵称    | nick   | Sting |  否　　　|   "无名"　　| 
个性签名 |signature|String| 否      |  "这个用户很懒，什么也没有留下！"
我的回答 |myanswer|String| 　　　　　|         |
我的提问 |myquestion|String|       |         |
我的评论 |mycomment|String |        |        |
我关注的问题|issuesq|Array|          |[　]     |数组中存放问题的id
关注的标签|issuestag|Array|          |[ ]     |数组中存放标签的id
关注我的人与人数|focusmeperson|Array|   |[ ]     |数组中存放关注我的人的id，人数长度获取
我关注的人与人数|myfocusperson|Array|    |[ ]     |数组中存放我关注的人的id，人数长度获取
声望|prestige| Number      |      |    0    |问题与回答被赞或者采纳加声望
活跃度|liveness|Number    |       |     0   |每次登录与提问与回答问题加活跃度
主页浏次数|homeview|Number|        |  0   |每次被人打开增加一次
注册时间|registertime|DateObject|    |      |注册时获取
最近登录时间|Latestlogontime|Date|   |       |每次登录时获取覆盖
出生日期|birthday|Date|          |          | 
性别|sex|String|        | "不明生物"|
email|email|String|     |          | 如果该用户是邮箱注册的可获取其邮箱
地址|address|String|      |"中国"|
个人介绍|personintroduce|String|     |"这个很懒，什么页没有留下！"|

****
 **问题(questions)**

中文名字 | 英文名字 | type | 是否必填 | defaults | 备注
-------|------ |----|-------|--------|---
id　　　| id | object | 是 |        |
问题的标题| title | String | 是 |  |
问题的内容|questioncontent|String| 是　|   |   
提问者的id|personid| String| 是　|    | 
关注该问题的人数与id|focusperson|Array| 　| [ ]  |讲提问者与回答者与评论者加入其中,人数通过长度获取
每个回答的id|answeruid|Array|  | [ ]|
问题的状态（暂无回答、有回答但未解决、问题已解决）|state|String| 是　|noanswer| 用三个字符串表示，noanswer,answerforming，resolved
问题所属的标签|tag|Array|   | [] | 存放标签的id
问题的浏览次数|questionview|Number|    | 0 | 
提问的时间|questiondate|Date|   |      |提交问题时获取
问题获得的赞数|praise|Number|   |  0  |
问题的代码|code|--------------------------
最后更新时间|lastdate|Date|    |     |有人回答或者评论时获取覆盖

****

**回答answers**

中文名字 | 英文名字 | type | 是否必填 | defaults | 备注
-------|------ |----|-------|--------|---
id　　　|  id   | object|  是　|        |     
回答的内容|answer| String|  是|      |    
回答者的id|answerid|String| 是|      |
问题的id|questionid|String|是|       |
回答的评论数与评论的id|commentid|Array|  |[ ]|存放评论的id，数量通过长度获取
回答的时间|answerdate|Dare|    |      |在回答时获取
回答获得的赞数|praise|Number|   | 0  |
是否被采纳|adopt|Booler|     |  false   |

****

**标签tags**

中文名字 | 英文名字 | type | 是否必填 | defaults | 备注
-------|------ |----|-------|--------|---
id　| 
标签名| tag|  String|  是 |     |
标签所数的类|class| Array| 是　| [ ] | 存放所属的类
关注该标签的人数| issuesnum| Number| [ ] | 
标签的描述| describe|String| 是| "" | 对该标签进行简单的介绍

****

**评论comments**

中文名字 | 英文名字 | type | 是否必填 | defaults | 备注
-------|------ |----|-------|--------|---
id　
评论本身内容|comment|String| 是|   |
评论者|commentperson|String|是| "id"|存放评论者的id
评论的时间|commentdate|Date|是|  |在评论时获取
评论获得的赞数|praise|Number|是| 0|被点赞加一

****

## 前台页面

>* 头部

展示热门的几个标签、用关注的人数进行排序

>* 尾部

>* 主页

展示最新问答（时间排序）、最热问答（浏览数排序）、等待问答（时间排序），整合插入问题列表块、用户排行块、头尾部

>* 问题发布页

填写问题标题、问题内容、问题代码

>* 标签页

按类展示全部常用的标签、添加关注标签功能

>* 问题列表块

主页的问题列表块（在问题尾部显示所属于的标签），

>* 用户排行榜块（用于主页、搜索页、话题页）
按照声望排行，

>* 登录、注册

获取用户账号（手机或邮箱）、密码

>* 搜索页

搜索（用输入框的字段匹配问题标题查找，并按获得的赞数排序），整合插入用户排行块

>* 话题（如：html的相关问题）

显示标签介绍，并可选择按时间、赞数、未回答（时间）、未解决（时间，包括了未回答）排序，实现标签排行版（按照关注的人数排行），整合插入用户排行榜，

>* 回答页

显示问题标题、问题所属的标签、提问时间、最后更新时间、问题的内容（可评论）、已有回答（时间）（可评论）、回答框、问题发起者的采纳按钮，整合插入用户排行版块

>* 个人主页

登入后的个人信息

>* 付费信息

>* 404

## 人员分工

　人员 | 分工
 ----- | -----
 兰丰浩　| head,foot,info，回答页。等页面
 余宏图　| 数据库结构设计,搜索页。等页面
 申永哲　| 标签页，路由。等页面
 孙权　| 登录，注册。等页面
 刘霜　| 提问页。等页面
 吴东朔　| index。等页面
 date | 2017/7/12
 
 
 
