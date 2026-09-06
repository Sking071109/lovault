# Reporte de Incidentes — LootVault

Completa una entrada por cada ticket que resolviste. Tres líneas, directo al grano.

---

## Ticket 1 → Reporte #4471

**Reportado:**
**Reportado:** El valor total de venta del inventario no coincidía con la suma de sus precios.
**Encontrado:** `calcularValorInventario` leía el campo `valor`, que no existe en los items.
**Corregido:** La suma ahora usa el campo `precio`.

---

## Ticket 2 → Reporte #4483

**Reportado:**
**Reportado:** El sistema mostraba como más raro un item común.
**Encontrado:** `obtenerItemMasRaro` reemplazaba el item cuando encontraba una rareza menor.
**Corregido:** La comparación ahora conserva la rareza más alta.

---

## Ticket 3 → Reporte #4502

**Reportado:**
**Reportado:** El conteo de items legendarios devolvía un resultado incorrecto y podía fallar.
**Encontrado:** El bucle usaba `<=` y accedía a un índice fuera del array.
**Corregido:** El bucle ahora termina en el último índice válido.

---

## Ticket 4 → Reporte #4519

**Reportado:**
**Reportado:** Un monstruo sin drops mostraba un error en vez de 0%.
**Encontrado:** La división entre cero producía `NaN` cuando no había intentos.
**Corregido:** La función devuelve 0 antes de calcular el promedio si el array está vacío.

---

## 💎 Ticket Bonus (si lo resolviste)

**Encontrado:**
**Encontrado:** `sort` ordenaba directamente el array recibido y cambiaba su orden original.
**Corregido:** La función ordena una copia y deja intacta la entrada.
