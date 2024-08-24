// carousel images
const images = [
  "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lhnwo9ezxo7mpkpvtdcy",
];

//categories
const items = [
  {
    id: "1",
    name: "fastest delivery",
  },
  {
    id: "2",
    name: "rating 4.0+",
  },
  {
    id: "3",
    name: "offers",
  },
  {
    id: "4",
    name: "cuisines",
  },
  {
    id: "5",
    name: "MAX Safety",
  },
  {
    id: "6",
    name: "Pro",
  },
];

//starting desing
const data = [
  {
    id: "0",
    name: "Offers",
    description: "Upto 50% off",
    image: "https://cdn-icons-png.flaticon.com/128/9356/9356378.png",
  },
  {
    id: "1",
    name: "Legends",
    description: "Across India",
    image: "https://cdn-icons-png.flaticon.com/128/8302/8302686.png",
  },
  {
    id: "2",
    name: "Gourmet",
    description: "Selections",
    image: "https://cdn-icons-png.flaticon.com/128/1065/1065715.png",
  },
  {
    id: "3",
    name: "Healthy",
    description: "Curated dishes",
    image: "https://cdn-icons-png.flaticon.com/128/415/415744.png",
  },
];

//hotels
const hotels = [
  {
    id: "0",
    featured_image:
      "https://b.zmtcdn.com/data/pictures/2/18820472/b07647252aae32993047faf13a1cccf4.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    images: [
      {
        id: "0",
        image:
          "https://b.zmtcdn.com/data/pictures/chains/8/51828/68d04135bbac1e3d5ff5a87d45974da1.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        description: "Desi Burrito • Rs249",
      },
      {
        id: "0",
        image:
          "https://b.zmtcdn.com/data/pictures/chains/8/51828/1f8008fc1cec3cd7ea2b559c32b1e642.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        description: "Indain Burrito • Rs149",
      },
    ],
    name: "Hauz Khas Social",
    cuisines: "North Indian • Fast Food • 160 for one",
    time: "35 - 40 min • 1Km",
    average_cost_for_two: 1600,
    aggregate_rating: 4.3,
    adress: "9-A & 12, Hauz Khas Village, New Delhi",
    smalladress: "Hauz Khas Village, New Delhi",
    offer: "₹80 OFF",
    no_of_Delivery: 1500,
    latitude: 12.9916,
    longitude: 77.5712,
  },

  {
    id: "1",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4rgOs6C9rJuwL_sjJB5n7CeGKEA-Xg2yxIYq025B7_7avmruQHZ0DPpJa8GiSzPkEfas&usqp=CAU",
    name: "Qubitos - The Terrace Cafe",
    cuisines: "Thai, European, Mexican",
    average_cost_for_two: 1500,
    aggregate_rating: 4.5,
    adress:
      "C-7, Vishal Enclave, Opposite Metro Pillar 417, Rajouri Garden, New Delhi",
    smalladress: "Rajouri Garden, New Delhi",
    offer: "₹80 OFF",
    no_of_Delivery: 2500,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "44 min",
  },

  {
    id: "2",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
    name: "The Hudson Cafe",
    cuisines: "Cafe, Italian, Continental",
    average_cost_for_two: 850,
    aggregate_rating: 4.3,
    adress:
      "2524, 1st Floor, Hudson Lane, Delhi University-GTB Nagar, New Delhi",
    smalladress: "Delhi University-GTB Nagar",
    offer: "₹60 OFF",
    no_of_Delivery: 1800,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "20 min",
  },

  {
    id: "3",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1wuHjGnvTD4Aewe_M2-_5OSwPiPv1kUvMljF-sqoPRzvoFxD06BK2ac2jV-ZmQG6lQTg&usqp=CAU",
    name: "Summer House Cafe",
    cuisines: "Italian, Continental",
    average_cost_for_two: 1850,
    aggregate_rating: 4.1,
    adress:
      "1st Floor, DDA Shopping Complex, Aurobindo Place, Hauz Khas, New Delhi",
    smalladress: "Hauz Khas, New Delhi",
    offer: "₹50 OFF",
    no_of_Delivery: 1700,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "38 min",
  },

  {
    id: "4",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXumfbiH2jcIY8xq9QW6B1QGoh3OJ596SnpQ&usqp=CAU",
    name: "38 Barracks",
    cuisines: "North Indian, Italian, Asian",
    average_cost_for_two: 1600,
    aggregate_rating: 4.4,
    adress: "M-38, Outer Circle, Connaught Place, New Delhi",
    smalladress: "Connaught Place, New Delhi",
    offer: "₹70 OFF",
    no_of_Delivery: 1230,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "51 min",
  },
  {
    id: "5",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAW6AHZuQtR_1d9WPZn5mjK_jG-aAJxYfLQ&usqp=CAU",
    name: "Terra Mayaa Restaurant",
    cuisines: "North Indian, Continental, Italian",
    aggregate_rating: 3.5,
    adress: "6th Floor, Anil Plaza 2, G.S. Road, Christian Basti",
    smalladress: "Anil Plaza 2, G.S. Road",
    offer: "₹55 OFF",
    no_of_Delivery: 500,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "42 min",
  },
  {
    id: "6",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvPe-0FZVXXBJkBWf--jnjCcKN6PxD1Zgdw&usqp=CAU",
    name: "Mocha Hotel",
    cuisines: "Cafe, Italian",
    aggregate_rating: 4.2,
    adress: "Christian Basti, Guwahati",
    smalladress: "Christian Basti, Guwahati",
    offer: "₹90 OFF",
    no_of_Delivery: 1100,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "34 min",
  },
  {
    id: "7",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVnb3JlCmtRJUTXo3Tj3dl_ZPjq2ScYFE6g&usqp=CAU",
    name: "4 Seasons",
    cuisines: "Chinese, North Indian",
    aggregate_rating: 4.5,
    adress:
      "Opposite Institute of Social Science, Bhuban Road, Uzan Bazaar, Guwahati",
    smalladress: "Bhuban Road, Uzan Bazaar, Guwahati",
    offer: "₹55 OFF",
    no_of_Delivery: 1500,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "30 min",
  },
  {
    id: "8",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsboAN558yvuCNpy0Lm40ZMT7iYZRkfbL6xA&usqp=CAU",
    name: "Shanghai Salsa",
    cuisines: "Continental, Fast Food, Chinese",
    aggregate_rating: 4.1,
    adress:
      "37, 1st Floor, Hatigarh Chariali, Mother Teresa Road, Zoo Tiniali Area, Zoo Tiniali, Guwahati",
    smalladress: "Mother Teresa Road,Guwahati",
    offer: "₹75 OFF",
    no_of_Delivery: 1500,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "45 min",
  },
  {
    id: "9",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30R3IntPKgz0A7WzeylvnDyM8EwmAfE2qXA&usqp=CAU",
    name: "Underdoggs Sports Bar & Grill",
    cuisines: "North Indian, Continental",
    aggregate_rating: 3.9,
    adress:
      "1st Floor, Central Mall, G.S. Road, Sree Nagar, Christian Basti, Guwahati",
    smalladress: "Sree Nagar, Christian Basti, Guwahati",
    offer: "₹70 OFF",
    no_of_Delivery: 2500,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "33 min",
  },
  {
    id: "10",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdGrJhslCsWFMNhndCotN4HNucd_pm9nQSA&usqp=CAU",
    name: "Fat Belly",
    cuisines: "Asian, Chinese, Tibetan",
    aggregate_rating: 4.5,
    adress:
      "Opposite Rabindra Bhawan, GNB Road, Ambari, Dighalipukhuri East, Uzan Bazaar, Guwahati",
    smalladress: "Dighalipukhuri East, Guwahati",
    offer: "₹60 OFF",
    no_of_Delivery: 900,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "53 min",
  },
  {
    id: "11",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEO2PLGXFMmFjaR1Kj19mndyPl-Wh4Kbq0Hw&usqp=CAU",
    name: "Makhan Fish and Chicken Corner",
    cuisines: "Asian, Chinese",
    aggregate_rating: 4.5,
    adress: "21-A, Near Madaan Hospital, Majitha Road, Basant Nagar, Amritsar",
    smalladress: "Basant Nagar, Amritsar",
    offer: "₹55 OFF",
    no_of_Delivery: 1200,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "43 min",
  },
  {
    id: "12",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzUsgy4YrizXUafeKLzAWasb93wvT_TSIvgw&usqp=CAU",
    name: "Bharawan Da Dhaba",
    cuisines: "North Indian, Fast Food",
    aggregate_rating: 3.6,
    adress: "Near Amritsar Municipal Corporation, Town Hall, Amritsar",
    smalladress: "Town Hall, Amritsar",
    offer: "₹70 OFF",
    no_of_Delivery: 1600,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "28 min",
  },
  {
    id: "13",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFXsKQIgGajlkt7qydP7TS6xpVD_gKY6ufnw&usqp=CAU",
    name: "The Kulcha Land",
    cuisines: "North Indian,Asian",
    aggregate_rating: 4.3,
    adress:
      "Opposite M.K Hotel, District Shopping Centre, Ranjit Avenue, Amritsar",
    smalladress: "Ranjit Avenue, Amritsar",
    offer: "₹80 OFF",
    no_of_Delivery: 2600,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "32 min",
  },
  {
    id: "14",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0iR3PZXGiNSyJf8XCMHuF13y9KL2owcNYQ&usqp=CAU",
    name: "Brothers Dhaba",
    cuisines: "North Indian",
    aggregate_rating: 4.6,
    adress:
      "Golden Temple Out Road, Opposite Amritsar Municipal Corporation, Town Hall, Amritsar",
    smalladress: "Amritsar",
    offer: "₹65 OFF",
    no_of_Delivery: 1300,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "42 min",
  },
  {
    id: "15",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHbn8yLak8QNu-M5P4ttVPHFkvKwz4G48x7w&usqp=CAU",
    name: "Charming Chicken",
    cuisines: "North Indian",
    aggregate_rating: 4.6,
    adress:
      "Golden Temple Out Road, Opposite Amritsar Municipal Corporation, Town Hall, Amritsar",
    smalladress: "Near Basant Nagar, Amritsar",
    offer: "₹45 OFF",
    no_of_Delivery: 700,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "28 min",
  },
  {
    id: "16",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQSJX9mRckG3R7NfvYCRe-08s-z22tX-6nQ&usqp=CAU",
    name: "Beera Chicken Corner",
    cuisines: "North Indian",
    aggregate_rating: 4.4,
    adress:
      "Opposite Bandari Hospital, Sehaj Avenue, Majitha Road, Near White Avenue, Amritsar",
    smalladress: "Near White Avenue, Amritsar",
    offer: "₹80 OFF",
    no_of_Delivery: 1400,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "34 min",
  },
  {
    id: "17",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDOJlhGwhda4tsD8Rgk1A97akTRV8QJJC4DA&usqp=CAU",
    name: "Brothers' Amritsari Dhaba",
    cuisines: "North Indian",
    aggregate_rating: 4.2,
    adress: "Phawara Chowk, Town Hall, Amritsar",
    smalladress: "Town Hall, Amritsar",
    offer: "₹40 OFF",
    no_of_Delivery: 1600,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "40 min",
  },
  {
    id: "18",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGqVUxo6HO-CtXn-AHgAin1tvN4l8_A0e1Q&usqp=CAU",
    name: "La Roma Pizzeria",
    cuisines: "Fast Food, Italian",
    aggregate_rating: 4.6,
    adress: " Ranjit Avenue, Amritsar",
    smalladress: " Ranjit Avenue, Amritsar",
    offer: "₹40 OFF",
    no_of_Delivery: 2200,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "46 min",
  },
  {
    id: "19",
    featured_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpI5t_Hgch4-I9edPRV4YNeZKgMX1iHtQng&usqp=CAU",
    name: "Crystal Restaurant",
    cuisines: "North Indian, Mughlai",
    aggregate_rating: 3.5,
    adress: " Crystal Chowk, Queens Road, INA Colony, Amritsar",
    smalladress: "INA Colony, Amritsar",
    offer: "₹80 OFF",
    no_of_Delivery: 2500,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "22 min",
  },
];

