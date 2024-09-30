fetch('/router')
    .then(response => response.json())
    .then(data =>{
        const h3Elent = document.getElementById('dataDisplay')
        console.log(data.stock);
        h3Elent.innerText = data.stock
    })
    .catch(error => console.error(error));
    