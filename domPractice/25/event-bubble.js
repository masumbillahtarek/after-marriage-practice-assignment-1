document.getElementById('item-1').addEventListener('click',function(event){
console.log('item-1 clicked')
event.stopImmediatePropagation();

})
document.getElementById('item-1').addEventListener('click',function(){
console.log('item-2 clicked')
})
document.getElementById('item-1').addEventListener('click',function(){
console.log('item-3 clicked')
})
document.getElementById('item-1').addEventListener('click',function(){
console.log('item-4 clicked')
})
document.getElementById('item-1').addEventListener('click',function(){
console.log('item-5 clicked')
})
document.getElementById('event-item').addEventListener('click',function(){
console.log('event item clicked')
})
document.getElementById('event-section').addEventListener('click',function(){
console.log('event section clicked')
})