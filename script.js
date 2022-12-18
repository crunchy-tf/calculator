btns = document.querySelectorAll('.button')
btnsArr = Array.from(btns)
btnsArr.splice(0,1) //remove AC
btnsArr.splice(15,1) //remove =

clearBtn = document.querySelector('#clear')

equalsBtn = document.querySelector('#equals')

str = ''
screen = document.querySelector('.screen')

btnsArr.forEach(element => {
    element.addEventListener('click',() => {
        if (element.innerText == '÷') {
            str+='/'
            screen.innerText += '÷'
        } else if (element.innerText == '×') {
            str+='*'
            screen.innerText += '×'
        } else if (element.innerText == 'Delete') {
            str = str.slice(0,-1)
            text = screen.innerText.slice(0,-1)
            screen.innerText = text
        } else {
            str+=element.innerText
            screen.innerText += element.innerText
        }
    })
});

clearBtn.addEventListener('click',() => {
    str = ''
    screen.innerText = ''
})

equalsBtn.addEventListener('click',() => {
    //I have used eval for this project FOR TESTING PURPOSES ONLY
    val = eval(str)
    str = val.toString()
    screen.innerText = str
})