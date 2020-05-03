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
const navBar = document.querySelector('.navbar__menu');

// sections will contain NodeList of all sections present in document
const sections = document.querySelectorAll('section');


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
    // building <ui></ui> element in which list will be inserted
    const newUL = document.createElement('ul');

    // setting id of <ul></ul> element 
    newUL.setAttribute("id", "navbar__list");

    // now we will traverse to each section and will include it in newUL
    sections.forEach(section => {
        // created new element with <li></li> tag
        const newList = document.createElement('li');

        const sectionId = section.id;

        // created new element with anchor tag
        const newAnchorTag = document.createElement('a');

        // for showing section number in navBar,we need section.dataset.nav
        const sectionDataNav = section.dataset.nav;

        // inserting innerHTML in anchor tag
        newAnchorTag.innerHTML = `${sectionDataNav}`;

        // setting class of anchor tag
        newAnchorTag.setAttribute("class", `menu__link`);
        newAnchorTag.setAttribute("id", `${sectionDataNav}`);

        // appending newAnchorTag to newList
        newList.appendChild(newAnchorTag);

        // appending newList to newUL
        newUL.appendChild(newList);

    });

    // finally after insering all section list in newUL, 
    // appending newUL to navBar
    navBar.appendChild(newUL);
}

buildNavBar();

// it will contain NodeList of all nav bar links 
const sectionLinks = document.querySelectorAll('.navbar__menu a');


// Add class 'active' to section when near top of viewport

// function to calculate top offset of an section
const offset = (section) => {
    return section.getBoundingClientRect().top;
};

// function to add your-active-class in classList of an section
const addActiveClass = (section) => {
    section.classList.add('your-active-class');

    const sectionDataNav = section.dataset.nav;

    const navBarSectionLink = document.getElementById(sectionDataNav);
    navBarSectionLink.classList.add('buttonDisplay');

}

// function to remove your-active-class from classList of an section
const removeActiveClass = (section) => {
    section.classList.remove('your-active-class');
    const sectionDataNav = section.dataset.nav;

    const navBarSectionLink = document.getElementById(sectionDataNav);
    navBarSectionLink.classList.remove('buttonDisplay');
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

        // adding click event listener for each nav bar list
        sectionLink.addEventListener('click', () => {

            // navigating to each section and checking whether this section anchor 
            // tag has been called or not
            sections.forEach(section => {

                const sectionDataNav = section.dataset.nav;
                const idAttribute = sectionLink.getAttribute("id");

                if (sectionDataNav == idAttribute) {
                    // if its matches then go to that section
                    section.scrollIntoView();
                }
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

