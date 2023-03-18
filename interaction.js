// ::::::::::::::::::::::Variables:::::::::::::::::::::::::::::::::::

const $container = document.querySelector('.mobilemenu-container');
const $icons = document.querySelectorAll('.icon-element');
const $navigationLinks = document.querySelectorAll('.li-element');
const $cards = document.querySelector('.worksabout');
const $cards2 = document.querySelector('.popscont');
const $template = document.getElementById('template-cards').content;
const $template2 = document.getElementById('popup-container').content;
const $fragment = document.createDocumentFragment();
const $fragment2 = document.createDocumentFragment();
const cardContent = [
  {
    articles: 'work',
    article: 's1',
    id1: 's1div1',
    class1: 'cardimgm',
    class2: 'cardimgd',
    src1: './images/s1.svg',
    alt1: 'A snapshot of the Tonic project',
    src2: './images/s1imgd.svg',
    alt2: 'A snapshot of the Tonic project',
    id2: 's1div2',
    id3: 's1text',
    class3: 'cardtext',
    h2text1: 'Tonic',
    h2text2: 'Tonic',
    class4: 's1h2m',
    class5: 's1h2d',
    class6: 'info',
    class7: 's1h3m',
    class8: 's1h3d',
    h3text1: 'CANOPY',
    h3text2: 'CANOPY',
    id4: 's1ulm',
    class9: 'extra',
    span1: 'Back End Dev',
    span2: '2015',
    id5: 's1uld',
    class10: 'extra',
    id6: 's1li1d',
    span3: 'Back End Dev',
    id7: 's1li2d',
    span4: 'Full Stack Dev',
    id8: 's1li3d',
    span5: 'Lead Developer',
    id9: 's1li4d',
    span6: '2015',
    id10: 's1li5d',
    span7: '2018',
    class11: 's1pm',
    ptext1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    class12: 's1pd',
    ptext2: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    class13: 'skills',
    class14: 'b1',
    buttontext1: 'html',
    class15: 'b6',
    buttontext2: 'Ruby on rails',
    class16: 'b2',
    buttontext3: 'css',
    class17: 'b3',
    buttontext4: 'javaScript',
    href1: '#',
    class18: 'b4',
    buttontext5: 'See Project',
    byhcontainer: 'byhcontainer',
    hand: 'hand',
    handsrc: './images/hand.svg',
    handalt: 'hand icon',
  },
  {
    articles: 'work',
    article: 's2',
    id1: 's2div1',
    class1: 'cardimgm',
    class2: 'cardimgd',
    src1: './images/s2.svg',
    alt1: 'A snapshot of the multi-post stories project',
    src2: './images/s2imgd.svg',
    alt2: 'A snapshot of the multi-post stories project',
    id2: 's2div2',
    id3: 's2text',
    class3: 'cardtext',
    h2text1: 'Multi-Post <br> Stories',
    h2text2: 'Multi-Post Stories',
    class4: 's2h2m',
    class5: 's2h2d',
    class6: 'info',
    class7: 's2h3m',
    class8: 's2h3d',
    h3text1: 'CANOPY',
    h3text2: 'FACEBOOK',
    id4: 's2ulm',
    class9: 'extra',
    span1: 'Back End Dev',
    span2: '2015',
    id5: 's2uld',
    class10: 'extra',
    id6: 's2li1d',
    span3: 'Back End Dev',
    id7: 's2li2d',
    span4: 'Full Stack Dev',
    id8: 's2li3d',
    span5: 'Lead Developer',
    id9: 's2li4d',
    span6: '2015',
    id10: 's2li5d',
    span7: '2018',
    class11: 's2pm',
    ptext1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    class12: 's2pd',
    ptext2: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    class13: 'skills',
    class14: 'b1',
    buttontext1: 'html',
    class15: 'b6',
    buttontext2: 'Ruby on rails',
    class16: 'b2',
    buttontext3: 'css',
    class17: 'b3',
    buttontext4: 'javaScript',
    href1: '#',
    class18: 'b4',
    buttontext5: 'See Project',
    byhcontainer: 'byhcontainer',
    hand: 'hand',
    handsrc: './images/hand.svg',
    handalt: 'hand icon',
  },
  {
    articles: 'work',
    article: 's3',
    id1: 's3div1',
    class1: 'cardimgm',
    class2: 'cardimgd',
    src1: './images/s3.svg',
    alt1: 'A snapshot of the Tonic project',
    src2: './images/s3imgd.svg',
    alt2: 'A snapshot of the Tonic project',
    id2: 's3div2',
    id3: 's3text',
    class3: 'cardtext',
    h2text1: 'Tonic',
    h2text2: 'Facebook 360',
    class4: 's3h2m',
    class5: 's3h2d',
    class6: 'info',
    class7: 's3h3m',
    class8: 's3h3d',
    h3text1: 'CANOPY',
    h3text2: 'FACEBOOK',
    id4: 's3ulm',
    class9: 'extra',
    span1: 'Back End Dev',
    span2: '2015',
    id5: 's3uld',
    class10: 'extra',
    id6: 's3li1d',
    span3: 'Back End Dev',
    id7: 's3li2d',
    span4: 'Full Stack Dev',
    id8: 's3li3d',
    span5: 'Lead Developer',
    id9: 's3li4d',
    span6: '2015',
    id10: 's3li5d',
    span7: '2018',
    class11: 's3pm',
    ptext1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    class12: 's3pd',
    ptext2: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR",
    class13: 'skills',
    class14: 'b1',
    buttontext1: 'html',
    class15: 'b6',
    buttontext2: 'Ruby on rails',
    class16: 'b2',
    buttontext3: 'css',
    class17: 'b3',
    buttontext4: 'javaScript',
    href1: '#',
    class18: 'b4',
    buttontext5: 'See Project',
    byhcontainer: 'byhcontainer',
    hand: 'hand',
    handsrc: './images/hand.svg',
    handalt: 'hand icon',
  },
  {
    articles: 'work',
    article: 's4',
    id1: 's4div1',
    class1: 'cardimgm',
    class2: 'cardimgd',
    src1: './images/s4.svg',
    alt1: 'A snapshot of the multi-post stories project',
    src2: './images/s4imgd.svg',
    alt2: 'A snapshot of the uber navigation project',
    id2: 's4div2',
    id3: 's4text',
    class3: 'cardtext',
    h2text1: 'Multi-Post <br> Stories',
    h2text2: 'Uber Navigation',
    class4: 's4h2m',
    class5: 's4h2d',
    class6: 'info',
    class7: 's4h3m',
    class8: 's4h3d',
    h3text1: 'CANOPY',
    h3text2: 'Uber',
    id4: 's4ulm',
    class9: 'extra',
    span1: 'Back End Dev',
    span2: '2015',
    id5: 's4uld',
    class10: 'extra',
    id6: 's4li1d',
    span3: 'Back End Dev',
    id7: 's4li2d',
    span4: 'Full Stack Dev',
    id8: 's4li3d',
    span5: 'Lead Developer',
    id9: 's4li4d',
    span6: '2015',
    id10: 's4li5d',
    span7: '2018',
    class11: 's4pm',
    ptext1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    class12: 's4pd',
    ptext2: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    class13: 'skills',
    class14: 'b1',
    buttontext1: 'html',
    class15: 'b6',
    buttontext2: 'Ruby on rails',
    class16: 'b2',
    buttontext3: 'css',
    class17: 'b3',
    buttontext4: 'javaScript',
    href1: '#',
    class18: 'b4',
    buttontext5: 'See Project',
    byhcontainer: 'byhcontainer',
    hand: 'hand',
    handsrc: './images/hand.svg',
    handalt: 'hand icon',
  },
];

