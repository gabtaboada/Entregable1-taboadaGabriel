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

const OpcionesVerduras = ["Lechuga", "Tomate", "Cebolla", "Rúcula", "Pepino", "Zanahoria"]
const OpcionesToppings = ["Cebolla caramelizada", "Huevo frito", "Panceta"]



const src =""
switch (Combo.nombre) {
            case "CheeseBurger":
                src = "./assets/img/cheese-burger.webp"
                break
            case "BlueBurger":
                src = "./assets/img/blue-burger.webp"
                break
            case "VeganBurger":
                src = "./assets/img/vegan-burger.webp"
                break
            case "BaconBurger":
                src = "./assets/img/bacon-burger.webp"
                break
            default:
        }



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