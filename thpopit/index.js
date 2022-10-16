AOS.init();
const elem = document.getElementsByClassName("elem");
const tabs = document.getElementsByClassName("tabcon");
function activate(item) {
  for (tablst of elem) {
    tablst.classList.remove("active");
  }
  for (tab of tabs) {
    tab.classList.remove("activecon");
  }
  document.getElementById(item).classList.add("activecon");
  event.currentTarget.classList.add("active");
}



// detect scrolling nav

setTimeout(function() {
  const sections = document.querySelectorAll('section');
  const navA = document.querySelectorAll('nav a');
  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navA.forEach(a => {
      a.classList.remove('active');
      if (a.classList.contains(current)) {
        a.classList.add('active')
      }
    })

  });
}, 1200);




// say hi cookie!!


function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Hello Mr." + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      alert("Hello Mr." + user);
      setCookie("username", user, 30);
    } else {
      alert("Your name must not be blank!!");
      checkCookie();
    }
    
  }
}

// backtotop

// Get the button:
let mybutton = document.getElementById("backtoTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//hehhehe
let clck = 0;
let pics = document.getElementById("img");
pics.onclick=aclick;
function aclick(){
  clck+=1;
  if (clck==3){
    clck=0;
    pics.setAttribute("src","../assets/images/rickroll-roll.gif");
    setTimeout(function(){pics.setAttribute("src", "../assets/images/r1ck.png");}, 6000);
  }
}
