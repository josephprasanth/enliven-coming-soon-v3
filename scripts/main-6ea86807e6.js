!function e(t,i,n){function o(a,s){if(!i[a]){if(!t[a]){var d="function"==typeof require&&require;if(!s&&d)return d(a,!0);if(r)return r(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=i[a]={exports:{}};t[a][0].call(c.exports,function(e){var i=t[a][1][e];return o(i?i:e)},c,c.exports,e,t,i,n)}return i[a].exports}for(var r="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=function(e){e.extend(e.easing,{easeInOutCubic:function(e,t,i,n,o){return(t/=o/2)<1?n/2*t*t*t+i:n/2*((t-=2)*t*t+2)+i}}),e.fn.outerFind=function(e){return this.find(e).addBack(e)},e.isMobile=function(t){var i=[],n={blackberry:"BlackBerry",android:"Android",windows:"IEMobile",opera:"Opera Mini",ios:"iPhone|iPad|iPod"};return t="undefined"==e.type(t)?"*":t.toLowerCase(),"*"==t?i=e.map(n,function(e){return e}):t in n&&i.push(n[t]),!(!i.length||!navigator.userAgent.match(new RegExp(i.join("|"),"i")))}}},{}],2:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=function(e){var t=e('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo("body"),i=t[0],n=parseInt(window.innerHeight/2,10),o=parseInt((window.getComputedStyle?getComputedStyle(i,null):i.currentStyle).height,10);return t.remove(),o==n}},{}],3:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=function(e,t){function i(){e(this).css("height",9*e(this).parent().width()/16)}var n,o,r=0,a=null,s=e.isMobile(),d=!s;e("html").addClass(s?"mobile":"desktop"),e(window).scroll(function(){e(".mbr-navbar-sticky").each(function(){var t=e(window).scrollTop()>10?"addClass":"removeClass";e(this)[t]("mbr-navbar-stuck").not(".mbr-navbar-open")[t]("mbr-navbar-short")}),o&&clearTimeout(o);var t=e(window).scrollTop(),i=t<=r||d;if(r=t,a){var n=t>a.breakPoint;i?n!=a.fixed&&(d?(a.fixed=n,e(a.elm).toggleClass("is-fixed")):o=setTimeout(function(){a.fixed=n,e(a.elm).toggleClass("is-fixed")},40)):(a.fixed=!1,e(a.elm).removeClass("is-fixed"))}}),e(".mbr-hamburger:not(.mbr-added)").each(function(){e(this).addClass("mbr-added").click(function(){e(this).toggleClass("mbr-hamburger-open").parents(".mbr-navbar").toggleClass("mbr-navbar-open").removeClass("mbr-navbar-short")}).parents(".mbr-navbar").find("a:not(.mbr-hamburger)").click(function(){e(".mbr-hamburger-open").click()})}),e(window).smartResize(function(){e(window).width()>991&&e(".mbr-navbar-auto-collapse .mbr-hamburger-open").click(),e(".mbr-section-16by9").each(i)}).keydown(function(t){27==t.which&&e(".mbr-hamburger-open").click()}),s&&navigator.userAgent.match(/Chrome/i)?!function(t,i){var n=[t,t];n[i>t?0:1]=i,e(window).smartResize(function(){var t=e(window).height();e.inArray(t,n)<0&&(t=n[e(window).width()>t?1:0]),e(".mbr-section-full-height").css("height",t+"px")})}(e(window).width(),e(window).height()):t||(e(window).smartResize(function(){e(".mbr-section-full-height").css("height",e(window).height()+"px")}),e("html").hasClass("mbr-site-loaded")&&e(".mbr-section-full-height").length&&e(window).resize());var l=e(".mbr-section-16by9");l.length?l.attr("data-16by9","true").each(i):e("[data-16by9]").css("height","").removeAttr("data-16by9"),e.fn.jarallax&&!s&&(e(document).on("destroy.parallax",function(t){e(".mbr-parallax-background").jarallax("destroy").css("position","")}),e(".mbr-parallax-background").jarallax().css("position","relative")),n&&clearTimeout(n),n=setTimeout(function(){a&&(a.fixed=!1,e(a.elm).removeClass("is-fixed")),e(".mbr-fixed-top:first").each(function(){a={breakPoint:e(this).offset().top+3*e(this).height(),fixed:!1,elm:this},e(window).scroll()})},650),e("html").addClass("mbr-site-loaded"),e(window).resize().scroll(),e(document).click(function(t){try{var i=t.target;do if(i.hash){var n=/#bottom|#top/g.test(i.hash);e(n?"body":i.hash).each(function(){t.preventDefault();var n=e(".mbr-navbar-sticky").length?64:0,o="#bottom"==i.hash?e(this).height()-e(window).height():e(this).offset().top-n;e("html, body").stop().animate({scrollTop:o},800,"easeInOutCubic")});break}while(i=i.parentNode)}catch(t){}})}},{}],4:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=function(e){function t(){var e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;return e}e(".front").each(function(){if(e("html").hasClass("videoautoplay")||!t()){var i=9e3!=self.location.port;e("#background").vimeofy({url:"https://vimeo.com/178568007",color:"#ffffff",autoplay:i,loop:!0,delay:0,background:1}),e("html").removeClass("poster")}new Waypoint({element:document.getElementById("section2"),handler:function(t){"down"==t?e(".mbr-navbar").addClass("going-down").removeClass("top"):e(".mbr-navbar").addClass("top").removeClass("going-down")},offset:100});window.fnames=[],window.ftypes=[],fnames[0]="EMAIL",ftypes[0]="email",fnames[1]="FNAME",ftypes[1]="text",fnames[2]="LNAME",ftypes[2]="text"}),e(".flex-slider").each(function(){var t=e(this),i={};switch(t.data("slider")){case"tablet":i={animation:"slide",direction:"vertical",slideshowSpeed:5e3,easing:"swing",keyboard:!1,pauseOnHover:!1,controlNav:!1,directionNav:!1,randomize:!1};break;case"phone":i={animation:"slide",direction:"vertical",slideshowSpeed:7e3,animationSpeed:1e3,easing:"linear",keyboard:!1,pauseOnHover:!1,controlNav:!1,directionNav:!1,randomize:!1};break;case"quotes":i={animation:"fade",direction:"horizontal",pauseOnHover:!1,controlNav:!1,directionNav:!1,randomize:!0,smoothHeight:!0};break;default:i={animation:"slide",direction:"horizontal",pauseOnHover:!0,controlNav:!0,directionNav:!1,randomize:!1,slideshowSpeed:6e3,initDelay:750}}t.flexslider(i)}),e("iframe.resizable").iFrameResize()}},{}],5:[function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=e("./_init"),r=n(o),a=e("./_ready"),s=n(a),d=e("./_isSupportViewportUnits"),l=n(d),c=e("./_mobirise"),u=n(c);!function(e){(0,r["default"])(e),e(document).ready(function(){(0,u["default"])(e,l["default"]),(0,s["default"])(e)})}(jQuery)},{"./_init":1,"./_isSupportViewportUnits":2,"./_mobirise":3,"./_ready":4}]},{},[5]);