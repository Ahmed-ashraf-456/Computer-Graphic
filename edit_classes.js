let circle = document.querySelector('.circle')
let one = document.querySelector('.one')
let second = document.querySelector('.second')
let third = document.querySelector('.third')
let forth = document.querySelector('.forth')
let transformButton = document.querySelector('.transformButton')
let rotatingButton = document.querySelector('.rotatingButton')
let up = document.querySelector('.up')
let left = document.querySelector('.left')
let rotate = document.querySelector('.rotate')
let scalingButton = document.querySelector('.scalingButton')
let scaleX = document.querySelector('.scaleX')
let scaleY = document.querySelector('.scaleY')

let circleTop = parseInt(getComputedStyle(circle).getPropertyValue('top'));
let circleLeft = parseInt(getComputedStyle(circle).getPropertyValue('left'));
let oneTop = parseInt(getComputedStyle(one).getPropertyValue('top'));
let oneLeft = parseInt(getComputedStyle(one).getPropertyValue('left'));
let secondTop = parseInt(getComputedStyle(second).getPropertyValue('top'));
let secondLeft = parseInt(getComputedStyle(second).getPropertyValue('left'));
let thirdTop = parseInt(getComputedStyle(third).getPropertyValue('top'));
let thirdLeft = parseInt(getComputedStyle(third).getPropertyValue('left'));
let forthTop = parseInt(getComputedStyle(forth).getPropertyValue('top'));
let forthLeft = parseInt(getComputedStyle(forth).getPropertyValue('left'));

let rotation = 0;

rotatingButton.onclick = function () {
    rotation = (rotation + +rotate.value) % 360
    circle.style.transform = `rotate(${rotation}deg)`
    circle.style.transform += `scale(${+scaleX.value},${+scaleY.value})`
    one.style.transform = `rotate(${rotation - circle.style.transform}deg)`
    console.log(one.style.transform)
    one.style.transform += `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
    second.style.transform = `rotate(${rotation - circle.style.transform}deg)`
    second.style.transform += `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
    third.style.transform = `rotate(${rotation - circle.style.transform}deg)`
    third.style.transform += `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
    forth.style.transform = `rotate(${rotation - circle.style.transform}deg)`
    forth.style.transform += `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
    if (+scaleX.value <= 0 && +scaleY.value <= 0) {
        circle.style.transform = `scale(1,1)`
        circle.style.transform += `rotate(${rotation}deg)`
        one.style.transform = `scale(1,1)`
        one.style.transform += `rotate(${rotation - circle.style.transform}deg)`
        second.style.transform = `scale(1,1})`
        second.style.transform += `rotate(${rotation - circle.style.transform}deg)`
        third.style.transform = `scale(1,1)`
        third.style.transform += `rotate(${rotation - circle.style.transform}deg)`
        forth.style.transform = `scale(1,1)`
        forth.style.transform += `rotate(${rotation - circle.style.transform}deg)`



    }
    else if (+scaleX.value > 0 && +scaleY.value <= 0) {

        circle.style.transform = `rotate(${rotation}deg)`
        circle.style.transform += `scale(${+scaleX.value},1)`
        one.style.transform = `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
        one.style.transform += `rotate(${rotation - circle.style.transform}deg)`
        second.style.transform = `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
        second.style.transform += `rotate(${rotation - circle.style.transform}deg)`
        third.style.transform = `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
        third.style.transform += `rotate(${rotation - circle.style.transform}deg)`
        forth.style.transform = `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
        forth.style.transform += `rotate(${rotation - circle.style.transform}deg)`

    }
    else if (+scaleX.value <= 0 && +scaleY.value > 0) {
        circle.style.transform = `rotate(${rotation}deg)`
        circle.style.transform += `scale(1,${+scaleY.value})`
        one.style.transform = `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
        one.style.transform += `rotate(${rotation - circle.style.transform}deg)`
        second.style.transform = `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
        second.style.transform += `rotate(${rotation - circle.style.transform}deg)`
        third.style.transform = `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
        third.style.transform += `rotate(${rotation - circle.style.transform}deg)`
        forth.style.transform = `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
        forth.style.transform += `rotate(${rotation - circle.style.transform}deg)`

    }
}

