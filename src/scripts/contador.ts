let contador = 0;
const boton = document.getElementById('btn') as HTMLButtonElement;
const texto = document.getElementById('cont') as HTMLParagraphElement;

boton.addEventListener('click', () => {
  contador++;
  texto.textContent = String(contador);
});

export {};