/* Define the bio object */
var bio = {
	"name": "Jane Doe",
	"role": "Developer",
	"pictureURL": "images/fry.jpg",
	"welcomeMsg": "Welcome to Jane's resume!",
	"contacts": {
		"mobile": "510-555-5555",
		"email": "janedoe@yahoo.com",
		"github": "@janedoe",
		"twitter": "None",
		"location": "San Ramon CA"
	},
	"skills": ["Nurse", " Chef"," Pianist"," Cashier"," Artist"],
	"displayBio": function () {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureURL);
		var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);

		$("#header").prepend(formattedName + formattedRole);
		$("#topContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation);
		$("#header").append(formattedPicture + formattedMsg);
		$("#main").append(internationalizeButton);
		$("#mapDiv").append(googleMap);
		$("#footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation);
	}
};

/* Define the work experience object */
var work = {
	"jobs": [
		{
			"employer": "Kaiser",
			"title": "Nurse",
			"location": "San Leandro CA",
			"dates": "2000-Present",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			"employer": "Michael's",
			"title": "Cashier",
			"location": "San Mateo CA",
			"dates": "1985-2000",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
	],
	"displayWork": function () {
		for (job in work.jobs) {
			$('#workExperience').append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$('.work-entry:last').append(formattedEmployer + formattedTitle + formattedLoc + formattedDates + formattedDesc);
		}
	}
};

/* Define the projects object */
var projects = {
	"projects": [
		{
			"title": "West PM",
			"dates": "2000-2004",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"images": "images/taj_mahal.jpg"
		},
		{
			"title": "Load Kiosk",
			"dates": "2011-2014",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"images": "images/mt_fuji.jpg"
		}
	],
	"displayProjects": function() {
		for (project in projects.projects) {
			$('#projects').append(HTMLprojectStart);
			var projTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var projDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var projDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			var projImg = HTMLprojectImage.replace("%data%", projects.projects[project].images)
			$('.project-entry:last').append(projTitle + projDates + projDesc + projImg);
		}
	}
};

/* Define the education object */
var education = {
	"schools": [
		{
			"name": "CSU",
			"location": "Hayward CA",
			"degree": "BS",
			"majors": ["Food and Nutrition"],
			"dates": 2006,
			"url": "http://www20.csueastbay.edu"
		},
		{
			"name": "Ohlone Community College",
			"location": "Fremont CA",
			"degree": "AS",
			"majors": ["Food and Nutrition"],
			"dates": 2002,
			"url": "http://www.ohlone.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Digital Photography",
			"school": "Ohlone Community College",
			"dates": 2010,
			"url": "http://www.ohlone.edu/"
		},
		{
			"title": "Front End Web Development",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/nd001"
		}
	],
	"displayEducation": function() {
		for (school in education.schools) {
			$('#education').append(HTMLschoolStart);
			var eduName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var eduDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var eduDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var eduLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var eduMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$('.education-entry:last').append(eduName + eduDegree + eduDates + eduMajor + eduLoc);
		}
	},
	"displayOnline": function() {
		$('#education').append(HTMLonlineClasses);
		for (course in education.onlineCourses) {
			var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$('#education').append(onlineTitle + onlineSchool + onlineDates + onlineURL);
		}
	}
};

/* Define a function to reformat the First and Last Name when the Internationalize button is clicked */
function inName(oldName) {
	var finalName = oldName;
	var index = oldName.indexOf(" ");
	var firstName = oldName.substr(0, index);

	firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLowerCase();
	var lastName = oldName.substr(index+1).toUpperCase();
	finalName = firstName + " " + lastName;
	console.log("name="+finalName);

    return finalName;
}

/* Call the bio function to display all bio info */
bio.displayBio();

/* Display the skills if any */
if(bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);
	$('#skills').append(HTMLskills.replace("%data%", bio.skills));
}

/* Display the past and current jobs held if any */
if(work.jobs.length > 0) {
	work.displayWork();
}

/* Display the past and current projects completed if any */
if(projects.projects.length > 0) {
	projects.displayProjects();
}

/* Display schools attended if any */
if(education.schools.length > 0) {
	education.displayEducation();
}

/* Display online classes attended if any */
if(education.onlineCourses.length > 0) {
	education.displayOnline();
}