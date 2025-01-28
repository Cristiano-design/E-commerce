const storeList = document.getElementById('store-list');
const scrollLeft = document.getElementById('scroll-left');
const scrollRight = document.getElementById('scroll-right');

scrollLeft.addEventListener('click', () => {
    storeList.scrollBy({ left: -100, behavior: 'smooth' });
});

scrollRight.addEventListener('click', () => {
    storeList.scrollBy({ left: 100, behavior: 'smooth' });
});
