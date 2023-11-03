document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]')

    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        if (scrollPosition < heroHeight) {
            hideHeader();
        } else {
            showHeader();
        }
    })

    
    // Shows section, tabs coding
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const targetTab = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
            hideTabs();
            tab.classList.add('shows__list--is-active');
            removeBtnFocus();
            button.target.classList.add('shows__tabs__button--is-active');
            
        })
    }

    // FAQ Section, Accordion
        for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openAndCloseAnswers)
    }
})

function hideHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function openAndCloseAnswers(element) {
    const cssClass = 'faq__questions__item--is-open';
    const parentElement = element.target.parentNode;

    parentElement.classList.toggle(cssClass);
} 

function removeBtnFocus() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}