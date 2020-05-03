/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// navigation Bar global variable 
const navBar = document.getElementById('navbar__list');

// sections will contain NodeList of all sections present in document
const sections = document.querySelectorAll('section');

// it will contain NodeList of all nav bar links 
const sectionLinks = document.querySelectorAll('.navbar__menu a');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavBar() {
    //  navBarCode defines the innerHTML that should be inserted inside navBar
    // initially it is empty assuming zero sections 
    let navBarCode = '';

    // now we will traverse to each section and will include it in navBar
    sections.forEach(section => {
        // for referencing section in navBar, we need section.id which will be included
        // in anchor tag
        const sectionId = section.id;

        // for showing section number in navBar,we need section.dataset.nav
        const sectionDataNav = section.dataset.nav;

        // instead of appending each section in navBar one by one, we are concatenating
        // the code and will append to navBar only once to improve performance
        navBarCode += `<li><a class="menu__link" href="#${sectionId}">${sectionDataNav}</a></li>`;
    });

    // adding navBarCode to navBar.innerHTML
    navBar.innerHTML = navBarCode;
}

buildNavBar();



// Add class 'active' to section when near top of viewport

// function to calculate top offset of an section
const offset = (section) => {
    return section.getBoundingClientRect().top;
};

// function to add your-active-class in classList of an section
const addActiveClass = (section) => {
    section.classList.add('your-active-class');
}

// function to remove your-active-class from classList of an section
const removeActiveClass = (section) => {
    section.classList.remove('your-active-class');
}

// adding event listener, whenever users scrolls the window
window.addEventListener('scroll', function () {
    sections.forEach(section => {

        // calculate offset of that particular section
        const sectionOffset = offset(section);

        // first remove your-active-class from classList of section
        removeActiveClass(section);

        // check condition whether this section is in view or not
        if (sectionOffset < 200 && sectionOffset >= -300) {

            // if this section is in view then add your-active-class in classList of this section
            addActiveClass(section);
        }
    });
});


// Scroll to anchor ID using scrollTO event
const scrollAnchorId = () => {
    sectionLinks.forEach(sectionLink => {
        sectionLink.addEventListener('click', () => {
            sections.forEach(section => {
                section.addEventListener('click', sectionScroll(sectionLink));
            });
        });
    });
}

scrollAnchorId();


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

