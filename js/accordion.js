const accordion = document.querySelector(".faq__list");
const accordionTitles = accordion.querySelectorAll(".faq__question");

accordionTitles.forEach((title) => {
  title.addEventListener('click', () => {
    const clickedItem = title.parentElement;
    const clickedContent = clickedItem.querySelector('.faq__answer');
    clickedItem.classList.toggle('faq__item--open');

    const isOpen = clickedItem.classList.contains('faq__item--open');
    clickedContent.style.maxHeight = isOpen ? clickedContent.scrollHeight + "px" : null;
  })
});