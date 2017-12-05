// Tab script

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// menu buttons

$(document).ready(function(){
// class of the button in brackets
 $(".dropbtn").click(function(){
   // inside the function here the class of the content to show then css to change
   // you can also add other functions but we'll go through in next meet
     $(".dropdown-content").css("display","block");
 });

});
