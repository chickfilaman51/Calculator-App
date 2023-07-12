const buttons = document.querySelectorAll(".button")
const number_buttons = document.querySelectorAll(".num");
const operator_buttons = document.querySelectorAll(".operator");
const clear_button = document.querySelector("#clear-button");
const decimal_button = document.querySelector(".decimal");
const delete_button = document.querySelector("#del-button");
const equal_button = document.querySelector("#equal-button");
const screen = document.querySelector(".screen-display");

function appendItem(num) {
    if ((screen.textContent.length + 1) > 19) {
        currentText = screen.textContent;
        screen.textContent = "Too Big!"

        for (let button of buttons) {
            button.disabled = true;
        }

        setTimeout(function() {
            screen.textContent = currentText;
            for (let button of buttons) {
                button.disabled = false;
            }
        }, 1000)

        

    } else {
        screen.textContent += num.id;
    }
}

function deleteItem() {
    screen.textContent = screen.textContent.slice(0,-1);
}

function clearScreen() {
    screen.textContent = "";
}

function evaluate() {
    if (String(eval(screen.textContent)).length > 19 && eval(screen.textContent) < 9999999999999999999) {
        screen.textContent = eval(screen.textContent).slice(0,19);
    } else if (eval(screen.textContent) > 9999999999999999999) {
        screen.textContent = eval(screen.textContent).toExponential();
    } else {
        screen.textContent = eval(screen.textContent);
    }
    
}


number_buttons.forEach(num => num.addEventListener("click",function() {appendItem(num); }));
operator_buttons.forEach(num => num.addEventListener("click",function() {appendItem(num); }));
decimal_button.addEventListener("click", function() {appendItem(decimal_button); });
delete_button.addEventListener("click", deleteItem);
clear_button.addEventListener("click", clearScreen);
equal_button.addEventListener("click", evaluate);
