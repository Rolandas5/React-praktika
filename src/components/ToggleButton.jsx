// Sukuriame komponenta, kuris tures paragrafa ir mygtuka, kai bus paspaustas mygtukas paragrafas dingsta. Nereikia props.
import { useState } from 'react';

export const ToggleButton = () => {
  const [isVisible, setVisible] = useState(true);

  return (
    <div>
      <h1>Trečias darbelis</h1>
      {isVisible && <p>Šis paragrafas dingsta!</p>}
      <button onClick={() => setVisible(!isVisible)}>
        {isVisible ? 'Paslėpk' : 'Rodyk'}
      </button>
    </div>
  );
};
