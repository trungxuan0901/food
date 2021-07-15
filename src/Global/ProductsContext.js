import React, { createContext, useState } from 'react';
export const ProductsContext = createContext()

const ProductsContextProvider = (props) => {
    const [products] = useState([
        {
            id: "1",
            title: "Burger King",
            price: 5,
            rating: 4,
            image: './images/Burger.jpeg'
        },
        {
            id: "2",
            title: "Texas Chicken",
            price: 12,
            rating: 5,
            image: './images/Texaschicken.jpg'
        },
        {
            id: "3",
            title: "Beefsteak",
            price: 20,
            rating: 5,
            image: './images/Beefsteak.png'
        },
        {
            id: "4",
            title: "Apple Pie",
            price: 6,
            rating: 4,
            image: './images/Applepie.jpg'
        },
        {
            id: "5",
            title: "Falafel",
            price: 4,
            rating: 2,
            image: './images/Falafel.jpg'
        },
        {
            id: "6",
            title: "Taco",
            price: 9,
            rating: 5,
            image: './images/Taco.jpg'
        },
        {
            id: "7",
            title: "Pizza",
            price: 15,
            rating: 3,
            image: "./images/Pizza.jpg"
        },
        {
            id: "8",
            title: "Ceviche",
            price: 11.95,
            rating: 3,
            image: './images/Ceviche.jpg'
        },
        {
            id: "9",
            title: "Moqueca",
            price: 25,
            rating: 3,
            image: './images/Moqueca.jpg'
        },
        {
            id: "10",
            title: "The Merry Dancer",
            price: 8,
            rating: 4,
            image: './images/Themerrydancer.png'
        },
        {
            id: "11",
            title: "Bow Tie",
            price: 6,
            rating: 3,
            image: './images/Bowtie.jpg'
        },
        {
            id: "12",
            title: "Danish Sunrise",
            price: 7.49,
            rating: 4,
            image: './images/Danishsunrise.jpg'
        },
        {
            id: "13",
            title: "Fruit Beverage",
            price: 5,
            rating: 3,
            image: './images/Fruitbeverage.jpg'
        },
        {
            id: "14",
            title: "Summer Peach Tea",
            price: 4.99,
            rating: 5,
            image: './images/Summerpeachtea.jpg'
        },
        {
            id: "15",
            title: "Glühwein",
            price: 5,
            rating: 4,
            image: './images/Gluhwein.jpg'
        },
        {
            id: "16",
            title: "Orange Juice",
            price: 4,
            rating: 4,
            image: './images/Orangejuice.jpg'
        }
    ])
    return (
        <ProductsContext.Provider value={{ products: [...products] }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;
