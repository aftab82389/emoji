const sur_btn = document.querySelector('.button');
const surprise = document.querySelector('.surprise');

function Surprise() {
  surprise.style.display = "block";
  sur_btn.style.display = "none";
}
sur_btn.addEventListener('click', () => {
  Surprise();
  heartfalling();
})
const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const response_text = document.querySelector('.responsetext');
yes.addEventListener('click', () => {
  response_text.innerHTML = 'Yah!,I love you too!😘';
  surprise.style.display = "none";
})

function move() {
  x = window.innerWidth * Math.random() * 0.8;
  y = window.innerHeight * Math.random() * 0.8
  no.style.position = 'absolute';
  no.style.left = x + 'px';
  no.style.top = y + 'px';
  console.log(Math.random() * 470)
}

function heartfalling() {

  for (let i = 1; i < 55; i++) {
    let heart = document.createElement('div');
    heart.innerHTML = "❤️";
    heart.className = "heart_falling"
    heart.style.left = (Math.random() * window.innerWidth * .95) + 'px';
    heart.style.animationDuration=Math.random()*6+6 +'s';
    document.body.appendChild(heart);
  }
}
