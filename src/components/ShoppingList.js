import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterText, setFilterText] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleFilterChange(event) {
    setFilterText(event.target.value);
  }

  function addNewItem(newItem) {
    handleNewItem([...items, newItem])
  }

  const itemsToDisplay = items
    .filter((item) => item.name.toUpperCase().includes(filterText.toUpperCase()))
    .filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    });

  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={addNewItem}
      />
      <Filter
        category={selectedCategory}
        onCategoryChange={handleCategoryChange}
        search={filterText}
        onSearchChange={handleFilterChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
