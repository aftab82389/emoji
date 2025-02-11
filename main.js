const buttons=document.querySelector('.buttons');
function surprise(){
    const surprise=document.querySelector('.surprise');
    surprise.style.display="none";
    buttons.style.display="flex";
}
function move(){
    const no=document.querySelector('#no');
    x=Math.random()*0.8*window.innerWidth;
    y=Math.random()*0.8*window.innerHeight;
    no.style.left=x+'px';
    no.style.top=y+'px';
}
function responsetext(){
    const responce_text=document.querySelector('.responce_text');
    responce_text.innerHTML="Yah! I Know";
    buttons.style.display="none";
}