# 问答系统进度(申永哲)

## 2017-07-12

### 任务安排
1. 练习使用git管理工具，并为团队创建整个项目工程，学习协同开发
1. 完成标签页的编写和相关路由
  1. 整个页面分为3个大板块，头部和尾部以及内容部分，其中头部和尾部需要外部ejs文件引入，暂未完成
  1. 内容部分分为标签简介，标签搜索加关注(需登录)，以及标签板块和著名技术问答的链接
  1. 可以输入localhost/tag显示页面
1. 下一步实现
  1. 搜索对应标签点击加关注时，将标签信息加入个人信息数据库里
  1. 当鼠标放在标签上时，会出现该标签的简单介绍的显示框。
  1. 在显示框中出现的人数会实时更新

### 问题和解决

1. 如何实现显示指定行数，溢出会显示省略号？

答：添加如下属性(目前谷歌兼容):
```  
  overflow: hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:3;
```

## 2017-07-13

### 任务进度

完成任务：

1. 创建了相对应的数据库模型，该数据库的模型如下
```
    let Schema = mongoose.Schema;
 
let tagsShema = Schema({
  tag: String,
  class: [Array], //存放所属的类
  issuesnum: Number,  //关注该标签的人数
  tagDescribe: String,   //对应标签的描述
});
 
module.exports.tags = mongoose.model('tags', tagsShema);  //创建tags集合的模型并共享
```
 2. 实现了当鼠标放到标签上显示工具提示框，内包含了关注人数，标签介绍，代码如下：
 ```ejs
 <div id="tishi1" style='display: none;' class='chuank'>
  <div id="sanjiao"></div>
  <div>
    <h5 id="title"><strong>java</strong></h5>
    <p id="tishi">觉得非公开了就是的开发了估计是老款的辐射功的的的法规尽快的更多反馈给记得刚看了大家的房间观看了到福建更多可根据地方水电费价格肯定发几个快递费的房间观看的房间观看地方第三方更健康的房间观看地方是根据贷款赶紧打开了大师傅赶紧看到了法国家里大方公开了地方价格地方是根据对方商量个健康的方式是经过考虑对方就开了地方是根据地方看了感觉是大哥叫对方立刻第三方根据地方了</p>
  </div>

  <hr style="margin:10px 0px">

  <ul class='list'>
  <li><a href="">查看</a></li>
  <li><a href="">编辑</a></li>
  <li><a href="">订阅</a></li>
  <li style="margin-left:40px;"><span id="pesNumber">1021</span>&nbsp;<span style="color:">人</span></li>
  <li><button id="btn1" class='like'>加关注</button></li>
</ul>
</div>
 ```
 
 ```js
 for (let i = 0, j = $('.tag').length; i < j; i++) {
  $('.tag').eq(i).hover(function() {
    $('.chuank').eq(i).stop().fadeIn(2000);
  },function() {
    $('.chuank').eq(i).stop().fadeOut(300);
  });
 
  $('.chuank').eq(i).hover(function() {
    $('.chuank').eq(i).stop().fadeIn();
  }, function() {
    $('.chuank').eq(i).stop().fadeOut();
  });
}
 ```
 ```css
 
#tishi1{
  width:300px;
  border: 1px solid #33a3dc;
  border-radius: 5px;
  position: absolute;    //实现绝对定位盒子的居中
  right: 50%;
  margin-right: -160px;
  top: -163px;
  /*display: none;*/
  z-index:999;
  background: #fff;
}
#tishi{
  margin: 10px 9px;
  height: 60px;
  font-size: 14px;
  overflow: hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:3;
}

.list {
  width: 300px;
  margin: 0;
  position: relative;
  padding-left: 0px;
  height:  30px;
}

.list li {
  /*width: 40px;*/
  height: 20px;
  margin: 0;
  margin-left: 15px;
  margin-bottom: 10px;
  float: left;
}
.list li a{
  color: #33a3dc;
}
.list li #btn1{   //加关注按钮
  font-size: 12px;
  padding: 5px 8px;
  background: #fff;
  border: 1px solid #33a3dc;
  border-radius: 5px;
  outline-style: none;
  /*position: absolute;*/
  line-height: 1;
  /*bottom: 10px;*/
}
#sanjiao{     //编写了一个三角形
  width: 10px;
  border-bottom: 10px solid transparent;
  border-top: 10px solid #33a3dc;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  position: absolute;
  left: 130px;
  bottom:-21px
}
 ```
下一步事项:
  1. 登陆后显示搜索加关注框
  2. 登陆后加关注才有效，加的关注会在将标签存储到对应用户的标签数组中
  3. 时刻更新关注人数，当你点击加关注按钮，该显示的人数加1，数据内关注人数也加1,按钮显示已关注；再次点击变成加关注，人数减1
### 问题与解决

1. 如何实现绝对定位的盒子在相对定位的父元素的居中？
```
答：可以用left:50%加上margin-left:(宽度/2)，来实现绝对定位的居中
```
2. 怎么能使相同元素具有同样的属性但是对其中一个元素操作不会影响到其他元素？

答：在<script>中使用for循环给每一个元素都设置属性
```
for (let i = 0, j = $('.tag').length; i < j; i++) {
  $('.tag').eq(i).hover(function() {
    $('.chuank').eq(i).stop().fadeIn(2000);
  },function() {
    $('.chuank').eq(i).stop().fadeOut(300);
  });
}

```

## 2017-07-14

完成任务:
1. 实现了根据登录状态来判断是否显示搜索加关注框
```ejs
      <% if(state){ %>        //state是用户状态
      <div class="add">
      <div class="adTag">
        <input type="text" placeholder="添加关注的标签">
      </div>
      <button id="btn">加关注</button><span>（ 左右拖动进行导航排序，取消关注即可移除&nbsp;）</span>
    </div>
      <% }else{ %>
      <div></div>
      <% } %>
```

