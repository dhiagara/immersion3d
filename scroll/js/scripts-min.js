/* ALL THE SCRIPTS IN THIS FILE ARE MADE BY KROWNTHEMES.COM AND ARE LICENSED UNDER ENVATO'S REGULAR/EXTENDED LICENSE --- REDISTRIBUTION IS NOT ALLOWED! */ !(function (
  A
) {
  A(window).load(function () {
    "use strict";
    /* ----------------------------------------------------
          ---------- !! GENERAL STUFF !! -----------------
          ------------------------------------------------------- */
    /* ----------------------------------------------------
          ---------- !! PAGE HEADER !! -----------------
          ------------------------------------------------------- */
    function e(e) {
      t.attr("data-background", e.data("background"));
    }

    function n(e) {
      var t = e.data("columns");
      return (
        A(window).width() < 918 && 2 < t && (t = 2),
        A(window).width() < 513 && 1 < t && (t = 1),
        Math.floor((e.width() - e.data("gap") * (t - 1)) / t)
      );
    }

    function a(e, t) {
      var o;
      return n(t);
    }
    // Sidebar stuff
    var t = A("body"),
      o = A("#header"),
      i = A("#main-menu"),
      s = A("#menu-opener"),
      r = A("#main-menu .top-menu"),
      l = A("#menu-widget"),
      d = A("#menu-holder"),
      c = A("#page-header"),
      p = A("#page-header > div > div"),
      h = A("#content"),
      f = A("#footer");
    (A.touchM = "ontouchstart" in window),
      A.touchM && t.removeClass("no-touch").addClass("touch"),
      t.removeClass("no-js"),
      A("body").append('<span id="hero-helper"></span>');
    var u = A("#hero-helper");
    A.krownAjax = A("#preloader").data("ajax");
    // Mobile resizing fix (triggered while scrolling)
    var g = A(window),
      m = g.width(),
      w = g.height();
    A.fixMobileResize = function () {
      return g.width() != m || g.height() != w;
      (m = g.width()), (w = g.height());
    };
    /* ----------------------------------------------------
              ---------- !! MENU !! -----------------
              ------------------------------------------------------- */
    var v = "";
    A(window).on("resize.menueffect", function (e) {
      !s.hasClass("opened") &&
        A.fixMobileResize() &&
        TweenLite.to(i, 0, {
          y: -A(window).height(),
          force3D: !0,
          overwrite: 1,
        });
    }),
      TweenLite.to(i, 0, { y: -A(window).height(), force3D: !0, overwrite: 1 }),
      // classic menu switch
      t.hasClass("menu-classic") &&
        A(window).on("resize", function (e) {
          "block" === u.css("display")
            ? (t.addClass("mobile-view"),
              i.removeClass("style-classic"),
              i.addClass("style-modern"))
            : (t.removeClass("mobile-view"),
              i.addClass("style-classic"),
              i.removeClass("style-modern"));
        }),
      A(window).on("resize", function (e) {
        i.hasClass("style-modern") && i.css("height", A(window).height());
      }),
      A(window).trigger("resize"),
      // Drawer
      s.click(function (e) {
        s.hasClass("opened")
          ? (s.removeClass("opened"),
            t.attr("data-background", v),
            TweenLite.to(i, 0.3, {
              y: -A(window).height(),
              force3D: !0,
              overwrite: 1,
              onComplete: function () {
                i.css("visibility", "hidden");
              },
            }),
            r.stop().animate({ opacity: "0" }, 200, function () {
              A(this).css("visibility", "visible");
            }),
            l.stop().animate({ opacity: "0" }, 200),
            t.removeClass("noflow"),
            o.removeClass("noback"),
            A(".post-close").css("visibility", "visible"))
          : (s.addClass("opened"),
            (v = t.attr("data-background")),
            t.attr("data-background", "dark"),
            i.css("visibility", "visible"),
            TweenLite.to(i, 0.3, { y: 0, force3D: !0, overwrite: 1 }),
            r
              .css("visibility", "visible")
              .stop()
              .delay(150)
              .animate({ opacity: "1" }, 300),
            l.stop().delay(250).animate({ opacity: "1" }, 150),
            t.addClass("noflow"),
            o.addClass("noback"),
            A(".post-close").css("visibility", "hidden")),
          e.preventDefault();
      }),
      A(".kill-menu a").on("click", function () {
        s.trigger("click");
      });
    // Submenu
    var b = null,
      C;
    A("#main-menu")
      .find("li.parent.menu-item")
      .children("a")
      .each(function () {
        A(this).on("click", function (e) {
          if (A("#main-menu").hasClass("style-modern")) {
            if (
              null != b &&
              (b.stop().slideUp(150), b.is(A(this).siblings(".sub-menu")))
            )
              return b.siblings("a").removeClass("open"), void (b = null);
            (b = A(this).siblings(".sub-menu")).stop().slideDown(250),
              A(this).addClass("open"),
              e.preventDefault();
          }
        });
      }),
      // Faux loading
      i.find("a").on("click", function (e) {
        var t = A(this).attr("href");
        t.indexOf("#") < 0 &&
          "_blank" !== A(this).attr("target") &&
          (A.generalFauxAjax(t), e.preventDefault());
      }),
      (A.lastScrollTop = 0);
    var y = 5,
      k = o.outerHeight();
    /* ----------------------------------------------------
          ---------- !! CONTACT !! -----------------
          ------------------------------------------------------- */
    // Page header
    if (
      (A(window).scroll(function (e) {
        C = !0;
      }),
      setInterval(function () {
        C && (A.hasScrolled(), (C = !1));
      }, 250),
      (A.hasScrolled = function () {
        var e = A(window).scrollTop();
        e < 0 ||
          Math.abs(A.lastScrollTop - e) <= 5 ||
          (t.hasClass("page-template-template-portfolio") &&
            !t.hasClass("opened-portfolio")) ||
          (e > A.lastScrollTop &&
          (t.hasClass("page-template-template-portfolio") || k < e)
            ? o.removeClass("nav-down nav-back").addClass("nav-up")
            : (e + A(window).height() < A(document).height() &&
                o.removeClass("nav-up").addClass("nav-down nav-back"),
              e <= k &&
                !t.hasClass("page-template-template-portfolio") &&
                !t.hasClass("opened-portfolio") &&
                o.removeClass("nav-back")),
          (A.lastScrollTop = e));
      }),
      A("body.overtop").css("paddingTop", o.outerHeight(!0)),
      0 < c.length &&
        (A(window).on("resize.page-header", function (e) {
          A.fixMobileResize() &&
            c.height(A(window).height() / c.data("height"));
        }),
        c.height(A(window).height() / c.data("height")),
        e(c),
        A(window).on("scroll", function (e) {
          c.css(
            "transform",
            "translate3d(0, " + A(window).scrollTop() / 4 + "px, 0)"
          );
        })),
      0 < A("#map-contact").length)
    ) {
      var T = A("#map-contact"),
        x,
        z = [
          {
            featureType: "all",
            elementType: "all",
            stylers: [{ saturation: -100 }],
          },
        ],
        S = {
          zoom: T.data("zoom"),
          center: new google.maps.LatLng(T.data("map-lat"), T.data("map-long")),
          streetViewControl: !1,
          scrollwheel: !1,
          panControl: !0,
          mapTypeControl: !1,
          overviewMapControl: !1,
          zoomControl: !1,
          draggable: !A.touchM,
          zoomControlOptions: { style: google.maps.ZoomControlStyle.LARGE },
          mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "krownMap"],
          },
        };
      if (
        ((x = new google.maps.Map(document.getElementById(T.attr("id")), S)),
        "d-true" == T.data("greyscale"))
      ) {
        var j = new google.maps.StyledMapType(z, { name: "Grayscale" });
        x.mapTypes.set("krownMap", j), x.setMapTypeId("krownMap");
      }
      if ("d-true" == T.data("marker"))
        var L = new google.maps.LatLng(T.data("map-lat"), T.data("map-long")),
          D = {
            url: T.data("marker-img"),
            scaledSize: new google.maps.Size(120, 120),
          },
          M = new google.maps.Marker({ position: L, map: x, icon: D });
      setTimeout(function () {
        T.animate({ opacity: 1 }, 400).parent().addClass("remove-preloader");
      }, 2e3),
        A(window).on("scroll", function (e) {
          T.css(
            "transform",
            "translate3d(0, " + A(window).scrollTop() / 6 + "px, 0)"
          );
        });
    }
    /* ----------------------------------------------------
          ---------- !! FOOTER !! -----------------
          ------------------------------------------------------- */
    /* $.resizePageFooter = function() {
                  var footerHeight = 0;
                  $footer.children('div').each(function(){
                      footerHeight += $(this).outerHeight();
                  });
                  $footer.css('height', footerHeight);
                  $content.css('marginBottom', footerHeight);
              }

          	if ( $footer.length > 0 ) {
          		$(window).on('resize.page-footer', function(e){
                      $.resizePageFooter();
          		});
                  $.resizePageFooter();
          	}*/
    /* ----------------------------------------------------
          ---------- !! PRELOADER !! -----------------
          ------------------------------------------------------- */
    (A.generalFauxAjax = function (e) {
      TweenLite.to(A("#wrapper"), 0.1, {
        opacity: 0,
        onComplete: function () {
          window.top.location = e;
        },
      });
    }),
      ((t.hasClass("single") && !t.hasClass("single-portfolio")) ||
        (t.hasClass("page") &&
          !t.hasClass("page-template-template-portfolio")) ||
        t.hasClass("blog") ||
        t.hasClass("error404") ||
        t.hasClass("search") ||
        t.hasClass("archive")) &&
        (TweenLite.to(A("#wrapper"), 0.4, { opacity: 1 }),
        A("#preloader").addClass("hide")),
      A(window).bind("pageshow", function (e) {
        e.originalEvent.persisted && window.location.reload();
      }),
      // Lazy load backgrounds
      (A.lazyBg = function () {
        setTimeout(function () {
          A(".lazybg").each(function () {
            "" != A(this).data("bg") &&
              (A(this).css(
                "backgroundImage",
                "url(" + A(this).data("bg") + ")"
              ),
              A(this).removeClass("lazybg"));
          });
        }, 1e3);
      }),
      A.lazyBg(),
      // Function that calculates proper background image based on screen size (similar to srcset)
      (A.bgSet = function (e, t) {
        var o = window.devicePixelRatio <= 2 ? window.devicePixelRatio : 2,
          n = t.width() * o,
          a = "";
        (a =
          n <= 840
            ? e.data("bg-small")
            : n <= 1280
            ? e.data("bg-medium")
            : e.data("bg-large")),
          e.css("backgroundImage", "url(" + a + ")");
      }),
      // A different lazy
      A('img[data-lazyload="please"]').each(function () {
        A(this).attr("src", A(this).data("src"));
      }),
      /* ----------------------------------------------------
              ---------- !! META !! -----------------
              ------------------------------------------------------- */
      (A.writeProjectPostMeta = function (e) {
        var t = e.match(
          /\<\!\-\- social meta start \-\-\>([\s\S]+)\<\!\-\- social meta end/
        );
        if (null != t && "null" != t[1]) {
          var o = A(t[1]);
          A("#meta-ogtitle").attr("content", o[0].content),
            A("#meta-ogtype").attr("content", o[1].content),
            A("#meta-ogurl").attr("content", o[2].content),
            A("#meta-ogsitename").attr("content", o[3].content),
            A("#meta-description").attr("content", o[4].content),
            A("#meta-itempropimage").attr("content", o[6].content),
            A("#meta-twitterimg").attr("content", o[8].content),
            A("#meta-ogimage").attr("content", o[9].content);
        }
      }),
      /* ----------------------------------------------------
              ---------- !! WOOCOMMERCE !! -----------------
              ------------------------------------------------------- */
      0 < A("#portfolio").length &&
        A(".folio-grid").each(function () {
          console.log("each"), A(this).addClass("done");
          // Products grid
          var o = A(this);
          o.append('<div class="grid-sizer" /><div class="grid-gutter" />');
          var e = n(o),
            t = o.data("gap");
          A(".grid-sizer").css("width", e),
            A(".grid-gutter").css("width", t),
            o.isotope({
              itemSelector: ".item",
              masonry: { columnWidth: ".grid-sizer", gutter: ".grid-gutter" },
              transitionDuration: 0,
            }),
            A(window)
              .on("resize.portfolio", function (e) {
                var t = n(o);
                A(".grid-sizer").css("width", t),
                  A(o.isotope("getItemElements")).each(function () {
                    A(this).css("width", a(A(this), o));
                  }),
                  o.isotope("layout");
              })
              .trigger("resize");
        }),
      0 < A(".woocommerce-ordering").length &&
        (A(".woocommerce-ordering").prependTo("#shop-sidebar > div > div"),
        A(".woocommerce-ordering").wrap('<div class="widget">'),
        A(".woocommerce-ordering")
          .parent()
          .prepend('<span class="title">' + langObj.sort_products + "</span>")),
      A("#shop-sidebar select").each(function () {
        A(this)
          .styledSelect({
            coverClass: "shop-select-cover",
            innerClass: "shop-select-inner",
          })
          .addClass("styled");
      });
    //Search form
    var I = A("#main-search #searchform");
    I.find(".fa-search").click(function (e) {
      I.hasClass("opened")
        ? (I.removeClass("opened"), A("html").off("click.searchout"))
        : (I.addClass("opened"),
          A("html").on("click.searchout", function () {
            I.removeClass("opened");
          }),
          I.find("#s").focus()),
        e.stopPropagation();
    });
  });
})(jQuery),
  /*
   * jQuery.styledSelect - <select> replacement plugin
   * https://github.com/rubenbristian/styled-select/tree/master
   * Copyright (c) 2013 Ruben Bristian
   * version 1.0
   * forked from http://wellstyled.com/en/javascript-styleselect-jquery-plugin/
   */
  (jQuery.fn.styledSelect = function (e) {
    var n = {
      coverClass: "select-replace-cover",
      innerClass: "select-replace",
      adjustPosition: { top: 0, left: 0 },
      selectOpacity: 0,
    };
    return (
      e && jQuery.extend(n, e),
      this.each(function () {
        var e = jQuery(this);
        e.wrap("<span></span>"), e.after("<span></span>");
        var t = e.next(),
          o = e.parent();
        e.css({
          opacity: n.selectOpacity,
          visibility: "visible",
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline",
          "z-index": 1,
        }),
          o.addClass(n.coverClass).css({
            display: "inline-block",
            position: "relative",
            top: n.adjustPosition.top,
            left: n.adjustPosition.left,
            "z-index": 0,
            "vertical-align": "middle",
            "text-align": "left",
          }),
          t
            .addClass(n.innerClass)
            .css({ display: "block", "white-space": "nowrap" }),
          e.bind("change", function () {
            jQuery(this).next().text(this.options[this.selectedIndex].text);
          }),
          t.text(e.children("option").eq(e.context.selectedIndex).text()),
          o.width(e.width() + "px");
      })
    );
  }) /* ALL THE SCRIPTS IN THIS FILE ARE MADE BY KROWNTHEMES.COM AND ARE LICENSED UNDER ENVATO'S REGULAR/EXTENDED LICENSE --- REDISTRIBUTION IS NOT ALLOWED! */,
  (function (a) {
    a(window).load(function () {
      /* ----------------------------------------------------
            ---------- !! SHORTCODES !! -----------------
            ------------------------------------------------------- */
      (a.fn.initShortcodes = function () {
        function e() {
          a(this)
            .find("audio, video")
            .each(function () {
              a(this).mediaelementplayer({
                alwaysShowControls: !1,
                iPadUseNativeControls: !1,
                iPhoneUseNativeControls: !1,
                AndroidUseNativeControls: !1,
                enableKeyboard: !1,
                success: function () {
                  setTimeout(function () {
                    a(".mejs-controls").addClass("mejs-offscreen"),
                      a(window).trigger("resize");
                  }, 2e3);
                },
              });
            });
        }
        // Accordions
        0 < a(this).find(".krown-accordion").length &&
          a(this)
            .find(".krown-accordion")
            .each(function () {
              var t = !!a(this).hasClass("toggle"),
                e = a(this).children("section"),
                o =
                  "-1" == a(this).data("opened")
                    ? null
                    : e.eq(parseInt(a(this).data("opened")));
              null != o &&
                (o.addClass("opened"), o.children("div").slideDown(0)),
                a(this)
                  .children("section")
                  .children("h5")
                  .click(function () {
                    var e = a(this).parent();
                    t ||
                      (null != o &&
                        (o.removeClass("opened"),
                        o.children("div").stop().slideUp(300))),
                      e.hasClass("opened") && t
                        ? (e.removeClass("opened"),
                          e.children("div").stop().slideUp(300))
                        : e.hasClass("opened") ||
                          ((o = e).addClass("opened"),
                          e.children("div").stop().slideDown(300));
                  });
            }),
          // Lightboxes
          a(this)
            .find("img.alignleft, img.alignright, img.aligncenter")
            .parent("a")
            .each(function () {
              a(this).attr(
                "class",
                "fancybox fancybox-thumb " +
                  a(this).children("img").attr("class")
              );
            }),
          0 < a(this).find('.fancybox, div[id*="attachment"]').length &&
            a(this)
              .find('.fancybox, div[id*="attachment"] > a')
              .fancybox({
                padding: 0,
                margin: 50,
                aspectRatio: !0,
                scrolling: "no",
                mouseWheel: !1,
                openMethod: "zoomIn",
                closeMethod: "zoomOut",
                nextEasing: "easeInQuad",
                prevEasing: "easeInQuad",
              })
              .append("<span></span>"),
          // Sliders
          0 < a(this).find(".flexslider").length &&
            a(this)
              .find(".flexslider")
              .each(function () {
                var e = a(this);
                a(this).flexslider({
                  animation: e.hasClass("s-fade") ? "fade" : "slide",
                  easing: "easeInQuad",
                  animationSpeed: 450,
                  slideshow: !!e.hasClass("s-slideshow"),
                  slideshowSpeed: 6e3,
                  directionNav: !0,
                  controlNav: !0,
                  keyboard: !1,
                  prevText: '<i class="fa fa-chevron-left"></i>',
                  nextText: '<i class="fa fa-chevron-right"></i>',
                  start: function (e) {
                    //    $(window).trigger('resize');
                  },
                });
              }),
          // Tabs
          0 < a(this).find(".krown-tabs").length &&
            a(this)
              .find(".krown-tabs")
              .each(function () {
                var e = a(this).children(".titles").children("li"),
                  t = a(this).children(".contents").children("section"),
                  o = e.eq(0),
                  n = t.eq(0);
                o.addClass("opened"),
                  n.stop().slideDown(0),
                  e.find("a").prop("href", "#").off("click"),
                  e.click(function (e) {
                    o.removeClass("opened"),
                      (o = a(this)).addClass("opened"),
                      n.stop().slideUp(200),
                      (n = t.eq(a(this).index()))
                        .stop()
                        .delay(200)
                        .slideDown(200),
                      e.preventDefault();
                  });
              }),
          // Twitter feeds
          0 < a(this).find(".krown-twitter.rotenabled").length &&
            a(this)
              .find(".krown-twitter.rotenabled")
              .each(function () {
                var e = a(this).children("ul").children("li"),
                  t = 0,
                  o = setInterval(function () {
                    e.eq(t).fadeOut(250),
                      ++t == e.length && (t = 0),
                      e.eq(t).delay(260).fadeIn(300);
                  }, 6e3);
              }),
          // Videos
          0 < a(this).find("audio, video").length &&
            ("function" == typeof a("body").mediaelementplayer
              ? e()
              : a
                  .when(
                    a.getScript(mediaScripts.mediaelement),
                    a.getScript(mediaScripts.wp_mediaelement)
                  )
                  .then(function () {
                    setTimeout(function () {
                      e();
                    }, 2e3);
                  })),
          // Other stuff
          a(this).fitVids(),
          a("p:empty").remove(),
          a("select:not(.styled):not(.select2-hidden-accessible)")
            .styledSelect({
              coverClass: "simple-select-cover",
              innerClass: "simple-select-inner",
            })
            .addClass("styled");
      }),
        a("#page-content").initShortcodes(),
        a(
          ".woocommerce-page.single-product #woocommerce-content"
        ).initShortcodes(),
        a(".single-post .post-content").initShortcodes();
    });
  })(
    jQuery
  ) /* ALL THE SCRIPTS IN THIS FILE ARE MADE BY KROWNTHEMES.COM AND ARE LICENSED UNDER ENVATO'S REGULAR/EXTENDED LICENSE --- REDISTRIBUTION IS NOT ALLOWED! */,
  (function (z) {
    (window.onpopstate = function (e) {
      window.location.href === langObj.journal_page_link &&
        window.location.reload();
    }),
      z(window).load(function () {
        "use strict";
        /* ----------------------------------------------------
            ---------- !! BLOG !! -----------------
            ------------------------------------------------------- */
        // All variables
        function a(e) {
          b.push(e),
            e
              .closest("article")
              .on("mouseover", function () {
                z(this).find(".featured-img").addClass("active"),
                  z(window).trigger("scroll");
              })
              .on("mouseout", function () {
                z(this).find(".featured-img").removeClass("active");
              }),
            z(window).trigger("resize");
        }

        function n(e) {
          z(window)
            .on("resize.postheader", function () {
              "block" != w.css("display")
                ? e.height(z(window).height() / e.data("height"))
                : e.height(z(window).height() / 2);
            })
            .trigger("resize.postheader");
        }
        /* -------------------------------
                -----   AJAX Loading   -----
                ---------------------------------*/
        // Function that checks the loading of a post
        function i(e) {
          "empty" == e.attr("data-lazyload")
            ? (e.attr("data-lazyload", "loading"), t(e))
            : "open" == e.attr("data-lazyload") && t(e);
        }
        // Function that gets the post content and stores it
        function t(o) {
          z.ajax({
            url: o.find("a.post-link").attr("href"),
            data: { justcontent: "yes" },
            dataType: "text",
            success: function (e) {
              var t = z(e).find(".post-content");
              null != o.attr("id")
                ? (y[o.attr("id")] = t)
                : (y["post-" + o.data("id")] = t),
                "open" == o.attr("data-lazyload") && r(o),
                o.attr("data-lazyload", "loaded");
            },
          });
        }
        // Function that prepares the opening of a post item
        function s(e) {
          var t = e.closest("article");
          t.addClass("loading"),
            p.removeClass("overtop").addClass("overlap"),
            o.addClass("noback"),
            TweenLite.to(t.siblings("article"), 0.1, { opacity: 0 }),
            TweenLite.to(t, 0.6, { top: -t.offset().top }),
            TweenLite.to(t.find("h2"), 0.6, {
              css: { fontSize: "36px", lineHeight: "40px" },
            }),
            TweenLite.to(window, 0.6, { scrollTo: { y: 0 } }),
            TweenLite.to(t.find(".header-container"), 0.6, {
              height:
                z(window).height() / t.find(".header-container").data("height"),
            }),
            p.attr("data-background", t.attr("data-background")),
            z(window).off("scroll.infinite"),
            setTimeout(function () {
              "loading" == t.attr("data-lazyload")
                ? t.attr("data-lazyload", "open")
                : "loaded" == t.attr("data-lazyload")
                ? r(t)
                : (t.attr("data-lazyload", "open"), i(t));
            }, 400),
            setTimeout(function () {
              o.removeClass("noback");
            }, 700);
        }
        // Function that actually opens the new post
        function r(e) {
          var t = e.find("a").attr("href"),
            o = e.data("title");
          e.attr("data-lazyload", "opened"),
            e.append(y[e.attr("id")]),
            e.find(".post-content").css({ opacity: 0, top: 50 }),
            TweenLite.to(e.find(".post-content"), 0.7, { opacity: 1, top: 0 }),
            d(),
            z.lazyBg(),
            l(),
            n(e.find(".header-container")),
            e.find(".featured-img").addClass("reactive"),
            e.find(".post-content").initShortcodes(),
            History.pushState(
              null,
              o,
              t.replace(
                document.location.protocol + "//" + document.location.hostname,
                ""
              )
            ),
            setTimeout(function () {
              e.siblings("article").css("display", "none"),
                e.css("top", 0),
                z("body.blog #content").css("paddingTop", 0),
                p.css("paddingTop", 0);
            }, 400);
        }
        /* -------------------------------
                -----   Other Functions   -----
                ---------------------------------*/
        // Ajax comments
        function l() {
          z("#comment-form")
            .find("input#submit")
            .before('<p id="ajax-response"></p>');
          var n = z("#comment-form"),
            a = z("#comments-list"),
            i = n.find("#name"),
            s = n.find("#email"),
            r = n.find("#comment"),
            l = n.find("input#submit"),
            d = z("#ajax-response");
          i.focus(function () {
            d.text("");
          }),
            s.focus(function () {
              d.text("");
            }),
            r.focus(function () {
              d.text("");
            }),
            n.submit(function (e) {
              var t = !0,
                o = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
              0 < i.length && i.val().length < 3 && (t = !1),
                0 < s.length && !o.test(s.val()) && (t = !1),
                0 < r.length && r.val().length < 3 && (t = !1),
                t
                  ? (z.ajax({
                      type: n.prop("method"),
                      url: n.prop("action"),
                      data: n.serialize(),
                      success: function (e, t, o) {
                        a.html(z(e).find("#comments-list")[0]),
                          d.text(langObj.posted_comment),
                          l.removeClass("disabled").val(langObj.post_comment);
                      },
                      error: function (e, t, o) {
                        409 == e.status &&
                          (d.text(langObj.duplicate_comment),
                          l.removeClass("disabled").val(langObj.post_comment));
                      },
                    }),
                    l.addClass("disabled").val(langObj.posting_comment))
                  : d.text(langObj.required_comment),
                e.preventDefault();
            });
        }
        // Post navigation
        function d() {
          // Add mouse over / mouse out events for these buttons
          v.find(".post-nav > a")
            .on("click", function (e) {
              z.generalFauxAjax(z(e.currentTarget).attr("href")),
                e.preventDefault();
            })
            .on("mouseover", function (e) {
              var t = z(this).hasClass("btn-next") ? ".next" : ".prev";
              z(this).addClass("hover"),
                z(this)
                  .siblings("span.after" + t)
                  .css("zIndex", 8),
                TweenLite.to(z(this).siblings("span.after" + t), 0.5, {
                  css: { opacity: 1, backgroundPosition: "50% 50%" },
                }),
                TweenLite.to(z(this).parent().find("a:not(.hover)"), 0.5, {
                  opacity: 0.1,
                });
            })
            .on("mouseout", function (e) {
              var t = z(this).hasClass("btn-next") ? ".next" : ".prev";
              z(this).removeClass("hover"),
                z(this)
                  .siblings("span.after" + t)
                  .css("zIndex", 8),
                TweenLite.to(z(this).siblings("span.after" + t), 0.5, {
                  css: { opacity: 0, backgroundPosition: "50% 40%" },
                }),
                TweenLite.to(z(this).parent().find("a:not(.hover)"), 0.5, {
                  opacity: 1,
                });
            });
        }
        /* -------------------------------
                -----   Infinite loading   -----
                ---------------------------------*/
        function c() {
          z(window).scrollTop() + z(window).height() - 200 >=
            x.offset().top + x.height() &&
            // Prepare loading
            (z(window).off("scroll.infinite"),
            k.stop().slideDown(300),
            // Start AJAX call
            z.ajax({
              type: "POST",
              url: T.attr("href"),
              dataType: "html",
              success: function (e) {
                var t = z(e),
                  o = t.find(".post:not(#infinite-barrier)");
                if (0 < o.length) {
                  // If there are posts
                  k.before(o);
                  var n = -1;
                  o.each(function () {
                    var e = z(this);
                    e.css("height", 0),
                      TweenLite.to(e, 0.2, {
                        height: 275,
                        onComplete: function () {
                          z(this).css("height", "auto");
                        },
                        onCompleteScope: e,
                        delay: 0.1 * ++n,
                      }),
                      e.on("mouseenter", function (e) {
                        i(z(this));
                      }),
                      e.find("a").on("click", function (e) {
                        s(z(this)), e.preventDefault();
                      }),
                      a(e.find(".featured-img"));
                  }),
                    z(window).trigger("resize"),
                    // Prepare for next page
                    k.stop().slideUp(300),
                    T.attr("href", t.find(".infinite-link").attr("href")),
                    z(window).on("scroll.infinite", c);
                }
                // If no more posts
                else
                  k.find("p.start").stop().fadeOut(100),
                    k.find("p.end").stop().fadeIn(100),
                    setTimeout(function () {
                      k.stop().slideUp(200);
                    }, 2500);
              },
              error: function () {
                k.find("p.start").stop().fadeOut(100),
                  k.find("p.end").stop().fadeIn(100),
                  setTimeout(function () {
                    k.stop().slideUp(200);
                  }, 2500);
              },
            }));
        }
        /* -------------------------------
                -----   Single posts   -----
                ---------------------------------*/
        var e = z("html"),
          p = z("body"),
          o = z("#header"),
          h = z("#main-menu"),
          f = z("#menu-opener"),
          u = z("#main-menu .top-menu"),
          g = z("#menu-widget"),
          m = z("#menu-holder"),
          w = z("#hero-helper"),
          v = z("#content");
        z("body.blog #content").css("paddingTop", o.outerHeight());
        // Functions that inits a certain page header parallax
        var b = [];
        ((p.hasClass("blog") && z("#posts-container").hasClass("modern")) ||
          p.hasClass("single")) &&
          (z(".featured-img").each(function () {
            a(z(this));
          }),
          z(window).on("scroll", function (e) {
            for (var t = 0; t < b.length; t++)
              (b[t].hasClass("active") || b[t].hasClass("reactive")) &&
                b[t].css(
                  "transform",
                  "translate3d(0, " +
                    (z(window).scrollTop() - b[t].offset().top) / 6 +
                    "px, 0)"
                );
          }),
          z(window)
            .on("resize", function (e) {
              for (var t = 0; t < b.length; t++)
                "noback" != b[t].data("bg") && z.bgSet(b[t], z(window));
            })
            .trigger("resize"));
        var C = !1,
          y = {};
        p.hasClass("blog") &&
        !p.hasClass("search") &&
        z("#posts-container").hasClass("modern") &&
        "enabled" == z.krownAjax
          ? (z("#posts-container")
              .find("a")
              .on("click", function (e) {
                z.touchM && "block" == w.css("display")
                  ? z.generalFauxAjax(z(e.currentTarget).attr("href"))
                  : s(z(this)),
                  e.preventDefault();
              }),
            z("#posts-container")
              .find("article.post")
              .each(function () {
                z(this).on("mouseenter", function (e) {
                  i(z(this));
                });
              }))
          : z("#posts-container")
              .find("a")
              .on("click", function (e) {
                z.generalFauxAjax(z(e.currentTarget).attr("href")),
                  e.preventDefault();
              }),
          setTimeout(function () {
            i(z(".btn-next"));
          }, 1e3);
        var k = z("#infinite-barrier"),
          T = z(".infinite-link"),
          x = z("#posts-container");
        p.hasClass("blog") &&
          z("#posts-container").hasClass("modern") &&
          z(window).on("scroll.infinite", c),
          p.hasClass("single") &&
            (l(),
            d(),
            n(z(".post").find(".header-container")),
            p.attr("data-background", z(".post").attr("data-background")));
      });
  })(
    jQuery
  ) /* ALL THE SCRIPTS IN THIS FILE ARE MADE BY KROWNTHEMES.COM AND ARE LICENSED UNDER ENVATO'S REGULAR/EXTENDED LICENSE --- REDISTRIBUTION IS NOT ALLOWED! */,
  (function (_) {
    _(window).load(function () {
      "use strict";
      /* ----------------------------------------------------
            ---------- !! PORTFOLIO !! -----------------
            ------------------------------------------------------- */
      // All variables
      // Slider helper functions
      function t() {
        //$content.css('paddingTop', $pageMaskee.height());
        y.height(h.height()).width(h.width());
      }

      function o(e) {
        _(window).width() < _(window).height()
          ? e.attr("data-background", e.data("background-p"))
          : e.attr("data-background", e.data("background-l")),
          f.attr("data-background", e.data("background"));
      }
      /* -------------------------------
                -----   Portfolio   -----
                ---------------------------------*/
      function n(e, t) {
        // Function that opens a project via AJAX, loads al proper info, then displays it nicely
        k.disableWheelNavigation(),
          k.disableNavigation(),
          f.css("overflowY", "scroll").addClass("opening");
        //$content.addClass('no-footer');
        var o = new Date().getTime();
        _.ajax({
          url: e,
          dataType: "html",
          success: function (e) {
            // Delay project animation if less than .5s from loading
            var t = new Date().getTime() - o;
            500 < t
              ? a(_(e))
              : setTimeout(function () {
                  a(_(e));
                }, 500 - t),
              // Refresh social meta
              D &&
                ((D = !1),
                _("head").append(
                  '<meta id="meta-ogtitle" property="og:title" content=""/><meta id="meta-ogtype" property="og:type" content=""/><meta id="meta-ogurl" property="og:url" content=""/><meta id="meta-ogsitename" property="og:site_name" content=""/><meta id="meta-description" property="og:description" content="" /><meta id="meta-twittercard" name="twitter:card" value="summary"><meta id="meta-itempropimage" itemprop="image" content=""><meta id="meta-twitterimg" name="twitter:image:src" content=""><meta id="meta-ogimage" property="og:image" content="" />'
                )),
              _.writeProjectPostMeta(e);
          },
        }),
          // Push new History state
          History.pushState(
            null,
            t,
            e.replace(
              document.location.protocol + "//" + document.location.hostname,
              ""
            )
          );
      }

      function a(e) {
        // Reinit header slider
        y.addClass("hide-nav"),
          // Add content
          w.append(e.find("#page-content, .post-nav, #footer")),
          w.find("#page-content").initShortcodes(),
          _.lazyBg(),
          p(),
          i(),
          s(),
          r();
      }

      function i() {
        // Set current slide
        (L = k.currentSlide),
          (x = y.children(".slide").eq(L)),
          (z = x.find(".page-header")),
          (S = x.find(".media")),
          (j = S.children("img"));
      }

      function s() {
        // Add mouse over / mouse out events for these buttons
        w.find(".post-nav > a").on("click", function (e) {
          d(_(e.currentTarget)), e.preventDefault();
        }),
          w
            .find(".post-nav a")
            .on("mouseover", function (e) {
              var t = _(this).hasClass("btn-next") ? ".next" : ".prev";
              _(this).addClass("hover"),
                _(this)
                  .siblings("span.after" + t)
                  .css("zIndex", 8),
                TweenLite.to(_(this).siblings("span.after" + t), 0.5, {
                  css: { opacity: 1, backgroundPosition: "50% 50%" },
                }),
                TweenLite.to(_(this).parent().find("a:not(.hover)"), 0.5, {
                  opacity: 0.1,
                });
            })
            .on("mouseout", function (e) {
              var t = _(this).hasClass("btn-next") ? ".next" : ".prev";
              _(this).removeClass("hover"),
                _(this)
                  .siblings("span.after" + t)
                  .css("zIndex", 8),
                TweenLite.to(_(this).siblings("span.after" + t), 0.5, {
                  css: { opacity: 0, backgroundPosition: "50% 40%" },
                }),
                TweenLite.to(_(this).parent().find("a:not(.hover)"), 0.5, {
                  opacity: 1,
                });
            });
      }

      function r() {
        // Project "IN" animations
        (_.lastScrollTop = 0),
          f.addClass("opened-portfolio"),
          TweenLite.to(x.find(".krown-button"), 0.3, { opacity: 0 }),
          TweenLite.to(window, 1, {
            scrollTo: { y: h.height() / 2 },
            delay: 0.3,
          }),
          setTimeout(function () {
            v.css("display", "block"), k.enableScroll(), u.removeClass("hide");
          }, 1e3),
          // Add scroll event for background position alignment and page header
          z.css("transform", "translate3d(0, 0px, 0)"),
          S.css("transform", "translate3d(0, 0px, 0)"),
          h.on("scroll.parallax", function (e) {
            _(window).scrollTop() < _(window).height() + 100 &&
              (z.css(
                "transform",
                "translate3d(0, " +
                  Math.round(_(window).scrollTop() / 2) +
                  "px, 0)"
              ),
              S.css(
                "transform",
                "translate3d(0, " +
                  Math.round(_(window).scrollTop() / 4) +
                  "px, 0)"
              ));
          }),
          setTimeout(function () {
            _(window).trigger("resize");
          }, 500);
      }
      // Function which opens a new project after an initial one is opened
      function l(e) {
        e.addClass("loading"),
          y.removeClass("show-nav"),
          "block" != C.css("display") && e.animate({ width: 55 }, 250);
        var t = e.attr("href"),
          o = e.data("title");
        setTimeout(function () {
          n(t, o);
        }, 1);
      }

      function d(e) {
        f.removeClass("opened-portfolio");
        // Check direction
        var o = (A = !0);
        e.hasClass("btn-prev") && (o = !1),
          u.addClass("hide"),
          // Scroll window to top then start process
          TweenLite.to(window, "ontouchstart" in window ? 0 : 0.5, {
            scrollTo: { y: 0 },
            onComplete: function () {
              //$body.addClass('opened-portfolio');
              k.enableNavigation(),
                (_.lastScrollTop = 0),
                // Remove all previous content
                _("#page-content, #footer, .post-nav").remove(),
                // Start process after small delay
                setTimeout(function () {
                  var e = y
                    .children(".slide")
                    .eq(k.currentSlide)
                    .find(".krown-button");
                  o ? k.nextSlide() : k.previousSlide(), k.disableNavigation();
                  var t = y
                    .children(".slide")
                    .eq(k.currentSlide)
                    .find(".krown-button");
                  setTimeout(function () {
                    t.trigger("click"),
                      e.removeClass("loading").css({
                        opacity: 1,
                        width: "none" == C.css("display") ? "auto" : 41,
                      });
                  }, 1e3);
                }, 300);
            },
          });
      }
      // Function which closes the opened project
      function c() {
        k.disableScroll(),
          f.removeClass("opened-portfolio"),
          (A = !1),
          // Scroll windwo to top and remove old content
          TweenLite.to(window, _.touchM ? 0 : 0.5, {
            scrollTo: { y: 0 },
            onComplete: function () {
              _("#page-content, #footer, .post-nav").remove(),
                u.removeClass("nav-back"),
                //$footer.css('display', 'none');
                y.addClass("show-nav").removeClass("hide-nav"),
                f.css("overflowY", "hidden").removeClass("opening"),
                h.off("scroll.parallax"),
                k.enableWheelNavigation(),
                k.enableNavigation(),
                k.revertWheelNavigation(!0),
                k.enableScroll(),
                //$header.removeClass('sticky active');
                //TweenLite.to($header, 0, {y: '0%'});
                //maskeeResponsive();
                // Disable project meta
                (D = !0),
                _(
                  "#meta-ogtitle, #meta-ogtype, #meta-ogurl, #meta-ogsitename, #meta-description, #meta-itempropimage, #meta-twitterimg, #meta-ogimage"
                ).remove();
            },
          }),
          // Do all "REVERSE" animations
          x
            .find(".krown-button")
            .removeClass("clicked")
            .removeClass("loading")
            .css("width", "none" == C.css("display") ? "auto" : 41),
          TweenLite.to(x.find(".krown-button"), 0.3, {
            opacity: 1,
            delay: 0.5,
          }),
          //TweenLite.to($logo, .5, {css:{y: 0, opacity: 1}, delay: .3});
          //TweenLite.to($menuHolder, .5, {css:{y: 0, opacity:1}, delay: .3, onComplete: function(){
          //	$menuHolder.css('transform', '');
          //}});
          TweenLite.to(z, 0.7, { css: { top: 0 }, delay: 0.3 }),
          TweenLite.to(v.children("svg"), 0.2, {
            rotation: 90,
            opacity: 0,
            onComplete: function () {
              TweenLite.to(v.children("svg"), 0, { rotation: 0, opacity: 1 }),
                v.css("display", "none");
            },
          }),
          y.removeClass("invisible-pagination"),
          // Push old History state
          History.pushState(null, M[0], M[1]);
      }

      function e(e) {
        e ? f.addClass("kill-bill") : f.removeClass("kill-bill");
      }
      /* -------------------------------
                -----   Shortcode   -----
                ---------------------------------*/
      function p() {
        function n(e) {
          var t = e.data("columns");
          return (
            _(window).width() < 918 && 2 < t && (t = 2),
            _(window).width() < 513 && 1 < t && (t = 1),
            Math.floor((e.width() - e.data("gap") * (t - 1)) / t)
          );
        }

        function o(e, t) {
          var o;
          return n(t);
        }
        if (0 < _(".krown-portfolio").length) {
          _(".krown-portfolio a").each(function () {
            O.push(_(this)),
              _(this).on("click", function (e) {
                _.generalFauxAjax(_(this).attr("href")), e.preventDefault();
              });
          }),
            h.on("resize", function () {
              for (var e = 0; e < O.length; e++) _.bgSet(O[e], O[e]);
            });
          for (var e = 0; e < O.length; e++) _.bgSet(O[e], O[e]);
        }
        if (0 < _("#portfolio:not(.done)").length) {
          // Products grid
          var a = _("#portfolio");
          a.append('<div class="grid-sizer" /><div class="grid-gutter" />');
          var t = n(a),
            i = a.data("gap");
          _(".grid-sizer").css("width", t),
            _(".grid-gutter").css("width", i),
            a.isotope({
              itemSelector: ".item",
              masonry: { columnWidth: ".grid-sizer", gutter: ".grid-gutter" },
              transitionDuration: 0,
            }),
            _(window)
              .on("resize.portfolio", function (e) {
                var t = n(a);
                _(".grid-sizer").css("width", t),
                  _(a.isotope("getItemElements")).each(function () {
                    _(this).css("width", o(_(this), a));
                  }),
                  a.isotope("layout");
              })
              .trigger("resize");
        }
      }
      var h = _(window),
        f = _("body"),
        u = _("#header"),
        g = _("#logo"),
        m = _("#menu-holder"),
        w = _("#content"),
        v = _(".post-close"),
        b = _("#footer"),
        C = _("#hero-helper"),
        y = _(".maskee"),
        k = null,
        T = !0,
        x = null,
        z = null,
        S = null,
        j = null,
        L = -1,
        D = !0,
        M = [],
        I;
      // weird android bug for maskee slider
      (navigator.userAgent || navigator.vendor || window.opera).match(
        /Android/i
      ) && f.addClass("weird-android-bug-fix"),
        /* -------------------------------
                    -----   Slider   -----
                    ---------------------------------*/
        (f.hasClass("page-template-template-portfolio") ||
          f.hasClass("single-portfolio")) &&
          (f.hasClass("page-template-template-portfolio") &&
            (f.css("overflowY", "hidden"),
            (M = [document.title, document.location.pathname])),
          // Init maskee slider
          y.maskee({
            useCSSTransitions: !1,
            transitionEasing: "easeInQuad",
            pagination: "numeric",
            navigationArrows: !1,
            navigationArrowsLeftContent:
              '<svg x="0" y="0" width="24" height="42" viewBox="0 0 24 42" enable-background="new 0 0 24 42" xml:space="preserve"><polygon points="0 20.1 0 20.1 0 20.1 3.1 23.3 3.1 23.3 20.1 40.3 23.3 37.1 6.3 20.1 23.3 3.1 20.1 0 3.1 17 3.1 17 "/></svg>',
            navigationArrowsRightContent:
              '<svg x="0" y="0" width="24" height="42" viewBox="0 0 24 42" enable-background="new 0 0 24 42" xml:space="preserve"><polygon points="23.3 20.1 23.3 20.1 23.3 20.1 20.1 23.3 20.1 23.3 3.1 40.3 0 37.1 17 20.1 0 3.1 3.1 0 20.1 17 20.1 17 "/></svg>',
            mouseWheelNavigation: !0,
            navigationCursor: !0,
            loop: !1,
            preSlide: 0 < _(".pre-slide").length,
            fadeFirst: !0,
            onFirstImageLoaded: function (e) {
              f.hasClass("page-template-template-portfolio") &&
                TweenLite.to(window, 0, {
                  scrollTo: { y: 0 },
                  overwrite: 1,
                  delay: 0.5,
                }),
                // Add resizing event
                h.on("resize.gallery", function () {
                  _.fixMobileResize() && t();
                }),
                window.addEventListener("orientationchange", function () {
                  setTimeout(function () {
                    t();
                  }, 500);
                }),
                t(),
                o(e.find(".slide:first-of-type")),
                // Move header inside first slide for single projects
                f.hasClass("single") &&
                  _(".page-header")
                    .prependTo(y.find(".slide:first-of-type"))
                    .addClass("caption");
            },
            onSliderInit: function (e) {
              t(),
                y.addClass("loaded"),
                _("#preloader").addClass("hide"),
                f.removeClass("before-load"),
                setTimeout(function () {
                  _(".maskee-helper").removeClass("remove");
                }, 250),
                f.hasClass("single") && _(window).trigger("resize");
            },
            onSlideChangeStart: function (e, t) {
              setTimeout(function () {
                o(t);
              }, 250);
            },
            onSlideChangeEnd: function (e, t, o) {
              T && ((T = !1), e.addClass("show-nav"));
            },
          }),
          (k = y.data("maskee")),
          // Slider header adjustmets
          _(".slide:not(.pre-slide) .page-header").each(function () {
            _(this).find("h6").prependTo(_(this).children("div"));
          }),
          // Open project event binded to slider buttons
          _(
            ".page-template-template-portfolio .page-header .krown-button"
          ).each(function () {
            _(this).addClass("clicked"),
              _(this).hasClass("custom-link")
                ? _(this).on("click", function (e) {
                    if (!_(this).hasClass("clicked")) {
                      var t = _(this);
                      "_self" == t.attr("target")
                        ? _.generalFauxAjax(t.attr("href"))
                        : window.open(t.attr("href"), "_blank"),
                        t.addClass("clicked"),
                        setTimeout(function () {
                          t.removeClass("clicked");
                        }, 250);
                    }
                    e.preventDefault(), e.stopPropagation();
                  })
                : _(this).on("click", function (e) {
                    if ("enabled" == _.krownAjax) {
                      if (!_(this).hasClass("clicked")) {
                        var t = _(this);
                        t.addClass("clicked"),
                          l(t),
                          k.revertWheelNavigation(!1, t.data("i"));
                      }
                      e.preventDefault();
                    } else document.location.href = _(this).attr("href");
                    e.stopPropagation();
                  });
            var e = new Hammer(_(this)[0]);
            e.on("tap", function (e) {
              _(e.target).trigger("click");
            }),
              e.on("press", function (e) {
                _(e.target).trigger("click");
              });
          }),
          // Pre slide links fix
          _(".pre-slide a").each(function () {
            var e;
            _(this).on("click", function (e) {
              var t = _(this);
              "_blank" == t.attr("target")
                ? window.open(t.attr("href"), "_blank")
                : _.generalFauxAjax(t.attr("href")),
                e.preventDefault(),
                e.stopPropagation();
            }),
              new Hammer(_(this)[0]).on("tap", function (e) {
                _(e.target).trigger("click");
              });
          }),
          v.on("click", function (e) {
            c(), e.preventDefault();
          }));
      var A = !1;
      if (
        (0 == h.scrollTop()
          ? _("body").on("scroll.icon", function () {
              _(".maskee-helper").addClass("remove"),
                setTimeout(function () {
                  _(".maskee-helper").remove();
                }, 500),
                _("body").off("scroll.icon");
            })
          : _(".maskee-helper").remove(),
        f.hasClass("page-template-template-portfolio"))
      ) {
        var P = null;
        _(".maskee").on("touchstart", function (e) {
          f.hasClass("opened-portfolio") || e.preventDefault();
        });
      }
      f.hasClass("single-portfolio") &&
        ((z = _(".page-header")),
        (S = _(".maskee .slide .media")),
        (j = S.children("img")),
        h.on("scroll", function (e) {
          _(window).scrollTop() < _(window).height() + 100 &&
            (z.css(
              "transform",
              "translate3d(0, " +
                Math.round(_(window).scrollTop() / 2) +
                "px, 0)"
            ),
            S.css(
              "transform",
              "translate3d(0, " +
                Math.round(_(window).scrollTop() / 4) +
                "px, 0)"
            ));
        }),
        _(".page-header").each(function () {
          _(this).find("h6").insertBefore(_(this).find("h2"));
        })),
        /* -------------------------------
                    -----   RESPONSIVE   -----
                    ---------------------------------*/
        f.hasClass("page-template-template-portfolio");
      var O = Array();
      p();
    });
  })(jQuery);
$(function () {
  // ACTIVATION DU DATEPICKER
  $(".datepicker").datepicker({
    clearBtn: true,
    format: "dd/mm/yyyy",
  });
});
// $("#prospects_form").submit(function (e) {
//   e.preve
$("#submitButtonId").click(function () {
  var url = "path/to/your/script.php"; // the script where you handle the form input.

  $.ajax({
    type: "POST",
    url: "https://submit.jotform.com/submit/212036211682546/",
    data: $("#prospects_form").serialize(), // serializes the form's elements.
    success: function (data) {
      $("#myModal").modal("show");
    },
  });

  return false; // avoid to execute the actual submit of the form.
});
