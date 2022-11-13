let welcomeEl = document.getElementById('welcome-el')
let cName = document.querySelector('.c-name')
let cHeading = document.querySelector('.heading')
let cTitle = document.querySelector('.c-title')
let cCompletion = document.querySelector('.c-completion')

userName = 'Benjamin'
welcomeEl.innerText = userName + '🤞'

let courseInfo = {
    courseName: 'The Frontend Developer Career Path',
    courseHeading: 'Module 2: HTML & CSS basics',
    courseTitle: 'Creating heading',
    courseCompletion: 47
}

function course(){
    cName.textContent = courseInfo.courseName
    cHeading.textContent = courseInfo.courseHeading
    cTitle.textContent = courseInfo.courseTitle
    cCompletion.textContent = courseInfo.courseCompletion + '%  of course completed'
}

course()
