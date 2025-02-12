export const UserStatus = ({ isUserLoggedIn }) => {
  return (
    <div>
      <p>{isUserLoggedIn ? 'Esate Prisijunges!' : 'Esate Neprisijunges!'}</p>
    </div>
  );
};
