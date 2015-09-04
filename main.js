var diem = "AM"; 



        var runAnonymousFunction = setInterval(function() {

             var newDate = new Date(); // new date object
       var h = newDate.getHours(); // get the hour from the date object
       var m = newDate.getMinutes(); // get the minutes from the date object
       var s = newDate.getSeconds(); // get the seconds from the hour object

  // if hour is equal to 0, add 12 to it.
        if (h===0) {
        	h = 12;
        }

/* change the hour format from 24 to 12 and 
   Diem to Pm if the hour is greater than 12 */
       if (h>12) {
         h = h-12;
         diem = "PM";
         // console.log(h +":" + diem);
       } 
          
         else if (h < 10) {
         	h = "0" + hour;
         } 


         var elTime = document.getElementById('time').textContent =  "The Time is "  + h + ":" + m + ":" + s + diem ;

        },1000);



(function(){

   var dayNames = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
   var currentDate = new Date();
   var elDate = document.getElementById('date').textContent = "Today is : " + dayNames[currentDate.getDay()];
     
})();



 
    
