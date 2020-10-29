// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!

const likeGlyphs = document.querySelectorAll('.like-glyph')
const modal = document.getElementById('modal')
const modalMessage = document.getElementById("modal-message")

for (let glyph of likeGlyphs) {
  glyph.addEventListener("click", function(e) {

    if (glyph.innerText === EMPTY_HEART) {
    mimicServerCall("http://localhost:3000/dogs")
      .then(function(object) {
       glyph.innerText = FULL_HEART
       glyph.classList.add('activated-heart')
      })
      .catch(function(error) {
        modal.classList.remove('hidden')
        modalMessage.innerText = error
        setTimeout(addHidden, 5000)
      })
      function addHidden() {
        modal.classList.add('hidden')
      }
    }
    else if (glyph.innerText === FULL_HEART) {
      glyph.innerText = EMPTY_HEART;
      glyph.classList.remove('activated-heart')
    }
  })
}






























//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
