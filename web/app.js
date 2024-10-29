document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');
    const simulators = document.querySelectorAll('.simulator');

    // Función para mostrar el simulador correspondiente
    const showSimulator = (id) => {
        simulators.forEach(sim => sim.style.display = 'none'); // Ocultar todos los simuladores
        document.getElementById(`${id}-simulator`).style.display = 'block'; // Mostrar el simulador correspondiente
    };

    // Añadir evento de clic a cada opción
    options.forEach(option => {
        option.addEventListener('click', (event) => {
            event.stopPropagation(); // Evitar que el clic se propague al documento
            const id = option.id;
            showSimulator(id);
        });
    });

    // Añadir evento de clic al documento para cerrar el simulador
    document.addEventListener('click', () => {
        simulators.forEach(sim => sim.style.display = 'none'); // Ocultar todos los simuladores
    });

    // Evitar que el clic en el simulador cierre el simulador
    simulators.forEach(sim => {
        sim.addEventListener('click', (event) => {
            event.stopPropagation(); // Evitar que el clic se propague al documento
        });
    });
    document.getElementById("redireccion").addEventListener("click", function(){
        window.open("https://arcade.makecode.com/S15608-31297-19786-45041", "_blank");
    })
});
