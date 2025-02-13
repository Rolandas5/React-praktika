// 1 užduotis: Sukurkite komponentą, kuris atvaizduoja jūsų mėgstamiausių filmų sąrašą nerikiuotame sąraše.
// Filmų sąrašas turi būti aprašytas pačiame komponente.
export const MovieList = () => {
  const filmuSarasas = [
    'Tadas',
    'Blinda',
    'Pradžia',
    'Redirected',
    'Emilija iš Laisvės alėjos',
    'Zero III',
  ];

  return (
    <>
      <h2>Filmų sąrašas:</h2>
      <ul>
        {filmuSarasas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
