let arrowTopLeft = document.getElementById("arrow-top-left");
let arrowDownLeft = document.getElementById("arrow-down-left");
let arrowLeftLeft = document.getElementById("arrow-left-left");
let arrowRightLeft = document.getElementById("arrow-right-left");
let upDownNumberElmLeft = document.getElementById("up-down-number-left");
let upDownNumberLeft = upDownNumberElmLeft.innerText;
let leftRightNumberElmLeft = document.getElementById("left-right-number-left");
let leftRightNumberLeft = leftRightNumberElmLeft.innerText;
let arrowTopRight = document.getElementById("arrow-top-right");
let arrowDownRight = document.getElementById("arrow-down-right");
let arrowLeftRight = document.getElementById("arrow-left-right");
let arrowRightRight = document.getElementById("arrow-right-right");
let upDownNumberElmRight = document.getElementById("up-down-number-right");
let upDownNumberRight = upDownNumberElmRight.innerText;
let leftRightNumberElmRight = document.getElementById("left-right-number-right");
let leftRightNumberRight = leftRightNumberElmRight.innerText;
let btnsElm = document.querySelectorAll(".btn");
let comfortOptionsElm = document.querySelectorAll(".comfort-option");
let toggleShowElm = document.getElementById("toggle-show");
let toggleShowValue = toggleShowElm.innerText;
let chairAreasElm = document.querySelectorAll(".chair-area");
console.log(chairAreasElm);

//Get temperature
let temp_value = 1;
let temperatureElm = document.getElementById("temperature-number");


arrowTopLeft.onclick = function() {
    if(upDownNumberLeft < 10) {
        upDownNumberLeft++;
        upDownNumberElmLeft.innerText = upDownNumberLeft;
    }
}
arrowDownLeft.onclick = function() {
    if(upDownNumberLeft > 1) {
        upDownNumberLeft--;
        upDownNumberElmLeft.innerText = upDownNumberLeft;
    }
}
arrowLeftLeft.onclick = function() {
    if(leftRightNumberLeft > 1) {
        leftRightNumberLeft--;
        leftRightNumberElmLeft.innerText = leftRightNumberLeft;
    }
}
arrowRightLeft.onclick = function() {
    leftRightNumberLeft++;
    leftRightNumberElmLeft.innerText = leftRightNumberLeft;
}

arrowTopRight.onclick = function() {
    if(upDownNumberRight < 10) {
        upDownNumberRight++;
        upDownNumberElmRight.innerText = upDownNumberRight;
    }
}
arrowDownRight.onclick = function() {
    if(upDownNumberRight > 1) {
        upDownNumberRight--;
        upDownNumberElmRight.innerText = upDownNumberRight;
    }
}
arrowLeftRight.onclick = function() {
    if(leftRightNumberRight > 1) {
        leftRightNumberRight--;
        leftRightNumberElmRight.innerText = leftRightNumberRight;
    }
}
arrowRightRight.onclick = function() {
    leftRightNumberRight++;
    leftRightNumberElmRight.innerText = leftRightNumberRight;
}

for(let i = 0; i < btnsElm.length; i++) {
    btnsElm[i].addEventListener("click", function() {
        for(let j = 0; j < btnsElm.length; j++) {
            if(btnsElm[j].classList.contains("active")) {
                btnsElm[j].classList.remove("active");
            }
        }
        toggleShowValue = i;
        toggleShowElm.innerText = toggleShowValue;
        btnsElm[i].classList.add("active");
        toggleShow();
    })
}

for(let i = 0; i < comfortOptionsElm.length; i++) {
    comfortOptionsElm[i].addEventListener("click", function() {
        for(let j = 0; j < comfortOptionsElm.length; j++) {
            if(comfortOptionsElm[j].classList.contains("active")) {
                comfortOptionsElm[j].classList.remove("active");
            }
        }
        comfortOptionsElm[i].classList.add("active");
    })
}

const toggleShow = function() {
    for(let i = 0; i < chairAreasElm.length; i++) {
        if(i === parseInt(toggleShowValue)) {
            console.log("Equal at: ", i)
            chairAreasElm[i].classList.remove("hidden");
        }else {
            chairAreasElm[i].classList.add("hidden");
        }
    }
}

toggleShow();


function onWidgetLoaded(options) {
    console.log("on my widget loaded");
    let API_TEMP = "Vehicle.Cabin.HVAC.Station.Row1.Left.Temperature";
    if (options.temp_value != undefined) {
        temp_value = options.temp_value;
    }
    let apiInterval = setInterval(() => {
        let temp_api = getApiValue(API_TEMP);
        if (temp_api) {
          temp_value = temp_api.value;
        }
    }, 10);
}

temperatureElm.innerHTML = temp_value + '&#176';

function onWidgetUnloaded(options) {
    console.log("On my widget unloaded");
}






