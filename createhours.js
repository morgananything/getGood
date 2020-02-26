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
        "You fool. You bastard. Stop making a mockery of my code. You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("tableA").innerHTML = "You should revise for "+ scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("tableA").innerHTML = "You're doing great in " + subject + "!";
    } else{
        document.getElementById("tableA").innerHTML = 
        "Stop messing around right now. This is serious. <br> Input valid values.";
    }

    document.getElementById("hoursA").innerHTML = score;
    document.getElementById("gradeA").innerHTML = grade;
    document.getElementById("newA").innerHTML = scoreO;
    document.getElementById("subjectA").innerHTML = subject;
    document.getElementById("add1").style.display = "inline-block";
    
}

function more1(grade){ 
    var subject = document.getElementById('subject1').options[document.getElementById('subject1').selectedIndex].text;
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
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
        "You fool. You bastard. Stop making a mockery of my code. You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("tableA").innerHTML = "You should revise for "+ scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("tableA").innerHTML = "You're doing great!";
    }else{
        document.getElementById("tableA").innerHTML = 
        "Stop messing around right now. This is serious. Prepare your values with the dropdowns and input valid values.";
    }
    document.getElementById("hoursB").innerHTML = score;
    document.getElementById("gradeB").innerHTML = grade;
    document.getElementById("newB").innerHTML = scoreO;
    document.getElementById("subjectB").innerHTML = subject;
    document.getElementById("hidden1").style.display = "none";
    document.getElementById("add1").style.display = "none";
}

function more2(grade){ 
    var subject = document.getElementById('subject2').options[document.getElementById('subject2').selectedIndex].text;
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
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
        "You fool. You bastard. Stop making a mockery of my code. You can't revise for negative hours.";
    } else if(scoreO > score){
        document.getElementById("tableA").innerHTML = "You should revise for " + subject "for " + scoreO + " hours.";
    } else if(scoreO == score){
        document.getElementById("tableA").innerHTML = "You're doing great!";
    }else{
        document.getElementById("tableA").innerHTML = 
        "Stop messing around right now. This is serious. Prepare your values with the dropdowns and input valid values.";
    }
    document.getElementById("hoursC").innerHTML = score;
    document.getElementById("gradeC").innerHTML = grade;
    document.getElementById("newC").innerHTML = scoreO;
    document.getElementById("subjectC").innerHTML = subject;
    document.getElementById("hidden2").style.display = "none";
    document.getElementById("add2").style.display = "none";
}
