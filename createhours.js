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
        document.getElementById("tableA").innerHTML = "You're doing great!";
    }else{
        document.getElementById("tableA").innerHTML = 
        "Stop messing around right now. This is serious. <br> Prepare your values with the <br> dropdowns and input valid values.";
    }

    document.getElementById("hoursA").innerHTML = score;
    document.getElementById("gradeA").innerHTML = grade;
    document.getElementById("newA").innerHTML = scoreO;
    document.getElementById("subjectA").innerHTML = subject;
    
    var more = document.getElementById("more");
  if (more.style.display === "block") {
    more.style.display = "none";
  } else {
    
}
/////////
function more(grade1){ 
    var subject1 = document.getElementById('subject1').options[document.getElementById('subject1').selectedIndex].text;
    var score1 = prompt("How many hours this week did you revise?")
    var scoreN1 = parseInt(score1);
    var grade1 = prompt("What grade did you achieve in this assessment?")
    if(subject == "Other"){
        subject = prompt("What is the subject being evaluated?")
    } else{
        subject = subject;
    }
    var scoreO1;
        switch(grade1){
            case "A":
                scoreO1 = scoreN1; 
                break;
            case "B":
            case "C":
                scoreO1 = scoreN1 + 1; 
                break;
            case "D":
            case "E":
            case "F":
                scoreO1 = scoreN1 + 3;
                break;
            case "G":
            case "U":
                scoreO1 = scoreN1 + 5;
                break;
        }

    if(score1 < 0){
        document.getElementById("failedA").innerHTML = 
        "You fool. You bastard. Stop making a mockery of my code. You can't revise for negative hours.";
    } else if(scoreO1 > score1){
        document.getElementById("tableA").innerHTML = "You should revise for "+ scoreO1 + " hours.";
    } else if(scoreO1 == score1){
        document.getElementById("tableA").innerHTML = "You're doing great!";
    }else{
        document.getElementById("tableA").innerHTML = 
        "Stop messing around right now. This is serious. Prepare your values with the dropdowns and input valid values.";
    }
    document.getElementById("hoursB").innerHTML = score1;
    document.getElementById("gradeB").innerHTML = grade1;
    document.getElementById("newB").innerHTML = scoreO1;
    document.getElementById("subjectB").innerHTML = subject1;
    document.getElementById("more").innerHTML = "add more?";
}
