import React, { Component } from "react";

class addItem extends Component {
  state = {
    product: "",
    price: "",
    quantity: 1,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({
      product: "",
      price: "",
    });
  };

  render() {
    return (
      <div className="item">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.product}
            placeholder="Enter Product"
            name="product"
            onChange={this.handleChange}
            required
          />
          <input
            type="number"
            value={this.state.price}
            placeholder="Enter Price"
            name="price"
            onChange={this.handleChange}
            required
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default addItem;
