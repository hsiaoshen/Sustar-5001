# 7月11日
1. 基本完成登录注册的框架
2. 用到的技术有:html:表单标签,按钮标签 css:媒体查询等 使用css扩展语言sass
# 7月12日
1. 登录界面框架及效果已经完成
2. 后端路由编写了一部分,用到的技术有socket.io,express,mongodb
# 7月13日
```
1. 项目中的任务已经完成
    实现页面的效果,在设置css属性display:none与设置jquery中fadeOut
    发生了冲突,使页面淡出的效果只能出现一次.解决办法:使用jquery效果
    .show来配合display就可以解决这个问题
   
    .kuang{
    display:none;
    }
    $("dian").click(function(){
    $("kuang").hide();
    })
   
2. 在编写前端传来的数据与数据库数据对比时出现问题
    我的思路:查询数据库的数据可以通过多个条件来匹符合条件的数据信息
    实际应用中:数据会匹配你多个条件的其中一个就会返回所匹配的信息而
    不会因为其他条件不匹配而终止匹配.最终:找出问题的所在,原因是我在前
    面输出了req.body而导致的
   
    var findDB = function(db, callback){
    var cursor = db.collection('try').find({nick:name,password:password});
    cursor.each(function(err, doc){
      
        assert.equal(err, null);
        if(doc !== null){      //这里的doc就是查询到的
            console.log("信息认证正确");
            console.log(doc);    
        } else {
           console.log("输入错误");
            callback();
        }
    });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log('Connected correctly to server.');

  findDB(db, function(){
      db.close();
  });
});
}
```
# 7月14日
```
1,编写找回密码过程中使用到html,css,jquery用jqueru进行用户输入信息的初步判断输入的数据
$('.you input').blur(function(){
      var b=$(this).val()
      var c=/[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.com)$/i.test(b);
      if(!c){
      $(".you").append("<span>请输入正确的邮箱!</span>");
      $(".try").attr("disabled","disabled")
    }else {
      $(".try").removeAttr("disabled")
    }
    })

    $('.user input').blur(function(){
      var b=$(this).val()
      var n=b.length;
      if(n>12 || n==0){
        $(".user").append("<span>请输入大于0少于12位的用户名!</span>");
        $(".try").attr("disabled","disabled")
      }else {
        $(".try").removeAttr("disabled")
      }
    })
// console.log($(".user input").val());
    $('form').submit(function(){
      var a=$(".user input").val();
      var b=$(".you input").val();
      if(a=="" || b==""){
        return false;
      }
      
 2. 讨论了修改密码页面刷新的时候网页会挂掉,讨论了是否给修改该页面设置get请求.我们以实际
    网站做了实验发现他们的注册页面有get请求.但是考虑到安全问题我们决定试着去寻找其他的解
    决方法
      
```
