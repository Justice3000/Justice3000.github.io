
checkStorage();


let secret = document.getElementById('secret');
  secret.addEventListener('click', secretF);
upBtn = document.getElementById("upBtn");


window.onscroll = function() {
  scrollFunction();
  scrollbar();

}
// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
}



function scrollbar(){
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("indicator").style.width = scrolled + "%";
}





  function secretF(){
  let audio = new Audio('oth/drone4.mp3');
  audio.play();

  
  document.body.style.backdropFilter = 'blur(0px) grayscale(0%)';
  
  let card = document.getElementsByClassName('card-img');
  for (let i = 0, max = card.length; i < max; i++){
    card[i].style.opacity = "0.8"; 
    card[i].style.filter = "invert(100%)"; 
  }

    let cardText = document.getElementsByClassName('card-text');
    for (let i = 0, max = cardText.length; i < max; i++){
      cardText[i].style.filter = "blur(0px)";}

      let Addition = document.getElementsByClassName('card-text')[0];
      Addition.innerHTML = ('I am here to tell you that you did find the secret!');
      
      localStorage.clear();
      localStorage.setItem('DaniSecret',"found");
      
}


function bypass(){
  let audio = new Audio('oth/drone4.mp3');
  audio.play();
  document.body.style.backdropFilter = 'blur(0px) grayscale(0%)';
  let card = document.getElementsByClassName('card-img');
  for (let i = 0, max = card.length; i < max; i++){
    card[i].style.opacity = "0.8"; 
    card[i].style.filter = "invert(100%)"; 
  }

    let cardText = document.getElementsByClassName('card-text');
    for (let i = 0, max = cardText.length; i < max; i++){
      cardText[i].style.filter = "blur(0px)";}

      let Addition = document.getElementsByClassName('card-text')[0];
      Addition.innerHTML = ('You skipped the secret');

      let skip = document.getElementById('skipSecret');
      skip.parentNode.removeChild(skip);
      localStorage.setItem('DaniSecret',"skipped");
}



function checkStorage(){
  if (localStorage.getItem('DaniSecret') == "skipped"){
    let Addition = document.getElementsByClassName('card-text')[0];
    Addition.innerHTML = ('You skipped the secret');

    let skip = document.getElementById('skipSecret');
    skip.parentNode.removeChild(skip);
    
  } else if (localStorage.getItem('DaniSecret') == "found"){
    let skip = document.getElementById('skipSecret');
    skip.parentNode.removeChild(skip);
    let Addition = document.getElementsByClassName('card-text')[0];
    Addition.innerHTML = 'But the interweb names me as Justice3000. ';

  }
}


// When the user clicks on the button, scroll to the top of the document
function goUp() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




