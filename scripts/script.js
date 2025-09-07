const hobbyItems = document.querySelectorAll('.profile-card-hobbies li');
const body = document.body;
const video = document.getElementById('bgVideo');

const hobbyBackgrounds = {
  "🏔️ Reizen": "assets/20231023_134005.mp4",
  "🎮 Gaming": "assets/eldenring.mp4",
  "🏋️ Sporten": "assets/strong-tough.gif",
  "🥋 Kung Fu": "assets/kungfu.mp4"
};

// klik-event
hobbyItems.forEach(item => {
  item.addEventListener('click', () => {
    const hobbyText = item.textContent.trim();
    const src = hobbyBackgrounds[hobbyText];

    if (!src) return;

    if (src.endsWith(".mp4")) {
      // video tonen
      video.src = src;
      video.style.display = "block";
      body.style.backgroundImage = ""; // reset image
    } else {
      // gif/afbeelding tonen
      body.style.backgroundImage = `url('${src}')`;
      video.style.display = "none"; // video verbergen
    }
  });
});

// reset knop op profielfoto
const profileImg = document.querySelector('.profile-card-example-img');
profileImg.addEventListener('click', () => {
  video.style.display = "none";
  body.style.backgroundImage = ""; // reset naar CSS default
});
