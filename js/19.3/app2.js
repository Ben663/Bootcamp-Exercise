// 1. The user is allowed to type the values manually. After each value is inserted, the next input will be focused.
const inputs = document.querySelectorAll('input[type="text"]');
const form = document.querySelector('form');

const handleInput = (event) => {
  const input = event.target;
  if (input.value.length > 0 && !Number(input.value)) {
    console.log('Invalid');
    return;
  }
  if (input.nextElementSibling && input.value.length > 0) {
    input.nextElementSibling.focus();
  }

  const allValuesFull = [...inputs].every((input) => input.value && Number(input.value));
  if (allValuesFull) {
    form.submit();
  }
};

inputs.forEach((e) => {
  e.addEventListener('keyup', handleInput);
});

console.log(inputs);
// 2. The user is allowed to paste the verification code.
const handlePaste = (event) => {
  const paste = event.clipboardData.getData('text');
  console.log(paste);
  inputs.forEach((input, index) => {
    input.value = paste[index] || '';
  });
};
inputs[0].addEventListener('paste', handlePaste);
// 3. An extra challenge will be to auto submit the form once all inputs all populated.
