 registros = [];
 function procesar() {
    const formulario = document.forms['usuarioForm'];
    const registro = {
        "nombres": formulario.elements[0].value,
        "apellidos": formulario.elements[1].value,
        "correo": formulario.elements[2].value,
        "telefono": formulario.elements[3].value,
        "cpf": formulario.elements[4].value,
        "direccion": formulario.elements[5].value
    };
    registros.push(registro);
    formulario.reset();
    formulario.elements[0].focus(); 
    console.log(registros);
}