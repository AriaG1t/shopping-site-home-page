let count = 0
let items = document.getElementsByClassName('myItem')
let leftBtn = document.getElementById('left')
let rightBtn = document.getElementById('right')

if(innerWidth < 768){
    for(let i = 0; i < items.length; i++){
        items[i].style.display = 'none'
    }
    items[count].style.display = 'block'
    leftBtn.style.display = 'none'
}
else{
    leftBtn.style.display = 'none'
    rightBtn.style.display = 'none'
}

window.addEventListener('resize',() => {
    if(innerWidth < 768){
       for(let i = 0; i < items.length; i++){
        items[i].style.display = 'none'
        }
        items[count].style.display = 'block'
        if(count === 0){
        leftBtn.style.display = 'none'
        }
        else{
            leftBtn.style.display = 'block'
        }
    }
    else{
        for(let i = 0; i < items.length; i++){
        items[i].style.display = 'block'
    }
        leftBtn.style.display = 'none'
        rightBtn.style.display = 'none'
    }
})

function right(){
    count++
    if(count === items.length - 1){
        rightBtn.style.display = 'none'
    }

    if(leftBtn.style.display === 'none'){
        leftBtn.style.display = 'block'
    }
    show()
    
}

function left(){
    count--
    if(count === 0){
        leftBtn.style.display = 'none'
    }

    if(rightBtn.style.display === 'none'){
        rightBtn.style.display = 'block'
    }
    
    show()
}

function show(){
    for(let x = count + 1; x < items.length; x++){
        items[x].style.display = 'none'
    }
    for(let y = count - 1; y >= 0; y--){
        items[y].style.display = 'none'
    }
    items[count].style.display = 'block'
}

leftBtn.addEventListener('click', left)
rightBtn.addEventListener('click', right)