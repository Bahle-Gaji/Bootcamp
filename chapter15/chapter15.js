var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
var d = new Date();

// call the displayDate() function
displayDate();

function displayDate() {
    // todo: display the current date in the todaysdate div
    todayDate.innerHTML = d.toDateString();
};

function displayActivity() {

    // todo: find out the day of the week
    var day = d.getDay();

    /* todo: set a variable, called youShould, with a 
    different string based on what day of the 
    week it is. */

    var youShould;
    switch(day){
        case 0:
            youShould = 'Prepare for the week';
            break;
        case 1:
            youShould = 'Go gym';
            break;
        case 2:
            youShould = 'Visit my momss';
            break;
        case 3:
            youShould = 'Go to school';
            break;
        case 4:
            youShould = 'Go to school';
            break;
        case 5:
            youShould = 'Go to school';
            break;
        case 6:
            youShould = 'Watch movie';
            break;
        default:
            youShould = 'I don\'t know this day';
            break;
        
    };

    // todo: output the value of youShould into the thingToDo div
    document.getElementById('thingToDo').innerHTML = youShould;

};