var bio = {
    name: "Eric Tsang",
    role: "SDE 1",
    contacts: {
        moblie: "(415)533-1247",
        email: "erictthk@gmail.com",
        GitHub: "https://github.com/Eric0605",
        location: "651 La Grande Drive, Apt 3, Sunnyvale, CA, 94087",
        LinkedIn: "https://www.linkedin.com/in/erictthk/"
    },
    welcomeMessage: "Hello, I am Eric and I worked in AWS AppStream2.0 Compute team. I am an US citizen looking for opptunity in CS feild",
    skills: ["Java ", "Python", "HTML,CSS, Javascript", "AWS"],
    launages: ["Cantonese", "English", "Mandarin", "Japanese"],
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
        if (bio.skills.length > 0 || bio.launages.length > 0) {
            $("#header").append(HTMLskillslaunage);
        }

        if (bio.skills.length > 0) {
            $("#skillsLanguage").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
        if (bio.launages.length > 0) {
            $("#skillsLanguage").append(HTMLlanguageStart);
            for (var i = 0; i < bio.launages.length; i++) {
                var formattedLaunage = HTMLlanguage.replace("%data%", bio.launages[i]);
                $("#language").append(formattedLaunage);
            }
        }
    }
};
bio.display();
var education = {
    schools: [{
            name: "University of Wisconsin–Madison",
            location: "Maison",
            majors: ["CS"],
            dates: "2019-2023",
            url: "https://www.wisc.edu/"
        },
        {
            name: "Mira Loma High School, Sacarmento,CA",
            location: "Sacarmento",
            majors: [],
            dates: "2016-2019",
            url: "http://www.sanjuan.edu/miraloma"
        }
    ],
    onlineCourses: [{
            title: "Front-End Web Developer Nanodegree Program, Udacity, Online)",
            school: "Udacity",
            dates: "2017",
            url: "http://udacity.com",
            img: "images/degree.PNG",
        },
        {
            title: "Web Design for Everybody (Basics of Web Development and Coding), Coursera (University of Michigan), Online",
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
        }
        for (var y = 0; y < education.onlineCourses.length; y++) {
            $(".education-entry:last").css("color", "blue");
            var formattedonlineURL = HTMLonlineTitle.replace("%link%", education.onlineCourses[y].url);
            var formattedonlineTitle = formattedonlineURL.replace("%data%", education.onlineCourses[y].title);
            $(".education-entry:last").append(formattedonlineTitle);
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
    jobs: [
    {
        "employer": "Amazon Web Service AppStream2.0 Control Plane Compute team",
        "title": "SDE 1 at AWS AppStream2.0 Control Plane Compute team",
        "location": "Seattle",
        "dates": "2022 - 2024",
        "description": "I worked in the Compute team. Compute team takes care of the backend of the AppStream2.0 from customer API call until the Ec2 instance regester request",
        "links": "https://aws.amazon.com/pm/appstream2/?gclid=CjwKCAjw57exBhAsEiwAaIxaZnWKK97eGANo5iJfHIDWhuW1_KwPpZ2EyVDKIibTTuX8YD5S9qou9RoCVv8QAvD_BwE&trk=6dbac706-dadd-4b1f-afa5-85954bacbfb9&sc_channel=ps&ef_id=CjwKCAjw57exBhAsEiwAaIxaZnWKK97eGANo5iJfHIDWhuW1_KwPpZ2EyVDKIibTTuX8YD5S9qou9RoCVv8QAvD_BwE:G:s&s_kwcid=AL!4422!3!651751060242!e!!g!!aws%20appstream%202.0!19852662218!145019220417"
    },
    {
        "employer": "Intern",
        "title": "Infosys Instep Program",
        "location": "Remote",
        "dates": "2021",
        "description": "HTML, CSS, JS on Responsive design, Reactjs and jQuery, Python interaction, Background Music and Image editing",
        "links": "https://www.infosys.com/instep.html"
    },
    {
        "employer": "Intern",
        "title": "IT business relationship management internship",
        "location": "Sacramento",
        "dates": "2019",
        "description": "I worked in the IT business relationship department. I help improve and redesign the website page of the department. I also help organize the annual report for the problem issue the department facing.",
        "links": "https://www.smud.org/en"
    }
    ],
    display: function() {
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedTitleUrl = HTMLworkTitle.replace("%link%", work.jobs[i].links);
            var formattedTitle = formattedTitleUrl.replace("%data%", work.jobs[i].title);
            $(".work-entry:last").append(formattedTitle);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};
work.display();

var volunteer = {
    jobs: [{
            "employer": "volunteer",
            "title": "Volunteer Helper (Hong Kong Red Cross Princess Alexandra School)",
            "location": "Hong Kong",
            "dates": "2015",
            "description": "to help to teach some special needed student.",
            "links": "http://www.pas.edu.hk/"
        },
        {
            "employer": "volunteer",
            "title": "Volunteer Food Distributor (San Francisco Christian School)",
            "location": "San Francisco",
            "dates": "2016",
            "description": "to be in the church to distribute and translate if needed.",
            "links": "http://www.sfchristianschool.org/"
        },

        {
            "employer": "volunteer",
            "title": "Volunteer Tutor (Mira Loma High School)",
            "location": "Sacromento",
            "dates": "2017",
            "description": "to help the other student with math and technology if they need help.",
            "links": "http://www.sanjuan.edu/miraloma"
        }
    ],
    display: function() {
        for (var i = 0; i < volunteer.jobs.length; i++) {
            $("#volunteer").append(HTMLvolunteerStart);
            var formattedTitleUrl = HTMLvolunteerTitle.replace("%link%", volunteer.jobs[i].links);
            var formattedTitle = formattedTitleUrl.replace("%data%", volunteer.jobs[i].title);
            $(".volunteer-entry:last").append(formattedTitle);
            var formattedDates = HTMLvolunteerDates.replace("%data%", volunteer.jobs[i].dates);
            $(".volunteer-entry:last").append(formattedDates);
            var formattedDescription = HTMLvolunteerDescription.replace("%data%", volunteer.jobs[i].description);
            $(".volunteer-entry:last").append(formattedDescription);
        }
    }
};
volunteer.display();

var projects = {
    projects: [
        {
            "title": "AWS Appstream Region Auto Build Project",
            "dates": "2024",
            "description": "centailize multiple resource delcartion in different package so only 1 source of truth is present"
        },
        {
            "title": "Customer Resource limit monitor",
            "dates": "2023",
            "description": "create alarm and slack notification on specific Ec2 instance for a specific customer to guaramtee the resource avaiblity in the contract "
        },
        {
            "title": "Internal Tool Enhancement for support team",
            "dates": "2023",
            "description": "follow up action item after previous enginner left, makeing backend resource required in all region and code to be competiable with the changes"
        },
        {
            "title": "AWS Appstream US-Gov-East-1 Region Launch",
            "dates": "2023",
            "description": "appstream 2.0 is now aviable in us-gov-east-1 region, I am responsible in part of the launch"
        },
        {
            "title": "AWS Appstream Fraud automation script and resource termination",
            "dates": "2022",
            "description": "detect custome frad status with AWS Fraud team api and terminate customer resource if needed"
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
            "images": ["images/profile1.PNG", "images/profile2.PNG", "images/profile3.PNG", "images/profile4.PNG"],
            "links": "https://github.com/Eric0605/profile"
        },
        {
            "title": "Animal Trading Cards Overview",
            "dates": "2017",
            "description": "use what I have learned about CSS to convert a design prototype into a functional webpage",
            "images": ["images/catclicker.PNG", "images/dogclicker.PNG"],
            "links": "https://github.com/Eric0605/animal"
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
            if (projects.projects[x].links !== undefined) {
                var formattedUrl = HTMLprojectTitle.replace("%link%", projects.projects[x].links);
                var formattedTitle = formattedUrl.replace("%data%", projects.projects[x].title);
                $(".project-entry:last").append(formattedTitle);
            } else {
                var formattedProjectTitle = HTMLprojectTitleNoLink.replace("%link%", projects.projects[x].links);
                var formattedTitle = formattedProjectTitle.replace("%data%", projects.projects[x].title);
                $(".project-entry:last").append(formattedTitle);
            }
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[x].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[x].description);
            $(".project-entry:last").append(formattedDescription);
            var saveedImaged = "";
            if (projects.projects[x].images !== undefined) {
                for (var z = 0; z < projects.projects[x].images.length; z++) {
                    var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[x].images[z]);
                    if(saveedImaged.length == 0){
                        saveedImaged = formattedImages;
                    } else {
                        saveedImaged += formattedImages;
                        var imageDiv = HTMLprojectImageList.replace("%data%", saveedImaged);
                        $(".project-entry:last").append(imageDiv);
                        saveedImaged = "";
                    }
                }
            }
        }
    }
};
projects.display();