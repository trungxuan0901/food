(this.webpackJsonpproj04=this.webpackJsonpproj04||[]).push([[0],{23:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var i=c(3),n=c.n(i),a=c(38),s=c.n(a),r=c(12),l=c(13),o=c(9),j=(c(23),c(22)),d=c(17),h=function(e,t){var c,i,n,a,s=e.shoppingCart,r=e.totalPrice,l=e.qty;switch(t.type){case"ADD_TO_CART":return s.find((function(e){return e.id===t.id}))?e:((c=t.product).qty=1,a=l+1,n=r+c.price,{shoppingCart:[c].concat(Object(d.a)(s)),totalPrice:n,qty:a});case"INC":return(c=t.cart).qty=c.qty+1,n=r+c.price,a=l+1,i=s.findIndex((function(e){return e.id===t.id})),s[i]=c,{shoppingCart:Object(d.a)(s),totalPrice:n,qty:a};case"DEC":return(c=t.cart).qty>1?(c.qty=c.qty-1,console.log(c.qty),n=r-c.price,a=l-1,i=s.findIndex((function(e){return e.id===t.id})),s[i]=c,{shoppingCart:Object(d.a)(s),totalPrice:n,qty:a}):e;case"DELETE":var o=s.filter((function(e){return e.id!==t.id}));return a=l-(c=t.cart).qty,n=r-c.price*c.qty,{shoppingCart:Object(d.a)(o),totalPrice:n,qty:a};default:return e}},g=c(2),m=Object(i.createContext)(),b=function(e){var t=Object(i.useReducer)(h,{shoppingCart:[],totalPrice:0,qty:0}),c=Object(r.a)(t,2),n=c[0],a=c[1];return Object(g.jsx)(m.Provider,{value:Object(j.a)(Object(j.a)({},n),{},{dispatch:a}),children:e.children})},O=c.p+"static/media/logo1.aa5455de.png",p=c(35),u=(p.a.initializeApp({apiKey:"AIzaSyDgOTGk7BJngVysYmMcQyiRmdAagmK_OGk",authDomain:"foodtogo28-ad462.firebaseapp.com",projectId:"foodtogo28-ad462",storageBucket:"foodtogo28-ad462.appspot.com",messagingSenderId:"432008719545",appId:"1:432008719545:web:d3f4f3dafb7a502ca7ff68"}).firestore(),p.a.auth()),x=Object(i.createContext)(),f=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(g.jsx)(x.Provider,{value:Object(i.useReducer)(t,c),children:n})},N=function(){return Object(i.useContext)(x)},v="/food",E=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)(!0),s=Object(r.a)(a,2),o=(s[0],s[1]),j=function(){return n(!1)},d=function(){window.innerWidth<=960?o(!1):o(!0)};Object(i.useEffect)((function(){d()}),[]),window.addEventListener("resize",d);var h=N(),b=Object(r.a)(h,1)[0].loggedinuser,p=Object(i.useContext)(m).qty;return Object(g.jsx)("div",{children:Object(g.jsxs)("nav",{className:"navbar",children:[Object(g.jsxs)("div",{className:"navbar-container",children:[Object(g.jsx)("div",{class:"logo",children:Object(g.jsx)("img",{src:O,className:"logo"})}),Object(g.jsx)("div",{className:"menu-icon",onClick:function(){return n(!c)},children:Object(g.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(g.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(l.b,{to:"".concat(v,"/"),className:"nav-links",onClick:j,children:"Home"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(l.b,{to:"".concat(v,"/detailsProduct"),className:"nav-links",onClick:j,children:"Menu"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(l.b,{to:"".concat(v,"/services"),className:"nav-links",onClick:j,children:"Services"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(l.b,{to:"".concat(v,"/contact"),className:"nav-links",onClick:j,children:"Contact"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(l.b,{to:"".concat(v,"/login"),className:"nav-links-sign",children:Object(g.jsxs)("div",{onClick:function(){b&&u.signOut()},className:"nav-links btn--outline",children:[Object(g.jsxs)("span",{className:"header__optionLineOne",children:[null===b||void 0===b?void 0:b.email," "]}),Object(g.jsx)("span",{className:"header__optionLineTwo",children:b?"Signout":"Sign In"})]})})})]})]}),Object(g.jsx)("ul",{className:"right mr-4",children:Object(g.jsx)("li",{children:Object(g.jsx)(l.b,{to:"".concat(v,"/cart"),children:Object(g.jsxs)("span",{className:"shoppingCart text-warning",children:[Object(g.jsx)("i",{className:"fas fa-cart-plus text-warning mr-2"}),Object(g.jsx)("span",{children:p})]})})})})]})})},y=Object(i.createContext)(),C=function(e){var t=Object(i.useState)([{id:"1",title:"Burger King",price:5,rating:4,image:"./images/Burger.jpeg"},{id:"2",title:"Texas Chicken",price:12,rating:5,image:"./images/Texaschicken.jpg"},{id:"3",title:"Beefsteak",price:20,rating:5,image:"./images/Beefsteak.png"},{id:"4",title:"Apple Pie",price:6,rating:4,image:"./images/Applepie.jpg"},{id:"5",title:"Falafel",price:4,rating:2,image:"./images/Falafel.jpg"},{id:"6",title:"Taco",price:9,rating:5,image:"./images/Taco.jpg"},{id:"7",title:"Pizza",price:15,rating:3,image:"./images/Pizza.jpg"},{id:"8",title:"Ceviche",price:11.95,rating:3,image:"./images/Ceviche.jpg"},{id:"9",title:"Moqueca",price:25,rating:3,image:"./images/Moqueca.jpg"},{id:"10",title:"The Merry Dancer",price:8,rating:4,image:"./images/Themerrydancer.png"},{id:"11",title:"Bow Tie",price:6,rating:3,image:"./images/Bowtie.jpg"},{id:"12",title:"Danish Sunrise",price:7.49,rating:4,image:"./images/Danishsunrise.jpg"},{id:"13",title:"Fruit Beverage",price:5,rating:3,image:"./images/Fruitbeverage.jpg"},{id:"14",title:"Summer Peach Tea",price:4.99,rating:5,image:"./images/Summerpeachtea.jpg"},{id:"15",title:"Gl\xfchwein",price:5,rating:4,image:"./images/Gluhwein.jpg"},{id:"16",title:"Orange Juice",price:4,rating:4,image:"./images/Orangejuice.jpg"}]),c=Object(r.a)(t,1)[0];return Object(g.jsx)(y.Provider,{value:{products:Object(d.a)(c)},children:e.children})},S=function(){return Object(g.jsx)("header",{children:Object(g.jsx)("img",{src:"https://images.unsplash.com/photo-1592861956120-e524fc739696?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",width:"100%"})})},A=function(){var e=Object(i.useContext)(y).products,t=Object(i.useContext)(m).dispatch;return Object(g.jsxs)("div",{className:"container mb-5",children:[Object(g.jsx)(S,{}),Object(g.jsx)("div",{className:"products",children:e.map((function(e){return Object(g.jsxs)("div",{className:"product",children:[Object(g.jsx)("div",{className:"product-image",alt:"oop, error!",children:Object(g.jsx)("img",{src:e.image})}),Object(g.jsxs)("div",{className:"product-details",children:[Object(g.jsx)("div",{children:e.title}),Object(g.jsxs)("div",{children:["$",e.price]}),Object(g.jsx)("div",{children:Array(e.rating).fill().map((function(e){return Object(g.jsx)("i",{className:"fa fa-star text-warning"})}))}),Object(g.jsx)("div",{className:"addCart",onClick:function(){return t({type:"ADD_TO_CART",id:e.id,product:e})},children:Object(g.jsx)("button",{className:"bg-dark btn-block rounded pt-1 pb-1",width:"100%",children:Object(g.jsx)("i",{className:"fas fa-cart-plus text-warning"})})})]})]},e.id)}))})]})},k=c(40),I=c.n(k),T=function(){var e=Object(i.useContext)(m),t=e.shoppingCart,c=e.totalPrice,n=e.qty,a=e.dispatch;return Object(g.jsxs)("div",{className:"cart-container",children:[Object(g.jsx)("div",{className:"cart-details",children:t.length>0?t.map((function(e){return Object(g.jsxs)("div",{className:"cart",children:[Object(g.jsx)("span",{className:"cart-image",children:Object(g.jsx)("img",{src:e.image})}),Object(g.jsx)("span",{className:"cart-product-name",children:e.title}),Object(g.jsxs)("span",{className:"text-primary",children:["$",e.price]}),Object(g.jsx)("span",{className:"inc",onClick:function(){return a({type:"INC",id:e.id,cart:e})},children:Object(g.jsx)("button",{className:"btn btn-warning",children:Object(g.jsx)("i",{className:"fas fa-plus text-dark"})})}),Object(g.jsx)("span",{className:"product-quantity",children:e.qty}),Object(g.jsx)("span",{className:"dec",onClick:function(){return a({type:"DEC",id:e.id,cart:e})},children:Object(g.jsx)("button",{className:"btn btn-warning",children:Object(g.jsx)("i",{className:"fas fa-minus text-dark"})})}),Object(g.jsxs)("span",{className:"product-total-price",children:["$",e.price*e.qty]}),Object(g.jsx)("span",{className:"delete-product",onClick:function(){return a({type:"DELETE",id:e.id,cart:e})},children:Object(g.jsx)("button",{className:"btn btn-danger",children:Object(g.jsx)("i",{className:"fas fa-trash text-light"})})})]},e.id)})):"Gi\u1ecf h\xe0ng tr\u1ed1ng, b\u1ea1n c\xf3 mu\u1ed1n \u0111\u1eb7t g\xec kh\xf4ng?"}),t.length>0?Object(g.jsx)("div",{className:"cart-summary",children:Object(g.jsxs)("div",{className:"summary",children:[Object(g.jsx)("h1",{children:"Gi\u1ecf h\xe0ng"}),Object(g.jsxs)("div",{className:"total-items",children:[Object(g.jsx)("div",{className:"items",children:"Total Items"}),Object(g.jsx)("div",{className:"items-count",children:n})]}),Object(g.jsxs)("div",{className:"total-price-section",children:[Object(g.jsx)("div",{className:"just-title",children:"Total Price"}),Object(g.jsxs)("div",{className:"items-price",children:["$",c]})]}),Object(g.jsx)("div",{className:"stripe-section text-center",children:Object(g.jsx)(I.a,{stripeKey:"pk_test_51J8hdEJogErFHKKnbK4R4qGjHgRX3c9MvFPYbX7Y9p8ig7UERcTXvmEShFrnB6IqZauxcmTrQM8lD03hrVYRbzFx00XGF4kGsv",token:function(e){},billingAddress:!0,shippingAddress:!0,amount:100*c,name:"All product"})})]})}):""]})};var D=function(){return Object(g.jsx)("div",{children:Object(g.jsx)("div",{class:"container-fluid text-light bgdark pt-5 pb-4",children:Object(g.jsxs)("div",{class:"row",children:[Object(g.jsx)("div",{class:"col-md-2",children:Object(g.jsx)("img",{src:O,alt:"",width:"80%"})}),Object(g.jsx)("div",{class:"col-md-2",children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{className:"py-2",children:Object(g.jsx)(l.b,{to:"/",children:"Home Page"})}),Object(g.jsx)("li",{className:"py-2",children:Object(g.jsx)(l.b,{to:"/Services",children:"About Us"})}),Object(g.jsx)("li",{className:"py-2",children:Object(g.jsx)(l.b,{to:"/Contact",children:"Contact Us"})}),Object(g.jsx)("li",{className:"py-2",children:Object(g.jsx)(l.b,{to:"/Cart",children:"Payment Process"})})]})}),Object(g.jsx)("div",{class:"col-md-2",children:Object(g.jsxs)("div",{class:"block-footer",children:[Object(g.jsx)("p",{class:"title-block",children:"Food To Go App"}),Object(g.jsxs)("a",{class:"apps",target:"_blank",rel:"noopener noreferrer nofollow",href:"https://itunes.apple.com/us/app/foodtogo",title:"Down app iOS",children:[Object(g.jsx)("span",{class:"apps__app-store-vi",title:"Down app iOS"}),Object(g.jsx)("img",{style:{width:"122px",height:"60px"},alt:"appstore",src:"./images/Appstore.png"})]}),Object(g.jsxs)("a",{class:"apps",target:"_blank",rel:"noopener noreferrer nofollow",href:"https://play.google.com/store/apps/details?id=com.foodtogo",title:"Down app Android",children:[Object(g.jsx)("span",{class:"apps__play-store-vi",title:"Down app Android"}),Object(g.jsx)("img",{style:{width:"122px",height:"60px"},alt:"android",src:"./images/Android.png"})]})]})}),Object(g.jsxs)("div",{class:"col-md-3",children:[Object(g.jsx)("p",{children:"FoodToGo Joint Stock Company"}),Object(g.jsx)("p",{children:"2nd Floor, ABC Building,"}),Object(g.jsx)("p",{children:"102 Nguyen Dinh Chinh Street, Ward 15, Phu Nhuan District, Ho Chi Minh City"}),Object(g.jsx)("p",{children:"Certificate of Business Registration No: 0123456789"}),Object(g.jsx)("p",{children:"Dated by the Department of Planning and Investment of Ho Chi Minh City 21/06/2021,"}),Object(g.jsx)("p",{children:"1st Amendment, July 21, 2021"}),Object(g.jsx)("p",{children:"Phone number: 078.5511.547"}),Object(g.jsxs)("p",{children:["Email: ",Object(g.jsx)("a",{href:"",children:"foodtogo28@gmail.vn"})]})]}),Object(g.jsx)("div",{class:"col-md-3",children:Object(g.jsxs)("p",{style:{fontSize:"50px"},children:[Object(g.jsx)("a",{href:"https://www.facebook.com/",class:"fab fa-facebook-square",style:{marginRight:"100px"}}),Object(g.jsx)("a",{href:"https://www.instagram.com/",class:"fab fa-instagram",style:{marginRight:"170px"}}),Object(g.jsx)("a",{href:"#",children:Object(g.jsx)("img",{style:{width:"200px",height:"100px"},alt:"\u0110\xc3 \u0110\u0102NG K\xdd B\u1ed8 C\xd4NG TH\u01af\u01a0NG",src:"./images/Register.png"})})]})})]})})})},R=function(){return Object(g.jsxs)("div",{className:"container mt-4 mb-4",children:[Object(g.jsx)("h2",{children:"404"}),Object(g.jsx)("h1",{children:"Page Not Found"}),Object(g.jsx)("p",{children:"The specified file was not found on this website. Please check the URL for mistakes and try again."}),Object(g.jsx)("h3",{children:"Why am I seeing this?"}),Object(g.jsxs)("p",{children:["This page was generated by the Firebase Command-Line Interface. To modify it, edit the ",Object(g.jsx)("code",{children:"404.html"})," file in your project's configured ",Object(g.jsx)("code",{children:"public"})," directory."]})]})},w=function(e){var t=e.items;return Object(g.jsx)("div",{className:"section-center",children:t.map((function(e){var t=e.id,c=e.title,i=e.image,n=e.desc,a=e.price,s=e.rating;return Object(g.jsxs)("div",{className:"menu-item",children:[Object(g.jsx)("img",{src:i,alt:c,className:"photo"}),Object(g.jsxs)("div",{className:"item-info",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("h4",{children:c}),Object(g.jsx)("p",{children:Object(g.jsx)("div",{children:Array(s).fill().map((function(e){return Object(g.jsx)("i",{className:"fa fa-star text-warning"})}))})}),Object(g.jsxs)("h4",{className:"price",children:["$",a]})]}),Object(g.jsx)("p",{className:"item-text",children:n})]})]},t)}))})},P=[{id:1,title:"Burger King",price:5,rating:4,category:"food",image:"./images/Burger.jpeg",desc:"BURGER 2 PIECES OF BOOKED BEEF AND FRENCH FRIES"},{id:2,title:"Texas Chicken",price:12,rating:5,category:"food",image:"./images/Texaschicken.jpg",desc:"08 PIECES OF CRISPY CHICKEN WITH BONES (SPICY/NON-SPICY), 04 CHEESE POTATOES, 01 MIX SALAD, 01 MASHED POTATO"},{id:3,title:"Beefsteak",price:20,rating:5,category:"food",image:"./images/Beefsteak.png",desc:"01 PIECE OF BEEF 300g, 01 FRENCH FRIES, 01 SALAD"},{id:4,title:"Apple Pie",price:6,rating:4,category:"food",image:"./images/Applepie.jpg",desc:"01 Apple Pie ( CRISPY, SPONGY, SWWET AND SOUR APPLE FILLING, FRAGRANT WITH CINNAMON )"},{id:5,title:"Falafel",price:4,rating:2,category:"sweets",image:"./images/Falafel.jpg",desc:"06 FALAFEL FRIED ( CRUSHED CHICKPEAS OR FAVA BEANS )"},{id:6,title:"Taco",price:9,rating:5,category:"food",image:"./images/Taco.jpg",desc:"01 TACO ( CORN HUSKS MINCED HAM, ONIONS, LETTUCE, PEARS AND SPICY TOMATO SAUCE )"},{id:7,title:"Pizza",price:15,rating:3,category:"food",image:"./images/Pizza.jpg",desc:"01 MEDIUM PIZZA X 01 FREE SIZED PIZZA X 01 FREE COCA COLA"},{id:8,title:"Ceviche",price:11.95,rating:3,category:"food",image:"./images/Ceviche.jpg",desc:"01 CEVICHE ( FRESH FISH MARINATED IN FRESH LEMON JUICE )"},{id:9,title:"Moqueca",price:25,rating:3,category:"food",image:"./images/Moqueca.jpg",desc:"\n    STEWED SEA FISH, TOMATO, ONION, GRALIC AND CORIANDER. THOROUGHLY STEWED IN EARTEN POTS"},{id:10,title:"The Merry Dancer",price:8,rating:4,category:"wine",image:"./images/Themerrydancer.png",desc:"01 THE MERRY DANCER, 01 THE MERRY DANCER, 01 THE MERRY DANCER, 01 THE MERRY DANCER"},{id:11,title:"Bow Tie",price:6,rating:5,category:"wine",image:"./images/Bowtie.jpg",desc:"01 BOW TIE, 01 BOW TIE, 01 BOW TIE, 01 BOW TIE"},{id:12,title:"Danish Sunrise",price:7.49,rating:4,category:"drinks",image:"./images/Danishsunrise.jpg",desc:"01 DANISH SUNRISE, 01 DANISH SUNRISE, 01 DANISH SUNRISE, 01 DANISH SUNRISE"},{id:13,title:"Fruit Beverage",price:5,rating:3,category:"smoothie",image:"./images/Fruitbeverage.jpg",desc:"01 FRUIT BEVERAGE, 01 FRUIT BEVERAGE, 01 FRUIT BEVERAGE, 01 FRUIT BEVERAGE"},{id:14,title:"Summer Peach Tea",price:4.99,rating:5,category:"drinks",image:"./images/Summerpeachtea.jpg",desc:"01 SUMMER PEACH TEA, 01 SUMMER PEACH TEA, 01 SUMMER PEACH TEA, 01 SUMMER PEACH TEA"},{id:15,title:"Gl\xfchwein",price:5,rating:4,category:"wine",image:"./images/Gluhwein.jpg",desc:"01 GLUHWEIN, 01 GLUHWEIN, 01 GLUHWEIN, 01 GLUHWEIN"},{id:16,title:"Orange Juice",price:4,rating:4,category:"smoothie",image:"./images/Orangejuice.jpg",desc:"01 ORANGE JUICE, 01 ORANGE JUICE, 01 ORANGE JUICE, 01 ORANGE JUICE"}],F=function(e){var t=e.categories,c=e.filterItems;return Object(g.jsx)("div",{className:"btn-container",children:t.map((function(e,t){return Object(g.jsx)("button",{type:"button",className:"filter-btn",onClick:function(){return c(e)},children:e},t)}))})},G=(c(56),["all"].concat(Object(d.a)(new Set(P.map((function(e){return e.category}))))));var B=function(){var e=Object(i.useState)(P),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)(G),s=Object(r.a)(a,2),l=s[0];return s[1],Object(g.jsx)("main",{style:{backgroundImage:'url("./images/Bgmenu.jpg")',backgroundPosition:"center",backgroundSize:"cover"},children:Object(g.jsxs)("section",{className:"menu section",children:[Object(g.jsxs)("div",{className:"title",children:[Object(g.jsx)("h2",{children:"our menu"}),Object(g.jsx)("div",{className:"underline"})]}),Object(g.jsx)(F,{categories:l,filterItems:function(e){if("all"!==e){var t=P.filter((function(t){return t.category===e}));n(t)}else n(P)}}),Object(g.jsx)(w,{items:c})]})})},M=c(21),H=c(27),U=c(29),q=c(28),L=function(e){Object(U.a)(c,e);var t=Object(q.a)(c);function c(){return Object(M.a)(this,c),t.apply(this,arguments)}return Object(H.a)(c,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"fluid-container mt-5 mb-5",children:Object(g.jsxs)("div",{children:[Object(g.jsxs)("ul",{className:"nav nav-tabs",children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{className:"nav-link active text-warning","data-toggle":"tab",href:"#information",children:"Th\xf4ng tin chung"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{className:"nav-link text-warning","data-toggle":"tab",href:"#go",children:"Giao ngay"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{className:"nav-link text-warning","data-toggle":"tab",href:"#service",children:"Di\u0323ch vu\u0323"})})]}),Object(g.jsxs)("div",{className:"fluid-container tab-content",children:[Object(g.jsxs)("div",{id:"information",className:"container tab-pane active",children:[Object(g.jsx)("h3",{children:"FOOD TO GO - MO\u0301N G\xcc C\u0168NG C\xd3 - Website \u0111\u1eb7t \u0111\u1ed3 \u0103n online v\xf4 v\xe0n deal gi\u1ea3m gi\xe1"}),Object(g.jsx)("p",{children:"N\u1ebfu vi\u1ec7c \u0111\u1eb7t b\xe0n v\xe0 di chuy\u1ec3n t\u1edbi nh\xe0 h\xe0ng t\u1ed1n nhi\u1ec1u th\u1eddi gian v\xe0 b\u1ea1n mu\u1ed1n t\u1eadn h\u01b0\u1edfng m\xf3n \u0103n ngon ngay t\u1ea1i nh\xe0 th\xec \u0111\u1eb7t \u0111\u1ed3 \u0103n online l\xe0 m\u1ed9t trong nh\u1eefng ti\u1ec7n \xedch qu\xe1 quen thu\u1ed9c v\u1edbi b\u1ea1n hi\u1ec7n nay. N\u1ebfu c\xe1c \u1ee9ng d\u1ee5ng/c\xe1c trang th\u01b0\u01a1ng m\u1ea1i \u0111i\u1ec7n t\u1eed \u0111ang thay th\u1ebf d\u1ea7n ch\u1ee3 truy\u1ec1n th\u1ed1ng \u0111\u1ec3 gi\xfap mua s\u1eafm t\u1ea1i nh\xe0 th\xec \u1ee9ng d\u1ee5ng \u0111\u1eb7t m\xf3n FOOD TO GO ra \u0111\u1eddi mang to\xe0n b\u1ed9 th\u1ebf gi\u1edbi \u1ea9m th\u1ef1c nh\u1ed9n nh\u1ecbp \u0111\u1ebfn v\u1edbi m\u1ecdi ng\u01b0\u1eddi, m\xe0 kh\xf4ng c\u1ea7n m\u1ea5t th\u1eddi gian di chuy\u1ec3n. L\xe0 \u1ee9ng d\u1ee5ng \u0111\u1eb7t m\xf3n v\xe0 giao \u0111\u1ed3 \u0103n m\u01a1\u0301i nh\xe2\u0301t - hi\xea\u0323n \u0111a\u0323i nh\xe2\u0301t, FOOD TO GO mang \u0111\u1ebfn nhi\u1ec1u l\u1ef1a ch\u1ecdn cho ng\u01b0\u1eddi d\xf9ng \u1edf 16 t\u1ec9nh th\xe0nh trong c\u1ea3 n\u01b0\u1edbc, ke\u0300m theo nhi\xea\u0300u \u01b0u \u0111\xe3i h\u1ee3p t\xfai ti\u1ec1n nh\u01b0: mi\u1ec5n ph\xed ship \u0111\u1ed3 \u0103n trong ph\u1ea1m vi b\xe1n k\xednh 3km, khuy\u1ebfn m\xe3i cho ng\u01b0\u1eddi d\xf9ng m\u1edbi, c\xe1c m\xe3 khuy\u1ebfn m\xe3i theo b\u1ed9 s\u01b0u t\u1eadp m\u1ed7i ng\xe0y\u2026. \u0111\u1ec3 s\u1eed d\u1ee5ng \u1edf b\u1ea5t k\xec th\u1eddi gian n\xe0o c\u0169ng c\xf3 \u0111\u01b0\u1ee3c m\u1ee9c gi\xe1 \u1ed5n nh\u1ea5t."})]}),Object(g.jsxs)("div",{id:"go",className:"container tab-pane fade",children:[Object(g.jsx)("h3",{children:"B\u1ea1n th\xe8m \u0103n g\xec, FOOD TO GO giao ngay"}),Object(g.jsx)("p",{children:"FOOD TO GO \u0111em \u0111\u1ebfn nhi\u1ec1u m\xf4 h\xecnh \u1ea9m th\u1ef1c cho ng\u01b0\u1eddi d\xf9ng \u1edf 16 t\u1ec9nh th\xe0nh kh\xe1c nhau. Danh s\xe1ch mo\u0301n \u0103n cu\u0309a nh\xe0 h\xe0ng \u0111\u1ee7 c\xe1c th\u1ec3 lo\u1ea1i t\u1eeb Burger, b\xfan, l\u1ea9u, ga\u0300 ra\u0301n, n\u01b0\u01a1\u0301c u\xf4\u0301ng, b\xe1nh kem hay sushi \u2026 c\xe1c b\u1eefa \u0103n \u0111\u1eadm ch\u1ea5t Vi\u1ec7t Nam, \xc2u hay H\xe0n. Do \u0111\xf3, ch\u1ec9 c\u1ea7n ng\u1ed3i t\u1ea1i ch\u1ed7, b\u1ea1n ho\xe0n to\xe0n c\xf3 th\u1ec3 mua \u0111\u01b0\u1ee3c c\xf9ng l\xfac c\xe1c m\xf3n \u0103n v\xe0 th\u1ee9c u\u1ed1ng, v\u1edbi m\u1ee9c gi\xe1 c\u1ef1c k\xec \u01b0u \u0111\xe3i. \u0110\u1ed3ng th\u1eddi, \u0111\u1ec3 tr\u1ea3 l\u1eddi cho c\xe2u h\u1ecfi \u0103n g\xec \u1edf \u0111\xe2u, FOOD TO GO \u0111\xe3 chu\u1ea9n b\u1ecb s\u1eb5n danh s\xe1ch c\xe1c b\u1ed9 s\u01b0u t\u1eadp g\u1ee3i \xfd v\u1edbi c\xe1c \u01b0u \u0111\xe3i kh\xe1c nhau cho ng\u01b0\u1eddi d\xf9ng c\xf3 th\u1ec3 l\u01b0\u0323a cho\u0323n theo s\u01a1\u0309 thi\u0301ch cu\u0309a mi\u0300nh. "})]}),Object(g.jsx)("div",{id:"service",className:"container tab-pane fade",children:Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[Object(g.jsx)("strong",{children:"\u0110\u0103\u0323t gi\u1eef ch\u1ed7 nh\xe0 h\xe0ng:"})," Li\xean h\xea\u0323 qua \u0111\u01b0\u01a1\u0300ng d\xe2y no\u0301ng: 078.5511.547 \u0111\xea\u0309 \u0111\u01b0\u01a1\u0323c h\u01b0\u01a1\u0301ng d\xe2\u0303n."]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("strong",{children:"D\u1ec5 d\xe0ng \u0111\u1eb7t h\xe0ng theo nh\xf3m:"})," vi\u1ec7c \u0111\u1eb7t \u0111\u1ed3 \u0103n online tr\u1edf n\xean vui h\u01a1n khi nhi\u1ec1u ng\u01b0\u1eddi c\xf9ng tham gia. D\u1ec5 d\xe0ng l\u1ef1a ch\u1ecdn m\xf3n, thanh to\xe1n \u0111\u01a1n gi\u1ea3n v\xe0 FOOD TO GO s\u1ebd giao t\u1eadn nh\xe0 \u0111\u1ec3 m\u1edf c\xe1c bu\u1ed5i ti\u1ec7c ri\xeang t\u01b0 t\u1ea1i gia kh\xf4ng c\u1ea7n suy ngh\u0129."]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("strong",{children:"\u01afu \u0111\xe3i th\u01b0\u1eddng xuy\xean khi \u0111\u1eb7t h\xe0ng \u0111\u1ed3 \u0103n qua FOOD TO GO tr\xean \u1ee9ng d\u1ee5ng \u0111\u1eb7t h\xe0ng:"})," mi\u1ec5n ph\xed ship \u0111\u1ed3 \u0103n online trong v\xf2ng b\xe1n k\xednh 3km, gi\u1ea3m gi\xe1 25k cho ng\u01b0\u1eddi d\xf9ng m\u1edbi, m\xe3 gi\u1ea3m gi\xe1 trong c\xe1c b\u1ed9 s\u01b0u t\u1eadp... c\xf9ng c\xe1c ch\u01b0\u01a1ng tr\xecnh \u01b0u \u0111\xe3i kh\xe1c, gi\xfap cho ng\u01b0\u1eddi d\xf9ng c\xf3 nhi\u1ec1u l\u1ef1a ch\u1ecdn r\u1ebb h\u01a1n qua app \u0111\u1eb7t \u0111\u1ed3 \u0103n."]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("strong",{children:"D\u1ecbch v\u1ee5 Catering:"})," V\u1edbi d\u1ecbch v\u1ee5 Catering, chu\u0301ng t\xf4i s\u1ebd nh\u1eadn t\u1ed5 ch\u1ee9c ti\u1ec7c cho kh\xe1ch h\xe0ng: ti\u1ec7c c\u01b0\u1edbi, ti\u1ec7c team \u2013 building, ti\u1ec7c gala dinner\u2026 \u0110\u1ecba \u0111i\u1ec3m t\u1ed5 ch\u1ee9c ti\u1ec7c Catering c\xf3 th\u1ec3 trong kh\xf4ng gian nh\xe0 h\xe0ng (Inside Catering) ho\u1eb7c t\u1ea1i n\u01a1i kh\xe1ch h\xe0ng y\xeau c\u1ea7u (Outside Catering). Khi tri\u1ec3n khai d\u1ecbch v\u1ee5 n\xe0y cho kh\xe1ch, chu\u0301ng t\xf4i kh\xf4ng ch\u1ec9 lo v\u1ec1 m\xf3n \u0103n m\xe0 c\xf2n l\xean \xfd t\u01b0\u1edfng thi\u1ebft k\u1ebf kh\xf4ng gian, trang tr\xed, s\u1eafp \u0111\u1eb7t \xe2m thanh \u2013 \xe1nh s\xe1ng\u2026"]})]})})]})]})})}}]),c}(n.a.Component),_=c(41),z=function(){return Object(g.jsx)("div",{className:"fluid-container",style:{marginTop:"50px",marginLeft:"75px",width:"72%",paddingTop:"100px"},children:Object(g.jsxs)("form",{className:"row",style:{margin:"25px 85px 75px 100px"},onSubmit:function(e){e.preventDefault(),_.a.sendForm("service_p8n19yj","template_tgdqdxu",e.target,"user_YTUUg7WTOQ76j2WqhyfA1").then((function(e){alert("G\u01b0\u0309i Email tha\u0300nh c\xf4ng")})).catch((function(e){return alert("G\u01b0\u0309i Email kh\xf4ng tha\u0300nh c\xf4ng")}))},children:[Object(g.jsx)("input",{type:"text",name:"name",placeholder:"FULL NAME",className:"form-control"}),Object(g.jsx)("input",{type:"email",name:"user_email",placeholder:"EMAIL",className:"form-control"}),Object(g.jsx)("textarea",{name:"message",rows:"5",placeholder:"COMMENTS ON SERVICES",className:"form-control"}),Object(g.jsx)("input",{style:{height:"80px",fontSize:"36px",color:"#617D98"},type:"submit",value:"SEND",className:"form-control btn btn-dark"})]})})},W=function(e){Object(U.a)(c,e);var t=Object(q.a)(c);function c(){return Object(M.a)(this,c),t.apply(this,arguments)}return Object(H.a)(c,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"fluid-container",children:[Object(g.jsxs)("div",{style:{backgroundImage:'url("./images/Bgcontact.jpg")',backgroundPosition:"center",backgroundSize:"cover"},className:"row",children:[Object(g.jsxs)("div",{className:"col-sm-4",children:[Object(g.jsxs)("div",{className:"my-5",children:[Object(g.jsx)("h3",{className:"text-center",children:"CONTACT US"}),Object(g.jsx)("p",{className:"text-center text-secondary",style:{fontSize:"14px"},children:"To receive great deals"})]}),Object(g.jsx)("div",{className:"text-center",children:Object(g.jsxs)("a",{href:"#",className:"py-3",children:[Object(g.jsx)("i",{class:"fas fa-map-marker p-3 rounded-circle mb-4",style:{fontSize:"36px"}}),Object(g.jsx)("h6",{children:"ADDRESS"}),Object(g.jsx)("p",{className:"px-1",style:{fontSize:"14px"},children:"102 Nguyen Dinh Chinh, Ward 15, Phu Nhuan District, HCMC, Vietnam"})]})}),Object(g.jsx)("div",{className:"text-center",children:Object(g.jsxs)("a",{href:"#",className:"py-3",children:[Object(g.jsx)("i",{class:"fas fa-headphones-alt p-3 rounded-circle mb-4",style:{fontSize:"36px"}}),Object(g.jsx)("h6",{children:"PHONE NUMBER"}),Object(g.jsx)("p",{className:"px-1",style:{fontSize:"14px"},children:"078.5511.547"})]})}),Object(g.jsx)("div",{className:"text-center",children:Object(g.jsxs)("a",{href:"#",className:"py-3",children:[Object(g.jsx)("i",{class:"fas fa-mail-bulk p-3 rounded-circle mb-4",style:{fontSize:"36px"}}),Object(g.jsx)("h6",{children:"EMAIL"}),Object(g.jsx)("p",{className:"px-1",style:{fontSize:"14px"},children:"lykemchoem@gmail.com"}),Object(g.jsx)("p",{className:"px-1",style:{fontSize:"14px"},children:"hoaithuong2347@gmail.com"})]})})]}),Object(g.jsx)("div",{className:"col-sm-8",children:Object(g.jsx)(z,{})})]}),Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.201757241531!2d106.67615171480814!3d10.795853992308283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d6786d52bf%3A0x77a4a2db8949796e!2zMTAyIE5ndXnhu4VuIMSQw6xuaCBDaMOtbmgsIFBoxrDhu51uZyAxNSwgUGjDuiBOaHXhuq1uLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1618474081695!5m2!1svi!2s",className:"w-100",style:{height:"500px"}})})]})}}]),c}(n.a.Component);var Y=function(){var e=Object(o.f)(),t=Object(i.useState)(""),c=Object(r.a)(t,2),n=c[0],a=c[1],s=Object(i.useState)(""),l=Object(r.a)(s,2),j=l[0],d=l[1];return Object(g.jsx)("div",{className:"login",children:Object(g.jsxs)("div",{className:"login__container",children:[Object(g.jsx)("h1",{children:"Sign In"}),Object(g.jsxs)("form",{children:[Object(g.jsx)("h5",{children:"E-mail"}),Object(g.jsx)("input",{value:n,onChange:function(e){return a(e.target.value)},type:"email"}),Object(g.jsx)("h5",{children:"Password"}),Object(g.jsx)("input",{value:j,onChange:function(e){return d(e.target.value)},type:"password"}),Object(g.jsx)("button",{onClick:function(t){t.preventDefault(),u.signInWithEmailAndPassword(n,j).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",className:"login__signInButton",children:"Sign In"})]}),Object(g.jsx)("p",{children:"By Signing-in, you agree to Our Terms and Conditions"}),Object(g.jsx)("button",{onClick:function(t){t.preventDefault(),u.createUserWithEmailAndPassword(n,j).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Account"})]})})},J="/food";var K=function(){var e=N(),t=Object(r.a)(e,2),c=(t[0].loggedInUser,t[1]);return Object(i.useEffect)((function(){var e=u.onAuthStateChanged((function(e){c(e?{type:"SET_LOGIN",user:e}:{type:"SET_LOGIN",user:null})}));return function(){e()}}),[]),Object(g.jsx)("div",{children:Object(g.jsx)(C,{children:Object(g.jsx)(b,{children:Object(g.jsxs)(l.a,{children:[Object(g.jsx)(E,{}),Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{path:"".concat(J,"/"),exact:!0,component:A}),Object(g.jsx)(o.a,{path:"".concat(J,"/cart"),exact:!0,component:T}),Object(g.jsx)(o.a,{path:"".concat(J,"/detailsProduct"),exact:!0,component:B}),Object(g.jsx)(o.a,{path:"".concat(J,"/services"),exact:!0,component:L}),Object(g.jsx)(o.a,{path:"".concat(J,"/contact"),exact:!0,component:W}),Object(g.jsx)(o.a,{path:"".concat(J,"/login"),exact:!0,component:Y}),Object(g.jsx)(o.a,{default:!0,exact:!0,component:R})]}),Object(g.jsx)(D,{})]})})})})},V=function(e,t){switch(console.log(t),t.type){case"SET_LOGIN":return Object(j.a)(Object(j.a)({},e),{},{loggedinuser:t.user})}};s.a.render(Object(g.jsx)(f,{initialState:{loggedinuser:null},reducer:V,children:Object(g.jsx)(K,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.0338b058.chunk.js.map