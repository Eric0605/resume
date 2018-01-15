var bio = {
    name: "Eric Tsang",
    role: "student",
    contacts: {
        moblie: "(415)533-1247",
        email: "erictthk@gmail.com",
        GitHub: "https://github.com/Eric0605",
        Twitter: "https://twitter.com/Erictsang9?lang=en",
        location: "usa",
        LinkedIn: "https://www.linkedin.com/in/erictthk/"
    },
    welcomeMessage: "Hi",
    skills: ["teaching ", "programming "],
    biopic: "images/me.jpg",
    display: function() {
        formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);
        formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").append(formattedRole);
        formattedgithub = HTMLgithub.replace("%contact%", bio.contacts);
        formattedgithub2 = formattedgithub.replace("%data%", bio.contacts.GitHub);
        formattedgithub3 = formattedgithub2.replace("%link%", bio.contacts.GitHub);
        $("#header").append(formattedgithub3);
        $("#lets-connect").append(formattedgithub3);
        formattedtwitter = HTMLtwitter.replace("%contact%", bio.contacts);
        formattedtwitter2 = formattedtwitter.replace("%data%", bio.contacts.Twitter);
        formattedtwitter3 = formattedtwitter2.replace("%link%", bio.contacts.Twitter);
        $("#header").append(formattedtwitter3);
        $("#lets-connect").append(formattedtwitter3);
        formattedLinkin = HTMLlinkin.replace("%contact%", bio.contacts);
        formattedLinkin2 = formattedLinkin.replace("%data%", bio.contacts.LinkedIn);
        formattedLinkin3 = formattedLinkin2.replace("%link%", bio.contacts.LinkedIn);
        $("#header").append(formattedLinkin3);
        $("#lets-connect").append(formattedLinkin3);
        formattedmobile = HTMLmobile.replace("%contact%", bio.contacts);
        formattedmobile2 = formattedmobile.replace("%data%", bio.contacts.moblie);
        $("#header").append(formattedmobile2);
        $("#lets-connect").append(formattedmobile2);
        formattedemail = HTMLemail.replace("%contact%", bio.contacts);
        formattedemail2 = formattedemail.replace("%data%", bio.contacts.email);
        $("#header").append(formattedemail2);
        $("#lets-connect").append(formattedemail2);
        formattedlocation = HTMLlocation.replace("%contact%", bio.contacts);
        formattedlocation2 = formattedlocation.replace("%data%", bio.contacts.location);
        $("#header").append(formattedlocation2);
        $("#lets-connect").append(formattedlocation2);
        formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedwelcomeMsg);
        if (bio.biopic !== null) {
            formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
            $("#header").append(formattedbiopic);
        }
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};
bio.display();
var education = {
    schools: [{
            name: "Mira Loma High School",
            location: "Sacarmento",
            majors: [],
            dates: "2016-2019",
            url: "http://www.sanjuan.edu/miraloma"
        },
        {
            name: "Kwun Tong Maryknoll College (Middle School)",
            location: "Hong Kong",
            degree: "High school",
            majors: [],
            dates: "2013-2016",
            url: "http://www.ktmc.edu.hk/"
        }
    ],
    onlineCourses: [{
            title: "Front-End Web Developer Nanodegree Program",
            school: "Udacity",
            dates: "2017",
            url: "http://udacity.com",
            img: "images/degree.PNG",
        },
        {
            title: "Web Design for Everybody (Basics of Web Development and Coding)",
            school: "Coursera (University of Michigan)",
            dates: "2017",
            url: "https://www.coursera.org/"
        }
    ],
    display: function() {
        for (var x = 0; x < education.schools.length; x++) {
            $(".education-entry:last").css("color", "blue");
            $("#education").append(HTMLschoolStart);
            var formattedschoolLink = HTMLschoolName.replace("%link%", education.schools[x].url);
            var formattedschoolName = formattedschoolLink.replace("%data%", education.schools[x].name);
            $(".education-entry:last").append(formattedschoolName);
            var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[x].dates);
            $(".education-entry:last").append(formattedschoolDates);
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[x].location);
            $(".education-entry:last").append(formattedschoolLocation);
        }
        $(".education-entry:last").append(HTMLonlineClasses);
        for (var y = 0; y < education.onlineCourses.length; y++) {
            $(".education-entry:last").css("color", "blue");
            var formattedonlineURL = HTMLonlineTitle.replace("%link%", education.onlineCourses[y].url);
            var formattedonlineTitle = formattedonlineURL.replace("%data%", education.onlineCourses[y].title);
            $(".education-entry:last").append(formattedonlineTitle);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[y].school);
            $(".education-entry:last").append(formattedonlineSchool);
            var formattedonlineDates = HTMLschoolDates.replace("%data%", education.onlineCourses[y].dates);
            $(".education-entry:last").append(formattedonlineDates);
            if (education.onlineCourses[y].img !== undefined) {
              var formattedonlineimg = HTMLonlinePic.replace("%data%", education.onlineCourses[y].img);
              $(".education-entry:last").append(formattedonlineimg);
            };
        }
    }
};
education.display();
var work = {
    jobs: [{
            "employer": "volunteer",
            "title": "Helper (Hong Kong Red Cross Princess Alexandra School)",
            "location": "Hong Kong",
            "dates": "2015",
            "description": "to help to teach some special needed student.",
            "links": "http://www.pas.edu.hk/"
        },
        {
            "employer": "volunteer",
            "title": "Food distributor (San Francisco Christian School)",
            "location": "San Francisco",
            "dates": "2016",
            "description": "to be in the church to distribute and translate if needed.",
            "links": "http://www.sfchristianschool.org/"
        },
        {
            "employer": "volunteer",
            "title": "Tutor (Mira Loma High School)",
            "location": "Sacromento",
            "dates": "2017",
            "description": "to help the other student with math and technology if they need help.",
            "links": "http://www.sanjuan.edu/miraloma"
        }
    ],
    display: function() {
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitleUrl = HTMLworkTitle.replace("%link%", work.jobs[i].links);
            var formattedTitle = formattedTitleUrl.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};
work.display();
var projects = {
    projects: [
        {
            "title": "Mapping",
            "dates": "2017",
            "description": "use google map to map the neighberhood",
            "images": ["images/map1.PNG", "images/map2.PNG"],
            "links": "https://github.com/Eric0605/map" 
        },
        {
            "title": "Fast Running",
            "dates": "2017",
            "description": "to rewrite so it runs at 60fps",
            "images": ["images/pizza1.PNG", "images/pizza2.PNG"],
            "links": "https://github.com/Eric0605/mobile-pizza" 
        },
        {
            "title": "Classic Arcade Game Clone",
            "dates": "2017",
            "description": "add a number of entities to the game including the player characters and enemies to recreate the classic arcade game Frogger",
            "images": ["images/game1.PNG", "images/game2.PNG"],
            "links": "https://github.com/Eric0605/Game" 
        },
        {
            "title": "Online Resume",
            "dates": "2017",
            "description": "build my resume by writing JavaScript that combines my personal information with pre-written HTML and CSS templates to generate my resume",
            "images": ["images/resime.PNG", "images/resime2.PNG"],
            "links": "#" 
        },
        {
            "title": "Profile",
            "dates": "2017",
            "description": "develop a responsive website that displays images, descriptions and links to each of the portfolio projects",
            "images": ["images/profile1.PNG", "images/profile2.PNG", "images/profile3.PNG","images/profile4.PNG"],
            "links": "https://github.com/Eric0605/profile"
        },
        {
            "title": "Animal Trading Cards Overview",
            "dates": "2017",
            "description": "use what I have learned about CSS to convert a design prototype into a functional webpage",
            "images": ["images/catclicker.PNG", "images/dogclicker.PNG"],
            "links": "#" 
        },
        {
            "title": "Memo",
            "dates": "2017",
            "description": "using canvas to create memo",
            "images": ["images/memo1.jpg", "images/memo2.PNG"],
            "links": "https://github.com/Eric0605/Memo" 
        }
    ],
    display: function() {
        for (var x = 0; x < projects.projects.length; x++) {
            $("#projects").append(HTMLprojectStart);
            if (projects.projects[x].links !== undefined){
                var formattedUrl = HTMLprojectTitle.replace("%link%", projects.projects[x].links);
                var formattedTitle = formattedUrl.replace("%data%", projects.projects[x].title);
                $(".project-entry:last").append(formattedTitle);
            };
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[x].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[x].description);
            $(".project-entry:last").append(formattedDescription);
            if (projects.projects[x].images !== null) {
                for (var z = 0; z < projects.projects[x].images.length; z++) {
                    var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[x].images[z]);
                    $(".project-entry:last").append(formattedImages);
                }
            }
        }
    }
};
projects.display();
