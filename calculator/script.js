let numbers = document.querySelectorAll(".num");
let display = document.querySelector("#display");
let operators = document.querySelectorAll(".operator");
let equalto = document.getElementById("equal");
let de = document.getElementById("remove1");
let clear = document.getElementById("clear");
let res = document.getElementById("result");

numbers.forEach(number => {
    number.addEventListener("click", numClick);
});

function numClick(e) {
    display.value += e.currentTarget.value;
    enableOperators();
    resUpdate();
}

operators.forEach(operator => {
    operator.addEventListener("click", opClick);
});

function opClick(e) {
    display.value += e.currentTarget.value;
    resUpdate();
}

de.addEventListener("click", function () {
    display.value = display.value.toString().slice(0, -1);
    resUpdate();
});

equalto.addEventListener("click", function () {
    display.value = eval(display.value);
    resUpdate();
});

clear.addEventListener("click", function () {
    display.value = "";
    disableOperators();
    resUpdate();
});

function resUpdate() {
    if (
        event.currentTarget !== equalto &&
        event.currentTarget !== clear &&
        event.currentTarget !== de
    ) {
        res.style.display = "block";
        res.innerText = eval(display.value);
    } else {
        res.style.display = "none";
    }
}

disableOperators();

display.addEventListener("input", function () {
    if (display.value === "") {
        disableOperators();
    } else {
        enableOperators();
    }
});

function disableOperators() {
    equalto.disabled = true;
    de.disabled = true;
    clear.disabled = true;
    operators.forEach(operator => {
        operator.disabled = true;
    });
}

function enableOperators() {
    equalto.disabled = false;
    de.disabled = false;
    clear.disabled = false;
    operators.forEach(operator => {
        operator.disabled = false;
    });
}