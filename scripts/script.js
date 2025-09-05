// Alle hobby <li> elementen selecteren
const hobbyItems = document.querySelectorAll('.profile-card-hobbies li');

// Het body-element pakken
const body = document.body;


const originalBackground = "url('../assets/20231023_133133.jpg')";


const hobbyGifs = {
  "🏔️ Reizen": "assets/20231023_134005(1).gif",
  "🎮 Gaming": "assets/215619.gif",
  "🏋️ Sporten": "assets/strong-tough.gif",
  "🥋 Kung Fu": "assets/KB6Kioh.gif"
};

// Klik-event voor elke hobby
hobbyItems.forEach(item => {
  item.addEventListener('click', () => {
    const hobbyText = item.textContent.trim();
    const gifSrc = hobbyGifs[hobbyText];
    if (gifSrc) {
      body.style.backgroundImage = `url('${gifSrc}')`;
      body.style.backgroundSize = 'cover';
      body.style.backgroundPosition = 'center';
    }
  });
});

// Profielfoto selecteren
const profileImg = document.querySelector('.profile-card-example-img');

// Klik-event om te resetten naar originele achtergrond
profileImg.addEventListener('click', () => {
  body.style.backgroundImage = originalBackground;
  body.style.backgroundSize = 'cover';
  body.style.backgroundPosition = 'center';
});
