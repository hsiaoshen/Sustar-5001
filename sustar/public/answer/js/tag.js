// script一定要等网页加载完毕后再执行

$(function() {

    $('.like').click(function() {
        if ($(this).text() === "加关注") {
            $(this).text('已关注').css("background", "#33a3dc ");
        } else {
            $(this).text('加关注').css("background", "#fff");
        }
    });

    var title;
    var socket = io();
    for (let i = 0, j = $('.tag').length; i < j; i++) {
        $('.tag').eq(i).hover(function() {
            title = $(this).text();
            $('.chuank').eq(i).find('h5 strong').text(title);
            // console.log(title);
            socket.emit('tagDescribe', {
                tag: title
            });
            socket.once('tagDescribe1', function(data) {
                // console.log(data.des);
                $('.chuank').eq(i).find('.describe').text(data.des);
                $('.chuank').eq(i).find('#pesNumber').text(data.issuesnum);
            });
            $('.chuank').eq(i).stop().fadeIn(2000);
        }, function() {
            $('.chuank').eq(i).stop().fadeOut(1000);
        });

        $('.chuank').eq(i).hover(function() {
            $('.chuank').eq(i).stop().fadeIn();
        }, function() {
            $('.chuank').eq(i).stop().fadeOut();
        });

        $('.tag').eq(i).click(function() {
              var name = $(this).text();
            console.log(name);
            // return false;  //阻止跳转(表单提交)
            GET('/tagQuestion',name);
        });
    }

// 定义了一个函数，可以让元素当表单提交
    function GET(URL, name) {
        //创建form表单
        var temp_form = document.createElement("form");
        temp_form.action = URL;   //跳转
        //如需打开新窗口，form的target属性要设置为'_blank'
        temp_form.target = "_self";
        temp_form.method = "get";
        temp_form.style.display = "none";

        var opt = document.createElement("textarea");
        // var opt1 = document.createElement("textarea");
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
});
