import React, { useState } from 'react';
import Menu from './Menu';
import items from './data';
import Categories from './Categories';
import '../index.css';

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function DetailsProduct() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main style={{
      backgroundImage: `url("./images/Bgmenu.jpg")`,
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default DetailsProduct;
