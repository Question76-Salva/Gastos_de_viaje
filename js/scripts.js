/**
*   =======================
*   === Gastos de Viaje ===
*   =======================
*/

// Capturar formulario
let vacationCalc = document.getElementById('vacationCalc');

// Capturar evento
vacationCalc.addEventListener('submit', calcExpenses);

function calcExpenses(e) {

    // Para recarga automática
    e.preventDefault();

    // Capturar valores de los inputs del formulario
    let destiny = document.getElementById('destiny').value;
    let budget = document.getElementById('budget').value;
    let acomodation = document.getElementById('acomodation').value;
    let transport = document.getElementById('transport').value;
    let food = document.getElementById('food').value;

    // Comprobar
    // console.log(destiny, budget, acomodation, transport, food);

    // Variable para los GASTOS
    // parsear variables para entrar sólo números
    let expenses = parseInt(acomodation) + parseInt(transport) + parseInt(food);

    // BALANCE
    // Presupuesto - GASTOS
    let balance = budget - expenses;

    // Comprobar
    // console.log(destiny, budget, balance);   
    
    // Enviar la info a la función UI
    // para que la imprima
    UI(destiny, budget, balance);

}


function UI(destiny, budget, balance) {

    // Capturar resultado
    let result = document.getElementById('result');

    // Crear "div" para imprimir resultado
    let dataPrint = document.createElement('div');

    // Template 
    // language markup de Materialize CSS
    dataPrint.innerHTML = `
        <div class="container-data row">
            <div class="col s4">
                <h6>${destiny}</h6>
            </div>
            <div class="col s4">
                <h6>${budget}</h6>
            </div>
            <div class="col s4">
                <h6>${balance}</h6>
            </div>
        </div>    
    `;

    // Imprimir el resultado
    result.appendChild(dataPrint);

    // Limpia los inputs 
    reset();        
    
}


function reset() {

    // Captura el formulario y lo resetea
    document.getElementById('vacationCalc').reset();
}