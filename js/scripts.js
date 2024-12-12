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