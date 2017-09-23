// code river gave me
var subtitles= ["Entrepreneur", "Hustler","Young Coder","Captian of Kew Forest School Swim Team ","Cross-Country runner", "Track and Feild Long distance runner","Lifelong Learner"]
var count = 0;

$(document).ready(function (){
   changeSubtitle();
});

function changeSubtitle() {
   setInterval(function () {
       if (count < subtitles.length - 1) {
           $("#subtitle").html(subtitles[count]);
           count++;
       } else {
           $("#subtitle").html(subtitles[subtitles.length - 1]);
           count = 0;
      }
   }, 1500);
}
// end of river code