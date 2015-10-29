$(function(){
   var bars = $("#wf-main .wf-bar");
   var shadows = $("#wf-shadow .wf-bar");
   
   var animateBars = function(){
      for(var i=0; i<bars.length; i++){
         var height = Math.floor(Math.random()*1173)%50 + "px";
         bars[i].style.height = shadows[i].style.height = height;
      }
      setTimeout(animateBars, 100);
   };
   
   animateBars();
});