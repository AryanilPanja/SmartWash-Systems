const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use bodyParser middleware to parse JSON requests
app.use(bodyParser.json());

// Endpoint for setting washing machine timers
app.post('/setWashingTime', (req, res) => {
    const { machineName, timeInput } = req.body;

    // Validate the input
    if (!machineName || !timeInput || isNaN(timeInput) || timeInput < 1 || timeInput > 9) {
        return res.status(400).json({ success: false, message: 'Invalid input. Please provide machineName and a valid timeInput (1 to 9 minutes).' });
    }

    // Perform logic (you can add your own custom logic here)
    const result = performWashingMachineLogic(machineName, timeInput);

    if (result.success) {
        return res.json({ success: true, message: result.message });
    } else {
        return res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});

// Custom logic function (replace this with your own logic)
function performWashingMachineLogic(machineName, timeInput) {
    // Placeholder logic
    // You can replace this with the actual logic for handling washing machine timers
    return { success: true, message: `Washing time set to ${timeInput} minutes for ${machineName}.` };
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
