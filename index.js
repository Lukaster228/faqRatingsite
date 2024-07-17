const bcEl1 = document.getElementById("bc-el1");
const bcEl2 = document.getElementById("bc-el2");
const bcEl3 = document.getElementById("bc-el3");
const bcEl4 = document.getElementById("bc-el4");

const ulEl1 = document.getElementById("ul-el1");
const ulEl2 = document.getElementById("ul-el2");
const ulEl3 = document.getElementById("ul-el3");
const ulEl4 = document.getElementById("ul-el4");

let btnEl1 = document.getElementById("btn-el1");
let btnEl2 = document.getElementById("btn-el2");
let btnEl3 = document.getElementById("btn-el3");
let btnEl4 = document.getElementById("btn-el4");

let btn1IsActive = false;
let btn2IsActive = false;
let btn3IsActive = false;
let btn4IsActive = false;

bcEl1.addEventListener("click", function() {
    if (btn1IsActive === false) {
        btnEl1.style.backgroundImage = "url('images/icon-minus.svg')";
        ulEl1.innerHTML = `<li>We provide front-end challenges that include professional web designs.
                               These allow you to practice building websites in a realistic workflow. 
                               Taking these challenges will help you improve your skills, gain experience creating websites, and build up an incredible project portfolio. 
                               We also have a large community of developers, so it's a great way to meet other devs!</li>`;
        btn1IsActive = true;
    } else {
        btnEl1.style.backgroundImage = "url('images/icon-plus.svg')"
        ulEl1.innerHTML = '';
        btn1IsActive = false;
    }
});

bcEl2.addEventListener("click", function() {
    if (btn2IsActive === false) {
        btnEl2.style.backgroundImage = "url('images/icon-minus.svg')";
        ulEl2.innerHTML = `<li>The majority of our challenges are free, yes. 
                               We do have some that are premium and require a Pro subscription to access. 
                               It will say on each challenge whether they are free or premium, so it's easy to tell the difference.</li>`;
        btn2IsActive = true;
    } else {
        btnEl2.style.backgroundImage = "url('images/icon-plus.svg')"
        ulEl2.innerHTML = '';
        btn2IsActive = false;
    }
});

bcEl3.addEventListener("click", function() {
    if (btn3IsActive === false) {
        btnEl3.style.backgroundImage = "url('images/icon-minus.svg')";
        ulEl3.innerHTML = `<li>Definitely! Please do feel free to use whatever you build in your portfolio. 
                               Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!</li>`;
        btn3IsActive = true;
    } else {
        btnEl3.style.backgroundImage = "url('images/icon-plus.svg')"
        ulEl3.innerHTML = '';
        btn3IsActive = false;
    }
});

bcEl4.addEventListener("click", function() {
    if (btn4IsActive === false) {
        btnEl4.style.backgroundImage = "url('images/icon-minus.svg')";
        ulEl4.innerHTML = `<li>The best (and quickest) way to get help on a challenge is in our Discord server. 
                               There are thousands of other developers in there, so it's a great place to ask questions. 
                               We even have a dedicated "help" channel! If you haven't joined yet, you can get an invite to our Discord server here.</li>`;
        btn4IsActive = true;
    } else {
        btnEl4.style.backgroundImage = "url('images/icon-plus.svg')"
        ulEl4.innerHTML = '';
        btn4IsActive = false;
    }
});