scaleX.value = 1
scaleY.value = 1
scalingButton.onclick = function () {
    circle.style.transform = `scale(${+scaleX.value},${+scaleY.value})`
    circle.style.transform += `rotate(${rotation}deg)`
    one.style.transform = `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
    one.style.transform += `rotate(${rotation - circle.style.transform}deg)`
    second.style.transform = `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
    second.style.transform += `rotate(${rotation - circle.style.transform}deg)`
    third.style.transform = `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
    third.style.transform += `rotate(${rotation - circle.style.transform}deg)`
    forth.style.transform = `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
    forth.style.transform += `rotate(${rotation - circle.style.transform}deg)`

    if (+scaleX.value <= 0 && +scaleY.value <= 0) {
        circle.style.transform = `scale(1,1)`
        circle.style.transform += `rotate(${rotation}deg)`
        one.style.transform = `scale(1,1)`
        one.style.transform += `rotate(${rotation - circle.style.transform}deg)`
        second.style.transform = `scale(1,1})`
        second.style.transform += `rotate(${rotation - circle.style.transform}deg)`
        third.style.transform = `scale(1,1)`
        third.style.transform += `rotate(${rotation - circle.style.transform}deg)`
        forth.style.transform = `scale(1,1)`
        forth.style.transform += `rotate(${rotation - circle.style.transform}deg)`
        alert("value of scale in x and y direction is 1 as defult becouse you enter invalid value")

    }
    else if (+scaleX.value > 0 && +scaleY.value <= 0) {
        circle.style.transform = `rotate(${rotation}deg)`
        circle.style.transform += `scale(${+scaleX.value},1)`
        one.style.transform = `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
        one.style.transform += `rotate(${rotation - circle.style.transform}deg)`
        second.style.transform = `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
        second.style.transform += `rotate(${rotation - circle.style.transform}deg)`
        third.style.transform = `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
        third.style.transform += `rotate(${rotation - circle.style.transform}deg)`
        forth.style.transform = `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
        forth.style.transform += `rotate(${rotation - circle.style.transform}deg)`
        alert("value of scale in y direction is 1 as defult becouse you enter invalid value")

    }
    else if (+scaleX.value <= 0 && +scaleY.value > 0) {
        circle.style.transform = `rotate(${rotation}deg)`
        circle.style.transform += `scale(1,${+scaleY.value})`
        one.style.transform = `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
        one.style.transform += `rotate(${rotation - circle.style.transform}deg)`
        second.style.transform = `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
        second.style.transform += `rotate(${rotation - circle.style.transform}deg)`
        third.style.transform = `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
        third.style.transform += `rotate(${rotation - circle.style.transform}deg)`
        forth.style.transform = `scale(${+scaleX.value - circle.style.transform},${+scaleY.value - circle.style.transform})`
        forth.style.transform += `rotate(${rotation - circle.style.transform}deg)`
         alert("value of scale in x direction is 1 as defult becouse you enter invalid value")

    }
}

function upOne() {
    oneTop -= +up.value
}

function leftOne() {
    oneLeft -= +left.value
}
function upSecond() {
    secondTop -= +up.value
}

function leftSecond() {
    secondLeft -= +left.value
}
function upThird() {
    thirdTop -= +up.value
}

function leftThird() {
    thirdLeft -= +left.value
}
function leftForth() {
    forthLeft -= +left.value
}
function upForth() {
    forthTop -= +up.value
}

function upCircle() {
    circleTop -= +up.value
}

function leftCircle() {
    circleLeft -= +left.value
}

transformButton.onclick = function () {
    upCircle()
    leftCircle()
    upForth()
    leftForth()
    upThird()
    leftThird()
    upSecond()
    leftSecond()
    upOne()
    leftOne()
    circle.style.top = circleTop + 'px'
    circle.style.left = circleLeft + 'px'
    forth.style.top = forthTop - circleTop + 'px'
    forth.style.left = forthLeft - circleLeft + 'px'
    third.style.top = thirdTop - circleTop + 'px'
    third.style.left = thirdLeft - circleLeft + 'px'
    second.style.top = secondTop - circleTop + 'px'
    second.style.left = secondLeft - circleLeft + 'px'
    one.style.top = oneTop - circleTop + 'px'
    one.style.left = oneLeft - circleLeft + 'px'
}