//recommended
const recommended = [
  {
    id: 0,
    name: "Nandhana Palace",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/3/50713/81d0735ce259a6bf800e16bb54cb9e5e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    time: "35 - 45",
    type: "Andhra",
  },
  {
    id: 0,
    name: "GFC Biriyani",
    image:
      "https://b.zmtcdn.com/data/pictures/0/20844770/f9582144619b80d30566f497a02e2c8d.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    time: "10 - 35",
    type: "North Indian",
  },
  {
    id: 0,
    name: "Happiness Dhaba",
    image:
      "https://b.zmtcdn.com/data/reviews_photos/2f1/c66cf9c2c68f652db16f2c0a6188a2f1_1659295848.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    time: "20 - 25",
    type: "North Indian",
  },

  {
    id: 0,
    name: "Happiness Dhaba",
    image:
      "https://b.zmtcdn.com/data/reviews_photos/2f1/c66cf9c2c68f652db16f2c0a6188a2f1_1659295848.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    time: "20 - 25",
    type: "North Indian",
  },
  {
    id: 0,
    name: "Happiness Dhaba",
    image:
      "https://b.zmtcdn.com/data/reviews_photos/2f1/c66cf9c2c68f652db16f2c0a6188a2f1_1659295848.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    time: "20 - 25",
    type: "North Indian",
  },
];

