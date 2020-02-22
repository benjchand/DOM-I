const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


const navText = [`Services`, `Products`, `Vision`, `Features`, `About`, `Contact`]
const navAnchors = document.querySelectorAll(`a`);
navAnchors.forEach((element, index) => {
  element.textContent = navText[index]
})

const newNavLink = document.createElement(`a`);
newNavLink.textContent = `New Link`;
newNavLink.style.color = 'blue'
document.querySelector(`nav`).append(newNavLink)

const newestNavAnchor = document.createElement('a');
newestNavAnchor.textContent = 'Newest Link';
newestNavAnchor.style.color = 'red';
document.querySelector('nav').prepend(newestNavAnchor);

let ctaText = document.querySelector('h1');
ctaText.innerHTML = "DOM <br> Is <br> Awesome";

let buttonText = document.querySelector('button');
buttonText.textContent = 'Get Started';

const ctaImage = document.getElementById(`cta-img`)
ctaImage.setAttribute(`src`, `img/header-img.png`)

const mainContentHeaderList = ['Features', 'About', 'Services', 'Product', 'Vision'];
const mainContentHeaders = document.querySelectorAll(`h4`);
mainContentHeaders.forEach((element, index) => {
  element.textContent = mainContentHeaderList[index]
  element.style.padding = `30px, 0`
});

const paragraphContent = document.querySelectorAll('p');
paragraphContent[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraphContent[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', 'img/mid-page-accent.jpg');
middleImg.setAttribute('src', 'img/mid-page-accent.jpg');


paragraphContent[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraphContent[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraphContent[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

paragraphContent[5].innerHTML = "123 Way 456 Street <br> Somewhere, USA";

paragraphContent[6].textContent = "1 (888) 888-8888";

paragraphContent[7].textContent = "sales@greatidea.io";

paragraphContent[8].textContent = "Copyright Great Idea! 2018"








