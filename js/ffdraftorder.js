//randomizes draft order based on designated percentages, exclude those already picked

//alert("Proceed to display draft order for 2017.");

var teams = ['Team7', 'Team8', 'Team9', 'Team10', 'Team11', 'Team12', 'Team13', 'Team14'];

var team7 = true;
var team8 = true;
var team9 = true;
var team10 = true;
var team11 = true;
var team12 = true;
var team13 = true;
var team14 = true;

var draftPosition = ["1st: ", "2nd: ", "3rd: ", "4th: ", "5th: ", "6th: ", "7th: "];
var currentPosition = 0;

while (team7 == true || team8 == true || team9 == true || team10 == true || team11 == true || team12 == true || team13 == true || team14 == true){
    //alert current draft position
    //needs more here to display current position and then display team picked
    alert(draftPosition[currentPosition]);
    currentPosition++;
    
    //random # to pick team
    var draftPercentage = Math.random();
    //show # 
    console.log(draftPercentage);
    
    //teams likelyhood of getting picked
    if (draftPercentage <= .25 && team7 == true){
        //write to console
        console.log(teams[0]);
        //display on page
        var newList = document.createElement("li");
        newList.innerHTML = teams[0];
        document.getElementById("demo").appendChild(newList);
        //team cannot be chosen again
        team7 = false;
    } else if (draftPercentage >.25 && draftPercentage <= .43 && team8 == true){
        console.log(teams[1]);
        var newList = document.createElement("li");
        newList.innerHTML = teams[1];
        document.getElementById("demo").appendChild(newList);
        team8 = false;
    } else if (draftPercentage >.43 && draftPercentage <= .58 && team9 == true){
        console.log(teams[2]);
        var newList = document.createElement("li");
        newList.innerHTML = teams[2];
        document.getElementById("demo").appendChild(newList);
        team9 = false;
    } else if (draftPercentage >.58 && draftPercentage <= .71 && team10 == true){
        console.log(teams[3]);
        var newList = document.createElement("li");
        newList.innerHTML = teams[3];
        document.getElementById("demo").appendChild(newList);
        team10 = false;
    } else if (draftPercentage >.71 && draftPercentage <= .83 && team11 == true){
        console.log(teams[4]);
        var newList = document.createElement("li");
        newList.innerHTML = teams[4];
        document.getElementById("demo").appendChild(newList);
        team11 = false;
    } else if (draftPercentage >.83 && draftPercentage <= .93 && team12 == true){
        console.log(teams[5]);
        var newList = document.createElement("li");
        newList.innerHTML = teams[5];
        document.getElementById("demo").appendChild(newList);
        team12 = false;
    } else if (draftPercentage >.93 && draftPercentage <= .98 && team13 == true){
        console.log(teams[6]);
        var newList = document.createElement("li");
        newList.innerHTML = teams[6];
        document.getElementById("demo").appendChild(newList);
        team13 = false;
    } else if (draftPercentage >.98 && draftPercentage < 1 && team14 == true){
        console.log(teams[7]);
        var newList = document.createElement("li");
        newList.innerHTML = teams[7];
        document.getElementById("demo").appendChild(newList);
        team14 = false;
    }
}
