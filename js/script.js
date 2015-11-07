/* colourBrightness.js by @jamiebrittain */
(function(e){
   e.fn.colourBrightness=function(){
      var e,t,n,r,i=this.css("background-color");
      if(i.match(/^rgb/)){
         i=i.match(/rgb\(([^)]+)\)/)[1];
         i=i.split(/ *, */).map(Number);
         e=i[0]; t=i[1]; n=i[2];
      }else if("#"==i[0]&&7==i.length){
         e=parseInt(i.slice(1,3),16);
         t=parseInt(i.slice(3,5),16);
         n=parseInt(i.slice(5,7),16)
      }else if("#"==i[0]&&4==i.length){
         e=parseInt(i[1]+i[1],16);
         t=parseInt(i[2]+i[2],16);
         n=parseInt(i[3]+i[3],16)
      }
      r=(e*299+t*587+n*114)/1e3;
      r<125 ? this.removeClass("light").addClass("dark") : this.removeClass("dark").addClass("light");
      
      if(r<125)
         $("#wf-main .wf-bar").each(function(){
            $(this).removeClass("light").addClass("dark");
         });
      else
         $("#wf-main .wf-bar").each(function(){
            $(this).removeClass("dark").addClass("light");
         });
   }
})(jQuery);

$(function(){
   $("body").css('height', $(window).height()).css('width', $(window).width());
   
   var bars = $("#wf-main .wf-bar");
   var shadows = $("#wf-shadow .wf-bar");
   
   var animateBars = function(){
      for(var i=0; i<bars.length; i++){
         var height = Math.floor(Math.random()*1173)%50 + "px";
         bars[i].style.height = shadows[i].style.height = height;
      }
      setTimeout(animateBars, 100);
   };
   
   var updateColor = function(color){
      $("body").css('backgroundColor',color).colourBrightness();
   }

   var generateColor = function(){
      var hexChars = "0123456789ABCDEF";
      var hexStr = "#";
         
      for(var i=0; i<6; i++) hexStr += hexChars[Math.ceil(Math.random()*1013)%16];

      return hexStr;
   }
   
   var animateBG = function(){
      updateColor(generateColor());
      
      setTimeout(animateBG, 1000);
   }
   animateBG();
   animateBars();
});