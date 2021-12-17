const circle = document.querySelectorAll('.circle');

circle.forEach(item => {
    item.addEventListener('click', () => {
        if(item.style.background == 'aqua'){
            item.style.background = 'green';
            item.style.borderRadius = '0%';
        }else{
            item.style.background = 'aqua';
            item.style.borderRadius = '50%';
        }
    })
})
