import React from "react";
const Uppdateproduct = (props) => {
  return (
    <div>
      <div>
        <div class="update">
          <h2> update product</h2>
          <input
            id="name"
            className="form-group"
            autocomplete="off"
            defaultValue={props.element.name}
            type="text"
          />
          <input
            id="price"
            className="form-group"
            autocomplete="off"
            defaultValue={props.element.price}
            type="price"
          />
          <input
            id="desc"
            className="form-group"
            autocomplete="off"
            defaultValue={props.element.description}
            type="text"
          />

          <input
            id="cat"
            className="form-group"
            autocomplete="off"
            defaultValue={props.element.categories}
            type="text"
          />
          <input
            id="img"
            className="form-group"
            autocomplete="off"
            defaultValue={props.element.imageUrl}
            type="text"
          />
          <button
            className="button3"
            onClick={() => {
              props.uppdateproduct(props.element._id, {
                name: document.getElementById("name").value,
                price: document.getElementById("price").value * 1,
                description: document.getElementById("desc").value,
                categories: document.getElementById("cat").value,
                imageUrl: document.getElementById("img").value,
              });
            }}
          >
            Update
          </button>
        </div>
        <button id="back_button" onClick={()=>props.switchView("ProductsListasadmin")}>

          <span>Back</span>
        </button>
      </div>
    </div>
  );
};

export default Uppdateproduct;
