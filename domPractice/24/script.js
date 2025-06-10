const sections=document.querySelectorAll('section');
//console.log(sections)
for(const section of sections){
    console.log(section)
    section.style.backgroundColor='yellow'
    section.style.border='2px solid red'
    section.style.borderRadius='15px'
    section.style.color='blue'
    section.style.margin='20px'
    section.style.padding='40px'
}
const placesContainer=document.getElementById('place-container');
placesContainer.style.backgroundColor='green'
placesContainer.classList.add('text-center')
placesContainer.classList.remove('motin')
console.log(placesContainer.classList)
console.log(placesContainer.childNodes)
console.log(placesContainer.firstChild)
console.log(placesContainer.childNodes[1])
console.log(placesContainer.childNodes[3])
console.log(placesContainer.childNodes[3].nextSibling) //{16}

const placeUl=document.querySelector('#place-container ul');
console.log(placeUl);
const li=document.createElement('li'); // {17}
li.innerText='Brand New Car';
placeUl.appendChild(li)  // {18}

const li2=document.createElement('li');
li2.innerText='Sumaiya Go to her Sosur Bari';
placeUl.appendChild(li2)

console.log(placeUl.parentNode)
console.log(placeUl.parentNode.parentNode) // {19}