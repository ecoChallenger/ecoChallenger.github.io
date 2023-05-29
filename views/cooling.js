export function cooling() {
    let img = document.querySelector('#sectionTwo > div.figure > a > img')
    if(img) {
        img.remove()
    }
    const getted = document.querySelector('form')
    if(getted) {
        getted.remove()
    }
    const gettedh3 = document.querySelector('h3')
    if(gettedh3) {
        gettedh3.remove()
    }
    const gettedDiv = document.querySelector('div>.buttons')
    if(gettedDiv) {
        gettedDiv.remove()
    }
    const h3 = document.createElement('h3')
    const del = document.querySelector('#sectionTwo > div.figure');
    const del2 = document.querySelector('#sectionTwo > div.figure > span')
    del2.style.background = 'none';
    del.style.background = 'none';
    h3.textContent = "Cooling Calculator"
    const form = document.createElement('form');
    form.addEventListener('submit', onSubmit);
  
    // Create the input element
    const input = document.createElement('input');
    input.required = true;
    input.type = 'number';
    input.placeholder = 'kWh';
    input.min = '0.1';
    input.step = '0.1';
    input.name = 'kWh';
  
    // Create the button element
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Submit';
  
    // Append the input and button elements to the form
    form.appendChild(input);
    form.appendChild(button);
  
    // Append the form to a container in the HTML document
    const container = document.querySelector('.figure');
    container.appendChild(h3)
    container.appendChild(form);
    function onSubmit(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const kWh = formData.get('kWh');
      const result = (Number(kWh) * 0.6525332).toFixed(2)
      document.querySelector('form').remove()
      const form = document.createElement('form');
      form.addEventListener('submit', res);
  
      // Create the input element
      const input = document.createElement('input');
      input.name = 'kWh';
      input.value = `${result} (kg CO2e)`;
      input.disabled = true;
  
      // Create the button element
      const button = document.createElement('button');
      button.type = 'submit';
      button.textContent = 'New Calculation';
  
      // Append the input and button elements to the form
      form.appendChild(input);
      form.appendChild(button);
  
      // Append the form to a container in the HTML document
      container.appendChild(form);
  
      function res() {
        document.querySelector('form').remove()
        const form = document.createElement('form');
        form.addEventListener('submit', onSubmit);
      
        // Create the input element
        const input = document.createElement('input');
        input.required = true;
        input.type = 'number';
        input.placeholder = 'kWh';
        input.min = '0.1';
        input.step = '0.1';
        input.name = 'kWh';
      
        // Create the button element
        const button = document.createElement('button');
        button.type = 'submit';
        button.textContent = 'Submit';
      
        // Append the input and button elements to the form
        form.appendChild(input);
        form.appendChild(button);
      
        // Append the form to a container in the HTML document
        const container = document.querySelector('.figure');
        container.appendChild(h3)
        container.appendChild(form);
      }
  
    }
  
    let array = document.querySelectorAll('.section > div > a')
    array.forEach(element => {
        element.className = ""
        if(element.textContent == 'Cooling') {
            element.className = 'selected';
        }
    });
  }