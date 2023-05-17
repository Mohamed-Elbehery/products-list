const Total = ({ items }) => {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].quantity >= 1) {
      total += parseFloat(items[i].price * items[i].quantity);
    }
  }
  return (
    <div>
      <p className="text">Total Price: {total}</p>
    </div>
  );
};

export default Total;
