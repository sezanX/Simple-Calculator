# Simple Calculator

A clean, minimalistic calculator built with HTML, CSS, and JavaScript. This calculator supports basic arithmetic operations and features a responsive design.
     [Live Preview](https://sezanx.github.io/Simple-Calculator/)
## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a simple, user-friendly calculator that performs basic arithmetic operations. It is designed to be aesthetically pleasing and easy to use.

## Features

- Clean, responsive design
- Supports basic arithmetic operations (addition, subtraction, multiplication, division, modulus)
- Clear display
- Error handling for invalid calculations

## Installation

1. Clone the repository:

    ```bash
    https://github.com/sezanX/Simple-Calculator
    ```

2. Navigate to the project directory:

    ```bash
    cd /Simple-Calculator
    ```

3. Open `index.html` in your preferred web browser.

## Usage

- Click on the buttons to perform calculations.
- Use `C` to clear the display.
- Use `CE` to clear the last entry.
- Use `=` to get the result of the calculation.

## Code Structure

The project consists of the following main parts:

- **HTML**: Defines the structure of the calculator.
- **CSS**: Styles the calculator to give it a modern, minimalistic look.
- **JavaScript**: Adds functionality to the calculator buttons.

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minimalistic Calculator</title>
    <style>
        /* CSS goes here */
    </style>
</head>
<body>
    <div class="calculator">
        <div class="display" id="display">
            <div class="previous-calculation" id="previous-calculation">&nbsp;</div>
            <div class="current-calculation" id="current-calculation">0</div>
        </div>
        <div class="buttons">
            <!-- Buttons go here -->
        </div>
    </div>
    <script>
        // JavaScript goes here
    </script>
</body>
</html>
```

### CSS

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f4f4f4;
    font-family: Arial, sans-serif;
}

.calculator {
    background-color: #ffffff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 300px;
}

/* Add the rest of the CSS here */
```

### JavaScript

```javascript
let previousCalculation = document.getElementById('previous-calculation');
let currentCalculation = document.getElementById('current-calculation');

function appendNumber(number) {
    if (currentCalculation.innerText === '0') {
        currentCalculation.innerText = number;
    } else {
        currentCalculation.innerText += number;
    }
}

function appendOperator(operator) {
    currentCalculation.innerText += ` ${operator} `;
}

function clearDisplay() {
    currentCalculation.innerText = '0';
    previousCalculation.innerText = '';
}

function clearEntry() {
    let text = currentCalculation.innerText.trim();
    let newText = text.slice(0, text.lastIndexOf(' '));
    currentCalculation.innerText = newText || '0';
}

function calculate() {
    try {
        let result = eval(currentCalculation.innerText.replace(/÷/g, '/').replace(/×/g, '*'));
        previousCalculation.innerText = currentCalculation.innerText;
        currentCalculation.innerText = result;
    } catch {
        currentCalculation.innerText = 'Error';
    }
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License

This project is licensed under the MIT License.

---

Feel free to customize it according to your needs! If you need further assistance, just let me know.<a href="https://github.com/sezanX"> @sezanX</a>
