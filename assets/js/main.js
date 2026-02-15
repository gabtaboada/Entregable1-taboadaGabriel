// correcion nombres variables camelCase. Poner mayusculas primer letra

/* ////////////////////////////////////  */
const Menu = [1, 2, 3]
const CombosArmados = [
    {
        id: 1,
        nombre: "CheeseBurger",
        precio: 18000,
    },
    {
        id: 2,
        nombre: "BlueBurger",
        precio: 19500,
    },
    {
        id: 3,
        nombre: "VeganBurger",
        precio: 18750,
    },
    {
        id: 4,
        nombre: "BaconBurger",
        precio: 19000,
    },

]

const OpcionesVerduras = ["Lechuga", "Tomate", "Cebolla", "Rúcula", "Pepino", "Zanahoria"]
const OpcionesToppings = ["Cebolla caramelizada", "Huevo frito", "Panceta"]

function BorrarContenido(SeccionABorrar){
    const BorrarSeccion = document.getElementById(SeccionABorrar)   
    BorrarSeccion.innerHTML =""      
}
function RenderRenderFinalizar(IdCombo){
    console.log("entra a finalizar pedido")
    const borrar = document.getElementById("Btn-ContinuarAFinalizar")
    borrar.parentElement.remove()
    const MenuSeleccionTopping = document.getElementById("Toppings-seleccion")    
    const ConfirmarSeleccion = document.getElementById("Confirmar-seleccion")
    const VerdurasSeleccionadas = document.querySelectorAll(".check-verduras:checked")
    const ToppingsSeleccionadas = document.querySelectorAll(".Check-Toppings:checked")

    const card = document.createElement("div")
    card.innerHTML = `<button id="Confirmar" class="m-2 CombosClase btn btn-secondary">Agregar combo</button>`
    ConfirmarSeleccion.appendChild(card)
    AgregarCombo()
}
function RenderSeleccionToppings(IdCombo,OpcionesToppings){
    const borrar = document.getElementById("Btn-ContinuarAtoppings")
    if(borrar)
    {
        borrar.parentElement.remove()
    }
    
    const MenuSeleccionTopping = document.getElementById("Toppings-seleccion")
    MenuSeleccionTopping.innerHTML =""//borro el contenedor por si vuelve a tocar  nuevo pedido
    MenuSeleccionTopping.className ="d-flex flex-column"
    MenuSeleccionTopping.innerHTML = "<p>Precio por cada uno : $600</p>"
    for (const Topping of OpcionesToppings) {
        const card = document.createElement("div")
        const input = document.createElement("input")
        input.type = "checkbox"
        input.value = Topping
        input.id = "Topping"
        input.className = "Check-Toppings"

        const Label = document.createElement("label")
        Label.htmlFor = input.id
        Label.textContent = Topping

        card.appendChild(input)
        card.appendChild(Label)
        MenuSeleccionTopping.appendChild(card)                 
    }
    // boton continuar a finalizar pedido
    const card = document.createElement("div")   
    card.innerHTML = `<button id="Btn-ContinuarAFinalizar" class="m-2 CombosClase btn btn-secondary">Continuar</button>`
    
    MenuSeleccionTopping.appendChild(card) 
    const boton = document.getElementById("Btn-ContinuarAFinalizar")
    boton.onclick = () => {
        RenderRenderFinalizar(IdCombo)
    } 
    const Checks = document.querySelectorAll(".Check-Toppings")
    Checks.forEach( (check) => {
        check.addEventListener("change", () => {
            BorrarContenido("Confirmar-seleccion")
            //este if pregunta si existe el boton continuar a finalizar, xq lo borra cuando detecta al continuar para finalizar
            if(!document.getElementById("Btn-ContinuarAFinalizar")){
                const card = document.createElement("div")   
                card.innerHTML = `<button id="Btn-ContinuarAFinalizar" class="m-2 CombosClase btn btn-secondary">Continuar</button>`
                MenuSeleccionTopping.appendChild(card)      
                const boton = document.getElementById("Btn-ContinuarAFinalizar")
                boton.onclick = () => {
                    RenderSeleccionToppings(IdCombo,OpcionesToppings)
                }   
            }            
        })
    }) 
}    

