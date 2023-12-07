
/* Referencia contendio de nosotros*/
fetch('base.html')
.then(response => {
    if (!response.ok) {
        throw new Error('sin respuesta en contenido servicios');
    }
    return response.text();
})
.then(data => {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = data;

    var parteEspecifica = tempDiv.querySelector('#contenido-principal');

    document.getElementById('contenido-nosotros').appendChild(parteEspecifica);  
}); 


/*Referencia Footer */
fetch('base.html')
.then(response => {
    if (!response.ok) {
        throw new Error('Sin respuesta en el footer');
    }
    return response.text();
}).then(data => {
    var tempFooter = document.createElement('footer');
    tempFooter.innerHTML = data;

    var pEspecica = tempFooter.querySelector('#base-footer');

    document.getElementById('footer').appendChild(pEspecica);  
});

/*Referencia Header*/
fetch('base.html')
.then(response => {
    if (!response.ok) {
        throw new Error('Sin respuesta en el Header');
    }
    return response.text();
}).then(data => {
    var tempHeader = document.createElement('header');
    tempHeader.innerHTML = data;

    var paEspecica = tempHeader.querySelector('#base-header');

    document.getElementById('header').appendChild(paEspecica);  
});