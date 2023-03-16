//###################Variables#################################

const $container = document.querySelector('.mobilemenu-container');
const $icons = document.querySelectorAll('.icon-element');
const $navigationLinks = document.querySelectorAll('.li-element');
const $cards = document.querySelector('.worksabout');
const $template = document.getElementById('template-cards').content;
const $fragment = document.createDocumentFragment();

const cardContent = [
  {
    id1 : 's1div1',
    class1 : 'cardimgm',
    class2 : 'cardimgd',
    src1 : './images/s1.svg',
    src2 : './images/s1imgd.svg',
    id2 : 's1div2',
    id3 : 's1text',
    class3 : 'cardtext',
    h2textm : 'Tonic',
    h2textd : 'Tonic',
    class4 : 's1h2m',
    class5 : 's1h2d',
    class6 : 'info',
    class7 : 's1h3m',
    class8 : 's1h3d',
    h3textm : 'CANOPY',
    h3textd : 'CANOPY',
    id4 : 's1ulm',
    class9 : 'extra',
    span1 : 'Back End Dev',
    span2 : '2015',
   /*  id5 : '' */
    id6 : 's1uld',
    class10 : 'extra',

  }
];

cardContent.forEach(e=>{
  $template.querySelector('article').children[0].id = e.id1;
  $template.getElementById(e.id1).children[0].classList.add(e.class1);
  $template.querySelectorAll('img')[0].setAttribute('src', e.src1);
  $template.getElementById(e.id1).children[1].classList.add(e.class2);
  $template.querySelectorAll('img')[1].setAttribute('src', e.src2);
  $template.querySelector('article').children[1].id = e.id2;
  $template.getElementById(e.id2).children[0].id = e.id3;
  $template.getElementById(e.id2).children[0].classList.add(e.class3);
  $template.querySelectorAll('h2')[0].textContent = e.h2textm;
  $template.querySelectorAll('h2')[0].classList.add(e.class4);
  $template.querySelectorAll('h2')[1].textContent = e.h2textd;
  $template.querySelectorAll('h2')[1].classList.add(e.class5);
  $template.querySelectorAll('h2')[1].nextElementSibling.classList.add(e.class6);
  $template.querySelectorAll('h3')[0].classList.add(e.class7);
  $template.querySelectorAll('h3')[0].textContent = e.h3textm;
  $template.querySelectorAll('h3')[1].classList.add(e.class8);
  $template.querySelectorAll('h3')[1].textContent = e.h3textd;
  $template.querySelectorAll('ul')[0].id = e.id4;
  $template.querySelectorAll('ul')[0].classList.add(e.class9);
  $template.querySelectorAll('span')[0].textContent = e.span1;
  $template.querySelectorAll('span')[1].textContent = e.span2;
/*   $template.querySelectorAll('ul')[1].id =  */
  $template.querySelectorAll('li')[2].id = e.id6;
  $template.querySelectorAll('li')[2].classList.add(e.class10);






  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});
console.log($template.querySelector('article'));

$cards.appendChild($fragment);
//###################Functions#################################

function toggleActivated() {
  $container.classList.toggle('activated');
}

//###################Event Listeners#################################

$icons.forEach(e => {
  e.addEventListener('click', toggleActivated)
});

$navigationLinks.forEach(e => {
  e.addEventListener('click', toggleActivated)
});

