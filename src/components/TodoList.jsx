export const TodoList = ({ pirkiniuSrasas }) => {
  return (
    <>
      <h2>Prikiniu sarašas</h2>
      <ul>
        {/* 1- rasom elemento pavadinima kuri norime atvaizduoti */}
        {/* 2- rasom masyvo arba objekto indeksa toks kaip 0, 1, 2 */}
        {pirkiniuSrasas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};
