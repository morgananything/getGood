function createHours(grade){ //grade is inputted. we're judging based on this.
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
    var subject = document.getElementById('subject').options[document.getElementById('subject').selectedIndex].text;
    
    if(subject == "Other"){
        subject = prompt("What is the subject being evaluated?")
    } else{
        subject = subject;
    }
    var scoreO;
        switch(grade){
            case "A":
                scoreO = scoreN; 
                break;
            case "B":
            case "C":
                scoreO = scoreN + 1; 
                break;
            case "D":
            case "E":
            case "F":
                scoreO = scoreN + 3;
                break;
            case "G":
            case "U":
                scoreO = scoreN + 5;
                break;
        }

    if(score < 0){
        document.getElementById("failedA").innerHTML = 
        "You fool. You bastard. <br>Stop making a mockery of my code. <br>You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("list1").innerHTML = "<br>You should revise for " + subject + " for " + scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("list1").innerHTML = "<br>You're doing great in " + subject + "!";
    } else{
        document.getElementById("failedA").innerHTML = 
        "Stop messing around right now. <br>This is serious. <br> Input valid values.";
    }

    document.getElementById("hours1").innerHTML = score;
    document.getElementById("grade1").innerHTML = grade;
    document.getElementById("new1").innerHTML = scoreO;
    document.getElementById("subjectA").innerHTML = subject;
    document.getElementById("add1").style.display = "inline-block";
    
}
function more1(grade){ //grade is inputted. we're judging based on this.
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
    var subject = document.getElementById('subject1').options[document.getElementById('subject1').selectedIndex].text;
    
    if(subject == "Other"){
        subject = prompt("What is the subject being evaluated?")
    } else{
        subject = subject;
    }
    var scoreO;
        switch(grade){
            case "A":
                scoreO = scoreN; 
                break;
            case "B":
            case "C":
                scoreO = scoreN + 1; 
                break;
            case "D":
            case "E":
            case "F":
                scoreO = scoreN + 3;
                break;
            case "G":
            case "U":
                scoreO = scoreN + 5;
                break;
        }

    if(score < 0){
        document.getElementById("failedA").innerHTML = 
        "You fool. You bastard. <br>Stop making a mockery of my code. <br>You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("list2").innerHTML = "<br>You should revise for " + subject + " for " + scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("list2").innerHTML = "<br>You're doing great in " + subject + "!";
    } else{
        document.getElementById("failedA").innerHTML = 
        "Stop messing around right now. This is serious. <br> Input valid values.";
    }

    document.getElementById("hours2").innerHTML = score;
    document.getElementById("grade2").innerHTML = grade;
    document.getElementById("new2").innerHTML = scoreO;
    document.getElementById("subjectB").innerHTML = subject;
    document.getElementById("add2").style.display = "inline-block";
    document.getElementById("hidden1").style.display = "none";
}
function more2(grade){ //grade is inputted. we're judging based on this.
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
    var subject = document.getElementById('subject2').options[document.getElementById('subject2').selectedIndex].text;
    
    if(subject == "Other"){
        subject = prompt("What is the subject being evaluated?")
    } else{
        subject = subject;
    }
    var scoreO;
        switch(grade){
            case "A":
                scoreO = scoreN; 
                break;
            case "B":
            case "C":
                scoreO = scoreN + 1; 
                break;
            case "D":
            case "E":
            case "F":
                scoreO = scoreN + 3;
                break;
            case "G":
            case "U":
                scoreO = scoreN + 5;
                break;
        }

    if(score < 0){
        document.getElementById("failedA").innerHTML = 
        "You fool. You bastard. <br>Stop making a mockery of my code. <br>You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("list3").innerHTML = "<br>You should revise for " + subject + " for " + scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("list3").innerHTML = "<br>You're doing great in " + subject + "!";
    } else{
        document.getElementById("failedA").innerHTML = 
        "Stop messing around right now. This is serious. <br> Input valid values.";
    }

    document.getElementById("hours3").innerHTML = score;
    document.getElementById("grade3").innerHTML = grade;
    document.getElementById("new3").innerHTML = scoreO;
    document.getElementById("subjectC").innerHTML = subject;
    document.getElementById("add3").style.display = "inline-block";
    document.getElementById("hidden2").style.display = "none";
    
}
function more3(grade){ //grade is inputted. we're judging based on this.
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
    var subject = document.getElementById('subject3').options[document.getElementById('subject3').selectedIndex].text;
    
    if(subject == "Other"){
        subject = prompt("What is the subject being evaluated?")
    } else{
        subject = subject;
    }
    var scoreO;
        switch(grade){
            case "A":
                scoreO = scoreN; 
                break;
            case "B":
            case "C":
                scoreO = scoreN + 1; 
                break;
            case "D":
            case "E":
            case "F":
                scoreO = scoreN + 3;
                break;
            case "G":
            case "U":
                scoreO = scoreN + 5;
                break;
        }

    if(score < 0){
        document.getElementById("failedA").innerHTML = 
        "You fool. You bastard. <br>Stop making a mockery of my code. <br>You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("list4").innerHTML = "<br>You should revise for " + subject + " for " + scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("list4").innerHTML = "<br>You're doing great in " + subject + "!";
    } else{
        document.getElementById("failedA").innerHTML = 
        "Stop messing around right now. This is serious. <br> Input valid values.";
    }

    document.getElementById("hours4").innerHTML = score;
    document.getElementById("grade4").innerHTML = grade;
    document.getElementById("new4").innerHTML = scoreO;
    document.getElementById("subjectD").innerHTML = subject;
    document.getElementById("add4").style.display = "inline-block";
    document.getElementById("hidden3").style.display = "none";
    
}
function more4(grade){ //grade is inputted. we're judging based on this.
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
    var subject = document.getElementById('subject4').options[document.getElementById('subject4').selectedIndex].text;
    
    if(subject == "Other"){
        subject = prompt("What is the subject being evaluated?")
    } else{
        subject = subject;
    }
    var scoreO;
        switch(grade){
            case "A":
                scoreO = scoreN; 
                break;
            case "B":
            case "C":
                scoreO = scoreN + 1; 
                break;
            case "D":
            case "E":
            case "F":
                scoreO = scoreN + 3;
                break;
            case "G":
            case "U":
                scoreO = scoreN + 5;
                break;
        }

    if(score < 0){
        document.getElementById("failedA").innerHTML = 
        "You fool. You bastard. <br>Stop making a mockery of my code. <br>You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("list5").innerHTML = "<br>You should revise for " + subject + " for " + scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("list5").innerHTML = "<br>You're doing great in " + subject + "!";
    } else{
        document.getElementById("failedA").innerHTML = 
        "Stop messing around right now. This is serious. <br> Input valid values.";
    }

    document.getElementById("hours5").innerHTML = score;
    document.getElementById("grade5").innerHTML = grade;
    document.getElementById("new5").innerHTML = scoreO;
    document.getElementById("subjectE").innerHTML = subject;
    document.getElementById("add5").style.display = "inline-block";
    document.getElementById("hidden4").style.display = "none";
    
}
function more5(grade){ //grade is inputted. we're judging based on this.
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
    var subject = document.getElementById('subject5').options[document.getElementById('subject5').selectedIndex].text;
    
    if(subject == "Other"){
        subject = prompt("What is the subject being evaluated?")
    } else{
        subject = subject;
    }
    var scoreO;
        switch(grade){
            case "A":
                scoreO = scoreN; 
                break;
            case "B":
            case "C":
                scoreO = scoreN + 1; 
                break;
            case "D":
            case "E":
            case "F":
                scoreO = scoreN + 3;
                break;
            case "G":
            case "U":
                scoreO = scoreN + 5;
                break;
        }

    if(score < 0){
        document.getElementById("failedA").innerHTML = 
        "You fool. You bastard. <br>Stop making a mockery of my code. <br>You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("list6").innerHTML = "<br>You should revise for " + subject + " for " + scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("list6").innerHTML = "<br>You're doing great in " + subject + "!";
    } else{
        document.getElementById("failedA").innerHTML = 
        "Stop messing around right now. This is serious. <br> Input valid values.";
    }

    document.getElementById("hours6").innerHTML = score;
    document.getElementById("grade6").innerHTML = grade;
    document.getElementById("new6").innerHTML = scoreO;
    document.getElementById("subjectF").innerHTML = subject;
    document.getElementById("add6").style.display = "inline-block";
    document.getElementById("hidden5").style.display = "none";
    
}
function more6(grade){ //grade is inputted. we're judging based on this.
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
    var subject = document.getElementById('subject6').options[document.getElementById('subject6').selectedIndex].text;
    
    if(subject == "Other"){
        subject = prompt("What is the subject being evaluated?")
    } else{
        subject = subject;
    }
    var scoreO;
        switch(grade){
            case "A":
                scoreO = scoreN; 
                break;
            case "B":
            case "C":
                scoreO = scoreN + 1; 
                break;
            case "D":
            case "E":
            case "F":
                scoreO = scoreN + 3;
                break;
            case "G":
            case "U":
                scoreO = scoreN + 5;
                break;
        }

    if(score < 0){
        document.getElementById("failedA").innerHTML = 
        "You fool. You bastard. <br>Stop making a mockery of my code. <br>You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("list7").innerHTML = "<br>You should revise for " + subject + " for " + scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("list7").innerHTML = "<br>You're doing great in " + subject + "!";
    } else{
        document.getElementById("failedA").innerHTML = 
        "Stop messing around right now. This is serious. <br> Input valid values.";
    }

    document.getElementById("hours7").innerHTML = score;
    document.getElementById("grade7").innerHTML = grade;
    document.getElementById("new7").innerHTML = scoreO;
    document.getElementById("subjectG").innerHTML = subject;
    document.getElementById("add7").style.display = "inline-block";
    document.getElementById("hidden6").style.display = "none";
    
}
function more7(grade){ //grade is inputted. we're judging based on this.
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
    var subject = document.getElementById('subject7').options[document.getElementById('subject7').selectedIndex].text;
    
    if(subject == "Other"){
        subject = prompt("What is the subject being evaluated?")
    } else{
        subject = subject;
    }
    var scoreO;
        switch(grade){
            case "A":
                scoreO = scoreN; 
                break;
            case "B":
            case "C":
                scoreO = scoreN + 1; 
                break;
            case "D":
            case "E":
            case "F":
                scoreO = scoreN + 3;
                break;
            case "G":
            case "U":
                scoreO = scoreN + 5;
                break;
        }

    if(score < 0){
        document.getElementById("failedA").innerHTML = 
        "You fool. You bastard. <br>Stop making a mockery of my code. <br>You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("list8").innerHTML = "<br>You should revise for " + subject + " for " + scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("list8").innerHTML = "<br>You're doing great in " + subject + "!";
    } else{
        document.getElementById("failedA").innerHTML = 
        "Stop messing around right now. This is serious. <br> Input valid values.";
    }

    document.getElementById("hours8").innerHTML = score;
    document.getElementById("grade8").innerHTML = grade;
    document.getElementById("new8").innerHTML = scoreO;
    document.getElementById("subjectH").innerHTML = subject;
    document.getElementById("add8").style.display = "inline-block";
    document.getElementById("hidden7").style.display = "none";
    
}
function more8(grade){ //grade is inputted. we're judging based on this.
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
    var subject = document.getElementById('subject8').options[document.getElementById('subject8').selectedIndex].text;
    
    if(subject == "Other"){
        subject = prompt("What is the subject being evaluated?")
    } else{
        subject = subject;
    }
    var scoreO;
        switch(grade){
            case "A":
                scoreO = scoreN; 
                break;
            case "B":
            case "C":
                scoreO = scoreN + 1; 
                break;
            case "D":
            case "E":
            case "F":
                scoreO = scoreN + 3;
                break;
            case "G":
            case "U":
                scoreO = scoreN + 5;
                break;
        }

    if(score < 0){
        document.getElementById("failedA").innerHTML = 
        "You fool. You bastard. <br>Stop making a mockery of my code. <br>You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("list9").innerHTML = "<br>You should revise for " + subject + " for " + scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("list9").innerHTML = "<br>You're doing great in " + subject + "!";
    } else{
        document.getElementById("failedA").innerHTML = 
        "Stop messing around right now. This is serious. <br> Input valid values.";
    }

    document.getElementById("hours9").innerHTML = score;
    document.getElementById("grade9").innerHTML = grade;
    document.getElementById("new9").innerHTML = scoreO;
    document.getElementById("subjectI").innerHTML = subject;
    document.getElementById("add9").style.display = "inline-block";
    document.getElementById("hidden8").style.display = "none";
    
}
function more9(grade){ //grade is inputted. we're judging based on this.
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
    var subject = document.getElementById('subject9').options[document.getElementById('subject9').selectedIndex].text;
    
    if(subject == "Other"){
        subject = prompt("What is the subject being evaluated?")
    } else{
        subject = subject;
    }
    var scoreO;
        switch(grade){
            case "A":
                scoreO = scoreN; 
                break;
            case "B":
            case "C":
                scoreO = scoreN + 1; 
                break;
            case "D":
            case "E":
            case "F":
                scoreO = scoreN + 3;
                break;
            case "G":
            case "U":
                scoreO = scoreN + 5;
                break;
        }

    if(score < 0){
        document.getElementById("failedA").innerHTML = 
        "You fool. You bastard. <br>Stop making a mockery of my code. <br>You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("list10").innerHTML = "<br>You should revise for " + subject + " for " + scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("list10").innerHTML = "<br>You're doing great in " + subject + "!";
    } else{
        document.getElementById("failedA").innerHTML = 
        "Stop messing around right now. This is serious. <br> Input valid values.";
    }

    document.getElementById("hours10").innerHTML = score;
    document.getElementById("grade10").innerHTML = grade;
    document.getElementById("new10").innerHTML = scoreO;
    document.getElementById("subjectJ").innerHTML = subject;
    document.getElementById("add10").style.display = "inline-block";
    document.getElementById("hidden9").style.display = "none";
    
}
function more10(grade){ //grade is inputted. we're judging based on this.
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
    var subject = document.getElementById('subject10').options[document.getElementById('subject10').selectedIndex].text;
    
    if(subject == "Other"){
        subject = prompt("What is the subject being evaluated?")
    } else{
        subject = subject;
    }
    var scoreO;
        switch(grade){
            case "A":
                scoreO = scoreN; 
                break;
            case "B":
            case "C":
                scoreO = scoreN + 1; 
                break;
            case "D":
            case "E":
            case "F":
                scoreO = scoreN + 3;
                break;
            case "G":
            case "U":
                scoreO = scoreN + 5;
                break;
        }

    if(score < 0){
        document.getElementById("failedA").innerHTML = 
        "You fool. You bastard. <br>Stop making a mockery of my code. <br>You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("list11").innerHTML = "<br>You should revise for " + subject + " for " + scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("list11").innerHTML = "<br>You're doing great in " + subject + "!";
    } else{
        document.getElementById("failedA").innerHTML = 
        "Stop messing around right now. This is serious. <br> Input valid values.";
    }

    document.getElementById("hours11").innerHTML = score;
    document.getElementById("grade11").innerHTML = grade;
    document.getElementById("new11").innerHTML = scoreO;
    document.getElementById("subjectK").innerHTML = subject;
    document.getElementById("add11").style.display = "inline-block";
    document.getElementById("hidden10").style.display = "none";
    
}
function more11(grade){ //grade is inputted. we're judging based on this.
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
    var subject = document.getElementById('subject11').options[document.getElementById('subject11').selectedIndex].text;
    
    if(subject == "Other"){
        subject = prompt("What is the subject being evaluated?")
    } else{
        subject = subject;
    }
    var scoreO;
        switch(grade){
            case "A":
                scoreO = scoreN; 
                break;
            case "B":
            case "C":
                scoreO = scoreN + 1; 
                break;
            case "D":
            case "E":
            case "F":
                scoreO = scoreN + 3;
                break;
            case "G":
            case "U":
                scoreO = scoreN + 5;
                break;
        }

    if(score < 0){
        document.getElementById("failedA").innerHTML = 
        "You fool. You bastard. <br>Stop making a mockery of my code. <br>You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("list12").innerHTML = "<br>You should revise for " + subject + " for " + scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("list12").innerHTML = "<br>You're doing great in " + subject + "!";
    } else{
        document.getElementById("failedA").innerHTML = 
        "Stop messing around right now. This is serious. <br> Input valid values.";
    }

    document.getElementById("hours12").innerHTML = score;
    document.getElementById("grade12").innerHTML = grade;
    document.getElementById("new12").innerHTML = scoreO;
    document.getElementById("subjectL").innerHTML = subject;
    document.getElementById("add12").style.display = "inline-block";
    document.getElementById("hidden11").style.display = "none";
    
}
function more12(grade){ //grade is inputted. we're judging based on this.
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
    var subject = document.getElementById('subject12').options[document.getElementById('subject12').selectedIndex].text;
    
    if(subject == "Other"){
        subject = prompt("What is the subject being evaluated?")
    } else{
        subject = subject;
    }
    var scoreO;
        switch(grade){
            case "A":
                scoreO = scoreN; 
                break;
            case "B":
            case "C":
                scoreO = scoreN + 1; 
                break;
            case "D":
            case "E":
            case "F":
                scoreO = scoreN + 3;
                break;
            case "G":
            case "U":
                scoreO = scoreN + 5;
                break;
        }

    if(score < 0){
        document.getElementById("failedA").innerHTML = 
        "You fool. You bastard. <br>Stop making a mockery of my code. <br>You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("list13").innerHTML = "<br>You should revise for " + subject + " for " + scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("list13").innerHTML = "<br>You're doing great in " + subject + "!";
    } else{
        document.getElementById("failedA").innerHTML = 
        "Stop messing around right now. This is serious. <br> Input valid values.";
    }

    document.getElementById("hours13").innerHTML = score;
    document.getElementById("grade13").innerHTML = grade;
    document.getElementById("new13").innerHTML = scoreO;
    document.getElementById("subjectM").innerHTML = subject;
    document.getElementById("add13").style.display = "inline-block";
    document.getElementById("hidden12").style.display = "none";
    
}
function more13(grade){ //grade is inputted. we're judging based on this.
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
    var subject = document.getElementById('subject13').options[document.getElementById('subject13').selectedIndex].text;
    
    if(subject == "Other"){
        subject = prompt("What is the subject being evaluated?")
    } else{
        subject = subject;
    }
    var scoreO;
        switch(grade){
            case "A":
                scoreO = scoreN; 
                break;
            case "B":
            case "C":
                scoreO = scoreN + 1; 
                break;
            case "D":
            case "E":
            case "F":
                scoreO = scoreN + 3;
                break;
            case "G":
            case "U":
                scoreO = scoreN + 5;
                break;
        }

    if(score < 0){
        document.getElementById("failedA").innerHTML = 
        "You fool. You bastard. <br>Stop making a mockery of my code. <br>You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("list14").innerHTML = "<br>You should revise for " + subject + " for " + scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("list14").innerHTML = "<br>You're doing great in " + subject + "!";
    } else{
        document.getElementById("failedA").innerHTML = 
        "Stop messing around right now. This is serious. <br> Input valid values.";
    }

    document.getElementById("hours14").innerHTML = score;
    document.getElementById("grade14").innerHTML = grade;
    document.getElementById("new14").innerHTML = scoreO;
    document.getElementById("subjectN").innerHTML = subject;
    document.getElementById("add14").style.display = "inline-block";
    document.getElementById("hidden13").style.display = "none";
    
}
function more14(grade){ //grade is inputted. we're judging based on this.
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
    var subject = document.getElementById('subject14').options[document.getElementById('subject14').selectedIndex].text;
    
    if(subject == "Other"){
        subject = prompt("What is the subject being evaluated?")
    } else{
        subject = subject;
    }
    var scoreO;
        switch(grade){
            case "A":
                scoreO = scoreN; 
                break;
            case "B":
            case "C":
                scoreO = scoreN + 1; 
                break;
            case "D":
            case "E":
            case "F":
                scoreO = scoreN + 3;
                break;
            case "G":
            case "U":
                scoreO = scoreN + 5;
                break;
        }

    if(score < 0){
        document.getElementById("failedA").innerHTML = 
        "You fool. You bastard. <br>Stop making a mockery of my code. <br>You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("list15").innerHTML = "<br>You should revise for " + subject + " for " + scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("list15").innerHTML = "<br>You're doing great in " + subject + "!";
    } else{
        document.getElementById("failedA").innerHTML = 
        "Stop messing around right now. This is serious. <br> Input valid values.";
    }

    document.getElementById("hours15").innerHTML = score;
    document.getElementById("grade15").innerHTML = grade;
    document.getElementById("new15").innerHTML = scoreO;
    document.getElementById("subjectO").innerHTML = subject;
    document.getElementById("add15").style.display = "inline-block";
    document.getElementById("hidden14").style.display = "none";
    
}
function more15(grade){ //grade is inputted. we're judging based on this.
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
    var subject = document.getElementById('subject15').options[document.getElementById('subject15').selectedIndex].text;
    
    if(subject == "Other"){
        subject = prompt("What is the subject being evaluated?")
    } else{
        subject = subject;
    }
    var scoreO;
        switch(grade){
            case "A":
                scoreO = scoreN; 
                break;
            case "B":
            case "C":
                scoreO = scoreN + 1; 
                break;
            case "D":
            case "E":
            case "F":
                scoreO = scoreN + 3;
                break;
            case "G":
            case "U":
                scoreO = scoreN + 5;
                break;
        }

    if(score < 0){
        document.getElementById("failedA").innerHTML = 
        "You fool. You bastard. <br>Stop making a mockery of my code. <br>You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("list16").innerHTML = "<br>You should revise for " + subject + " for " + scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("list16").innerHTML = "<br>You're doing great in " + subject + "!";
    } else{
        document.getElementById("failedA").innerHTML = 
        "Stop messing around right now. This is serious. <br> Input valid values.";
    }

    document.getElementById("hours16").innerHTML = score;
    document.getElementById("grade16").innerHTML = grade;
    document.getElementById("new16").innerHTML = scoreO;
    document.getElementById("subjectP").innerHTML = subject;
    document.getElementById("add16").style.display = "inline-block";
    document.getElementById("hidden15").style.display = "none";
    
}
function more16(grade){ //grade is inputted. we're judging based on this.
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
    var subject = document.getElementById('subject16').options[document.getElementById('subject16').selectedIndex].text;
    
    if(subject == "Other"){
        subject = prompt("What is the subject being evaluated?")
    } else{
        subject = subject;
    }
    var scoreO;
        switch(grade){
            case "A":
                scoreO = scoreN; 
                break;
            case "B":
            case "C":
                scoreO = scoreN + 1; 
                break;
            case "D":
            case "E":
            case "F":
                scoreO = scoreN + 3;
                break;
            case "G":
            case "U":
                scoreO = scoreN + 5;
                break;
        }

    if(score < 0){
        document.getElementById("failedA").innerHTML = 
        "You fool. You bastard. <br>Stop making a mockery of my code. <br>You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("list17").innerHTML = "<br>You should revise for " + subject + " for " + scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("list17").innerHTML = "<br>You're doing great in " + subject + "!";
    } else{
        document.getElementById("failedA").innerHTML = 
        "Stop messing around right now. This is serious. <br> Input valid values.";
    }

    document.getElementById("hours17").innerHTML = score;
    document.getElementById("grade17").innerHTML = grade;
    document.getElementById("new17").innerHTML = scoreO;
    document.getElementById("subjectQ").innerHTML = subject;
    document.getElementById("add17").style.display = "inline-block";
    document.getElementById("hidden16").style.display = "none";
    
}
function more17(grade){ //grade is inputted. we're judging based on this.
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
    var subject = document.getElementById('subject17').options[document.getElementById('subject17').selectedIndex].text;
    
    if(subject == "Other"){
        subject = prompt("What is the subject being evaluated?")
    } else{
        subject = subject;
    }
    var scoreO;
        switch(grade){
            case "A":
                scoreO = scoreN; 
                break;
            case "B":
            case "C":
                scoreO = scoreN + 1; 
                break;
            case "D":
            case "E":
            case "F":
                scoreO = scoreN + 3;
                break;
            case "G":
            case "U":
                scoreO = scoreN + 5;
                break;
        }

    if(score < 0){
        document.getElementById("failedA").innerHTML = 
        "You fool. You bastard. <br>Stop making a mockery of my code. <br>You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("list18").innerHTML = "<br>You should revise for " + subject + " for " + scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("list18").innerHTML = "<br>You're doing great in " + subject + "!";
    } else{
        document.getElementById("failedA").innerHTML = 
        "Stop messing around right now. This is serious. <br> Input valid values.";
    }

    document.getElementById("hours18").innerHTML = score;
    document.getElementById("grade18").innerHTML = grade;
    document.getElementById("new18").innerHTML = scoreO;
    document.getElementById("subjectR").innerHTML = subject;
    document.getElementById("add18").style.display = "inline-block";
    document.getElementById("hidden17").style.display = "none";
    
}
function more18(grade){ //grade is inputted. we're judging based on this.
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
    var subject = document.getElementById('subject18').options[document.getElementById('subject18').selectedIndex].text;
    
    if(subject == "Other"){
        subject = prompt("What is the subject being evaluated?")
    } else{
        subject = subject;
    }
    var scoreO;
        switch(grade){
            case "A":
                scoreO = scoreN; 
                break;
            case "B":
            case "C":
                scoreO = scoreN + 1; 
                break;
            case "D":
            case "E":
            case "F":
                scoreO = scoreN + 3;
                break;
            case "G":
            case "U":
                scoreO = scoreN + 5;
                break;
        }

    if(score < 0){
        document.getElementById("failedA").innerHTML = 
        "You fool. You bastard. <br>Stop making a mockery of my code. <br>You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("list19").innerHTML = "<br>You should revise for " + subject + " for " + scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("list19").innerHTML = "<br>You're doing great in " + subject + "!";
    } else{
        document.getElementById("failedA").innerHTML = 
        "Stop messing around right now. This is serious. <br> Input valid values.";
    }

    document.getElementById("hours19").innerHTML = score;
    document.getElementById("grade19").innerHTML = grade;
    document.getElementById("new19").innerHTML = scoreO;
    document.getElementById("subjectS").innerHTML = subject;
    document.getElementById("add19").style.display = "inline-block";
    document.getElementById("hidden18").style.display = "none";
    
}
function more19(grade){ //grade is inputted. we're judging based on this.
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
    var subject = document.getElementById('subject19').options[document.getElementById('subject19').selectedIndex].text;
    
    if(subject == "Other"){
        subject = prompt("What is the subject being evaluated?")
    } else{
        subject = subject;
    }
    var scoreO;
        switch(grade){
            case "A":
                scoreO = scoreN; 
                break;
            case "B":
            case "C":
                scoreO = scoreN + 1; 
                break;
            case "D":
            case "E":
            case "F":
                scoreO = scoreN + 3;
                break;
            case "G":
            case "U":
                scoreO = scoreN + 5;
                break;
        }

    if(score < 0){
        document.getElementById("failedA").innerHTML = 
        "You fool. You bastard. <br>Stop making a mockery of my code. <br>You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("list20").innerHTML = "<br>You should revise for " + subject + " for " + scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("list20").innerHTML = "<br>You're doing great in " + subject + "!";
    } else{
        document.getElementById("failedA").innerHTML = 
        "Stop messing around right now. This is serious. <br> Input valid values.";
    }

    document.getElementById("hours20").innerHTML = score;
    document.getElementById("grade20").innerHTML = grade;
    document.getElementById("new20").innerHTML = scoreO;
    document.getElementById("subjectT").innerHTML = subject;
    document.getElementById("add20").style.display = "inline-block";
    document.getElementById("hidden19").style.display = "none";
    document.getElementById("hidden20").style.display = "none";
    
}