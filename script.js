let arrowTop = document.getElementById("arrow-top");
let arrowDown = document.getElementById("arrow-down");
let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");
let upDownNumberElm = document.getElementById("up-down-number");
let upDownNumber = upDownNumberElm.innerText;
let leftRightNumberElm = document.getElementById("left-right-number");
let leftRightNumber = leftRightNumberElm.innerText;
let btnsElm = document.querySelectorAll(".btn");
let comfortOptionsElm = document.querySelectorAll(".comfort-option");
let toggleShowElm = document.getElementById("toggle-show");
let toggleShowValue = toggleShowElm.innerText;
let chairAreasElm = document.querySelectorAll(".chair-area");
console.log(chairAreasElm);

//Get temperature
let temp_value = 1;
let temperatureElm = document.getElementById("temperature-number");


arrowTop.onclick = function() {
    if(upDownNumber < 10) {
        upDownNumber++;
        upDownNumberElm.innerText = upDownNumber;
    }
}
arrowDown.onclick = function() {
    if(upDownNumber > 1) {
        upDownNumber--;
        upDownNumberElm.innerText = upDownNumber;
    }
}
arrowLeft.onclick = function() {
    if(leftRightNumber > 1) {
        leftRightNumber--;
        leftRightNumberElm.innerText = leftRightNumber;
    }
}
arrowRight.onclick = function() {
    leftRightNumber++;
    leftRightNumberElm.innerText = leftRightNumber;
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






