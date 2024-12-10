let body = document.querySelector("body");
let Highlight = document.querySelector("h2");
let resetButton = document.querySelector("button");

function ball1() {
    let ball1 = document.querySelector(".ball1");

    body.style.backgroundColor = "#fbe9e7";
    Highlight.style.color = "#291c0e";
    resetButton.style.backgroundColor = "#fbe9e7";
    resetButton.style.boxShadow = "20px 20px 60px #d5c6c4, -20px -20px 60px #ffffff";
}

function ball2() {
    let ball2 = document.querySelector(".ball2");

    body.style.backgroundColor = "#8d1638";
    Highlight.style.color = "#b39ddb";
    resetButton.style.backgroundColor = "#8d1638";
    resetButton.style.boxShadow = "20px 20px 60px #781330, -20px -20px 60px #a21940";
    resetButton.style.Color = "#ffffff";
}

function ball3() {
    let ball3 = document.querySelector(".ball3");

    body.style.backgroundColor = "#83c5be";
    Highlight.style.color = "#805d93";
}

function ball4() {
    let ball4 = document.querySelector(".ball4");

    body.style.backgroundColor = "#6b9071";
    Highlight.style.color = "#e3eed4";
}

function ColorReset() {
    body.style.backgroundColor = "var(--color_black)";
    Highlight.style.color = "var(--color_white)";
}


