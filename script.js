let indicatorOne = document.getElementById('1')
let indicatorTwo = document.getElementById('2')
let indicatorThree = document.getElementById('3')

indicatorOne.onclick = () => {
    activeAnimation('slide1')
    indicatorOpacity(indicatorOne)
    showImage('slide1')
}

indicatorTwo.onclick = () => {
    activeAnimation('slide2')
    indicatorOpacity(indicatorTwo)
    showImage('slide2')
}

indicatorThree.onclick = () => {
    activeAnimation('slide3')
    indicatorOpacity(indicatorThree)
    showImage('slide3')
}

function clickButtons() {
    var number = 2

    setInterval(() => { 
        document.getElementById(`${number}`).click()

        if (number === 3) {
            number = 1
        } else {
            number++
        }
    }, 10000)
}

function showImage(type) {
    let slide = document.getElementById(type)
    let elementWithShowClass = document.getElementsByClassName('show')[0]

    elementWithShowClass.classList.remove('show')

    slide.classList.add('show')
}

function indicatorOpacity(indicator) {
    let indicatorWithHightOpacity = document.getElementsByClassName('high-opacity')[0]
    indicatorWithHightOpacity.classList.remove('high-opacity')
    indicatorWithHightOpacity.classList.add('low-opacity')

    indicator.classList.remove('low-opacity')
    indicator.classList.add('high-opacity')
    
}

function activeAnimation(type) {
    let slide = document.getElementById(type)

    let activeSlide = document.getElementsByClassName('active')[0]
    activeSlide.classList.remove('active') 

    setTimeout(() => {
        slide.classList.add('active');
    }, 10);
}


function fullfillOption(type){
    document.querySelector('#volunteer-informations select#options').value = type
}

function goTo(url) {
    window.location.href = url
}