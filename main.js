function openTabs(evt, tabName) {
  const tabContent = document.getElementsByClassName('tab-content');
  for (let i = 0; i < tabContent.length; i++) {
  tabContent[i].style.display = 'none';
  }

  const tabLinks = document.querySelectorAll('.tablinks');
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = 'flex';
  evt.currentTarget.className += ' active';
}



const hamburger = document.querySelector('.nav__hamburger--btn');
const menu = document.querySelector('.nav__menu--mobile');
const closeMenu = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
  menu.style.transform = 'translateX(0%)';
});

closeMenu.addEventListener('click', () => {
  menu.style.transform = 'translateX(100%)';
})


let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);