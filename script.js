
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("open");
    var menuIcon = document.querySelector(".menu-icon");
    menuIcon.classList.toggle("open");
    }

    /*
    function chooseTimer(machineName, machinecode) {
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
    */
//     function closePopup() {
// document.getElementById("overlay").style.display = "none";
// }

// function submitForm(machineCode) {
//     // Get the washing time from the form
//     var time = parseInt(document.getElementById("name").value);

//     // Validate the input
//     if (!isNaN(time) && time >= 1 && time <= 75) {
//       console.log("Washing time for " + machineCode + ": " + time + " minutes");
//       // Add your logic to handle the washing time here

//       // Close the popup
//       closePopup();
//     } else {
//       alert("Invalid input. Please enter a number between 1 and 75.");
//     }
//   }

// function chooseTimer(machineName, machineCode) {
//     // Prompt the user for input
//     document.getElementById("overlay").style.display = "flex";
    
//     // Call submitForm with machineCode as an argument
//     document.getElementById("inputForm").onsubmit = function() {
//       submitForm(machineCode);
//       return false; // prevent form submission
//     };
//   }


function chooseTimer(machineName,machineCode){
    // Prompt the user for input
    // document.getElementById("overlay").style.display = "flex";
    var timeInput = prompt("Enter washing time in minutes for " + machineName + ":");

    // Validate the input and perform necessary actions
    if (timeInput !== null && !isNaN(timeInput) && timeInput >= 1 && timeInput <= 75) {
        alert("Washing time set to " + timeInput + " minutes for " + machineName + ".");
        document.getElementById(machineCode).classList.toggle('close');
        // Add your logic to handle the washing time here
    } else {
        alert("Invalid input. Please enter a number between 1 and 75.");
    }
}

