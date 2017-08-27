var bio = {
    "name": "Mashael",
    "role": "Future web developer",
    "contacts": {
        "email": "Meshil-mh@hotmail.com",
        "mobile": "0900902",
        "github": "meshil92",
        "twitter": "@Meshil92",
        "location": "Jubail"
    },
    "welcomeMessage": "Welcome to my resume !",
    "skills": [
        "Reading", "problem solving", "communication skills", "computer skills"
    ],
    "biopic": "images/pic.jpg"
};


bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    //for ( var i = 0 ; i < bio.contacts.length ; i++ ){
    /* var formattedContact = HTMLcontactGeneric.replace("%contact%",bio.contacts);
$("#topContacts").append(formattedContact); */

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts , #footerContacts").append(formattedEmail);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts , #footerContacts").append(formattedMobile);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts , #footerContacts").append(formattedTwitter);

    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts , #footerContacts").append(formattedGitHub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts , #footerContacts").append(formattedLocation);

    //}


    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedpic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    $("#header").append(formattedMessage);
    $("#header").append(formattedpic);


    $("#header").append(HTMLskillsStart);
    for (var s = 0; s < bio.skills.length; s++) {
        if (bio.skills.length > 0) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[s]);
            $("#skills").append(formattedSkill);
        }
    }

};


bio.display();

var education = {
    "schools": [{
            "name": "Dammam University",
            "degree": "BA",
            "dates": "2013",
            "location": "Dammam",
            "majors": ["Art"]
        },
        {
            "name": "Jubail University College",
            "degree": "Master",
            "dates": "2016",
            "location": "Jubail",
            "majors": ["Cs"]
        }
    ],
    "onlineCourses": [{
            "title": " Front-End web developer Udacity",
            "school": "Scitech",
            "dates": "2017",
            "url": "www.Udacity.com"
        },
        {
            "title": " Cyber Hacking Certified",
            "school": "Online course",
            "dates": "2017",
            "url": "www.chc-course.com"
        }

    ]
};

education.display = function() {

    for (var e = 0; e < education.schools.length; e++) {
        $('#education').append(HTMLschoolStart);
        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[e].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[e].degree);
        var formattedSD = formattedSchool + formattedDegree;
        $('.education-entry:last').append(formattedSD);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[e].dates);
        $('.education-entry:last').append(formattedDates);

        var formattedSLocation = HTMLschoolLocation.replace("%data%", education.schools[e].location);
        $('.education-entry:last').append(formattedSLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[e].majors);
        $('.education-entry:last').append(formattedMajor);

    }

    $('#education').append(HTMLonlineClasses);

    for (var i = 0; i < education.onlineCourses.length; i++) {
        $('#education').append(HTMLschoolStart);

        var formattedETitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        $('.education-entry:last').append(formattedETitle);

        var formattedESchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $('.education-entry:last').append(formattedESchool);

        var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $('.education-entry:last').append(formattedDate);

        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $('.education-entry:last').append(formattedUrl);
    }

};

education.display();


var work = {
    "jobs": [{
            "employer": "Information Technology",
            "title": "web developer",
            "location": "Jubail",
            "dates": "2017",
            "description": "Web developers work closely with project managers and designers to ensure the final product adheres to the predetermined budget, scope, and design. "
        },
        {
            "employer": "Information Technology",
            "title": "IT Administrator",
            "location": "Dammam",
            "dates": "2013",
            "description": " maintaining the company's IT network, servers and security systems"
        }
    ]
};

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates); //!!

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
    }

};

work.display();

var projects = {
    "projects": [{
        "title": "IT Symposium ",
        "dates": "2015",
        "description": "professional Development is the continuous process of acquiring new knowledge and skills that relate to one's profession job responsiblities or work enviroment It plays a key role in maintaining trained, §informed, and motivated employees, regardless of job classification",
        "images": ["images/project.png"]
    }]
};


projects.display = function() {
    if (projects.projects.length > 0) {
        $("#projects").append(HTMLprojectStart);
        for (var project = 0; project < projects.projects.length; project++) {

            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedprojectTitle);

            var formattedprojectdates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedprojectdates);

            var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedprojectDescription);

            for (var j = 0; j < projects.projects[project].images.length; j++) {
            var formattedimage = HTMLprojectImage.replace("%data%", projects.projects[project].images[j]);
            $(".project-entry:last").append(formattedimage);

          }

        }

    }

};

projects.display();

$(document).click(function(loc) { //here will show the location when you click in the page
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});


function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);



