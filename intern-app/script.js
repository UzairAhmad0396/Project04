const dropdownMenu = document.querySelector('.dropdownMenu');
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownimg = document.querySelector('.v-img');
const dImg = document.querySelector('.dImg');
const firstItem = document.querySelector('.fixed-item');
const menuImg = document.querySelectorAll('.menuImg');


firstItem.addEventListener('click', (e) => {
    dropdownBtn.classList.add('fixed-item');
//   e.preventDefault();
});

dropdownBtn.addEventListener('click', () => {
    dropdownimg.src = dropdownimg.src.includes('assets/Vector2.png') ? 'assets/Vector.png' : 'assets/Vector2.png';
  dropdownMenu.classList.toggle('show');
menuImg.forEach(Image => {
    Image.addEventListener('click', ()=>{
        dImg.src = Image.src;
    })
});
});

// Languages dropdown

const Vectory = document.querySelector('.vectory');
const languageMenu = document.querySelector('.language-dropdown-menu');


const languages =document.querySelector('.language-dropdown-btn');

languages.addEventListener("click", () =>{
    Vectory.src = Vectory.src.includes('assets/Vector2.png') ? 'assets/Vector.png' : 'assets/Vector2.png';
  languageMenu.classList.toggle('show');

 

})