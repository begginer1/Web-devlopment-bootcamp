var buttonColours=['red','blue','green','yellow']
var gamePattern=[];
var userClickPattern=[]
var level=0;
var started=false;
function nextSequence()
{
    userClickPattern=[]
    $('h1').html('Level '+level);
    level++;
var randomNumber=Math.floor(Math.random()*4);

var randomChosenColor=buttonColours[randomNumber];
gamePattern.push(randomChosenColor);
// fade animation
$('#'+randomChosenColor).fadeOut(100).fadeIn(100)
playSound(randomChosenColor);
}



// When mouse clicked a button
 $('.btn').on('click',function(){
// will run only when keyboard is pressed
userChosenColor=this.id
        userClickPattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);

        //To check Pattern
        checkAnswer(userClickPattern.length -1)    
    });
//     else
//     {
// userClickPattern=[];
// level=0;
// animatePress(userChosenColor);
// playSound("wrong");
// started=false
// $('h1').html('Game Over')
// break;
// }
//     }
// })

// keyboard click
$(document).on('keydown',function(){
  
   if(started===false){
    nextSequence();
started=true;   
}
})
    function playSound(name)
    { 
        let sound= new Audio('sounds/'+name+'.mp3')
        sound.play()
    }

    // for animation when button is clicked
function animatePress(currentColor)
{
$('#'+currentColor).addClass('pressed');
setTimeout(function(){
    $('#'+currentColor).removeClass('pressed'); 
},200)
}

function checkAnswer(currentLevel)
{
    if(userClickPattern[currentLevel]===gamePattern[currentLevel])
    {
        if(userClickPattern.length===gamePattern.length){
            userClickPattern=[];
            setTimeout(function(){nextSequence()},1000);
            
    }
}
    else{
    $('body').addClass('game-over');
    setTimeout(function(){$('body').removeClass('game-over');},200);
    $('h1').html('Game Over, Press Any Key to Restart')
    // function to reset values
    playSound('wrong')
    startOver()
}
}

function startOver()
{
    level=0;
    gamePattern=[];
    started=false
   
}