function RenderSeleccionVerdura(IdCombo,OpcionesVerduras){
    const MenuSeleccionVerdura = document.getElementById("Verduras-seleccion")
    MenuSeleccionVerdura.innerHTML =""//borro el contenedor por si vuelve a tocar  nuevo pedido
    MenuSeleccionVerdura.innerHTML ="<p>Puede agregar hasta un maximo de 3 verduras.Precio por cada uno: $1000</p>"
    MenuSeleccionVerdura.className = "d-flex flex-column"
    const MensajeError = document.createElement("span")
    MensajeError.textContent = "No se puede elegir mas de 3 verduras"
    MensajeError.className = "Mensaje-Error Oculto"
    MenuSeleccionVerdura.appendChild(MensajeError)            
    for (const verdura of OpcionesVerduras) {
        const card = document.createElement("div")
        const input = document.createElement("input")
        input.type = "checkbox"
        input.value = verdura
        input.id = "verdura"
        input.className = "check-verduras"

        const Label = document.createElement("label")
        Label.htmlFor = input.id
        Label.textContent = verdura


        card.appendChild(input)
        card.appendChild(Label)
        MenuSeleccionVerdura.appendChild(card)        
    }

    const Checks = document.querySelectorAll(".check-verduras")
    const VerdurasSeleccionadas = []
    Checks.forEach( (check) => {
        check.addEventListener("change", () => {
            BorrarContenido("Toppings-seleccion")
            BorrarContenido("Confirmar-seleccion")
            //este if pregunta si existe el boton continuar a toppings, xq lo borra cuando detecta al continuar para toppings
            if(!document.getElementById("Btn-ContinuarAtoppings")){
                const card = document.createElement("div")   
                card.innerHTML = `<button id="Btn-ContinuarAtoppings" class="m-2 CombosClase btn btn-secondary">Continuar</button>`
                MenuSeleccionVerdura.appendChild(card)      
                const boton = document.getElementById("Btn-ContinuarAtoppings")
                boton.onclick = () => {
                    RenderSeleccionToppings(IdCombo,OpcionesToppings)
                }   
            }
            const Seleccionadas = document.querySelectorAll(".check-verduras:checked")
            const CantidadVerdurasSeleccionadas = Seleccionadas.length
            if( CantidadVerdurasSeleccionadas > 3 ){
                check.checked = false
                const Mensaje = document.querySelector(".Mensaje-Error")
                Mensaje.classList.remove("Oculto")  
                Mensaje.classList.add("Error")           
            }else{
                const Mensaje = document.querySelector(".Mensaje-Error")
                if(Mensaje.classList == "Error"){
                    Mensaje.classList.remove("Error") 
                }
                VerdurasSeleccionadas.push(check.value)
                Mensaje.classList.add("Oculto") 
            }
        })
    })
    
    // Boton Continuar a toppings
    
    
    const card = document.createElement("div")   
    card.innerHTML = `<button id="Btn-ContinuarAtoppings" class="m-2 CombosClase btn btn-secondary">Continuar</button>`
    MenuSeleccionVerdura.appendChild(card) 
    
    const boton = document.getElementById("Btn-ContinuarAtoppings")
    boton.onclick = () => {
        RenderSeleccionToppings(IdCombo,OpcionesToppings)
    }    

}
function RenderSeleccionCombo(CombosArmados) {
    const MenuSeleccion = document.getElementById("Menu-seleccion")
    MenuSeleccion.innerHTML =""// borro el contenedor por si vuelve a tocar  nuevo pedido
    MenuSeleccion.className = "d-flex flex-column"
    MenuSeleccion.innerHTML = "<p class='d-flex flex-column'>Seleccione el combo</p><div class='d-flex flex-column' id='ContenedorBurger'></div>"
    const Burgercontenedor = document.getElementById("ContenedorBurger")
    for (const Combo of CombosArmados) {
        const card = document.createElement("div")
        card.innerHTML = `<button id="${Combo.id}" class="m-2 CombosClase btn btn-success">${Combo.nombre} </button>`
        card.className = "d-flex flex-row justify-content-between align-items-center m-2"
        
        const img = document.createElement("img")
        switch (Combo.nombre) {
                case "CheeseBurger":
                    img.src = "./assets/img/cheese-burger.webp"
                    img.alt = Combo.nombre
                    break
                case "BlueBurger":
                    img.src = "./assets/img/blue-burger.webp"
                    img.alt = Combo.nombre
                    break                   
                case "VeganBurger":
                    img.src = "./assets/img/vegan-burger.webp"
                    img.alt = Combo.nombre
                    break
                case "BaconBurger":
                    img.src = "./assets/img/bacon-burger.webp"
                    img.alt = Combo.nombre
                    break        
                default:
            }

        img.className = "img-combo"
        card.appendChild(img)
        Burgercontenedor.appendChild(card)
    }
        const Botones = document.querySelectorAll(".CombosClase")
        Botones.forEach ( (boton) => {
                boton.onclick = (e) => {
                    BorrarContenido("Verduras-seleccion")
                    BorrarContenido("Toppings-seleccion")
                    BorrarContenido("Confirmar-seleccion")
                    const BotonId = e.currentTarget.id
                    RenderSeleccionVerdura(BotonId,OpcionesVerduras)
                }
        })
        
}
function MenuOpcion(opcion, CombosArmados) {
    switch (opcion) {
        case 1:
            console.log("nuevo pedido")
            RenderSeleccionCombo(CombosArmados)
            break
        case 2:
            console.log("Mostrar pedido")
            break
        case 3:
            console.log("Salir del sistema")
            break
        default: alert("Revisar codigo porque el menu esta hardcodeado, en este momento es un array con valores 1,2,3")
    }
}
function RenderMenu(MenuArray, CombosArmados) {
    const Contenedor = document.getElementById("Menu-contenedor")
    for (const OpcionElegida of MenuArray) {
        const card = document.createElement("div")
        switch (OpcionElegida) {
            case 1:
                card.innerHTML = `<button id="${OpcionElegida}" class="m-2 btn btn-dark">Nuevo Pedido</button>`
                break
            case 2:
                card.innerHTML = `<button id="${OpcionElegida}" class="m-2 btn btn-dark">Ver Pedido</button>`
                break
            case 3:
                card.innerHTML = `<button id="${OpcionElegida}" class="m-2 btn btn-dark ">Salir</button>`
                break
            default: alert("Revisar codigo porque el menu esta hardcodeado, en este momento es un array con valores 1,2,3")
        }
        Contenedor.appendChild(card)
        const boton = card.querySelector("button")
        boton.onclick = () => {
            MenuOpcion(OpcionElegida, CombosArmados)
        }
    }
}
RenderMenu(Menu, CombosArmados)

combopedido = CombosArmados[1].nombre
// Clase para crear el combo
class Combo {
    static id = 0
    constructor(combopedido, verdura1, verdura2, verdura3, toppings1, toppings2, toppings3, queso, precio) {
        this.id = ++Combo.id,
        this.CombosArmados = combopedido,
        this.verdura1 = verdura1,
        this.verdura2 = verdura2,
        this.verdura3 = verdura3,
        this.toppings1 = toppings1,
        this.toppings2 = toppings2,
        this.toppings3 = toppings3,
        this.queso = queso,
        this.precio = precio
    }

}

const ComboPedido = new Combo(combopedido, "verdura1", "verdura2", "verdura3", "toppings1", "toppings2", "toppings3", "queso", 1200)
