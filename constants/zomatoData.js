import assets from "./assets";

const zomatoData = [{
        id: "FOOD-01",
        title: "Extra Cheese Burger",
        restaurant: "Italien Cafe",
        price: 159,
        rate: 4.8,
        distance: 4,
        description: "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
        image: assets.food01,
    },
    {
        id: "FOOD-02",
        title: "French Fries",
        restaurant: "Rise Cafe",
        price: 139,
        rate: 4.8,
        distance: 4,
        description: "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
        image: assets.food02,
    },
    {
        id: "FOOD-03",
        title: "French Fries",
        restaurant: "Rise Cafe",
        price: 159,
        rate: 4.8,
        distance: 4,
        description: "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
        image: assets.food01,
    },
    {
        id: "FOOD-04",
        title: "French Fries",
        restaurant: "Rise Cafe",
        price: 139,
        rate: 4.8,
        distance: 4,
        description: "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
        image: assets.food02,
    },
];
const popularBrands = [{
        id: "01",
        title: "Burger King",
        description: "Get the best burger in town",
        imgType: "SVG",
        image: assets.popbrnd01,
    },
    {
        id: "02",
        title: "Rominus Pizza & Burger",
        description: "50% off on all orders",
        imgType: "SVG",
        image: assets.popbrnd02,
    },
    {
        id: "03",
        title: "Domino's Pizza",
        description: "Buy 2 get 1 free",
        imgType: "SVG",
        image: assets.popbrnd03,
    },
    {
        id: "04",
        title: "KFC",
        description: "Get 60% Off on your first order",
        imgType: "SVG",
        image: assets.popbrnd04,
    },
];
const popularDishes = [{
        id: "01",
        title: "Rotini Pasta",
        imgType: "PNG",
        image: assets.popdish01,
    },
    {
        id: "02",
        title: "Pizza",
        imgType: "PNG",
        image: assets.popdish02,
    },
    {
        id: "03",
        title: "Pani Puri",
        imgType: "PNG",
        image: assets.popdish03,
    },
    {
        id: "04",
        title: "Thali",
        imgType: "PNG",
        image: assets.popdish04,
    },
];
const homeRender = [{
        id: "01",
        title: "Popular Brands",
    },
    {
        id: "02",
        title: "Most Popular",
    },
    {
        id: "03",
        title: "Popular Dishes",
    },
    {
        id: "04",
        title: "All Nearby Restaurants",
        subTitle: "Discover Good Tastes Near You",
        image: assets.restaurantIcon
    },
];
const allRestaurants = [{
        id: "01",
        title: "The RJ45",
        rate: 3.8,
        distance: 4,
        restaurant: "Indian, Chinese",
        image: assets.restaurant01,
    },
    {
        id: "02",
        title: "House of Pan Cakes",
        rate: 4.8,
        distance: 2,
        restaurant: "Indian",
        image: assets.restaurant02,
    },
    {
        id: "03",
        title: "Vrindavan Cafe & Restro",
        rate: 4.3,
        distance: 4.6,
        restaurant: "Indian, Italian",
        image: assets.restaurant03,
    },
    {
        id: "04",
        title: "Tinku Breakfast Stall",
        rate: 3.5,
        distance: 3.4,
        restaurant: "Indian",
        image: assets.restaurant04,
    },
    {
        id: "05",
        title: "The Fast Food Company",
        rate: 4.9,
        distance: 1,
        restaurant: "Indian",
        image: assets.restaurant05,
    },
];

export { zomatoData, popularBrands, popularDishes, homeRender, allRestaurants };