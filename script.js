const startBtn = document.getElementById('start-btn');
const overlay = document.getElementById('intro-overlay');
const video = document.getElementById('my-video');

startBtn.addEventListener('click', () => {
  // 1. Play the video (browser allows this because of the click event)
  video.play().catch(error => {
    console.log("Playback failed unexpectedly: ", error);
  });

  // 2. Fade out the overlay
  overlay.style.opacity = '0';
  
  // 3. Remove overlay from DOM after fade completes so users can interact with the video/site
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 500);
});
