const tabButtons = document.querySelectorAll('.tabs__link');
const tabContents = document.querySelectorAll('.tab-content__item');

const openTabs = (evt) => {
  const targetButton = evt.currentTarget;
  const activeContentId = targetButton.dataset.work;

  tabContents.forEach((item) => {
    item.classList.toggle('tab-content__item--active', item.id === activeContentId);
  })

  tabButtons.forEach((button) => {
    button.classList.toggle('tabs__link--active', button === targetButton);
  })
}

tabButtons.forEach((button) => {
  button.addEventListener('click', openTabs);
});
