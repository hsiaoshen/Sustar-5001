$(function() {
  $(".portrait").hover(function() {
    $(".file_hid").css({"display":"block"});
  },function() {
    $(".file_hid").css({"display":"none"})
  });
  $(".bianjixinxi").click(function() {
    if ($(".info_edit").css("display") == "flex") {
      $(".info_edit").css({"display":"none"})
    }else {
      $(".info_edit").css({"display":"flex"})
    }
  });
  $(".jianjie a").click(function () {
    if ($(".jianjie_form").css('display')=='none') {
      $(".jianjie_form").css({"display":"flex"})
    }else {
      $(".jianjie_form").css({"display":"none"})
    }
  })

  // $('#imgtop').change(function() {
  //
  //   var img = $('#imgtop').val();
  //   console.log(img);
  //   console.log('---');
  //   $.get("/info",{ 'img' : img},function (data) {
  //
  //   });
  // })
})
