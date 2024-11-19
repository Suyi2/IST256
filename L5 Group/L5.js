// Functions to reset each input field
function resetButton1() {
    const input = document.getElementById('deliverables');
    input.value = "";
}

function resetButton2() {
    const input = document.getElementById('deliverables2');
    input.value = "";
}

function resetButton3() {
    const input = document.getElementById('deliverables3');
    input.value = "";
}

// Functions to apply each input field's data
function applyButton1() {
    const input = document.getElementById('deliverables').value;
    if (input) {
        alert(`Game: ${input}`);
    } else {
        alert("Please enter a game.");
    }
}

function applyButton2() {
    const input = document.getElementById('deliverables2').value;
    if (input) {
        alert(`Creator: ${input}`);
    } else {
        alert("Please enter a creator.");
    }
}

function applyButton3() {
    const input = document.getElementById('deliverables3').value;
    if (input) {
        alert(`Year: ${input}`);
    } else {
        alert("Please enter a year.");
    }
}

