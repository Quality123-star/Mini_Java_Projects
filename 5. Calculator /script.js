        
        function readDisplay() {
            let display = document.getElementById('display');
            
            // Get the last character typed
            let lastChar = display.value.slice(-1);
            
            // Replace common operators with their spoken equivalents
            if (lastChar === '-') {
                lastChar = 'minus';
            } else if (lastChar === '/') {
                lastChar = 'divided by';
            }
            const speech = new SpeechSynthesisUtterance(lastChar);
            window.speechSynthesis.speak(speech);
        }
        

        document.getElementById('display').addEventListener('keypress', function(event) {
            if (event.key === 'Enter' || event.key === '=') {
                evaluateExpression();
                event.preventDefault();
            }
        });


        
         // Function to evaluate the expression and read out the result
        function evaluateExpression() {
        let display = document.getElementById('display');
        let expression = display.value;

        // Replace '^' with '**' for exponentiation
        expression = expression.replace(/\^/g, '**');

        try {
            // Evaluate the expression safely
            let result = eval(expression);
            display.value = result;

            // Read the result out loud
            const resultSpeech = new SpeechSynthesisUtterance(result.toString());
            window.speechSynthesis.speak(resultSpeech);

        } catch (e) {
            display.value = 'Error';

            // Read out "Error" if there's an issue
            const errorSpeech = new SpeechSynthesisUtterance('Error');
            window.speechSynthesis.speak(errorSpeech);
        }
        }
