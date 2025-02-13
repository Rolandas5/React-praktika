import { useState } from 'react';

// Komponentas - funkcija: ' InputWithState ' - visada privalo buti rasomas is didziosios raides
export const InputWithState = () => {
  // 1. inputValue - konstantos reiksme
  // 2. setInputValue - funkcija, kuri nustato konstantos reiksme
  const [inputValue, setInputValue] = useState('');
  // reaktyvi konstanta, nes keicia jos reiksmę
  // ar sis dalykas turi pasikeisti, tada jis turi buti reaktyvus ir tada privaloma nau
  const [inputValue2, setInputValue2] = useState('');
  const [age, setAge] = useState('');
  const [bornDate, setBornDate] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Iveskite savo varda!"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <input
        type="text"
        placeholder="Iveskite savo pavarde!"
        onChange={(event) => setInputValue2(event.target.value)}
      />
      <input
        type="date"
        placeholder="Iveskite savo amziu!"
        onChange={(event) => setBornDate(event.target.value)}
      />
      <input
        type="number"
        placeholder="Iveskite savo amziu!"
        onChange={(event) => setAge(event.target.value)}
      />
      <p>Vardas: {inputValue}</p>
      <p>Pavarde: {inputValue2}</p>
      <p>Pavarde: {age}</p>
      {age >= 20 && <button>Gali pirkti alkoholį</button>}
      {bornDate >= 20 && <button>Gali pirkti alkoholį</button>}
    </div>
  );
};
