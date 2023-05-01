const Items = (props) => {
  let { items, del, increaseQuantity, decreaseQuantity } = props;

  let length = items.length;

  const ListItem = length ? (
    items.map((item, index) => {
      if (item.quantity < 1) {
        return null;
      } else {
        return (
          <div key={index} className="item">
            <p>{item.product}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <p className="increment" onClick={() => increaseQuantity(item.id)}>
              +
            </p>
            <p className="decrement" onClick={() => decreaseQuantity(item.id)}>
              -
            </p>
            <p className="delete" onClick={() => del(item.id)}>
              &times;
            </p>
          </div>
        );
      }
    })
  ) : (
    <div className="text">There are no items, Try to add some.</div>
  );

  return (
    <div>
      <div className="header item">
        <p>Product</p>
        <p>Price</p>
        <p>Qunatity</p>
        <p>Increment</p>
        <p>Decrement</p>
        <p>Delete</p>
      </div>
      {ListItem}
    </div>
  );
};

export default Items;
