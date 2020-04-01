
const productsList = [
   {
      "index": "0",
      "id": "product1",
      "item": "Shiny Red", 
      "imgSrc": "Images/ProductTemplateImages/ShinyRed.JPG",
      "price": 5.99, 
      "description": "Using the red Polish flag as a basis for its color scheme, this attractive website combines a dark scarlet red with dark pink over a light gray background. Its lively and creative and, at the same time, refined in its use of a minimalist color scheme with different shades of the same hue."
   },
   {
      "index": "1",
      "id": "product2",
      "item": "Deep Blue", 
      "imgSrc": "Images/ProductTemplateImages/DeepBlue.JPG",
      "price": 15.99, 
      "description": "It's hard to look away when faced with a minimalist yet striking design such as this. The dark smoky black background coupled with a striking electric blue make this a winning color scheme, useful for a variety of projects."
   }, 
   {
      "index": "2",
      "id": "product3",
      "item": "Lavender", 
      "imgSrc": "Images/ProductTemplateImages/Lavender.JPG",
      "price": 8.99, 
      "description": "The shades of blue and violet in this site are especially pleasing to the eye and evoke both energy and peace at the same time. Blueberry and sky blue are artfully combined with amethyst to give life to a refreshing and eye-pleasing color combination suitable for any design which aims to incite positive emotions."  
   }, 
   {
      "index": "3",
      "id": "product4",
      "item": "Calm Green", 
      "imgSrc": "Images/ProductTemplateImages/CalmGreen.JPG",
      "price": 12.99, 
      "description": "This sleek and ultra-modern site boasts an elegant and eye-catching combination with effective contrast. The bright yellow-green combines well with the black and gray in the background."
   }, 
   {
      "index": "4",
      "id": "product5",
      "item": "Golden", 
      "imgSrc": "Images/ProductTemplateImages/Golden.JPG",
      "price": 29.99, 
      "description": "This is another example of a site that effectively uses a bright accent color to delineate a path for the viewers' eyes. In this case, the bright yellow draws the eye first to the title, then the path up the mountain and finally to the call-to-action buttons at the bottom of the page."
   }, 
   {
      "index": "5",
      "id": "product6",
      "item": "Item6", 
      "imgSrc": "Images/CherriesPic3.jpg",
      "price": 12.99, 
      "description": "This product is quite gorgeous. It has been exqusitely designed by our FINEST craftsmen. This product is quite gorgeous. It has been exqusitely designed by our FINEST craftsmen."
   }, 
   {
      "index": "6",
      "id": "product7",
      "item": "Item7", 
      "imgSrc": "Images/CherriesPic3.jpg",
      "price": 12.99, 
      "description": "This product is quite gorgeous. It has been exqusitely designed by our FINEST craftsmen. This product is quite gorgeous. It has been exqusitely designed by our FINEST craftsmen."
   }, 
   {
      "index": "7",
      "id": "product8",
      "item": "Item8", 
      "imgSrc": "Images/CherriesPic3.jpg",
      "price": 12.99, 
      "description": "This product is quite gorgeous. It has been exqusitely designed by our FINEST craftsmen. This product is quite gorgeous. It has been exqusitely designed by our FINEST craftsmen."
   }, 
   {
      "index": "8",
      "id": "product9",
      "item": "Item9", 
      "imgSrc": "Images/CherriesPic3.jpg",
      "price": 12.99, 
      "description": "This product is quite gorgeous. It has been exqusitely designed by our FINEST craftsmen. This product is quite gorgeous. It has been exqusitely designed by our FINEST craftsmen."
   }, 
   {
      "index": "9",
      "id": "product10",
      "item": "Item10", 
      "imgSrc": "Images/CherriesPic3.jpg",
      "price": 12.99, 
      "description": "This product is quite gorgeous. It has been exqusitely designed by our FINEST craftsmen. This product is quite gorgeous. It has been exqusitely designed by our FINEST craftsmen."
   }
]

//Location of the Testing Box
const $testBox = $('#testBox');

//Item counter for number of items
let itemCounter = 0;

//List for prices of items
let itemPriceList = [0];


//When one of the prices are clicked, add it to the item list
$('p.cost').on('click', function() {
   
   //Get index number from selected item
   const $productIndex = $(this).parent().attr("index");

   //Get desired object
   const productObject = productsList[$productIndex]
   
   //Create variables for information
   const obj_index = productObject.index;
   const obj_id = productObject.id;
   const obj_item = productObject.item;
   const obj_imgSrc = productObject.imgSrc;
   const obj_price = productObject.price;
   const obj_description = productObject.description;

   //Make list item to be added
   const newListItem = '<li index="' + obj_index + '" class="desiredProduct"><p class="productName">' + obj_item + '</p><img class="productImg" src="' + obj_imgSrc + '"><p class="productDescription">' + obj_description + '</p><p class="productPrice">' + obj_price + '</p></li>';

   //Add the new list item
   $('ul#purchaseList').append(newListItem);

   //Add effect to addition
   $('ul#purchaseList').children().last().hide().slideDown(200);

   //Increase item counter
   itemCounter++;
   $('span#boxNumber').slideUp(200, function() {
      $('span#boxNumber').text(itemCounter);
      $('span#boxNumber').slideDown(200);
   });
   

   //Add a box for the amount of items
   const newBox = '<div class="itemBox"></div>';
   $('#itemNumberBoxes').append(newBox);
   $('#itemNumberBoxes').children().last().hide().slideDown(300);

   
});


//When one of the list items are double clicked, remove it
$('ul#purchaseList').on('dblclick', 'li', function() {

   //Remove the clicked item
   $(this).fadeOut(200, function() {
      $(this).remove();
   });

   //Decrease item counter
   itemCounter--;
   $('span#boxNumber').slideUp(200, function() {
      $('span#boxNumber').text(itemCounter);
      $('span#boxNumber').slideDown(200);
   });

   //Remove a box for the amount of items
   $('#itemNumberBoxes').children().last().slideUp(200, function() {
      $(this).last().remove();
   });
});


$('input#totalCostBtn').on('click', function() {

   //Clear boxes
   $('p#itemCosts').html(' ');
   $('p#totalCost').html(' ');
   //Define sum
   let sum = 0;

   //Evaluate the ul and get all its elements
   $('ul#purchaseList').children().each(function() {
      
      //Find price and add it the total sum
      const $indexValue = $(this).attr("index")
      const priceValue = productsList[$indexValue].price;
      const itemValue = productsList[$indexValue].item;
      $('p#itemCosts').append(itemValue + ': $' + priceValue + '<br>');
      sum += priceValue;
      
   });

   //Add sum to test box
   $('p#totalCost').append('Total: $' + sum.toFixed(2));

});
