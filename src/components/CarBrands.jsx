// 2 užduotis: Sukurkite komponentą, kuris atvaizduoja automobilių markes, modelius bei metus lentelės pavidalu.
// Naudokite .map() metodą, kad atvaizduotumėte kiekvieną automobilį kaip lentelės eilutę.
// Automobilių duomenys turi būti perduodami per komponento props is tevinio komponento.

export const CarBrands = ({ cars }) => {
  return (
    <div>
      <h2>Automobilių sąrašas:</h2>
      {cars.map((car, index) => (
        <div key={index} className="car-card">
          <p>Markė: {car.marke}</p>
          <p>Modelis: {car.modelis}</p>
          <p>Metai: {car.metai}</p>
        </div>
      ))}
    </div>
  );
};
