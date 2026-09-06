// tests/loot.test.js
//
// Para cada TODO: arma los datos de entrada según el ejemplo del comentario
// en services/loot.service.js, llama la función real, y compara con
// assert.strictEqual(). Corre "node --test" después de cada uno. Si falla,
// usa el debugger antes de tocar el service.

const test = require("node:test");
const assert = require("node:assert");
const {
    calcularValorInventario,
    obtenerItemMasRaro,
    contarItemsLegendarios,
    calcularDropRatePromedio,
    ordenarInventarioPorValor
} = require("../services/loot.service");


// 🎫 TICKET 1 → Reporte #4471
test("calcula el valor total del inventario correctamente", () => {
    const items = [{ precio: 50 }, { precio: 120 }, { precio: 30 }];
    const resultado = calcularValorInventario(items);

    assert.strictEqual(resultado, 200);
});


// 🎫 TICKET 2 → Reporte #4483
test("encuentra el item con la rareza más alta", () => {
    const items = [
        { nombre: "Poción", rareza: 1 },
        { nombre: "Espada Draconica", rareza: 9 },
        { nombre: "Escudo", rareza: 4 }
    ];
    const resultado = obtenerItemMasRaro(items);

    assert.strictEqual(resultado.nombre, "Espada Draconica");
});


// 🎫 TICKET 3 → Reporte #4502
test("cuenta correctamente los items legendarios", () => {
    const items = [
        { tipo: "legendario" },
        { tipo: "comun" },
        { tipo: "legendario" },
        { tipo: "raro" }
    ];
    const resultado = contarItemsLegendarios(items);

    assert.strictEqual(resultado, 2);
});


// 🎫 TICKET 4 → Reporte #4519
// Ojo: escribe también un segundo test para el caso del array vacío
test("calcula el drop rate promedio correctamente", () => {
    const intentos = [
        { obtuvoDrop: true },
        { obtuvoDrop: false },
        { obtuvoDrop: true },
        { obtuvoDrop: false }
    ];
    const resultado = calcularDropRatePromedio(intentos);

    assert.strictEqual(resultado, 50);
});

test("devuelve 0 cuando no hay intentos registrados", () => {
    const resultado = calcularDropRatePromedio([]);

    assert.strictEqual(resultado, 0);
});


// 💎 TICKET BONUS — nivel diosito
// Pista en el comentario de ordenarInventarioPorValor en loot.service.js.
// No hace falta ninguna herramienta nueva — con assert.strictEqual() alcanza.
// La pista está en QUÉ comparas, no en CÓMO lo comparas.
test("ordena el inventario sin modificar el array original", () => {
    const items = [{ precio: 10 }, { precio: 200 }, { precio: 50 }];
    const primerPrecioOriginal = items[0].precio;

    const resultado = ordenarInventarioPorValor(items);

    assert.strictEqual(resultado[0].precio, 200);
    assert.strictEqual(items[0].precio, primerPrecioOriginal);
});
