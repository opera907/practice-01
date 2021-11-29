const nav = document.querySelector('.nav > ul')
const li = document.querySelectorAll('.nav > ul li')
const main = document.querySelector('main')
const descLength = document.querySelector('.descLength')
const textInput = document.querySelector('.description')

nav.addEventListener('click', showContents)
textInput.addEventListener('keyup', setDescLength)


function showContents(e) {
    const target = e.target
    if(target.nodeName == "LI") {
        //move li on class
        li.forEach(ele => {
            ele.classList.remove('on')
            if(ele === target) ele.classList.add('on')
        })
        //show contents
        const className = target.classList[0]
        main.className = className
        //main.classList.add(className)
    }
}

function setDescLength(e) {
    let length = e.target.value.length
    descLength.textContent = `${length}/20`
}

function init() {
    // #1 data.js의 my_info데이터의 정보를 넣어줌
    document.querySelector('#myInfoId').textContent = my_info.id
    document.querySelector('#myInfoUserName').textContent = my_info.user_name
    document.querySelector('#sp-intro').textContent = my_info.introduction
    document.querySelector(`input[type = radio][value=${my_info.as}]`).checked = true
    my_info.interest.forEach(interest => {
        document.querySelector(`input[type=checkbox][value=${interest}]`).checked = true
    })
}