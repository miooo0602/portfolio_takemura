$('.btn-hum button').click(function(){
  $('.menu-sm').toggleClass('active');
  if($('.menu-sm').hasClass('active')){
    $(this).children('img').attr('src','images/btn-close.png')
  }
  else{
    $(this).children('img').attr('src','images/btn-hum.png')
  }
})