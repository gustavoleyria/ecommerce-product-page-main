function changeImage(value){
    let picture = document.getElementById('imgprincipal')
    if(value === 1){
        picture.outerHTML = `<img src="./images/image-product-1.jpg" alt="" class="imgprincipal" id="imgprincipal">`
        changeStyleImg(value)
    }
    else if(value === 2){
        picture.outerHTML = `<img src="./images/image-product-2.jpg" alt="" class="imgprincipal" id="imgprincipal">`
        changeStyleImg(value)
    }
    else if(value === 3){
        picture.outerHTML = `<img src="./images/image-product-3.jpg" alt="" class="imgprincipal" id="imgprincipal">`
        changeStyleImg(value)
    }
    else if(value === 4){
        picture.outerHTML = `<img src="./images/image-product-4.jpg" alt="" class="imgprincipal" id="imgprincipal">`
        changeStyleImg(value)
    }
    console.log(value)
    console.log(pictureSmall1)
}


function changeImagelb(value){
    let picture = document.getElementById('imgprincipallb')
    if(value === 1){
        picture.outerHTML = `<img src="./images/image-product-1.jpg" alt="" value="1" class="imgprincipal" id="imgprincipallb">`
        changeStyleImglb(value)
    }
    else if(value === 2){
        picture.outerHTML = `<img src="./images/image-product-2.jpg" alt="" value="2" class="imgprincipal" id="imgprincipallb">`
        changeStyleImglb(value)
    }
    else if(value === 3){
        picture.outerHTML = `<img src="./images/image-product-3.jpg" alt="" value="3" class="imgprincipal" id="imgprincipallb">`
        changeStyleImglb(value)
    }
    else if(value === 4){
        picture.outerHTML = `<img src="./images/image-product-4.jpg" alt="" value="4" class="imgprincipal" id="imgprincipallb">`
        changeStyleImglb(value)
    }
    // console.log(value)
    // console.log(picture)
}

function changeImageMB(value){
    let picture = document.getElementById('imgprincipalMB')
    if(value === 1){
        picture.outerHTML = `<img src="./images/image-product-1.jpg" alt="" value="1" class="imgprincipal" id="imgprincipalMB">`
        // changeStyleImglb(value)
    }
    else if(value === 2){
        picture.outerHTML = `<img src="./images/image-product-2.jpg" alt="" value="2" class="imgprincipal" id="imgprincipalMB">`
        // changeStyleImglb(value)
    }
    else if(value === 3){
        picture.outerHTML = `<img src="./images/image-product-3.jpg" alt="" value="3" class="imgprincipal" id="imgprincipalMB">`
        // changeStyleImglb(value)
    }
    else if(value === 4){
        picture.outerHTML = `<img src="./images/image-product-4.jpg" alt="" value="4" class="imgprincipal" id="imgprincipalMB">`
        // changeStyleImglb(value)
    }
    //console.log(value)
    //console.log(picture)
}

function changeButonMB(value){
    let picture = document.getElementById('imgprincipalMB')
    let pictureword = picture.outerHTML
    console.log(picture.outerHTML)
    console.log(pictureword)
    if(value === 'next' && pictureword.includes('1')){
        changeImageMB(2)
    }
    if(value === 'next' && pictureword.includes('2')){
        changeImageMB(3)
    }
    if(value === 'next' && pictureword.includes('3')){
        changeImageMB(4)
    }
    if(value === 'next' && pictureword.includes('4')){
        changeImageMB(1)
    }
    if(value === 'prev' && pictureword.includes('1')){
        changeImageMB(4)
    }
    if(value === 'prev' && pictureword.includes('2')){
        changeImageMB(1)
    }
    if(value === 'prev' && pictureword.includes('3')){
        changeImageMB(2)
    }
    if(value === 'prev' && pictureword.includes('4')){
        changeImageMB(3)
    }

}

function changeButon(value){
    let picture = document.getElementById('imgprincipallb')
    let pictureword = picture.outerHTML
    // console.log(picture.outerHTML)
    // console.log(pictureword)
    if(value === 'next' && pictureword.includes('1')){
        changeImagelb(2)
    }
    if(value === 'next' && pictureword.includes('2')){
        changeImagelb(3)
    }
    if(value === 'next' && pictureword.includes('3')){
        changeImagelb(4)
    }
    if(value === 'next' && pictureword.includes('4')){
        changeImagelb(1)
    }
    if(value === 'prev' && pictureword.includes('1')){
        changeImagelb(4)
    }
    if(value === 'prev' && pictureword.includes('2')){
        changeImagelb(1)
    }
    if(value === 'prev' && pictureword.includes('3')){
        changeImagelb(2)
    }
    if(value === 'prev' && pictureword.includes('4')){
        changeImagelb(3)
    }

}

function changeStyleImglb(value){
    let pictureSmall1 = document.getElementById('imgsecond1lb')
    let pictureSmall2 = document.getElementById('imgsecond2lb')
    let pictureSmall3 = document.getElementById('imgsecond3lb')
    let pictureSmall4 = document.getElementById('imgsecond4lb')
    let arr = [pictureSmall1, pictureSmall2, pictureSmall3,pictureSmall4]
    for(let i = 0; i<arr.length; i++){
        // console.log(arr[i])
        if(i+1 === value){
            arr[i].style.borderColor= "hsl(26, 100%, 55%)"
            arr[i].style.borderStyle= "solid"
            arr[i].style.opacity= "0.60"
        }else{
            arr[i].style.borderColor= "none"
            arr[i].style.borderStyle= "none"
            arr[i].style.opacity= "1"
        }
    }
    
}

