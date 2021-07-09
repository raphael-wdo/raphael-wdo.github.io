// Back To Top Button
backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// If the user is in view of an element, we will add another class, so that we can apply CSS animation
function callbackFunc(entries, observer)
{
  entries.forEach(entry => {
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
  });
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

let observer = new IntersectionObserver(callbackFunc, options);

observer.observe(document.getElementById('notice'));
observer.observe(document.getElementById('abt1'));
observer.observe(document.getElementById('abt2'));
observer.observe(document.getElementById('abt3'));
observer.observe(document.getElementById('abt4'));

for (let i = 1; i < 5; i++) {
  let about = "abt" + i;
  let social = "scl" + i;
  observer.observe(document.getElementById(about));
  observer.observe(document.getElementById(social));
}

for (let i = 1; i < 15; i++) {
  let skill = "skl" + i;
  observer.observe(document.getElementById(skill));
}

for (let i = 1; i < 18; i++) {
  let project = "prj" + i;
  observer.observe(document.getElementById(project));
}