



  const scriptURL = 'https://script.google.com/macros/s/AKfycbzKK5H-PKqCnfKY0rVjd263Np3ZQ5B80NYH-U8f54zCvudR7GMALyhJ-2HTNnNAeswM/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
