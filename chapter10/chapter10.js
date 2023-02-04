var replaceButton = document.getElementById("replaceButton");
replaceButton.addEventListener("click", replaceIt);

function replaceIt(){
    var storyDiv = document.getElementById('story');

    var adj1 = "<span class='replacement'>" + document.getElementById('adj1').value + "</span>"
    // Instert more variable definitions here

    var verbIng = "<span class='replacement'>"+ document.getElementById("verbIng").value + "</span>";
    var roomInHouse = "<span class='replacement'>"+ document.getElementById("roomInHouse").value + "</span>";
    var color = "<span class='replacement'>"+ document.getElementById("colour").value + "</span>";
    var nounPlural = "<span class='replacement'>"+ document.getElementById("nounPlural").value + "</span>";
    var pastVerb = "<span class='replacement'>"+ document.getElementById("pastVerb").value + "</span>";

    var theStory =  "<h1>Douglas's Dance Party</h1>";

    theStory += "One " + adj1 + " day, ";
    // Put the rest of the story here, using the += operator

    theStory += " Douglas was " + verbIng;
    theStory += " in his " + roomInHouse;
    theStory += ", reading a book about " + color;
    theStory += " " + nounPlural + ".<br><br>";
    theStory += "As he " + pastVerb + "...  (to be continued)";

    storyDiv.innerHTML = theStory;
};

