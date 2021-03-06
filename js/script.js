const nav = document.querySelector('.nav > ul')
const li = document.querySelectorAll('.nav > ul li')
const main = document.querySelector('main')
const descLength = document.querySelector('.descLength')
const textInput = document.querySelector('.description')

nav.addEventListener('click', showContents)
textInput.addEventListener('keyup', setDescLength)


function showContents(e) {
    const target = e.target
    if (target.nodeName == "LI") {
        //move li on class
        li.forEach(ele => {
            ele.classList.remove('on')
            if (ele === target) ele.classList.add('on')
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
    showMyInfo()
}

function showMyInfo() {
    // #1 data.js의 my_info데이터의 정보를 넣어줌
    document.querySelector('#myInfoId').textContent = my_info.id
    document.querySelector('#myInfoUserName').textContent = my_info.user_name
    document.querySelector('#sp-intro').textContent = my_info.introduction
    document.querySelector('#ip-intro').value = my_info.introduction
    console.dir(document.querySelector(`#myinfo input[type = radio][value=${my_info.as}]`))
    document.querySelector(`#myinfo input[type = radio][value=${my_info.as}]`).checked = true
    //#1-1 취소버튼 누를 때, 눌려있는 chk정보를 리셋
    document.querySelectorAll(`input[type=checkbox]`).forEach(chk => {
        chk.checked = false
    })
    //#1-2 무조건 my_info의 데이터를 참고해서 값을 체크해줌
    my_info.interest.forEach(interest => {
        document.querySelector(`input[type=checkbox][value=${interest}]`).checked = true
    })
}

//내 정보 
//수정버튼 클릭 시
function setEditMyInfo(on) {
    document.querySelector('#myinfo > div').className = on ? 'edit' : 'non-edit'
    //라디오랑 체크박스 disable없애기
    document.querySelectorAll('#myinfo input').forEach(input => {
        input.disabled = !on
    })
    showMyInfo()
}

function updateMyInfo() {
    //확인 누르면, input에 입력된 val를 다시 삽입해줌.
    my_info.introduction = document.querySelector('#ip-intro').value
    my_info.as = document.querySelector(`input[type = radio]:checked`).value
    const interests = []
    document.querySelectorAll(`#myinfo input[type=checkbox]:checked`).forEach(chk => {
        interests.push(chk.value)
    })
    my_info.interest = interests
    setEditMyInfo(false)
    showMyInfo()
}