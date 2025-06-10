//1
function handleOnClick(){
    const handlerStatus=document.getElementById('handler-status');
    handlerStatus.innerText='My wife is Sumaiya.'
}
//2
document.getElementById('event-listener').addEventListener('click',function(){
const handlerStatus2=document.getElementById('handler-status2');
    handlerStatus2.innerText='My wife is Sumaiya Billah.'
})
//3
document.getElementById('btn-update').addEventListener('click',function(){
const inputField=document.getElementById('input-field');
console.log(inputField)
console.log(inputField.Value)
const handlerSection=document.getElementById('handler-section');
const p=document.createElement('p');
p.innerText=inputField.value;
handlerSection.appendChild(p);
inputField.value='';

})
//4
document.getElementById('text-btn').addEventListener('click',function(){
    const commentContainer=document.getElementById('comment-container');
    const textBox=document.getElementById('text-box');
    //console.log(textBox)
    //console.log(textBox.value)
    const p=document.createElement('p');
    p.innerText=textBox.value;
    commentContainer.appendChild(p);
    textBox.value='';

})