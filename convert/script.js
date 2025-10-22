document.addEventListener('DOMContentLoaded', () => {
    const mmInput = document.getElementById('mmInput');
    const inInput = document.getElementById('inInput');

    const conversionFactor = 25.4; // 1 inch = 25.4 mm

    // Function to handle mm to in conversion
    const convertMmToIn = () => {
        const mmValue = parseFloat(mmInput.value);
        if (isNaN(mmValue) || mmValue === 0) {
            inInput.value = ''; // Clear the inch field
            return;
        }
        // Conversion: mm / 25.4
        const inValue = mmValue / conversionFactor;
        // Display result, rounded to 4 decimal places for precision
        inInput.value = inValue.toFixed(4);
    };

    // Function to handle in to mm conversion
    const convertInToMm = () => {
        const inValue = parseFloat(inInput.value);
        if (isNaN(inValue) || inValue === 0) {
            mmInput.value = ''; // Clear the mm field
            return;
        }
        // Conversion: in * 25.4
        const mmValue = inValue * conversionFactor;
        // Display result, rounded to 4 decimal places for precision
        mmInput.value = mmValue.toFixed(4);
    };

    // Event listeners to trigger conversion when input changes
    mmInput.addEventListener('input', () => {
        convertMmToIn();
    });

    inInput.addEventListener('input', () => {
        convertInToMm();
    });
});
