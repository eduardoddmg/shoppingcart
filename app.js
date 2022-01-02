const compra1 = document.querySelector('#compra1')
const compra2 = document.querySelector('#compra2')
const compra3 = document.querySelector('#compra3')  
const compra4 = document.querySelector('#compra4')
const compra5 = document.querySelector('#compra5')
const compra6 = document.querySelector('#compra6')
const compra7 = document.querySelector('#compra7')
const compra8 = document.querySelector('#compra8')
const compra9 = document.querySelector('#compra9')
const compra10 = document.querySelector('#compra10')
const compra11 = document.querySelector('#compra11')
const compra12 = document.querySelector('#compra12')
const compra13 = document.querySelector('#compra13')
const compra14 = document.querySelector('#compra14')
const compra15 = document.querySelector('#compra15')
const compra16 = document.querySelector('#compra16')
const compra17 = document.querySelector('#compra17')
const compra18 = document.querySelector('#compra18')
const compra19 = document.querySelector('#compra19')
const compra20 = document.querySelector('#compra20')

var conteudo_modal = document.querySelector('.conteudo-modal')

let contador_compra1 = 0;
let contador_compra2 = 0;
let contador_compra3 = 0;
let contador_compra4 = 0;
let contador_compra5 = 0;
let contador_compra6 = 0;
let contador_compra7 = 0;
let contador_compra8 = 0;
let contador_compra9 = 0;
let contador_compra10 = 0;
let contador_compra11 = 0;
let contador_compra12 = 0;
let contador_compra13 = 0;
let contador_compra14 = 0;
let contador_compra15 = 0;
let contador_compra16 = 0;
let contador_compra17 = 0;
let contador_compra18 = 0;
let contador_compra19 = 0;
let contador_compra20 = 0;

var nome_item1 = document.createElement('p')
nome_item1.classList.add('elemento1-text')

var nome_item2 = document.createElement('p')
nome_item2.classList.add('elemento-text')

var nome_item3 = document.createElement('p')
nome_item3.classList.add('elemento-text')

var nome_item4 = document.createElement('p')
nome_item4.classList.add('elemento-text')

var nome_item5 = document.createElement('p')
nome_item5.classList.add('elemento-text')

var nome_item6 = document.createElement('p')
nome_item6.classList.add('elemento-text')

var nome_item7 = document.createElement('p')
nome_item7.classList.add('elemento-text')

var nome_item8 = document.createElement('p')
nome_item8.classList.add('elemento-text')

var nome_item9 = document.createElement('p')
nome_item9.classList.add('elemento-text')

var nome_item10 = document.createElement('p')
nome_item10.classList.add('elemento-text')

var nome_item11 = document.createElement('p')
nome_item11.classList.add('elemento-text')

var nome_item12 = document.createElement('p')
nome_item12.classList.add('elemento-text')

var nome_item13 = document.createElement('p')
nome_item13.classList.add('elemento-text')

var nome_item14 = document.createElement('p')
nome_item14.classList.add('elemento-text')

var nome_item15 = document.createElement('p')
nome_item15.classList.add('elemento-text')

var nome_item16 = document.createElement('p')
nome_item16.classList.add('elemento-text')

var nome_item17 = document.createElement('p')
nome_item17.classList.add('elemento-text')

var nome_item18 = document.createElement('p')
nome_item18.classList.add('elemento-text')

var nome_item19 = document.createElement('p')
nome_item19.classList.add('elemento-text')

var nome_item20 = document.createElement('p')
nome_item20.classList.add('elemento-text')


let contador = 0

