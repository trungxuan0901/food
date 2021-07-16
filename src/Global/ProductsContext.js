import React, { createContext, useState } from 'react'
export const ProductsContext = createContext()

const ProductsContextProvider = (props) => {
    const [products] = useState([
        {id: "1",title: "Burger King",price: 5,rating: 4,
        image: './images/Burger.jpeg'
        // image: 'https://images.foody.vn/res/g107/1069249/prof/s640x400/foody-upload-api-foody-mobile-hamburger-210314093231.jpg'
        },
        {id: "2",title: "Texas Chicken",price: 12,rating: 5,
        image: './images/Texaschicken.jpg'
        // image: 'https://images.foody.vn/res/g21/200013/prof/s640x400/foody-upload-api-foody-mobile-92-jpg-180831085011.jpg'
        },
        {id: "3",title: "Beefsteak",price: 20,rating: 5,
        image: './images/Beefsteak.png'
        // image: 'https://images.foody.vn/res/g94/935033/prof/s576x330/foody-upload-api-foody-mobile-5-190827162844.jpg'
        },
        {id: "4",title: "Apple Pie",price: 6,rating: 4,
        image: './images/Applepie.jpg'
        // image: 'https://storage.ettip.com/Upload/Images/Story/Official/84f93aac-10df-4b0f-ac08-85cca7f24e52.png'
        },
        {id: "5",title: "Falafel",price: 4,rating: 2,
        image: './images/Falafel.jpg'
        // image: 'https://www.hotforfoodblog.com/wp-content/uploads/2015/05/veganmushroomfalafelsliders_hotforfoodblog_filtered2-scaled.jpg'
        },
        {id: "6",title: "Taco",price: 9,rating: 5,
        image: './images/Taco.jpg'
        // image: 'https://images.foody.vn/res/g100/998480/prof/s640x400/foody-upload-api-foody-mobile-190-200214145506.jpg'
        },
        {id: "7",title: "Pizza",price: 15,rating: 3,
        image: "./images/Pizza.jpg"
        // image: 'https://images.foody.vn/res/g72/713626/prof/s576x330/foody-upload-api-foody-mobile-foody-upload-api-foo-190620093348.jpg'
        },
        {id: "8",title: "Ceviche",price: 11.95,rating: 3,
        image: './images/Ceviche.jpg'
        // image: 'https://healthyfitnessmeals.com/wp-content/uploads/2020/03/How-to-make-shrimp-ceviche-8.jpg'
        },
        {id: "9",title: "Moqueca",price: 25,rating: 3,
        image: './images/Moqueca.jpg'
        // image: 'https://images.foody.vn/res/g105/1043542/prof/s576x330/foody-upload-api-foody-mobile-280-200821172345.jpg'
        },
        {id: 10,title: "The Merry Dancer",price: 8,rating: 4,
        image: './images/Themerrydancer.png'
        // image: 'https://images.squarespace-cdn.com/content/v1/5402e23ce4b0a7034afad3a2/1559045757981-YDFVSRMWTE9DD5HOP2L2/rose-gimlet-one-gin.png?format=1000w'
        },
        {id: "11",title: "Bow Tie",price: 6,rating: 3,
        image: './images/Bowtie.jpg'
        // image: 'https://www.thedrinksbusiness.com/content/uploads/2017/12/McQueen-Flaming-Cinnamon-2-768x512.jpg'
        },
        {id: "12",title: "Danish Sunrise",price: 7.49,rating: 4, 
        image: './images/Danishsunrise.jpg'
        // image: 'https://images.squarespace-cdn.com/content/v1/5402e23ce4b0a7034afad3a2/1522145811748-D1DXPDEPMUOYMZ0XCE5G/Danish+Sunrise+Elg+Gin+No+1+cocktail+640x400.jpg?format=1000w'
        },
        {id: "13",title: "Fruit Beverage",price: 5,rating: 3,
        image: './images/Fruitbeverage.jpg'
        // image: 'https://lh3.googleusercontent.com/proxy/8NzPQYv0p5PQFXP-ZT7JviIYDfEi-MxU9thkJVHjH-FnUjsY1x5JGn2a7Fmk9Pq4WLsqq3YKpe6gWNKkWDjmRaR6PHjmKcYOYSEKFahxQx41QE-PaNLkFQN4TUkCu3askfmQGsEO'
        },
        {id: "14",title: "Summer Peach Tea",price: 4.99,rating: 5,
        image: './images/Summerpeachtea.jpg'
        // image: 'https://www.thespruceeats.com/thmb/oEAnTdSkmJ8is0jONYobaAQZG_c=/4000x2667/filters:fill(auto,1)/summer-peach-tea-cocktail-recipe-761506-hero-01-cdb5b9e6c8eb4551ae5cc90411b93a15.jpg'
        },
        {id: "15",title: "Glühwein",price: 5,rating: 4,
        image: './images/Gluhwein.jpg'
        // image: 'https://www.fleurdecafe.nl/wordpress/wp-content/uploads/2018/12/gluhwein-kerst-300x276.jpg'
        },
        {id: "16",title: "Orange Juice",price: 4,rating: 4,
        image: './images/Orangejuice.jpg'
        // image: 'https://cdn.healthyrecipes101.com/wp-content/uploads/2020/07/Homemade-orange-pineapple-juice-recipe.jpg'
        }
    ])
    return (
        <ProductsContext.Provider value={{ products: [...products] }}>
            {props.children}
        </ProductsContext.Provider>
    )
}
export default ProductsContextProvider
