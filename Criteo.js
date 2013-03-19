/////////////////////////////////////////////Homepage/////////////////////////////////////////////
<script type="text/javascript">

window.__s2mCriteoShopToken = ""; // Criteo shop token

//////////////////////////////////////////////////////////////////////////////////////////////////
// Do not edit below this comment


<script type="text/javascript" src="Loader URL" async="true"></script>
<script type="text/javascript">var CRITEO_CONF = [[{
    pageType: 'home'
}], [8883, 'pdf', '', '010', [[7726569, 7726570]]]];
if (typeof (CRITEO) != "undefined") { CRITEO.Load(false); }</script>



/*
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
})(  __s2mCriteoShopToken );

*/


// Do not edit above this comment
//////////////////////////////////////////////////////////////////////////////////////////////////
</script>



/////////////////////////////////////////////Category/////////////////////////////////////////////
<script type="text/javascript" src="Loader URL" async="true"></script>
<script type="text/javascript">var CRITEO_CONF = [[{
    pageType: 'list',
    'Product IDs': ['First item id', 'Second item id', 'Third item id'],
    'Keywords': 'User Searched Keywords'
}], [8883,'pdf','','010',[[7726569, 7726570]], {'Product IDs':['i',1],'Keywords':['kw',2]}]];
if (typeof (CRITEO) != "undefined") { CRITEO.Load(false); }</script>


/////////////////////////////////////////////Product//////////////////////////////////////////////
<script type="text/javascript" src="Loader URL" async="true"></script>
<script type="text/javascript">var CRITEO_CONF = [[{
    pageType: 'product',
    'Product ID': 'Product ID'
}], [8883,'pdf','','010',[[7726569, 7726570]],{'Product ID':['i',0]}]];
if (typeof (CRITEO) != "undefined") { CRITEO.Load(false); }</script>


///////////////////////////////////////////////Cart///////////////////////////////////////////////
<script type="text/javascript" src="Loader URL" async="true"></script>
<script type="text/javascript">var CRITEO_CONF = [[{
    pageType: 'basket',
    'Product IDs': ['First item id', 'Second item id', 'Third item id'],
    'Prices': ['First item price', 'Second item price', 'Third item price'],
    'Quantities': ['First item quantity', 'Second item quantity', 'Third item quantity']
}], [8883,'pdf','','010',[[7726569, 7726570]],{'Product IDs':['i',1], 'Prices':['p',1],
'Quantities':['q',1]}]];
if (typeof (CRITEO) != "undefined") { CRITEO.Load(false); }</script>


////////////////////////////////////////////Conversion////////////////////////////////////////////
<script type="text/javascript" src="Loader URL" async="true"></script>
<script type="text/javascript">var CRITEO_CONF = [[{
    pageType: 'confirmation',
    'Transaction ID': 'Transaction Id',
    'Product IDs': ['First item id', 'Second item id', 'Third item id'],
    'Prices': ['First item price', 'Second item price', 'Third item price'],
    'Quantities': ['First item quantity', 'Second item quantity', 'Third item quantity']
}], [8883,'pdf','','010',[[7726569, 7726570]],{'Transaction ID':['t',0], 'Product IDs':['i',1],
'Prices':['p',1], 'Quantities':['q',1]}]];
if (typeof (CRITEO) != "undefined") { CRITEO.Load(false); }</script>



<script type="text/javascript">

  function _on_load() {

    var product_ids = [];
    var product_prices = [];
    var product_quantities = [];

    var basket_json = {basket_json};

    for (var nCount = 0; nCount < basket_json.length; ++nCount) {
      product_ids.push(basket_json[nCount].item_id);
      product_prices.push(basket_json[nCount].item_amount_1);
      product_quantities.push(basket_json[nCount].quantity);
    }

    window.CRITEO_CONF = [
      [{
        pageType: 'confirmation',
        'Transaction ID': "{trans_id}",
        'Product IDs': product_ids,
        'Prices': product_prices,
        'Quantities': product_quantities
      }],
      [XXXX, 'pdf', '', '010', [
        [XXXXXXX, XXXXXXX]
      ], {
        'Transaction ID': ['t', 0],
        'Product IDs': ['i', 1],
        'Prices': ['p', 1],
        'Quantities': ['q', 1]
      }]
    ];

    if (typeof (CRITEO) != "undefined") {
      CRITEO.Load(false);
    }
  }
  try {
    var __criteo_js = document.createElement('script');
    __criteo_js.type = 'text/javascript';
    __criteo_js.async = true;
    __criteo_js.src = (("https:" == document.location.protocol) ? "https://" : "http://") + "s2m-third-parties-pixels-eu.s3-external-3.amazonaws.com/criteo_ld.js";
    __criteo_js.onload = _on_load;
    __criteo_js.onreadystatechange = function () {
      if (this.readyState == 'complete' || this.readyState == 'loaded') _on_load();
    }
    var __criteo_pixel = document.getElementsByTagName('script')[0];
    __criteo_pixel.parentNode.insertBefore(__criteo_js, __criteo_pixel);
  } catch (err){
}

</script>



























