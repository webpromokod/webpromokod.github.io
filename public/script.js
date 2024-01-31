function submitForm() {
  const input1 = document.getElementById('input1').value;
  const input2 = document.getElementById('input2').value;

  fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ input1, input2 }),
  })
    .then(response => response.text())
    .then(data => {
      document.getElementById('response').innerText = data;
    });
}
