const Order = ({ onAlph, onRating, onCreation, select }) => {

  return (
    <>
    <select value={select.alph} name='' id='order/alphabetically' onChange={onAlph}>
      <option>Alphabetical</option>
      <option>Ascending</option>
      <option>Descending</option>
    </select>

    <select value={select.rating} name='' id='order/rating' onChange={onRating}>
      <option>Rating</option>
      <option>Ascending</option>
      <option>Descending</option>
    </select>

    <select value={select.source} name='' id='order/created/existing' onChange={onCreation}>
      <option>Source</option>
      <option>Existing</option>
      <option>Created</option>
    </select>
    </>
  );
};

export default Order;
