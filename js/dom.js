// const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);

document.getElementById('title-one').style.color = 'purple'

const title = document.getElementById('title-one')
title.setAttribute('title', 'tooltip set by JavaScript')


const sectionOne = document.getElementById('header-section');
sectionOne.style.backgroundColor = 'violet';
sectionOne.style.paddingBottom = '10px'
sectionOne.style.paddingTop = '20px'
sectionOne.style.marginBottom = '20px'
sectionOne.style.width = '1020px'
sectionOne.style.margin = '0 auto'
sectionOne.style.borderRadius = '16px'



const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);


const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Rice and chicken';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Rice and egg';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Rice and fish';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'Briyani';
ul.appendChild(li4);

section.appendChild(ul);

mainContainer.appendChild(section);






const mainContainer2 = document.getElementById('main-container');
const sectionDress = document.createElement('section');

sectionDress.innerHTML = `
    <h1>My dress section</h1>
    <ul>
        <li>Shirt</li>
        <li>Pant</li>
        <li>Panjabi</li>
        <li>Sport Jersey</li>
    </ul>
`
mainContainer2.appendChild(sectionDress);



const sections = document.querySelectorAll('section');
for(let section of sections) {
    section.style.border = '2px solid blue'
    section.style.marginTop = '10px'
    section.style.backgroundColor = 'black'
    section.style.borderRadius = '16px'
}