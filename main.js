const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  const name = document.getElementById('name').value;
  const lastName = document.getElementById('last_name').value;
  const email = document.getElementById('email').value;
  const motivo = document.getElementById('motivo').value;
  const mensaje = document.getElementById('textarea').value;

 
  const alertMessage = `DE: ${name} ${lastName} (${email})
  -ASUNTO: ${motivo}
  -MENSAJE:
  - ${mensaje}`;

  alert(alertMessage);
});
