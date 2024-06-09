function scrollToDiv(divId) {
    const element = document.getElementById(divId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log(`Element with id ${divId} not found`);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    
    const prices_button = document.querySelector('#prices-btn');
    prices_button.addEventListener('click', () => {
        scrollToDiv("price-grid")
    })
    
    const contact_button = document.querySelector('#contact-btn');
    contact_button.addEventListener('click', () => {
        scrollToDiv("outro")
    })
});