//menu
const menu = [
  {
    id: "20",
    name: "Recommended",
    items: [
      {
        id: "101",
        name: "Paneer 65",
        price: 275,
        description:
          "This is served with Raita and gravy and has loaded with chilli paste mixed chicken Kebabs",
        rating: 4.1,
        ratings: 43,
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/druwjzmfmz7qvepq3bkr",
        veg: true,
        bestSeller: false,
        quantity: 1,
      },
      {
        id: "102",
        name: "Chilly Chicken (Boneless)",
        price: 285,
        description:
          "E: 604.42 KCal (163.36 KCal), C: 29.67 Grams (8.02 Grams), P: 50.63 Grams (13.68 Grams), F: 30.94 Grams (8.36 Grams)",
        rating: 4.3,
        ratings: 34,
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ry3c3f518z10t4olu4l7",
        veg: false,
        bestSeller: true,
        quantity: 1,
      },
      {
        id: "103",
        name: "Spl Veg Biryani",
        price: 250,
        description:
          "E: 1327.35 KCal (126.41 KCal), C: 213.24 Grams (20.31 Grams), P: 26.99 Grams (2.57 Grams), F: 38.46 Grams (3.66 Grams)",
        rating: 4.5,
        ratings: 56,
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fsitbray4gq1kxcndqqx",
        veg: true,
        bestSeller: false,
        quantity: 1,
      },
      {
        id: "104",
        name: "Chilly Paneer",
        price: 220,
        description:
          "E: 871.69 KCal (272.40 KCal), C: 21.54 Grams (6.73 Grams), P: 51.90 Grams (16.22 Grams), F: 64.36 Grams (20.11 Grams",
        rating: 3.8,
        ratings: 22,
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/byonwwb8mzxyqluxlqpq",
        veg: true,
        bestSeller: true,
        quantity: 1,
      },
      {
        id: "105",
        name: "Chicken 65",
        price: 300,
        description:
          "E: 544.39 KCal (155.54 KCal), C: 25.11 Grams (7.17 Grams), P: 45.15 Grams (12.90 Grams), F: 27.91 Grams (7.97 Grams)",
        rating: 4.5,
        ratings: 45,
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/x0jegvlf4h7wrgaaqdqi",
        veg: false,
        bestSeller: true,
        quantity: 1,
      },
    ],
  },
  {
    id: "11",
    name: "Rice",
    items: [
      {
        id: "201",
        name: "Chicken Fried Rice",
        price: 260,
        description:
          "E: 1142.26 KCal (163.18 KCal), C: 125.05 Grams (17.86 Grams), P: 40.11 Grams (5.73 Grams), F: 51.37 Grams (7.34 Grams)",
        rating: 4.3,
        ratings: 34,
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/akmx533z73jjbq8avy6v",
        veg: false,
        bestSeller: true,
      },
      {
        id: "202",
        name: "Egg Fried Rice",
        price: 220,
        description:
          "E: 1729.51 KCal (164.72 KCal), C: 204.54 Grams (19.48 Grams), P: 44.03 Grams (4.19 Grams), F: 79.02 Grams (7.53 Grams)",
        rating: 4.3,
        ratings: 52,
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lv6jl9qdscekjmwkxm9l",
        veg: false,
        bestSeller: false,
      },
      {
        id: "203",
        name: "Veg Fried Rice",
        price: 190,
        description:
          "E: 1477.00 KCal (140.67 KCal), C: 204.14 Grams (19.44 Grams), P: 22.90 Grams (2.18 Grams), F: 59.95 Grams (5.71 Grams)",
        rating: 4.6,
        ratings: 56,
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pycpbzawueci1dvhmkr3",
        veg: true,
        bestSeller: true,
      },
      {
        id: "204",
        name: "Jeera Rice",
        price: 195,
        description:
          "E: 1832.30 KCal (174.50 KCal), C: 246.73 Grams (23.50 Grams), P: 27.51 Grams (2.62 Grams), F: 78.15 Grams (7.44 Grams)",
        rating: 4.5,
        ratings: 48,
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xukq8swrwct8usmg4cjv",
        veg: true,
        bestSeller: false,
      },
    ],
  },
];

