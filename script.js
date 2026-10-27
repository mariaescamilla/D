
function showScreen(screenId) {
  const screens = document.querySelectorAll('.screen');

  screens.forEach((screen) => {
    screen.classList.remove('active');
  });

  const nextScreen = document.getElementById(screenId);

  if (nextScreen) {
    nextScreen.classList.add('active');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
