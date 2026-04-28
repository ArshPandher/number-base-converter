/* ============================================
   NUMBER BASE CONVERTER - JAVASCRIPT
   Educational Tool for Computer Architecture
   ============================================ */

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Validates decimal input
 * Allows: 0-9
 * Range: 0 to 4,294,967,295 (32-bit unsigned)
 */
function isValidDecimal(input) {
    const regex = /^[0-9]+$/;
    if (!regex.test(input)) return false;
    if (input.length > 10) return false; // Prevent overflow
    const num = BigInt(input);
    if (num > BigInt(4294967295)) return false; // 32-bit limit
    return true;
}

/**
 * Validates binary input
 * Allows: 0-1
 * Length: max 32 bits
 */
function isValidBinary(input) {
    const regex = /^[01]+$/;
    if (!regex.test(input)) return false;
    if (input.length > 32) return false; // 32-bit limit
    return true;
}

/**
 * Validates hexadecimal input
 * Allows: 0-9, A-F (case-insensitive)
 * Length: max 8 digits (32-bit)
 */
function isValidHexadecimal(input) {
    const regex = /^[0-9A-Fa-f]+$/;
    if (!regex.test(input)) return false;
    if (input.length > 8) return false; // 32-bit limit
    return true;
}

/**
 * Converts decimal to binary
 * Returns: binary string without prefix
 */
function decimalToBinary(decimal) {
    return BigInt(decimal).toString(2);
}

/**
 * Converts decimal to hexadecimal
 * Returns: hex string in uppercase without prefix
 */
function decimalToHexadecimal(decimal) {
    return BigInt(decimal).toString(16).toUpperCase();
}

/**
 * Converts binary to decimal
 * Accepts: binary string
 * Returns: decimal number as string
 */
function binaryToDecimal(binary) {
    return BigInt(binary === '' ? 0 : `0b${binary}`).toString(10);
}

/**
 * Converts hexadecimal to decimal
 * Accepts: hex string (with or without 0x prefix)
 * Returns: decimal number as string
 */
function hexadecimalToDecimal(hex) {
    return BigInt(hex === '' ? 0 : `0x${hex}`).toString(10);
}

// ============================================
// MAIN CONVERSION FUNCTION
// ============================================

/**
 * Main conversion function
 * Handles validation, conversion, and display
 */
