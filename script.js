
var tablinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active");
    }
    for(tablink of tabContents){
        tablink.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active-tab")
}

var sideMenu = document.getElementById("sidemenu");

function openmenu(){
    sideMenu.style.right = "0";
}
function closemenu(){
    sideMenu.style.right = "-200px";
}


const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});


  window.addEventListener("load",()=>{
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transition", ()=> {
      document.body.removeChild("loader");
    })
  })



  var typed = new Typed('#element', {
    strings: ['MS Office Expert.','Web Developer.','UI Designer.','Video Editer.'],
    typeSpeed: 100,
  });