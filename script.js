
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("open");
    var menuIcon = document.querySelector(".menu-icon");
    menuIcon.classList.toggle("open");
    }

    function chooseTimer(machineName) {
        // Prompt the user for input
        document.getElementById("overlay").style.display = "flex";
    
        // var timeInput = prompt("Enter washing time in minutes for " + machineName + ":");

        // Validate the input and perform necessary actions
        if (timeInput !== null && !isNaN(timeInput) && timeInput >= 1 && timeInput <= 9) {
            alert("Washing time set to " + timeInput + " minutes for " + machineName + ".");
            // Add your logic to handle the washing time here
        } else {
            alert("Invalid input. Please enter a number between 1 and 9.");
        }
    }
    function closePopup() {
document.getElementById("overlay").style.display = "none";
}

function submitForm() {
// Add your logic to handle form submission here
// For now, let's just close the popup
var time = parseInt(document.getElementById("name").value);
    console.log("Number:", time);
closePopup();
}