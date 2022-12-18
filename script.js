//make string (include DELETE)
//evaluate string with = 
//reset with AC
//active display on screen (add at the end to every function)

btns = document.querySelectorAll('.button')
btnsArr = Array.from(btns)
btnsArr.splice(0,1) //remove AC
btnsArr.splice(15,1) //remove =

clearBtn = document.querySelector('#clear')

equalsBtn = document.querySelector('#equals')

str = ''

btnsArr.forEach(element => {
    element.addEventListener('click',() => {
        if (element.innerText == '÷') {
            str+='/'
        } else if (element.innerText == 'x') {
            str+='*'
        } else if (element.innerText == 'Delete') {
            str = str.slice(0,-1)
        } else {
            str+=element.innerText
        }
        console.log(str)
    })
});