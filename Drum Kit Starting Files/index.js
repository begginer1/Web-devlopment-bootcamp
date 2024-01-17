var audio;

for (let i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function()
  {
    handleClick(this.innerHTML);
    animation(this.innerHTML);
  });
}



document.addEventListener('keydown',function(event)
{
  handleClick(event.key);
  animation(event.key)
}); 


function handleClick(key) {
  switch (key) {
    case 'w':
        audio=new Audio('sounds/tom-1.mp3')
        audio.play()
      break;

    case 'a':
        audio=new Audio('sounds/tom-2.mp3')
        audio.play()
      break;

    case 's':
        audio=new Audio('sounds/tom-3.mp3')
        audio.play()
      break;

    case 'd':
        audio=new Audio('sounds/tom-4.mp3')
        audio.play()
      break;

    case 'j':
        audio=new Audio('sounds/snare.mp3')
        audio.play()
      break;

    case 'k':
        audio=new Audio('sounds/crash.mp3')
        audio.play()
      break;

    case 'l':
        audio=new Audio('sounds/kick-bass.mp3')
        audio.play()
      break;

    default:
      console.log(key);
      break;
  }
}

function animation(key)
{
  //for active
  document.querySelector('.'+key).classList.add('pressed')
// for deactive

setTimeout(function()
{
  document.querySelector('.'+key).classList.remove('pressed')
},500);
}