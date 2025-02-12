// Sukuriame komponenta, kuris tures paragrafa ir mygtuka, paragrafe atvaizduosime skaiciu, su mygtuku galime padidinti skaiciu. Nereikia Props.
import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Pirmas darbelis</h1>
      <p>Skaičius: {count}</p>
      <button onClick={() => setCount(count + 1)}>Didinti</button>
    </div>
  );
};
