
document.addEventListener('DOMContentLoaded', function(){ 
    var lis = Array.prototype.slice.call( document.querySelectorAll('g.pw-tile'));
    var lis_count = lis.length;
    var active_li_index = 0;
    
    var initList = setInterval(function(){
       var active_li = document.querySelector('g.pw-tile.active');
       var active_title = document.querySelector('div.who-can-help-setion.active');
       var features_list = document.querySelector('div.features-list.active');
       if( lis.indexOf(active_li) == lis_count-1 ){
         active_li_index  = 0;
       }
       else{
         active_li_index++;
       }
       
       active_li.classList.remove('active');
       active_title.classList.remove('active');
       features_list.classList.remove('active');

       document.querySelectorAll('g.pw-tile')[active_li_index].classList.add('active');
       document.querySelectorAll('div.who-can-help-setion')[active_li_index].classList.add('active');
       document.querySelectorAll('div.features-list')[active_li_index].classList.add('active');
    }, 2000);

    $('.oorwin-product-wheel').mouseover(function(){
        clearInterval(initList);

    }).mouseout(function(){
        initList = setInterval(function(){
       var active_li = document.querySelector('g.pw-tile.active');
       var active_title = document.querySelector('div.who-can-help-setion.active');
       var features_list = document.querySelector('div.features-list.active');
       if( lis.indexOf(active_li) == lis_count-1 ){
         active_li_index  = 0;
       }
       else{
         active_li_index++;
       }
       
       active_li.classList.remove('active');
       active_title.classList.remove('active');
       features_list.classList.remove('active');

       document.querySelectorAll('g.pw-tile')[active_li_index].classList.add('active');
       document.querySelectorAll('div.who-can-help-setion')[active_li_index].classList.add('active');
       document.querySelectorAll('div.features-list')[active_li_index].classList.add('active');
    }, 2000);
 })  
 if ($(window).width() <= 768) {
        clearInterval(initList);
    }
 }, false);

 
$(document).ready(function(){
    $('#sales').hover(function(){
        $('.pw-tile').removeClass('active');
        $(this).addClass('active');
        $('.who-can-help-setion').removeClass('active');;
        $('.who-can-help-setion').eq(3).addClass('active');
        $('.who-can-help').find('.features-list').removeClass('active');;
        $('.who-can-help').find('.features-list').eq(3).addClass('active');
    });
    $('#recruitment').hover(function(){
        $('.pw-tile').removeClass('active');
        $(this).addClass('active');
        $('.who-can-help-setion').removeClass('active');;
        $('.who-can-help-setion').eq(0).addClass('active');
        $('.who-can-help').find('.features-list').removeClass('active');;
        $('.who-can-help').find('.features-list').eq(0).addClass('active');

    })
    $('#hr').hover(function(){
        $('.pw-tile').removeClass('active');
        $(this).addClass('active');
        $('.who-can-help-setion').removeClass('active');;
        $('.who-can-help-setion').eq(1).addClass('active');
        $('.who-can-help').find('.features-list').removeClass('active');;
        $('.who-can-help').find('.features-list').eq(1).addClass('active');
    })
    $('#ai').hover(function(){
        $('.pw-tile').removeClass('active');
        $(this).addClass('active');
        $('.who-can-help-setion').removeClass('active');;
        $('.who-can-help-setion').eq(2).addClass('active');
        $('.who-can-help').find('.features-list').removeClass('active');;
        $('.who-can-help').find('.features-list').eq(2).addClass('active');
    })
    
    //$(".navbar-toggler").click(function(){
   

});

