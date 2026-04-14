const display = document.getElementById("display");



function appendToDisplay(input) {
    const display = document.getElementById("display");
    display.value += input;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

function calculate() {
    const display = document.getElementById("display");
    if (display && display.value !== "") {
         try {
        display.value = eval(display.value);
     } catch (error) {
        display.value = "Error";
      }
    }
}