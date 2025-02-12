import { Greetings } from './components/Greetings';
import { UserStatus } from './components/UserStatus';
import { InputWithState } from './components/InputWithState';
import { Counter } from './components/Counter';
import { Notification } from './components/Notification';
import { ToggleButton } from './components/ToggleButton';

function App() {
  // API grazins user duomenis
  const user = {
    userName: 'Rolandas123',
    isLoggedIn: true,
    unreadMessages: 0,
  };



  return (
    <>
      <Greetings userName={user.userName} />
      <UserStatus isUserLoggedIn={user.isLoggedIn} />
      <InputWithState />
      <Counter />
      <Notification unreadMessages={user.unreadMessages} />
      <ToggleButton />
    </>
  );
}

export default App;
