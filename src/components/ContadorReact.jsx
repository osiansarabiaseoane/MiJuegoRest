import { useState } from 'react';

export default function ContadorReact() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
      <button onClick={() => setContador(0)}>Reiniciar</button>
    </div>
  );
}