function changeStyleImg(value){
    let pictureSmall1 = document.getElementById('imgsecond1')
    let pictureSmall2 = document.getElementById('imgsecond2')
    let pictureSmall3 = document.getElementById('imgsecond3')
    let pictureSmall4 = document.getElementById('imgsecond4')
    let arr = [pictureSmall1, pictureSmall2, pictureSmall3,pictureSmall4]
    for(let i = 0; i<arr.length; i++){
        console.log(arr[i])
        if(i+1 === value){
            arr[i].style.borderColor= "hsl(26, 100%, 55%)"
            arr[i].style.borderStyle= "solid"
            arr[i].style.opacity= "0.60"
        }else{
            arr[i].style.borderColor= "none"
            arr[i].style.borderStyle= "none"
            arr[i].style.opacity= "1"
        }
    }
    
}

function itemsCart(signo){
    let text = document.getElementsByClassName('numberq')
    // console.log(text[0].textContent)
    let number = parseInt(text[0].textContent)
    // console.log(number)
    if(signo === "+"){
        number++
        text[0].textContent = number.toString()
    }else {
        if(number > 0){
        number--
        text[0].textContent = number.toString()
        }
    }
}

function itemsCartMB(signo){
    let text = document.getElementsByClassName('numberqmb')
    // console.log(text[0].textContent)
    let number = parseInt(text[0].textContent)
    // console.log(number)
    if(signo === "+"){
        number++
        text[0].textContent = number.toString()
    }else {
        if(number > 0){
        number--
        text[0].textContent = number.toString()
        }
    }
}

function addCartCircle(){
    let text = document.getElementsByClassName('numberq')
    let number = parseInt(text[0].textContent)
    let cartCircle = document.getElementsByClassName('circlenumber')
    let resume = document.getElementsByClassName('resume')
    let empty = document.getElementsByClassName('empty')
    let infoshop = document.getElementsByClassName('infoshop')
    // console.log(text[0].textContent)
    // console.log(number)
    // console.log(cartCircle[0].textContent)
    // console.log(cartCircle[0].style.display)
    // console.log(cartCircle[0].style.display)
    // console.log(cartCircle[0].textContent)
    // console.log(empty[0].style.display)
    // console.log(infoshop[0].style.display)   
    if(number > 0){
        cartCircle[0].textContent = number.toString()
        cartCircle[0].style.display = "block"
        resume[0].innerHTML = `<span class="text1">$125.00 x ${number}</span><span class="text2">$${parseFloat(number*125.00)}</span>`
        empty[0].style.display = 'none'
        infoshop[0].style.display = 'block'
    }
}

function addCartCircleMB(){
    let text = document.getElementsByClassName('numberqmb')
    let number = parseInt(text[0].textContent)
    let cartCircleMB = document.getElementsByClassName('circlenumberMB')
    let resumeMB = document.getElementsByClassName('resumeMB')
    let emptyMB = document.getElementsByClassName('emptyMB')
    let infoshopMB = document.getElementsByClassName('infoshopMB')
    // console.log(text[0].textContent)
    // console.log(number)
    // console.log(cartCircle[0].textContent)
    // console.log(cartCircle[0].style.display)
    // console.log(cartCircle[0].style.display)
    // console.log(cartCircle[0].textContent)
    // console.log(empty[0].style.display)
    // console.log(infoshop[0].style.display)   
    if(number > 0){
        cartCircleMB[0].textContent = number.toString()
        cartCircleMB[0].style.display = "block"
        resumeMB[0].innerHTML = `<span class="text1">$125.00 x ${number}</span><span class="text2">$${parseFloat(number*125.00)}</span>`
        emptyMB[0].style.display = 'none'
        infoshopMB[0].style.display = 'block'
    }
}

function resetCart(){
    let empty = document.getElementsByClassName('empty')
    let infoshop = document.getElementsByClassName('infoshop')
    let cartCircle = document.getElementsByClassName('circlenumber')
    empty[0].style.display = 'block'
    infoshop[0].style.display = 'none'
    cartCircle[0].style.display = "none"
}

function resetCartMB(){
    let empty = document.getElementsByClassName('emptyMB')
    let infoshop = document.getElementsByClassName('infoshopMB')
    let cartCircle = document.getElementsByClassName('circlenumberMB')
    empty[0].style.display = 'block'
    infoshop[0].style.display = 'none'
    cartCircle[0].style.display = "none"
}


let control = true
function showCar(){
    let precart = document.getElementsByClassName('precart')
    // console.log(precart[0].style.display)
    if(control){
        precart[0].style.display = "block" 
        control = false
    }else{
        precart[0].style.display = "none"
        control = true
    }
    
}

function showCarMB(){
    let precart = document.getElementsByClassName('precartMB')
    // console.log(precart[0].style.display)
    if(control){
        precart[0].style.display = "block" 
        control = false
    }else{
        precart[0].style.display = "none"
        control = true
    }
    
}


let lb = true
function closelb(){
    let group = document.getElementsByClassName('group')
    if(lb){
        group[0].style.display = 'block'
        lb = false
    }
    else if(lb === false){
        group[0].style.display = 'none'
        lb = true
    }
}


function displayMB(){
    let menu = document.getElementsByClassName('menuimgMB')
    let options = document.getElementsByClassName('optionsMBclose')
    //console.log(options[0].style.display)
    menu[0].style.display = 'none'
    options[0].style.display = 'block'
}

function displaymenuMB(){
    let menu = document.getElementsByClassName('menuimgMB')
    let options = document.getElementsByClassName('optionsMBclose')
    //console.log(options[0].style.display)
    menu[0].style.display = 'block'
    options[0].style.display = 'none'
}