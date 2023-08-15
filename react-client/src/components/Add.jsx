import React from "react";
const AddProduct = (props) => {
  return (
    <div>
    <div class="update">
      <h2> ADD product</h2>
      <input
        id="name"
        className="form-group"
        autocomplete="off"
        placeholder="Name:"
        type="text"
      />
      <input
        id="price"
        className="form-group"
        autocomplete="off"
        placeholder="price:"
        type="price"
      />
      <input
        id="desc"
        className="form-group"
        autocomplete="off"
        placeholder="description:"
        type="text"
      />

      <input
        id="cat"
        className="form-group"
        autocomplete="off"
        placeholder="category:"
        type="text"
      />
      <input
        id="img"
        className="form-group"
        autocomplete="off"
        placeholder="image url:"
        type="text"
      />
      <button
        className="button3"
        onClick={() => {
          props.addProduct({
            name: document.getElementById("name").value,
            price: document.getElementById("price").value * 1,
            description: document.getElementById("desc").value,
            categories: document.getElementById("cat").value,
            imageUrl: document.getElementById("name").value,
          });
        }}
      >
        ADD
      </button>

    </div>
    <button id="back_button" onClick={()=>props.switchView("ProductsListasadmin")}>
  <span>Back</span>
</button>
    </div>
  );
};

export default AddProduct;