### 问题和解决
1. 当缩小到一定尺寸时，内容靠边，样式不好看
```
@media screen and (max-width:800px){
  .tag-box{         //整个标签页的内容部分
    width:90%;      
    margin:auto;    //保证盒子水平居中
  }
}
```

## 2017-07-15

完成任务：
1. 实现了主页和回答页的关联
2. 实现了主页跳转到标签页和回答页
3. 编写了每个标签对应的每个标签相关的内容页面，由于内容一样，所以采用封装
```
<!-- 每个标签所属的单个页面中的介绍栏 -->

<link rel="stylesheet" href="/stylesheets/tagQdes.css">

<section class="tag-info tag_info">
  <div class="tag-k">
    <img class="tag-ico" src="#" alt="图片">
    <!-- 标签名   -->
    <span class="tagName"><strong></strong></span>
    <!-- 关注按钮 -->
    <div class="btn1">
      <button type="button" name="button" class="addTag-btn">关注</button>
    </div>
  </div>
  <!-- 介绍 -->
  <p class="tag-des1"></p>
</section>

```
### 问题和解决

1. 如何让代码简化？

答：学会使用封装，对于相同结构的可以单独写在一个文件中然后引用

## 2017-07-17

## 完成任务

1. 实现了当点击标签时会跳转到对应的页面显示标题，介绍以及和该标签有关的问题显示

代码如下：
*****
路由端
```js
var express = require('express');
var router = express.Router();
var tagdb = require('../db/tag.js');       //加载关于标签
var questions = require('../db/questions.js');    //关于问题


/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.query);
  tagdb.tags.findOne({                 //第一次查找标签在集合中是否存在
     tag: req.query.tag
  }, function(err, doc) {
      if (err) console.log(err);
      if(doc){
          questions.qdb.find({          //第二次在问题集合中查找对应标签所有的问题
           tags:req.query.tag
          },function(err, data){
            if(err) console.log(err);
            if(data){
              // console.log(data);
              if (req.session.uid != undefined) {          //判断是否登录，通过渲染传送数据
                res.render('tagQuestion', {state: "true",tagName:doc.tag,describe:doc.describe,ans:data});
              }else {
                res.render('tagQuestion', {state: "false",tagName:doc.tag,describe:doc.describe,ans:data});
              }
            }
          });
      }
  });
});

module.exports = router;

```
前段页面显示问题
```ejs
              <% ans.forEach(function(data){ %>
                  <!-- 每一个问题 组成 -->
             <section class="heightlight stream_list_item">
               <div class="qu_rank">
                 <div class="votes hidden-xs">
                   <span><%= data.praise %></span>
                   <small>得票</small>
                 </div>
                 <div class="answers answered">
                   <span><%= data.answeruid.length %></span>
                   <small>回答</small>
                 </div>
                 <div class="views hidden-xs">
                   <span><%= data.questionview %></span>
                   <small>浏览</small>
                 </div>
               </div>
               <!--          问题部分 -->
               <div class="summary">
                 <ul class="author list-inline">
                   <li>
                     <a href=""><%= data.personuid %></data></a>
                     <span class="split"></span>
                     <span><a href="">3小时</a>前回答</span>
                   </li>
                 </ul>
                 <h2 class="title"><a href=""><%= data.title %></a></h2>
                 <ul class="taglist-inline">
                   <% for (let i = 0 ; i <  data.tags.length ; i++){ %>
                   <li>
                     <a href="" class="tag tag-sm"><%= data.tags[i] %></a>
                   </li>
                   <% } %>
                 </ul>
               </div>
             </section>
           <% }); %>
```
前段页面显示内容和介绍

```ejs
<!-- 每个标签所属的单个页面中的介绍栏 -->

<link rel="stylesheet" href="/stylesheets/tagQdes.css">

<section class="tag-info tag_info">
  <div class="tag-k">
    <!-- <img class="tag-ico" src="#" alt="图片"> -->
    <!-- 标签名   -->
    <span class="tagName"><strong><%= tagName %></strong></span>
    <!-- 关注按钮 -->
    <div class="btn1">
      <button type="button" name="button" class="addTag-btn">关注</button>
    </div>
  </div>
  <!-- 介绍 -->
  <p class="tag-des1"><%= describe %></p>
</section>

```
****

### 问题和解决

1. 如何阻止页面跳转？

答: return false

2. 怎么实现2个具有跳转关系的页面的数据传输?

答: 让元素可以当做表单提交进行传递数据

```js
    function GET(URL, name) {
        var temp_form = document.createElement("form");      //创建form表单
        temp_form.action = URL;   //跳转
        temp_form.target = "_self";     //如需打开新窗口，form的target属性要设置为'_blank'
        temp_form.method = "get";
        temp_form.style.display = "none";

        var opt = document.createElement("textarea");
        // var opt1 = document.createElement("textarea");      //如果其他数据传输可用
        opt.name = 'tag';
        opt.value = name;
        // opt1.name = "uid";
        // opt1.value = name;
        temp_form.appendChild(opt);
        // temp_form.appendChild(opt1);

        document.body.appendChild(temp_form);

        //提交数据
        temp_form.submit();
    }
    
    GET('/tagQuestion',name);    //调用函数

```
3. 关于<%=  %> 和 <%  %>的使用

答: <%= 键 %>   <=====>  相当于获取键的值
<%  %> --------------- 可以在ejs中使用js， 其中不能把标签等包含其中，只能包含js代码

