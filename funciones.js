function generarConceptos() {
  const num = parseInt(document.getElementById("numConceptos").value);
  const cont = document.getElementById("conceptosContainer");
  cont.innerHTML = "<label>Conceptos:</label>";
  for (let i = 0; i < num; i++) {
    agregarConcepto();
  }
}

function agregarConcepto() {
  const cont = document.getElementById("conceptosContainer");
  const div = document.createElement("div");
  div.className = "concepto";
  div.innerHTML = `
    <div class="remove" onclick="eliminarConcepto(this)">✖</div>
    <input type="number" placeholder="Cantidad" min="0" value="0" oninput="calcularImporte(this)">
    <input type="text" placeholder="Descripción">
    <input type="number" placeholder="Valor Unitario" min="0" value="0" step="0.01" oninput="calcularImporte(this)">
    <input type="number" placeholder="Importe" readonly value="0.00">
  `;
  cont.appendChild(div);
}

function eliminarConcepto(btn) {
  btn.parentElement.remove();
  calcularTotales();
}

function calcularImporte(element) {
  const concepto = element.parentElement;
  const cantidad = parseFloat(concepto.children[1].value) || 0;
  const valor = parseFloat(concepto.children[3].value) || 0;
  const importe = cantidad * valor;
  concepto.children[4].value = importe.toFixed(2);
  calcularTotales();
}

function calcularTotales() {
  const importes = document.querySelectorAll('.concepto input[readonly]');
  let subtotal = 0;
  importes.forEach(i => subtotal += parseFloat(i.value) || 0);
  const iva = subtotal * 0.16;
  const total = subtotal + iva;
  document.getElementById('subtotal').textContent = subtotal.toFixed(2);
  document.getElementById('iva').textContent = iva.toFixed(2);
  document.getElementById('total').textContent = total.toFixed(2);
}

