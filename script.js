const popup = document.querySelector('.pop-up');
const pict = document.querySelector('.pictures');
const body = document.querySelector('body');
const container1 = document.querySelector('.left-container');
const container2 = document.querySelector('.right-container');
const cross = document.querySelector('.cross');



// =============== big picture ===========

    pict.addEventListener('click', ()=>{
    popup.style.display = 'block';
    body.style.backgroundColor = 'rgba(96, 94, 94, 0.8)';
    container1.style.opacity = '0.3';
    container2.style.opacity = '0.3';
})

    const back = document.querySelector('#back');
    const next = document.querySelector('#next');
    const slides = document.querySelector('.slides');
    const minifoto = ['images/image-product-1-thumbnail.jpg','images/image-product-2-thumbnail.jpg', 'images/image-product-3-thumbnail.jpg','images/image-product-4-thumbnail.jpg'];
    const foto = ['images/image-product-1.jpg','images/image-product-2.jpg', 'images/image-product-3.jpg','images/image-product-4.jpg'];
        
    let i=0;
    next.addEventListener('click', ()=>{
        i++;
        if (i > foto.length-1){
            i=0;
        }
        document.querySelector('#pictures').src = foto[i];
    }
)
back.addEventListener('click', ()=>{
        i--;
        if (i<0){
            i=foto.length-1;
        }
        document.querySelector('#pictures').src = foto[i];
    }
)

cross.addEventListener('click', ()=>{
    popup.style.display = 'none';
    body.style.backgroundColor = 'transparent';
    container1.style.opacity = '1';
    container2.style.opacity = '1';

})



/* ============ counter ============== */
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.min');
const inp = document.querySelector('.inp');

let count = 0;

plusBtn.addEventListener('click', ()=>{
    count++;
    inp.innerHTML = count;
    if (count !== 0){
    document.querySelector('.kolvo').style.display='block';
    document.querySelector('.kolvo').textContent = count;
    }
})

minusBtn.addEventListener('click', ()=>{
    if (count>0) {
        count--;
        inp.innerHTML = count;
        document.querySelector('.kolvo').style.display='block';
        document.querySelector('.kolvo').textContent = count;
    }
    else if(count <= 0){
        document.querySelector('.kolvo').style.display='none';
        inp.innerHTML = 0;
    }
})

// ========== add to cart =========
const cart = document.querySelector('.cart');
const cartEmpty = document.querySelector('.alert-alt');
const cartFull = document.querySelector('.alert');
const addToCart = document.querySelector('.adding');

addToCart.addEventListener('click', carts);
cart.addEventListener('click', carts);
function carts() {
    if (count === 0){
    cartEmpty.style.display = 'block';

    }
    else {
        calculate();
        cartFull.style.display = 'block';
    }
}
// ============  price ===========
function calculate(){

    let kols = count;
    document.querySelector('#count').textContent = kols;
    let price = kols* 125.00;
    price = price.toFixed(2);
    document.querySelector('#check').textContent = price;
     
 }
 
    
// ============  delete cart ========
const del = document.querySelector('.del');
del.addEventListener('click', ()=>{
    cartFull.style.display = 'none';
    document.querySelector('.kolvo').textContent = '0';

})
cartEmpty.addEventListener('click', ()=>{
    cartEmpty.style.display = 'none';

})