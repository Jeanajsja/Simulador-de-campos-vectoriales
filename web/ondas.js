const canvas = document.getElementById("waveCanvas");
const ctx = canvas.getContext("2d");

const amplitudeInput = document.getElementById("amplitudeInput");
const amplitudeValue = document.getElementById("amplitudeValue");
const frequencyInput = document.getElementById("frequencyInput");
const frequencyValue = document.getElementById("frequencyValue");
const lengthInput = document.getElementById("lengthInput");
const lengthValue = document.getElementById("lengthValue");
const speedInput = document.getElementById("speedInput");
const speedValue = document.getElementById("speedValue");
const resetButton = document.getElementById("resetButton");
const presetButton = document.getElementById("presetButton");
const presetSelect = document.getElementById("presetSelect");
const timeDisplay = document.getElementById("timeDisplay");

let amplitude = parseFloat(amplitudeInput.value);
let frequency = parseFloat(frequencyInput.value);
let length = parseFloat(lengthInput.value);
let speed = parseFloat(speedInput.value);
let time = 0;
let phase = 0;

amplitudeInput.addEventListener("input", () => {
    amplitude = parseFloat(amplitudeInput.value);
    amplitudeValue.textContent = amplitude;
});

frequencyInput.addEventListener("input", () => {
    frequency = parseFloat(frequencyInput.value);
    frequencyValue.textContent = frequency;
});

lengthInput.addEventListener("input", () => {
    length = parseFloat(lengthInput.value);
    lengthValue.textContent = length;
});

speedInput.addEventListener("input", () => {
    speed = parseFloat(speedInput.value);
    speedValue.textContent = speed;
});

function animateWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    
    for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + amplitude * Math.sin((2 * Math.PI * frequency / length) * x + phase);
        ctx.lineTo(x, y);
    }
    
    ctx.strokeStyle = "#0056b3";
    ctx.lineWidth = 2;
    ctx.stroke();
    
    phase += speed; // Incrementar la fase
    time += speed; // Incrementar el tiempo
    timeDisplay.textContent = time.toFixed(2); // Actualizar el tiempo mostrado

    requestAnimationFrame(animateWave);
}

resetButton.addEventListener("click", () => {
    amplitudeInput.value = 25;
    frequencyInput.value = 1;
    lengthInput.value = 800;
    speedInput.value = 0.1;

    amplitude = parseFloat(amplitudeInput.value);
    frequency = parseFloat(frequencyInput.value);
    length = parseFloat(lengthInput.value);
    speed = parseFloat(speedInput.value);
    amplitudeValue.textContent = amplitude;
    frequencyValue.textContent = frequency;
    lengthValue.textContent = length;
    speedValue.textContent = speed;
    time = 0;
    timeDisplay.textContent = "0.00";
    phase = 0; // Reiniciar fase
});

presetButton.addEventListener("click", () => {
    const presetValue = presetSelect.value;
    if (presetValue === "radio") {
        amplitudeInput.value = 20;
        frequencyInput.value = 3;
        lengthInput.value = 800;
        speedInput.value = 0.1;
    } else if (presetValue === "microwave") {
        amplitudeInput.value = 30;
        frequencyInput.value = 2.5;
        lengthInput.value = 800;
        speedInput.value = 0.2;
    } else if (presetValue === "infrared") {
        amplitudeInput.value = 35;
        frequencyInput.value = 300;
        lengthInput.value = 800;
        speedInput.value = 0.3;
    } else if (presetValue === "visible") {
        amplitudeInput.value = 40;
        frequencyInput.value = 500;
        lengthInput.value = 800;
        speedInput.value = 0.4;
    } else if (presetValue === "ultraviolet") {
        amplitudeInput.value = 45;
        frequencyInput.value = 30;
        lengthInput.value = 800;
        speedInput.value = 0.5;
    } else if (presetValue === "gamma") {
        amplitudeInput.value = 50;
        frequencyInput.value = 300;
        lengthInput.value = 800;
        speedInput.value = 0.6;
    }

    // Actualizar los valores
    amplitude = parseFloat(amplitudeInput.value);
    frequency = parseFloat(frequencyInput.value);
    length = parseFloat(lengthInput.value);
    speed = parseFloat(speedInput.value);
    amplitudeValue.textContent = amplitude;
    frequencyValue.textContent = frequency;
    lengthValue.textContent = length;
    speedValue.textContent = speed;
    phase = 0; // Reiniciar fase
});

// Iniciar la animación
animateWave();
