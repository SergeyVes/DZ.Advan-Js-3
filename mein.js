document.addEventListener('DOMContentLoaded', function () {
    const productInputElem = document.querySelector('.input-product');
    const reviewInputElem = document.querySelector('.input-review');
    const buttonElem = document.querySelector('.add-review');
    const errorElem = document.querySelector('.error');
    
    buttonElem.addEventListener('click', function () {
        const product = productInputElem.value;
        const review = reviewInputElem.value;
        console.log(product);
        console.log(review);
        
        if(product !== '' && review !== '') {
            let reviews = JSON.parse(localStorage.getItem(product));
            if (reviews === null) {
                reviews = [];
            }
            reviews.push(review);
            localStorage.setItem(product, JSON.stringify(reviews));
        } else {
            errorElem.textContent = 'Заполните все поля!';
        }
    });
});