document.getElementById('btn-more').addEventListener('click',function(){
const headText=document.getElementById('head-text');
headText.style.display='none'
})
document.getElementById('text-field').addEventListener('keyup',function(event){
const text=event.target.value;
const btnMore=document.getElementById('btn-more');
if(text==='delete'){
btnMore.removeAttribute('disabled');
}else{
    btnMore.setAttribute('disabled',true);
}
})