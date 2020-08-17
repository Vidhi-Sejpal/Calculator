$("#img1").on({
    mouseenter: function () {
        $("#iov1").css("opacity", "1");
    },
    mouseleave: function () {
        $("#iov1").css("opacity", "0");
    }
});
$('#img1').click(function(){

    $('#imgblock1').css("display", "flex");

});
$('#imgblockbc1').click(function(){

    $('#imgblock1').css("display", "none");

});
$("#img2").on({
    mouseenter: function () {
        $("#iov2").css("opacity", "1");
    },
    mouseleave: function () {
        $("#iov2").css("opacity", "0");
    }
});
$("#img3").on({
    mouseenter: function () {
        $("#iov3").css("opacity", "1");
    },
    mouseleave: function () {
        $("#iov3").css("opacity", "0");
    }
});
$("#img4").on({
    mouseenter: function () {
        $("#iov4").css("opacity", "1");
    },
    mouseleave: function () {
        $("#iov4").css("opacity", "0");
    }
});
$("#img5").on({
    mouseenter: function () {
        $("#iov5").css("opacity", "1");
    },
    mouseleave: function () {
        $("#iov5").css("opacity", "0");
    }
});
$("#img6").on({
    mouseenter: function () {
        $("#iov6").css("opacity", "1");
    },
    mouseleave: function () {
        $("#iov6").css("opacity", "0");
    }
});
$("#img7").on({
    mouseenter: function () {
        $("#iov7").css("opacity", "1");
    },
    mouseleave: function () {
        $("#iov7").css("opacity", "0");
    }
});
$(document).ready(function(){
    $("#heart").click(function(){
      if($("#heart").hasClass("liked")){
        $("#heart").html("<i class='fa fa-heart-o' aria-hidden='true'></i>");
        $("#heart").removeClass("liked");
      }else{
        $("#heart").html("<i class='fa fa-heart' aria-hidden='true'></i>");
        $("#heart").addClass("liked");
      }
    });
  });

  $(document).ready(function(){
    $("#like").click(function(){
      if($("#like").hasClass("liked")){
        $("#like").html('<i class="fa fa-heart-o" aria-hidden="true"></i>');
        $("#like").removeClass("liked");
      }else{
        $("#like").html('<i class="fa fa-heart" aria-hidden="true"></i>');
        $("#like").addClass("liked");
      }
    });
  });

$(document).ready(function(){
$("#hearts").click(function(){
    if($("#hearts").hasClass("liked")){
    $("#hearts").html('<i class="fa fa-heart-o" aria-hidden="true"></i>');
    $("#hearts").removeClass("liked");
    }else{
    $("#hearts").html('<i class="fa fa-heart" aria-hidden="true"></i>');
    $("#hearts").addClass("liked");
    }
});
});  

$(document).ready(function(){
$("#bookmark").click(function(){
    if($("#bookmark").hasClass("liked")){
    $("#bookmark").html('<i class="fa fa-bookmark-o" aria-hidden="true"></i>');
    $("#bookmark").removeClass("liked");
    }else{
    $("#bookmark").html('<i class="fa fa-bookmark" aria-hidden="true"></i>');
    $("#bookmark").addClass("liked");
    }
});
});  

$(document).ready(function(){
$("#bookmarks").click(function(){
    if($("#bookmarks").hasClass("liked")){
    $("#bookmarks").html('<i class="fa fa-bookmark-o" aria-hidden="true"></i>');
    $("#bookmarks").removeClass("liked");
    }else{
    $("#bookmarks").html('<i class="fa fa-bookmark" aria-hidden="true"></i>');
    $("#bookmarks").addClass("liked");
    }
});
});  

$(document).ready(function(){
$("#bookmarki").click(function(){
    if($("#bookmarki").hasClass("liked")){
    $("#bookmarki").html('<i class="fa fa-bookmark-o" aria-hidden="true"></i>');
    $("#bookmarki").removeClass("liked");
    }else{
    $("#bookmarki").html('<i class="fa fa-bookmark" aria-hidden="true"></i>');
    $("#bookmarki").addClass("liked");
    }
});
});  

const btn = document.getElementById('btn');
const modal = document.getElementById('modal');
const close = document.getElementById('close');


// Event listeners
btn.addEventListener('click', () => {
    modal.style.display = 'inline-block';
    modal.className = 'modal animate__animated animate__bounceIn';
})

close.addEventListener('click', () => {
    modal.style.display = 'none';
})

window.addEventListener('click', e => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }

})

$( '.friend-drawer--onhover' ).on( 'click',  function() {
  
    $( '.chat-bubble' ).hide('slow').show('slow');
    
  });
  