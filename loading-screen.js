const loadingText = document.getElementById('loading-text')
const overlay = document.querySelector('#load-bg')

window.addEventListener('load', function () {
  overlay.style.display = 'none'
})
let dots = '';

function updateLoadingText() {
  loadingText.textContent = `Loading${dots}`;
  dots += '.';
  if (dots.length > 3) {
    dots = '';
  }
}

setInterval(updateLoadingText, 500); // Update every 500 milliseconds
