// Sukuriame komponenta, kuris atvaizduos teksta ar turiu neperskaitytu pranesimu paprastame paragrafe, turim panaudoti Props.
export const Notification = ({ unreadMessages }) => {
  return (
    <div>
      <h1>Antras darbelis</h1>
      <p>
        {unreadMessages
          ? `Turiu ${unreadMessages} neperskaitytus pranesimu!`
          : 'Neturiu neperskaitytų pranesimu!'}
      </p>
    </div>
  );
};
