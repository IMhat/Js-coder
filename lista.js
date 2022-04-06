let newProducto = document.getElementById('todo');
let btn_agregar = document.getElementById('addTodo');
let lista= document.getElementById('todoList');

mostrar_lista()

function mostrar_lista() {

    for (let i = 0 ;i < localStorage.length ; i++ ){

        let key = localStorage.key(i);
        let item = localStorage.getItem(key);

        addProducto(item);


    }
}





function agregar_nuevo_producto(item){

    if (item) {
        addProducto(item);
        let indice = localStorage.length;
        localStorage.setItem(indice.toString, item.toString());

    } else {
        alert("El `Producto` esta vacio")
    }
}



function addProducto(item){

    let li = document.createElement("li");
    li.textContent = item ;

    li.addEventListener("click", ()=> {

        if (li.style.textDecoration === "line-through") {
            li.style.textDecoration = "none"
        } else {
            li.style.textDecoration = "line-through";
        }
    })

    lista.appendChild(li);

}

btn_agregar.addEventListener("click", ()=> {


    let dato = newProducto.value ;
    addProducto(dato);
    newProducto.value = "";


})

newProducto.addEventListener("keypress",(event) => {

    if (event.keyCode == 13) {

        let dato = newProducto.value ;
        addProducto(dato);
        newProducto.value = "";
    }
})