cardContent.forEach((e) => {
  $template.querySelector('article').classList.add(e.articles, e.article);
  $template.querySelector('article').children[0].id = e.id1;
  $template.getElementById(e.id1).children[0].classList.add(e.class1);
  $template.querySelectorAll('img')[0].setAttribute('src', e.src1);
  $template.querySelectorAll('img')[0].setAttribute('alt', e.alt1);
  $template.getElementById(e.id1).children[1].classList.add(e.class2);
  $template.querySelectorAll('img')[1].setAttribute('src', e.src2);
  $template.querySelectorAll('img')[1].setAttribute('alt', e.alt2);
  $template.querySelector('article').children[1].id = e.id2;
  $template.getElementById(e.id2).children[0].id = e.id3;
  $template.getElementById(e.id2).children[0].classList.add(e.class3);
  $template.querySelectorAll('h2')[0].innerHTML = e.h2text1;
  $template.querySelectorAll('h2')[0].classList.add(e.class4);
  $template.querySelectorAll('h2')[1].textContent = e.h2text2;
  $template.querySelectorAll('h2')[1].classList.add(e.class5);
  $template.querySelectorAll('h2')[1].nextElementSibling.classList.add(e.class6);
  $template.querySelectorAll('h3')[0].classList.add(e.class7);
  $template.querySelectorAll('h3')[0].textContent = e.h3text1;
  $template.querySelectorAll('h3')[1].classList.add(e.class8);
  $template.querySelectorAll('h3')[1].textContent = e.h3text2;
  $template.querySelectorAll('ul')[0].id = e.id4;
  $template.querySelectorAll('ul')[0].classList.add(e.class9);
  $template.querySelectorAll('span')[0].textContent = e.span1;
  $template.querySelectorAll('span')[1].textContent = e.span2;
  $template.querySelectorAll('ul')[1].id = e.id5;
  $template.querySelectorAll('ul')[1].classList.add(e.class10);
  $template.querySelectorAll('li')[2].id = e.id6;
  $template.querySelectorAll('span')[2].textContent = e.span3;
  $template.querySelectorAll('li')[3].id = e.id7;
  $template.querySelectorAll('span')[3].textContent = e.span4;
  $template.querySelectorAll('li')[4].id = e.id8;
  $template.querySelectorAll('span')[4].textContent = e.span5;
  $template.querySelectorAll('li')[5].id = e.id9;
  $template.querySelectorAll('span')[5].textContent = e.span6;
  $template.querySelectorAll('li')[6].id = e.id10;
  $template.querySelectorAll('span')[6].textContent = e.span7;
  $template.querySelectorAll('p')[0].classList.add(e.class11);
  $template.querySelectorAll('p')[0].textContent = e.ptext1;
  $template.querySelectorAll('p')[1].classList.add(e.class12);
  $template.querySelectorAll('p')[1].textContent = e.ptext2;
  $template.querySelectorAll('ul')[2].classList.add(e.class13);
  $template.querySelectorAll('button')[0].classList.add(e.class14);
  $template.querySelectorAll('button')[0].textContent = e.buttontext1;
  $template.querySelectorAll('button')[1].classList.add(e.class15);
  $template.querySelectorAll('button')[1].textContent = e.buttontext2;
  $template.querySelectorAll('button')[2].classList.add(e.class16);
  $template.querySelectorAll('button')[2].textContent = e.buttontext3;
  $template.querySelectorAll('button')[3].classList.add(e.class17);
  $template.querySelectorAll('button')[3].textContent = e.buttontext4;
  $template.querySelectorAll('a')[0].setAttribute('href', e.href1);
  $template.querySelectorAll('button')[4].classList.add(e.class18);
  $template.querySelectorAll('button')[4].textContent = e.buttontext5;
  $template.querySelectorAll('ul')[2].nextElementSibling.classList.add(e.byhcontainer);
  $template.querySelectorAll('img')[2].classList.add(e.hand);
  $template.querySelectorAll('img')[2].setAttribute('src', e.handsrc);
  $template.querySelectorAll('img')[2].setAttribute('alt', e.handalt);

  const $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);

/* eslint-disable no-plusplus */
/* eslint-disable no-useless-escape */

// ::::::::::::::::::::Functions:::::::::::::::::::::::::::::::::

function toggleActivated() {
  $container.classList.toggle('activated');
}

// ::::::::::::::::::::Event Listeners:::::::::::::::::::::::::::

$icons.forEach((e) => {
  e.addEventListener('click', toggleActivated);
});

$navigationLinks.forEach((e) => {
  e.addEventListener('click', toggleActivated);
});

let setButtons = [];
setButtons = $cards.getElementsByClassName('b4');
let articlesgen = [];
articlesgen = $cards.getElementsByTagName('article');
const articlespop = [
  {
    h2m: '',
    h2d: '',
    h3m: '',
    h3d: '',
    imgm: '',
    imgd: '',
    p1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    p2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br><br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    span1: '',
    span2: '',
    button1: '',
    button2: '',
    button3: '',
    button4: '',
  },
  {
    h2m: '',
    h2d: '',
    h3m: '',
    h3d: '',
    imgm: '',
    imgd: '',
    p1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    p2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br><br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    span1: '',
    span2: '',
    button1: '',
    button2: '',
    button3: '',
    button4: '',
  },
  {
    h2m: '',
    h2d: '',
    h3m: '',
    h3d: '',
    imgm: '',
    imgd: '',
    p1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    p2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br><br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    span1: '',
    span2: '',
    button1: '',
    button2: '',
    button3: '',
    button4: '',
  },
  {
    h2m: '',
    h2d: '',
    h3m: '',
    h3d: '',
    imgm: '',
    imgd: '',
    p1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    p2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br><br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    span1: '',
    span2: '',
    button1: '',
    button2: '',
    button3: '',
    button4: '',
  },
];

for (let i = 0; i < articlesgen.length; i++) {
  // Hacer algo con cada elemento aquí
  articlespop[i].h2m = articlesgen[i].querySelectorAll('h2')[0].textContent;
  articlespop[i].h2d = articlesgen[i].querySelectorAll('h2')[1].textContent;
  articlespop[i].h3m = articlesgen[i].querySelectorAll('h3')[0].textContent;
  articlespop[i].h3d = articlesgen[i].querySelectorAll('h3')[1].textContent;
  articlespop[i].imgm = articlesgen[i].querySelectorAll('img')[0].getAttribute('src');
  articlespop[i].imgd = articlesgen[i].querySelectorAll('img')[1].getAttribute('src');
  articlespop[i].span1 = articlesgen[i].querySelectorAll('span')[0].textContent;
  articlespop[i].span2 = articlesgen[i].querySelectorAll('span')[1].textContent;
  articlespop[i].button1 = articlesgen[i].querySelectorAll('button')[0].textContent;
  articlespop[i].button2 = articlesgen[i].querySelectorAll('button')[1].textContent;
  articlespop[i].button3 = articlesgen[i].querySelectorAll('button')[2].textContent;
  articlespop[i].button4 = articlesgen[i].querySelectorAll('button')[3].textContent;
}

articlespop.forEach((e) => {
  $template2.querySelectorAll('h2')[0].textContent = e.h2m;
  $template2.querySelectorAll('h2')[1].textContent = e.h2d;
  $template2.querySelectorAll('h3')[0].textContent = e.h3m;
  $template2.querySelectorAll('h3')[1].textContent = e.h3d;
  $template2.querySelectorAll('img')[1].setAttribute('src', e.imgm);
  $template2.querySelectorAll('img')[2].setAttribute('src', e.imgd);
  $template2.querySelectorAll('p')[0].innerHTML = e.p1;
  $template2.querySelectorAll('p')[1].innerHTML = e.p2;
  $template2.querySelectorAll('span')[0].textContent = e.span1;
  $template2.querySelectorAll('span')[1].textContent = e.span2;
  $template2.querySelectorAll('button')[0].textContent = e.button1;
  $template2.querySelectorAll('button')[1].textContent = e.button2;
  $template2.querySelectorAll('button')[2].textContent = e.button3;
  $template2.querySelectorAll('button')[3].textContent = e.button4;

  const $clone2 = document.importNode($template2, true);
  $fragment2.appendChild($clone2);
});

$cards2.appendChild($fragment2);
let popsgen = [];
popsgen = $cards2.getElementsByTagName('article');
let xicon = [];
xicon = $cards2.querySelectorAll('.closepu');

for (let i = 0; i < popsgen.length; i++) {
  popsgen[i].style.display = 'none';
}

for (let i = 0; i < setButtons.length; i++) {
  setButtons[i].addEventListener('click', () => {
    popsgen[i].style.display = 'grid';
    document.querySelector('.popscont').style.position = 'fixed';
    document.querySelector('.popscont').style.display = 'block';
  });
}

for (let i = 0; i < xicon.length; i++) {
  xicon[i].addEventListener('click', () => {
    popsgen[i].style.display = 'none';
    document.querySelector('.popscont').style.position = 'static';
    document.querySelector('.popscont').style.display = 'none';
  });
}

// ::::::::::::::::::::::Validation Form::::::::::::::::::::::::::::

const $name = document.getElementById('name');
const $email = document.getElementById('email');
const $message = document.getElementById('message');
$name.required = true;
$email.required = true;
$message.required = true;
$email.pattern = '^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\[\]\\.,;:\s@\"]+\.)+[^<>()\[\]\\.,;:\s@\"]{2,})$';
function validation() {
  if ($email.value === $email.value.toLowerCase()) {
    return true;
  }
  return false;
}

document.addEventListener('submit', (e) => {
  if (e.target.matches('form')) {
    if (validation()) {
      console.log('Form submitted successfully!');
    } else {
      e.preventDefault();
      alert('Please enter your email in lower case');
      $email.value = $email.value.toLowerCase();
    }
  }
});