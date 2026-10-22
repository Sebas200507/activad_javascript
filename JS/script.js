function sumar(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let suma = num1+num2;

    document.getElementById("resultado").value = `${suma}`;
}

function resta(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resta = num1-num2;

    document.getElementById("resultado").value = `${resta}`;
}

function multi(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let mul = num1*num2;

    document.getElementById("resultado").value = `${mul}`;
}

function divi(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let div = num1/num2;

    document.getElementById("resultado").value = `${div}`;
}

function calcular(){
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let precio_unitario = parseInt(document.getElementById("precio_uni").value);
    let subtotal = (precio_unitario * cantidad);
    let iva = 0.19 * subtotal;
    let descuento = 0;

    if (cantidad > 10){
        descuento = subtotal*0.05;
    }

    let total_pagar = subtotal - descuento + iva;

    document.getElementById('subtotal').value = `${subtotal.toLocaleString()}`;
    document.getElementById('IVA').value = `${iva.toLocaleString()}`;
    document.getElementById('descuento').value = `${descuento.toLocaleString()}`;
    document.getElementById('total_pagar').value = `${total_pagar.toLocaleString()}`;
};

function c_promedio(){
    let nota1 = parseInt(document.getElementById('n1').value);
    let nota2 = parseInt(document.getElementById('n2').value);
    let nota3 = parseInt(document.getElementById('n3').value);
    let promedio = (nota1+nota2+nota3) / 3;

    document.getElementById('promedio').value = `${promedio.toFixed(1)}`;
}

function salario(){
    let horas_trabajadas = parseInt(document.getElementById('horas').value);
    let valor_h = parseInt(document.getElementById('valor_hora').value);
    let total_pago = horas_trabajadas * valor_h;

    document.getElementById('pagar').value = `${total_pago.toFixed()}`;
}

function presupuesto(){
    let n_invitados = parseInt(document.getElementById('invitado').value);
    let comida_invitados = parseInt(document.getElementById('comida').value);
    let bebidas = parseInt(document.getElementById('bebida').value);
    let decoracion = parseInt(document.getElementById('decoracion').value);
    let musica_animacion = parseInt(document.getElementById('musica').value); 
    let propinas = parseInt(document.getElementById('propina').value);
    
    let comida_total = n_invitados*comida_invitados;
    let bebida_total = n_invitados*bebidas;
    let subtotal = comida_invitados + bebida_total + decoracion + musica_animacion;
    let propina_total = subtotal*(propinas/100);
    let pago_total = subtotal+propina_total;
    let costo_invitados = pago_total / n_invitados;

    document.getElementById('comida_total').innerText = `${comida_total.toLocaleString()}`;
    document.getElementById('bebida_total').innerText = `${bebida_total.toLocaleString()};`
    document.getElementById('decoracion_total').innerText = `${decoracion.toLocaleString()}`;
    document.getElementById('musica_total').innerText = `${musica_animacion.toLocaleString()}`;
    document.getElementById('subtotal').innerText = `${subtotal.toLocaleString()}`;
    document.getElementById('propina_total').innerText = `${propina_total.toLocaleString()}`;
    document.getElementById('total_general').innerText = `${pago_total.toLocaleString()}`;
    document.getElementById('costo_invitados').innerText = `${costo_invitados.toLocaleString()}`;
};