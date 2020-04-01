
function replaceImages(topLeftHeaderImgLocation, topRightHeaderImgLocation, bottomHeaderImgLocation) {
   var $topLeftHeaderImg = $('<img id="topLeftHeaderImg" src="Images/' + topLeftHeaderImgLocation + '" width="365" height="190" />');
   var $topRightHeaderImg = $('<img id="topRightHeaderImg" src="Images/' + topRightHeaderImgLocation + '" width="365" height="190" />');
   var $bottomHeaderImg = $('<img id="bottomHeaderImg" src="Images/' + bottomHeaderImgLocation + '" width="735" height="190" />');
   $('#topLeftHeaderImg').replaceWith($topLeftHeaderImg);
   $('#topRightHeaderImg').replaceWith($topRightHeaderImg);
   $('#bottomHeaderImg').replaceWith($bottomHeaderImg);
}
function replaceHeaderLink(templateLocation) {
   var $template = $('<link class="templates" href="CSSTemplates/Templates/' + templateLocation + '" type="text/css" rel="stylesheet" />');
   $('.templates').replaceWith($template); 
}
function replaceBackgroundVideo(videoLocation) {
   var $video = $('<video class="backgroundVideo" src="Images/' + videoLocation + '" preload autoplay loop></video>');
   $('.backgroundVideo').replaceWith($video);
}
function replaceBestSellingProductImages(productLocation_1, productLocation_2, productLocation_3) {
   var $product_1 = $('<img id="product_1" src="Images/' + productLocation_1 + '" />');
   var $product_2 = $('<img id="product_2" src="Images/' + productLocation_2 + '" />');
   var $product_3 = $('<img id="product_3" src="Images/' + productLocation_3 + '" />');
   $('#product_1').replaceWith($product_1);
   $('#product_2').replaceWith($product_2);
   $('#product_3').replaceWith($product_3);
}


/*---------------------------------------------------------Template 1-------------------------------------------------------------------*/


function switchTemplate1() {
   replaceHeaderLink(
      "Template1.css"
   );

   replaceImages(
      "Blueberries.jpg",
      "BlueMMs.jpg",
      "BlueSwirls.jpg"
   );

   replaceBackgroundVideo(
      "BlueVideoBackground.mp4"
   );

   replaceBestSellingProductImages(
      "BlueWater.jpg",
      "BlueStones.jpg",
      "BlueFlower.png"
   )
}


/*---------------------------------------------------------Template 2-------------------------------------------------------------------*/


function switchTemplate2() {
   replaceHeaderLink(
      "Template2.css"
   );

   replaceImages(
      "Template2Flower.jpg", 
      "Template2Lights.jpg", 
      "Template2Sand.jpg"
   );

   replaceBackgroundVideo(
      "Template2BackgroundVideo.mp4",
   );
      
   replaceBestSellingProductImages(
      "Template2Bacteria.jpg",
      "Template2Strings.jpg",
      "Template2Trees.jpg"
   )
}


/*----------------------------------------------------Template 0 (Original)--------------------------------------------------------------*/


function switchTemplate0() {
   replaceHeaderLink(
      "Template0.css"
   );
   
   replaceImages(
      "ApplesPic1.jpg",
      "StrawberriesPic2.jpg",
      "CherriesPic3.jpg",
   );
   
   replaceBackgroundVideo(
      "IntroBackgroundNew.mp4"
   );

   replaceBestSellingProductImages(
      "Product1.jpg",
      "Product2.jpg",
      "Product3.jpg"
   )

}


/*----------------------------------------------------Template 0 (Original)--------------------------------------------------------------*/


function switchTemplate3() {
   replaceHeaderLink(
      "Template3.css"
   );
   replaceImages(
      "template3Fern.jpg",
      "template3PointyLeaves.jpg", 
      "template3Ladybug.jpg"
   );
   replaceBackgroundVideo(
      "Template3BackgroundVideo.mp4"
   );
   replaceBestSellingProductImages(
      "template3Light.jpg",
      "template3Rope.jpg",
      "template3CreepyPlant.jpg"
   );
}


/*----------------------------------------------------Template 0 (Original)--------------------------------------------------------------*/


function switchTemplate4() {
   replaceHeaderLink(
      "Template4.css"
   );
   replaceImages(
      "Template4Flower.jpg",
      "Template4Path.jpg",
      "Template4Light.jpg",
   );
   replaceBackgroundVideo(
      "Template4BackgroundVideo.mp4"
   );
   replaceBestSellingProductImages(
      "Template4Rug.jpg",
      "Template4Map.jpg",
      "Template4Flower.jpg"
   );
}


/*---------------------------------------------------------Listeners-------------------------------------------------------------------*/


$('#blueButton').on('click mouseover', switchTemplate1);
$('#redButton').on('click mouseover', switchTemplate0);
$('#template2Button').on('click mouseover', switchTemplate2);
$('#template3Button').on('click mouseover', switchTemplate3);
$('#template4Button').on('click mouseover', switchTemplate4);