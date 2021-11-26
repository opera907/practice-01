const nav = document.querySelector('.nav > ul')
const li = document.querySelectorAll('.nav > ul li')
const main = document.querySelector('main')

nav.addEventListener('click', showContents)


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
        main.className = ""
        main.classList.add(className)
    }
}