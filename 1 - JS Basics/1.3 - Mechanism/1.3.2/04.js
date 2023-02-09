// Crea una función que muestre los números pares del 1 al 100
const showEven = () => {
  // 👇🏻 Añade tu lógica aquí (Incluye un condicional dentro del bucle)
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  // 👆🏻
  }
};

showEven();
