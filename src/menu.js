


const menuItems = [
    {
      itemName: "Jerk Souvlaki Skewers",
      description: "Tender chicken marinated in jerk spices, skewered and grilled Greek-style. Served with tzatziki and plantain chips.",
      imgUrl: "https://images.pexels.com/photos/604659/pexels-photo-604659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  // Unique images using 'seed' parameter
    },
    {
      itemName: "Mediterranean Mofongo",
      description: "Puerto Rican mashed plantains infused with garlic and olive oil, topped with grilled Mediterranean vegetables and feta cheese.",
      imgUrl: "https://www.dominicancooking.com/wp-content/uploads/how-to-make-mofongo-DSC9300.jpg"
    },
    {
      itemName: "Coconut Curry Paella",
      description: "Saffron rice cooked with coconut milk and Caribbean spices, loaded with seafood and chorizo.",
      imgUrl: "https://thespicepeople.com.au/wp-content/uploads/2023/10/FOTW_Recipe_SpanishVegetablePaella-_fotw00302.png"
    },
    {
      itemName: "Grilled Octopus with Mango Salsa",
      description: "Tender grilled octopus served with a bright mango salsa and drizzled with aged balsamic reduction.",
      imgUrl: "https://images.pexels.com/photos/10038710/pexels-photo-10038710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      itemName: "Ackee and Saltfish Bruschetta",
      description: "Jamaica's national dish reimagined: creamy ackee and saltfish spread on toasted ciabatta with fresh tomatoes and basil.",
      imgUrl: "https://images.pexels.com/photos/5638331/pexels-photo-5638331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      itemName: "Tamarind Glazed Lamb Chops",
      description: "Succulent lamb chops glazed with tangy tamarind sauce, served with mint couscous and grilled pineapple.",
      imgUrl: "https://images.pexels.com/photos/13304044/pexels-photo-13304044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      itemName: "Callaloo and Feta Spanakopita",
      description: "Flaky phyllo pastry filled with a blend of Caribbean callaloo greens and creamy feta cheese.",
      imgUrl: "https://images.pexels.com/photos/5150320/pexels-photo-5150320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      itemName: "Rum-Flambéed Saganaki",
      description: "Greek kefalograviera cheese flambéed tableside with dark Caribbean rum, served with warm pita bread.",
      imgUrl: "https://www.shutterstock.com/image-photo/banana-flambe-rum-aged-honey-600w-1321949060.jpg"
    },
    {
      itemName: "Coconut Panna Cotta with Passion Fruit",
      description: "Silky smooth coconut panna cotta topped with a vibrant passion fruit coulis and toasted coconut flakes.",
      imgUrl: "https://images.pexels.com/photos/319942/pexels-photo-319942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      itemName: "Baklava Bread Pudding",
      description: "Warm bread pudding infused with honey, cinnamon, and crushed nuts, served with a scoop of rum raisin ice cream.",
      imgUrl: "https://images.pexels.com/photos/6163332/pexels-photo-6163332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    // Add more items as necessary
  ];
  
  let menuTiles = "";

  menuItems.forEach(
    item => {
      menuTiles += 
      `<div class="tile" id="menu-tile${menuItems.indexOf(item)}">
                    <h2>${item.itemName}</h2>
                    <p>${item.description}</p>
                    <img src=${item.imgUrl} alt=${item.itemName}/>
                </div>`
    }
  );
  
            const menuPage = `<div class="container" id="menu-content">
                ${menuTiles}
            </div>`;
        export default menuPage;
    
