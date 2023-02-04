document.getElementById('lefteye').style.backgroundColor = 'purple';
document.getElementById('head').style.transform = 'rotate(15deg)';
document.getElementById("body").style.border = "2px black solid";
document.getElementById('mouth').style.borderRadius = '4px';
document.getElementById('righteye').style.border = '4px yellow dotted';
document.getElementById('leftarm').style.backgroundColor = '#FF00FF';
document.getElementById('body').style.color = '#FF0000'; 
document.getElementById('head').style.borderTop = '5px black solid';


document.getElementById('head').style.transform = 'rotate(-15deg)';
document.getElementById('nose').style.borderRadius = '50%';
document.getElementById('rightarm').style.backgroundColor = "green";
document.getElementById('mouth').style.backgroundColor = 'pink';



var rightEye = document.getElementById('righteye');
rightEye.addEventListener('click', moveUpDown);

var leftEye = document.getElementById('lefteye');
leftEye.addEventListener('click', moveUpDown);

function moveUpDown(e){
    var robotPart = e.target;
    var top = 0;
    var animation = setInterval(frame, 10)
    
    function frame(){
        robotPart.style.top = top + '%';
        top++;
        if(top === 20){
            clearInterval(animation);
        }
    }
};


var leftArm = document.getElementById('leftarm');
leftArm.addEventListener('click', moveRightLeft);

function moveRightLeft(e){
    var robotPart = e.target;
    var lft = 0;
    var animation = setInterval(frame, 10);

    function frame(){
        robotPart.style.left = lft + '%';
        lft++;
        if(lft === 70){
            clearInterval(animation)
        }
    }
};

var nose = document.getElementById('nose');
nose.addEventListener('click', moveUpDown2);

function moveUpDown2(e){
    var robotPart = e.target;
    var top = 0;
    var animation = setInterval(frame, 10);

    function frame(){
        robotPart.style.top = top + '%';
        top++;
        if(top === 50){
            clearInterval(animation);
        }
    }
};
