import React, { useState } from 'react';
import { CartItem } from '../App';
import NewDishModal from './NewDishModal';

const menuCategories = [
  {
    name: "German Specialties",
    items: [
      { name: 'German Sausage Platter', price: 1200, description: 'Assorted German sausages', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Wiener Schnitzel', price: 1300, description: 'Served with your Choice of Fries, Potato or Green Salad & tartar sauce', image: 'https://images.unsplash.com/photo-1599921841143-819065a55cc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Hunter Style Schnitzel', price: 1300, description: 'Topped with mushroom sauce. Served with your Choice of fries or mashed potato', image: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    ]
  },
  {
    name: "Breakfast",
    items: [
      { name: 'Breakfast', price: 900, description: 'Bacon, Eggs, Sausages, Beans & Toast', image: 'https://images.unsplash.com/photo-1588503823575-2744851a4b56?q=80&w=3203&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ]
  },
  {
    name: "Soups",
    items: [
      { name: 'Tomato Soup', price: 600, description: 'Classic tomato soup', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Beef Goulash', price: 900, description: 'Served with baguette slices', image: 'https://images.unsplash.com/photo-1633436374961-09b92742047b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: "Vegetable Soup", price: 400 , image:'https://plus.unsplash.com/premium_photo-1700673590238-a0e3a3795ae2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: "Wonton Soup", options: ["Vegetable", "Chicken", "Pork", "Prawn"], price: 500 ,image:'https://images.unsplash.com/photo-1559948271-7d5c98d2e951?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: "Hot & Sour Soup", options: ["Vegetable", "Chicken"], price: 500 ,image:'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Noodle Soup", options: ["Chicken", "Pork", "Beef"], price: 1250 ,image:'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    ]
  },
  {
    name: "Light Meals & Snacks",
    items: [
      { name: 'Chips', price: 350, description: 'Classic French fries', image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Roast Potatoes', price: 500, description: 'Crispy roasted potatoes', image: 'https://images.unsplash.com/photo-1592837101613-35f33e978e2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Fried Veg Samosa (large)', price: 100, description: 'Vegetable-filled pastry', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Sausage Beef / Pork', price: 100, description: 'Choice of beef or pork sausage', image: 'https://images.unsplash.com/photo-1588347785102-2944ba63d0c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Hotdog Beef or Pork', price: 500, description: 'Classic hotdog with choice of meat', image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Chicken Nuggets with Chips', price: 600, description: 'Crispy chicken nuggets served with fries', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    ]
  },
  {
    name: "Chicken",
    items: [
      { name: 'Grilled Chicken', price: 1200, description: 'Served with sautéed onions and tomatoes', image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Quarter Chicken', price: 650, description: 'Grilled quarter chicken', image: 'https://plus.unsplash.com/premium_photo-1695931841253-1e17e7ed59b5?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Half Chicken', price: 950, description: 'Grilled half chicken', image: 'https://images.unsplash.com/photo-1598515214146-dab39da1243d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Chicken Burger with Cheese', price: 850, description: 'Garnished with sautéed onions and tomatoes', image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    ]
  },
  {
    name: "Fish",
    items: [
      { name: 'Fish and Chips', price: 1300, description: 'Traditional British Fish & Chips', image: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Grilled Prawns', price: 1700, description: 'Plain, Pili Pili or Garlic', image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Calamari', price: 950, description: 'Grilled or deep fried', image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Grilled Tilapia Fillet', price: 1350, description: 'Lemon or spicy', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Fish Fingers', price: 800, description: 'Served with your Choice of parsley potatoes, rice, fries or salad', image: 'https://images.unsplash.com/photo-1600271801401-65fe5f623a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    ]
  },
  {
    name: "Salads",
    items: [
      { name: 'Greek Salad', price: 800, description: 'With Feta Cheese', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Chicken Salad', price: 800, description: 'Fresh salad with grilled chicken', image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    ]
  },
  {
    name: "Lamb",
    items: [
      { name: 'Lamb Chops', price: 1150, description: 'Served with your Choice of roast or mashed potatoes, vegetables & gravy', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    ]
  },
  {
    name: "Pork",
    items: [
      { name: 'Pork Chops', price: 1250, description: 'Served with your Choice of mashed or roast potatoes, veg & gravy', image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    ]
  },
  {
    name: "Indian Wraps",
    items: [
      { name: "Murg Malai / Chicken Tikka / Masala", price: 1050 , image: 'https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=800'},
      { name: "Paneer Tikka Wrap", price: 950 ,image:'https://images.pexels.com/photos/29125420/pexels-photo-29125420/free-photo-of-mexican-wraps-and-fries-with-dipping-sauces.jpeg?auto=compress&cs=tinysrgb&w=800'},
    ]
  },
  {
    name: "Chicken Dishes",
    description: "All served with choice of naan or rice",
    items: [
      { name: "Butter Chicken (Murgh Mahal)", description: "Chicken Breast Cubes in spicy, rich tomato, butter and cream gravy", price: 1250 ,image: 'https://images.pexels.com/photos/9967258/pexels-photo-9967258.jpeg?auto=compress&cs=tinysrgb&w=800'},
      { name: "Chicken Tikka Masala", description: "Tandoored Chicken Breast Cubes in a spicy masala gravy", price: 1250 ,image:'https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Coconut Cream Chicken", description: "Chicken Breast Cubes in a creamy coconut enriched gravy", price: 1250 ,image:'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Chicken Vindaloo", description: "Chicken Breast Cubes in hot tangy vindaloo gravy", price: 1250 ,image:'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg'},
      { name: "Dry Chili Garlic Chicken", description: "Chicken Breast Cubes cooked with spices, garlic, chili, tomato, and onion", price: 1250 ,image:'https://images.pexels.com/photos/2232433/pexels-photo-2232433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Chicken Korma", description: "Chicken Breast Cubes in creamy cashew nut gravy", price: 1250 ,image:'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg'},
      { name: "Palak Chicken", description: "Chicken Breast Cubes in tomato, onions, spinach, and spices", price: 1250 ,image:'https://images.pexels.com/photos/10078268/pexels-photo-10078268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    ]
  },
  {
    name: "Vegetarian Dishes",
    description: "All served with choice of naan or rice",
    items: [
      { name: "Paneer Tikka", description: "Tandoored Cottage Cheese Cubes marinated in spices", price: 1150 ,image:'https://images.pexels.com/photos/2741461/pexels-photo-2741461.jpeg'},
      { name: "Makhani Paneer", description: "Paneer in a spicy, rich tomato, butter and cream gravy", price: 1150 ,image:'https://images.pexels.com/photos/28674541/pexels-photo-28674541/free-photo-of-delicious-paneer-tikka-in-rich-tomato-gravy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Palak Paneer", description: "Cubes of cottage cheese with ground spinach and spices", price: 1150 ,image:'https://images.pexels.com/photos/4958731/pexels-photo-4958731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Dry Chili Garlic Paneer", description: "Paneer cooked in spices, garlic, chili, tomato, and onion", price: 1150 ,image:'https://images.pexels.com/photos/10522937/pexels-photo-10522937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Dahl Makhani", description: "Black lentils cooked in a spicy creamy sauce", price: 800 ,image:'https://images.pexels.com/photos/5410403/pexels-photo-5410403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    ]
  },
  {
    name: "Marinated BBQ",
    items: [
      { name: "Chicken Tikka Boneless", price: 1200 ,image:'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Tandoori Chicken on the Bone (Half)", price: 1200 ,image:'https://images.pexels.com/photos/5031943/pexels-photo-5031943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Tandoori Chicken on the Bone (Full)", price: 1800 ,image:'https://images.pexels.com/photos/20371522/pexels-photo-20371522/free-photo-of-meat-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Shish Kebab", price: 1150 ,image:'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg'},
      { name: "Chooza Chicken", price: 1800 ,image:'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    ]
  },
  {
    name: "Vegetarian BBQ",
    items: [
      { name: "Paneer Tikka", price: 1050 ,image:'https://images.pexels.com/photos/2741461/pexels-photo-2741461.jpeg'},
      { name: "Tandoori Vegetable Seek", price: 800 ,image:'https://images.pexels.com/photos/2092916/pexels-photo-2092916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    ]
  },
  {
    name: "Mutton Dishes",
    description: "All served with choice of naan or rice",
    items: [
      { name: "Mutton Tikka Masala", description: "Tandoored Mutton cubes in special masala sauce", price: 1150 ,image:'https://images.pexels.com/photos/6419694/pexels-photo-6419694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Mutton Vindaloo", description: "Mutton cubes cooked in hot spicy vindaloo sauce", price: 1150 ,image:'https://images.pexels.com/photos/18852549/pexels-photo-18852549/free-photo-of-hand-holding-meal-with-meat-on-bone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Dry Chili Garlic Mutton", description: "Mutton slices cooked with spices, garlic, chili, tomato, and onion", price: 1150 ,image:'https://plus.unsplash.com/premium_photo-1689596509991-fd47c16f3e7a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: "Keema Mattar", description: "Mutton mince cooked with peas and masala", price: 1150 ,image:'https://images.pexels.com/photos/5409014/pexels-photo-5409014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Coconut Cream Mutton", description: "Mutton cubes in a creamy coconut enriched gravy", price: 1150 ,image:'https://images.pexels.com/photos/6123071/pexels-photo-6123071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    ]
  },
  {
    name: "Fish Dishes",
    description: "All served with choice of naan or rice",
    items: [
      { name: "Fish Masala", description: "Tilapia fillet cooked in special masala gravy", price: 1300 ,image:'https://images.pexels.com/photos/29161607/pexels-photo-29161607/free-photo-of-sushi-boat-platter-with-varied-rolls-and-sashimi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Dry Chili Garlic Fish", description: "Tilapia fillet cooked with spices, garlic, chili, tomato, and onion", price: 1300 ,image:'https://images.pexels.com/photos/8995209/pexels-photo-8995209.jpeg?auto=compress&cs=tinysrgb&w=800'},
      { name: "Dry Chili Garlic Prawns", description: "Prawns cooked with spices, garlic, chili, tomato, and onion", price: 1650 ,image:'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=800'},
      { name: "Coconut Cream Prawns", description: "Prawns cooked in creamy coconut enriched gravy", price: 1650 ,image:'https://images.pexels.com/photos/5272102/pexels-photo-5272102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    ]
  },
  {
    name: "Rice/Pilau/Biryani",
    items: [
      { name: "Plain Basmati Rice", price: 300 ,imafge:'https://images.pexels.com/photos/8250738/pexels-photo-8250738.jpeg?auto=compress&cs=tinysrgb&w=800'},
      { name: "Mutton Biryani", price: 950 ,image:'https://images.pexels.com/photos/9609863/pexels-photo-9609863.jpeg'},
      { name: "Chicken Biryani", price: 950 ,image:'https://images.pexels.com/photos/23830980/pexels-photo-23830980/free-photo-of-close-up-of-a-dish-with-rice-and-chicken.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    ]
  },
  {
    name: "Naans",
    items: [
      { name: "Plain Naan / Roti", price: 200 ,image:'https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Butter Naan", price: 250 ,image:'https://images.pexels.com/photos/28497406/pexels-photo-28497406/free-photo-of-delicious-indian-curry-with-naan-bread.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Garlic Naan", price: 250 ,image:'https://images.pexels.com/photos/12737799/pexels-photo-12737799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Cheese Naan", price: 350 ,image:'https://images.pexels.com/photos/23547666/pexels-photo-23547666/free-photo-of-rice-with-chicken-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=800'},
      { name: "Garlic Chili Cheese Naan", price: 350 ,image:'https://images.pexels.com/photos/815525/pexels-photo-815525.jpeg?auto=compress&cs=tinysrgb&w=800'},
    ]
  },
  {
        name: "Vegetables",
        items: [
          { name: "Fried Spring Rolls (Vegetables)", quantity: "4 pieces", price: 400 ,image:'https://images.pexels.com/photos/840216/pexels-photo-840216.jpeg?auto=compress&cs=tinysrgb&w=800'},
          { name: "Fried Dumplings (Vegetables)", quantity: "4 pieces", price: 400 ,image:'https://images.pexels.com/photos/7287715/pexels-photo-7287715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
          { name: "Steamed Dumplings (Vegetables)", quantity: "4 pieces", price: 400 ,image:'https://images.pexels.com/photos/24709066/pexels-photo-24709066/free-photo-of-dumplings-served-in-wooden-bowl.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
        ]
      },
      {
        name: "Non-Vegetables",
        items: [
          { name: "Fried Spring Rolls (Chicken)", quantity: "4 pieces", price: 400 ,image:"https://images.pexels.com/photos/14849252/pexels-photo-14849252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
          { name: "Fried Dumplings (Chicken, Pork or Prawn)", quantity: "4 pieces", price: 400 ,image:'https://images.pexels.com/photos/27819681/pexels-photo-27819681/free-photo-of-a-platter-with-meat-vegetables-and-onions-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
          { name: "Steamed Dumplings (Chicken, Pork or Prawn)", quantity: "4 pieces", price: 400 ,image:'https://images.pexels.com/photos/2098120/pexels-photo-2098120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
          { name: "Crispy Chicken Wings with Garlic & Chili", price: 950 ,image:'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
          { name: "Prawn Tempura", quantity: "6 pieces", price: 1450 ,image:"https://images.pexels.com/photos/3622477/pexels-photo-3622477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
          { name: "Deep-fried Pork Spare Ribs", price: 1150 ,image:'https://images.pexels.com/photos/16014262/pexels-photo-16014262/free-photo-of-fries-meat-and-sausages.jpeg?auto=compress&cs=tinysrgb&w=800'},
        ]
      },
  {
    name: "Beef",
    items: [
      { name: "Shredded Beef with Chili Sauce", price: 1150 ,image:'https://images.pexels.com/photos/8697520/pexels-photo-8697520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Beef in Oyster Sauce", price: 1150 ,image:"https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
      { name: "Beef in Black Bean Sauce", price: 1150 ,image:"https://images.pexels.com/photos/2098116/pexels-photo-2098116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
      { name: "Beef with Green Pepper", price: 1150 ,image:"https://images.pexels.com/photos/19503835/pexels-photo-19503835/free-photo-of-mouth-watering-meat-with-vegetables.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
      { name: "Dry Chili Beef", price: 1150 ,image:'https://images.pexels.com/photos/13749940/pexels-photo-13749940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Beef Chop Suey", price: 1150 ,image:'https://images.pexels.com/photos/17772829/pexels-photo-17772829/free-photo-of-meat-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=800'},
      { name: "Beef Sizzler", price: 1250 ,image:"https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    ]
  },
  {
    name: "Pork",
    items: [
      { name: "Sweet & Sour Pork", price: 1200 ,image:'https://images.pexels.com/photos/15797951/pexels-photo-15797951/free-photo-of-stir-fried-sweet-and-sour-sauce-with-vegetables-in-a-white-dish-on-a-white-isolated-background-thai-food-top-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Shredded Pork", price: 1200 ,image:'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800'},
      { name: "Pork Sizzler", price: 1300 ,image:'https://images.pexels.com/photos/236887/pexels-photo-236887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    ]
  },
  {
    name: "Chicken",
    items: [
      { name: "Sweet and Sour Chicken", price: 1150 ,image:'https://images.pexels.com/photos/5848527/pexels-photo-5848527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Honey Chili Chicken", price: 1150 ,image:'https://images.pexels.com/photos/5339083/pexels-photo-5339083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Schezuan Chicken", price: 1150 ,image:'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Dry Chili Chicken", price: 1150 ,image:'https://images.pexels.com/photos/10309473/pexels-photo-10309473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Gong Bao Chicken", price: 1150 ,image:'https://images.pexels.com/photos/14855139/pexels-photo-14855139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Chicken with Garlic & Ginger", price: 1150 ,image:'https://images.pexels.com/photos/10277948/pexels-photo-10277948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Chicken with Cashew Nuts", price: 1150 ,image:'https://images.pexels.com/photos/1603896/pexels-photo-1603896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Chicken in Black Bean Sauce", price: 1150 ,image:'https://images.pexels.com/photos/27556985/pexels-photo-27556985/free-photo-of-traditional-caribbean-cuisine.jpeg?auto=compress&cs=tinysrgb&w=800'},
      { name: "Chicken Sizzler", price: 1250 ,image:'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    ]
  },
  {
    name: "Seafood",
    items: [
      { name: "Sweet and Sour Prawns", price: 1550 ,image:'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Prawns with Hot Garlic Sauce & Vegetables", price: 1550 },
      { name: "Dry Chili Garlic Calamari", price: 1000 }
    ]
  },
  {
    name: "Vegetarian",
    items: [
      { name: "Dry Chili Garlic Mushrooms", price: 750 ,image:'https://images.pexels.com/photos/16068590/pexels-photo-16068590/free-photo-of-a-bowl-of-ramen-with-meat-and-eggs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Stir Fry Mixed Vegetables", price: 600 ,image:'https://images.pexels.com/photos/10398944/pexels-photo-10398944.jpeg?auto=compress&cs=tinysrgb&w=800'},
      { name: "Vegetable Sizzler", price: 750 ,image:'https://images.pexels.com/photos/20350178/pexels-photo-20350178/free-photo-of-food-on-plate.jpeg?auto=compress&cs=tinysrgb&w=800'},
    ]
  },
  {
    name: "Rice",
    items: [
      { name: "Steamed Rice", price: 300 ,image:'https://images.pexels.com/photos/8423376/pexels-photo-8423376.png?auto=compress&cs=tinysrgb&w=800'},
      { name: "Egg Fried Rice", price: 450 ,image:'https://images.pexels.com/photos/28503596/pexels-photo-28503596/free-photo-of-delicious-egg-fried-rice-in-blue-bowl.jpeg?auto=compress&cs=tinysrgb&w=800'},
      { name: "Vegetable Fried Rice", price: 450 ,image:'https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=800'},
      { name: "Chicken Fried Rice", price: 650 ,image:'https://images.pexels.com/photos/28041439/pexels-photo-28041439/free-photo-of-plate-with-spicy-instant-noodles-white-rice-fried-chicken-with-sambal-cucumber-and-tomato-a-packet-of-indomie-mi-goreng-rasa-ayam-geprek-noodles-is-placed-next-to-the-plate.jpeg?auto=compress&cs=tinysrgb&w=800'},
      { name: "Beef Fried Rice", price: 650 ,image:'https://images.pexels.com/photos/29160634/pexels-photo-29160634/free-photo-of-flavorful-shrimp-fried-rice-with-vegetables.jpeg?auto=compress&cs=tinysrgb&w=800'},
    ]
  },
  {
    name: "Chow Mein",
    items: [
      { name: "Vegetable Noodles", price: 750 ,image:'https://images.pexels.com/photos/5848496/pexels-photo-5848496.jpeg?auto=compress&cs=tinysrgb&w=800'},
      { name: "Pork Noodles", price: 1050 ,image:'https://images.pexels.com/photos/698549/pexels-photo-698549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Chicken Noodles", price: 1050 ,image:'https://images.pexels.com/photos/19264273/pexels-photo-19264273/free-photo-of-close-up-of-meal-in-bowl.jpeg?auto=compress&cs=tinysrgb&w=800'},
      { name: "Beef Noodles", price: 1050 ,image:'https://images.pexels.com/photos/2591594/pexels-photo-2591594.jpeg?auto=compress&cs=tinysrgb&w=800'},
    ]
  },
  {
    name: "Cocktails",
    items: [
      { name: "Margarita", description: "Classic tequila cocktail with lime and a salted rim",price: 850 ,image:'https://images.pexels.com/photos/5433721/pexels-photo-5433721.jpeg?auto=compress&cs=tinysrgb&w=800'},
      { name: "Mojito", description: "Refreshing blend of rum, mint, lime, and soda", price: 750 ,image:'https://images.pexels.com/photos/12591350/pexels-photo-12591350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Pina Colada",description: "Tropical cocktail with pineapple, coconut cream, and rum",  price: 900 ,image:'https://images.pexels.com/photos/24870656/pexels-photo-24870656/free-photo-of-a-drink-with-a-pineapple-garnish-and-a-white-rim.jpeg?auto=compress&cs=tinysrgb&w=800'},
      { name: "Old Fashioned", description: "Whiskey cocktail with bitters, sugar, and an orange twist",  price: 950 ,image:'https://images.pexels.com/photos/8346711/pexels-photo-8346711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { name: "Cosmopolitan", description: "Vodka, cranberry juice, triple sec, and lime for a zesty flavor",   price: 800 ,image:'https://images.pexels.com/photos/1304542/pexels-photo-1304542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    ]
  },
  {
    name: "Pasta",
    items: [
      { name: 'Spaghetti Bolognaise', price: 750, description: 'With Parmesan cheese', image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Spaghetti Diablo', price: 650, description: 'With olive oil, garlic, fresh chilies & Parmesan cheese', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    ]
  },
];

interface MenuSectionProps {
  addToCart: (item: CartItem) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].name);

  return (
    <section id="menu" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black-600">Our Menu</h2>
        <div className="flex flex-wrap justify-center mb-8 overflow-x-auto">
          {menuCategories.map((category) => (
            <button
              key={category.name}
              className={`px-4 py-2 m-2 rounded-full ${
                activeCategory === category.name
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-red-600 hover:bg-red-100'
              } transition duration-300`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories
            .find((category) => category.name === activeCategory)
            ?.items.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-yellow-600 font-bold">{item.price} Ksh</p>
                  <button
                    onClick={() => addToCart({ name: item.name, price: item.price, quantity: 1 })}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-yellow-700 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

const Menu: React.FC = () => {
  const [showModal, setShowModal] = useState(true); // Initially true to show on load

  // Close modal after a few seconds or on user action
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(false), 5000); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showModal && <NewDishModal onClose={() => setShowModal(false)} />}
      <h1>Menu</h1>
    </div>
  );
};

export default MenuSection;