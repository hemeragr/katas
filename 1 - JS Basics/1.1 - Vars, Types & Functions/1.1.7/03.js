// Muestra la longitud de los siguientes textos por consola

const text1 = "Hola"; // 4
const text2 = "Que tal"; // 7
const text3 = `   EY    `; // 9

// 👇🏻 Añade aqui los logs de la longitud de los textos
console.log(text1.length);
console.log(text2.length);
console.log(text3.length);

// 👆🏻

// 👀 Te animas a mostrar true si la longitud del texto es mayor a 5 o false en el caso contrario?
function show(text) {
  if (text.length > 5) {
    return false;
  }
  return true;
}

show();
