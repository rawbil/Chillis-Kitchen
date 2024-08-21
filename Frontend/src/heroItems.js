import chilly from './assets/chilly.avif';
import image1 from "./assets/image-1.jpg";
import image2 from "./assets/image-2.jpg";
import image3 from "./assets/image-3.jpg";

export const hero_items = [
    {
        "image": chilly,
        "heading": "Special Sauce",
        "description": "New specials just dropped, come check 'em out",
        "button_content": "See the specials",
        "route": ""
    },
    {
        "image": image3,
        "heading": "Order Online",
        "description": "You order, we deliver, and just in time for your fav meal",
        "button_content": "Make Order",
        "route": "/order"
    },
    {
        "image": image2,
        "heading": "Book Event",
        "description": "You can book events with us and experience outside catering on another level.",
        "button_content": "Book Now",
        route: ""
    },
    {
        "image": image1,
        "heading": "Email Signup",
        "description": "Sign up to receive weekly newsletters of events and order online.",
        "button_content": "Sign up",
        route: "/signup"
    }
]

