import { PhoneCard } from './PhoneCard';

export const PhoneList = () => {
  const phones = [
    {
      id: 1,
      name: 'Samsung Galaxy S8',
      description: 'Puikus Samsung telefonas',
      price: '350',
      isOnSale: true,
    },
    {
      id: 2,
      name: 'Iphone 15',
      description: 'Puikus Iphone telefonas',
      price: '400',
      isOnSale: false,
    },
    {
      id: 3,
      name: 'Iphone 8',
      description: 'Vaikams Iphone telefonas',
      price: '450',
      isOnSale: false,
    },
  ];

  return (
    <div>
      <h1>Tai mano mėgstamaiausiu telefonu sarasas</h1>
      {phones.map((phone, index) => (
        <PhoneCard key={index} phone={phone} />
      ))}
      <h2>Is viso turiu: {phones.length} telefonus!</h2>
    </div>
  );
};
