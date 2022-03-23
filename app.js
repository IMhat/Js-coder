//Ciclo For

//for (let i = 1; i <=10; i++) {
 //   console.log(`iteracion ${i}`)
    
//}
//console.table(`Fin del ciclo`)
//alert(`El ciclo llego a su fin`)



//SIMULADOR INTERACTIVO
  // CALCULAR NOTA FINAL ALUMNOS 
  // leer 
  // p = (n1+n2+n3) / 3
  // escribir p

function calcular_promedio(n1, n2, n3) {
    let n1 = parseInt(document.getElementById("nota1").value);
    let n2 = parseInt(document.getElementById("nota2").value);
    let n3 = parseInt(document.getElementById("nota3").value);

    let p = (n1 + n2 + n3) / 3;
    document.getElementById("promedio").innerText = p;
}