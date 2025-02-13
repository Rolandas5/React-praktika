export const Product = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.isOnsale ? 'Siuo metu yra akcija!' : ''}</p>
    </div>
  );
};
