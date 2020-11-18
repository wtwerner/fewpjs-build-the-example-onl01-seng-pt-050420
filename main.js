// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.querySelector('#modal');
const likes = document.querySelectorAll(".like");

modal.className = "hidden";

likes.forEach(function(like) {
  like.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.innerHTML === EMPTY_HEART || e.target.innerHTML === FULL_HEART) {
      mimicServerCall()
        .then(function() {
          toggleHeart(e)
        })
        .catch(err => toggleError(err))
    }
  })
})

function toggleError(err) {
  modal.classList.remove("hidden");
  modal.innerHTML = err.message;
  setTimeout(function() {
    modal.classList.add("hidden");
  }, 4000);
};

function toggleHeart(e) {
  if (e.target.innerHTML === FULL_HEART) {
    e.target.innerHTML = EMPTY_HEART;
    e.target.classList.remove("activated-heart");
  } else {
    e.target.innerHTML = FULL_HEART;
    e.target.classList.add("activated-heart");
  }
};


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
