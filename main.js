const pizzas = [
  {
    id: 1,
    nombre: "Pizza Fugazza ",
    precio: 600,
    ingredientes: ["Cebolla", "Mozzarella", "Condimentos"],
  },
  {
    id: 2,
    nombre: "Pizza Calabreza",
    precio: 800,
    ingredientes: ["Tomate", "Mozzarella", "Calabreza"],
  },
  {
    id: 3,
    nombre: "Pizza Jamón",
    precio: 1350,
    ingredientes: ["Jamón", "Mozzarella", "Morrón"],
  },
];

// a)
const pizzasIdImpar = pizzas.filter((pizza) => pizza.id % 2 !== 0);
console.log("Pizzas con ID impar:");
console.log(pizzasIdImpar.join(" "));

// b)
const pizzaMenor600 = pizzas.some((pizza) => pizza.precio < 600);
console.log(
  "¿Hay alguna pizza que valga menos de $600?",
  pizzaMenor600 ? "Sí" : "No"
);

// c)
console.log("Nombre de las pizzas con sus precios:");
for (let i = 0; i < pizzas.length; i++) {
  const pizza = pizzas[i];
  console.log(`${pizza.nombre}: $${pizza.precio}`);
}

// d)
console.log("Ingredientes de cada pizza:");
for (let i = 0; i < pizzas.length; i++) {
  const pizza = pizzas[i];
  console.log(`Ingredientes de ${pizza.nombre}:`);
  console.log(pizza.ingredientes.join(" "));
}