function convertNumber() {
    // Get input values
    const numberInput = document.getElementById('numberInput');
    const baseSelect = document.getElementById('baseSelect');
    const errorDiv = document.getElementById('errorMessage');
    const resultsSection = document.getElementById('resultsSection');
    const educationSection = document.getElementById('educationSection');

    const inputValue = numberInput.value.trim().toUpperCase();
    const selectedBase = baseSelect.value;

    // Clear previous errors
    errorDiv.style.display = 'none';
    errorDiv.textContent = '';

    // Validation
    if (inputValue === '') {
        showError('Please enter a number to convert.');
        resultsSection.style.display = 'none';
        educationSection.style.display = 'none';
        return;
    }

    let decimal, binary, hexadecimal, conversionMethod;

    try {
        // Validate based on selected base and convert to decimal
        if (selectedBase === 'decimal') {
            if (!isValidDecimal(inputValue)) {
                showError('Invalid Decimal: Only digits 0-9 are allowed. Max value: 4,294,967,295');
                return;
            }
            decimal = inputValue;
            conversionMethod = 'from-decimal';
        } else if (selectedBase === 'binary') {
            if (!isValidBinary(inputValue)) {
                showError('Invalid Binary: Only digits 0 and 1 are allowed. Max 32 bits.');
                return;
            }
            decimal = binaryToDecimal(inputValue);
            conversionMethod = 'from-binary';
        } else if (selectedBase === 'hexadecimal') {
            if (!isValidHexadecimal(inputValue)) {
                showError('Invalid Hexadecimal: Only 0-9 and A-F are allowed. Max 8 digits.');
                return;
            }
            decimal = hexadecimalToDecimal(inputValue);
            conversionMethod = 'from-hexadecimal';
        }

        // Convert to all bases
        binary = decimalToBinary(decimal);
        hexadecimal = decimalToHexadecimal(decimal);

        // Display results
        document.getElementById('decimalResult').textContent = decimal;
        document.getElementById('binaryResult').textContent = binary;
        document.getElementById('hexadecimalResult').textContent = hexadecimal;

        resultsSection.style.display = 'block';

        // Display educational explanation
        displayEducation(decimal, binary, hexadecimal, conversionMethod, selectedBase, inputValue);
        educationSection.style.display = 'block';

        // Scroll to results
        setTimeout(() => {
            resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    } catch (error) {
        showError('An error occurred during conversion. Please check your input.');
        console.error(error);
    }
}

// ============================================
// ERROR HANDLING
// ============================================

/**
 * Display error message to user
 */
function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = `⚠️ ${message}`;
    errorDiv.style.display = 'block';
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('educationSection').style.display = 'none';
}

// ============================================
// EDUCATIONAL DISPLAY
// ============================================

/**
 * Generates and displays step-by-step conversion explanation
 */
function displayEducation(decimal, binary, hexadecimal, method, originalBase, originalValue) {
    const stepsContent = document.getElementById('stepsContent');
    let html = '';

    if (method === 'from-decimal') {
        // Decimal to Binary explanation
        html += generateDecimalToBinarySteps(decimal);
        html += '<br>';
        // Decimal to Hexadecimal explanation
        html += generateDecimalToHexadecimalSteps(decimal);
    } else if (method === 'from-binary') {
        // Binary to Decimal explanation
        html += generateBinaryToDecimalSteps(originalValue, decimal);
    } else if (method === 'from-hexadecimal') {
        // Hexadecimal to Decimal explanation
        html += generateHexadecimalToDecimalSteps(originalValue, decimal);
    }

    stepsContent.innerHTML = html;
}

/**
 * Generate decimal to binary conversion steps
 * Method: Repeated division by 2
 */
function generateDecimalToBinarySteps(decimal) {
    const num = BigInt(decimal);
    let steps = `<div class="step">
                    <div class="step-title">Step 1: Decimal to Binary (Repeated Division by 2)</div>
                    <div class="step-content">`;

    if (num === 0n) {
        steps += 'Input: 0\nResult: 0 (zero is zero in all bases)';
    } else {
        steps += `Convert ${decimal} to binary:\n\n`;

        let tempNum = num;
        let remainders = [];
        let step = 1;

        while (tempNum > 0n) {
            const remainder = tempNum % 2n;
            const quotient = tempNum / 2n;
            remainders.unshift(remainder.toString());
            steps += `${step}. ${tempNum} ÷ 2 = ${quotient} remainder ${remainder}\n`;
            tempNum = quotient;
            step++;
        }

        steps += `\nRead remainders from bottom to top: ${remainders.join('')}\nResult: ${remainders.join('')}₂`;
    }

    steps += `</div></div>`;
    return steps;
}

/**
 * Generate decimal to hexadecimal conversion steps
 * Method: Repeated division by 16
 */
function generateDecimalToHexadecimalSteps(decimal) {
    const num = BigInt(decimal);
    let steps = `<div class="step">
                    <div class="step-title">Step 2: Decimal to Hexadecimal (Repeated Division by 16)</div>
                    <div class="step-content">`;

    if (num === 0n) {
        steps += 'Input: 0\nResult: 0 (zero is zero in all bases)';
    } else {
        steps += `Convert ${decimal} to hexadecimal:\n\n`;

        const hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        let tempNum = num;
        let remainders = [];
        let step = 1;

        while (tempNum > 0n) {
            const remainder = tempNum % 16n;
            const quotient = tempNum / 16n;
            const hexDigit = hexDigits[Number(remainder)];
            remainders.unshift(hexDigit);
            steps += `${step}. ${tempNum} ÷ 16 = ${quotient} remainder ${remainder} (hex: ${hexDigit})\n`;
            tempNum = quotient;
            step++;
        }

        steps += `\nRead remainders from bottom to top: ${remainders.join('')}\nResult: ${remainders.join('')}₁₆`;
    }

    steps += `</div></div>`;
    return steps;
}

/**
 * Generate binary to decimal conversion steps
 * Method: Positional notation with powers of 2
 */
function generateBinaryToDecimalSteps(binary, decimal) {
    let steps = `<div class="step">
                    <div class="step-title">Binary to Decimal (Positional Notation)</div>
                    <div class="step-content">`;

    if (binary === '0') {
        steps += 'Input: 0₂\nResult: 0₁₀';
    } else {
        steps += `Convert ${binary}₂ to decimal:\n\n`;
        steps += `Each position represents a power of 2:\n`;
        steps += `Position: ... 2⁴ 2³ 2² 2¹ 2⁰\n`;
        steps += `Power:    ... 16  8  4  2  1\n\n`;

        let calculation = '';
        let sum = 0n;
        const binaryArray = binary.split('').reverse();

        for (let i = 0; i < binaryArray.length; i++) {
            const digit = BigInt(binaryArray[i]);
            const power = BigInt(2) ** BigInt(i);
            const product = digit * power;

            if (digit === 1n) {
                if (calculation !== '') calculation += ' + ';
                calculation += `(${digit} × 2⁹) = ${product}`;
                sum += product;
            }
        }

        // Recalculate for display with correct powers
        steps += `Calculation:\n`;
        calculation = '';
        sum = 0n;

        for (let i = binaryArray.length - 1; i >= 0; i--) {
            const digit = BigInt(binaryArray[i]);
            const power = BigInt(2) ** BigInt(i);
            const product = digit * power;

            steps += `Position ${i}: ${digit} × 2^${i} = ${digit} × ${power} = ${product}\n`;
            if (digit === 1n) {
                sum += product;
            }
        }

        steps += `\nSum: ${sum}\nResult: ${sum}₁₀`;
    }

    steps += `</div></div>`;
    return steps;
}

/**
 * Generate hexadecimal to decimal conversion steps
 * Method: Positional notation with powers of 16
 */
function generateHexadecimalToDecimalSteps(hex, decimal) {
    let steps = `<div class="step">
                    <div class="step-title">Hexadecimal to Decimal (Positional Notation)</div>
                    <div class="step-content">`;

    if (hex === '0') {
        steps += 'Input: 0₁₆\nResult: 0₁₀';
    } else {
        const hexDigitValues = {
            '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
            'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15
        };

        steps += `Convert ${hex}₁₆ to decimal:\n\n`;
        steps += `Hex digit values: 0-9 = 0-9, A=10, B=11, C=12, D=13, E=14, F=15\n`;
        steps += `Each position represents a power of 16:\n`;
        steps += `Position: 16² 16¹ 16⁰\n`;
        steps += `Power:    256   16   1\n\n`;

        steps += `Calculation:\n`;
        let sum = 0n;
        const hexArray = hex.split('').reverse();

        for (let i = hexArray.length - 1; i >= 0; i--) {
            const digit = hexArray[i];
            const digitValue = hexDigitValues[digit];
            const power = BigInt(16) ** BigInt(i);
            const product = BigInt(digitValue) * power;

            steps += `Position ${i}: ${digit} × 16^${i} = ${digitValue} × ${power} = ${product}\n`;
            sum += product;
        }

        steps += `\nSum: ${sum}\nResult: ${sum}₁₀`;
    }

    steps += `</div></div>`;
    return steps;
}

// ============================================
// TAB NAVIGATION
// ============================================

/**
 * Show selected education tab
 */
function showTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show selected tab and activate button
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// ============================================
// QUICK EXAMPLES
// ============================================

/**
 * Load example - decimal input
 */
function loadExample(value) {
    document.getElementById('numberInput').value = value;
    document.getElementById('baseSelect').value = 'decimal';
    updateInputHint();
    convertNumber();
}

/**
 * Load example - binary input
 */
function loadExampleBinary(value) {
    document.getElementById('numberInput').value = value;
    document.getElementById('baseSelect').value = 'binary';
    updateInputHint();
    convertNumber();
}

/**
 * Load example - hexadecimal input
 */
function loadExampleHex(value) {
    document.getElementById('numberInput').value = value;
    document.getElementById('baseSelect').value = 'hexadecimal';
    updateInputHint();
    convertNumber();
}

// ============================================
// INPUT HINT & VALIDATION
// ============================================

/**
 * Update input hint based on selected base
 */
function updateInputHint() {
    const baseSelect = document.getElementById('baseSelect');
    const inputHint = document.getElementById('inputHint');

    const hints = {
        decimal: 'Enter digits 0-9 (max: 4,294,967,295)',
        binary: 'Enter digits 0-1 (max: 32 bits)',
        hexadecimal: 'Enter 0-9 and A-F (max: 8 digits)'
    };

    inputHint.textContent = hints[baseSelect.value];
}

/**
 * Clear all inputs and results
 */
function clearAll() {
    document.getElementById('numberInput').value = '';
    document.getElementById('baseSelect').value = 'decimal';
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('educationSection').style.display = 'none';
    document.getElementById('errorMessage').style.display = 'none';
    updateInputHint();
    document.getElementById('numberInput').focus();
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // Initialize input hint
    updateInputHint();

    // Update hint when base changes
    document.getElementById('baseSelect').addEventListener('change', updateInputHint);

    // Allow Enter key to convert
    document.getElementById('numberInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            convertNumber();
        }
    });

    // Focus on input on load
    document.getElementById('numberInput').focus();
});