compra1.addEventListener('click', () =>
{
    contador_compra1++;
    contador++;
    contador1()
})
compra2.addEventListener('click', () =>
{
    contador_compra2++;
    contador++;
    contador2()
})
compra3.addEventListener('click', () =>
{
    contador_compra3++;
    contador++;
    contador3()
})
compra4.addEventListener('click', () =>
{
    contador_compra4++;
    contador++;
    contador4()
})
compra5.addEventListener('click', () =>
{
    contador_compra5++;
    contador++;
    contador5()
})
compra6.addEventListener('click', () =>
{
    contador_compra6++;
    contador++;
    contador6()
})
compra7.addEventListener('click', () =>
{
    contador_compra7++;
    contador++;
    contador7()
})
compra8.addEventListener('click', () =>
{
    contador_compra8++;
    contador++;
    contador8()
})
compra9.addEventListener('click', () =>
{
    contador_compra9++;
    contador++;
    contador9()
})
compra10.addEventListener('click', () =>
{
    contador_compra10++;
    contador++;
    contador10()
})
compra11.addEventListener('click', () =>
{
    contador_compra11++;
    contador++;
    contador11()
})
compra12.addEventListener('click', () =>
{
    contador_compra12++;
    contador++;
    contador12()
})
compra13.addEventListener('click', () =>
{
    contador_compra13++;
    contador++;
    contador13()
})
compra14.addEventListener('click', () =>
{
    contador_compra14++;
    contador++;
    contador14()
})
compra15.addEventListener('click', () =>
{
    contador_compra15++;
    contador++;
    contador15()
})
compra16.addEventListener('click', () =>
{
    contador_compra16++;
    contador++;
    contador16()
})
compra17.addEventListener('click', () =>
{
    contador_compra17++;
    contador++;
    contador17()
})
compra18.addEventListener('click', () =>
{
    contador_compra18++;
    contador++;
    contador18()
})
compra19.addEventListener('click', () =>
{
    contador_compra19++;
    contador++;
    contador19()
})
compra20.addEventListener('click', () =>
{
    contador_compra20++;
    contador++;
    contador20()
})


function contador1 ()
{
     if (contador == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item1')
        conteudo_modal.appendChild(div_cart_item)
        var img1 = document.createElement('img')
        img1.src = "img1.jpg"
        img1.classList.add('img')  
        div_cart_item.appendChild(img1)
        nome_item1.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item1)
    }
    else if (contador_compra1 == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item1')
        conteudo_modal.appendChild(div_cart_item)
        var img1 = document.createElement('img')
        img1.src = "img1.jpg"
        img1.classList.add('img')  
        div_cart_item.appendChild(img1)
        nome_item1.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item1)
    }
    if (contador_compra1 > 1)
    {
        nome_item1.innerHTML = "Qtd: " + contador_compra1 
        div_cart_item.appendChild(nome_item1)
    }
    div_cart_item.style.display = "block"
    
}

function contador2 ()
{
     if (contador == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item1')
        conteudo_modal.appendChild(div_cart_item)
        var img2 = document.createElement('img')
        img2.src = "img2.jpg"
        img2.classList.add('img')  
        div_cart_item.appendChild(img2)
        nome_item2.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item2)
    }
   
    else if (contador_compra2 == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item')
        conteudo_modal.appendChild(div_cart_item)
        var img2 = document.createElement('img')
        img2.src = "img2.jpg"
        img2.classList.add('img')  
        div_cart_item.appendChild(img2)
        nome_item2.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item2)
    }
    if (contador_compra2 > 1)
    {
        nome_item2.innerHTML = "Qtd: " + contador_compra2 
        div_cart_item.appendChild(nome_item2)
    }
    div_cart_item.style.display = "block"
    
}

function contador3 ()
{
     if (contador == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item1')
        conteudo_modal.appendChild(div_cart_item)
        var img3 = document.createElement('img')
        img3.src = "img3.jpg"
        img3.classList.add('img')  
        div_cart_item.appendChild(img3)
        nome_item3.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item3)
    }
    
    else if (contador_compra3 == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item')
        conteudo_modal.appendChild(div_cart_item)
        var img3 = document.createElement('img')
        img3.src = "img3.jpg"
        img3.classList.add('img')  
        div_cart_item.appendChild(img3)
        nome_item3.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item3)
    }
    else if (contador_compra3 > 1)
    {
        nome_item3.innerHTML = "Qtd: " + contador_compra3 
        div_cart_item.appendChild(nome_item3)
    }
    div_cart_item.style.display = "block"
    
}

function contador4 ()
{
     if (contador == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item1')
        conteudo_modal.appendChild(div_cart_item)
        var img4 = document.createElement('img')
        img4.src = "img4.jpg"
        img4.classList.add('img')  
        div_cart_item.appendChild(img4)
        nome_item4.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item4)
    }
    
    else if (contador_compra4 == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item')
        conteudo_modal.appendChild(div_cart_item)
        var img4 = document.createElement('img')
        img4.src = "img4.jpg"
        img4.classList.add('img')  
        div_cart_item.appendChild(img4)
        nome_item4.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item4)
    }
    else if (contador_compra4 > 1)
    {
        nome_item4.innerHTML = "Qtd: " + contador_compra4 
        div_cart_item.appendChild(nome_item4)
    }
    div_cart_item.style.display = "block"
    
}

