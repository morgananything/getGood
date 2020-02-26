function createHours(grade){ //grade is inputted. we're judging based on this.
    var score = prompt("How many hours this week did you revise?")
    var scoreN = parseInt(score);
    var grade = prompt("What grade did you achieve in this assessment?")
    var subject = document.getElementById('subject').options[document.getElementById('subject').selectedIndex].text;

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

    document.getElementById("hoursA").innerHTML = score;
    document.getElementById("gradeA").innerHTML = grade;
    document.getElementById("newA").innerHTML = scoreO;
    document.getElementById("subjectA").innerHTML = subject;
    document.getElementById("more").innerHTML = "add more?";

    var more = document.getElementById("more");
  if (more.style.display === "none") {
    more.style.display = "none";
  } else {
    more.style.display = "button";
  }
}

/////////

function more(){
    alert("greedy");
}