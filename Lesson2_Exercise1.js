var daysofweek = [ 
'Monday', 
'Tuesday', 
'Wednesday', 
'Thursday', 
'Friday', 
'Saturday', 
'Sunday']; 

var newDaysOfWeek = daysofweek.map((val, i, arr) => {
	return "<li>" + val + "</li>";
});

newDaysOfWeek.push("</ul>");

var newDaysOfWeekString = "<ul>" + newDaysOfWeek.join("");

var header = document.getElementById("header");

header.innerHTML = newDaysOfWeekString;
