//2
function add(){
 console.log(' He Goes to school')
  document.body.style.backgroundColor='red';
}
 //3
const  makeBlueButton=document.getElementById('make-blue');
makeBlueButton.onclick=makeBlue;  
function makeBlue(){
     console.log('Clicked')
    document.body.style.backgroundColor='blue';
}
//4
const  makePurpleButton=document.getElementById('make-purple');
makePurpleButton.onclick=function makePurple(){
    document.body.style.backgroundColor='purple';
}
//5
const  makePinkButton=document.getElementById('make-pink');
makePinkButton.addEventListener('click',makePink)
function makePink(){
    document.body.style.backgroundColor='pink';
}
//6
const  makeGreenButton=document.getElementById('make-green');
makeGreenButton.addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor='green';
}
)

//7
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor='goldenrod';
}
);















