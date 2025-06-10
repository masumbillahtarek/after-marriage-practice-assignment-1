const mainContainer=document.getElementById('main-container');
const newSection=document.createElement('section');
mainContainer.appendChild(newSection);
const head=document.createElement('h1');
head.innerText='My Favourite Food';
newSection.appendChild(head);
const ul=document.createElement('ul');
newSection.appendChild(ul);
const li1=document.createElement('li');
li1.innerText='Apple';
ul.appendChild(li1);
const li3=document.createElement('li');
li3.innerText='Orange';
ul.appendChild(li3);
const li4=document.createElement('li');
li4.innerText='Banana';
ul.appendChild(li4);
const li5=document.createElement('li');
li5.innerText='Jack-Fruits';
ul.appendChild(li5);

const newSection2=document.createElement('section')
newSection2.innerHTML=`                 
   <h1>My Friend List</h1>
<ul>
    <li>Rakib Gazi</li>
    <li>Rakib Hossain</li>     
    <li>Robel</li>
    <li>Tamim</li>
</ul>
`// {20}
mainContainer.appendChild(newSection2)