function contador5 ()
{
     if (contador == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item1')
        conteudo_modal.appendChild(div_cart_item)
        var img5 = document.createElement('img')
        img5.src = "img5.jpg"
        img5.classList.add('img')  
        div_cart_item.appendChild(img5)
        nome_item5.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item5)
    }
    
    else if (contador_compra5 == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item')
        conteudo_modal.appendChild(div_cart_item)
        var img5 = document.createElement('img')
        img5.src = "img5.jpg"
        img5.classList.add('img')  
        div_cart_item.appendChild(img5)
        nome_item5.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item5)
    }
    else if (contador_compra5 > 1)
    {
        nome_item5.innerHTML = "Qtd: " + contador_compra5 
        div_cart_item.appendChild(nome_item5)
    }
    div_cart_item.style.display = "block"
    
}

function contador6 ()
{
     if (contador == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item1')
        conteudo_modal.appendChild(div_cart_item)
        var img6 = document.createElement('img')
        img6.src = "img6.jpg"
        img6.classList.add('img')  
        div_cart_item.appendChild(img6)
        nome_item6.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item6)
    }
    
    else if (contador_compra6 == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item')
        conteudo_modal.appendChild(div_cart_item)
        var img6 = document.createElement('img')
        img6.src = "img6.jpg"
        img6.classList.add('img')  
        div_cart_item.appendChild(img6)
        nome_item6.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item6)
    }
    else if (contador_compra6 > 1)
    {
        nome_item6.innerHTML = "Qtd: " + contador_compra6 
        div_cart_item.appendChild(nome_item6)
    }
    div_cart_item.style.display = "block"
    
}

function contador7 ()
{
     if (contador == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item1')
        conteudo_modal.appendChild(div_cart_item)
        var img7 = document.createElement('img')
        img7.src = "img7.jpg"
        img7.classList.add('img')  
        div_cart_item.appendChild(img7)
        nome_item7.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item7)
    }
    
    else if (contador_compra7 == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item')
        conteudo_modal.appendChild(div_cart_item)
        var img7 = document.createElement('img')
        img7.src = "img7.jpg"
        img7.classList.add('img')  
        div_cart_item.appendChild(img7)
        nome_item7.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item7)
    }
    else if (contador_compra7 > 1)
    {
        nome_item7.innerHTML = "Qtd: " + contador_compra7 
        div_cart_item.appendChild(nome_item7)
    }
    div_cart_item.style.display = "block"
    
}

function contador8 ()
{
     if (contador == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item1')
        conteudo_modal.appendChild(div_cart_item)
        var img8 = document.createElement('img')
        img8.src = "img8.jpg"
        img8.classList.add('img')  
        div_cart_item.appendChild(img8)
        nome_item8.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item8)
    }
    
    else if (contador_compra8 == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item')
        conteudo_modal.appendChild(div_cart_item)
        var img8 = document.createElement('img')
        img8.src = "img8.jpg"
        img8.classList.add('img')  
        div_cart_item.appendChild(img8)
        nome_item8.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item8)
    }
    else if (contador_compra8 > 1)
    {
        nome_item8.innerHTML = "Qtd: " + contador_compra8 
        div_cart_item.appendChild(nome_item8)
    }
    div_cart_item.style.display = "block"
    
}

function contador9 ()
{
     if (contador == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item1')
        conteudo_modal.appendChild(div_cart_item)
        var img9 = document.createElement('img')
        img9.src = "img9.jpg"
        img9.classList.add('img')  
        div_cart_item.appendChild(img9)
        nome_item9.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item9)
    }
    
    else if (contador_compra9 == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item')
        conteudo_modal.appendChild(div_cart_item)
        var img9 = document.createElement('img')
        img9.src = "img9.jpg"
        img9.classList.add('img')  
        div_cart_item.appendChild(img9)
        nome_item9.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item9)
    }
    else if (contador_compra9 > 1)
    {
        nome_item9.innerHTML = "Qtd: " + contador_compra9 
        div_cart_item.appendChild(nome_item9)
    }
    div_cart_item.style.display = "block"
    
}

