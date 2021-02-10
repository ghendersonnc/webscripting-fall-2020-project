//Author: Gabriel Henderson
//Date: 3 December 2020
//Purpose: Generate resume

function resumeWindow(h, w){
    var size = "height=" + h + ", width=" + w;
    return window.open("", "", size);
}

function main(){
    var form = document.getElementById("form");
    var email = form.email.value;
    var twitterhandle = form.twitter.value;
    var phone = form.phone.value;
    var isEmail = validateEmail();
    var isTwitter = validateTwitter();
    var isPhone = validatePhone();

    if (!isEmail || !isTwitter || !isPhone){
        if (!isEmail){
            alert(email + " is an invalid Email");
        }
        if (!isTwitter){
            alert(twitterhandle + " is an invalid Twitter handle");
        }
        if (!isPhone){
            alert(phone + " is an invalid phone number");
        }
    } else{
        generateResume();
    }
}

function generateResume(){
    var form = document.getElementById("form");
    var doc = resumeWindow(975, 930).document;
    doc.write("<html>");
    doc.write("<head>");
    doc.write(`<link rel="stylesheet" type="text/css" href="resume.css">`);
    doc.write(`<link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet">`);
    doc.write("</head>");
    doc.write("<body>");
    doc.write('<div class="resumeBanner">');
    createBanner(doc);
    doc.write('</div>');

    doc.write('<div class="education">');
    doc.write('<h2>Education</h2>');
    doc.write('<hr class="line">');
    createEducation(doc);
    doc.write('</div>');
    doc.write('<div>')
    createSkills(doc);
    doc.write('</div>');
    doc.write('<div class="jobs">');
    doc.write('<h2>Previous Jobs</h2>');
    doc.write('<hr class="line">');
    createJobs(doc);
    doc.write('</div>');
    doc.write('<div class="references">');
    doc.write('<h2>References</h2>');
    doc.write('<hr class="line">');
    createReferences(doc);
    doc.write('</div>');

    doc.write("</body>");
    doc.write("</html>");
}


function createBanner(doc){
    var form = document.getElementById("form");
    var name1 = form.name.value;
    var email = form.email.value;
    var city = form.city.value;
    var state = form.state.value;
    var phone = form.phone.value;
    var twitter = form.twitter.value;
    var portfolio = form.portfolio.value;
    var linkedin = form.linkedin.value;
    doc.write('<h1>' + name1 + '</h1>');
    doc.write('<p class="linkedin"> LinkedIn: ' + linkedin + '</p>')
    doc.write('<p class="portfolio"> portfolio: ' + portfolio + '</p>')
    doc.write('<p class="personalinfo">'+ email + " " + city + ", " + state + " " + phone + " " + twitter + '</p>');

}

function createEducation(doc){
    var form = document.getElementById("form");
    var school = form.school.value;
    var schoolDetails = form.schooldetails.value;
    doc.write('<p class="schoolname">' + school + '</p>')
    doc.write('<p class="schooldetails">' + schoolDetails + '</p>')
}

function createSkills(doc){
    var form = document.getElementById("form");
    var skill1 = form.skill1.value;
    var skill2 = form.skill2.value;
    var skill3 = form.skill3.value;
    var techskill1 = form.techskill1.value;
    var techskill2 = form.techskill2.value;
    var techskill3 = form.techskill3.value;
    doc.write('<div class="skills">');
    doc.write('<h2>Skills</h2>');
    doc.write('<hr>');
    doc.write("<ul>");
    doc.write("<li>" + skill1 + "</li>");
    doc.write("<li>" + skill2 + "</li>");
    doc.write("<li>" + skill3 + "</li>");
    doc.write("</ul>");
    doc.write('</div>');

    doc.write('<div class="techskills">');
    doc.write('<h2>Technical Skills</h2>');
    doc.write('<hr>');
    doc.write("<ul>");
    doc.write("<li>" + techskill1 + "</li>");
    doc.write("<li>" + techskill2 + "</li>");
    doc.write("<li>" + techskill3 + "</li>");
    doc.write("</ul>");
    doc.write('</div>');

}

function createJobs(doc){
    var form = document.getElementById("form");

    var jobcompany1 = form.jobcompany1.value;
    var jobtitle1 = form.jobtitle1.value;
    var jobstartdate1 = form.jobstartdate1.value;
    var jobenddate1 = form.jobenddate1.value;
    var jobdetails1 = form.jobdetails1.value;
    var jobcompany2 = form.jobcompany2.value;
    var jobtitle2 = form.jobtitle2.value;
    var jobstartdate2 = form.jobstartdate2.value;
    var jobenddate2 = form.jobenddate2.value;
    var jobdetails2 = form.jobdetails2.value;
    var jobcompany3 = form.jobcompany3.value;
    var jobtitle3 = form.jobtitle3.value;
    var jobstartdate3 = form.jobstartdate3.value;
    var jobenddate3 = form.jobenddate3.value;
    var jobdetails3 = form.jobdetails3.value;


    doc.write('<p class="jobcompanies">' + jobcompany1 + '</p>');
    doc.write('<p class="jobtitles">' + jobtitle1 + '</p>');
    doc.write('<p class="dates">' + jobstartdate1 + "/" + jobenddate1 + '</p>');
    doc.write('<p class="jobdetails">' + jobdetails1 + '</p><br>');
    
    doc.write('<p class="jobcompanies">' + jobcompany2 + '</p>');
    doc.write('<p class="jobtitles">' + jobtitle2 + '</p>');
    doc.write('<p class="dates">' + jobstartdate2 + "/" + jobenddate2 + '</p>');
    doc.write('<p class="jobdetails">' + jobdetails2 + '</p><br>');
    
    doc.write('<p class="jobcompanies">' + jobcompany3 + '</p>');
    doc.write('<p class="jobtitles">' + jobtitle3 + '</p>');
    doc.write('<p class="dates">' + jobstartdate3 + "/" + jobenddate3 + '</p>');
    doc.write('<p class="jobdetails">' + jobdetails3 + '</p>');
}

function createReferences(doc){
    var form = document.getElementById("form");
    var reference1 = form.reference1.value;
    var referencenumber1 = form.referencenumber1.value;
    var reference2 = form.reference2.value;
    var referencenumber2 = form.referencenumber2.value;

    doc.write('<p class="refs" id="ref1">' + reference1 + '</p>');
    doc.write('<p class="refnums" id="refnum1">' + referencenumber1 + '</p><br>');
    doc.write('<p class="refs" id="ref2">' + reference2 + '</p>');
    doc.write('<p class="refnums" id="refnum2">' + referencenumber2 + '</p>');
}

function validateEmail(){
    var form = document.getElementById("form");
    var email = form.email.value;
    var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return pattern.test(email);
}

function validateTwitter(){
    var form = document.getElementById("form");
    var twitter = form.twitter.value;
    var pattern = /^@[A-z]{4,15}$/;
    return pattern.test(twitter);
}

function validatePhone(){
    var form = document.getElementById("form");
    var phone = form.phone.value;
    var pattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    return pattern.test(phone);
}