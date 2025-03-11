document.addEventListener("DOMContentLoaded", function () {
    // Secuestra al envio del formulatio y espera la respuesta
    document.getElementById("search-form").addEventListener("submit", function (event) {
        event.preventDefault();
 
        let operation = document.querySelector('select[name="operation"]').value;

        // Hacer la solicitud GET a Flask
        fetch(`/processing?operation=${operation}`)
            .then(response => response.json())  // Convierte la respuesta en JSON
            .then(response_data => {
                // despliga los datos del JSON en la página
                display_data(response_data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
})

function display_data(response_data) {
    let insert = "<h2>Resultados:</h2>";

    if ("students" in response_data) {
        insert += "<div id=\"resultados\">" +
            "<h3>Alumnos:</h3>" +
            "<table border=\"1\"><tr><th>Nombre</th><th>Matrícula</th></tr>";
        // Iterar sobre students y obtener sus datos
        Object.keys(response_data.students).forEach(key => {
            let student = response_data.students[key];
            insert += "<tr><td>" + student.name + "</td><td>" + student.matricula + "</td></tr>";
        });
        insert += "</table></div>";
    } if ("teachers" in response_data) {
        insert += "<div id=\"resultados\">" +
            "<h3>Maestros:</h3>" +
            "<table border=\"1\"><tr><th>Nombre</th><th>Número De Empleado</th></tr>";
        // Iterar sobre teachers y obtener sus datos
        Object.keys(response_data.teachers).forEach(key => {
            let teacher = response_data.teachers[key];
            insert += "<tr><td>" + teacher.name + "</td><td>" + teacher.employeeNumber + "</td></tr>";
        });
        insert += "</table></div>";
    }

    document.getElementById("resultados_pre").innerHTML = insert;
}