function contador10 ()
{
     if (contador == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item1')
        conteudo_modal.appendChild(div_cart_item)
        var img10 = document.createElement('img')
        img10.src = "img10.jpg"
        img10.classList.add('img')  
        div_cart_item.appendChild(img10)
        nome_item10.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item10)
    }
    
    else if (contador_compra10 == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item')
        conteudo_modal.appendChild(div_cart_item)
        var img10 = document.createElement('img')
        img10.src = "img10.jpg"
        img10.classList.add('img')  
        div_cart_item.appendChild(img10)
        nome_item10.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item10)
    }
    else if (contador_compra10 > 1)
    {
        nome_item10.innerHTML = "Qtd: " + contador_compra10 
        div_cart_item.appendChild(nome_item10)
    }
    div_cart_item.style.display = "block"
    
}

function contador11 ()
{
     if (contador == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item1')
        conteudo_modal.appendChild(div_cart_item)
        var img11 = document.createElement('img')
        img11.src = "img11.jpg"
        img11.classList.add('img')  
        div_cart_item.appendChild(img11)
        nome_item11.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item11)
    }
    
    else if (contador_compra11 == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item')
        conteudo_modal.appendChild(div_cart_item)
        var img11 = document.createElement('img')
        img11.src = "img11.jpg"
        img11.classList.add('img')  
        div_cart_item.appendChild(img11)
        nome_item11.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item11)
    }
    else if (contador_compra11 > 1)
    {
        nome_item11.innerHTML = "Qtd: " + contador_compra11 
        div_cart_item.appendChild(nome_item11)
    }
    div_cart_item.style.display = "block"
    
}

function contador12 ()
{
     if (contador == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item1')
        conteudo_modal.appendChild(div_cart_item)
        var img12 = document.createElement('img')
        img12.src = "img12.jpg"
        img12.classList.add('img')  
        div_cart_item.appendChild(img12)
        nome_item12.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item12)
    }
    
    else if (contador_compra12 == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item')
        conteudo_modal.appendChild(div_cart_item)
        var img12 = document.createElement('img')
        img12.src = "img12.jpg"
        img12.classList.add('img')  
        div_cart_item.appendChild(img12)
        nome_item12.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item12)
    }
    else if (contador_compra12 > 1)
    {
        nome_item12.innerHTML = "Qtd: " + contador_compra12 
        div_cart_item.appendChild(nome_item12)
    }
    div_cart_item.style.display = "block"
    
}

function contador13 ()
{
     if (contador == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item1')
        conteudo_modal.appendChild(div_cart_item)
        var img13 = document.createElement('img')
        img13.src = "img13.jpg"
        img13.classList.add('img')  
        div_cart_item.appendChild(img13)
        nome_item13.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item13)
    }
    
    else if (contador_compra13 == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item')
        conteudo_modal.appendChild(div_cart_item)
        var img13 = document.createElement('img')
        img13.src = "img13.jpg"
        img13.classList.add('img')  
        div_cart_item.appendChild(img13)
        nome_item13.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item13)
    }
    else if (contador_compra13 > 1)
    {
        nome_item13.innerHTML = "Qtd: " + contador_compra13 
        div_cart_item.appendChild(nome_item13)
    }
    div_cart_item.style.display = "block"
    
}

function contador14 ()
{
     if (contador == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item1')
        conteudo_modal.appendChild(div_cart_item)
        var img14 = document.createElement('img')
        img14.src = "img14.jpg"
        img14.classList.add('img')  
        div_cart_item.appendChild(img14)
        nome_item14.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item14)
    }
    
    else if (contador_compra14 == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item')
        conteudo_modal.appendChild(div_cart_item)
        var img14 = document.createElement('img')
        img14.src = "img14.jpg"
        img14.classList.add('img')  
        div_cart_item.appendChild(img14)
        nome_item14.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item14)
    }
    else if (contador_compra14 > 1)
    {
        nome_item14.innerHTML = "Qtd: " + contador_compra14 
        div_cart_item.appendChild(nome_item14)
    }
    div_cart_item.style.display = "block"
    
}

function contador15 ()
{
     if (contador == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item1')
        conteudo_modal.appendChild(div_cart_item)
        var img15 = document.createElement('img')
        img15.src = "img15.jpg"
        img15.classList.add('img')  
        div_cart_item.appendChild(img15)
        nome_item15.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item15)
    }
    
    else if (contador_compra15 == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item')
        conteudo_modal.appendChild(div_cart_item)
        var img15 = document.createElement('img')
        img15.src = "img15.jpg"
        img15.classList.add('img')  
        div_cart_item.appendChild(img15)
        nome_item15.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item15)
    }
    else if (contador_compra15 > 1)
    {
        nome_item15.innerHTML = "Qtd: " + contador_compra15 
        div_cart_item.appendChild(nome_item15)
    }
    div_cart_item.style.display = "block"
    
}