//data to add in supabase
// add your own names description and timings that pretty simple i will be sending the menu array just paste it as is
[
  {
    id: "1",
    name: "Tacos",
    items: [
      {
        "id:": "101",
        veg: "true",
        name: "Naked Veggie Taco",
        image:
          "https://b.zmtcdn.com/data/dish_photos/b3c/5b46acc7cfd30025439f88f29c3d3b3c.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "249",
        rating: "4.1",
        ratings: "43",
        quantity: "1",
        bestSeller: "false",
        description:
          "A crusted & spice coated plant-based protein patty Taco, layered with warm nacho cheese, lettuce, our signature Mexican Pico De Gallo – a tangy tomato & onion mix along with the goodness of mozzarella and cheddar cheese blend. KCAL 208.02",
      },
      {
        id: "102",
        veg: "true",
        name: "Crunchy Taco Pinto Bean",
        image:
          "https://b.zmtcdn.com/data/dish_photos/a49/18e4cd38093be595aee2d18cb58e3a49.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "109",
        rating: "4.1",
        ratings: "34",
        quantity: "1",
        bestSeller: "true",
        description:
          "It's crunchy. It's delicious! Our signature product served with pinto beans & zesty ranch sauce.",
      },
      {
        id: "103",
        veg: "false",
        name: "CRUNCHY TACOS NON VEG",
        image:
          "https://b.zmtcdn.com/data/dish_photos/83c/7f0dfe72ccff7d34b5cd5d3d020ac83c.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "119",
        rating: "4.3",
        ratings: "56",
        quantity: "1",
        bestSeller: false,
        description:
          "It's crunchy. It's delicious! Our signature product served with Mexican chicken & zesty ranch sauce.",
      },
      {
        id: "105",
        veg: "true",
        name: "Soft Taco Mexican Paneer",
        image:
          "https://b.zmtcdn.com/data/dish_photos/79b/d2c46424c7aa1232cc09d3e7cf27279b.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "149",
        rating: "4.5",
        ratings: "45",
        quantity: "1",
        bestSeller: "true",
        description:
          "The Soft taco has a warm, flour tortilla, served with Mexican paneer & lava sauce.",
      },
    ],
  },
  {
    id: "11",
    name: "Burritos Rolls",
    items: [
      {
        id: "201",
        veg: "true",
        name: "7 Layer Burrito Roll Veg",
        image:
          "https://b.zmtcdn.com/data/dish_photos/d2f/688822c306f8c9d323e2493d21675d2f.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "260",
        rating: "4.3",
        ratings: "34",
        bestSeller: "true",
        description:
          "7 layer burrito is a complete meal in itself. It is a grilled soft tortilla filled 7 different including fajita veg, pinto beans, crispy potato bites, Mexican seasoned rice, tangy salsa, nacho cheese sauce & lava sauce, it's mind blowing.",
      },
      {
        id: "202",
        veg: "true",
        name: "Burrito Supreme Roll - Veg",
        image:
          "https://b.zmtcdn.com/data/dish_photos/acf/36224d0e9f26eae9e539474183f61acf.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "179",
        rating: "4.1",
        ratings: "52",
        bestSeller: "false",
        description:
          "Warm tortilla layered with generous portion of Cheddar & Mozzarella Cheese, filled with Mexican paneer , spices, Jalapeno rice and Reaper ranch sauce.",
      },
      {
        id: "203",
        veg: "true",
        name: "Paneer Makhni Burrito Roll",
        image:
          "https://b.zmtcdn.com/data/dish_photos/46c/2701e958b7e7edceedaaa2097716c46c.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "149",
        rating: "4.5",
        ratings: "52",
        bestSeller: "false",
        description:
          "Warm tortilla layered with paneer simmered in mildly spicy, aromatic makhani tomato gravy, onion, coriander & our signature Mexican Pico de Gallo",
      },
    ],
  },
][
  ({
    id: "1",
    name: "South Indian",
    items: [
      {
        "id:": "101",
        veg: "true",
        name: "Onion Uttapam",
        image:
          "https://b.zmtcdn.com/data/dish_photos/6da/77967298b669ff6c16683920eba9e6da.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "135",
        rating: "4.1",
        ratings: "50",
        quantity: "1",
        bestSeller: "false",
        description:
          "A delectable thickish South Indian fried dosa made of rice flour batter with a generous topping of thinly sliced onions, green chilies, coriander and ground whole spices",
      },
      {
        id: "102",
        veg: "true",
        name: "Uttapam",
        image:
          "https://b.zmtcdn.com/data/dish_photos/47d/65977b6ee2659c40084eb232f257847d.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "115",
        rating: "4.3",
        ratings: "34",
        quantity: "1",
        bestSeller: "true",
        description:
          "A delicious spicy South Indian crisp fried dosa made of rice, lentil, and fenugreek mixed batter served with a spicy sambar and chutney.",
      },
      {
        id: "103",
        veg: "true",
        name: "Medhu Vadai",
        image:
          "https://b.zmtcdn.com/data/dish_photos/9f1/dc22b1cb3b0901637115f89ee89459f1.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "120",
        rating: "4.3",
        ratings: "56",
        quantity: "1",
        bestSeller: false,
        description:
          "Crispy donut-shaped deep-fried fritters made of ground black lentil batter mixed with finely diced onions, peppercorn, green chilies served with a spicy sambar and chutney",
      },
      {
        id: "105",
        veg: "true",
        name: "Ghee Masala Dosa",
        image:
          "https://b.zmtcdn.com/data/dish_photos/5eb/7df78a0c7c01bdaa246a2b4195c495eb.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "149",
        rating: "4.5",
        ratings: "45",
        quantity: "1",
        bestSeller: "true",
        description:
          "A crispy golden brown dosa fried using clarified butter with a spicy filling of mashed potatoes,onions, served with sambar and chutneys.",
      },
    ],
  },
  {
    id: "11",
    name: "Sweets",
    items: [
      {
        id: "201",
        veg: "true",
        name: "Assorted Sweets",
        image:
          "https://b.zmtcdn.com/data/dish_photos/0b8/4b7a40d02572df8a55357a70e87880b8.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "200",
        rating: "4.3",
        ratings: "34",
        bestSeller: "true",
        description:
          "Delicious nutritious assorted almonds, cashews, and pistachio pralines blended in with hot boiled sugar syrup",
      },
      {
        id: "202",
        veg: "true",
        name: "Kaju Kathily",
        image:
          "https://b.zmtcdn.com/data/dish_photos/47e/405660ff9cc274a4945d61d691e5447e.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "305",
        rating: "4.4",
        ratings: "52",
        bestSeller: "false",
        description:
          "A rich nutritious delightful diamond shaped soft sweet fudge made of powdered cashew nuts blended with sugar syrup, clarified butter and flavored with cardamom",
      },
      {
        id: "203",
        veg: "true",
        name: "Premium Kaju Kathily",
        image:
          "https://b.zmtcdn.com/data/dish_photos/46c/2701e958b7e7edceedaaa2097716c46c.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "350",
        rating: "4.5",
        ratings: "52",
        bestSeller: "false",
        description:
          "A rich nutritious delectable diamond shaped soft sweet fudge made of powdered cashew nuts blended with sugar syrup, clarified butter flavored with cardamom and topped with silver foil.",
      },
    ],
  },
  {
    id: "12",
    name: "Recommended",
    items: [
      {
        id: "201",
        veg: "true",
        name: "Mini Tiffin",
        image:
          "https://b.zmtcdn.com/data/dish_photos/b38/dcfc03e1f4223cbf9e4b063b0d79bb38.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "150",
        rating: "4.3",
        ratings: "34",
        bestSeller: "true",
        description:
          "A delicious traditional platter of fluffy idlis, Medhu Vada, Pongal, Rava Kesari, and a Mini Dosa, served with a spicy sambar and chutneys.",
      },
      {
        id: "202",
        veg: "true",
        name: "Chow Chow Bhath",
        image:
          "https://b.zmtcdn.com/data/dish_photos/c53/8d885bcced9e1143baffd6a81da6bc53.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "100",
        rating: "4.4",
        ratings: "52",
        bestSeller: "false",
        description:
          "A South Indian breakfast combo of two semolina-based dishes, a rich sweet dish called Kesari Bath and a spiced dish called Khara Bath served with a spicy chutney",
      },
      {
        id: "203",
        veg: "true",
        name: "Rava Onion Masala",
        image:
          "https://b.zmtcdn.com/data/dish_photos/530/b59adb207b0d126f3d71abe501691530.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "110",
        rating: "4.5",
        ratings: "52",
        bestSeller: "false",
        description:
          "A delicious textured dosa made of semolina, rice and all-purpose flour batter with chopped chilies, onions, pepper corns and coriander served with sambar and chutney.",
      },
    ],
  })
][
  ({
    id: "1",
    name: "Whopper",
    items: [
      {
        "id:": "101",
        veg: "false",
        name: "Mutton Whopper",
        image:
          "https://b.zmtcdn.com/data/dish_photos/2b9/01b7cb04a2f54faa47b9dd52ad8432b9.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "319",
        rating: "4.3",
        ratings: "50",
        quantity: "1",
        bestSeller: "false",
        description:
          "Our signature Whopper with 7 layers between the buns. Flame-Grilled mutton patty, fresh onions, crispy lettuce, juicy tomatoes (seasonal), tangy gherkins, creamy and smoky sauces with new glazed buns. Swaad Aisa, India Jaisa",
      },
      {
        id: "102",
        veg: "false",
        name: "Boss Whopper Mutton",
        image:
          "https://b.zmtcdn.com/data/dish_photos/07f/40ab573c44eada77c739509fdc03807f.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "350",
        rating: "4.3",
        ratings: "34",
        quantity: "1",
        bestSeller: "true",
        description:
          "The biggest Whopper ever, Boss Whopper, with Premium buns, flame grilled mutton patty, cheese, crunchy chips, 'loads of veggies & sauces. Big on flavours, big on bite",
      },
      {
        id: "103",
        veg: "false",
        name: "Boss Whopper Chicken",
        image:
          "https://b.zmtcdn.com/data/dish_photos/cbc/2ece2c5f21d615e1bb12163a495bbcbc.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "220",
        rating: "4.2",
        ratings: "56",
        quantity: "1",
        bestSeller: false,
        description:
          "The biggest Whopper ever, Boss Whopper, with Premium buns, flame grilled chicken patty, cheese, crunchy chips, loads of veggies & sauces. Big on flavours, big on bite",
      },
      {
        id: "105",
        veg: "true",
        name: "Veg Whopper with Cheese",
        image:
          "https://b.zmtcdn.com/data/dish_photos/65b/5b62c9147712a4744c398f9761bd665b.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "149",
        rating: "4.5",
        ratings: "45",
        quantity: "1",
        bestSeller: "true",
        description:
          "Our Signature Whopper With 7 Layers Between The Buns. Extra Crunchy Veg Patty With Cheese Slice, Fresh Onion, Crispy Lettuce, Juicy Tomatoes(seasonal), Tangy Gherkins, Creamy And Smoky Sauces With Xxl Buns",
      },
    ],
  },
  {
    id: "11",
    name: "Deal Of The Day @169",
    items: [
      {
        id: "201",
        veg: "false",
        name: "New Chicken Tandoori Burger",
        image:
          "https://b.zmtcdn.com/data/dish_photos/c31/8bf3ab324756a300edeff94516514c31.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "159",
        rating: "4.3",
        ratings: "34",
        bestSeller: "true",
        description:
          "Flame Grilled Tandoori Chicken, veg khurchan, soft square masala buns. It's Tandoorilicious.",
      },
      {
        id: "202",
        veg: "true",
        name: "Paneer Royale Burger",
        image:
          "https://b.zmtcdn.com/data/dish_photos/8db/82697afab8220f1e8a813a5407f608db.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "170",
        rating: "4.1",
        ratings: "52",
        bestSeller: "false",
        description:
          "Thick Paneer Patty, loads of sauces in soft square masala buns. It's Royally Paneer",
      },
      {
        id: "203",
        veg: "true",
        name: "1 Veg Whopper + 1 Crispy Veg Burger",
        image:
          "https://b.zmtcdn.com/data/dish_photos/cd3/c8cd619f123fb128323cdef81aa1ccd3.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "180",
        rating: "4.1",
        ratings: "52",
        bestSeller: "false",
        description:
          "A rich nutritious delectable diamond shaped soft sweet fudge made of powdered cashew nuts blended with sugar syrup, clarified butter flavored with cardamom and topped with silver foil.",
      },
    ],
  },
  {
    id: "12",
    name: "Family Feast for 4",
    items: [
      {
        id: "201",
        veg: "true",
        name: "Premium Family Feast for 4- Veg",
        image:
          "https://b.zmtcdn.com/data/dish_photos/d79/a9b60d491d38b5a193285d4f5d779d79.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "500",
        rating: "4.3",
        ratings: "34",
        bestSeller: "true",
        description:
          "Veg Whopper + Paneer Royale + Crispy Veg + BK Veggie + 2 Med Fries + 1 Dip + Peri Peri Sachet + Pepsi + Chocolate Thick Shake",
      },
      {
        id: "202",
        veg: "false",
        name: "Premium Family Feast for 4- Chicken",
        image:
          "https://b.zmtcdn.com/data/dish_photos/30c/3ff9747682a64122fd4b4a6e0601130c.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "987",
        rating: "4.4",
        ratings: "52",
        bestSeller: "false",
        description:
          "Save Rs. 200 | 2 Crispy Veg + BK Veggie + Veg Crunchy Taco + 2 Med Fries + 2 Dips + Pepsi + Chocolate Thick Shake",
      },
      {
        id: "203",
        veg: "false",
        name: "Classic Family Feast for 4- Chicken",
        image:
          "https://b.zmtcdn.com/data/dish_photos/138/abf2088a65b3dfcd30d66d2cfd99e138.jpg?fit=around|130:130&crop=130:130;*,*",
        price: "765",
        rating: "4.5",
        ratings: "52",
        bestSeller: "false",
        description:
          "Save Rs. 200 | 2 Crispy Chicken + BK Chicken + Chicken Crunchy Taco + 2 Med Fries + 2 Dips + Pepsi + Chocolate Thick Shake",
      },
    ],
  })
];
