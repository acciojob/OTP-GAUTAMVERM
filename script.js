//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

    inputs.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value.match(/^\d$/)) {
          if (index < inputs.length - 1) {
            inputs[index + 1].focus();
          }
        } else {
          e.target.value = ''; // Only digits allowed
        }
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
          if (input.value === '') {
            if (index > 0) {
              inputs[index - 1].focus();
              inputs[index - 1].value = '';
            }
          } else {
            input.value = '';
          }
          e.preventDefault();
        } else if (e.key.match(/^[0-9]$/)) {
          input.value = ''; // Allow only single digit
        }
      });

      input.addEventListener('paste', (e) => {
        const pasteData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, inputs.length);
        pasteData.split('').forEach((char, i) => {
          if (inputs[i]) {
            inputs[i].value = char;
          }
        });
        if (pasteData.length < inputs.length) {
          inputs[pasteData.length].focus();
        } else {
          inputs[inputs.length - 1].focus();
        }
        e.preventDefault();
      });
    });

    window.addEventListener('load', () => inputs[0].focus());