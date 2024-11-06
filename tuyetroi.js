<!-- Code tuyết cho giáng sinh -->
<script>
document.write('<style>body{padding-bottom:20px}#e_itexpress_left{display:none;position:fixed;z-index:9999;top:0;left:0}#e_itexpress_right{display:none;position:fixed;z-index:9999;top:0;right:0}#e_itexpress_footer{display:none;position:fixed;z-index:9999;bottom:-50px;left:0;width:100%;height:104px;background:url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBXdX8dAxAGTRHJB389X5iLdVrFazMtboUDHNHON3n2v_frhTyljSLq2YSfyjK7w7xMludraAx0yfPCuOP9wGtC3hgTWcDFzroMCpAsR4lzJS6t-kZ5aQq6KZdtUHa6yVp3AQmVzGi9nNB-pZ0UYlr0OA_dqbs2AbfWtrf91v2TvcmbjuaWEuOvmBrNKU/s16000/ft.png) repeat-x bottom left}#e_itexpress_bottom_left{display:none;position:fixed;z-index:9999;bottom:20px;left:20px}@media (min-width: 992px){#e_itexpress_left,#e_itexpress_right,#e_itexpress_footer,#e_itexpress_bottom_left{display:block}}</style><img id="e_itexpress_left" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHdbnGSjyYv2ZmhyphenhyphenERycrPksuSUG3xBMrLCePgP5poTl7chRW5EfEJ1Az0sHmrtLdFr84G8G-M9qGASb4ecrYvzpuedbc7n3I7QGO8FbEoPJsphzJWyRUVpjArdruZA8z6phV4wX-RR8Ezpw7PStZ7Ek9YNZoiZU0lipr7el4WzRH_XJTKAY8pcP8U6us/s16000/topleft.png"/><img id="e_itexpress_right" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwDWBR5yV3GdZkQer7kZiLq8qG8mKom_Add7t6_AId9CbheQhZ7QLHDkkP9Ehn1yW-qJBdSJXd60h7mM8wXTZY-Sp7tUJgYTZUNi5H4V-LZkDv0Hi3ksoBmpL0sKg8ROf-XLrg5s8CCeEgCTJ7GcW5kiKm271kPEkCI-t24-qq3v9cUJ2TxRqql2zc_80/s16000/topright.png"/><div id="e_itexpress_footer"></div><img id="e_itexpress_bottom_left" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFLS87i1f1rDSINb5N1Nc_uZ9i7eh81cklyqScr4BvcnCHdFvYtm6RhzMoLHg6_J_2WUyFfnKGRqp3osKfYw6427kLheSAxO9UbRAY1UnMUrtrK7-jRjqHc6fl-sI0Sp-cV2sEcJo23WUJPRJMqjMQjNxuXjZnY7CaDO4Xp9WIzU2oWLec7MyoXK8jnh0/s1600/bottomleft.png"/></div>');
var dx, xp, yp, am, stx, sty, no = 50,
	hidesnowtime = 0,
	snowdistance = "pageheight",
	ie4up = document.all ? 1 : 0,
	ns6up = document.getElementById && !document.all ? 1 : 0;

function iecompattest() {
	return document.compatMode && "BackCompat" != document.compatMode ? document.documentElement : document.body
}
var i, doc_width = 800,
	doc_height = 600;
for (ns6up ? (doc_width = self.innerWidth, doc_height = self.innerHeight) : ie4up && (doc_width = iecompattest().clientWidth, doc_height = iecompattest().clientHeight), dx = new Array, xp = new Array, yp = new Array, am = new Array, stx = new Array, sty = new Array, i = 0; i < no; ++i) dx[i] = 0, xp[i] = Math.random() * (doc_width - 50), yp[i] = Math.random() * doc_height, am[i] = 20 * Math.random(), stx[i] = .02 + Math.random() / 10, sty[i] = .5 + Math.random() * 1.2, (ie4up || ns6up) && document.write('<div id="dot' + i + '" style="POSITION:absolute;Z-INDEX:' + i + ';VISIBILITY:visible;TOP:15px;LEFT:15px;"><span style="font-size:' + (5 + Math.random() * 10) + 'px;color:#fff">&#10052;</span></div>');

function snowIE_NS6() {
	for (doc_width = ns6up ? window.innerWidth - 10 : iecompattest().clientWidth - 10, doc_height = window.innerHeight && "windowheight" == snowdistance ? window.innerHeight : ie4up && "windowheight" == snowdistance ? iecompattest().clientHeight : ie4up && !window.opera && "pageheight" == snowdistance ? iecompattest().scrollHeight : iecompattest().offsetHeight, i = 0; i < no; ++i) yp[i] += sty[i], yp[i] > doc_height - 50 && (xp[i] = Math.random() * (doc_width - am[i] - 30), yp[i] = 0, stx[i] = .02 + Math.random() / 10, sty[i] = .7 + Math.random()), dx[i] += stx[i], document.getElementById("dot" + i).style.top = yp[i] + "px", document.getElementById("dot" + i).style.left = xp[i] + am[i] * Math.sin(dx[i]) + "px";
	snowtimer = setTimeout("snowIE_NS6()", 20)
}

function hidesnow() {
	for (window.snowtimer && clearTimeout(snowtimer), i = 0; i < no; i++) document.getElementById("dot" + i).style.visibility = "hidden"
}(ie4up || ns6up) && (snowIE_NS6(), 0 < hidesnowtime && setTimeout("hidesnow()", 1e3 * hidesnowtime));
</script>