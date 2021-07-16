const menu = [
  {
    id: 1,
    title: "Burger King",
    price: 5,
    rating: 4,
    category: 'food',
    image: './images/Burger.jpeg',
    // image: 'https://images.foody.vn/res/g107/1069249/prof/s640x400/foody-upload-api-foody-mobile-hamburger-210314093231.jpg',
    desc: `BURGER 2 PIECES OF BOOKED BEEF AND FRENCH FRIES`
  },
  {
    id: 2,
    title: "Texas Chicken",
    price: 12,
    rating: 5,
    category: 'food',
    image: './images/Texaschicken.jpg',
    // image: 'https://images.foody.vn/res/g21/200013/prof/s640x400/foody-upload-api-foody-mobile-92-jpg-180831085011.jpg',
    desc: `08 PIECES OF CRISPY CHICKEN WITH BONES (SPICY/NON-SPICY), 04 CHEESE POTATOES, 01 MIX SALAD, 01 MASHED POTATO`
  },
  {
    id: 3,
    title: "Beefsteak",
    price: 20,
    rating: 5,
    category: 'food',
    image: './images/Beefsteak.png',
    // image: 'https://images.foody.vn/res/g94/935033/prof/s576x330/foody-upload-api-foody-mobile-5-190827162844.jpg',
    desc: `01 PIECE OF BEEF 300g, 01 FRENCH FRIES, 01 SALAD`
  },
  {
    id: 4,
    title: "Apple Pie",
    price: 6,
    rating: 4,
    category: 'food',
    image: './images/Applepie.jpg',
    // image: 'https://storage.ettip.com/Upload/Images/Story/Official/84f93aac-10df-4b0f-ac08-85cca7f24e52.png',
    desc: `01 Apple Pie ( CRISPY, SPONGY, SWWET AND SOUR APPLE FILLING, FRAGRANT WITH CINNAMON )`
  },
  {
    id: 5,
    title: "Falafel",
    price: 4,
    rating: 2,
    category: 'sweets',
    image: './images/Falafel.jpg',
    // image: 'https://www.hotforfoodblog.com/wp-content/uploads/2015/05/veganmushroomfalafelsliders_hotforfoodblog_filtered2-scaled.jpg',
    desc: `06 FALAFEL FRIED ( CRUSHED CHICKPEAS OR FAVA BEANS )`
  },
  {
    id: 6,
    title: "Taco",
    price: 9,
    rating: 5,
    category: 'food',
    image: './images/Taco.jpg',
    // image: 'https://images.foody.vn/res/g100/998480/prof/s640x400/foody-upload-api-foody-mobile-190-200214145506.jpg',
    desc: `01 TACO ( CORN HUSKS MINCED HAM, ONIONS, LETTUCE, PEARS AND SPICY TOMATO SAUCE )`
  },
  {
    id: 7,
    title: "Pizza",
    price: 15,
    rating: 3,
    category: 'food',
    image: "./images/Pizza.jpg",
    // image: 'https://images.foody.vn/res/g72/713626/prof/s576x330/foody-upload-api-foody-mobile-foody-upload-api-foo-190620093348.jpg',
    desc: `01 MEDIUM PIZZA X 01 FREE SIZED PIZZA X 01 FREE COCA COLA`
  },
  {
    id: 8,
    title: "Ceviche",
    price: 11.95,
    rating: 3,
    category: 'food',
    image: './images/Ceviche.jpg',
    // image: 'https://healthyfitnessmeals.com/wp-content/uploads/2020/03/How-to-make-shrimp-ceviche-8.jpg',
    desc: `01 CEVICHE ( FRESH FISH MARINATED IN FRESH LEMON JUICE )`
  },
  {
    id: 9,
    title: "Moqueca",
    price: 25,
    rating: 3,
    category: 'food',
    image: './images/Moqueca.jpg',
    // image: 'https://images.foody.vn/res/g105/1043542/prof/s576x330/foody-upload-api-foody-mobile-280-200821172345.jpg',
    desc: `STEWED SEA FISH, TOMATO, ONION, GRALIC AND CORIANDER. THOROUGHLY STEWED IN EARTEN POTS`
  },
  {
    id: 10,
    title: "The Merry Dancer",
    price: 8,
    rating: 4,
    category: 'wine',
    image: './images/Themerrydancer.png',
    // image: 'https://images.squarespace-cdn.com/content/v1/5402e23ce4b0a7034afad3a2/1559045757981-YDFVSRMWTE9DD5HOP2L2/rose-gimlet-one-gin.png?format=1000w',
    desc: `01 THE MERRY DANCER, 01 THE MERRY DANCER, 01 THE MERRY DANCER, 01 THE MERRY DANCER`
  },
  {
    id: 11,
    title: "Bow Tie",
    price: 6,
    rating: 5,
    category: 'wine',
    image: './images/Bowtie.jpg',
    // image: 'https://www.thedrinksbusiness.com/content/uploads/2017/12/McQueen-Flaming-Cinnamon-2-768x512.jpg',
    desc: `01 BOW TIE, 01 BOW TIE, 01 BOW TIE, 01 BOW TIE`
  },
  {
    id: 12,
    title: "Danish Sunrise",
    price: 7.49,
    rating: 4,
    category: 'drinks',
    image: './images/Danishsunrise.jpg',
    // image: 'https://images.squarespace-cdn.com/content/v1/5402e23ce4b0a7034afad3a2/1522145811748-D1DXPDEPMUOYMZ0XCE5G/Danish+Sunrise+Elg+Gin+No+1+cocktail+640x400.jpg?format=1000w',
    desc: `01 DANISH SUNRISE, 01 DANISH SUNRISE, 01 DANISH SUNRISE, 01 DANISH SUNRISE`
  },
  {
    id: 13,
    title: "Fruit Beverage",
    price: 5,
    rating: 3,
    category: 'smoothie',
    image: './images/Fruitbeverage.jpg',
    // image: 'https://lh3.googleusercontent.com/proxy/8NzPQYv0p5PQFXP-ZT7JviIYDfEi-MxU9thkJVHjH-FnUjsY1x5JGn2a7Fmk9Pq4WLsqq3YKpe6gWNKkWDjmRaR6PHjmKcYOYSEKFahxQx41QE-PaNLkFQN4TUkCu3askfmQGsEO',
    desc: `01 FRUIT BEVERAGE, 01 FRUIT BEVERAGE, 01 FRUIT BEVERAGE, 01 FRUIT BEVERAGE`
  },
  {
    id: 14,
    title: "Summer Peach Tea",
    price: 4.99,
    rating: 5,
    category: 'drinks',
    image: './images/Summerpeachtea.jpg',
    // image: 'https://www.thespruceeats.com/thmb/oEAnTdSkmJ8is0jONYobaAQZG_c=/4000x2667/filters:fill(auto,1)/summer-peach-tea-cocktail-recipe-761506-hero-01-cdb5b9e6c8eb4551ae5cc90411b93a15.jpg',
    desc: `01 SUMMER PEACH TEA, 01 SUMMER PEACH TEA, 01 SUMMER PEACH TEA, 01 SUMMER PEACH TEA`
  },
  {
    id: 15,
    title: "Glühwein",
    price: 5,
    rating: 4,
    category: 'wine',
    image: './images/Gluhwein.jpg',
    // image: 'https://www.fleurdecafe.nl/wordpress/wp-content/uploads/2018/12/gluhwein-kerst-300x276.jpg',
    desc: `01 GLUHWEIN, 01 GLUHWEIN, 01 GLUHWEIN, 01 GLUHWEIN`
  },
  {
    id: 16,
    title: "Orange Juice",
    price: 4,
    rating: 4,
    category: 'smoothie',
    // image: 'https://cdn.healthyrecipes101.com/wp-content/uploads/2020/07/Homemade-orange-pineapple-juice-recipe.jpg',
    image: './images/Orangejuice.jpg',
    desc: `01 ORANGE JUICE, 01 ORANGE JUICE, 01 ORANGE JUICE, 01 ORANGE JUICE`
  }
];
export default menu;
