# location-maps
Location maps for Innovative WebPAC

### Installation Instructions
Add / edit location link web option for each location code that will have a map
<br/>`LOC_hystk=#” onclick=“map(‘hystk’); return false;`
<br/>`LOC_wscur=#” onclick=“map(‘wscur’); return false;`

<br/>Download map.js and upload to your screens directory.

<br/>Load map function and jQuery by adding these lines to the INSERTTAG_INHEAD Web Option.
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript" src="/screens/map.js"></script>
```

Example:
<br/>`INSERTTAG_INHEAD=<script type="text/javascript" src="/screens/iiilangswitch.js"></script><link rel="stylesheet" type="text/css" href="/screens/styles_print.css" media="print"><script type="text/javascript" src="/screens/bibdisplay.js"></script><script type="text/javascript" src="/screens/map.js"></script><script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" ></script>`

<br/> Download qrcode.js from http://jeromeetienne.github.io/jquery-qrcode/ and upload to your screens directory.

<br/>Create map images and customize map.html to work with your location codes and map images. Upload customized version of map.html to your screens directory.
