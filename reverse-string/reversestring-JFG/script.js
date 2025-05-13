document.getElementById('reverseBtn').addEventListener('click', function () {
    const input = document.getElementById('inputText').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('output').textContent = reversed;
  });
  
  document.getElementById('copyBtn').addEventListener('click', function () {
    const output = document.getElementById('output').textContent;
    navigator.clipboard.writeText(output).then(() => {
      alert('Texto copiado al portapapeles.');
    });
  });
  