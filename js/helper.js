/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span id="role">%data%</span>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-logo"><a href="%link%"><img class="logo" src="images/twitter-128.png"></img></a></li>';
var HTMLgithub = '<li class="flex-logo"><a href="%link%"><img class="logo" src="images/github-128.png"></img></a></li>';
var HTMLlinkin = '<li class="flex-logo"><a href="%link%"><img class="logo" src="images/linkedin-128.png"></img></a></li><hr>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillslaunage = '<div id="skillsLanguage"></div>';

var HTMLskillsStart = '<div class="skillsLanguageClass"><h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul></div>';
var HTMLskills = '<li class="flex-skill"><span class="white-text">%data%</span></li>';

var HTMLlanguageStart = '<div class="skillsLanguageClass"><h3 id="language-h3">Language:</h3><ul id="language" class="flex-column"></ul></div>';
var HTMLlanguage = '<li class="flex-language"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<div>%data%</div>';
var HTMLworkTitle = '<a href="%link%"><div id="blue-text">%data%</div></a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';


var HTMLvolunteerStart = '<div class="volunteer-entry"></div>';
var HTMLvolunteerEmployer = '<div>%data%</div>';
var HTMLvolunteerTitle = '<a href="%link%"><div id="blue-text">%data%</div></a>';
var HTMLvolunteerDates = '<div class="date-text">%data%</div>';
var HTMLvolunteerLocation = '<div class="location-text">%data%</div>';
var HTMLvolunteerDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="%link%">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="%link%" class="school">%data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="%link%" class="school">%data%</a>';
var HTMLonlineSchool = '<div>%data%</div>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';
var HTMLonlinePic = '<img src="%data%">';
