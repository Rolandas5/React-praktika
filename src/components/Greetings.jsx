// 1 - komponentu pavadinimai prasideda didziaja raide
// 2 - props - yra case-sensitive turim butinai aprasyti taip kaip paduodam is tevinio komponento

export const Greetings = ({ userName }) => {
  const greeting = 'Sveiki!';

  return (
    <h1>
      {greeting}, {userName}
    </h1>
  );
};
