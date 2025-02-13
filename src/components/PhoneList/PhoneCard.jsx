export const PhoneCard = ({ phone }) => {
  return (
    <div className="phone-card">
      <h3>{phone.name}</h3>
      <p>{phone.description}</p>
      <p>Kaina: {phone.price}$</p>
      <p className="phone-card-discount">
        {phone.isOnSale ? 'Sitam telefonui yra akcija!' : ''}
      </p>
    </div>
  );
};
