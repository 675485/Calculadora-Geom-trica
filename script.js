
function resetPage() {
    window.location.reload();
}
function showOptions() {
    const shapeSelect = document.getElementById('shapeSelect');
    const optionsDiv = document.getElementById('options');
    const inputFieldsDiv = document.getElementById('inputFields');

    if (shapeSelect.value === 'circle') {
        inputFieldsDiv.innerHTML = '<div class="input-group"><label for="radiusInput">Radio:</label><input type="number" id="radiusInput" placeholder="Radio"></div>';
        optionsDiv.style.display = 'block';
    } else if (shapeSelect.value === 'rectangle') {
        inputFieldsDiv.innerHTML = '<div class="input-group"><label for="widthInput">Ancho:</label><input type="number" id="widthInput" placeholder="Ancho"></div>' +
                                   '<div class="input-group"><label for="heightInput">Altura:</label><input type="number" id="heightInput" placeholder="Altura"></div>';
        optionsDiv.style.display = 'block';
    } else if (shapeSelect.value === 'triangle') {
        inputFieldsDiv.innerHTML = '<div class="input-group"><label for="side1Input">Lado 1:</label><input type="number" id="side1Input" placeholder="Lado 1"></div>' +
                                   '<div class="input-group"><label for="side2Input">Lado 2:</label><input type="number" id="side2Input" placeholder="Lado 2"></div>' +
                                   '<div class="input-group"><label for="side3Input">Lado 3:</label><input type="number" id="side3Input" placeholder="Lado 3"></div>';
        optionsDiv.style.display = 'block';
    } else if (shapeSelect.value === 'square') {
        inputFieldsDiv.innerHTML = '<div class="input-group"><label for="sideInput">Lado:</label><input type="number" id="sideInput" placeholder="Lado"></div>';
        optionsDiv.style.display = 'block';
    } else if (shapeSelect.value === 'parallelogram') {
        inputFieldsDiv.innerHTML = '<div class="input-group"><label for="baseInput">Base:</label><input type="number" id="baseInput" placeholder="Base"></div>' +
                                   '<div class="input-group"><label for="heightInput">Altura:</label><input type="number" id="heightInput" placeholder="Altura"></div>' +
                                   '<div class="input-group"><label for="sideInput">Lado:</label><input type="number" id="sideInput" placeholder="Lado"></div>';
        optionsDiv.style.display = 'block';
    } else if (shapeSelect.value === 'trapezoid') {
        inputFieldsDiv.innerHTML = '<div class="input-group"><label for="base1Input">Base 1:</label><input type="number" id="base1Input" placeholder="Base 1"></div>' +
                                   '<div class="input-group"><label for="base2Input">Base 2:</label><input type="number" id="base2Input" placeholder="Base 2"></div>' +
                                   '<div class="input-group"><label for="heightInput">Altura:</label><input type="number" id="heightInput" placeholder="Altura"></div>' +
                                   '<div class="input-group"><label for="side1Input">Lado 1:</label><input type="number" id="side1Input" placeholder="Lado 1"></div>' +
                                   '<div class="input-group"><label for="side2Input">Lado 2:</label><input type="number" id="side2Input" placeholder="Lado 2"></div>';
        optionsDiv.style.display = 'block';
    } else if (shapeSelect.value === 'pentagon') {
        inputFieldsDiv.innerHTML = '<div class="input-group"><label for="sideInput">Lado:</label><input type="number" id="sideInput" placeholder="Lado"></div>';
        optionsDiv.style.display = 'block';
    } else if (shapeSelect.value === 'hexagon') {
        inputFieldsDiv.innerHTML = '<div class="input-group"><label for="sideInput">Lado:</label><input type="number" id="sideInput" placeholder="Lado"></div>';
        optionsDiv.style.display = 'block';
    } else {
        optionsDiv.style.display = 'none';
    }
}

function calculate() {
    const shapeSelect = document.getElementById('shapeSelect').value;
    const calculationSelect = document.getElementById('calculationSelect').value;
    let result;

    if (shapeSelect === 'circle') {
        const radius = parseFloat(document.getElementById('radiusInput').value);
        if (calculationSelect === 'area') {
            result = Math.PI * Math.pow(radius, 2);
        } else {
            result = 2 * Math.PI * radius;
        }
    } else if (shapeSelect === 'rectangle') {
        const width = parseFloat(document.getElementById('widthInput').value);
        const height = parseFloat(document.getElementById('heightInput').value);
        if (calculationSelect === 'area') {
            result = width * height;
        } else {
            result = 2 * (width + height);
        }
    } else if (shapeSelect === 'triangle') {
        const side1 = parseFloat(document.getElementById('side1Input').value);
        const side2 = parseFloat(document.getElementById('side2Input').value);
        const side3 = parseFloat(document.getElementById('side3Input').value);
        if (calculationSelect === 'area') {
            const s = (side1 + side2 + side3) / 2;
            result = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
        } else {
            result = side1 + side2 + side3;
        }
    } else if (shapeSelect === 'square') {
        const side = parseFloat(document.getElementById('sideInput').value);
        if (calculationSelect === 'area') {
            result = side * side;
        } else {
            result = 4 * side;
        }
    } else if (shapeSelect === 'parallelogram') {
        const base = parseFloat(document.getElementById('baseInput').value);
        const height = parseFloat(document.getElementById('heightInput').value);
        const side = parseFloat(document.getElementById('sideInput').value);
        if (calculationSelect === 'area') {
            result = base * height;
        } else {
            result = 2 * (base + side);
        }
    } else if (shapeSelect === 'trapezoid') {
        const base1 = parseFloat(document.getElementById('base1Input').value);
        const base2 = parseFloat(document.getElementById('base2Input').value);
        const height = parseFloat(document.getElementById('heightInput').value);
        const side1 = parseFloat(document.getElementById('side1Input').value);
        const side2 = parseFloat(document.getElementById('side2Input').value);
        if (calculationSelect === 'area') {
            result = 0.5 * (base1 + base2) * height;
        } else {
            result = base1 + base2 + side1 + side2;
        }
    } else if (shapeSelect === 'pentagon') {
        const side = parseFloat(document.getElementById('sideInput').value);
        if (calculationSelect === 'area') {
            result = (Math.sqrt(5 * (5 + 2 * Math.sqrt(5)))) / 4 * Math.pow(side, 2);
        } else {
            result = 5 * side;
        }
    } else if (shapeSelect === 'hexagon') {
        const side = parseFloat(document.getElementById('sideInput').value);
        if (calculationSelect === 'area') {
            result = (3 * Math.sqrt(3)) / 2 * Math.pow(side, 2);
        } else {
            result = 6 * side;
        }
    }

    document.getElementById('result').textContent = `El resultado es: ${result.toFixed(2)}`;
}