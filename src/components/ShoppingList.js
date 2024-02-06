import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  // State to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");
  // State to manage the search text
  const [searchText, setSearchText] = useState("");

  // Function to handle category change
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Function to handle search text change
  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }

  // Filter items based on the selected category and search text
  const itemsToDisplay = items.filter((item) => {
    // Check if the item's category matches the selected category
    const categoryMatch =
      selectedCategory === "All" || item.category === selectedCategory;
    // Check if the item's name includes the search text
    const nameMatch = item.name.toLowerCase().includes(searchText.toLowerCase());
    // Include the item in the display if it matches both category and search text
    return categoryMatch && nameMatch;
  });

  return (
    <div className="ShoppingList">
      {/* Render the ItemForm component for adding new items */}
      <ItemForm />
      {/* Render the Filter component for filtering items */}
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {/* Map through filtered items and render each Item component */}
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
