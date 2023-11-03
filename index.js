// Handling menu hamburger
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
let isMenuOpen = false;

menuBtn.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    nav.classList.remove("nav-container--visible");
    menuBtn.classList.remove("menu--opened");
  } else {
    nav.classList.add("nav-container--visible");
    menuBtn.classList.add("menu--opened");
  }
});

// Search input type animation
const search = document.getElementById("search");
let placeholderId = 0;
let placeholder = "";
const speed = 200;
const entryPlaceholder = "Search for ";
const entryPlaceholderLength = entryPlaceholder.length;
const textsArray = ["posters", "designs", "albums"];
let placeholderFullLength;
let textId = 0;
let letterId = 0;

const addLetterToPlaceholder = () => {
  placeholder += textsArray[textId].charAt(letterId);
  search.setAttribute("placeholder", placeholder);
  letterId++;
  placeholderId++;

  if (letterId < textsArray[textId].length) {
    setTimeout(addLetterToPlaceholder, speed);
  } else {
    placeholderFullLength = placeholder.length;
    setTimeout(removeLetterFromPlaceholder, 1000);
    textId < textsArray.length - 1 ? textId++ : (textId = 0);
    letterId = 0;
  }
};

const removeLetterFromPlaceholder = () => {
  placeholder = placeholder.slice(0, -1);
  search.setAttribute("placeholder", placeholder);
  placeholderId--;

  if (placeholderId > entryPlaceholderLength) {
    setTimeout(removeLetterFromPlaceholder, speed);
  } else {
    setTimeout(addLetterToPlaceholder, speed);
  }
};

const addEntryLetterToPlaceholder = () => {
  placeholder += entryPlaceholder.charAt(placeholderId);
  search.setAttribute("placeholder", placeholder);
  placeholderId++;

  if (placeholderId < entryPlaceholder.length) {
    setTimeout(addEntryLetterToPlaceholder, speed);
  } else {
    addLetterToPlaceholder();
  }
};

addEntryLetterToPlaceholder();

// Hide search input on scroll
const searchWrapper = document.querySelector(".search-wrapper");
const navContainer = document.querySelector(".nav-container");

window.addEventListener("scroll", (e) => {
  if (this.scrollY > 100) {
    searchWrapper.classList.add("hidden");
    navContainer.classList.add("scrolled");
  } else {
    searchWrapper.classList.remove("hidden");
    navContainer.classList.remove("scrolled");
  }
});
