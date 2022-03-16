import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [formData, setFormData] = useState({
    id: uuid(), name: "", category: "Produce",
  })

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value, })
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit(formData)
    setFormData({
      id: uuid(), name: "", category: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleInputChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
