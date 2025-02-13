import { Greetings } from './components/Greetings';
import { UserStatus } from './components/UserStatus';
import { InputWithState } from './components/InputWithState';
import { Counter } from './components/Counter';
import { Notification } from './components/Notification';
import { ToggleButton } from './components/ToggleButton';
import { Product } from './components/Product';
import { TodoList } from './components/TodoList';
import { PhoneList } from './components/PhoneList/PhoneList';
import { MovieList } from './components/MovieList';
import { CarBrands } from './components/CarBrands';
import { ParentComponent } from './components/ParentComponent/ParentComponent';

function App() {
  // API grazins user duomenis
  const user = {
    userName: 'Rolandas123',
    isLoggedIn: true,
    unreadMessages: 0,
  };

  const product = {
    name: 'Iphone 15',
    isOnsale: true,
  };

  const pirkiniuSrasas = [
    'reikia nupirkti pienio',
    'reikia nupirkti desros',
    'reikia nupirkti pieno',
  ];

  const cars = [
    {
      marke: 'Audi',
      modelis: 'A4',
      metai: 2020,
    },
    {
      marke: 'Audi',
      modelis: 'Q5',
      metai: 2019,
    },
    {
      marke: 'BMW',
      modelis: '3 Series',
      metai: 2021,
    },
    {
      marke: 'BMW',
      modelis: 'X5',
      metai: 2018,
    },
    {
      marke: 'Mercedes-Benz',
      modelis: 'C-Class',
      metai: 2020,
    },
  ];

  return (
    <>
      <Greetings userName={user.userName} />
      <UserStatus isUserLoggedIn={user.isLoggedIn} />
      <InputWithState />
      <Counter />
      <Notification unreadMessages={user.unreadMessages} />
      <ToggleButton />
      <Product product={product} />
      <TodoList pirkiniuSrasas={pirkiniuSrasas} />
      <PhoneList />
      <MovieList />
      <CarBrands cars={cars} />
      <ParentComponent />
    </>
  );
}

export default App;
