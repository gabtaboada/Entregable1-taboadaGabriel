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
switch (opcion) {
        case "CheeseBurger":
            console.log("nuevo pedido")
            RenderSeleccionCombo(CombosArmados)
            break
        case "BlueBurger":
            console.log("Mostrar pedido")
            break
        case "VeganBurger":
            console.log("Salir del sistema")
            break
        case "BaconBurger":
            console.log("Salir del sistema")
            break            
        default:
            
    }