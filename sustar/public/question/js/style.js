$(".bt").click(function() {
    $(".login-box").hide();
})

$('input').focus(function() {
    $(this).css({
        "box-shadow": "0px 0px 3px 1px #3388FF",
        "border": "1px solid #3388FF"
    });
})
$('input').blur(function() {
    $(this).css({
        "box-shadow": "0px 0px 0px 0px",
        "border": "1px solid #ccc"
    })
    $("p span").css("display", "none");
})

// 设置用户名的规则
$('.name input').blur(function() {
    var b = $(this).val()
    var n = b.length;
    if (n > 12 || n == 0) {
        $(".name").append("<span>请输入大于0少于12位的用户名!</span>");
        $(".try").attr("disabled", "disabled")
    } else {
        $(".try").removeAttr("disabled")
    }
})

// 设置邮箱的规则
$('.youxiang input').blur(function() {
    var b = $(this).val()
    var c = /[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.com)$/i.test(b);
    if (!c) {
        $(".youxiang").append("<span>请输入正确的邮箱!</span>");
        $(".try").attr("disabled", "disabled")
    } else {
        $(".try").removeAttr("disabled")
    }
})

// 设置密码规则
$('.password input').blur(function() {
    var b = $(this).val();
    var c = b.length;
    if (c < 6) {
        $(".password").append("<span>请输入正确的密码!</span>");
        $(".try").attr("disabled", "disabled")
    } else {
        $(".try").removeAttr("disabled")
    }
})

//设置注册表单的注册
var socket = io();
$('#zhuce').submit(function(event) {
    event.stopPropagation();
    var a = $(".name input").val();
    var s = $(".youxiang input").val();
    var d = $(".password input").val();
    if (a == "" || s == "" || d == "") {
        return false;
    };
    var name = s;
    socket.emit('register', a, s, d);
    return false;
})
// -----------------------------------------------------------------------------
//设置表单的登录
var name;
var password;
$("#denglu").submit(function(event) {
    event.stopPropagation();
    name = $(".deng_name").val();
    password = $(".deng_mi").val();
    if (name == "" || password == "") {
        return false;
    };
    socket.emit('login', name, password);
    return false;
})
socket.on('login-err', function() {
    alert("账号或密码错误！")
});
socket.on('cunzai', function() {
    alert("账号已经存在！")
});
socket.on('login-success', function() {
    $(".login-box").hide();
    console.log(window.location.href);
    Post(window.location.href);
});
socket.on('register-success', function() {
    $(".login-box").hide();
    console.log(window.location.href);
    Post(window.location.href);
});

function Post(URL) {
    //创建form表单
    var temp_form = document.createElement("form");
    temp_form.action = "/zhong";
    //如需打开新窗口，form的target属性要设置为'_blank'
    temp_form.target = "_self";
    temp_form.method = "post";
    temp_form.style.display = "none";

    var opt = document.createElement("textarea");
    var opt1 = document.createElement("textarea");
    opt.name = "url";
    opt.value = URL;
    opt1.name = "uid";
    opt1.value = name;
    temp_form.appendChild(opt);
    temp_form.appendChild(opt1);

    document.body.appendChild(temp_form);

    //提交数据
    temp_form.submit();
}