function contador16 ()
{
     if (contador == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item1')
        conteudo_modal.appendChild(div_cart_item)
        var img16 = document.createElement('img')
        img16.src = "img16.jpg"
        img16.classList.add('img')  
        div_cart_item.appendChild(img16)
        nome_item16.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item16)
    }
    
    else if (contador_compra16 == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item')
        conteudo_modal.appendChild(div_cart_item)
        var img16 = document.createElement('img')
        img16.src = "img16.jpg"
        img16.classList.add('img')  
        div_cart_item.appendChild(img16)
        nome_item16.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item16)
    }
    else if (contador_compra16 > 1)
    {
        nome_item16.innerHTML = "Qtd: " + contador_compra16 
        div_cart_item.appendChild(nome_item16)
    }
    div_cart_item.style.display = "block"
    
}

function contador17 ()
{
     if (contador == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item1')
        conteudo_modal.appendChild(div_cart_item)
        var img17 = document.createElement('img')
        img17.src = "img17.jpg"
        img17.classList.add('img')  
        div_cart_item.appendChild(img17)
        nome_item17.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item17)
    }
    
    else if (contador_compra17 == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item')
        conteudo_modal.appendChild(div_cart_item)
        var img17 = document.createElement('img')
        img17.src = "img17.jpg"
        img17.classList.add('img')  
        div_cart_item.appendChild(img17)
        nome_item17.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item17)
    }
    else if (contador_compra17 > 1)
    {
        nome_item17.innerHTML = "Qtd: " + contador_compra17 
        div_cart_item.appendChild(nome_item17)
    }
    div_cart_item.style.display = "block"
    
}

function contador18 ()
{
     if (contador == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item1')
        conteudo_modal.appendChild(div_cart_item)
        var img18 = document.createElement('img')
        img18.src = "img18.jpg"
        img18.classList.add('img')  
        div_cart_item.appendChild(img18)
        nome_item18.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item18)
    }
    
    else if (contador_compra18 == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item')
        conteudo_modal.appendChild(div_cart_item)
        var img18 = document.createElement('img')
        img18.src = "img18.jpg"
        img18.classList.add('img')  
        div_cart_item.appendChild(img18)
        nome_item18.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item18)
    }
    else if (contador_compra18 > 1)
    {
        nome_item18.innerHTML = "Qtd: " + contador_compra18 
        div_cart_item.appendChild(nome_item18)
    }
    div_cart_item.style.display = "block"
    
}

function contador19 ()
{
     if (contador == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item1')
        conteudo_modal.appendChild(div_cart_item)
        var img19 = document.createElement('img')
        img19.src = "img19.jpg"
        img19.classList.add('img')  
        div_cart_item.appendChild(img19)
        nome_item19.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item19)
    }
    
    else if (contador_compra19 == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item')
        conteudo_modal.appendChild(div_cart_item)
        var img19 = document.createElement('img')
        img19.src = "img19.jpg"
        img19.classList.add('img')  
        div_cart_item.appendChild(img19)
        nome_item19.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item19)
    }
    else if (contador_compra19 > 1)
    {
        nome_item19.innerHTML = "Qtd: " + contador_compra19 
        div_cart_item.appendChild(nome_item19)
    }
    div_cart_item.style.display = "block"
    
}

function contador20 ()
{
     if (contador == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item1')
        conteudo_modal.appendChild(div_cart_item)
        var img20 = document.createElement('img')
        img20.src = "img20.jpg"
        img20.classList.add('img')  
        div_cart_item.appendChild(img20)
        nome_item20.innerText = "Qtd: 1"
        div_cart_item.appendChild(nome_item20)
    }
    
    else if (contador_compra20 == 1)
    {
        var div_cart_item = document.createElement('div')
        div_cart_item.classList.add('cart_item')
        conteudo_modal.appendChild(div_cart_item)
        var img20 = document.createElement('img')
        img20.src = "img20.jpg"
        img20.classList.add('img')  
        div_cart_item.appendChild(img20)
        nome_item20.innerText = "Qtd: 1 "
        div_cart_item.appendChild(nome_item20)
    }
    else if (contador_compra20 > 1)
    {
        nome_item20.innerHTML = "Qtd: " + contador_compra20 
        div_cart_item.appendChild(nome_item20)
    }
    div_cart_item.style.display = "block"
    
}


