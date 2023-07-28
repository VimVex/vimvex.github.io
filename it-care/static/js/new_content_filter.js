const allFilterItems = document.querySelectorAll('.card');
const allFilterBtns = document.querySelectorAll('.tabs__btn-item');

allFilterBtns.forEach((btn) =>{
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn){
    allFilterItems.forEach((item) => {
        if(item.classList.contains(btn.id)){
            resetActvieBtn();
            btn.classList.add('tabs__btn-item--active');
            item.style.display = "block";
        }
        else {
            item.style.display = "none";
        }
    });
}

function resetActvieBtn(){
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('tabs__btn-item--active');
    });
}