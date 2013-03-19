HOMEPAGE TAG 

<script type="text/javascript">

window.__s2mMyThingsShopToken = "zx-9827-nl"; // MyThings shop token

//////////////////////////////////////////////////////////////////////////////////////////////////
// Do not edit under this comment

function _mt_ready(){
   if( typeof(MyThings) != "undefined") {
      var myThingsOptions = {};
      myThingsOptions.Action = "200";
      myThingsOptions.EventType = MyThings.Event.Visit;

      MyThings.Track( myThingsOptions );
  }
}

(function( token ) {
  var mt = document.createElement('script'); mt.type = 'text/javascript'; mt.async = true;
  mt.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'rainbow-nl.mythings.com/c.aspx?atok=' + token;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mt, s);
})(  __s2mMyThingsShopToken );

// Do not edit above this comment
//////////////////////////////////////////////////////////////////////////////////////////////////
</script>






CATEGORY TAG
<script type="text/javascript">

window.__s2mMyThingsShopToken = "zx-9827-nl"; // MyThings shop token

//////////////////////////////////////////////////////////////////////////////////////////////////
// Do not edit under this comment

function _mt_ready(){
   if( typeof(MyThings) != "undefined") {
      var myThingsOptions = {};
      myThingsOptions.Action = "1011";
      myThingsOptions.EventType = MyThings.Event.Visit;
      myThingsOptions.Category = s2m_configuration.s2m_category_path.split(/>/)[1] ;
      myThingsOptions.SubCategory1 = s2m_configuration.s2m_category_path.split(/>/)[2] ;
      MyThings.Track( myThingsOptions );
  }
}

(function( token ) {
  var mt = document.createElement('script'); mt.type = 'text/javascript'; mt.async = true;
  mt.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'rainbow-nl.mythings.com/c.aspx?atok=' + token;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mt, s);
})(  __s2mMyThingsShopToken );

// Do not edit above this comment
//////////////////////////////////////////////////////////////////////////////////////////////////
</script>





PRODUCT TAG
<script type="text/javascript">

// MyThings Product page

window.__s2mMyThingsShopToken = "zx-9827-nl"; // Insert MyThings shop token here

//////////////////////////////////////////////////////////////////////////////////////////////////
// Do not edit under this comment

function _mt_ready(){
   if( typeof(MyThings) != "undefined") {
      var myThingsOptions = {};
      myThingsOptions.Action = "1010";
      myThingsOptions.EventType = MyThings.Event.Visit;
      myThingsOptions.ProductId = s2m_configuration.s2m_product_id ;
      MyThings.Track( myThingsOptions );
  }
}

(function( token ) {
  var mt = document.createElement('script'); mt.type = 'text/javascript'; mt.async = true;
  mt.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'rainbow-nl.mythings.com/c.aspx?atok=' + token;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mt, s);
})(  __s2mMyThingsShopToken );

// Do not edit above this comment
//////////////////////////////////////////////////////////////////////////////////////////////////
</script>






<!--------------------------  CART TAG ---------------------------------------------------------->
<script type="text/javascript">

// MyThings Cart

window.__s2mMyThingsShopToken = "zx-9827-nl"; // Insert MyThings shop token here

//////////////////////////////////////////////////////////////////////////////////////////////////
// Do not edit under this comment

function _mt_ready(){
   if( typeof(MyThings) != "undefined") {
      var myThingsOptions = {};
      myThingsOptions.Action = "1013";
      myThingsOptions.EventType = MyThings.Event.Visit;
      myThingsOptions.ProductId = s2m_configuration.s2m_cart_items[0].s2m_product_id
/*
      myThingsOptions.Products = [];

      for( var nCount = 0; nCount < s2m_configuration.s2m_cart_items.length ; nCount++ ){
        var myThingsProduct = {};
        myThingsProduct.id = s2m_configuration.s2m_cart_items[ nCount ].s2m_product_1;
        myThingsProduct.price = s2m_configuration.s2m_cart_items[ nCount ].s2m_amount_1;
        myThingsProduct.qty = s2m_configuration.s2m_cart_items[ nCount ].s2m_quantity;
        myThingsOptions.Products.push( myThingsProduct );
      }; 
*/
      MyThings.Track( myThingsOptions );
  }
}

(function( token ) {
  var mt = document.createElement('script'); mt.type = 'text/javascript'; mt.async = true;
  mt.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'rainbow-nl.mythings.com/c.aspx?atok=' + token;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mt, s);
})(  __s2mMyThingsShopToken );

// Do not edit above this comment
//////////////////////////////////////////////////////////////////////////////////////////////////
</script>







CONVERSION TAG

<script type="text/javascript">

// MyThings Conversion pixel

window.__s2mMyThingsShopToken = "zx-9827-nl"; // Insert MyThings shop token here

//////////////////////////////////////////////////////////////////////////////////////////////////
// Do not edit under this comment

function _mt_ready(){
   if (typeof(MyThings) != "undefined") {

      var basket_json = {basket_json};
      var products = [];
      for( var nCount = 0; nCount < basket_json.length; ++nCount ){
        products.push({ 
          id: basket_json[nCount].item_id, 
          price: basket_json[nCount].item_amount_1,
          qty: basket_json[nCount].quantity
        });
      }
      MyThings.Track({
           EventType: MyThings.Event.Conversion, 
           Action: "9902",
           Products: products, 
           TransactionReference: "{trans_id}",
           TransactionAmount: "{amount_2}" 
     });
  }
}

(function( token ) {
  var mt = document.createElement('script'); mt.type = 'text/javascript'; mt.async = true;
  mt.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'rainbow-nl.mythings.com/c.aspx?atok=' + token;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mt, s);
})(  __s2mMyThingsShopToken );

// Do not edit above this comment
//////////////////////////////////////////////////////////////////////////////////////////////////
</script>