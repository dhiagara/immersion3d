/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
function detectFirefoxAndroid() { var t = navigator.userAgent.toLowerCase(),
        e = -1 < t.indexOf("android"),
        i = -1 < t.indexOf("firefox") || t.indexOf("fxios"); return !(!e || !i) }
// CAN PLAY FEATURE - modernizr
/*!
 * VERSION: 1.18.5
 * DATE: 2016-05-24
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope, _gsScope;
! function(n, i, P, c) { var r = P("html"),
        o = P(n),
        u = P(i),
        C = P.fancybox = function() { C.open.apply(this, arguments) },
        s = navigator.userAgent.match(/msie/i),
        a = null,
        l = i.createTouch !== c,
        h = function(t) { return t && t.hasOwnProperty && t instanceof P },
        d = function(t) { return t && "string" === P.type(t) },
        O = function(t) { return d(t) && 0 < t.indexOf("%") },
        k = function(t, e) { var i = parseInt(t, 10) || 0; return e && O(t) && (i *= C.getViewport()[e] / 100), Math.ceil(i) },
        E = function(t, e) { return k(t, e) + "px" };
    P.extend(C, { version: "2.1.5", defaults: { padding: 15, margin: 20, width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, pixelRatio: 1, autoSize: !0, autoHeight: !1, autoWidth: !1, autoResize: !0, autoCenter: !l, fitToView: !0, aspectRatio: !1, topRatio: .5, leftRatio: .5, scrolling: "auto", wrapCSS: "", arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3e3, preload: 3, modal: !1, loop: !0, ajax: { dataType: "html", headers: { "X-fancyBox": !0 } }, iframe: { scrolling: "auto", preload: !0 }, swf: { wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always" }, keys: { next: { 13: "left", 34: "up", 39: "left", 40: "up" }, prev: { 8: "right", 33: "down", 37: "right", 38: "down" }, close: [27], play: [32], toggle: [70] }, direction: { next: "left", prev: "right" }, scrollOutside: !0, index: 0, type: null, href: null, content: null, title: null, tpl: { wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (s ? ' allowtransparency="true"' : "") + "></iframe>", error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>', next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>' }, openEffect: "fade", openSpeed: 250, openEasing: "swing", openOpacity: !0, openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 250, closeEasing: "swing", closeOpacity: !0, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 250, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic", prevSpeed: 250, prevEasing: "swing", prevMethod: "changeOut", helpers: { overlay: !0, title: !0 }, onCancel: P.noop, beforeLoad: P.noop, afterLoad: P.noop, beforeShow: P.noop, afterShow: P.noop, beforeChange: P.noop, beforeClose: P.noop, afterClose: P.noop }, group: {}, opts: {}, previous: null, coming: null, current: null, isActive: !1, isOpen: !1, isOpened: !1, wrap: null, skin: null, outer: null, inner: null, player: { timer: null, isActive: !1 }, ajaxLoad: null, imgPreload: null, transitions: {}, helpers: {}, open: function(l, u) { if (l && (P.isPlainObject(u) || (u = {}), !1 !== C.close(!0))) return P.isArray(l) || (l = h(l) ? P(l).get() : [l]), P.each(l, function(t, e) { var i = {},
                    n, r, o, s, a; "object" === P.type(e) && (e.nodeType && (e = P(e)), h(e) ? (i = { href: e.data("fancybox-href") || e.attr("href"), title: e.data("fancybox-title") || e.attr("title"), isDom: !0, element: e }, P.metadata && P.extend(!0, i, e.metadata())) : i = e), n = u.href || i.href || (d(e) ? e : null), r = u.title !== c ? u.title : i.title || "", !(s = (o = u.content || i.content) ? "html" : u.type || i.type) && i.isDom && ((s = e.data("fancybox-type")) || (s = (s = e.prop("class").match(/fancybox\.(\w+)/)) ? s[1] : null)), d(n) && (s || (C.isImage(n) ? s = "image" : C.isSWF(n) ? s = "swf" : "#" === n.charAt(0) ? s = "inline" : d(e) && (s = "html", o = e)), "ajax" === s && (n = (a = n.split(/\s+/, 2)).shift(), a = a.shift())), o || ("inline" === s ? n ? o = P(d(n) ? n.replace(/.*(?=#[^\s]+$)/, "") : n) : i.isDom && (o = e) : "html" === s ? o = n : !s && !n && i.isDom && (s = "inline", o = e)), P.extend(i, { href: n, type: s, content: o, title: r, selector: a }), l[t] = i }), C.opts = P.extend(!0, {}, C.defaults, u), u.keys !== c && (C.opts.keys = !!u.keys && P.extend({}, C.defaults.keys, u.keys)), C.group = l, C._start(C.opts.index) }, cancel: function() { var t = C.coming;
            t && !1 !== C.trigger("onCancel") && (C.hideLoading(), C.ajaxLoad && C.ajaxLoad.abort(), C.ajaxLoad = null, C.imgPreload && (C.imgPreload.onload = C.imgPreload.onerror = null), t.wrap && t.wrap.stop(!0, !0).trigger("onReset").remove(), C.coming = null, C.current || C._afterZoomOut(t)) }, close: function(t) { C.cancel(), !1 !== C.trigger("beforeClose") && (C.unbindEvents(), C.isActive && (C.isOpen && !0 !== t ? (C.isOpen = C.isOpened = !1, C.isClosing = !0, P(".fancybox-item, .fancybox-nav").remove(), C.wrap.stop(!0, !0).removeClass("fancybox-opened"), C.transitions[C.current.closeMethod]()) : (P(".fancybox-wrap").stop(!0).trigger("onReset").remove(), C._afterZoomOut()))) }, play: function(t) { var e = function() { clearTimeout(C.player.timer) },
                i = function() { e(), C.current && C.player.isActive && (C.player.timer = setTimeout(C.next, C.current.playSpeed)) },
                n = function() { e(), u.unbind(".player"), C.player.isActive = !1, C.trigger("onPlayEnd") };!0 === t || !C.player.isActive && !1 !== t ? C.current && (C.current.loop || C.current.index < C.group.length - 1) && (C.player.isActive = !0, u.bind({ "onCancel.player beforeClose.player": n, "onUpdate.player": i, "beforeLoad.player": e }), i(), C.trigger("onPlayStart")) : n() }, next: function(t) { var e = C.current;
            e && (d(t) || (t = e.direction.next), C.jumpto(e.index + 1, t, "next")) }, prev: function(t) { var e = C.current;
            e && (d(t) || (t = e.direction.prev), C.jumpto(e.index - 1, t, "prev")) }, jumpto: function(t, e, i) { var n = C.current;
            n && (t = k(t), C.direction = e || n.direction[t >= n.index ? "next" : "prev"], C.router = i || "jumpto", n.loop && (t < 0 && (t = n.group.length + t % n.group.length), t %= n.group.length), n.group[t] !== c && (C.cancel(), C._start(t))) }, reposition: function(t, e) { var i = C.current,
                n = i ? i.wrap : null,
                r;
            n && (r = C._getPosition(e), t && "scroll" === t.type ? (delete r.position, n.stop(!0, !0).animate(r, 200)) : (n.css(r), i.pos = P.extend({}, i.dim, r))) }, update: function(e) { var i = e && e.type,
                n = !i || "orientationchange" === i;
            n && (clearTimeout(a), a = null), C.isOpen && !a && (a = setTimeout(function() { var t = C.current;
                t && !C.isClosing && (C.wrap.removeClass("fancybox-tmp"), (n || "load" === i || "resize" === i && t.autoResize) && C._setDimension(), "scroll" === i && t.canShrink || C.reposition(e), C.trigger("onUpdate"), a = null) }, n && !l ? 0 : 300)) }, toggle: function(t) { C.isOpen && (C.current.fitToView = "boolean" === P.type(t) ? t : !C.current.fitToView, l && (C.wrap.removeAttr("style").addClass("fancybox-tmp"), C.trigger("onUpdate")), C.update()) }, hideLoading: function() { u.unbind(".loading"), P("#fancybox-loading").remove() }, showLoading: function() { var t, e;
            C.hideLoading(), t = P('<div id="fancybox-loading"><div></div></div>').click(C.cancel).appendTo("body"), u.bind("keydown.loading", function(t) { 27 === (t.which || t.keyCode) && (t.preventDefault(), C.cancel()) }), C.defaults.fixed || (e = C.getViewport(), t.css({ position: "absolute", top: .5 * e.h + e.y, left: .5 * e.w + e.x })) }, getViewport: function() { var t = C.current && C.current.locked || !1,
                e = { x: o.scrollLeft(), y: o.scrollTop() }; return e.h = t ? (e.w = t[0].clientWidth, t[0].clientHeight) : (e.w = l && n.innerWidth ? n.innerWidth : o.width(), l && n.innerHeight ? n.innerHeight : o.height()), e }, unbindEvents: function() { C.wrap && h(C.wrap) && C.wrap.unbind(".fb"), u.unbind(".fb"), o.unbind(".fb") }, bindEvents: function() { var s = C.current,
                e;
            s && (o.bind("orientationchange.fb" + (l ? "" : " resize.fb") + (s.autoCenter && !s.locked ? " scroll.fb" : ""), C.update), (e = s.keys) && u.bind("keydown.fb", function(i) { var n = i.which || i.keyCode,
                    t = i.target || i.srcElement; if (27 === n && C.coming) return !1;!i.ctrlKey && !i.altKey && !i.shiftKey && !i.metaKey && (!t || !t.type && !P(t).is("[contenteditable]")) && P.each(e, function(t, e) { return 1 < s.group.length && e[n] !== c ? (C[t](e[n]), i.preventDefault(), !1) : -1 < P.inArray(n, e) ? (C[t](), i.preventDefault(), !1) : void 0 }) }), P.fn.mousewheel && s.mouseWheel && C.wrap.bind("mousewheel.fb", function(t, e, i, n) { for (var r = P(t.target || null), o = !1; r.length && !o && !r.is(".fancybox-skin") && !r.is(".fancybox-wrap");) o = r[0] && !(r[0].style.overflow && "hidden" === r[0].style.overflow) && (r[0].clientWidth && r[0].scrollWidth > r[0].clientWidth || r[0].clientHeight && r[0].scrollHeight > r[0].clientHeight), r = P(r).parent();
                0 !== e && !o && 1 < C.group.length && !s.canShrink && (0 < n || 0 < i ? C.prev(0 < n ? "down" : "left") : (n < 0 || i < 0) && C.next(n < 0 ? "up" : "right"), t.preventDefault()) })) }, trigger: function(i, t) { var e, n = t || C.coming || C.current; if (n) { if (P.isFunction(n[i]) && (e = n[i].apply(n, Array.prototype.slice.call(arguments, 1))), !1 === e) return !1;
                n.helpers && P.each(n.helpers, function(t, e) { e && C.helpers[t] && P.isFunction(C.helpers[t][i]) && C.helpers[t][i](P.extend(!0, {}, C.helpers[t].defaults, e), n) }), u.trigger(i) } }, isImage: function(t) { return d(t) && t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i) }, isSWF: function(t) { return d(t) && t.match(/\.(swf)((\?|#).*)?$/i) }, _start: function(t) { var i = {},
                e, n; if (t = k(t), !(e = C.group[t] || null)) return !1; if (e = (i = P.extend(!0, {}, C.opts, e)).margin, n = i.padding, "number" === P.type(e) && (i.margin = [e, e, e, e]), "number" === P.type(n) && (i.padding = [n, n, n, n]), i.modal && P.extend(!0, i, { closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: { overlay: { closeClick: !1 } } }), i.autoSize && (i.autoWidth = i.autoHeight = !0), "auto" === i.width && (i.autoWidth = !0), "auto" === i.height && (i.autoHeight = !0), i.group = C.group, i.index = t, C.coming = i, !1 === C.trigger("beforeLoad")) C.coming = null;
            else { if (n = i.type, e = i.href, !n) return C.coming = null, !(!C.current || !C.router || "jumpto" === C.router) && (C.current.index = t, C[C.router](C.direction)); if (C.isActive = !0, "image" !== n && "swf" !== n || (i.autoHeight = i.autoWidth = !1, i.scrolling = "visible"), "image" === n && (i.aspectRatio = !0), "iframe" === n && l && (i.scrolling = "scroll"), i.wrap = P(i.tpl.wrap).addClass("fancybox-" + (l ? "mobile" : "desktop") + " fancybox-type-" + n + " fancybox-tmp " + i.wrapCSS).appendTo(i.parent || "body"), P.extend(i, { skin: P(".fancybox-skin", i.wrap), outer: P(".fancybox-outer", i.wrap), inner: P(".fancybox-inner", i.wrap) }), P.each(["Top", "Right", "Bottom", "Left"], function(t, e) { i.skin.css("padding" + e, E(i.padding[t])) }), C.trigger("onReady"), "inline" === n || "html" === n) { if (!i.content || !i.content.length) return C._error("content") } else if (!e) return C._error("href"); "image" === n ? C._loadImage() : "ajax" === n ? C._loadAjax() : "iframe" === n ? C._loadIframe() : C._afterLoad() } }, _error: function(t) { P.extend(C.coming, { type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: t, content: C.coming.tpl.error }), C._afterLoad() }, _loadImage: function() { var t = C.imgPreload = new Image;
            t.onload = function() { this.onload = this.onerror = null, C.coming.width = this.width / C.opts.pixelRatio, C.coming.height = this.height / C.opts.pixelRatio, C._afterLoad() }, t.onerror = function() { this.onload = this.onerror = null, C._error("image") }, t.src = C.coming.href, !0 !== t.complete && C.showLoading() }, _loadAjax: function() { var i = C.coming;
            C.showLoading(), C.ajaxLoad = P.ajax(P.extend({}, i.ajax, { url: i.href, error: function(t, e) { C.coming && "abort" !== e ? C._error("ajax", t) : C.hideLoading() }, success: function(t, e) { "success" === e && (i.content = t, C._afterLoad()) } })) }, _loadIframe: function() { var t = C.coming,
                e = P(t.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", l ? "auto" : t.iframe.scrolling).attr("src", t.href);
            P(t.wrap).bind("onReset", function() { try { P(this).find("iframe").hide().attr("src", "//about:blank").end().empty() } catch (t) {} }), t.iframe.preload && (C.showLoading(), e.one("load", function() { P(this).data("ready", 1), l || P(this).bind("load.fb", C.update), P(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), C._afterLoad() })), t.content = e.appendTo(t.inner), t.iframe.preload || C._afterLoad() }, _preloadImages: function() { var t = C.group,
                e = C.current,
                i = t.length,
                n = e.preload ? Math.min(e.preload, i - 1) : 0,
                r, o; for (o = 1; o <= n; o += 1) "image" === (r = t[(e.index + o) % i]).type && r.href && ((new Image).src = r.href) }, _afterLoad: function() { var t = C.coming,
                e = C.current,
                i, n, r, o, s; if (C.hideLoading(), t && !1 !== C.isActive)
                if (!1 === C.trigger("afterLoad", t, e)) t.wrap.stop(!0).trigger("onReset").remove(), C.coming = null;
                else { switch (e && (C.trigger("beforeChange", e), e.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), C.unbindEvents(), i = t.content, n = t.type, r = t.scrolling, P.extend(C, { wrap: t.wrap, skin: t.skin, outer: t.outer, inner: t.inner, current: t, previous: e }), o = t.href, n) {
                        case "inline":
                        case "ajax":
                        case "html":
                            t.selector ? i = P("<div>").html(i).find(t.selector) : h(i) && (i.data("fancybox-placeholder") || i.data("fancybox-placeholder", P('<div class="fancybox-placeholder"></div>').insertAfter(i).hide()), i = i.show().detach(), t.wrap.bind("onReset", function() { P(this).find(i).length && i.hide().replaceAll(i.data("fancybox-placeholder")).data("fancybox-placeholder", !1) })); break;
                        case "image":
                            i = t.tpl.image.replace("{href}", o); break;
                        case "swf":
                            i = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + o + '"></param>', s = "", P.each(t.swf, function(t, e) { i += '<param name="' + t + '" value="' + e + '"></param>', s += " " + t + '="' + e + '"' }), i += '<embed src="' + o + '" type="application/x-shockwave-flash" width="100%" height="100%"' + s + "></embed></object>" }(!h(i) || !i.parent().is(t.inner)) && t.inner.append(i), C.trigger("beforeShow"), t.inner.css("overflow", "yes" === r ? "scroll" : "no" === r ? "hidden" : r), C._setDimension(), C.reposition(), C.isOpen = !1, C.coming = null, C.bindEvents(), C.isOpened ? e.prevMethod && C.transitions[e.prevMethod]() : P(".fancybox-wrap").not(t.wrap).stop(!0).trigger("onReset").remove(), C.transitions[C.isOpened ? t.nextMethod : t.openMethod](), C._preloadImages() } }, _setDimension: function() { var t = C.getViewport(),
                e = 0,
                i = !1,
                n = !1,
                i = C.wrap,
                r = C.skin,
                o = C.inner,
                s = C.current,
                n = s.width,
                a = s.height,
                l = s.minWidth,
                u = s.minHeight,
                c = s.maxWidth,
                h = s.maxHeight,
                d = s.scrolling,
                p = s.scrollOutside ? s.scrollbarWidth : 0,
                f = s.margin,
                m = k(f[1] + f[3]),
                g = k(f[0] + f[2]),
                v, y, _, x, w, b, S, T, I; if (i.add(r).add(o).width("auto").height("auto").removeClass("fancybox-tmp"), y = m + (f = k(r.outerWidth(!0) - r.width())), _ = g + (v = k(r.outerHeight(!0) - r.height())), x = O(n) ? (t.w - y) * k(n) / 100 : n, w = O(a) ? (t.h - _) * k(a) / 100 : a, "iframe" === s.type) { if (I = s.content, s.autoHeight && 1 === I.data("ready")) try { I[0].contentWindow.document.location && (o.width(x).height(9999), b = I.contents().find("body"), p && b.css("overflow-x", "hidden"), w = b.outerHeight(!0)) } catch (t) {} } else(s.autoWidth || s.autoHeight) && (o.addClass("fancybox-tmp"), s.autoWidth || o.width(x), s.autoHeight || o.height(w), s.autoWidth && (x = o.width()), s.autoHeight && (w = o.height()), o.removeClass("fancybox-tmp")); if (n = k(x), a = k(w), T = x / w, l = k(O(l) ? k(l, "w") - y : l), c = k(O(c) ? k(c, "w") - y : c), u = k(O(u) ? k(u, "h") - _ : u), b = c, S = h = k(O(h) ? k(h, "h") - _ : h), s.fitToView && (c = Math.min(t.w - y, c), h = Math.min(t.h - _, h)), y = t.w - m, g = t.h - g, s.aspectRatio ? (c < n && (a = k((n = c) / T)), h < a && (n = k((a = h) * T)), n < l && (a = k((n = l) / T)), a < u && (n = k((a = u) * T))) : (n = Math.max(l, Math.min(n, c)), s.autoHeight && "iframe" !== s.type && (o.width(n), a = o.height()), a = Math.max(u, Math.min(a, h))), s.fitToView)
                if (o.width(n).height(a), i.width(n + f), t = i.width(), m = i.height(), s.aspectRatio)
                    for (;
                        (y < t || g < m) && l < n && u < a && !(19 < e++);) a = Math.max(u, Math.min(h, a - 10)), (n = k(a * T)) < l && (a = k((n = l) / T)), c < n && (a = k((n = c) / T)), o.width(n).height(a), i.width(n + f), t = i.width(), m = i.height();
                else n = Math.max(l, Math.min(n, n - (t - y))), a = Math.max(u, Math.min(a, a - (m - g)));
            p && "auto" === d && a < w && n + f + p < y && (n += p), o.width(n).height(a), i.width(n + f), t = i.width(), m = i.height(), i = (y < t || g < m) && l < n && u < a, n = s.aspectRatio ? n < b && a < S && n < x && a < w : (n < b || a < S) && (n < x || a < w), P.extend(s, { dim: { width: E(t), height: E(m) }, origWidth: x, origHeight: w, canShrink: i, canExpand: n, wPadding: f, hPadding: v, wrapSpace: m - r.outerHeight(!0), skinSpace: r.height() - a }), !I && s.autoHeight && u < a && a < h && !n && o.height("auto") }, _getPosition: function(t) { var e = C.current,
                i = C.getViewport(),
                n = e.margin,
                r = C.wrap.width() + n[1] + n[3],
                o = C.wrap.height() + n[0] + n[2],
                n = { position: "absolute", top: n[0], left: n[3] }; return e.autoCenter && e.fixed && !t && o <= i.h && r <= i.w ? n.position = "fixed" : e.locked || (n.top += i.y, n.left += i.x), n.top = E(Math.max(n.top, n.top + (i.h - o) * e.topRatio)), n.left = E(Math.max(n.left, n.left + (i.w - r) * e.leftRatio)), n }, _afterZoomIn: function() { var e = C.current;
            e && (C.isOpen = C.isOpened = !0, C.wrap.css("overflow", "visible").addClass("fancybox-opened"), C.update(), (e.closeClick || e.nextClick && 1 < C.group.length) && C.inner.css("cursor", "pointer").bind("click.fb", function(t) {!P(t.target).is("a") && !P(t.target).parent().is("a") && (t.preventDefault(), C[e.closeClick ? "close" : "next"]()) }), e.closeBtn && P(e.tpl.closeBtn).appendTo(C.skin).bind("click.fb", function(t) { t.preventDefault(), C.close() }), e.arrows && 1 < C.group.length && ((e.loop || 0 < e.index) && P(e.tpl.prev).appendTo(C.outer).bind("click.fb", C.prev), (e.loop || e.index < C.group.length - 1) && P(e.tpl.next).appendTo(C.outer).bind("click.fb", C.next)), C.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? C.opts.autoPlay && !C.player.isActive && (C.opts.autoPlay = !1, C.play()) : C.play(!1)) }, _afterZoomOut: function(t) { t = t || C.current, P(".fancybox-wrap").trigger("onReset").remove(), P.extend(C, { group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null }), C.trigger("afterClose", t) } }), C.transitions = { getOrigPosition: function() { var t = C.current,
                e = t.element,
                i = t.orig,
                n = {},
                r = 50,
                o = 50,
                s = t.hPadding,
                a = t.wPadding,
                l = C.getViewport(); return !i && t.isDom && e.is(":visible") && ((i = e.find("img:first")).length || (i = e)), h(i) ? (n = i.offset(), i.is("img") && (r = i.outerWidth(), o = i.outerHeight())) : (n.top = l.y + (l.h - o) * t.topRatio, n.left = l.x + (l.w - r) * t.leftRatio), ("fixed" === C.wrap.css("position") || t.locked) && (n.top -= l.y, n.left -= l.x), n = { top: E(n.top - s * t.topRatio), left: E(n.left - a * t.leftRatio), width: E(r + a), height: E(o + s) } }, step: function(t, e) { var i, n, r = e.prop,
                o = (n = C.current).wrapSpace,
                s = n.skinSpace; "width" !== r && "height" !== r || (i = e.end === e.start ? 1 : (t - e.start) / (e.end - e.start), C.isClosing && (i = 1 - i), n = t - (n = "width" === r ? n.wPadding : n.hPadding), C.skin[r](k("width" === r ? n : n - o * i)), C.inner[r](k("width" === r ? n : n - o * i - s * i))) }, zoomIn: function() { var t = C.current,
                e = t.pos,
                i = t.openEffect,
                n = "elastic" === i,
                r = P.extend({ opacity: 1 }, e);
            delete r.position, n ? (e = this.getOrigPosition(), t.openOpacity && (e.opacity = .1)) : "fade" === i && (e.opacity = .1), C.wrap.css(e).animate(r, { duration: "none" === i ? 0 : t.openSpeed, easing: t.openEasing, step: n ? this.step : null, complete: C._afterZoomIn }) }, zoomOut: function() { var t = C.current,
                e = t.closeEffect,
                i = "elastic" === e,
                n = { opacity: .1 };
            i && (n = this.getOrigPosition(), t.closeOpacity && (n.opacity = .1)), C.wrap.animate(n, { duration: "none" === e ? 0 : t.closeSpeed, easing: t.closeEasing, step: i ? this.step : null, complete: C._afterZoomOut }) }, changeIn: function() { var t = C.current,
                e = t.nextEffect,
                i = t.pos,
                n = { opacity: 1 },
                r = C.direction,
                o;
            i.opacity = .1, "elastic" === e && (n[o = "down" === r || "up" === r ? "top" : "left"] = "down" === r || "right" === r ? (i[o] = E(k(i[o]) - 200), "+=200px") : (i[o] = E(k(i[o]) + 200), "-=200px")), "none" === e ? C._afterZoomIn() : C.wrap.css(i).animate(n, { duration: t.nextSpeed, easing: t.nextEasing, complete: C._afterZoomIn }) }, changeOut: function() { var t = C.previous,
                e = t.prevEffect,
                i = { opacity: .1 },
                n = C.direction; "elastic" === e && (i["down" === n || "up" === n ? "top" : "left"] = ("up" === n || "left" === n ? "-" : "+") + "=200px"), t.wrap.animate(i, { duration: "none" === e ? 0 : t.prevSpeed, easing: t.prevEasing, complete: function() { P(this).trigger("onReset").remove() } }) } }, C.helpers.overlay = { defaults: { closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !l, fixed: !0 }, overlay: null, fixed: !1, el: P("html"), create: function(t) { t = P.extend({}, this.defaults, t), this.overlay && this.close(), this.overlay = P('<div class="fancybox-overlay"></div>').appendTo(C.coming ? C.coming.parent : t.parent), this.fixed = !1, t.fixed && C.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0) }, open: function(t) { var e = this;
            t = P.extend({}, this.defaults, t), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(t), this.fixed || (o.bind("resize.overlay", P.proxy(this.update, this)), this.update()), t.closeClick && this.overlay.bind("click.overlay", function(t) { if (P(t.target).hasClass("fancybox-overlay")) return C.isActive ? C.close() : e.close(), !1 }), this.overlay.css(t.css).show() }, close: function() { var t, e;
            o.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (P(".fancybox-margin").removeClass("fancybox-margin"), t = o.scrollTop(), e = o.scrollLeft(), this.el.removeClass("fancybox-lock"), o.scrollTop(t).scrollLeft(e)), P(".fancybox-overlay").remove().hide(), P.extend(this, { overlay: null, fixed: !1 }) }, update: function() { var t = "100%",
                e;
            this.overlay.width(t).height("100%"), s ? (e = Math.max(i.documentElement.offsetWidth, i.body.offsetWidth), u.width() > e && (t = u.width())) : u.width() > o.width() && (t = u.width()), this.overlay.width(t).height(u.height()) }, onReady: function(t, e) { var i = this.overlay;
            P(".fancybox-overlay").stop(!0, !0), i || this.create(t), t.locked && this.fixed && e.fixed && (i || (this.margin = u.height() > o.height() && P("html").css("margin-right").replace("px", "")), e.locked = this.overlay.append(e.wrap), e.fixed = !1), !0 === t.showEarly && this.beforeShow.apply(this, arguments) }, beforeShow: function(t, e) { var i, n;
            e.locked && (!1 !== this.margin && (P("*").filter(function() { return "fixed" === P(this).css("position") && !P(this).hasClass("fancybox-overlay") && !P(this).hasClass("fancybox-wrap") }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), i = o.scrollTop(), n = o.scrollLeft(), this.el.addClass("fancybox-lock"), o.scrollTop(i).scrollLeft(n)), this.open(t) }, onUpdate: function() { this.fixed || this.update() }, afterClose: function(t) { this.overlay && !C.coming && this.overlay.fadeOut(t.speedOut, P.proxy(this.close, this)) } }, C.helpers.title = { defaults: { type: "float", position: "bottom" }, beforeShow: function(t) { var e = C.current,
                i = e.title,
                n = t.type; if (P.isFunction(i) && (i = i.call(e.element, e)), d(i) && "" !== P.trim(i)) { switch (e = P('<div class="fancybox-title fancybox-title-' + n + '-wrap">' + i + "</div>"), n) {
                    case "inside":
                        n = C.skin; break;
                    case "outside":
                        n = C.wrap; break;
                    case "over":
                        n = C.inner; break;
                    default:
                        n = C.skin, e.appendTo("body"), s && e.width(e.width()), e.wrapInner('<span class="child"></span>'), C.current.margin[2] += Math.abs(k(e.css("margin-bottom"))) }
                e["top" === t.position ? "prependTo" : "appendTo"](n) } } }, P.fn.fancybox = function(o) { var s, a = P(this),
            l = this.selector || "",
            t = function(t) { var e = P(this).blur(),
                    i = s,
                    n, r;!t.ctrlKey && !t.altKey && !t.shiftKey && !t.metaKey && !e.is(".fancybox-wrap") && (n = o.groupAttr || "data-fancybox-group", (r = e.attr(n)) || (n = "rel", r = e.get(0)[n]), r && "" !== r && "nofollow" !== r && (i = (e = (e = l.length ? P(l) : a).filter("[" + n + '="' + r + '"]')).index(this)), o.index = i, !1 !== C.open(e, o) && t.preventDefault()) }; return s = (o = o || {}).index || 0, l && !1 !== o.live ? u.undelegate(l, "click.fb-start").delegate(l + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", t) : a.unbind("click.fb-start").bind("click.fb-start", t), this.filter("[data-fancybox-start=1]").trigger("click"), this }, u.ready(function() { var t, e; if (P.scrollbarWidth === c && (P.scrollbarWidth = function() { var t = P('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                    e, e = (e = t.children()).innerWidth() - e.height(99).innerWidth(); return t.remove(), e }), P.support.fixedPosition === c) { t = P.support; var i = 20 === (e = P('<div style="position:fixed;top:20px;"></div>').appendTo("body"))[0].offsetTop || 15 === e[0].offsetTop;
            e.remove(), t.fixedPosition = i }
        P.extend(C.defaults, { scrollbarWidth: P.scrollbarWidth(), fixed: P.support.fixedPosition, parent: P("body") }), t = P(n).width(), r.addClass("fancybox-lock-test"), e = P(n).width(), r.removeClass("fancybox-lock-test"), P("<style type='text/css'>.fancybox-margin{margin-right:" + (e - t) + "px;}</style>").appendTo("head") }) }(window, document, jQuery),
function(f) {
    f.flexslider = function(g, t) {
        var v = f(g);
        v.vars = f.extend({}, f.flexslider.defaults, t);
        var c = v.vars.namespace,
            y = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            h = ("ontouchstart" in window || y || window.DocumentTouch && document instanceof DocumentTouch) && v.vars.touch,
            s = "click touchend MSPointerUp keyup",
            a = "",
            e, _ = "vertical" === v.vars.direction,
            x = v.vars.reverse,
            w = 0 < v.vars.itemWidth,
            b = "fade" === v.vars.animation,
            d = "" !== v.vars.asNavFor,
            p = {},
            i = !0;
        f.data(g, "flexslider", v), p = {
            init: function() { v.animating = !1, v.currentSlide = parseInt(v.vars.startAt ? v.vars.startAt : 0, 10), isNaN(v.currentSlide) && (v.currentSlide = 0), v.animatingTo = v.currentSlide, v.atEnd = 0 === v.currentSlide || v.currentSlide === v.last, v.containerSelector = v.vars.selector.substr(0, v.vars.selector.search(" ")), v.slides = f(v.vars.selector, v), v.container = f(v.containerSelector, v), v.count = v.slides.length, v.syncExists = 0 < f(v.vars.sync).length, "slide" === v.vars.animation && (v.vars.animation = "swing"), v.prop = _ ? "top" : "marginLeft", v.args = {}, v.manualPause = !1, v.stopped = !1, v.started = !1, v.startTimeout = null, v.transitions = !v.vars.video && !b && v.vars.useCSS && function() { var t = document.createElement("div"),
                        e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]; for (var i in e)
                        if (void 0 !== t.style[e[i]]) return v.pfx = e[i].replace("Perspective", "").toLowerCase(), v.prop = "-" + v.pfx + "-transform", !0;
                    return !1 }(), (v.ensureAnimationEnd = "") !== v.vars.controlsContainer && (v.controlsContainer = 0 < f(v.vars.controlsContainer).length && f(v.vars.controlsContainer)), "" !== v.vars.manualControls && (v.manualControls = 0 < f(v.vars.manualControls).length && f(v.vars.manualControls)), "" !== v.vars.customDirectionNav && (v.customDirectionNav = 2 === f(v.vars.customDirectionNav).length && f(v.vars.customDirectionNav)), v.vars.randomize && (v.slides.sort(function() { return Math.round(Math.random()) - .5 }), v.container.empty().append(v.slides)), v.doMath(), v.setup("init"), v.vars.controlNav && p.controlNav.setup(), v.vars.directionNav && p.directionNav.setup(), v.vars.keyboard && (1 === f(v.containerSelector).length || v.vars.multipleKeyboard) && f(document).bind("keyup", function(t) { var e = t.keyCode; if (!v.animating && (39 === e || 37 === e)) { var i = 39 === e ? v.getTarget("next") : 37 === e && v.getTarget("prev");
                        v.flexAnimate(i, v.vars.pauseOnAction) } }), v.vars.mousewheel && v.bind("mousewheel", function(t, e, i, n) { t.preventDefault(); var r = v.getTarget(e < 0 ? "next" : "prev");
                    v.flexAnimate(r, v.vars.pauseOnAction) }), v.vars.pausePlay && p.pausePlay.setup(), v.vars.slideshow && v.vars.pauseInvisible && p.pauseInvisible.init(), v.vars.slideshow && (v.vars.pauseOnHover && v.hover(function() { v.manualPlay || v.manualPause || v.pause() }, function() { v.manualPause || v.manualPlay || v.stopped || v.play() }), v.vars.pauseInvisible && p.pauseInvisible.isHidden() || (0 < v.vars.initDelay ? v.startTimeout = setTimeout(v.play, v.vars.initDelay) : v.play())), d && p.asNav.setup(), h && v.vars.touch && p.touch(), (!b || b && v.vars.smoothHeight) && f(window).bind("resize orientationchange focus", p.resize), v.find("img").attr("draggable", "false"), setTimeout(function() { v.vars.start(v) }, 200) },
            asNav: { setup: function() { v.asNav = !0, v.animatingTo = Math.floor(v.currentSlide / v.move), v.currentItem = v.currentSlide, v.slides.removeClass(c + "active-slide").eq(v.currentItem).addClass(c + "active-slide"), y ? (g._slider = v).slides.each(function() { var t = this;
                        t._gesture = new MSGesture, (t._gesture.target = t).addEventListener("MSPointerDown", function(t) { t.preventDefault(), t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId) }, !1), t.addEventListener("MSGestureTap", function(t) { t.preventDefault(); var e = f(this),
                                i = e.index();
                            f(v.vars.asNavFor).data("flexslider").animating || e.hasClass("active") || (v.direction = v.currentItem < i ? "next" : "prev", v.flexAnimate(i, v.vars.pauseOnAction, !1, !0, !0)) }) }) : v.slides.on(s, function(t) { t.preventDefault(); var e = f(this),
                            i = e.index(),
                            n;
                        e.offset().left - f(v).scrollLeft() <= 0 && e.hasClass(c + "active-slide") ? v.flexAnimate(v.getTarget("prev"), !0) : f(v.vars.asNavFor).data("flexslider").animating || e.hasClass(c + "active-slide") || (v.direction = v.currentItem < i ? "next" : "prev", v.flexAnimate(i, v.vars.pauseOnAction, !1, !0, !0)) }) } },
            controlNav: { setup: function() { v.manualControls ? p.controlNav.setupManual() : p.controlNav.setupPaging() }, setupPaging: function() { var t = "thumbnails" === v.vars.controlNav ? "control-thumbs" : "control-paging",
                        e = 1,
                        i, n; if (v.controlNavScaffold = f('<ol class="' + c + "control-nav " + c + t + '"></ol>'), 1 < v.pagingCount)
                        for (var r = 0; r < v.pagingCount; r++) { if (n = v.slides.eq(r), i = "thumbnails" === v.vars.controlNav ? '<img src="' + n.attr("data-thumb") + '"/>' : "<a>" + e + "</a>", "thumbnails" === v.vars.controlNav && !0 === v.vars.thumbCaptions) { var o = n.attr("data-thumbcaption"); "" !== o && void 0 !== o && (i += '<span class="' + c + 'caption">' + o + "</span>") }
                            v.controlNavScaffold.append("<li>" + i + "</li>"), e++ }
                    v.controlsContainer ? f(v.controlsContainer).append(v.controlNavScaffold) : v.append(v.controlNavScaffold), p.controlNav.set(), p.controlNav.active(), v.controlNavScaffold.delegate("a, img", s, function(t) { if (t.preventDefault(), "" === a || a === t.type) { var e = f(this),
                                i = v.controlNav.index(e);
                            e.hasClass(c + "active") || (v.direction = i > v.currentSlide ? "next" : "prev", v.flexAnimate(i, v.vars.pauseOnAction)) } "" === a && (a = t.type), p.setToClearWatchedEvent() }) }, setupManual: function() { v.controlNav = v.manualControls, p.controlNav.active(), v.controlNav.bind(s, function(t) { if (t.preventDefault(), "" === a || a === t.type) { var e = f(this),
                                i = v.controlNav.index(e);
                            e.hasClass(c + "active") || (v.direction = i > v.currentSlide ? "next" : "prev", v.flexAnimate(i, v.vars.pauseOnAction)) } "" === a && (a = t.type), p.setToClearWatchedEvent() }) }, set: function() { var t = "thumbnails" === v.vars.controlNav ? "img" : "a";
                    v.controlNav = f("." + c + "control-nav li " + t, v.controlsContainer ? v.controlsContainer : v) }, active: function() { v.controlNav.removeClass(c + "active").eq(v.animatingTo).addClass(c + "active") }, update: function(t, e) { 1 < v.pagingCount && "add" === t ? v.controlNavScaffold.append(f("<li><a>" + v.count + "</a></li>")) : 1 === v.pagingCount ? v.controlNavScaffold.find("li").remove() : v.controlNav.eq(e).closest("li").remove(), p.controlNav.set(), 1 < v.pagingCount && v.pagingCount !== v.controlNav.length ? v.update(e, t) : p.controlNav.active() } },
            directionNav: { setup: function() { var t = f('<ul class="' + c + 'direction-nav"><li class="' + c + 'nav-prev"><a class="' + c + 'prev" href="#">' + v.vars.prevText + '</a></li><li class="' + c + 'nav-next"><a class="' + c + 'next" href="#">' + v.vars.nextText + "</a></li></ul>");
                    v.customDirectionNav ? v.directionNav = v.customDirectionNav : v.controlsContainer ? (f(v.controlsContainer).append(t), v.directionNav = f("." + c + "direction-nav li a", v.controlsContainer)) : (v.append(t), v.directionNav = f("." + c + "direction-nav li a", v)), p.directionNav.update(), v.directionNav.bind(s, function(t) { var e;
                        t.preventDefault(), ("" === a || a === t.type) && (e = v.getTarget(f(this).hasClass(c + "next") ? "next" : "prev"), v.flexAnimate(e, v.vars.pauseOnAction)), "" === a && (a = t.type), p.setToClearWatchedEvent() }) }, update: function() { var t = c + "disabled";
                    1 === v.pagingCount ? v.directionNav.addClass(t).attr("tabindex", "-1") : v.vars.animationLoop ? v.directionNav.removeClass(t).removeAttr("tabindex") : 0 === v.animatingTo ? v.directionNav.removeClass(t).filter("." + c + "prev").addClass(t).attr("tabindex", "-1") : v.animatingTo === v.last ? v.directionNav.removeClass(t).filter("." + c + "next").addClass(t).attr("tabindex", "-1") : v.directionNav.removeClass(t).removeAttr("tabindex") } },
            pausePlay: { setup: function() { var t = f('<div class="' + c + 'pauseplay"><a></a></div>');
                    v.controlsContainer ? (v.controlsContainer.append(t), v.pausePlay = f("." + c + "pauseplay a", v.controlsContainer)) : (v.append(t), v.pausePlay = f("." + c + "pauseplay a", v)), p.pausePlay.update(v.vars.slideshow ? c + "pause" : c + "play"), v.pausePlay.bind(s, function(t) { t.preventDefault(), ("" === a || a === t.type) && (f(this).hasClass(c + "pause") ? (v.manualPause = !0, v.manualPlay = !1, v.pause()) : (v.manualPause = !1, v.manualPlay = !0, v.play())), "" === a && (a = t.type), p.setToClearWatchedEvent() }) }, update: function(t) { "play" === t ? v.pausePlay.removeClass(c + "pause").addClass(c + "play").html(v.vars.playText) : v.pausePlay.removeClass(c + "play").addClass(c + "pause").html(v.vars.pauseText) } },
            touch: function() {
                function t(t) { t.stopPropagation(), v.animating ? t.preventDefault() : (v.pause(), g._gesture.addPointer(t.pointerId), m = 0, a = _ ? v.h : v.w, u = Number(new Date), s = w && x && v.animatingTo === v.last ? 0 : w && x ? v.limit - (v.itemW + v.vars.itemMargin) * v.move * v.animatingTo : w && v.currentSlide === v.last ? v.limit : w ? (v.itemW + v.vars.itemMargin) * v.move * v.currentSlide : x ? (v.last - v.currentSlide + v.cloneOffset) * a : (v.currentSlide + v.cloneOffset) * a) }

                function e(t) { t.stopPropagation(); var e = t.target._slider; if (e) { var i = -t.translationX,
                            n = -t.translationY; return l = m += _ ? n : i, d = _ ? Math.abs(m) < Math.abs(-i) : Math.abs(m) < Math.abs(-n), t.detail === t.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() { g._gesture.stop() }) : void((!d || 500 < Number(new Date) - u) && (t.preventDefault(), !b && e.transitions && (e.vars.animationLoop || (l = m / (0 === e.currentSlide && m < 0 || e.currentSlide === e.last && 0 < m ? Math.abs(m) / a + 2 : 1)), e.setProps(s + l, "setTouch")))) } }

                function i(t) {
                    t.stopPropagation();
                    var e = t.target._slider;
                    if (e) {
                        if (e.animatingTo === e.currentSlide && !d && null !== l) {
                            var i = x ? -l : l,
                                n = e.getTarget(0 < i ? "next" : "prev");
                            e.canAdvance(n) && (
                                Number(new Date) - u < 550 && 50 < Math.abs(i) || Math.abs(i) > a / 2) ? e.flexAnimate(n, e.vars.pauseOnAction) : b || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                        }
                        s = l = o = r = null, m = 0
                    }
                }
                var r, o, s, a, l, u, n, c, h, d = !1,
                    p = 0,
                    f = 0,
                    m = 0;
                y ? (g.style.msTouchAction = "none", g._gesture = new MSGesture, (g._gesture.target = g).addEventListener("MSPointerDown", t, !1), g._slider = v, g.addEventListener("MSGestureChange", e, !1), g.addEventListener("MSGestureEnd", i, !1)) : (n = function(t) { v.animating ? t.preventDefault() : (window.navigator.msPointerEnabled || 1 === t.touches.length) && (v.pause(), a = _ ? v.h : v.w, u = Number(new Date), p = t.touches[0].pageX, f = t.touches[0].pageY, s = w && x && v.animatingTo === v.last ? 0 : w && x ? v.limit - (v.itemW + v.vars.itemMargin) * v.move * v.animatingTo : w && v.currentSlide === v.last ? v.limit : w ? (v.itemW + v.vars.itemMargin) * v.move * v.currentSlide : x ? (v.last - v.currentSlide + v.cloneOffset) * a : (v.currentSlide + v.cloneOffset) * a, r = _ ? f : p, o = _ ? p : f, g.addEventListener("touchmove", c, !1), g.addEventListener("touchend", h, !1)) }, c = function(t) { p = t.touches[0].pageX, f = t.touches[0].pageY, l = _ ? r - f : r - p; var e = 500;
                    (!(d = _ ? Math.abs(l) < Math.abs(p - o) : Math.abs(l) < Math.abs(f - o)) || Number(new Date) - u > e) && (t.preventDefault(), !b && v.transitions && (v.vars.animationLoop || (l /= 0 === v.currentSlide && l < 0 || v.currentSlide === v.last && 0 < l ? Math.abs(l) / a + 2 : 1), v.setProps(s + l, "setTouch"))) }, h = function(t) { if (g.removeEventListener("touchmove", c, !1), v.animatingTo === v.currentSlide && !d && null !== l) { var e = x ? -l : l,
                            i = v.getTarget(0 < e ? "next" : "prev");
                        v.canAdvance(i) && (Number(new Date) - u < 550 && 50 < Math.abs(e) || Math.abs(e) > a / 2) ? v.flexAnimate(i, v.vars.pauseOnAction) : b || v.flexAnimate(v.currentSlide, v.vars.pauseOnAction, !0) }
                    g.removeEventListener("touchend", h, !1), s = l = o = r = null }, g.addEventListener("touchstart", n, !1))
            },
            resize: function() {!v.animating && v.is(":visible") && (w || v.doMath(), b ? p.smoothHeight() : w ? (v.slides.width(v.computedW), v.update(v.pagingCount), v.setProps()) : _ ? (v.viewport.height(v.h), v.setProps(v.h, "setTotal")) : (v.vars.smoothHeight && p.smoothHeight(), v.newSlides.width(v.computedW), v.setProps(v.computedW, "setTotal"))) },
            smoothHeight: function(t) { if (!_ || b) { var e = b ? v : v.viewport;
                    t ? e.animate({ height: v.slides.eq(v.animatingTo).height() }, t) : e.height(v.slides.eq(v.animatingTo).height()) } },
            sync: function(t) { var e = f(v.vars.sync).data("flexslider"),
                    i = v.animatingTo; switch (t) {
                    case "animate":
                        e.flexAnimate(i, v.vars.pauseOnAction, !1, !0); break;
                    case "play":
                        e.playing || e.asNav || e.play(); break;
                    case "pause":
                        e.pause() } },
            uniqueID: function(t) { return t.filter("[id]").add(t.find("[id]")).each(function() { var t = f(this);
                    t.attr("id", t.attr("id") + "_clone") }), t },
            pauseInvisible: { visProp: null, init: function() { var t = p.pauseInvisible.getHiddenProp(); if (t) { var e = t.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(e, function() { p.pauseInvisible.isHidden() ? v.startTimeout ? clearTimeout(v.startTimeout) : v.pause() : v.started ? v.play() : 0 < v.vars.initDelay ? setTimeout(v.play, v.vars.initDelay) : v.play() }) } }, isHidden: function() { var t = p.pauseInvisible.getHiddenProp(); return !!t && document[t] }, getHiddenProp: function() { var t = ["webkit", "moz", "ms", "o"]; if ("hidden" in document) return "hidden"; for (var e = 0; e < t.length; e++)
                        if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                    return null } },
            setToClearWatchedEvent: function() { clearTimeout(e), e = setTimeout(function() { a = "" }, 3e3) }
        }, v.flexAnimate = function(t, e, i, n, r) { if (v.vars.animationLoop || t === v.currentSlide || (v.direction = t > v.currentSlide ? "next" : "prev"), d && 1 === v.pagingCount && (v.direction = v.currentItem < t ? "next" : "prev"), !v.animating && (v.canAdvance(t, r) || i) && v.is(":visible")) { if (d && n) { var o = f(v.vars.asNavFor).data("flexslider"); if (v.atEnd = 0 === t || t === v.count - 1, o.flexAnimate(t, !0, !1, !0, r), v.direction = v.currentItem < t ? "next" : "prev", o.direction = v.direction, Math.ceil((t + 1) / v.visible) - 1 === v.currentSlide || 0 === t) return v.currentItem = t, v.slides.removeClass(c + "active-slide").eq(t).addClass(c + "active-slide"), !1;
                    v.currentItem = t, v.slides.removeClass(c + "active-slide").eq(t).addClass(c + "active-slide"), t = Math.floor(t / v.visible) } if (v.animating = !0, v.animatingTo = t, e && v.pause(), v.vars.before(v), v.syncExists && !r && p.sync("animate"), v.vars.controlNav && p.controlNav.active(), w || v.slides.removeClass(c + "active-slide").eq(t).addClass(c + "active-slide"), v.atEnd = 0 === t || t === v.last, v.vars.directionNav && p.directionNav.update(), t === v.last && (v.vars.end(v), v.vars.animationLoop || v.pause()), b) h ? (v.slides.eq(v.currentSlide).css({ opacity: 0, zIndex: 1 }), v.slides.eq(t).css({ opacity: 1, zIndex: 2 }), v.wrapup(s)) : (v.slides.eq(v.currentSlide).css({ zIndex: 1 }).animate({ opacity: 0 }, v.vars.animationSpeed, v.vars.easing), v.slides.eq(t).css({ zIndex: 2 }).animate({ opacity: 1 }, v.vars.animationSpeed, v.vars.easing, v.wrapup));
                else { var s = _ ? v.slides.filter(":first").height() : v.computedW,
                        a, l, u;
                    l = w ? (a = v.vars.itemMargin, (u = (v.itemW + a) * v.move * v.animatingTo) > v.limit && 1 !== v.visible ? v.limit : u) : 0 === v.currentSlide && t === v.count - 1 && v.vars.animationLoop && "next" !== v.direction ? x ? (v.count + v.cloneOffset) * s : 0 : v.currentSlide === v.last && 0 === t && v.vars.animationLoop && "prev" !== v.direction ? x ? 0 : (v.count + 1) * s : x ? (v.count - 1 - t + v.cloneOffset) * s : (t + v.cloneOffset) * s, v.setProps(l, "", v.vars.animationSpeed), v.transitions ? (v.vars.animationLoop && v.atEnd || (v.animating = !1, v.currentSlide = v.animatingTo), v.container.unbind("webkitTransitionEnd transitionend"), v.container.bind("webkitTransitionEnd transitionend", function() { clearTimeout(v.ensureAnimationEnd), v.wrapup(s) }), clearTimeout(v.ensureAnimationEnd), v.ensureAnimationEnd = setTimeout(function() { v.wrapup(s) }, v.vars.animationSpeed + 100)) : v.container.animate(v.args, v.vars.animationSpeed, v.vars.easing, function() { v.wrapup(s) }) }
                v.vars.smoothHeight && p.smoothHeight(v.vars.animationSpeed) } }, v.wrapup = function(t) { b || w || (0 === v.currentSlide && v.animatingTo === v.last && v.vars.animationLoop ? v.setProps(t, "jumpEnd") : v.currentSlide === v.last && 0 === v.animatingTo && v.vars.animationLoop && v.setProps(t, "jumpStart")), v.animating = !1, v.currentSlide = v.animatingTo, v.vars.after(v) }, v.animateSlides = function() {!v.animating && v.flexAnimate(v.getTarget("next")) }, v.pause = function() { clearInterval(v.animatedSlides), v.animatedSlides = null, v.playing = !1, v.vars.pausePlay && p.pausePlay.update("play"), v.syncExists && p.sync("pause") }, v.play = function() { v.playing && clearInterval(v.animatedSlides), v.animatedSlides = v.animatedSlides || setInterval(v.animateSlides, v.vars.slideshowSpeed), v.started = v.playing = !0, v.vars.pausePlay && p.pausePlay.update("pause"), v.syncExists && p.sync("play") }, v.stop = function() { v.pause(), v.stopped = !0 }, v.canAdvance = function(t, e) { var i = d ? v.pagingCount - 1 : v.last; return !!e || (!(!d || v.currentItem !== v.count - 1 || 0 !== t || "prev" !== v.direction) || (!d || 0 !== v.currentItem || t !== v.pagingCount - 1 || "next" === v.direction) && (!(t === v.currentSlide && !d) && (!!v.vars.animationLoop || (!v.atEnd || 0 !== v.currentSlide || t !== i || "next" === v.direction) && (!v.atEnd || v.currentSlide !== i || 0 !== t || "next" !== v.direction)))) }, v.getTarget = function(t) { return "next" === (v.direction = t) ? v.currentSlide === v.last ? 0 : v.currentSlide + 1 : 0 === v.currentSlide ? v.last : v.currentSlide - 1 }, v.setProps = function(t, e, i) { var n = (r = t || (v.itemW + v.vars.itemMargin) * v.move * v.animatingTo, -1 * function() { if (w) return "setTouch" === e ? t : x && v.animatingTo === v.last ? 0 : x ? v.limit - (v.itemW + v.vars.itemMargin) * v.move * v.animatingTo : v.animatingTo === v.last ? v.limit : r; switch (e) {
                        case "setTotal":
                            return x ? (v.count - 1 - v.currentSlide + v.cloneOffset) * t : (v.currentSlide + v.cloneOffset) * t;
                        case "setTouch":
                            return t;
                        case "jumpEnd":
                            return x ? t : v.count * t;
                        case "jumpStart":
                            return x ? v.count * t : t;
                        default:
                            return t } }() + "px"),
                r, o;
            v.transitions && (n = _ ? "translate3d(0," + n + ",0)" : "translate3d(" + n + ",0,0)", i = void 0 !== i ? i / 1e3 + "s" : "0s", v.container.css("-" + v.pfx + "-transition-duration", i), v.container.css("transition-duration", i)), v.args[v.prop] = n, (v.transitions || void 0 === i) && v.container.css(v.args), v.container.css("transform", n) }, v.setup = function(t) { var e, i;
            b ? (v.slides.css({ width: "100%", float: "left", marginRight: "-100%", position: "relative" }), "init" === t && (h ? v.slides.css({ opacity: 0, display: "block", webkitTransition: "opacity " + v.vars.animationSpeed / 1e3 + "s ease", zIndex: 1 }).eq(v.currentSlide).css({ opacity: 1, zIndex: 2 }) : 0 == v.vars.fadeFirstSlide ? v.slides.css({ opacity: 0, display: "block", zIndex: 1 }).eq(v.currentSlide).css({ zIndex: 2 }).css({ opacity: 1 }) : v.slides.css({ opacity: 0, display: "block", zIndex: 1 }).eq(v.currentSlide).css({ zIndex: 2 }).animate({ opacity: 1 }, v.vars.animationSpeed, v.vars.easing)), v.vars.smoothHeight && p.smoothHeight()) : ("init" === t && (v.viewport = f('<div class="' + c + 'viewport"></div>').css({ overflow: "hidden", position: "relative" }).appendTo(v).append(v.container), v.cloneCount = 0, v.cloneOffset = 0, x && (i = f.makeArray(v.slides).reverse(), v.slides = f(i), v.container.empty().append(v.slides))), v.vars.animationLoop && !w && (v.cloneCount = 2, v.cloneOffset = 1, "init" !== t && v.container.find(".clone").remove(), v.container.append(p.uniqueID(v.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(p.uniqueID(v.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), v.newSlides = f(v.vars.selector, v), e = x ? v.count - 1 - v.currentSlide + v.cloneOffset : v.currentSlide + v.cloneOffset, _ && !w ? (v.container.height(200 * (v.count + v.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() { v.newSlides.css({ display: "block" }), v.doMath(), v.viewport.height(v.h), v.setProps(e * v.h, "init") }, "init" === t ? 100 : 0)) : (v.container.width(200 * (v.count + v.cloneCount) + "%"), v.setProps(e * v.computedW, "init"), setTimeout(function() { v.doMath(), v.newSlides.css({ width: v.computedW, float: "left", display: "block" }), v.vars.smoothHeight && p.smoothHeight() }, "init" === t ? 100 : 0)));
            w || v.slides.removeClass(c + "active-slide").eq(v.currentSlide).addClass(c + "active-slide"), v.vars.init(v) }, v.doMath = function() { var t = v.slides.first(),
                e = v.vars.itemMargin,
                i = v.vars.minItems,
                n = v.vars.maxItems;
            v.w = void 0 === v.viewport ? v.width() : v.viewport.width(), v.h = t.height(), v.boxPadding = t.outerWidth() - t.width(), w ? (v.itemT = v.vars.itemWidth + e, v.minW = i ? i * v.itemT : v.w, v.maxW = n ? n * v.itemT - e : v.w, v.itemW = v.minW > v.w ? (v.w - e * (i - 1)) / i : v.maxW < v.w ? (v.w - e * (n - 1)) / n : v.vars.itemWidth > v.w ? v.w : v.vars.itemWidth, v.visible = Math.floor(v.w / v.itemW), v.move = 0 < v.vars.move && v.vars.move < v.visible ? v.vars.move : v.visible, v.pagingCount = Math.ceil((v.count - v.visible) / v.move + 1), v.last = v.pagingCount - 1, v.limit = 1 === v.pagingCount ? 0 : v.vars.itemWidth > v.w ? v.itemW * (v.count - 1) + e * (v.count - 1) : (v.itemW + e) * v.count - v.w - e) : (v.itemW = v.w, v.pagingCount = v.count, v.last = v.count - 1), v.computedW = v.itemW - v.boxPadding }, v.update = function(t, e) { v.doMath(), w || (t < v.currentSlide ? v.currentSlide += 1 : t <= v.currentSlide && 0 !== t && (v.currentSlide -= 1), v.animatingTo = v.currentSlide), v.vars.controlNav && !v.manualControls && ("add" === e && !w || v.pagingCount > v.controlNav.length ? p.controlNav.update("add") : ("remove" === e && !w || v.pagingCount < v.controlNav.length) && (w && v.currentSlide > v.last && (v.currentSlide -= 1, v.animatingTo -= 1), p.controlNav.update("remove", v.last))), v.vars.directionNav && p.directionNav.update() }, v.addSlide = function(t, e) { var i = f(t);
            v.count += 1, v.last = v.count - 1, _ && x ? void 0 !== e ? v.slides.eq(v.count - e).after(i) : v.container.prepend(i) : void 0 !== e ? v.slides.eq(e).before(i) : v.container.append(i), v.update(e, "add"), v.slides = f(v.vars.selector + ":not(.clone)", v), v.setup(), v.vars.added(v) }, v.removeSlide = function(t) { var e = isNaN(t) ? v.slides.index(f(t)) : t;
            v.count -= 1, v.last = v.count - 1, isNaN(t) ? f(t, v.slides).remove() : _ && x ? v.slides.eq(v.last).remove() : v.slides.eq(t).remove(), v.doMath(), v.update(e, "remove"), v.slides = f(v.vars.selector + ":not(.clone)", v), v.setup(), v.vars.removed(v) }, p.init()
    }, f(window).blur(function(t) { focused = !1 }).focus(function(t) { focused = !0 }), f.flexslider.defaults = { namespace: "flex-", selector: ".slides > li", animation: "fade", easing: "swing", direction: "horizontal", reverse: !1, animationLoop: !0, smoothHeight: !1, startAt: 0, slideshow: !0, slideshowSpeed: 7e3, animationSpeed: 600, initDelay: 0, randomize: !1, fadeFirstSlide: !0, thumbCaptions: !1, pauseOnAction: !0, pauseOnHover: !1, pauseInvisible: !0, useCSS: !0, touch: !0, video: !1, controlNav: !0, directionNav: !0, prevText: "Previous", nextText: "Next", keyboard: !0, multipleKeyboard: !1, mousewheel: !1, pausePlay: !1, pauseText: "Pause", playText: "Play", controlsContainer: "", manualControls: "", customDirectionNav: "", sync: "", asNavFor: "", itemWidth: 0, itemMargin: 0, minItems: 1, maxItems: 0, move: 0, allowOneSlide: !0, start: function() {}, before: function() {}, after: function() {}, end: function() {}, added: function() {}, removed: function() {}, init: function() {} }, f.fn.flexslider = function(n) { if (void 0 === n && (n = {}), "object" == typeof n) return this.each(function() { var t = f(this),
                e = n.selector ? n.selector : ".slides > li",
                i = t.find(e);
            1 === i.length && !0 === n.allowOneSlide || 0 === i.length ? (i.fadeIn(400), n.start && n.start(t)) : void 0 === t.data("flexslider") && new f.flexslider(this, n) }); var t = f(this).data("flexslider"); switch (n) {
            case "play":
                t.play(); break;
            case "pause":
                t.pause(); break;
            case "stop":
                t.stop(); break;
            case "next":
                t.flexAnimate(t.getTarget("next"), !0); break;
            case "prev":
            case "previous":
                t.flexAnimate(t.getTarget("prev"), !0); break;
            default:
                "number" == typeof n && t.flexAnimate(n, !0) } }
}(jQuery),
function(t, r) { "use strict"; var e = t.History = t.History || {},
        n = t.jQuery; if (void 0 !== e.Adapter) throw new Error("History.js Adapter has already been loaded...");
    e.Adapter = { bind: function(t, e, i) { n(t).bind(e, i) }, trigger: function(t, e, i) { n(t).trigger(e, i) }, extractEventData: function(t, e, i) { var n; return e && e.originalEvent && e.originalEvent[t] || i && i[t] || r }, onDomLoad: function(t) { n(t) } }, void 0 !== e.init && e.init() }(window),
function(s, i) { "use strict"; var l = s.console || i,
        u = s.document,
        n = s.navigator,
        r = !1,
        o = s.setTimeout,
        a = s.clearTimeout,
        c = s.setInterval,
        h = s.clearInterval,
        d = s.JSON,
        p = s.alert,
        f = s.History = s.History || {},
        m = s.history; try {
        (r = s.sessionStorage).setItem("TEST", "1"), r.removeItem("TEST") } catch (t) { r = !1 } if (d.stringify = d.stringify || d.encode, d.parse = d.parse || d.decode, void 0 !== f.init) throw new Error("History.js Core has already been loaded...");
    f.init = function(t) { return void 0 !== f.Adapter && (void 0 !== f.initCore && f.initCore(), void 0 !== f.initHtml4 && f.initHtml4(), !0) }, f.initCore = function(t) { if (void 0 !== f.initCore.initialized) return !1; if (f.initCore.initialized = !0, f.options = f.options || {}, f.options.hashChangeInterval = f.options.hashChangeInterval || 100, f.options.safariPollInterval = f.options.safariPollInterval || 500, f.options.doubleCheckInterval = f.options.doubleCheckInterval || 500, f.options.disableSuid = f.options.disableSuid || !1, f.options.storeInterval = f.options.storeInterval || 1e3, f.options.busyDelay = f.options.busyDelay || 250, f.options.debug = f.options.debug || !1, f.options.initialTitle = f.options.initialTitle || u.title, f.options.html4Mode = f.options.html4Mode || !1, f.options.delayInit = f.options.delayInit || !1, f.intervalList = [], f.clearAllIntervals = function() { var t, e = f.intervalList; if (null != e) { for (t = 0; t < e.length; t++) h(e[t]);
                    f.intervalList = null } }, f.debug = function() { f.options.debug && f.log.apply(f, arguments) }, f.log = function(t) { var e = void 0 !== l && void 0 !== l.log && void 0 !== l.log.apply,
                    i = u.getElementById("log"),
                    n, r, o, s, a; for (e ? (n = (s = Array.prototype.slice.call(arguments)).shift(), void 0 !== l.debug ? l.debug.apply(l, [n, s]) : l.log.apply(l, [n, s])) : n = "\n" + t + "\n", r = 1, o = arguments.length; r < o; ++r) { if ("object" == typeof(a = arguments[r]) && void 0 !== d) try { a = d.stringify(a) } catch (t) {}
                    n += "\n" + a + "\n" } return i ? (i.value += n + "\n-----\n", i.scrollTop = i.scrollHeight - i.clientHeight) : e || p(n), !0 }, f.getInternetExplorerMajorVersion = function() { var t; return f.getInternetExplorerMajorVersion.cached = void 0 !== f.getInternetExplorerMajorVersion.cached ? f.getInternetExplorerMajorVersion.cached : function() { for (var t = 3, e = u.createElement("div"), i = e.getElementsByTagName("i");
                        (e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e") && i[0];); return 4 < t && t }() }, f.isInternetExplorer = function() { var t; return f.isInternetExplorer.cached = void 0 !== f.isInternetExplorer.cached ? f.isInternetExplorer.cached : Boolean(f.getInternetExplorerMajorVersion()) }, f.options.html4Mode ? f.emulated = { pushState: !0, hashChange: !0 } : f.emulated = { pushState: !Boolean(s.history && s.history.pushState && s.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(n.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(n.userAgent)), hashChange: Boolean(!("onhashchange" in s || "onhashchange" in u) || f.isInternetExplorer() && f.getInternetExplorerMajorVersion() < 8) }, f.enabled = !f.emulated.pushState, f.bugs = { setHash: Boolean(!f.emulated.pushState && "Apple Computer, Inc." === n.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(n.userAgent)), safariPoll: Boolean(!f.emulated.pushState && "Apple Computer, Inc." === n.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(n.userAgent)), ieDoubleCheck: Boolean(f.isInternetExplorer() && f.getInternetExplorerMajorVersion() < 8), hashEscape: Boolean(f.isInternetExplorer() && f.getInternetExplorerMajorVersion() < 7) }, f.isEmptyObject = function(t) { for (var e in t)
                    if (t.hasOwnProperty(e)) return !1;
                return !0 }, f.cloneObject = function(t) { var e, i; return i = t ? (e = d.stringify(t), d.parse(e)) : {} }, f.getRootUrl = function() { var t = u.location.protocol + "//" + (u.location.hostname || u.location.host); return u.location.port && (t += ":" + u.location.port), t += "/" }, f.getBaseHref = function() { var t = u.getElementsByTagName("base"),
                    e = null,
                    i = ""; return 1 === t.length && (i = (e = t[0]).href.replace(/[^\/]+$/, "")), (i = i.replace(/\/+$/, "")) && (i += "/"), i }, f.getBaseUrl = function() { var t; return f.getBaseHref() || f.getBasePageUrl() || f.getRootUrl() }, f.getPageUrl = function() { var t, e, i; return i = ((f.getState(!1, !1) || {}).url || f.getLocationHref()).replace(/\/+$/, "").replace(/[^\/]+$/, function(t, e, i) { return /\./.test(t) ? t : t + "/" }) }, f.getBasePageUrl = function() { var t; return f.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(t, e, i) { return /[^\/]$/.test(t) ? "" : t }).replace(/\/+$/, "") + "/" }, f.getFullUrl = function(t, e) { var i = t,
                    n = t.substring(0, 1); return e = void 0 === e || e, /[a-z]+\:\/\//.test(t) || (i = "/" === n ? f.getRootUrl() + t.replace(/^\/+/, "") : "#" === n ? f.getPageUrl().replace(/#.*/, "") + t : "?" === n ? f.getPageUrl().replace(/[\?#].*/, "") + t : e ? f.getBaseUrl() + t.replace(/^(\.\/)+/, "") : f.getBasePageUrl() + t.replace(/^(\.\/)+/, "")), i.replace(/\#$/, "") }, f.getShortUrl = function(t) { var e = t,
                    i = f.getBaseUrl(),
                    n = f.getRootUrl(); return f.emulated.pushState && (e = e.replace(i, "")), e = e.replace(n, "/"), f.isTraditionalAnchor(e) && (e = "./" + e), e = e.replace(/^(\.\/)+/g, "./").replace(/\#$/, "") }, f.getLocationHref = function(t) { return (t = t || u).URL === t.location.href ? t.location.href : t.location.href === decodeURIComponent(t.URL) ? t.URL : t.location.hash && decodeURIComponent(t.location.href.replace(/^[^#]+/, "")) === t.location.hash ? t.location.href : -1 == t.URL.indexOf("#") && -1 != t.location.href.indexOf("#") ? t.location.href : t.URL || t.location.href }, f.store = {}, f.idToState = f.idToState || {}, f.stateToId = f.stateToId || {}, f.urlToId = f.urlToId || {}, f.storedStates = f.storedStates || [], f.savedStates = f.savedStates || [], f.normalizeStore = function() { f.store.idToState = f.store.idToState || {}, f.store.urlToId = f.store.urlToId || {}, f.store.stateToId = f.store.stateToId || {} }, f.getState = function(t, e) { void 0 === t && (t = !0), void 0 === e && (e = !0); var i = f.getLastSavedState(); return !i && e && (i = f.createStateObject()), t && ((i = f.cloneObject(i)).url = i.cleanUrl || i.url), i }, f.getIdByState = function(t) { var e = f.extractId(t.url),
                    i; if (!e)
                    if (i = f.getStateString(t), void 0 !== f.stateToId[i]) e = f.stateToId[i];
                    else if (void 0 !== f.store.stateToId[i]) e = f.store.stateToId[i];
                else { for (; e = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), void 0 !== f.idToState[e] || void 0 !== f.store.idToState[e];);
                    f.stateToId[i] = e, f.idToState[e] = t } return e }, f.normalizeState = function(t) { var e, i; return t && "object" == typeof t || (t = {}), void 0 !== t.normalized ? t : (t.data && "object" == typeof t.data || (t.data = {}), (e = { normalized: !0 }).title = t.title || "", e.url = f.getFullUrl(t.url ? t.url : f.getLocationHref()), e.hash = f.getShortUrl(e.url), e.data = f.cloneObject(t.data), e.id = f.getIdByState(e), e.cleanUrl = e.url.replace(/\??\&_suid.*/, ""), e.url = e.cleanUrl, i = !f.isEmptyObject(e.data), (e.title || i) && !0 !== f.options.disableSuid && (e.hash = f.getShortUrl(e.url).replace(/\??\&_suid.*/, ""), /\?/.test(e.hash) || (e.hash += "?"), e.hash += "&_suid=" + e.id), e.hashedUrl = f.getFullUrl(e.hash), (f.emulated.pushState || f.bugs.safariPoll) && f.hasUrlDuplicate(e) && (e.url = e.hashedUrl), e) }, f.createStateObject = function(t, e, i) { var n = { data: t, title: e, url: i }; return n = f.normalizeState(n) }, f.getStateById = function(t) { var e; return t = String(t), f.idToState[t] || f.store.idToState[t] || i }, f.getStateString = function(t) { var e, i, n; return i = { data: (e = f.normalizeState(t)).data, title: t.title, url: t.url }, n = d.stringify(i) }, f.getStateId = function(t) { var e, i; return i = (e = f.normalizeState(t)).id }, f.getHashByState = function(t) { var e, i; return i = (e = f.normalizeState(t)).hash }, f.extractId = function(t) { var e, i, n, r; return r = -1 != t.indexOf("#") ? t.split("#")[0] : t, n = (i = /(.*)\&_suid=([0-9]+)$/.exec(r)) && i[1] || t, (e = i ? String(i[2] || "") : "") || !1 }, f.isTraditionalAnchor = function(t) { var e; return !/[\/\?\.]/.test(t) }, f.extractState = function(t, e) { var i = null,
                    n, r; return e = e || !1, (n = f.extractId(t)) && (i = f.getStateById(n)), i || (r = f.getFullUrl(t), (n = f.getIdByUrl(r) || !1) && (i = f.getStateById(n)), !i && e && !f.isTraditionalAnchor(t) && (i = f.createStateObject(null, null, r))), i }, f.getIdByUrl = function(t) { var e; return f.urlToId[t] || f.store.urlToId[t] || i }, f.getLastSavedState = function() { return f.savedStates[f.savedStates.length - 1] || i }, f.getLastStoredState = function() { return f.storedStates[f.storedStates.length - 1] || i }, f.hasUrlDuplicate = function(t) { var e = !1,
                    i; return e = (i = f.extractState(t.url)) && i.id !== t.id }, f.storeState = function(t) { return f.urlToId[t.url] = t.id, f.storedStates.push(f.cloneObject(t)), t }, f.isLastSavedState = function(t) { var e = !1,
                    i, n, r; return f.savedStates.length && (e = (i = t.id) === (r = (n = f.getLastSavedState()).id)), e }, f.saveState = function(t) { return !f.isLastSavedState(t) && (f.savedStates.push(f.cloneObject(t)), !0) }, f.getStateByIndex = function(t) { var e = null; return e = void 0 === t ? f.savedStates[f.savedStates.length - 1] : t < 0 ? f.savedStates[f.savedStates.length + t] : f.savedStates[t] }, f.getCurrentIndex = function() { var t = null; return t = f.savedStates.length < 1 ? 0 : f.savedStates.length - 1 }, f.getHash = function(t) { var e = f.getLocationHref(t),
                    i; return i = f.getHashByUrl(e) }, f.unescapeHash = function(t) { var e = f.normalizeHash(t); return e = decodeURIComponent(e) }, f.normalizeHash = function(t) { var e; return t.replace(/[^#]*#/, "").replace(/#.*/, "") }, f.setHash = function(t, e) { var i, n; return !1 !== e && f.busy() ? (f.pushQueue({ scope: f, callback: f.setHash, args: arguments, queue: e }), !1) : (f.busy(!0), (i = f.extractState(t, !0)) && !f.emulated.pushState ? f.pushState(i.data, i.title, i.url, !1) : f.getHash() !== t && (f.bugs.setHash ? (n = f.getPageUrl(), f.pushState(null, null, n + "#" + t, !1)) : u.location.hash = t), f) }, f.escapeHash = function(t) { var e = f.normalizeHash(t); return e = s.encodeURIComponent(e), f.bugs.hashEscape || (e = e.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), e }, f.getHashByUrl = function(t) { var e = String(t).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2"); return e = f.unescapeHash(e) }, f.setTitle = function(t) { var e = t.title,
                    i;
                e || (i = f.getStateByIndex(0)) && i.url === t.url && (e = i.title || f.options.initialTitle); try { u.getElementsByTagName("title")[0].innerHTML = e.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ") } catch (t) {} return u.title = e, f }, f.queues = [], f.busy = function(t) { if (void 0 !== t ? f.busy.flag = t : void 0 === f.busy.flag && (f.busy.flag = !1), !f.busy.flag) { a(f.busy.timeout); var n = function() { var t, e, i; if (!f.busy.flag)
                            for (t = f.queues.length - 1; 0 <= t; --t) 0 !== (e = f.queues[t]).length && (i = e.shift(), f.fireQueueItem(i), f.busy.timeout = o(n, f.options.busyDelay)) };
                    f.busy.timeout = o(n, f.options.busyDelay) } return f.busy.flag }, f.busy.flag = !1, f.fireQueueItem = function(t) { return t.callback.apply(t.scope || f, t.args || []) }, f.pushQueue = function(t) { return f.queues[t.queue || 0] = f.queues[t.queue || 0] || [], f.queues[t.queue || 0].push(t), f }, f.queue = function(t, e) { return "function" == typeof t && (t = { callback: t }), void 0 !== e && (t.queue = e), f.busy() ? f.pushQueue(t) : f.fireQueueItem(t), f }, f.clearQueue = function() { return f.busy.flag = !1, f.queues = [], f }, f.stateChanged = !1, f.doubleChecker = !1, f.doubleCheckComplete = function() { return f.stateChanged = !0, f.doubleCheckClear(), f }, f.doubleCheckClear = function() { return f.doubleChecker && (a(f.doubleChecker), f.doubleChecker = !1), f }, f.doubleCheck = function(t) { return f.stateChanged = !1, f.doubleCheckClear(), f.bugs.ieDoubleCheck && (f.doubleChecker = o(function() { return f.doubleCheckClear(), f.stateChanged || t(), !0 }, f.options.doubleCheckInterval)), f }, f.safariStatePoll = function() { var t = f.extractState(f.getLocationHref()),
                    e; if (!f.isLastSavedState(t)) return (e = t) || (e = f.createStateObject()), f.Adapter.trigger(s, "popstate"), f }, f.back = function(t) { return !1 !== t && f.busy() ? (f.pushQueue({ scope: f, callback: f.back, args: arguments, queue: t }), !1) : (f.busy(!0), f.doubleCheck(function() { f.back(!1) }), m.go(-1), !0) }, f.forward = function(t) { return !1 !== t && f.busy() ? (f.pushQueue({ scope: f, callback: f.forward, args: arguments, queue: t }), !1) : (f.busy(!0), f.doubleCheck(function() { f.forward(!1) }), m.go(1), !0) }, f.go = function(t, e) { var i; if (0 < t)
                    for (i = 1; i <= t; ++i) f.forward(e);
                else { if (!(t < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed."); for (i = -1; t <= i; --i) f.back(e) } return f }, f.emulated.pushState) { var e = function() {};
            f.pushState = f.pushState || e, f.replaceState = f.replaceState || e } else f.onPopState = function(t, e) { var i = !1,
                n = !1,
                r, o; return f.doubleCheckComplete(), (r = f.getHash()) ? ((o = f.extractState(r || f.getLocationHref(), !0)) ? f.replaceState(o.data, o.title, o.url, !1) : (f.Adapter.trigger(s, "anchorchange"), f.busy(!1)), f.expectedStateId = !1) : ((n = (i = f.Adapter.extractEventData("state", t, e) || !1) ? f.getStateById(i) : f.expectedStateId ? f.getStateById(f.expectedStateId) : f.extractState(f.getLocationHref())) || (n = f.createStateObject(null, null, f.getLocationHref())), f.expectedStateId = !1, f.isLastSavedState(n) ? (f.busy(!1), !1) : (f.storeState(n), f.saveState(n), f.setTitle(n), f.Adapter.trigger(s, "statechange"), f.busy(!1), !0)) }, f.Adapter.bind(s, "popstate", f.onPopState), f.pushState = function(t, e, i, n) { if (f.getHashByUrl(i) && f.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors)."); if (!1 !== n && f.busy()) return f.pushQueue({ scope: f, callback: f.pushState, args: arguments, queue: n }), !1;
            f.busy(!0); var r = f.createStateObject(t, e, i); return f.isLastSavedState(r) ? f.busy(!1) : (f.storeState(r), f.expectedStateId = r.id, m.pushState(r.id, r.title, r.url), f.Adapter.trigger(s, "popstate")), !0 }, f.replaceState = function(t, e, i, n) { if (f.getHashByUrl(i) && f.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors)."); if (!1 !== n && f.busy()) return f.pushQueue({ scope: f, callback: f.replaceState, args: arguments, queue: n }), !1;
            f.busy(!0); var r = f.createStateObject(t, e, i); return f.isLastSavedState(r) ? f.busy(!1) : (f.storeState(r), f.expectedStateId = r.id, m.replaceState(r.id, r.title, r.url), f.Adapter.trigger(s, "popstate")), !0 }; if (r) { try { f.store = d.parse(r.getItem("History.store")) || {} } catch (t) { f.store = {} }
            f.normalizeStore() } else f.store = {}, f.normalizeStore();
        f.Adapter.bind(s, "unload", f.clearAllIntervals), f.saveState(f.storeState(f.extractState(f.getLocationHref(), !0))), r && (f.onUnload = function() { var e, t, i; try { e = d.parse(r.getItem("History.store")) || {} } catch (t) { e = {} } for (t in e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {}, f.idToState) f.idToState.hasOwnProperty(t) && (e.idToState[t] = f.idToState[t]); for (t in f.urlToId) f.urlToId.hasOwnProperty(t) && (e.urlToId[t] = f.urlToId[t]); for (t in f.stateToId) f.stateToId.hasOwnProperty(t) && (e.stateToId[t] = f.stateToId[t]);
            f.store = e, f.normalizeStore(), i = d.stringify(e); try { r.setItem("History.store", i) } catch (t) { if (t.code !== DOMException.QUOTA_EXCEEDED_ERR) throw t;
                r.length && (r.removeItem("History.store"), r.setItem("History.store", i)) } }, f.intervalList.push(c(f.onUnload, f.options.storeInterval)), f.Adapter.bind(s, "beforeunload", f.onUnload), f.Adapter.bind(s, "unload", f.onUnload)), f.emulated.pushState || (f.bugs.safariPoll && f.intervalList.push(c(f.safariStatePoll, f.options.safariPollInterval)), "Apple Computer, Inc." !== n.vendor && "Mozilla" !== (n.appCodeName || "") || (f.Adapter.bind(s, "hashchange", function() { f.Adapter.trigger(s, "popstate") }), f.getHash() && f.Adapter.onDomLoad(function() { f.Adapter.trigger(s, "hashchange") }))) }, (!f.options || !f.options.delayInit) && f.init() }(window),
function(o, n, t, h) {
    "use strict";

    function l(t, e, i) { return setTimeout(a(t, i), e) }

    function r(t, e, i) { return !!Array.isArray(t) && (s(t, i[e], i), !0) }

    function s(t, e, i) { var n; if (t)
            if (t.forEach) t.forEach(e, i);
            else if (t.length !== h)
            for (n = 0; n < t.length;) e.call(i, t[n], n, t), n++;
        else
            for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t) }

    function e(n, t, e) { var r = "DEPRECATED METHOD: " + t + "\n" + e + " AT \n"; return function() { var t = new Error("get-stack-trace"),
                e = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                i = o.console && (o.console.warn || o.console.log); return i && i.call(o.console, r, e), n.apply(this, arguments) } }

    function i(t, e, i) { var n, r = e.prototype;
        (n = t.prototype = Object.create(r)).constructor = t, n._super = r, i && ht(n, i) }

    function a(t, e) { return function() { return t.apply(e, arguments) } }

    function u(t, e) { return typeof t == ft ? t.apply(e && e[0] || h, e) : t }

    function c(t, e) { return t === h ? e : t }

    function d(e, t, i) { s(g(t), function(t) { e.addEventListener(t, i, !1) }) }

    function p(e, t, i) { s(g(t), function(t) { e.removeEventListener(t, i, !1) }) }

    function f(t, e) { for (; t;) { if (t == e) return !0;
            t = t.parentNode } return !1 }

    function m(t, e) { return -1 < t.indexOf(e) }

    function g(t) { return t.trim().split(/\s+/g) }

    function v(t, e, i) { if (t.indexOf && !i) return t.indexOf(e); for (var n = 0; n < t.length;) { if (i && t[n][i] == e || !i && t[n] === e) return n;
            n++ } return -1 }

    function y(t) { return Array.prototype.slice.call(t, 0) }

    function _(t, i, e) { for (var n = [], r = [], o = 0; o < t.length;) { var s = i ? t[o][i] : t[o];
            v(r, s) < 0 && n.push(t[o]), r[o] = s, o++ } return e && (n = i ? n.sort(function(t, e) { return t[i] > e[i] }) : n.sort()), n }

    function x(t, e) { for (var i, n, r = e[0].toUpperCase() + e.slice(1), o = 0; o < dt.length;) { if ((n = (i = dt[o]) ? i + r : e) in t) return n;
            o++ } return h }

    function w() { return xt++ }

    function b(t) { var e = t.ownerDocument || t; return e.defaultView || e.parentWindow || o }

    function S(e, t) { var i = this;
        this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) { u(e.options.enable, [e]) && i.handler(t) }, this.init() }

    function T(t) { var e, i = t.options.inputClass; return new(e = i || (St ? W : Tt ? F : bt ? X : N))(t, I) }

    function I(t, e, i) { var n = i.pointers.length,
            r = i.changedPointers.length,
            o = e & Et && n - r == 0,
            s = e & (Mt | zt) && n - r == 0;
        i.isFirst = !!o, i.isFinal = !!s, o && (t.session = {}), i.eventType = e, P(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i }

    function P(t, e) { var i = t.session,
            n = e.pointers,
            r = n.length;
        i.firstInput || (i.firstInput = k(e)), 1 < r && !i.firstMultiple ? i.firstMultiple = k(e) : 1 === r && (i.firstMultiple = !1); var o = i.firstInput,
            s = i.firstMultiple,
            a = s ? s.center : o.center,
            l = e.center = E(n);
        e.timeStamp = vt(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = L(a, l), e.distance = z(a, l), C(i, e), e.offsetDirection = M(e.deltaX, e.deltaY); var u = A(e.deltaTime, e.deltaX, e.deltaY);
        e.overallVelocityX = u.x, e.overallVelocityY = u.y, e.overallVelocity = gt(u.x) > gt(u.y) ? u.x : u.y, e.scale = s ? D(s.pointers, n) : 1, e.rotation = s ? R(s.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, O(i, e); var c = t.element;
        f(e.srcEvent.target, c) && (c = e.srcEvent.target), e.target = c }

    function C(t, e) { var i = e.center,
            n = t.offsetDelta || {},
            r = t.prevDelta || {},
            o = t.prevInput || {};
        e.eventType !== Et && o.eventType !== Mt || (r = t.prevDelta = { x: o.deltaX || 0, y: o.deltaY || 0 }, n = t.offsetDelta = { x: i.x, y: i.y }), e.deltaX = r.x + (i.x - n.x), e.deltaY = r.y + (i.y - n.y) }

    function O(t, e) { var i, n, r, o, s = t.lastInterval || e,
            a = e.timeStamp - s.timeStamp; if (e.eventType != zt && (kt < a || s.velocity === h)) { var l = e.deltaX - s.deltaX,
                u = e.deltaY - s.deltaY,
                c = A(a, l, u);
            n = c.x, r = c.y, i = gt(c.x) > gt(c.y) ? c.x : c.y, o = M(l, u), t.lastInterval = e } else i = s.velocity, n = s.velocityX, r = s.velocityY, o = s.direction;
        e.velocity = i, e.velocityX = n, e.velocityY = r, e.direction = o }

    function k(t) { for (var e = [], i = 0; i < t.pointers.length;) e[i] = { clientX: mt(t.pointers[i].clientX), clientY: mt(t.pointers[i].clientY) }, i++; return { timeStamp: vt(), pointers: e, center: E(e), deltaX: t.deltaX, deltaY: t.deltaY } }

    function E(t) { var e = t.length; if (1 === e) return { x: mt(t[0].clientX), y: mt(t[0].clientY) }; for (var i = 0, n = 0, r = 0; r < e;) i += t[r].clientX, n += t[r].clientY, r++; return { x: mt(i / e), y: mt(n / e) } }

    function A(t, e, i) { return { x: e / t || 0, y: i / t || 0 } }

    function M(t, e) {
        return t === e ? Lt : gt(t) >= gt(e) ? t < 0 ? Rt : Dt : e < 0 ? Nt : Wt
    }

    function z(t, e, i) { i || (i = qt); var n = e[i[0]] - t[i[0]],
            r = e[i[1]] - t[i[1]]; return Math.sqrt(n * n + r * r) }

    function L(t, e, i) { i || (i = qt); var n = e[i[0]] - t[i[0]],
            r = e[i[1]] - t[i[1]]; return 180 * Math.atan2(r, n) / Math.PI }

    function R(t, e) { return L(e[1], e[0], Xt) + L(t[1], t[0], Xt) }

    function D(t, e) { return z(e[0], e[1], Xt) / z(t[0], t[1], Xt) }

    function N() { this.evEl = Yt, this.evWin = Ut, this.pressed = !1, S.apply(this, arguments) }

    function W() { this.evEl = $t, this.evWin = Gt, S.apply(this, arguments), this.store = this.manager.session.pointerEvents = [] }

    function j() { this.evTarget = Kt, this.evWin = Jt, this.started = !1, S.apply(this, arguments) }

    function H(t, e) { var i = y(t.touches),
            n = y(t.changedTouches); return e & (Mt | zt) && (i = _(i.concat(n), "identifier", !0)), [i, n] }

    function F() { this.evTarget = ee, this.targetIds = {}, S.apply(this, arguments) }

    function q(t, e) { var i = y(t.touches),
            n = this.targetIds; if (e & (2 | Et) && 1 === i.length) return n[i[0].identifier] = !0, [i, i]; var r, o, s = y(t.changedTouches),
            a = [],
            l = this.target; if (o = i.filter(function(t) { return f(t.target, l) }), e === Et)
            for (r = 0; r < o.length;) n[o[r].identifier] = !0, r++; for (r = 0; r < s.length;) n[s[r].identifier] && a.push(s[r]), e & (Mt | zt) && delete n[s[r].identifier], r++; return a.length ? [_(o.concat(a), "identifier", !0), a] : void 0 }

    function X() { S.apply(this, arguments); var t = a(this.handler, this);
        this.touch = new F(this.manager, t), this.mouse = new N(this.manager, t), this.primaryTouch = null, this.lastTouches = [] }

    function B(t, e) { t & Et ? (this.primaryTouch = e.changedPointers[0].identifier, Y.call(this, e)) : t & (Mt | zt) && Y.call(this, e) }

    function Y(t) { var e = t.changedPointers[0]; if (e.identifier === this.primaryTouch) { var i = { x: e.clientX, y: e.clientY };
            this.lastTouches.push(i); var n = this.lastTouches,
                r;
            setTimeout(function() { var t = n.indexOf(i); - 1 < t && n.splice(t, 1) }, ie) } }

    function U(t) { for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) { var r = this.lastTouches[n],
                o = Math.abs(e - r.x),
                s = Math.abs(i - r.y); if (o <= 25 && s <= 25) return !0 } return !1 }

    function V(t, e) { this.manager = t, this.set(e) }

    function Q(t) { if (m(t, ue)) return ue; var e = m(t, ce),
            i = m(t, he); return e && i ? ue : e || i ? e ? ce : he : m(t, le) ? le : ae }

    function $() { if (!oe) return !1; var e = {},
            i = o.CSS && o.CSS.supports; return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(t) { e[t] = !i || o.CSS.supports("touch-action", t) }), e }

    function G(t) { this.options = ht({}, this.defaults, t || {}), this.id = w(), this.manager = null, this.options.enable = c(this.options.enable, !0), this.state = pe, this.simultaneous = {}, this.requireFail = [] }

    function Z(t) { return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : "" }

    function K(t) { return t == Wt ? "down" : t == Nt ? "up" : t == Rt ? "left" : t == Dt ? "right" : "" }

    function J(t, e) { var i = e.manager; return i ? i.get(t) : t }

    function tt() { G.apply(this, arguments) }

    function et() { tt.apply(this, arguments), this.pX = null, this.pY = null }

    function it() { tt.apply(this, arguments) }

    function nt() { G.apply(this, arguments), this._timer = null, this._input = null }

    function rt() { tt.apply(this, arguments) }

    function ot() { tt.apply(this, arguments) }

    function st() { G.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0 }

    function at(t, e) { return (e = e || {}).recognizers = c(e.recognizers, at.defaults.preset), new lt(t, e) }

    function lt(t, e) { this.options = ht({}, at.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = T(this), this.touchAction = new V(this, this.options.touchAction), ut(this, !0), s(this.options.recognizers, function(t) { var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]) }, this) }

    function ut(i, n) { var r = i.element,
            o;
        r.style && (s(i.options.cssProps, function(t, e) { o = x(r.style, e), r.style[o] = n ? (i.oldCssProps[o] = r.style[o], t) : i.oldCssProps[o] || "" }), n || (i.oldCssProps = {})) }

    function ct(t, e) { var i = n.createEvent("Event");
        i.initEvent(t, !0, !0), (i.gesture = e).target.dispatchEvent(i) }
    var ht, dt = ["", "webkit", "Moz", "MS", "ms", "o"],
        pt = n.createElement("div"),
        ft = "function",
        mt = Math.round,
        gt = Math.abs,
        vt = Date.now;
    ht = "function" != typeof Object.assign ? function(t) { if (t === h || null === t) throw new TypeError("Cannot convert undefined or null to object"); for (var e = Object(t), i = 1; i < arguments.length; i++) { var n = arguments[i]; if (n !== h && null !== n)
                for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r]) } return e } : Object.assign;
    var yt = e(function(t, e, i) { for (var n = Object.keys(e), r = 0; r < n.length;)(!i || i && t[n[r]] === h) && (t[n[r]] = e[n[r]]), r++; return t }, "extend", "Use `assign`."),
        _t = e(function(t, e) { return yt(t, e, !0) }, "merge", "Use `assign`."),
        xt = 1,
        wt = /mobile|tablet|ip(ad|hone|od)|android/i,
        bt = "ontouchstart" in o,
        St = x(o, "PointerEvent") !== h,
        Tt = bt && wt.test(navigator.userAgent),
        It = "touch",
        Pt = "pen",
        Ct = "mouse",
        Ot = "kinect",
        kt = 25,
        Et = 1,
        At = 2,
        Mt = 4,
        zt = 8,
        Lt = 1,
        Rt = 2,
        Dt = 4,
        Nt = 8,
        Wt = 16,
        jt = Rt | Dt,
        Ht = Nt | Wt,
        Ft = jt | Ht,
        qt = ["x", "y"],
        Xt = ["clientX", "clientY"];
    S.prototype = { handler: function() {}, init: function() { this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(b(this.element), this.evWin, this.domHandler) }, destroy: function() { this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(b(this.element), this.evWin, this.domHandler) } };
    var Bt = { mousedown: Et, mousemove: 2, mouseup: Mt },
        Yt = "mousedown",
        Ut = "mousemove mouseup";
    i(N, S, { handler: function(t) { var e = Bt[t.type];
            e & Et && 0 === t.button && (this.pressed = !0), 2 & e && 1 !== t.which && (e = Mt), this.pressed && (e & Mt && (this.pressed = !1), this.callback(this.manager, e, { pointers: [t], changedPointers: [t], pointerType: Ct, srcEvent: t })) } });
    var Vt = { pointerdown: Et, pointermove: 2, pointerup: Mt, pointercancel: zt, pointerout: zt },
        Qt = { 2: It, 3: Pt, 4: Ct, 5: Ot },
        $t = "pointerdown",
        Gt = "pointermove pointerup pointercancel";
    o.MSPointerEvent && !o.PointerEvent && ($t = "MSPointerDown", Gt = "MSPointerMove MSPointerUp MSPointerCancel"), i(W, S, { handler: function(t) { var e = this.store,
                i = !1,
                n = t.type.toLowerCase().replace("ms", ""),
                r = Vt[n],
                o = Qt[t.pointerType] || t.pointerType,
                s = o == It,
                a = v(e, t.pointerId, "pointerId");
            r & Et && (0 === t.button || s) ? a < 0 && (e.push(t), a = e.length - 1) : r & (Mt | zt) && (i = !0), a < 0 || (e[a] = t, this.callback(this.manager, r, { pointers: e, changedPointers: [t], pointerType: o, srcEvent: t }), i && e.splice(a, 1)) } });
    var Zt = { touchstart: Et, touchmove: 2, touchend: Mt, touchcancel: zt },
        Kt = "touchstart",
        Jt = "touchstart touchmove touchend touchcancel";
    i(j, S, { handler: function(t) { var e = Zt[t.type]; if (e === Et && (this.started = !0), this.started) { var i = H.call(this, t, e);
                e & (Mt | zt) && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, e, { pointers: i[0], changedPointers: i[1], pointerType: It, srcEvent: t }) } } });
    var te = { touchstart: Et, touchmove: 2, touchend: Mt, touchcancel: zt },
        ee = "touchstart touchmove touchend touchcancel";
    i(F, S, { handler: function(t) { var e = te[t.type],
                i = q.call(this, t, e);
            i && this.callback(this.manager, e, { pointers: i[0], changedPointers: i[1], pointerType: It, srcEvent: t }) } });
    var ie = 2500,
        ne = 25;
    i(X, S, { handler: function(t, e, i) { var n = i.pointerType == It,
                r = i.pointerType == Ct; if (!(r && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) { if (n) B.call(this, e, i);
                else if (r && U.call(this, i)) return;
                this.callback(t, e, i) } }, destroy: function() { this.touch.destroy(), this.mouse.destroy() } });
    var re = x(pt.style, "touchAction"),
        oe = re !== h,
        se = "compute",
        ae = "auto",
        le = "manipulation",
        ue = "none",
        ce = "pan-x",
        he = "pan-y",
        de = $();
    V.prototype = { set: function(t) { t == se && (t = this.compute()), oe && this.manager.element.style && de[t] && (this.manager.element.style[re] = t), this.actions = t.toLowerCase().trim() }, update: function() { this.set(this.manager.options.touchAction) }, compute: function() { var e = []; return s(this.manager.recognizers, function(t) { u(t.options.enable, [t]) && (e = e.concat(t.getTouchAction())) }), Q(e.join(" ")) }, preventDefaults: function(t) { var e = t.srcEvent,
                i = t.offsetDirection; if (!this.manager.session.prevented) { var n = this.actions,
                    r = m(n, ue) && !de[ue],
                    o = m(n, he) && !de[he],
                    s = m(n, ce) && !de[ce]; if (r) { var a = 1 === t.pointers.length,
                        l = t.distance < 2,
                        u = t.deltaTime < 250; if (a && l && u) return } return s && o ? void 0 : r || o && i & jt || s && i & Ht ? this.preventSrc(e) : void 0 }
            e.preventDefault() }, preventSrc: function(t) { this.manager.session.prevented = !0, t.preventDefault() } };
    var pe = 1,
        fe = 2,
        me = 4,
        ge = 8,
        ve = 8,
        ye = 16,
        _e = 32;
    G.prototype = { defaults: {}, set: function(t) { return ht(this.options, t), this.manager && this.manager.touchAction.update(), this }, recognizeWith: function(t) { if (r(t, "recognizeWith", this)) return this; var e = this.simultaneous; return e[(t = J(t, this)).id] || (e[t.id] = t).recognizeWith(this), this }, dropRecognizeWith: function(t) { return r(t, "dropRecognizeWith", this) || (t = J(t, this), delete this.simultaneous[t.id]), this }, requireFailure: function(t) { if (r(t, "requireFailure", this)) return this; var e = this.requireFail; return -1 === v(e, t = J(t, this)) && (e.push(t), t.requireFailure(this)), this }, dropRequireFailure: function(t) { if (r(t, "dropRequireFailure", this)) return this;
            t = J(t, this); var e = v(this.requireFail, t); return -1 < e && this.requireFail.splice(e, 1), this }, hasRequireFailures: function() { return 0 < this.requireFail.length }, canRecognizeWith: function(t) { return !!this.simultaneous[t.id] }, emit: function(e) {
            function t(t) { i.manager.emit(t, e) } var i = this,
                n = this.state;
            n < 8 && t(i.options.event + Z(n)), t(i.options.event), e.additionalEvent && t(e.additionalEvent), 8 <= n && t(i.options.event + Z(n)) }, tryEmit: function(t) { return this.canEmit() ? this.emit(t) : void(this.state = 32) }, canEmit: function() { for (var t = 0; t < this.requireFail.length;) { if (!(this.requireFail[t].state & (32 | pe))) return !1;
                t++ } return !0 }, recognize: function(t) { var e = ht({}, t); return u(this.options.enable, [this, e]) ? (56 & this.state && (this.state = pe), this.state = this.process(e), void(30 & this.state && this.tryEmit(e))) : (this.reset(), void(this.state = 32)) }, process: function(t) {}, getTouchAction: function() {}, reset: function() {} }, i(tt, G, { defaults: { pointers: 1 }, attrTest: function(t) { var e = this.options.pointers; return 0 === e || t.pointers.length === e }, process: function(t) { var e = this.state,
                i = t.eventType,
                n = 6 & e,
                r = this.attrTest(t); return n && (i & zt || !r) ? 16 | e : n || r ? i & Mt ? 8 | e : 2 & e ? 4 | e : 2 : 32 } }), i(et, tt, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Ft }, getTouchAction: function() { var t = this.options.direction,
                e = []; return t & jt && e.push(he), t & Ht && e.push(ce), e }, directionTest: function(t) { var e = this.options,
                i = !0,
                n = t.distance,
                r = t.direction,
                o = t.deltaX,
                s = t.deltaY; return r & e.direction || (n = e.direction & jt ? (r = 0 === o ? Lt : o < 0 ? Rt : Dt, i = o != this.pX, Math.abs(t.deltaX)) : (r = 0 === s ? Lt : s < 0 ? Nt : Wt, i = s != this.pY, Math.abs(t.deltaY))), t.direction = r, i && n > e.threshold && r & e.direction }, attrTest: function(t) { return tt.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t)) }, emit: function(t) { this.pX = t.deltaX, this.pY = t.deltaY; var e = K(t.direction);
            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t) } }), i(it, tt, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function() { return [ue] }, attrTest: function(t) { return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state) }, emit: function(t) { if (1 !== t.scale) { var e = t.scale < 1 ? "in" : "out";
                t.additionalEvent = this.options.event + e }
            this._super.emit.call(this, t) } }), i(nt, G, { defaults: { event: "press", pointers: 1, time: 251, threshold: 9 }, getTouchAction: function() { return [ae] }, process: function(t) { var e = this.options,
                i = t.pointers.length === e.pointers,
                n = t.distance < e.threshold,
                r = t.deltaTime > e.time; if (this._input = t, !n || !i || t.eventType & (Mt | zt) && !r) this.reset();
            else if (t.eventType & Et) this.reset(), this._timer = l(function() { this.state = 8, this.tryEmit() }, e.time, this);
            else if (t.eventType & Mt) return 8; return 32 }, reset: function() { clearTimeout(this._timer) }, emit: function(t) { 8 === this.state && (t && t.eventType & Mt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = vt(), this.manager.emit(this.options.event, this._input))) } }), i(rt, tt, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function() { return [ue] }, attrTest: function(t) { return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || 2 & this.state) } }), i(ot, tt, { defaults: { event: "swipe", threshold: 10, velocity: .3, direction: jt | Ht, pointers: 1 }, getTouchAction: function() { return et.prototype.getTouchAction.call(this) }, attrTest: function(t) { var e, i = this.options.direction; return i & (jt | Ht) ? e = t.overallVelocity : i & jt ? e = t.overallVelocityX : i & Ht && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && gt(e) > this.options.velocity && t.eventType & Mt }, emit: function(t) { var e = K(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t) } }), i(st, G, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 }, getTouchAction: function() { return [le] }, process: function(t) { var e = this.options,
                i = t.pointers.length === e.pointers,
                n = t.distance < e.threshold,
                r = t.deltaTime < e.time; if (this.reset(), t.eventType & Et && 0 === this.count) return this.failTimeout(); if (n && r && i) { if (t.eventType != Mt) return this.failTimeout(); var o = !this.pTime || t.timeStamp - this.pTime < e.interval,
                    s = !this.pCenter || z(this.pCenter, t.center) < e.posThreshold,
                    a; if (this.pTime = t.timeStamp, this.pCenter = t.center, s && o ? this.count += 1 : this.count = 1, this._input = t, 0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = l(function() { this.state = 8, this.tryEmit() }, e.interval, this), 2) : 8 } return 32 }, failTimeout: function() { return this._timer = l(function() { this.state = 32 }, this.options.interval, this), 32 }, reset: function() { clearTimeout(this._timer) }, emit: function() { 8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input)) } }), at.VERSION = "2.0.8", at.defaults = { domEvents: !1, touchAction: se, enable: !0, inputTarget: null, inputClass: null, preset: [
            [rt, { enable: !1 }],
            [it, { enable: !1 },
                ["rotate"]
            ],
            [ot, { direction: jt }],
            [et, { direction: jt },
                ["swipe"]
            ],
            [st],
            [st, { event: "doubletap", taps: 2 },
                ["tap"]
            ],
            [nt]
        ], cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };
    var xe = 1,
        we = 2,
        be;
    lt.prototype = { set: function(t) { return ht(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this }, stop: function(t) { this.session.stopped = t ? 2 : 1 }, recognize: function(t) { var e = this.session; if (!e.stopped) { this.touchAction.preventDefaults(t); var i, n = this.recognizers,
                    r = e.curRecognizer;
                (!r || r && 8 & r.state) && (r = e.curRecognizer = null); for (var o = 0; o < n.length;) i = n[o], 2 === e.stopped || r && i != r && !i.canRecognizeWith(r) ? i.reset() : i.recognize(t), !r && 14 & i.state && (r = e.curRecognizer = i), o++ } }, get: function(t) { if (t instanceof G) return t; for (var e = this.recognizers, i = 0; i < e.length; i++)
                if (e[i].options.event == t) return e[i];
            return null }, add: function(t) { if (r(t, "add", this)) return this; var e = this.get(t.options.event); return e && this.remove(e), this.recognizers.push(t), (t.manager = this).touchAction.update(), t }, remove: function(t) { if (r(t, "remove", this)) return this; if (t = this.get(t)) { var e = this.recognizers,
                    i = v(e, t); - 1 !== i && (e.splice(i, 1), this.touchAction.update()) } return this }, on: function(t, e) { if (t !== h && e !== h) { var i = this.handlers; return s(g(t), function(t) { i[t] = i[t] || [], i[t].push(e) }), this } }, off: function(t, e) { if (t !== h) { var i = this.handlers; return s(g(t), function(t) { e ? i[t] && i[t].splice(v(i[t], e), 1) : delete i[t] }), this } }, emit: function(t, e) { this.options.domEvents && ct(t, e); var i = this.handlers[t] && this.handlers[t].slice(); if (i && i.length) { e.type = t, e.preventDefault = function() { e.srcEvent.preventDefault() }; for (var n = 0; n < i.length;) i[n](e), n++ } }, destroy: function() { this.element && ut(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null } }, ht(at, { INPUT_START: Et, INPUT_MOVE: 2, INPUT_END: Mt, INPUT_CANCEL: zt, STATE_POSSIBLE: pe, STATE_BEGAN: 2, STATE_CHANGED: 4, STATE_ENDED: 8, STATE_RECOGNIZED: 8, STATE_CANCELLED: 16, STATE_FAILED: 32, DIRECTION_NONE: Lt, DIRECTION_LEFT: Rt, DIRECTION_RIGHT: Dt, DIRECTION_UP: Nt, DIRECTION_DOWN: Wt, DIRECTION_HORIZONTAL: jt, DIRECTION_VERTICAL: Ht, DIRECTION_ALL: Ft, Manager: lt, Input: S, TouchAction: V, TouchInput: F, MouseInput: N, PointerEventInput: W, TouchMouseInput: X, SingleTouchInput: j, Recognizer: G, AttrRecognizer: tt, Tap: st, Pan: et, Swipe: ot, Pinch: it, Rotate: rt, Press: nt, on: d, off: p, each: s, merge: _t, extend: yt, assign: ht, inherit: i, bindFn: a, prefixed: x }), (void 0 !== o ? o : "undefined" != typeof self ? self : {}).Hammer = at, "function" == typeof define && define.amd ? define(function() { return at }) : "undefined" != typeof module && module.exports ? module.exports = at : o[t] = at
}(window, document, "Hammer"),
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, i, n, r) {
            //alert(jQuery.easing.default);
            return jQuery.easing[jQuery.easing.def](t, e, i, n, r)
        },
        easeInQuad: function(t, e, i, n, r) { return n * (e /= r) * e + i },
        easeOutQuad: function(t, e, i, n, r) { return -n * (e /= r) * (e - 2) + i },
        easeInOutQuad: function(t, e, i, n, r) { return (e /= r / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i },
        easeInCubic: function(t, e, i, n, r) { return n * (e /= r) * e * e + i },
        easeOutCubic: function(t, e, i, n, r) { return n * ((e = e / r - 1) * e * e + 1) + i },
        easeInOutCubic: function(t, e, i, n, r) { return (e /= r / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i },
        easeInQuart: function(t, e, i, n, r) { return n * (e /= r) * e * e * e + i },
        easeOutQuart: function(t, e, i, n, r) { return -n * ((e = e / r - 1) * e * e * e - 1) + i },
        easeInOutQuart: function(t, e, i, n, r) { return (e /= r / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i },
        easeInQuint: function(t, e, i, n, r) { return n * (e /= r) * e * e * e * e + i },
        easeOutQuint: function(t, e, i, n, r) { return n * ((e = e / r - 1) * e * e * e * e + 1) + i },
        easeInOutQuint: function(t, e, i, n, r) { return (e /= r / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i },
        easeInSine: function(t, e, i, n, r) { return -n * Math.cos(e / r * (Math.PI / 2)) + n + i },
        easeOutSine: function(t, e, i, n, r) { return n * Math.sin(e / r * (Math.PI / 2)) + i },
        easeInOutSine: function(t, e, i, n, r) { return -n / 2 * (Math.cos(Math.PI * e / r) - 1) + i },
        easeInExpo: function(t, e, i, n, r) { return 0 == e ? i : n * Math.pow(2, 10 * (e / r - 1)) + i },
        easeOutExpo: function(t, e, i, n, r) { return e == r ? i + n : n * (1 - Math.pow(2, -10 * e / r)) + i },
        easeInOutExpo: function(t, e, i, n, r) { return 0 == e ? i : e == r ? i + n : (e /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --e)) + i },
        easeInCirc: function(t, e, i, n, r) { return -n * (Math.sqrt(1 - (e /= r) * e) - 1) + i },
        easeOutCirc: function(t, e, i, n, r) { return n * Math.sqrt(1 - (e = e / r - 1) * e) + i },
        easeInOutCirc: function(t, e, i, n, r) { return (e /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i },
        easeInElastic: function(t, e, i, n, r) { var o = 1.70158,
                s = 0,
                a = n; if (0 == e) return i; if (1 == (e /= r)) return i + n; if (s || (s = .3 * r), a < Math.abs(n)) { a = n; var o = s / 4 } else var o = s / (2 * Math.PI) * Math.asin(n / a); return -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - o) * (2 * Math.PI) / s) + i },
        easeOutElastic: function(t, e, i, n, r) { var o = 1.70158,
                s = 0,
                a = n; if (0 == e) return i; if (1 == (e /= r)) return i + n; if (s || (s = .3 * r), a < Math.abs(n)) { a = n; var o = s / 4 } else var o = s / (2 * Math.PI) * Math.asin(n / a); return a * Math.pow(2, -10 * e) * Math.sin((e * r - o) * (2 * Math.PI) / s) + n + i },
        easeInOutElastic: function(t, e, i, n, r) { var o = 1.70158,
                s = 0,
                a = n; if (0 == e) return i; if (2 == (e /= r / 2)) return i + n; if (s || (s = r * (.3 * 1.5)), a < Math.abs(n)) { a = n; var o = s / 4 } else var o = s / (2 * Math.PI) * Math.asin(n / a); return e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - o) * (2 * Math.PI) / s) * -.5 + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * r - o) * (2 * Math.PI) / s) * .5 + n + i },
        easeInBack: function(t, e, i, n, r, o) { return null == o && (o = 1.70158), n * (e /= r) * e * ((o + 1) * e - o) + i },
        easeOutBack: function(t, e, i, n, r, o) { return null == o && (o = 1.70158), n * ((e = e / r - 1) * e * ((o + 1) * e + o) + 1) + i },
        easeInOutBack: function(t, e, i, n, r, o) { return null == o && (o = 1.70158), (e /= r / 2) < 1 ? n / 2 * (e * e * ((1 + (o *= 1.525)) * e - o)) + i : n / 2 * ((e -= 2) * e * ((1 + (o *= 1.525)) * e + o) + 2) + i },
        easeInBounce: function(t, e, i, n, r) { return n - jQuery.easing.easeOutBounce(t, r - e, 0, n, r) + i },
        easeOutBounce: function(t, e, i, n, r) { return (e /= r) < 1 / 2.75 ? n * (7.5625 * e * e) + i : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i },
        easeInOutBounce: function(t, e, i, n, r) { return e < r / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, r) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - r, 0, n, r) + .5 * n + i }
    }),
    /*!
     * jQuery Mousewheel 3.1.13
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     */
    function(t) {
        "function" == typeof define && define.amd ?
            // AMD. Register as an anonymous module.
            define(["jquery"], t) : "object" == typeof exports ?
            // Node/CommonJS style for Browserify
            module.exports = t :
            // Browser globals
            t(jQuery)
    }(function(d) {
        function e(t) {
            var e = t || window.event,
                i = m.call(arguments, 1),
                n = 0,
                r = 0,
                o = 0,
                s = 0,
                a = 0,
                l = 0;
            // No change actually happened, no reason to go any further
            if ((t = d.event.fix(e)).type = "mousewheel",
                // Old school scrollwheel delta
                "detail" in e && (o = -1 * e.detail), "wheelDelta" in e && (o = e.wheelDelta), "wheelDeltaY" in e && (o = e.wheelDeltaY), "wheelDeltaX" in e && (r = -1 * e.wheelDeltaX),
                // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
                "axis" in e && e.axis === e.HORIZONTAL_AXIS && (r = -1 * o, o = 0),
                // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
                n = 0 === o ? r : o,
                // New school wheel delta (wheel event)
                "deltaY" in e && (n = o = -1 * e.deltaY), "deltaX" in e && (r = e.deltaX, 0 === o && (n = -1 * r)), 0 !== o || 0 !== r) {
                // Need to convert lines and pages to pixels if we aren't already in pixels
                // There are three delta modes:
                //   * deltaMode 0 is by pixels, nothing to do
                //   * deltaMode 1 is by lines
                //   * deltaMode 2 is by pages
                if (1 === e.deltaMode) { var u = d.data(this, "mousewheel-line-height");
                    n *= u, o *= u, r *= u } else if (2 === e.deltaMode) { var c = d.data(this, "mousewheel-page-height");
                    n *= c, o *= c, r *= c }
                // Store lowest absolute delta to normalize the delta values
                // Normalise offsetX and offsetY properties
                if (s = Math.max(Math.abs(o), Math.abs(r)), (!v || s < v) && f(e, v = s) && (v /= 40),
                    // Adjust older deltas if necessary
                    f(e, s) && (
                        // Divide all the things by 40!
                        n /= 40, r /= 40, o /= 40),
                    // Get a whole, normalized value for the deltas
                    n = Math[1 <= n ? "floor" : "ceil"](n / v), r = Math[1 <= r ? "floor" : "ceil"](r / v), o = Math[1 <= o ? "floor" : "ceil"](o / v), y.settings.normalizeOffset && this.getBoundingClientRect) { var h = this.getBoundingClientRect();
                    a = t.clientX - h.left, l = t.clientY - h.top }
                // Add information to the event object
                return t.deltaX = r, t.deltaY = o, t.deltaFactor = v, t.offsetX = a, t.offsetY = l,
                    // Go ahead and set deltaMode to 0 since we converted to pixels
                    // Although this is a little odd since we overwrite the deltaX/Y
                    // properties with normalized deltas.
                    t.deltaMode = 0,
                    // Add event and delta to the front of the arguments
                    i.unshift(t, n, r, o),
                    // Clearout lowestDelta after sometime to better
                    // handle multiple device types that give different
                    // a different lowestDelta
                    // Ex: trackpad = 3 and mouse wheel = 120
                    g && clearTimeout(g), g = setTimeout(p, 200), (d.event.dispatch || d.event.handle).apply(this, i)
            }
        }

        function p() { v = null }

        function f(t, e) {
            // If this is an older event and the delta is divisable by 120,
            // then we are assuming that the browser is treating this as an
            // older mouse wheel event and that we should divide the deltas
            // by 40 to try and get a more usable deltaFactor.
            // Side note, this actually impacts the reported scroll distance
            // in older browsers and can cause scrolling to be slower than native.
            // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
            return y.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
        }
        var t = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            i = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            m = Array.prototype.slice,
            g, v;
        if (d.event.fixHooks)
            for (var n = t.length; n;) d.event.fixHooks[t[--n]] = d.event.mouseHooks;
        var y = d.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var t = i.length; t;) this.addEventListener(i[--t], e, !1);
                else this.onmousewheel = e;
                // Store the line height and page height for this particular element
                d.data(this, "mousewheel-line-height", y.getLineHeight(this)), d.data(this, "mousewheel-page-height", y.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var t = i.length; t;) this.removeEventListener(i[--t], e, !1);
                else this.onmousewheel = null;
                // Clean up the data we added to the element
                d.removeData(this, "mousewheel-line-height"), d.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(t) { var e = d(t),
                    i = e["offsetParent" in d.fn ? "offsetParent" : "parent"](); return i.length || (i = d("body")), parseInt(i.css("fontSize"), 10) || parseInt(e.css("fontSize"), 10) || 16 },
            getPageHeight: function(t) { return d(t).height() },
            settings: {
                adjustOldDeltas: !0, // see shouldAdjustOldDeltas() below
                normalizeOffset: !0
            }
        };
        d.fn.extend({ mousewheel: function(t) { return t ? this.bind("mousewheel", t) : this.trigger("mousewheel") }, unmousewheel: function(t) { return this.unbind("mousewheel", t) } })
    }),
    /*
     * Maskee v1.0
     * Created by Ruben Bristian - http://rubenbristian.com 
     * Licensed under GPL - http://www.gnu.org/licenses/gpl.html
     * http://maskee.krownthemes.com
     */
    function(H) {
        "use strict";
        var F = H("body"),
            t = null,
            e = null;
        H.maskee = function(t, n) {
            var o = { mediaSelector: ".media", captionSelector: ".caption", transitionSpeed: 750, transitionEasing: "easeIn", autoPlay: 0, loop: !1, preSlide: !1, aftSlide: !1, fadeFirst: !1, pagination: "none", navigationArrows: !0, navigationArrowsLeftContent: "&larr;", navigationArrowsRightContent: "&rarr;", navigationCursor: !1, keyboardNavigation: !0, mouseWheelNavigation: !1, backwardsNavigation: !0, enableSwipe: !0, hideControlsWhenSingle: !0, onFirstImageLoaded: function(t) {}, onAllImagesLoaded: function(t) {}, onSliderInit: function(t) {}, onSlideChangeStart: function(t, e, i) {}, onSlideChangeEnd: function(t, e, i) {} }
                /* --- PRIVATE VARIABLES --- */
                ,
                s = this;
            s.settings = {};
            var e = t,
                a = H(t),
                l = a.children(".slide"),
                r = null,
                u = null,
                i = null,
                c = 0,
                h = 99,
                d = !1,
                p = null,
                f = 0,
                m = l.find(".media img").length,
                g = Array(),
                v = Array(),
                y = !0,
                _ = !0,
                x = 0,
                w = 0,
                b = 0,
                S = 0,
                T = !1;
            /* --- PUBLIC VARIABLES --- */
            s.currentSlide = 0, s.totalSlides = l.length,
                /* --- INIT FUNCTION --- */
                s.init = function() {
                    // Enable swipe
                    if (s.settings = H.extend({}, o, n),
                        // Remove controls and autoplay if there's a single slide
                        s.settings.hideControlsWhenSingle && 1 == s.totalSlides && (s.settings.navigationArrows = !1, s.settings.navigationCursor = !1, s.settings.keyboardNavigation = !1, s.settings.mouseWheelNavigation = !1, s.settings.autoPlay = 0, s.settings.pagination = "none"),
                        // Build pagination
                        "none" != s.settings.pagination && (a.append('<div class="maskee-pagination numeric"></div><div class="maskee-pagination bullet"></div>'), A(), M()),
                        // Build navigation
                        s.settings.navigationArrows && (a.append('<span class="maskee-nav prev">' + s.settings.navigationArrowsLeftContent + '</span><span class="maskee-nav next">' + s.settings.navigationArrowsRightContent + "</span>"), a.find(".maskee-nav.prev").on("click", function() { s.previousSlide() }), a.find(".maskee-nav.next").on("click", function() { s.nextSlide() })), s.settings.navigationCursor && a.on("mousemove", function(t) { t.clientX < H(window).width() / 2 ? a.addClass("arrow-left").removeClass("arrow-right") : a.addClass("arrow-right").removeClass("arrow-left") }).on("click", function(t) { t.clientX < H(window).width() / 2 ? s.previousSlide() : s.nextSlide() }), s.settings.enableSwipe && F.hasClass("page-template-template-portfolio")) { var t = new Hammer(window),
                            e = "none";
                        /*hammertime.on('swipe', function(e){
                        					if ( ! $body.hasClass('opened-portfolio') ) {
                        						if ( e.deltaX < 0 ) {
                        							plugin.nextSlide();
                        						} else {
                        							plugin.previousSlide();
                        						}
                        					}
                        				});*/
                        t.get("pan").set({ threshold: 1, direction: Hammer.DIRECTION_HORIZONTAL }), t.on("panleft", function(t) {!F.hasClass("opened-portfolio") && d && (window.scrollTo(0, H(window).scrollTop() + t.distance / 3), e = "left") }).on("panright", function(t) {!F.hasClass("opened-portfolio") && d && (window.scrollTo(0, H(window).scrollTop() - t.distance / 3), e = "right") }).on("panend", function(t) { "left" == e ? s.nextSlide() : "right" == e && s.previousSlide(), e = "none" }) }
                    // Interate all images and make sure they are loaded or they load
                    l.eq(0).addClass("js-first-slide"),
                        // If there are no images, init the slider
                        a.find(s.settings.mediaSelector).each(function() { v.push(H(this)) });
                    var r = l.eq(0).find(s.settings.mediaSelector);
                    if (s.settings.preSlide && 0 < l.eq(0).find("#pre-video").length) window.supports_video_autoplay(function(t) { if (t && !detectFirefoxAndroid()) { var e = "<video muted playsinline " + ("true" === H("#pre-video").attr("data-loop") ? "loop" : "") + ' id="pre-video-obj"><source type="video/mp4" src="' + H("#pre-video").data("src") + '" /></video>',
                                i;
                            H("#pre-video").append(e), H("#pre-video-obj")[0].addEventListener("loadedmetadata", function() { C(!0) }) } else { r.css("display", "block"); var n = new Image;
                            n.onload = function() { R(), l.eq(0).addClass("silent-loaded"), C() }, n.src = D(r, H(window)) } });
                    else if ("noback" != l.eq(0).find(s.settings.mediaSelector).data("bg-small")) { var i = new Image;
                        i.onload = function() { R(), l.eq(0).addClass("silent-loaded"), C() }, i.src = D(r, H(window)) } else C()
                }
                /* --- PUBLIC METHODS --- */
                , s.scrollSlide = function(t) {
                    if (d) {
                        if (y) {
                            // Prepare based on scroll direction
                            if (y = !1, b = s.currentSlide, S < H(window).scrollTop()) {
                                // Next slide
                                if (s.currentSlide + 1 == s.totalSlides) {
                                    if (!s.settings.loop)
                                    //	bounceSlider(true);
                                        return void(y = !0);
                                    w = 0
                                } else w = s.currentSlide + 1;
                                _ = !0, TweenLite.to(l.eq(w), 0, { clip: "rect(0px, " + a.width() + "px, " + a.height() + "px, " + a.width() + "px)", overwrite: 1 })
                            } else {
                                // Previous slide
                                if (s.currentSlide - 1 == -1) { if (!s.settings.loop) return void L(!(y = !0));
                                    w = s.totalSlides - 1 } else w = s.currentSlide - 1;
                                _ = !1, TweenLite.to(l.eq(w), 0, { clip: "rect(0px, 0px, " + a.height() + "px, 0px)", overwrite: 1 })
                            }
                            x = H(window).width() - (H(window).scrollTop() - H(window).width() * s.currentSlide),
                                // Reset new current slide
                                l.eq(w).removeClass("animate").addClass("display by-scroll"), l.eq(w).css("zIndex", h++)
                        }
                        // Do actual "scrolling"
                        _ ? (x = H(window).width() - (H(window).scrollTop() - H(window).width() * b), TweenLite.to(l.eq(w), .5, { clip: "rect(0px, " + a.width() + "px, " + a.height() + "px, " + x + "px)", overwrite: 1 }), x <= H(window).width() / 2 ? (s.currentSlide = w, s.changeSlide(w)) : x >= H(window).width() && (y = !0, w = s.currentSlide, s.disableScroll(), d = !1, l.eq(w).css("zIndex", h++), setTimeout(function() { s.enableScroll(), d = !0 }, 500))) : (x = -1 * (H(window).scrollTop() - H(window).width() * s.currentSlide), TweenLite.to(l.eq(w), .5, { clip: "rect(0px, " + x + "px, " + a.height() + "px, 0px)", overwrite: 1 }), x >= H(window).width() / 2 ? (s.currentSlide = w, s.changeSlide(w, !0)) : x <= 0 && (y = !0, w = s.currentSlide, s.disableScroll(), d = !1, l.eq(w).css("zIndex", h++), setTimeout(function() { s.enableScroll(), d = !0 }, 500)))
                    }
                    S = H(window).scrollTop()
                }, s.changeSlide = function(t, e) {
                    s.settings.mouseWheelNavigation && 0 < H(".maskee-helper").length && 0 != t && (setTimeout(function() { H(".maskee-helper").addClass("remove"), setTimeout(function() { H(".maskee-helper").remove() }, 500) }, 2e3), H("body").off("scroll.icon"));
                    var e = void 0 !== e && e;
                    if (d) {
                        var i;
                        d = !1, s.disableScroll(), clearTimeout(p), null != (y ? a.find(".slide.display") : null) && (
                                // Reset slide properties
                                l.eq(t).removeClass("animate").addClass("display"), l.eq(t).css("zIndex", h++), e ? l.eq(t).css("clip", "rect(0px, 0px, " + a.height() + "px, 0px)") : l.eq(t).css("clip", "rect(0px, " + a.width() + "px, " + a.height() + "px, " + a.width() + "px)")), s.settings.fadeFirst && 0 == t ? (
                                // If first slide (ever) is set to fade
                                s.settings.fadeFirst = !1, l.eq(t).css("clip", "auto"), l.eq(t).animate({ opacity: 1 }, 500)) :
                            // Do actual animation after a really short timeout
                            setTimeout(function() { TweenLite.to(l.eq(t), .75, { clip: "rect(0px, " + a.width() + "px, " + a.height() + "px, 0px)", overwrite: 1 }), T && H("html, body").stop().animate({ scrollTop: t * H(window).width() }, 750) }, y ? 100 : 1);
                        var n = s.settings.preSlide ? t - 1 : t;
                        "none" != s.settings.pagination && (r.text(k(n + 1)), u.find(".active").removeClass("active"), u.children("span").eq(n).addClass("active")),
                            // Hide navigation buttons in certain conditions
                            s.settings.loop || (0 == s.currentSlide ? a.addClass("invisible-prevbtn") : s.currentSlide == s.totalSlides - 1 ? a.addClass("invisible-nextbtn") : a.removeClass("invisible-prevbtn").removeClass("invisible-nextbtn")), s.settings.preSlide && 0 == s.currentSlide ? a.addClass("invisible-pagination") : a.removeClass("invisible-pagination"),
                            // Reenable navigation after animation is over
                            setTimeout(function() { l.eq(s.currentSlide).find(".krown-button").removeClass("clicked"), l.each(function(t) { t != s.currentSlide && H(this).removeClass("display") }), y || (b = -1, y = !0), d = !0, s.enableScroll(), p = setTimeout(function() { l.eq(s.currentSlide).css("clip", "auto") }, 500), s.settings.onSlideChangeEnd(a, l.eq(s.currentSlide), s.currentSlide) }, s.settings.transitionSpeed),
                            // Last slide mouse wheel bounce
                            s.currentSlide + 1 == s.totalSlides && H(window).on("mousewheel.bounce", function(t) { 1 <= t.deltaX && L(!0) }),
                            // Video
                            s.videoSlide && 0 === s.currentSlide ? setTimeout(function() { s.videoObject.play() }, 250) : s.videoSlide && 0 !== s.currentSlide && setTimeout(function() { s.videoObject.pause() }, 250),
                            // Run "onSlideChangeStart" function
                            s.settings.onSlideChangeStart(a, l.eq(s.currentSlide), s.currentSlide)
                    }
                }, s.nextSlide = function() { if (!y && s.currentSlide > w) s.revertWheelNavigation(!1, s.currentSlide);
                    else if (d) { var t = !0;
                        s.currentSlide + 1 == s.totalSlides ? s.settings.loop ? s.currentSlide = 0 : (0 < s.settings.autoPlay && (clearInterval(c), s.settings.autoPlay = 0), t = !1) : s.currentSlide += 1, t ? s.changeSlide(s.currentSlide) : L(!0) } }, s.previousSlide = function() { if (!y && s.currentSlide < w) s.revertWheelNavigation(!1, s.currentSlide);
                    else if (d) { var t = !0;
                        s.currentSlide - 1 == -1 ? s.settings.loop ? s.currentSlide = s.totalSlides - 1 : (0 < s.settings.autoPlay && (clearInterval(c), s.settings.autoPlay = 0), t = !1) : s.currentSlide -= 1, t ? s.changeSlide(s.currentSlide, s.settings.backwardsNavigation) : L(!1) } }, s.destroySlides = function(t) { t.each(function() { H(this).remove() }), E() }, s.appendSlides = function(t) { H(t.get()).each(function() { 0 < s.totalSlides ? a.find(".slide:last-of-type").after(H(this)[0]) : a.prepend(H(this)[0]) }), z() }, s.prependSlides = function(t) { H(t.get()).each(function() { a.prepend(H(this)[0]) }), z() }, s.disableNavigation = function() { d = !1 }, s.enableNavigation = function() { d = !0 }, s.enableWheelNavigation = function() { T = !0, H(window).on("scroll.mwn", function(t) { T && s.scrollSlide(t) }), H(window).on("resize.mwn", function(t) { H.fixMobileResize() && !y && s.revertWheelNavigation(!0, s.currentSlide) }) }, s.disableWheelNavigation = function() { T = !1, H(window).off("scroll.mwn") }, s.revertWheelNavigation = function(t, e) { y ? t && TweenLite.to(window, 0, { scrollTo: { y: s.currentSlide * H(window).width() }, overwrite: 1 }) : (e == s.currentSlide ? w > s.currentSlide ? TweenLite.to(l.eq(w), .1, { clip: "rect(0px, " + a.width() + "px, " + a.height() + "px, " + a.width() + "px)", overwrite: 1 }) : TweenLite.to(l.eq(w), .1, { clip: "rect(0px, 0px, " + a.height() + "px, 0px)", overwrite: 1 }) : e < s.currentSlide && (TweenLite.to(l.eq(w), .1, { clip: "rect(0px, " + a.width() + "px, " + a.height() + "px, 0px)", overwrite: 1 }), s.currentSlide = w), y = !0) }, s.disableScroll = function() { window.addEventListener && window.addEventListener("DOMMouseScroll", W, !1), window.onwheel = W, window.onmousewheel = document.onmousewheel = W, window.ontouchmove = W, document.onkeydown = j }, s.enableScroll = function() { window.removeEventListener && window.removeEventListener("DOMMouseScroll", W, !1), window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, document.onkeydown = null }
                /* --- PRIVATE METHODS --- */
            ;
            var I = function(t) {
                    // This function applies the background image to a slide and when the first image is loaded it starts the slider
                    t.parent().addClass("init"), v.push(t.parent()), R(), t.parent().parent().hasClass("js-first-slide") && C(), ++f == m && s.settings.onAllImagesLoaded(a)
                },
                P = function(t) { 2 == t && C(!0) },
                C = function(t) {
                    // Bind mouse wheel events if set
                    if (s.videoSlide = t || !1, s.videoSlide && (s.videoObject = H("#pre-video-obj")[0]), s.settings.onFirstImageLoaded(a),
                        // Change first slide
                        d = !0, s.changeSlide(0), R(),
                        // Start autoplay if set
                        0 < s.settings.autoPlay && O(),
                        // Bind keyboard events if set
                        s.settings.keyboardNavigation && H(window).on("keydown", function(t) { return "39" == t.keyCode ? (s.nextSlide(), t.preventDefault(), !1) : "37" == t.keyCode ? (s.previousSlide(), t.preventDefault(), !1) : void 0 }), s.settings.mouseWheelNavigation) { s.enableWheelNavigation(), H("head").append('<style id="mwnhelper"></style>'); var e = H("#mwnhelper");
                        H(window).on("resize.mwnhelper", function(t) { H.fixMobileResize() && e.html("body.page-template-template-portfolio:after { height: " + (H(window).width() * (s.totalSlides - 1) + H(window).height()) + "px; }") }), e.html("body.page-template-template-portfolio:after { height: " + (H(window).width() * (s.totalSlides - 1) + H(window).height()) + "px; }") }
                    H(window).on("scroll.icon", function() { setTimeout(function() { H(".maskee-helper").addClass("remove"), setTimeout(function() { H(".maskee-helper").remove() }, 500) }, 2e3), H("body").off("scroll.icon") }),
                        // Init slider
                        s.settings.onSliderInit(a),
                        // After all this is done, silently load other images
                        l.each(function() { var t = H(this).find(s.settings.mediaSelector),
                                e;
                            H(this).hasClass("silent-loaded") || "noback" == t.data("bg-small") || ((new Image).src = D(t, H(window))) })
                },
                O = function() {
                    // This function init the autoplay interval as many times as needed
                    null != c && clearInterval(c), c = setInterval(function() { s.nextSlide() }, s.settings.autoPlay + s.settings.transitionSpeed)
                },
                k = function(t) { return t < 10 ? "0" + t : t },
                E = function() { l = a.children(".slide"), g = Array(), s.currentSlide = a.children(".display").index(), s.totalSlides = l.length, "none" != s.settings.pagination && (a.find(".maskee-pagination").html(""), "numeric" == s.settings.pagination ? A() : M()) },
                A = function() { a.find(".maskee-pagination.numeric").append('<span class="current">' + k(1) + '</span><span class="total">' + (s.settings.preSlide ? k(s.totalSlides - 1) : k(s.totalSlides)) + "</span>"), r = a.find(".maskee-pagination .current") },
                M = function() { u = a.find(".maskee-pagination.bullet"); for (var t = s.settings.preSlide ? s.totalSlides - 1 : s.totalSlides, e = 100 / t, i = 0; i < t; i++) u.append('<span style="width:' + e + '%">' + (i + 1) + "</span>");
                    /*$maskeePagination.children('span').on('click', function(){
                    				if ( ! $(this).hasClass('active') ) {

                    					if ( $(this).index() < $maskeePagination.children('span.active').index() && plugin.settings.backwardsNavigation ) {
                    						plugin.changeSlide($(this).index(), true);
                    					} else {
                    						plugin.changeSlide($(this).index());
                    					}

                    				}
                    			});*/
                },
                z = function() { a.find(s.settings.mediaSelector).each(function() { if (!H(this).hasClass("init")) { var t = H(this).find("img");
                            0 < t.length && (t[0].complete || 0 < t[0].naturalWidth ? I(t) : t.on("load", function() { I(t) })) } }), E() },
                L = function(t) {
                    // WIP (do it with false clip)
                },
                R = function() { for (var t = 0; t < v.length; t++) { var e = v[t]; if ("noback" != e.data("bg-small")) { var i = 'url("' + D(e, H(window)) + '")';
                            i != e.css("backgroundImage") && e.css("backgroundImage", i) } } },
                D = function(t, e) {
                    // sometimes i wonder why i try so hard :))
                    var i = window.devicePixelRatio <= 2 ? window.devicePixelRatio : 2,
                        n = e.width() < e.height() ? "portrait" : "lanscape",
                        r = "portrait" == n ? e.height() * i : e.width() * i,
                        o = "";
                    return o = "portrait" == n ? r <= 960 ? t.data("bg-small-p") : r <= 1140 ? t.data("bg-medium-p") : r <= 1480 ? t.data("bg-large-p") : t.data("bg-full-p") : r <= 960 ? t.data("bg-small") : r <= 1380 ? t.data("bg-medium") : r <= 1920 ? t.data("bg-large") : t.data("bg-full")
                };
            H(window).on("resize.imgs", function() { R() }).trigger("resize.imgs");
            // Scroll helpers
            var N = { 37: 1, 38: 1, 39: 1, 40: 1 },
                W = function(t) {
                    (t = t || window.event).preventDefault && t.preventDefault(), t.returnValue = !1 },
                j = function(t) { if (N[t.keyCode]) return W(t), !1 }
                /* --- START --- */
            ;
            s.init()
        }, H.fn.maskee = function(e) { return this.each(function() { if (void 0 === H(this).data("maskee")) { var t = new H.maskee(this, e);
                    H(this).data("maskee", t) } }) }
    }(jQuery), window.supports_video_autoplay = function(t) { var e = document.createElement("video");
        e.setAttribute("muted", "muted"), e.paused = !0; var i = "play" in e && e.play(); "function" == typeof t && t(!e.paused || "Promise" in window && i instanceof Promise) }
    /*! modernizr 3.5.0 (Custom Build) | MIT *
     * https://modernizr.com/download/?-touchevents-setclasses !*/
    ,
    function(i, h, t) {
        function l(t, e) { return typeof t === e }

        function e() { var t, e, i, n, r, o, s; for (var a in c)
                if (c.hasOwnProperty(a)) { if (t = [], (e = c[a]).name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                        for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase()); for (n = l(e.fn, "function") ? e.fn() : e.fn, r = 0; r < t.length; r++) 1 === (s = (o = t[r]).split(".")).length ? f[s[0]] = n : (!f[s[0]] || f[s[0]] instanceof Boolean || (f[s[0]] = new Boolean(f[s[0]])), f[s[0]][s[1]] = n), u.push((n ? "" : "no-") + s.join("-")) } }

        function n(t) { var e = m.className,
                i = f._config.classPrefix || ""; if (s && (e = e.baseVal), f._config.enableJSClass) { var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
                e = e.replace(n, "$1" + i + "js$2") }
            f._config.enableClasses && (e += " " + i + t.join(" " + i), s ? m.className.baseVal = e : m.className = e) }

        function d(t) { return "function" != typeof h.createElement ? h.createElement(t) : s ? h.createElementNS.call(h, "http://www.w3.org/2000/svg", t) : h.createElement.apply(h, arguments) }

        function p() { var t = h.body; return t || ((t = d(s ? "svg" : "body")).fake = !0), t }

        function r(t, e, i, n) { var r, o, s, a, l = "modernizr",
                u = d("div"),
                c = p(); if (parseInt(i, 10))
                for (; i--;)(s = d("div")).id = n ? n[i] : l + (i + 1), u.appendChild(s); return (r = d("style")).type = "text/css", r.id = "s" + l, (c.fake ? c : u).appendChild(r), c.appendChild(u), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(h.createTextNode(t)), u.id = l, c.fake && (c.style.background = "", c.style.overflow = "hidden", a = m.style.overflow, m.style.overflow = "hidden", m.appendChild(c)), o = e(u, t), c.fake ? (c.parentNode.removeChild(c), m.style.overflow = a, m.offsetHeight) : u.parentNode.removeChild(u), !!o } var u = [],
            c = [],
            o = { _version: "3.5.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function(t, e) { var i = this;
                    setTimeout(function() { e(i[t]) }, 0) }, addTest: function(t, e, i) { c.push({ name: t, fn: e, options: i }) }, addAsyncTest: function(t) { c.push({ name: null, fn: t }) } },
            f = function() {};
        f.prototype = o, f = new f; var m = h.documentElement,
            s = "svg" === m.nodeName.toLowerCase(),
            a = o._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
        o._prefixes = a; var g = o.testStyles = r;
        f.addTest("touchevents", function() { var e; if ("ontouchstart" in i || i.DocumentTouch && h instanceof DocumentTouch) e = !0;
            else { var t = ["@media (", a.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                g(t, function(t) { e = 9 === t.offsetTop }) } return e }), e(), n(u), delete o.addTest, delete o.addAsyncTest; for (var v = 0; v < f._q.length; v++) f._q[v]();
        i.Modernizr = f }(window, document),
    function(a) {
        "use strict";
        a.fn.fitVids = function(t) {
            var i = { customSelector: null, ignore: null };
            if (!document.getElementById("fit-vids-style")) {
                // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
                var e = document.head || document.getElementsByTagName("head")[0],
                    n = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                    r = document.createElement("div");
                r.innerHTML = '<p>x</p><style id="fit-vids-style">' + n + "</style>", e.appendChild(r.childNodes[1])
            }
            return t && a.extend(i, t), this.each(function() {
                var t = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
                i.customSelector && t.push(i.customSelector);
                var s = ".fitvidsignore";
                i.ignore && (s = s + ", " + i.ignore);
                var e = a(this).find(t.join(",")); // Disable FitVids on this video.
                ( // SwfObj conflict patch
                    e = (e = e.not("object object")).not(s)).each(function(t) { var e = a(this); if (!(0 < e.parents(s).length || "embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) { e.css("height") || e.css("width") || !isNaN(e.attr("height")) && !isNaN(e.attr("width")) || (e.attr("height", 9), e.attr("width", 16)); var i, n, r = ("object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height()) / (isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10)); if (!e.attr("id")) { var o = "fitvid" + t;
                            e.attr("id", o) }
                        e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * r + "%"), e.removeAttr("height").removeAttr("width") } })
            })
        }
    }(window.jQuery || window.Zepto),
    function(e, i) { "use strict"; "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(t) { i(e, t) }) : "object" == typeof module && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery) }(window, function(t, e) { "use strict";

        function i(u, r, c) {
            function i(t, o, s) { var a, l = "$()." + u + '("' + o + '")'; return t.each(function(t, e) { var i = c.data(e, u); if (i) { var n = i[o]; if (n && "_" != o.charAt(0)) { var r = n.apply(i, s);
                            a = void 0 === a ? r : a } else h(l + " is not a valid method") } else h(u + " not initialized. Cannot call methods, i.e. " + l) }), void 0 !== a ? a : t }

            function n(t, n) { t.each(function(t, e) { var i = c.data(e, u);
                    i ? (i.option(n), i._init()) : (i = new r(e, n), c.data(e, u, i)) }) }(c = c || e || t.jQuery) && (r.prototype.option || (r.prototype.option = function(t) { c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t)) }), c.fn[u] = function(t) { return "string" != typeof t ? (n(this, t), this) : i(this, t, s.call(arguments, 1)); var e }, o(c)) }

        function o(t) {!t || t && t.bridget || (t.bridget = i) } var s = Array.prototype.slice,
            n = t.console,
            h = void 0 === n ? function() {} : function(t) { n.error(t) }; return o(e || t.jQuery), i }),
    function(t, e) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e() }(this, function() {
        function t() {} var e = t.prototype; return e.on = function(t, e) { if (t && e) { var i = this._events = this._events || {},
                    n = i[t] = i[t] || []; return -1 == n.indexOf(e) && n.push(e), this } }, e.once = function(t, e) { if (t && e) { this.on(t, e); var i = this._onceEvents = this._onceEvents || {},
                    n; return (i[t] = i[t] || {})[e] = !0, this } }, e.off = function(t, e) { var i = this._events && this._events[t]; if (i && i.length) { var n = i.indexOf(e); return -1 != n && i.splice(n, 1), this } }, e.emitEvent = function(t, e) { var i = this._events && this._events[t]; if (i && i.length) { var n = 0,
                    r = i[n];
                e = e || []; for (var o = this._onceEvents && this._onceEvents[t]; r;) { var s = o && o[r];
                    s && (this.off(t, r), delete o[r]), r.apply(this, e), r = i[n += s ? 0 : 1] } return this } }, t }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("get-size/get-size", [], function() { return e() }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e() }(window, function() { "use strict";

        function v(t) { var e = parseFloat(t),
                i; return -1 == t.indexOf("%") && !isNaN(e) && e }

        function t() {}

        function y() { for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < S; e++) { var i;
                t[b[e]] = 0 } return t }

        function _(t) { var e = getComputedStyle(t); return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e }

        function x() { if (!r) { r = !0; var t = document.createElement("div");
                t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box"; var e = document.body || document.documentElement;
                e.appendChild(t); var i = _(t);
                n.isBoxSizeOuter = w = 200 == v(i.width), e.removeChild(t) } }

        function n(t) { if (x(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) { var e = _(t); if ("none" == e.display) return y(); var i = {};
                i.width = t.offsetWidth, i.height = t.offsetHeight; for (var n = i.isBorderBox = "border-box" == e.boxSizing, r = 0; r < S; r++) { var o = b[r],
                        s = e[o],
                        a = parseFloat(s);
                    i[o] = isNaN(a) ? 0 : a } var l = i.paddingLeft + i.paddingRight,
                    u = i.paddingTop + i.paddingBottom,
                    c = i.marginLeft + i.marginRight,
                    h = i.marginTop + i.marginBottom,
                    d = i.borderLeftWidth + i.borderRightWidth,
                    p = i.borderTopWidth + i.borderBottomWidth,
                    f = n && w,
                    m = v(e.width);!1 !== m && (i.width = m + (f ? 0 : l + d)); var g = v(e.height); return !1 !== g && (i.height = g + (f ? 0 : u + p)), i.innerWidth = i.width - (l + d), i.innerHeight = i.height - (u + p), i.outerWidth = i.width + c, i.outerHeight = i.height + h, i } } var w, i = "undefined" == typeof console ? t : function(t) { console.error(t) },
            b = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            S = b.length,
            r = !1; return n }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e() }(window, function() { "use strict"; var i = function() { var t = Element.prototype; if (t.matches) return "matches"; if (t.matchesSelector) return "matchesSelector"; for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) { var n, r = e[i] + "MatchesSelector"; if (t[r]) return r } }(); return function(t, e) { return t[i](e) } }),
    function(e, i) { "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(t) { return i(e, t) }) : "object" == typeof module && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector) }(window, function(u, o) { var c = { extend: function(t, e) { for (var i in e) t[i] = e[i]; return t }, modulo: function(t, e) { return (t % e + e) % e }, makeArray: function(t) { var e = []; if (Array.isArray(t)) e = t;
                    else if (t && "number" == typeof t.length)
                        for (var i = 0; i < t.length; i++) e.push(t[i]);
                    else e.push(t); return e }, removeFrom: function(t, e) { var i = t.indexOf(e); - 1 != i && t.splice(i, 1) }, getParent: function(t, e) { for (; t != document.body;)
                        if (t = t.parentNode, o(t, e)) return t }, getQueryElement: function(t) { return "string" == typeof t ? document.querySelector(t) : t }, handleEvent: function(t) { var e = "on" + t.type;
                    this[e] && this[e](t) }, filterFindElements: function(t, n) { t = c.makeArray(t); var r = []; return t.forEach(function(t) { if (t instanceof HTMLElement) { if (!n) return void r.push(t);
                            o(t, n) && r.push(t); for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++) r.push(e[i]) } }), r }, debounceMethod: function(t, e, n) { var r = t.prototype[e],
                        o = e + "Timeout";
                    t.prototype[e] = function() { var t = this[o];
                        t && clearTimeout(t); var e = arguments,
                            i = this;
                        this[o] = setTimeout(function() { r.apply(i, e), delete i[o] }, n || 100) } }, docReady: function(t) { "complete" == document.readyState ? t() : document.addEventListener("DOMContentLoaded", t) }, toDashed: function(t) { return t.replace(/(.)([A-Z])/g, function(t, e, i) { return e + "-" + i }).toLowerCase() } },
            h = u.console; return c.htmlInit = function(a, l) { c.docReady(function() { var t = c.toDashed(l),
                    r = "data-" + t,
                    e = document.querySelectorAll("[" + r + "]"),
                    i = document.querySelectorAll(".js-" + t),
                    n = c.makeArray(e).concat(c.makeArray(i)),
                    o = r + "-options",
                    s = u.jQuery;
                n.forEach(function(e) { var t, i = e.getAttribute(r) || e.getAttribute(o); try { t = i && JSON.parse(i) } catch (t) { return void(h && h.error("Error parsing " + r + " on " + e.className + ": " + t)) } var n = new a(e, t);
                    s && s.data(e, l, n) }) }) }, c }),
    function(t, e) { "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize)) }(window, function(t, e) { "use strict";

        function r(t) { for (var e in t) return !1; return !(e = null) }

        function i(t, e) { t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create()) }

        function n(t) { return t.replace(/([A-Z])/g, function(t) { return "-" + t.toLowerCase() }) } var o = document.documentElement.style,
            s = "string" == typeof o.transition ? "transition" : "WebkitTransition",
            a = "string" == typeof o.transform ? "transform" : "WebkitTransform",
            l = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[s],
            u = { transform: a, transition: s, transitionDuration: s + "Duration", transitionProperty: s + "Property", transitionDelay: s + "Delay" },
            c = i.prototype = Object.create(t.prototype);
        c.constructor = i, c._create = function() { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, c.handleEvent = function(t) { var e = "on" + t.type;
            this[e] && this[e](t) }, c.getSize = function() { this.size = e(this.element) }, c.css = function(t) { var e = this.element.style; for (var i in t) { var n;
                e[u[i] || i] = t[i] } }, c.getPosition = function() { var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                n = t[e ? "left" : "right"],
                r = t[i ? "top" : "bottom"],
                o = this.layout.size,
                s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * o.width : parseInt(n, 10),
                a = -1 != r.indexOf("%") ? parseFloat(r) / 100 * o.height : parseInt(r, 10);
            s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? o.paddingLeft : o.paddingRight, a -= i ? o.paddingTop : o.paddingBottom, this.position.x = s, this.position.y = a }, c.layoutPosition = function() { var t = this.layout.size,
                e = {},
                i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                r = i ? "paddingLeft" : "paddingRight",
                o = i ? "left" : "right",
                s = i ? "right" : "left",
                a = this.position.x + t[r];
            e[o] = this.getXValue(a), e[s] = ""; var l = n ? "paddingTop" : "paddingBottom",
                u = n ? "top" : "bottom",
                c = n ? "bottom" : "top",
                h = this.position.y + t[l];
            e[u] = this.getYValue(h), e[c] = "", this.css(e), this.emitEvent("layout", [this]) }, c.getXValue = function(t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px" }, c.getYValue = function(t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px" }, c._transitionTo = function(t, e) { this.getPosition(); var i = this.position.x,
                n = this.position.y,
                r = parseInt(t, 10),
                o = parseInt(e, 10),
                s = r === this.position.x && o === this.position.y; if (this.setPosition(t, e), !s || this.isTransitioning) { var a = t - i,
                    l = e - n,
                    u = {};
                u.transform = this.getTranslate(a, l), this.transition({ to: u, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }) } else this.layoutPosition() }, c.getTranslate = function(t, e) { var i, n; return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)" }, c.goTo = function(t, e) { this.setPosition(t, e), this.layoutPosition() }, c.moveTo = c._transitionTo, c.setPosition = function(t, e) { this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10) }, c._nonTransition = function(t) { for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this) }, c.transition = function(t) { if (parseFloat(this.layout.options.transitionDuration)) { var e = this._transn; for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i]; for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0); if (t.from) { this.css(t.from); var n = this.element.offsetHeight;
                    n = null }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0 } else this._nonTransition(t) }; var h = "opacity," + n(a);
        c.enableTransition = function() { if (!this.isTransitioning) { var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: h, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(l, this, !1) } }, c.onwebkitTransitionEnd = function(t) { this.ontransitionend(t) }, c.onotransitionend = function(t) { this.ontransitionend(t) }; var d = { "-webkit-transform": "transform" };
        c.ontransitionend = function(t) { if (t.target === this.element) { var e = this._transn,
                    i = d[t.propertyName] || t.propertyName,
                    n; if (delete e.ingProperties[i], r(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) e.onEnd[i].call(this), delete e.onEnd[i];
                this.emitEvent("transitionEnd", [this]) } }, c.disableTransition = function() { this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1 }, c._removeStyles = function(t) { var e = {}; for (var i in t) e[i] = "";
            this.css(e) }; var p = { transitionProperty: "", transitionDuration: "", transitionDelay: "" }; return c.removeTransitionStyles = function() { this.css(p) }, c.stagger = function(t) { t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms" }, c.removeElem = function() { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, c.remove = function() { return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() { this.removeElem() }), void this.hide()) : void this.removeElem() }, c.reveal = function() { delete this.isHidden, this.css({ display: "" }); var t = this.layout.options,
                e = {},
                i;
            e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e }) }, c.onRevealTransitionEnd = function() { this.isHidden || this.emitEvent("reveal") }, c.getHideRevealTransitionEndProperty = function(t) { var e = this.layout.options[t]; if (e.opacity) return "opacity"; for (var i in e) return i }, c.hide = function() { this.isHidden = !0, this.css({ display: "" }); var t = this.layout.options,
                e = {},
                i;
            e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e }) }, c.onHideTransitionEnd = function() { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, c.destroy = function() { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, i }),
    function(r, o) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(t, e, i, n) { return o(r, t, e, i, n) }) : "object" == typeof module && module.exports ? module.exports = o(r, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : r.Outlayer = o(r, r.EvEmitter, r.getSize, r.fizzyUIUtils, r.Outlayer.Item) }(window, function(t, e, o, s, n) { "use strict";

        function r(t, e) { var i = s.getQueryElement(t); if (i) { this.element = i, u && (this.$element = u(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(e); var n = ++h,
                    r;
                this.element.outlayerGUID = n, (d[n] = this)._create(), this._getOption("initLayout") && this.layout() } else l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t)) }

        function a(t) {
            function e() { t.apply(this, arguments) } return e.prototype = Object.create(t.prototype), e.prototype.constructor = e }

        function i(t) { if ("number" == typeof t) return t; var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                n = e && e[2],
                r; return i.length ? (i = parseFloat(i)) * (f[n] || 1) : 0 } var l = t.console,
            u = t.jQuery,
            c = function() {},
            h = 0,
            d = {};
        r.namespace = "outlayer", r.Item = n, r.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }; var p = r.prototype;
        s.extend(p, e.prototype), p.option = function(t) { s.extend(this.options, t) }, p._getOption = function(t) { var e = this.constructor.compatOptions[t]; return e && void 0 !== this.options[e] ? this.options[e] : this.options[t] }, r.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, p._create = function() { var t;
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize() }, p.reloadItems = function() { this.items = this._itemize(this.element.children) }, p._itemize = function(t) { for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], r = 0; r < e.length; r++) { var o, s = new i(e[r], this);
                n.push(s) } return n }, p._filterFindItemElements = function(t) { return s.filterFindElements(t, this.options.itemSelector) }, p.getItemElements = function() { return this.items.map(function(t) { return t.element }) }, p.layout = function() { this._resetLayout(), this._manageStamps(); var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0 }, p._init = p.layout, p._resetLayout = function() { this.getSize() }, p.getSize = function() { this.size = o(this.element) }, p._getMeasurement = function(t, e) { var i, n = this.options[t];
            this[t] = n ? ("string" == typeof n ? i = this.element.querySelector(n) : n instanceof HTMLElement && (i = n), i ? o(i)[e] : n) : 0 }, p.layoutItems = function(t, e) { t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout() }, p._getItemsForLayout = function(t) { return t.filter(function(t) { return !t.isIgnored }) }, p._layoutItems = function(t, i) { if (this._emitCompleteOnItems("layout", t), t && t.length) { var n = [];
                t.forEach(function(t) { var e = this._getItemLayoutPosition(t);
                    e.item = t, e.isInstant = i || t.isLayoutInstant, n.push(e) }, this), this._processLayoutQueue(n) } }, p._getItemLayoutPosition = function() { return { x: 0, y: 0 } }, p._processLayoutQueue = function(t) { this.updateStagger(), t.forEach(function(t, e) { this._positionItem(t.item, t.x, t.y, t.isInstant, e) }, this) }, p.updateStagger = function() { var t = this.options.stagger; return null == t ? void(this.stagger = 0) : (this.stagger = i(t), this.stagger) }, p._positionItem = function(t, e, i, n, r) { n ? t.goTo(e, i) : (t.stagger(r * this.stagger), t.moveTo(e, i)) }, p._postLayout = function() { this.resizeContainer() }, p.resizeContainer = function() { var t; if (this._getOption("resizeContainer")) { var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1)) } }, p._getContainerSize = c, p._setContainerMeasure = function(t, e) { if (void 0 !== t) { var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px" } }, p._emitCompleteOnItems = function(e, t) {
            function i() { r.dispatchEvent(e + "Complete", null, [t]) }

            function n() {++s == o && i() } var r = this,
                o = t.length; if (t && o) { var s = 0;
                t.forEach(function(t) { t.once(e, n) }) } else i() }, p.dispatchEvent = function(t, e, i) { var n = e ? [e].concat(i) : i; if (this.emitEvent(t, n), u)
                if (this.$element = this.$element || u(this.element), e) { var r = u.Event(e);
                    r.type = t, this.$element.trigger(r, i) } else this.$element.trigger(t, i) }, p.ignore = function(t) { var e = this.getItem(t);
            e && (e.isIgnored = !0) }, p.unignore = function(t) { var e = this.getItem(t);
            e && delete e.isIgnored }, p.stamp = function(t) {
            (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this)) }, p.unstamp = function(t) {
            (t = this._find(t)) && t.forEach(function(t) { s.removeFrom(this.stamps, t), this.unignore(t) }, this) }, p._find = function(t) { return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = s.makeArray(t)) : void 0 }, p._manageStamps = function() { this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this)) }, p._getBoundingRect = function() { var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) } }, p._manageStamp = c, p._getElementOffset = function(t) { var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                n = o(t),
                r; return { left: e.left - i.left - n.marginLeft, top: e.top - i.top - n.marginTop, right: i.right - e.right - n.marginRight, bottom: i.bottom - e.bottom - n.marginBottom } }, p.handleEvent = s.handleEvent, p.bindResize = function() { t.addEventListener("resize", this), this.isResizeBound = !0 }, p.unbindResize = function() { t.removeEventListener("resize", this), this.isResizeBound = !1 }, p.onresize = function() { this.resize() }, s.debounceMethod(r, "onresize", 100), p.resize = function() { this.isResizeBound && this.needsResizeLayout() && this.layout() }, p.needsResizeLayout = function() { var t = o(this.element),
                e; return this.size && t && t.innerWidth !== this.size.innerWidth }, p.addItems = function(t) { var e = this._itemize(t); return e.length && (this.items = this.items.concat(e)), e }, p.appended = function(t) { var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e)) }, p.prepended = function(t) { var e = this._itemize(t); if (e.length) { var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i) } }, p.reveal = function(t) { if (this._emitCompleteOnItems("reveal", t), t && t.length) { var i = this.updateStagger();
                t.forEach(function(t, e) { t.stagger(e * i), t.reveal() }) } }, p.hide = function(t) { if (this._emitCompleteOnItems("hide", t), t && t.length) { var i = this.updateStagger();
                t.forEach(function(t, e) { t.stagger(e * i), t.hide() }) } }, p.revealItemElements = function(t) { var e = this.getItems(t);
            this.reveal(e) }, p.hideItemElements = function(t) { var e = this.getItems(t);
            this.hide(e) }, p.getItem = function(t) { for (var e = 0; e < this.items.length; e++) { var i = this.items[e]; if (i.element == t) return i } }, p.getItems = function(t) { t = s.makeArray(t); var i = []; return t.forEach(function(t) { var e = this.getItem(t);
                e && i.push(e) }, this), i }, p.remove = function(t) { var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) { t.remove(), s.removeFrom(this.items, t) }, this) }, p.destroy = function() { var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) { t.destroy() }), this.unbindResize(); var e = this.element.outlayerGUID;
            delete d[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace) }, r.data = function(t) { var e = (t = s.getQueryElement(t)) && t.outlayerGUID; return e && d[e] }, r.create = function(t, e) { var i = a(r); return i.defaults = s.extend({}, r.defaults), s.extend(i.defaults, e), i.compatOptions = s.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = a(n), s.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i }; var f = { ms: 1, s: 1e3 }; return r.Item = n, r }),
    function(t, e) { "function" == typeof define && define.amd ? define("isotope/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer)) }(window, function(t) { "use strict";

        function e() { t.Item.apply(this, arguments) } var i = e.prototype = Object.create(t.Item.prototype),
            n = i._create;
        i._create = function() { this.id = this.layout.itemGUID++, n.call(this), this.sortData = {} }, i.updateSortData = function() { if (!this.isIgnored) { this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random(); var t = this.layout.options.getSortData,
                    e = this.layout._sorters; for (var i in t) { var n = e[i];
                    this.sortData[i] = n(this.element, this) } } }; var r = i.destroy; return i.destroy = function() { r.apply(this, arguments), this.css({ display: "" }) }, e }),
    function(t, e) { "function" == typeof define && define.amd ? define("isotope/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)) }(window, function(i, e) { "use strict";

        function n(t) {
            (this.isotope = t) && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size) } var r = n.prototype,
            t; return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(t) { r[t] = function() { return e.prototype[t].apply(this.isotope, arguments) } }), r.needsVerticalResizeLayout = function() { var t = i(this.isotope.element),
                e; return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight }, r._getMeasurement = function() { this.isotope._getMeasurement.apply(this, arguments) }, r.getColumnWidth = function() { this.getSegmentSize("column", "Width") }, r.getRowHeight = function() { this.getSegmentSize("row", "Height") }, r.getSegmentSize = function(t, e) { var i = t + e,
                n = "outer" + e; if (this._getMeasurement(i, n), !this[i]) { var r = this.getFirstItemSize();
                this[i] = r && r[n] || this.isotope.size["inner" + e] } }, r.getFirstItemSize = function() { var t = this.isotope.filteredItems[0]; return t && t.element && i(t.element) }, r.layout = function() { this.isotope.layout.apply(this.isotope, arguments) }, r.getSize = function() { this.isotope.getSize(), this.size = this.isotope.size }, n.modes = {}, n.create = function(t, e) {
            function i() { n.apply(this, arguments) } return i.prototype = Object.create(r), i.prototype.constructor = i, e && (i.options = e), i.prototype.namespace = t, n.modes[t] = i }, n }),
    function(t, e) { "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize) }(window, function(t, h) { var e = t.create("masonry"); return e.compatOptions.fitWidth = "isFitWidth", e.prototype._resetLayout = function() { this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = []; for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0 }, e.prototype.measureColumns = function() { if (this.getContainerWidth(), !this.columnWidth) { var t = this.items[0],
                    e = t && t.element;
                this.columnWidth = e && h(e).outerWidth || this.containerWidth } var i = this.columnWidth += this.gutter,
                n = this.containerWidth + this.gutter,
                r = n / i,
                o = i - n % i,
                s;
            r = Math[o && o < 1 ? "round" : "floor"](r), this.cols = Math.max(r, 1) }, e.prototype.getContainerWidth = function() { var t, e = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                i = h(e);
            this.containerWidth = i && i.innerWidth }, e.prototype._getItemLayoutPosition = function(t) { t.getSize(); var e = t.size.outerWidth % this.columnWidth,
                i, n = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols); for (var r = this._getColGroup(n), o = Math.min.apply(Math, r), s = r.indexOf(o), a = { x: this.columnWidth * s, y: o }, l = o + t.size.outerHeight, u = this.cols + 1 - r.length, c = 0; c < u; c++) this.colYs[s + c] = l; return a }, e.prototype._getColGroup = function(t) { if (t < 2) return this.colYs; for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) { var r = this.colYs.slice(n, n + t);
                e[n] = Math.max.apply(Math, r) } return e }, e.prototype._manageStamp = function(t) { var e = h(t),
                i = this._getElementOffset(t),
                n, r = this._getOption("originLeft") ? i.left : i.right,
                o = r + e.outerWidth,
                s = Math.floor(r / this.columnWidth);
            s = Math.max(0, s); var a = Math.floor(o / this.columnWidth);
            a -= o % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a); for (var l, u = (this._getOption("originTop") ? i.top : i.bottom) + e.outerHeight, c = s; c <= a; c++) this.colYs[c] = Math.max(u, this.colYs[c]) }, e.prototype._getContainerSize = function() { this.maxY = Math.max.apply(Math, this.colYs); var t = { height: this.maxY }; return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t }, e.prototype._getContainerFitWidth = function() { for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++; return (this.cols - t) * this.columnWidth - this.gutter }, e.prototype.needsResizeLayout = function() { var t = this.containerWidth; return this.getContainerWidth(), t != this.containerWidth }, e }),
    function(t, e) { "function" == typeof define && define.amd ? define("isotope/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry) }(window, function(t, e) { "use strict"; var i = t.create("masonry"),
            n = i.prototype,
            r = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 }; for (var o in e.prototype) r[o] || (n[o] = e.prototype[o]); var s = n.measureColumns;
        n.measureColumns = function() { this.items = this.isotope.filteredItems, s.call(this) }; var a = n._getOption; return n._getOption = function(t) { return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments) }, i }),
    function(t, e) { "function" == typeof define && define.amd ? define("isotope/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) { "use strict"; var e = t.create("fitRows"),
            i = e.prototype; return i._resetLayout = function() { this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth") }, i._getItemLayoutPosition = function(t) { t.getSize(); var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY); var n = { x: this.x, y: this.y }; return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n }, i._getContainerSize = function() { return { height: this.maxY } }, e }),
    function(t, e) { "function" == typeof define && define.amd ? define("isotope/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) { "use strict"; var e = t.create("vertical", { horizontalAlignment: 0 }),
            i = e.prototype; return i._resetLayout = function() { this.y = 0 }, i._getItemLayoutPosition = function(t) { t.getSize(); var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y; return this.y += t.size.outerHeight, { x: e, y: i } }, i._getContainerSize = function() { return { height: this.y } }, e }),
    function(s, a) { "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "./item", "./layout-mode", "./layout-modes/masonry", "./layout-modes/fit-rows", "./layout-modes/vertical"], function(t, e, i, n, r, o) { return a(s, t, e, i, n, r, o) }) : "object" == typeof module && module.exports ? module.exports = a(s, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : s.Isotope = a(s, s.Outlayer, s.getSize, s.matchesSelector, s.fizzyUIUtils, s.Isotope.Item, s.Isotope.LayoutMode) }(window, function(t, n, e, i, o, r, s) {
        function a(l, u) { return function(t, e) { for (var i = 0; i < l.length; i++) { var n = l[i],
                        r = t.sortData[n],
                        o = e.sortData[n],
                        s, a; if (o < r || r < o) return (o < r ? 1 : -1) * ((void 0 !== u[n] ? u[n] : u) ? 1 : -1) } return 0 } }
        var l = t.jQuery,
            u = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return t.replace(/^\s+|\s+$/g, "") },
            c = n.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
        c.Item = r, c.LayoutMode = s;
        var h = c.prototype;
        h._create = function() { for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), n.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], s.modes) this._initLayoutMode(t) }, h.reloadItems = function() { this.itemGUID = 0, n.prototype.reloadItems.call(this) }, h._itemize = function() { for (var t = n.prototype._itemize.apply(this, arguments), e = 0; e < t.length; e++) { var i;
                t[e].id = this.itemGUID++ } return this._updateItemsSortData(t), t }, h._initLayoutMode = function(t) { var e = s.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this) }, h.layout = function() { return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout() }, h._layout = function() { var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0 }, h.arrange = function(t) { this.option(t), this._getIsInstant(); var e = this._filter(this.items);
            this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout() }, h._init = h.arrange, h._hideReveal = function(t) { this.reveal(t.needReveal), this.hide(t.needHide) }, h._getIsInstant = function() { var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited; return this._isInstant = e }, h._bindArrangeComplete = function() {
            function t() { e && i && n && r.dispatchEvent("arrangeComplete", null, [r.filteredItems]) } var e, i, n, r = this;
            this.once("layoutComplete", function() { e = !0, t() }), this.once("hideComplete", function() { i = !0, t() }), this.once("revealComplete", function() { n = !0, t() }) }, h._filter = function(t) { var e = this.options.filter;
            e = e || "*"; for (var i = [], n = [], r = [], o = this._getFilterTest(e), s = 0; s < t.length; s++) { var a = t[s]; if (!a.isIgnored) { var l = o(a);
                    l && i.push(a), l && a.isHidden ? n.push(a) : l || a.isHidden || r.push(a) } } return { matches: i, needReveal: n, needHide: r } }, h._getFilterTest = function(e) { return l && this.options.isJQueryFiltering ? function(t) { return l(t.element).is(e) } : "function" == typeof e ? function(t) { return e(t.element) } : function(t) { return i(t.element, e) } }, h.updateSortData = function(t) {
            var e;
            e = t ? (t = o.makeArray(t),
                this.getItems(t)) : this.items, this._getSorters(), this._updateItemsSortData(e)
        }, h._getSorters = function() { var t = this.options.getSortData; for (var e in t) { var i = t[e];
                this._sorters[e] = d(i) } }, h._updateItemsSortData = function(t) { for (var e = t && t.length, i = 0; e && i < e; i++) { var n;
                t[i].updateSortData() } };
        var d = function() {
            function t(t) { if ("string" != typeof t) return t; var e = u(t).split(" "),
                    i = e[0],
                    n = i.match(/^\[(.+)\]$/),
                    r, o = a(n && n[1], i),
                    s = c.sortDataParsers[e[1]]; return t = s ? function(t) { return t && s(o(t)) } : function(t) { return t && o(t) } }

            function a(e, i) { return e ? function(t) { return t.getAttribute(e) } : function(t) { var e = t.querySelector(i); return e && e.textContent } } return t }();
        c.sortDataParsers = { parseInt: function(t) { return parseInt(t, 10) }, parseFloat: function(t) { return parseFloat(t) } }, h._sort = function() { var t = this.options.sortBy; if (t) { var e, i = a([].concat.apply(t, this.sortHistory), this.options.sortAscending);
                this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t) } }, h._mode = function() { var t = this.options.layoutMode,
                e = this.modes[t]; if (!e) throw new Error("No layout mode: " + t); return e.options = this.options[t], e }, h._resetLayout = function() { n.prototype._resetLayout.call(this), this._mode()._resetLayout() }, h._getItemLayoutPosition = function(t) { return this._mode()._getItemLayoutPosition(t) }, h._manageStamp = function(t) { this._mode()._manageStamp(t) }, h._getContainerSize = function() { return this._mode()._getContainerSize() }, h.needsResizeLayout = function() { return this._mode().needsResizeLayout() }, h.appended = function(t) { var e = this.addItems(t); if (e.length) { var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i) } }, h.prepended = function(t) { var e = this._itemize(t); if (e.length) { this._resetLayout(), this._manageStamps(); var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items) } }, h._filterRevealAdded = function(t) { var e = this._filter(t); return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches }, h.insert = function(t) { var e = this.addItems(t); if (e.length) { var i, n, r = e.length; for (i = 0; i < r; i++) n = e[i], this.element.appendChild(n.element); var o = this._filter(e).matches; for (i = 0; i < r; i++) e[i].isLayoutInstant = !0; for (this.arrange(), i = 0; i < r; i++) delete e[i].isLayoutInstant;
                this.reveal(o) } };
        var p = h.remove;
        return h.remove = function(t) { t = o.makeArray(t); var e = this.getItems(t);
            p.call(this, t); for (var i = e && e.length, n = 0; i && n < i; n++) { var r = e[n];
                o.removeFrom(this.filteredItems, r) } }, h.shuffle = function() { for (var t = 0; t < this.items.length; t++) { var e;
                this.items[t].sortData.random = Math.random() }
            this.options.sortBy = "random", this._sort(), this._layout() }, h._noTransition = function(t, e) { var i = this.options.transitionDuration;
            this.options.transitionDuration = 0; var n = t.apply(this, e); return this.options.transitionDuration = i, n }, h.getFilteredItemElements = function() { return this.filteredItems.map(function(t) { return t.element }) }, c
    }),
    /*!
     * VERSION: 1.18.5
     * DATE: 2016-05-24
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     * 
     * @author: Jack Doyle, jack@greensock.com
     */
    function(p, f) {
        "use strict";
        var m = {},
            g = p.GreenSockGlobals = p.GreenSockGlobals || p;
        if (!g.TweenLite) {
            var v = function(t) { var e = t.split("."),
                        i = g,
                        n; for (n = 0; n < e.length; n++) i[e[n]] = i = i[e[n]] || {}; return i },
                h = v("com.greensock"),
                y = 1e-10,
                l = function(t) { //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
                    var e = [],
                        i = t.length,
                        n;
                    for (n = 0; n !== i; e.push(t[n++]));
                    return e
                },
                n = function() {},
                _ = (o = Object.prototype.toString, s = o.call([]), function(t) { return null != t && (t instanceof Array || "object" == typeof t && !!t.push && o.call(t) === s) }),
                t, e, i, x, w, b = {},
                /**
                 * @constructor
                 * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
                 * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
                 * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
                 * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
                 *
                 * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
                 * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
                 * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
                 * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
                 * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
                 * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
                 * sandbox the banner one like:
                 *
                 * <script>
                 *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
                 * </script>
                 * <script src="js/greensock/v1.7/TweenMax.js"></script>
                 * <script>
                 *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
                 * </script>
                 * <script src="js/greensock/v1.6/TweenMax.js"></script>
                 * <script>
                 *     gs.TweenLite.to(...); //would use v1.7
                 *     TweenLite.to(...); //would use v1.6
                 * </script>
                 *
                 * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
                 * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
                 * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
                 * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
                 */
                S = function(l, u, c, h) {
                    this.sc = b[l] ? b[l].sc : [], ( //subclasses
                        b[l] = this).gsClass = null, this.func = c;
                    var d = [];
                    this.check = function(t) {
                        for (var e = u.length, i = e, n, r, o, s, a; - 1 < --e;)(n = b[u[e]] || new S(u[e], [])).gsClass ? (d[e] = n.gsClass, i--) : t && n.sc.push(this);
                        if (0 === i && c) {
                            //exports to multiple environments
                            if (o = (r = ("com.greensock." + l).split(".")).pop(), s = v(r.join("."))[o] = this.gsClass = c.apply(c, d), h)
                                if (g[o] = s, !( //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
                                        a = "undefined" != typeof module && module.exports) && "function" == typeof define && define.amd) //AMD
                                    define((p.GreenSockAMDPath ? p.GreenSockAMDPath + "/" : "") + l.split(".").pop(), [], function() { return s });
                                else if (a) //node
                                if (l === f)
                                    for (e in module.exports = m[f] = s, m) s[e] = m[e];
                                else m[f] && (m[f][o] = s);
                            for (e = 0; e < this.sc.length; e++) this.sc[e].check()
                        }
                    }, this.check(!0)
                },
                //used to create Definition instances (which basically registers a class that has dependencies).
                r = p._gsDefine = function(t, e, i, n) { return new S(t, e, i, n) },
                //a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
                d = h._class = function(t, e, i) { return e = e || function() {}, r(t, [], function() { return e }, i), e },
                o, s;
            r.globals = g;
            /*
             * ----------------------------------------------------------------
             * Ease
             * ----------------------------------------------------------------
             */
            var a = [0, 0, 1, 1],
                u = [],
                c = d("easing.Ease", function(t, e, i, n) { this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? a.concat(e) : a }, !0),
                T = c.map = {},
                I = c.register = function(t, e, i, n) { for (var r = e.split(","), o = r.length, s = (i || "easeIn,easeOut,easeInOut").split(","), a, l, u, c; - 1 < --o;)
                        for (l = r[o], a = n ? d("easing." + l, null, !0) : h.easing[l] || {}, u = s.length; - 1 < --u;) c = s[u], T[l + "." + c] = T[c + l] = a[c] = t.getRatio ? t : t[c] || new t };
            for ((i = c.prototype)._calcEnd = !1, i.getRatio = function(t) { if (this._func) return this._params[0] = t, this._func.apply(null, this._params); var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t); return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2 }, e = (
                    //create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
                    t = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --e;) i = t[e] + ",Power" + e, I(new c(null, null, 1, e), i, "easeOut", !0), I(new c(null, null, 2, e), i, "easeIn" + (0 === e ? ",easeNone" : "")), I(new c(null, null, 3, e), i, "easeInOut");
            T.linear = h.easing.Linear.easeIn, T.swing = h.easing.Quad.easeInOut; //for jQuery folks
            /*
             * ----------------------------------------------------------------
             * EventDispatcher
             * ----------------------------------------------------------------
             */
            var P = d("events.EventDispatcher", function(t) { this._listeners = {}, this._eventTarget = t || this });
            (i = P.prototype).addEventListener = function(t, e, i, n, r) { r = r || 0; var o = this._listeners[t],
                    s = 0,
                    a, l; for (this !== x || w || x.wake(), null == o && (this._listeners[t] = o = []), l = o.length; - 1 < --l;)(a = o[l]).c === e && a.s === i ? o.splice(l, 1) : 0 === s && a.pr < r && (s = l + 1);
                o.splice(s, 0, { c: e, s: i, up: n, pr: r }) }, i.removeEventListener = function(t, e) { var i = this._listeners[t],
                    n; if (i)
                    for (n = i.length; - 1 < --n;)
                        if (i[n].c === e) return void i.splice(n, 1) }, i.dispatchEvent = function(t) { var e = this._listeners[t],
                    i, n, r; if (e)
                    for (i = e.length, n = this._eventTarget; - 1 < --i;)(r = e[i]) && (r.up ? r.c.call(r.s || n, { type: t, target: n }) : r.c.call(r.s || n)) };
            /*
             * ----------------------------------------------------------------
             * Ticker
             * ----------------------------------------------------------------
             */
            var C = p.requestAnimationFrame,
                O = p.cancelAnimationFrame,
                k = Date.now || function() { return (new Date).getTime() },
                E = k();
            //now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
            for (e = (t = ["ms", "moz", "webkit", "o"]).length; - 1 < --e && !C;) C = p[t[e] + "RequestAnimationFrame"], O = p[t[e] + "CancelAnimationFrame"] || p[t[e] + "CancelRequestAnimationFrame"];
            d("Ticker", function(t, e) {
                var r = this,
                    o = k(),
                    i = !(!1 === e || !C) && "auto",
                    s = 500,
                    a = 33,
                    l = "tick", //helps reduce gc burden
                    u, c, h, d, p, f = function(t) {
                        var e = k() - E,
                            i, n;
                        s < e && (o += e - a), E += e, r.time = (E - o) / 1e3, i = r.time - p, (!u || 0 < i || !0 === t) && (r.frame++, p += i + (d <= i ? .004 : d - i), n = !0), !0 !== t && ( //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
                            h = c(f)), n && r.dispatchEvent(l)
                    };
                P.call(r), r.time = r.frame = 0, r.tick = function() { f(!0) }, r.lagSmoothing = function(t, e) {
                        s = t || 1e10, //zero should be interpreted as basically unlimited
                            a = Math.min(e, s, 0)
                    }, r.sleep = function() { null != h && (i && O ? O(h) : clearTimeout(h), c = n, h = null, r === x && (w = !1)) }, r.wake = function(t) {
                        null !== h ? r.sleep() : t ? o += -E + (E = k()) : 10 < r.frame && ( //don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
                            E = k() - s + 5), c = 0 === u ? n : i && C ? C : function(t) { return setTimeout(t, 1e3 * (p - r.time) + 1 | 0) }, r === x && (w = !0), f(2)
                    }, r.fps = function(t) { if (!arguments.length) return u;
                        d = 1 / ((u = t) || 60), p = this.time + d, r.wake() }, r.useRAF = function(t) { if (!arguments.length) return i;
                        r.sleep(), i = t, r.fps(u) }, r.fps(t),
                    //a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
                    setTimeout(function() { "auto" === i && r.frame < 5 && "hidden" !== document.visibilityState && r.useRAF(!1) }, 1500)
            }), (i = h.Ticker.prototype = new h.events.EventDispatcher).constructor = h.Ticker;
            /*
             * ----------------------------------------------------------------
             * Animation
             * ----------------------------------------------------------------
             */
            var A = d("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, G) {
                    w || //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
                        x.wake();
                    var i = this.vars.useFrames ? $ : G;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            x = A.ticker = new h.Ticker, (i = A.prototype)._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1;
            //some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
            var M = function() { w && 2e3 < k() - E && x.wake(), setTimeout(M, 2e3) };
            M(), i.play = function(t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, i.pause = function(t, e) { return null != t && this.seek(t, e), this.paused(!0) }, i.resume = function(t, e) { return null != t && this.seek(t, e), this.paused(!1) }, i.seek = function(t, e) { return this.totalTime(Number(t), !1 !== e) }, i.restart = function(t, e) { return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0) }, i.reverse = function(t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, i.render = function(t, e, i) {
                    //stub - we override this method in subclasses.
                }, i.invalidate = function() { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this }, i.isActive = function() {
                    var t = this._timeline, //the 2 root timelines won't have a _timeline; they're always active.
                        e = this._startTime,
                        i;
                    return !t || !this._gc && !this._paused && t.isActive() && (i = t.rawTime()) >= e && i < e + this.totalDuration() / this._timeScale
                }, i._enabled = function(t, e) { return w || x.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1 }, i._kill = function(t, e) { return this._enabled(!1, !1) }, i.kill = function(t, e) { return this._kill(t, e), this }, i._uncache = function(t) { for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline; return this }, i._swapSelfInParams = function(t) { for (var e = t.length, i = t.concat(); - 1 < --e;) "{self}" === t[e] && (i[e] = this); return i }, i._callback = function(t) { var e = this.vars;
                    e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || u) },
                //----Animation getters/setters --------------------------------------------------------
                i.eventCallback = function(t, e, i, n) { if ("on" === (t || "").substr(0, 2)) { var r = this.vars; if (1 === arguments.length) return r[t];
                        null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = _(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e) } return this }, i.delay = function(t) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay }, i.duration = function(t) {
                    return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
                        this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                }, i.totalDuration = function(t) { return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration }, i.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time }, i.totalTime = function(t, e, i) {
                    if (w || x.wake(), !arguments.length) return this._totalTime;
                    if (this._timeline) {
                        if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                            this._dirty && this.totalDuration();
                            var n = this._totalDuration,
                                r = this._timeline;
                            //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
                            if (n < t && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
                                this._uncache(!1), r._timeline)
                                for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                        }
                        this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (N.length && K(), this.render(t, e, !1), N.length && //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
                            K())
                    }
                    return this
                }, i.progress = i.totalProgress = function(t, e) { var i = this.duration(); return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio }, i.startTime = function(t) { return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime }, i.endTime = function(t) { return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale }, i.timeScale = function(t) {
                    if (!arguments.length) return this._timeScale; //can't allow zero because it'll throw the math off
                    if (t = t || y, this._timeline && this._timeline.smoothChildTiming) { var e = this._pauseTime,
                            i = e || 0 === e ? e : this._timeline.totalTime();
                        this._startTime = i - (i - this._startTime) * this._timeScale / t }
                    return this._timeScale = t, this._uncache(!1)
                }, i.reversed = function(t) { return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, i.paused = function(t) { if (!arguments.length) return this._paused; var e = this._timeline,
                        i, n; return t != this._paused && e && (w || t || x.wake(), n = (i = e.rawTime()) - this._pauseTime, !t && e.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && (i = e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, this.render(i, i === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this };
            /*
             * ----------------------------------------------------------------
             * SimpleTimeline
             * ----------------------------------------------------------------
             */
            var z = d("core.SimpleTimeline", function(t) { A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0 });
            (i = z.prototype = new A).constructor = z, i.kill()._gc = !1, i._first = i._last = i._recent = null, i._sortChildren = !1, i.add = i.insert = function(t, e, i, n) {
                var r, o;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && ( //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
                        t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                    for (o = t._startTime; r && r._startTime > o;) r = r._prev;
                return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
            }, i._remove = function(t, e) { return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }, i.render = function(t, e, i) {
                var n = this._first,
                    r;
                for (this._totalTime = this._time = this._rawPrevTime = t; n;) r = n._next, //record it here because the value could change after rendering...
                    (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = r
            }, i.rawTime = function() { return w || x.wake(), this._totalTime };
            /*
             * ----------------------------------------------------------------
             * TweenLite
             * ----------------------------------------------------------------
             */
            var L = d("TweenLite", function(t, e, i) { //speed optimization (avoid prototype lookup on this "hot" method)
                    if (A.call(this, e, i), this.render = L.prototype.render, null == t) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : L.selector(t) || t;
                    var n = t.jquery || t.length && t !== p && t[0] && (t[0] === p || t[0].nodeType && t[0].style && !t.nodeType),
                        r = this.vars.overwrite,
                        o, s, a;
                    if (this._overwrite = r = null == r ? Q[L.defaultOverwrite] : "number" == typeof r ? r >> 0 : Q[r], (n || t instanceof Array || t.push && _(t)) && "number" != typeof t[0])
                        for (this._targets = a = l(t), //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
                            this._propLookup = [], this._siblings = [], o = 0; o < a.length; o++)(s = a[o]) ? "string" != typeof s ? s.length && s !== p && s[0] && (s[0] === p || s[0].nodeType && s[0].style && !s.nodeType) ? ( //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
                                a.splice(o--, 1), this._targets = a = a.concat(l(s))) : (this._siblings[o] = J(s, this, !1), 1 === r && 1 < this._siblings[o].length && et(s, this, null, 1, this._siblings[o])) : //in case it's an array of strings
                            "string" == typeof(s = a[o--] = L.selector(s)) && a.splice(o + 1, 1) : a.splice(o--, 1);
                    else this._propLookup = {}, this._siblings = J(t, this, !1), 1 === r && 1 < this._siblings.length && et(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -y, //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
                        this.render(Math.min(0, -this._delay)))
                }, !0),
                R = function(t) {
                    return t && t.length && t !== p && t[0] && (t[0] === p || t[0].nodeType && t[0].style && !t.nodeType); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
                },
                D = function(t, e) {
                    var i = {},
                        n;
                    for (n in t) V[n] || n in e && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!B[n] || B[n] && B[n]._autoCSS) || ( //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
                        i[n] = t[n], delete t[n]);
                    t.css = i
                };
            (i = L.prototype = new A).constructor = L, i.kill()._gc = !1,
                //----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------
                i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = i._lazy = !1, L.version = "1.18.5", L.defaultEase = i._ease = new c(null, null, 1, 1), L.defaultOverwrite = "auto", L.ticker = x, L.autoSleep = 120, L.lagSmoothing = function(t, e) { x.lagSmoothing(t, e) }, L.selector = p.$ || p.jQuery || function(t) { var e = p.$ || p.jQuery; return e ? (L.selector = e)(t) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t) };
            var N = [],
                W = {},
                j = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                //_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
                H = function(t) {
                    for (var e = this._firstPT, i = 1e-6, n; e;) n = e.blob ? t ? this.join("") : this.start : e.c * t + e.s, e.r ? n = Math.round(n) : n < i && -i < n && ( //prevents issues with converting very small numbers to strings in the browser
                        n = 0), e.f ? e.fp ? e.t[e.p](e.fp, n) : e.t[e.p](n) : e.t[e.p] = n, e = e._next
                },
                //compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
                F = function(t, e, i, n) {
                    var r = [t, e],
                        o = 0,
                        s = "",
                        a = 0,
                        l, u, c, h, d, p, f;
                    for (r.start = t, i && (i(r), //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
                            t = r[0], e = r[1]), r.length = 0, l = t.match(j) || [], u = e.match(j) || [], n && (n._next = null, n.blob = 1, r._firstPT = n), d = u.length, h = 0; h < d; h++) f = u[h], s += (p = e.substr(o, e.indexOf(f, o) - o)) || !h ? p : ",", //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                        o += p.length, a ? //sense rgba() values and round them.
                        a = (a + 1) % 5 : "rgba(" === p.substr(-5) && (a = 1), f === l[h] || l.length <= h ? s += f : (s && (r.push(s), s = ""), c = parseFloat(l[h]), r.push(c), r._firstPT = { _next: r._firstPT, t: r, p: r.length - 1, s: c, c: ("=" === f.charAt(1) ? parseInt(f.charAt(0) + "1", 10) * parseFloat(f.substr(2)) : parseFloat(f) - c) || 0, f: 0, r: a && a < 4 }), o += f.length;
                    return (s += e.substr(o)) && r.push(s), r.setRatio = H, r
                },
                //note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
                q = function(t, e, i, n, r, o, s, a) {
                    var l = "get" === i ? t[e] : i,
                        u = typeof t[e],
                        c = "string" == typeof n && "=" === n.charAt(1),
                        h = { t: t, p: e, s: l, f: "function" === u, pg: 0, n: r || e, r: o, pr: 0, c: c ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - l || 0 },
                        d, p;
                    if ("number" !== u && ("function" === u && "get" === i && (p = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), h.s = l = s ? t[p](s) : t[p]()), "string" == typeof l && (s || isNaN(l)) ? (
                            //a blob (string that has multiple numbers in it)
                            h.fp = s, h = { t: d = F(l, n, a || L.defaultStringFilter, h), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: r || e, pr: 0 }) : c || (h.s = parseFloat(l), h.c = parseFloat(n) - h.s || 0)), h.c) //only add it to the linked list if there's a change.
                        return (h._next = this._firstPT) && (h._next._prev = h), this._firstPT = h
                },
                X = L._internals = { isArray: _, isSelector: R, lazyTweens: N, blobDif: F }, //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
                B = L._plugins = {},
                Y = X.tweenLookup = {},
                U = 0,
                V = X.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1 },
                Q = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
                $ = A._rootFramesTimeline = new z,
                G = A._rootTimeline = new z,
                Z = 30,
                K = X.lazyRender = function() { var t = N.length,
                        e; for (W = {}; - 1 < --t;)(e = N[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                    N.length = 0 };
            G._startTime = x.time, $._startTime = x.frame, G._active = $._active = !0, setTimeout(K, 1), //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".
                A._updateRoot = L.render = function() {
                    var t, e, i;
                    if (N.length && //if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
                        K(), G.render((x.time - G._startTime) * G._timeScale, !1, !1), $.render((x.frame - $._startTime) * $._timeScale, !1, !1), N.length && K(), x.frame >= Z) {
                        for (i in //dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
                            Z = x.frame + (parseInt(L.autoSleep, 10) || 120), Y) { for (t = (e = Y[i].tweens).length; - 1 < --t;) e[t]._gc && e.splice(t, 1);
                            0 === e.length && delete Y[i] }
                        //if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
                        if ((!(i = G._first) || i._paused) && L.autoSleep && !$._first && 1 === x._listeners.tick.length) { for (; i && i._paused;) i = i._next;
                            i || x.sleep() }
                    }
                }, x.addEventListener("tick", A._updateRoot);
            var J = function(t, e, i) { var n = t._gsTweenID,
                        r, o; if (Y[n || (t._gsTweenID = n = "t" + U++)] || (Y[n] = { target: t, tweens: [] }), e && ((r = Y[n].tweens)[o = r.length] = e, i))
                        for (; - 1 < --o;) r[o] === e && r.splice(o, 1); return Y[n].tweens },
                tt = function(t, e, i, n) { var r = t.vars.onOverwrite,
                        o, s; return r && (o = r(t, e, i, n)), (r = L.onOverwrite) && (s = r(t, e, i, n)), !1 !== o && !1 !== s },
                et = function(t, e, i, n, r) {
                    var o, s, a, l;
                    if (1 === n || 4 <= n) { for (l = r.length, o = 0; o < l; o++)
                            if ((a = r[o]) !== e) a._gc || a._kill(null, t, e) && (s = !0);
                            else if (5 === n) break; return s }
                    //NOTE: Add 0.0000000001 to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
                    var u = e._startTime + y,
                        c = [],
                        h = 0,
                        d = 0 === e._duration,
                        p;
                    for (o = r.length; - 1 < --o;)(a = r[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (p = p || it(e, 0, d), 0 === it(a, p, d) && (c[h++] = a)) : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && ((d || !a._initted) && u - a._startTime <= 2e-10 || (c[h++] = a)));
                    for (o = h; - 1 < --o;)
                        if (a = c[o], 2 === n && a._kill(i, t, e) && (s = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !tt(a, e)) continue;
                            a._enabled(!1, !1) && ( //if all property tweens have been overwritten, kill the tween.
                                s = !0)
                        }
                    return s
                },
                it = function(t, e, i) { for (var n = t._timeline, r = n._timeScale, o = t._startTime; n._timeline;) { if (o += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline } return e < (o /= r) ? o - e : i && o === e || !t._initted && o - e < 2 * y ? y : (o += t.totalDuration() / t._timeScale / r) > e + y ? 0 : o - e - y };
            //---- TweenLite instance methods -----------------------------------------------------------------------------
            i._init = function() {
                    var t = this.vars,
                        e = this._overwrittenProps,
                        i = this._duration,
                        n = !!t.immediateRender,
                        r = t.ease,
                        o, s, a, l, u;
                    if (t.startAt) {
                        for (l in this._startAt && (this._startAt.render(-1, !0), //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
                                this._startAt.kill()), u = {}, t.startAt) //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
                            u[l] = t.startAt[l];
                        if (u.overwrite = !1, u.immediateRender = !0, u.lazy = n && !1 !== t.lazy, u.startAt = u.delay = null, //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
                            this._startAt = L.to(this.target, 0, u), n)
                            if (0 < this._time) this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
                            else if (0 !== i) return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
                    } else if (t.runBackwards && 0 !== i)
                    //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
                        if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                        else {
                            for (l in 0 !== this._time && ( //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
                                    n = !1), a = {}, t) //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
                                V[l] && "autoCSS" !== l || (a[l] = t[l]);
                            if (a.overwrite = 0, a.data = "isFromStart", //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                                a.lazy = n && !1 !== t.lazy, a.immediateRender = n, //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                                this._startAt = L.to(this.target, 0, a), n) { if (0 === this._time) return } else this._startAt._init(), //ensures that the initial values are recorded
                                this._startAt._enabled(!1), //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
                                this.vars.immediateRender && (this._startAt = null)
                        }
                    if (this._ease = r = r ? r instanceof c ? r : "function" == typeof r ? new c(r, t.easeParams) : T[r] || L.defaultEase : L.defaultEase, t.easeParams instanceof Array && r.config && (this._ease = r.config.apply(r, t.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                        for (o = this._targets.length; - 1 < --o;) this._initProps(this._targets[o], this._propLookup[o] = {}, this._siblings[o], e ? e[o] : null) && (s = !0);
                    else s = this._initProps(this.target, this._propLookup, this._siblings, e);
                    if (s && L._onPluginEvent("_onInitAllProps", this), e && (this._firstPT || "function" != typeof this.target && //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
                            this._enabled(!1, !1)), t.runBackwards)
                        for (a = this._firstPT; a;) a.s += a.c, a.c = -a.c, a = a._next;
                    this._onUpdate = t.onUpdate, this._initted = !0
                }, i._initProps = function(t, e, i, n) {
                    var r, o, s, a, l, u;
                    if (null == t) return !1;
                    for (r in W[t._gsTweenID] && K(), this.vars.css || t.style && t !== p && t.nodeType && B.css && !1 !== this.vars.autoCSS && //it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
                        D(this.vars, t), this.vars)
                        if (u = this.vars[r], V[r]) u && (u instanceof Array || u.push && _(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[r] = u = this._swapSelfInParams(u, this));
                        else if (B[r] && (a = new B[r])._onInitTween(t, this.vars[r], this)) {
                        for (
                            //t - target    [object]
                            //p - property    [string]
                            //s - start     [number]
                            //c - change    [number]
                            //f - isFunction  [boolean]
                            //n - name      [string]
                            //pg - isPlugin   [boolean]
                            //pr - priority   [number]
                            this._firstPT = l = { _next: this._firstPT, t: a, p: "setRatio", s: 0, c: 1, f: 1, n: r, pg: 1, pr: a._priority }, o = a._overwriteProps.length; - 1 < --o;) e[a._overwriteProps[o]] = this._firstPT;
                        (a._priority || a._onInitAllProps) && (s = !0), (a._onDisable || a._onEnable) && (this._notifyPluginsOfEnabled = !0), l._next && (l._next._prev = l)
                    } else e[r] = q.call(this, t, r, "get", u, r, 0, null, this.vars.stringFilter);
                    return n && this._kill(n, t) ? this._initProps(t, e, i, n) : 1 < this._overwrite && this._firstPT && 1 < i.length && et(t, this, e, this._overwrite, i) ? (this._kill(e, t), this._initProps(t, e, i, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && ( //zero duration tweens don't lazy render by default; everything else does.
                        W[t._gsTweenID] = !0), s)
                }, i.render = function(t, e, i) {
                    var n = this._time,
                        r = this._duration,
                        o = this._rawPrevTime,
                        s, a, l, u;
                    if (r - 1e-7 <= t) //to work around occasional floating point math artifacts.
                        this._totalTime = this._time = r, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, a = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === r && (this._initted || !this.vars.lazy || i) && ( //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
                        this._startTime === this._timeline._duration && ( //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
                            t = 0), (o < 0 || t <= 0 && -1e-7 <= t || o === y && "isPause" !== this.data) && o !== t && ( //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
                            i = !0, y < o && (a = "onReverseComplete")), this._rawPrevTime = u = !e || t || o === t ? t : y);
                    else if (t < 1e-7) //to work around occasional floating point math artifacts, round super small values to 0.
                        this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== n || 0 === r && 0 < o) && (a = "onReverseComplete", s = this._reversed), t < 0 && (this._active = !1, 0 === r && (this._initted || !this.vars.lazy || i) && ( //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
                        0 <= o && (o !== y || "isPause" !== this.data) && (i = !0), this._rawPrevTime = u = !e || t || o === t ? t : y)), this._initted || ( //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
                        i = !0);
                    else if (this._totalTime = this._time = t, this._easeType) { var c = t / r,
                            h = this._easeType,
                            d = this._easePower;
                        (1 === h || 3 === h && .5 <= c) && (c = 1 - c), 3 === h && (c *= 2), 1 === d ? c *= c : 2 === d ? c *= c * c : 3 === d ? c *= c * c * c : 4 === d && (c *= c * c * c * c), this.ratio = 1 === h ? 1 - c : 2 === h ? c : t / r < .5 ? c / 2 : 1 - c / 2 } else this.ratio = this._ease.getRatio(t / r);
                    if (this._time !== n || i) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
                                return;
                            //_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
                            if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = n, this._rawPrevTime = o, N.push(this), void(this._lazy = [t, e]);
                            this._time && !s ? this.ratio = this._ease.getRatio(this._time / r) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (!1 !== this._lazy && ( //in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
                                this._lazy = !1), this._active || !this._paused && this._time !== n && 0 <= t && (this._active = !0), 0 === n && (this._startAt && (0 <= t ? this._startAt.render(t, e, i) : a || (a = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== r || e || this._callback("onStart"))), l = this._firstPT; l;) l.f ? l.t[l.p](l.c * this.ratio + l.s) : l.t[l.p] = l.c * this.ratio + l.s, l = l._next;
                        this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
                            this._startAt.render(t, e, i), e || (this._time !== n || s || i) && this._callback("onUpdate")), a && (this._gc && !i || ( //check _gc because there's a chance that kill() could be called in an onUpdate
                            t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && //-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
                            this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a), 0 === r && this._rawPrevTime === y && u !== y && ( //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
                                this._rawPrevTime = 0)))
                    }
                }, i._kill = function(t, e, i) {
                    if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                    e = "string" != typeof e ? e || this._targets || this.target : L.selector(e) || e;
                    var n = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline,
                        r, o, s, a, l, u, c, h, d;
                    if ((_(e) || R(e)) && "number" != typeof e[0])
                        for (r = e.length; - 1 < --r;) this._kill(t, e[r], i) && (u = !0);
                    else {
                        if (this._targets) { for (r = this._targets.length; - 1 < --r;)
                                if (e === this._targets[r]) { l = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], o = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all"; break } } else { if (e !== this.target) return !1;
                            l = this._propLookup, o = this._overwrittenProps = t ? this._overwrittenProps || {} : "all" }
                        if (l) { //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
                            if (c = t || l, h = t !== o && "all" !== o && t !== l && ("object" != typeof t || !t._tempKill), i && (L.onOverwrite || this.vars.onOverwrite)) {
                                for (s in c) l[s] && (d || (d = []), d.push(s));
                                if ((d || !t) && !tt(this, i, e, d)) //if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
                                    return !1
                            }
                            for (s in c)(a = l[s]) && (n && ( //if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
                                a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, u = !0), a.pg && a.t._kill(c) && (u = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete l[s]), h && (o[s] = 1);
                            !this._firstPT && this._initted && //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
                                this._enabled(!1, !1)
                        }
                    }
                    return u
                }, i.invalidate = function() {
                    return this._notifyPluginsOfEnabled && L._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -y, //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
                        this.render(Math.min(0, -this._delay))), this
                }, i._enabled = function(t, e) { if (w || x.wake(), t && this._gc) { var i = this._targets,
                            n; if (i)
                            for (n = i.length; - 1 < --n;) this._siblings[n] = J(i[n], this, !0);
                        else this._siblings = J(this.target, this, !0) } return A.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && L._onPluginEvent(t ? "_onEnable" : "_onDisable", this) },
                //----TweenLite static methods -----------------------------------------------------
                L.to = function(t, e, i) { return new L(t, e, i) }, L.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new L(t, e, i) }, L.fromTo = function(t, e, i, n) { return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new L(t, e, n) }, L.delayedCall = function(t, e, i, n, r) { return new L(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: n, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: r, overwrite: 0 }) }, L.set = function(t, e) { return new L(t, 0, e) }, L.getTweensOf = function(t, e) {
                    if (null == t) return [];
                    var i, n, r, o;
                    if (t = "string" != typeof t ? t : L.selector(t) || t, (_(t) || R(t)) && "number" != typeof t[0]) {
                        for (i = t.length, n = []; - 1 < --i;) n = n.concat(L.getTweensOf(t[i], e));
                        //now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
                        for (i = n.length; - 1 < --i;)
                            for (o = n[i], r = i; - 1 < --r;) o === n[r] && n.splice(i, 1)
                    } else
                        for (i = (n = J(t).concat()).length; - 1 < --i;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                    return n
                }, L.killTweensOf = L.killDelayedCallsTo = function(t, e, i) {
                    "object" == typeof e && (i = e, //for backwards compatibility (before "onlyActive" parameter was inserted)
                        e = !1);
                    for (var n = L.getTweensOf(t, e), r = n.length; - 1 < --r;) n[r]._kill(i, t)
                };
            /*
             * ----------------------------------------------------------------
             * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
             * ----------------------------------------------------------------
             */
            var nt = d("plugins.TweenPlugin", function(t, e) { this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = nt.prototype }, !0);
            if (i = nt.prototype, nt.version = "1.18.0", nt.API = 2, i._firstPT = null, i._addTween = q, i.setRatio = H, i._kill = function(t) { var e = this._overwriteProps,
                        i = this._firstPT,
                        n; if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (n = e.length; - 1 < --n;) null != t[e[n]] && e.splice(n, 1); for (; i;) null != t[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next; return !1 }, i._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && ( //some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
                        i.r = e), i = i._next
                }, L._onPluginEvent = function(t, e) {
                    var i = e._firstPT,
                        n, r, o, s, a;
                    if ("_onInitAllProps" === t) {
                        //sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
                        for (; i;) { for (a = i._next, r = o; r && r.pr > i.pr;) r = r._next;
                            (i._prev = r ? r._prev : s) ? i._prev._next = i: o = i, (i._next = r) ? r._prev = i : s = i, i = a }
                        i = e._firstPT = o
                    }
                    for (; i;) i.pg && "function" == typeof i.t[t] && i.t[t]() && (n = !0), i = i._next;
                    return n
                }, nt.activate = function(t) { for (var e = t.length; - 1 < --e;) t[e].API === nt.API && (B[(new t[e])._propName] = t[e]); return !0 },
                //provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
                r.plugin = function(t) { if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition."; var e = t.propName,
                        i = t.priority || 0,
                        n = t.overwriteProps,
                        r = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_roundProps", initAll: "_onInitAllProps" },
                        o = d("plugins." + e.charAt(0).toUpperCase() + e.substr(1) + "Plugin", function() { nt.call(this, e, i), this._overwriteProps = n || [] }, !0 === t.global),
                        s = o.prototype = new nt(e),
                        a; for (a in (s.constructor = o).API = t.API, r) "function" == typeof t[a] && (s[r[a]] = t[a]); return o.version = t.version, nt.activate([o]), o },
                //now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
                t = p._gsQueue) { for (e = 0; e < t.length; e++) t[e](); for (i in b) b[i].func || p.console.log("GSAP encountered missing dependency: com.greensock." + i) }
            w = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite"), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(o, q) {
            var f, T, I, p, X = function() { o.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = X.prototype.setRatio },
                u = _gsScope._gsDefine.globals,
                m = {},
                t = X.prototype = new o("css");
            (t.constructor = X).version = "1.18.5", X.API = 2, X.defaultTransformPerspective = 0, X.defaultSkewType = "compensated", X.defaultSmoothOrigin = !0, t = "px", X.suffixMap = { top: t, right: t, bottom: t, left: t, width: t, height: t, fontSize: t, padding: t, margin: t, perspective: t, lineHeight: "" };
            var C, g, v, W, y, P, O = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                k = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                _ = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                c = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                E = /(?:\d|\-|\+|=|#|\.)*/g,
                A = /opacity *= *([^)]*)/i,
                x = /opacity:([^;]*)/i,
                s = /alpha\(opacity *=.+?\)/i,
                w = /^(rgb|hsl)/,
                a = /([A-Z])/g,
                l = /-([a-z])/gi,
                b = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                h = function(t, e) { return e.toUpperCase() },
                S = /(?:Left|Right|Width)/i,
                d = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                z = /,(?=[^\)]*(?:\(|$))/gi,
                L = /[\s,\(]/i,
                j = Math.PI / 180,
                B = 180 / Math.PI,
                R = {},
                D = document,
                e = function(t) { return D.createElementNS ? D.createElementNS("http://www.w3.org/1999/xhtml", t) : D.createElement(t) },
                N = e("div"),
                H = e("img"),
                i = X._internals = { _specialProps: m },
                n = navigator.userAgent,
                F = (pt = n.indexOf("Android"), ft = e("a"), v = -1 !== n.indexOf("Safari") && -1 === n.indexOf("Chrome") && (-1 === pt || 3 < Number(n.substr(pt + 8, 1))), y = v && Number(n.substr(n.indexOf("Version/") + 8, 1)) < 6, W = -1 !== n.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(n) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(n)) && (P = parseFloat(RegExp.$1)), !!ft && (ft.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(ft.style.opacity))),
                Y = function(t) { return A.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 },
                U = function(t) { window.console && console.log(t) },
                V = "",
                Q = "",
                $ = function(t, e) { var i, n, r = (e = e || N).style; if (void 0 !== r[t]) return t; for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; - 1 < --n && void 0 === r[i[n] + t];); return 0 <= n ? (Q = 3 === n ? "ms" : i[n], V = "-" + Q.toLowerCase() + "-", Q + t) : null },
                G = D.defaultView ? D.defaultView.getComputedStyle : function() {},
                Z = X.getStyle = function(t, e, i, n, r) { var o; return F || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || G(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(a, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : Y(t) },
                K = i.convertToPixels = function(t, e, i, n, r) { if ("px" === n || !n) return i; if ("auto" === n || !i) return 0; var o, s, a, l = S.test(e),
                        u = t,
                        c = N.style,
                        h = i < 0,
                        d = 1 === i; if (h && (i = -i), d && (i *= 100), "%" === n && -1 !== e.indexOf("border")) o = i / 100 * (l ? t.clientWidth : t.clientHeight);
                    else { if (c.cssText = "border:0 solid red;position:" + Z(t, "position") + ";line-height:0;", "%" !== n && u.appendChild && "v" !== n.charAt(0) && "rem" !== n) c[l ? "borderLeftWidth" : "borderTopWidth"] = i + n;
                        else { if (s = (u = t.parentNode || D.body)._gsCache, a = q.ticker.frame, s && l && s.time === a) return s.width * i / 100;
                            c[l ? "width" : "height"] = i + n }
                        u.appendChild(N), o = parseFloat(N[l ? "offsetWidth" : "offsetHeight"]), u.removeChild(N), l && "%" === n && !1 !== X.cacheWidths && ((s = u._gsCache = u._gsCache || {}).time = a, s.width = o / i * 100), 0 !== o || r || (o = K(t, e, i, n, !0)) } return d && (o /= 100), h ? -o : o },
                J = i.calculateOffset = function(t, e, i) { if ("absolute" !== Z(t, "position", i)) return 0; var n = "left" === e ? "Left" : "Top",
                        r = Z(t, "margin" + n, i); return t["offset" + n] - (K(t, e, parseFloat(r), r.replace(E, "")) || 0) },
                tt = function(t, e) { var i, n, r, o = {}; if (e = e || G(t, null))
                        if (i = e.length)
                            for (; - 1 < --i;)(-1 === (r = e[i]).indexOf("-transform") || Ot === r) && (o[r.replace(l, h)] = e.getPropertyValue(r));
                        else
                            for (i in e)(-1 === i.indexOf("Transform") || Ct === i) && (o[i] = e[i]);
                    else if (e = t.currentStyle || t.style)
                        for (i in e) "string" == typeof i && void 0 === o[i] && (o[i.replace(l, h)] = e[i]); return F || (o.opacity = Y(t)), n = Ft(t, e, !1), o.rotation = n.rotation, o.skewX = n.skewX, o.scaleX = n.scaleX, o.scaleY = n.scaleY, o.x = n.x, o.y = n.y, Et && (o.z = n.z, o.rotationX = n.rotationX, o.rotationY = n.rotationY, o.scaleZ = n.scaleZ), o.filters && delete o.filters, o },
                et = function(t, e, i, n, r) { var o, s, a, l = {},
                        u = t.style; for (s in i) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = i[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(c, "") ? o : 0 : J(t, s), void 0 !== u[s] && (a = new vt(u, s, u[s], a))); if (n)
                        for (s in n) "className" !== s && (l[s] = n[s]); return { difs: l, firstMPT: a } },
                it = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                nt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                rt = function(t, e, i) { if ("svg" === (t.nodeName + "").toLowerCase()) return (i || G(t))[e] || 0; if (t.getBBox && Wt(t)) return t.getBBox()[e] || 0; var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        r = it[e],
                        o = r.length; for (i = i || G(t, null); - 1 < --o;) n -= parseFloat(Z(t, "padding" + r[o], i, !0)) || 0, n -= parseFloat(Z(t, "border" + r[o] + "Width", i, !0)) || 0; return n },
                ot = function(t, e) { if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                    (null == t || "" === t) && (t = "0 0"); var i, n = t.split(" "),
                        r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                        o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1]; if (3 < n.length && !e) { for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(ot(n[i])); return t.join(",") } return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + o + (2 < n.length ? " " + n[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== o.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === o.charAt(1), e.ox = parseFloat(r.replace(c, "")), e.oy = parseFloat(o.replace(c, "")), e.v = t), e || t },
                st = function(t, e) { return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0 },
                at = function(t, e) { return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0 },
                lt = function(t, e, i, n) { var r, o, s, a, l, u = 1e-6; return (a = null == t ? e : "number" == typeof t ? t : (r = 360, o = t.split("_"), s = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : B) - (l ? 0 : e), o.length && (n && (n[i] = e + s), -1 !== t.indexOf("short") && ((s %= r) !== s % 180 && (s = s < 0 ? s + r : s - r)), -1 !== t.indexOf("_cw") && s < 0 ? s = (s + 3599999999640) % r - (s / r | 0) * r : -1 !== t.indexOf("ccw") && 0 < s && (s = (s - 3599999999640) % r - (s / r | 0) * r)), e + s)) < u && -u < a && (a = 0), a },
                ut = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
                ct = function(t, e, i) { return 255 * (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0 },
                ht = X.parseColor = function(t, e) { var i, n, r, o, s, a, l, u, c, h, d; if (t)
                        if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                        else { if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ut[t]) i = ut[t];
                            else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (n = t.charAt(1)) + n + (r = t.charAt(2)) + r + (o = t.charAt(3)) + o), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                            else if ("hsl" === t.substr(0, 3))
                                if (i = d = t.match(O), e) { if (-1 !== t.indexOf("=")) return t.match(k) } else s = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, n = 2 * (l = Number(i[2]) / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a), 3 < i.length && (i[3] = Number(t[3])), i[0] = ct(s + 1 / 3, n, r), i[1] = ct(s, n, r), i[2] = ct(s - 1 / 3, n, r);
                            else i = t.match(O) || ut.transparent;
                            i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), 3 < i.length && (i[3] = Number(i[3])) }
                    else i = ut.black; return e && !d && (n = i[0] / 255, r = i[1] / 255, o = i[2] / 255, l = ((u = Math.max(n, r, o)) + (c = Math.min(n, r, o))) / 2, u === c ? s = a = 0 : (h = u - c, a = .5 < l ? h / (2 - u - c) : h / (u + c), s = u === n ? (r - o) / h + (r < o ? 6 : 0) : u === r ? (o - n) / h + 2 : (n - r) / h + 4, s *= 60), i[0] = s + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i },
                r = function(t, e) { var i, n, r, o = t.match(dt) || [],
                        s = 0,
                        a = o.length ? "" : t; for (i = 0; i < o.length; i++) n = o[i], s += (r = t.substr(s, t.indexOf(n, s) - s)).length + n.length, 3 === (n = ht(n, e)).length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")"; return a + t.substr(s) },
                dt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",
                pt, ft;
            for (t in ut) dt += "|" + t + "\\b";
            dt = new RegExp(dt + ")", "gi"), X.colorStringFilter = function(t) { var e, i = t[0] + t[1];
                dt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = r(t[0], e), t[1] = r(t[1], e)), dt.lastIndex = 0 }, q.defaultStringFilter || (q.defaultStringFilter = X.colorStringFilter);
            var mt = function(t, e, o, s) { if (null == t) return function(t) { return t }; var a, l = e ? (t.match(dt) || [""])[0] : "",
                        u = t.split(l).join("").match(_) || [],
                        c = t.substr(0, t.indexOf(u[0])),
                        h = ")" === t.charAt(t.length - 1) ? ")" : "",
                        d = -1 !== t.indexOf(" ") ? " " : ",",
                        p = u.length,
                        f = 0 < p ? u[0].replace(O, "") : ""; return p ? a = e ? function(t) { var e, i, n, r; if ("number" == typeof t) t += f;
                        else if (s && z.test(t)) { for (r = t.replace(z, "|").split("|"), n = 0; n < r.length; n++) r[n] = a(r[n]); return r.join(",") } if (e = (t.match(dt) || [l])[0], n = (i = t.split(e).join("").match(_) || []).length, p > n--)
                            for (; ++n < p;) i[n] = o ? i[(n - 1) / 2 | 0] : u[n]; return c + i.join(d) + d + e + h + (-1 !== t.indexOf("inset") ? " inset" : "") } : function(t) { var e, i, n; if ("number" == typeof t) t += f;
                        else if (s && z.test(t)) { for (i = t.replace(z, "|").split("|"), n = 0; n < i.length; n++) i[n] = a(i[n]); return i.join(",") } if (n = (e = t.match(_) || []).length, p > n--)
                            for (; ++n < p;) e[n] = o ? e[(n - 1) / 2 | 0] : u[n]; return c + e.join(d) + h } : function(t) { return t } },
                gt = function(u) { return u = u.split(","),
                        function(t, e, i, n, r, o, s) { var a, l = (e + "").split(" "); for (s = {}, a = 0; a < 4; a++) s[u[a]] = l[a] = l[a] || l[(a - 1) / 2 >> 0]; return n.parse(t, s, r, o) } },
                vt = (i._setPluginRatio = function(t) { this.plugin.setRatio(t); for (var e, i, n, r, o, s = this.data, a = s.proxy, l = s.firstMPT, u = 1e-6; l;) e = a[l.v], l.r ? e = Math.round(e) : e < u && -u < e && (e = 0), l.t[l.p] = e, l = l._next; if (s.autoRotate && (s.autoRotate.rotation = a.rotation), 1 === t || 0 === t)
                        for (l = s.firstMPT, o = 1 === t ? "e" : "b"; l;) { if ((i = l.t).type) { if (1 === i.type) { for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                    i[o] = r } } else i[o] = i.s + i.xs0;
                            l = l._next } }, function(t, e, i, n, r) { this.t = t, this.p = e, this.v = i, this.r = r, n && ((n._prev = this)._next = n) }),
                yt = (i._parseToProxy = function(t, e, i, n, r, o) { var s, a, l, u, c, h = n,
                        d = {},
                        p = {},
                        f = i._transform,
                        m = R; for (i._transform = null, R = e, n = c = i.parse(t, e, n, r), R = m, o && (i._transform = f, h && (h._prev = null, h._prev && (h._prev._next = null))); n && n !== h;) { if (n.type <= 1 && (p[a = n.p] = n.s + n.c, d[a] = n.s, o || (u = new vt(n, "s", a, u, n.r), n.c = 0), 1 === n.type))
                            for (s = n.l; 0 < --s;) l = "xn" + s, p[a = n.p + "_" + l] = n.data[l], d[a] = n[l], o || (u = new vt(n, l, a, u, n.rxp[l]));
                        n = n._next } return { proxy: d, end: p, firstMPT: u, pt: c } }, i.CSSPropTween = function(t, e, i, n, r, o, s, a, l, u, c) { this.t = t, this.p = e, this.s = i, this.c = n, this.n = s || e, t instanceof yt || p.push(this.n), this.r = a, this.type = o || 0, l && (this.pr = l, f = !0), this.b = void 0 === u ? i : u, this.e = void 0 === c ? i + n : c, r && ((this._next = r)._prev = this) }),
                _t = function(t, e, i, n, r, o) { var s = new yt(t, e, i, n - i, r, -1, o); return s.b = i, s.e = s.xs0 = n, s },
                xt = X.parseComplex = function(t, e, i, n, r, o, s, a, l, u) { s = new yt(t, e, 0, 0, s, u ? 2 : 1, null, !1, a, i = i || o || "", n), n += "", r && dt.test(n + i) && (n = [i, n], X.colorStringFilter(n), i = n[0], n = n[1]); var c, h, d, p, f, m, g, v, y, _, x, w, b, S = i.split(", ").join(",").split(" "),
                        T = n.split(", ").join(",").split(" "),
                        I = S.length,
                        P = !1 !== C; for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace(z, ", ").split(" "), T = T.join(" ").replace(z, ", ").split(" "), I = S.length), I !== T.length && (I = (S = (o || "").split(" ")).length), s.plugin = l, s.setRatio = u, c = dt.lastIndex = 0; c < I; c++)
                        if (p = S[c], f = T[c], (v = parseFloat(p)) || 0 === v) s.appendXtra("", v, st(f, v), f.replace(k, ""), P && -1 !== f.indexOf("px"), !0);
                        else if (r && dt.test(p)) w = ")" + ((w = f.indexOf(")") + 1) ? f.substr(w) : ""), b = -1 !== f.indexOf("hsl") && F, p = ht(p, b), f = ht(f, b), (y = 6 < p.length + f.length) && !F && 0 === f[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(T[c]).join("transparent")) : (F || (y = !1), b ? s.appendXtra(y ? "hsla(" : "hsl(", p[0], st(f[0], p[0]), ",", !1, !0).appendXtra("", p[1], st(f[1], p[1]), "%,", !1).appendXtra("", p[2], st(f[2], p[2]), y ? "%," : "%" + w, !1) : s.appendXtra(y ? "rgba(" : "rgb(", p[0], f[0] - p[0], ",", !0, !0).appendXtra("", p[1], f[1] - p[1], ",", !0).appendXtra("", p[2], f[2] - p[2], y ? "," : w, !0), y && (p = p.length < 4 ? 1 : p[3], s.appendXtra("", p, (f.length < 4 ? 1 : f[3]) - p, w, !1))), dt.lastIndex = 0;
                    else if (m = p.match(O)) { if (!(g = f.match(k)) || g.length !== m.length) return s; for (h = d = 0; h < m.length; h++) x = m[h], _ = p.indexOf(x, d), s.appendXtra(p.substr(d, _ - d), Number(x), st(g[h], x), "", P && "px" === p.substr(_ + x.length, 2), 0 === h), d = _ + x.length;
                        s["xs" + s.l] += p.substr(d) } else s["xs" + s.l] += s.l || s["xs" + s.l] ? " " + f : f; if (-1 !== n.indexOf("=") && s.data) { for (w = s.xs0 + s.data.s, c = 1; c < s.l; c++) w += s["xs" + c] + s.data["xn" + c];
                        s.e = w + s["xs" + c] } return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s },
                wt = 9;
            for ((t = yt.prototype).l = t.pr = 0; 0 < --wt;) t["xn" + wt] = 0, t["xs" + wt] = "";
            t.xs0 = "", t._next = t._prev = t.xfirst = t.data = t.plugin = t.setRatio = t.rxp = null, t.appendXtra = function(t, e, i, n, r, o) { var s = this,
                    a = s.l; return s["xs" + a] += o && (a || s["xs" + a]) ? " " + t : t || "", i || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = n || "", 0 < a ? (s.data["xn" + a] = e + i, s.rxp["xn" + a] = r, s["xn" + a] = e, s.plugin || (s.xfirst = new yt(s, "xn" + a, e, i, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0)) : (s.data = { s: e + i }, s.rxp = {}, s.s = e, s.c = i, s.r = r)) : s["xs" + a] += e + (n || ""), s };
            var bt = function(t, e) { e = e || {}, this.p = e.prefix && $(t) || t, m[t] = m[this.p] = this, this.format = e.formatter || mt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0 },
                St = i._registerComplexSpecialProp = function(t, e, i) { "object" != typeof e && (e = { parser: i }); var n, r, o = t.split(","),
                        s = e.defaultValue; for (i = i || [s], n = 0; n < o.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, r = new bt(o[n], e) },
                Tt = function(t) { if (!m[t]) { var l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        St(t, { parser: function(t, e, i, n, r, o, s) { var a = u.com.greensock.plugins[l]; return a ? (a._cssRegister(), m[i].parse(t, e, i, n, r, o, s)) : (U("Error: " + l + " js file not loaded."), r) } }) } };
            (t = bt.prototype).parseComplex = function(t, e, i, n, r, o) { var s, a, l, u, c, h, d = this.keyword; if (this.multi && (z.test(i) || z.test(e) ? (a = e.replace(z, "|").split("|"), l = i.replace(z, "|").split("|")) : d && (a = [e], l = [i])), l) { for (u = l.length > a.length ? l.length : a.length, s = 0; s < u; s++) e = a[s] = a[s] || this.dflt, i = l[s] = l[s] || this.dflt, d && ((c = e.indexOf(d)) !== (h = i.indexOf(d)) && (-1 === h ? a[s] = a[s].split(d).join("") : -1 === c && (a[s] += " " + d)));
                    e = a.join(", "), i = l.join(", ") } return xt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, o) }, t.parse = function(t, e, i, n, r, o, s) { return this.parseComplex(t.style, this.format(Z(t, this.p, I, !1, this.dflt)), this.format(e), r, o) }, X.registerSpecialProp = function(t, l, u) { St(t, { parser: function(t, e, i, n, r, o, s) { var a = new yt(t, i, 0, 0, r, 2, i, !1, u); return a.plugin = o, a.setRatio = l(t, e, n._tween, i), a }, priority: u }) }, X.useSVGTransformAttr = v || W;
            var It, Pt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Ct = $("transform"),
                Ot = V + "transform",
                kt = $("transformOrigin"),
                Et = null !== $("perspective"),
                At = i.Transform = function() { this.perspective = parseFloat(X.defaultTransformPerspective) || 0, this.force3D = !(!1 === X.defaultForce3D || !Et) && (X.defaultForce3D || "auto") },
                Mt = window.SVGElement,
                zt = function(t, e, i) { var n, r = D.createElementNS("http://www.w3.org/2000/svg", t),
                        o = /([a-z])([A-Z])/g; for (n in i) r.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]); return e.appendChild(r), r },
                Lt = D.documentElement,
                Rt = (Vt = P || /Android/i.test(n) && !window.chrome, D.createElementNS && !Vt && (Bt = zt("svg", Lt), Ut = (Yt = zt("rect", Bt, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width, Yt.style[kt] = "50% 50%", Yt.style[Ct] = "scaleX(0.5)", Vt = Ut === Yt.getBoundingClientRect().width && !(W && Et), Lt.removeChild(Bt)), Vt),
                Dt = function(t, e, i, n, r, o) { var s, a, l, u, c, h, d, p, f, m, g, v, y, _, x = t._gsTransform,
                        w = Ht(t, !0);
                    x && (y = x.xOrigin, _ = x.yOrigin), (!n || (s = n.split(" ")).length < 2) && (d = t.getBBox(), s = [(-1 !== (e = ot(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]), i.xOrigin = u = parseFloat(s[0]), i.yOrigin = c = parseFloat(s[1]), n && w !== jt && (h = w[0], d = w[1], p = w[2], f = w[3], m = w[4], a = u * (f / (v = h * f - d * p)) + c * (-p / v) + (p * (g = w[5]) - f * m) / v, l = u * (-d / v) + c * (h / v) - (h * g - d * m) / v, u = i.xOrigin = s[0] = a, c = i.yOrigin = s[1] = l), x && (o && (i.xOffset = x.xOffset, i.yOffset = x.yOffset, x = i), r || !1 !== r && !1 !== X.defaultSmoothOrigin ? (a = u - y, l = c - _, x.xOffset += a * w[0] + l * w[2] - a, x.yOffset += a * w[1] + l * w[3] - l) : x.xOffset = x.yOffset = 0), o || t.setAttribute("data-svg-origin", s.join(" ")) },
                Nt = function(t) { try { return t.getBBox() } catch (t) {} },
                Wt = function(t) { return !!(Mt && t.getBBox && t.getCTM && Nt(t) && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)) },
                jt = [1, 0, 0, 1, 0, 0],
                Ht = function(t, e) { var i, n, r, o, s, a, l = t._gsTransform || new At,
                        u = 1e5,
                        c = t.style; if (Ct ? n = Z(t, Ot, null, !0) : t.currentStyle && (n = (n = t.currentStyle.filter.match(d)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), (i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n) && Ct && ((a = "none" === G(t).display) || !t.parentNode) && (a && (o = c.display, c.display = "block"), t.parentNode || (s = 1, Lt.appendChild(t)), i = !(n = Z(t, Ot, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, o ? c.display = o : a && $t(c, "display"), s && Lt.removeChild(t)), (l.svg || t.getBBox && Wt(t)) && (i && -1 !== (c[Ct] + "").indexOf("matrix") && (n = c[Ct], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return jt; for (r = (n || "").match(O) || [], wt = r.length; - 1 < --wt;) o = Number(r[wt]), r[wt] = (s = o - (o |= 0)) ? (s * u + (s < 0 ? -.5 : .5) | 0) / u + o : o; return e && 6 < r.length ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r },
                Ft = i.getTransform = function(t, e, i, n) { if (t._gsTransform && i && !n) return t._gsTransform; var r, o, s, a, l, u, c = i && t._gsTransform || new At,
                        h = c.scaleX < 0,
                        d = 2e-5,
                        p = 1e5,
                        f = Et && (parseFloat(Z(t, kt, e, !1, "0 0 0").split(" ")[2]) || c.zOrigin) || 0,
                        m = parseFloat(X.defaultTransformPerspective) || 0; if (c.svg = !(!t.getBBox || !Wt(t)), c.svg && (Dt(t, Z(t, kt, e, !1, "50% 50%") + "", c, t.getAttribute("data-svg-origin")), It = X.useSVGTransformAttr || Rt), (r = Ht(t)) !== jt) { if (16 === r.length) { var g, v, y, _, x, w = r[0],
                                b = r[1],
                                S = r[2],
                                T = r[3],
                                I = r[4],
                                P = r[5],
                                C = r[6],
                                O = r[7],
                                k = r[8],
                                E = r[9],
                                A = r[10],
                                M = r[12],
                                z = r[13],
                                L = r[14],
                                R = r[11],
                                D = Math.atan2(C, A);
                            c.zOrigin && (M = k * (L = -c.zOrigin) - r[12], z = E * L - r[13], L = A * L + c.zOrigin - r[14]), c.rotationX = D * B, D && (g = I * (_ = Math.cos(-D)) + k * (x = Math.sin(-D)), v = P * _ + E * x, y = C * _ + A * x, k = I * -x + k * _, E = P * -x + E * _, A = C * -x + A * _, R = O * -x + R * _, I = g, P = v, C = y), D = Math.atan2(-S, A), c.rotationY = D * B, D && (v = b * (_ = Math.cos(-D)) - E * (x = Math.sin(-D)), y = S * _ - A * x, E = b * x + E * _, A = S * x + A * _, R = T * x + R * _, w = g = w * _ - k * x, b = v, S = y), D = Math.atan2(b, w), c.rotation = D * B, D && (w = w * (_ = Math.cos(-D)) + I * (x = Math.sin(-D)), v = b * _ + P * x, P = b * -x + P * _, C = S * -x + C * _, b = v), c.rotationX && 359.9 < Math.abs(c.rotationX) + Math.abs(c.rotation) && (c.rotationX = c.rotation = 0, c.rotationY = 180 - c.rotationY), c.scaleX = (Math.sqrt(w * w + b * b) * p + .5 | 0) / p, c.scaleY = (Math.sqrt(P * P + E * E) * p + .5 | 0) / p, c.scaleZ = (Math.sqrt(C * C + A * A) * p + .5 | 0) / p, c.rotationX || c.rotationY ? c.skewX = 0 : (c.skewX = I || P ? Math.atan2(I, P) * B + c.rotation : c.skewX || 0, 90 < Math.abs(c.skewX) && Math.abs(c.skewX) < 270 && (h ? (c.scaleX *= -1, c.skewX += c.rotation <= 0 ? 180 : -180, c.rotation += c.rotation <= 0 ? 180 : -180) : (c.scaleY *= -1, c.skewX += c.skewX <= 0 ? 180 : -180))), c.perspective = R ? 1 / (R < 0 ? -R : R) : 0, c.x = M, c.y = z, c.z = L, c.svg && (c.x -= c.xOrigin - (c.xOrigin * w - c.yOrigin * I), c.y -= c.yOrigin - (c.yOrigin * b - c.xOrigin * P)) } else if (!Et || n || !r.length || c.x !== r[4] || c.y !== r[5] || !c.rotationX && !c.rotationY) { var N = 6 <= r.length,
                                W = N ? r[0] : 1,
                                j = r[1] || 0,
                                H = r[2] || 0,
                                F = N ? r[3] : 1;
                            c.x = r[4] || 0, c.y = r[5] || 0, s = Math.sqrt(W * W + j * j), a = Math.sqrt(F * F + H * H), l = W || j ? Math.atan2(j, W) * B : c.rotation || 0, u = H || F ? Math.atan2(H, F) * B + l : c.skewX || 0, 90 < Math.abs(u) && Math.abs(u) < 270 && (h ? (s *= -1, u += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, u += u <= 0 ? 180 : -180)), c.scaleX = s, c.scaleY = a, c.rotation = l, c.skewX = u, Et && (c.rotationX = c.rotationY = c.z = 0, c.perspective = m, c.scaleZ = 1), c.svg && (c.x -= c.xOrigin - (c.xOrigin * W + c.yOrigin * H), c.y -= c.yOrigin - (c.xOrigin * j + c.yOrigin * F)) } for (o in c.zOrigin = f, c) c[o] < d && c[o] > -d && (c[o] = 0) } return i && ((t._gsTransform = c).svg && (It && t.style[Ct] ? q.delayedCall(.001, function() { $t(t.style, Ct) }) : !It && t.getAttribute("transform") && q.delayedCall(.001, function() { t.removeAttribute("transform") }))), c },
                qt = function(t) { var e, i, n = this.data,
                        r = -n.rotation * j,
                        o = r + n.skewX * j,
                        s = 1e5,
                        a = (Math.cos(r) * n.scaleX * s | 0) / s,
                        l = (Math.sin(r) * n.scaleX * s | 0) / s,
                        u = (Math.sin(o) * -n.scaleY * s | 0) / s,
                        c = (Math.cos(o) * n.scaleY * s | 0) / s,
                        h = this.t.style,
                        d = this.t.currentStyle; if (d) { i = l, l = -u, u = -i, e = d.filter, h.filter = ""; var p, f, m = this.t.offsetWidth,
                            g = this.t.offsetHeight,
                            v = "absolute" !== d.position,
                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + c,
                            _ = n.x + m * n.xPercent / 100,
                            x = n.y + g * n.yPercent / 100; if (null != n.ox && (_ += (p = (n.oxp ? m * n.ox * .01 : n.ox) - m / 2) - (p * a + (f = (n.oyp ? g * n.oy * .01 : n.oy) - g / 2) * l), x += f - (p * u + f * c)), v ? y += ", Dx=" + ((p = m / 2) - (p * a + (f = g / 2) * l) + _) + ", Dy=" + (f - (p * u + f * c) + x) + ")" : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? h.filter = e.replace(M, y) : h.filter = y + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === u && 1 === c && (v && -1 === y.indexOf("Dx=0, Dy=0") || A.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && h.removeAttribute("filter")), !v) { var w, b, S, T = P < 8 ? 1 : -1; for (p = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((a < 0 ? -a : a) * m + (l < 0 ? -l : l) * g)) / 2 + _), n.ieOffsetY = Math.round((g - ((c < 0 ? -c : c) * g + (u < 0 ? -u : u) * m)) / 2 + x), wt = 0; wt < 4; wt++) S = (i = -1 !== (w = d[b = nt[wt]]).indexOf("px") ? parseFloat(w) : K(this.t, b, parseFloat(w), w.replace(E, "")) || 0) !== n[b] ? wt < 2 ? -n.ieOffsetX : -n.ieOffsetY : wt < 2 ? p - n.ieOffsetX : f - n.ieOffsetY, h[b] = (n[b] = Math.round(i - S * (0 === wt || 2 === wt ? 1 : T))) + "px" } } },
                Xt = i.set3DTransformRatio = i.setTransformRatio = function(t) { var e, i, n, r, o, s, a, l, u, c, h, d, p, f, m, g, v, y, _, x, w, b, S, T = this.data,
                        I = this.t.style,
                        P = T.rotation,
                        C = T.rotationX,
                        O = T.rotationY,
                        k = T.scaleX,
                        E = T.scaleY,
                        A = T.scaleZ,
                        M = T.x,
                        z = T.y,
                        L = T.z,
                        R = T.svg,
                        D = T.perspective,
                        N = T.force3D; if (!((1 !== t && 0 !== t || "auto" !== N || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && N || L || D || O || C || 1 !== A) || It && R || !Et) P || T.skewX || R ? (P *= j, b = T.skewX * j, S = 1e5, e = Math.cos(P) * k, r = Math.sin(P) * k, i = Math.sin(P - b) * -E, o = Math.cos(P - b) * E, b && "simple" === T.skewType && (v = Math.tan(b), i *= v = Math.sqrt(1 + v * v), o *= v, T.skewY && (e *= v, r *= v)), R && (M += T.xOrigin - (T.xOrigin * e + T.yOrigin * i) + T.xOffset, z += T.yOrigin - (T.xOrigin * r + T.yOrigin * o) + T.yOffset, It && (T.xPercent || T.yPercent) && (f = this.t.getBBox(), M += .01 * T.xPercent * f.width, z += .01 * T.yPercent * f.height), M < (f = 1e-6) && -f < M && (M = 0), z < f && -f < z && (z = 0)), _ = (e * S | 0) / S + "," + (r * S | 0) / S + "," + (i * S | 0) / S + "," + (o * S | 0) / S + "," + M + "," + z + ")", R && It ? this.t.setAttribute("transform", "matrix(" + _) : I[Ct] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix(" : "matrix(") + _) : I[Ct] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix(" : "matrix(") + k + ",0,0," + E + "," + M + "," + z + ")";
                    else { if (W && (k < (f = 1e-4) && -f < k && (k = A = 2e-5), E < f && -f < E && (E = A = 2e-5), !D || T.z || T.rotationX || T.rotationY || (D = 0)), P || T.skewX) P *= j, m = e = Math.cos(P), g = r = Math.sin(P), T.skewX && (P -= T.skewX * j, m = Math.cos(P), g = Math.sin(P), "simple" === T.skewType && (v = Math.tan(T.skewX * j), m *= v = Math.sqrt(1 + v * v), g *= v, T.skewY && (e *= v, r *= v))), i = -g, o = m;
                        else { if (!(O || C || 1 !== A || D || R)) return void(I[Ct] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + z + "px," + L + "px)" + (1 !== k || 1 !== E ? " scale(" + k + "," + E + ")" : ""));
                            e = o = 1, i = r = 0 }
                        u = 1, n = s = a = l = c = h = 0, d = D ? -1 / D : 0, p = T.zOrigin, f = 1e-6, x = ",", w = "0", (P = O * j) && (m = Math.cos(P), c = d * (a = -(g = Math.sin(P))), n = e * g, s = r * g, d *= u = m, e *= m, r *= m), (P = C * j) && (v = i * (m = Math.cos(P)) + n * (g = Math.sin(P)), y = o * m + s * g, l = u * g, h = d * g, n = i * -g + n * m, s = o * -g + s * m, u *= m, d *= m, i = v, o = y), 1 !== A && (n *= A, s *= A, u *= A, d *= A), 1 !== E && (i *= E, o *= E, l *= E, h *= E), 1 !== k && (e *= k, r *= k, a *= k, c *= k), (p || R) && (p && (M += n * -p, z += s * -p, L += u * -p + p), R && (M += T.xOrigin - (T.xOrigin * e + T.yOrigin * i) + T.xOffset, z += T.yOrigin - (T.xOrigin * r + T.yOrigin * o) + T.yOffset), M < f && -f < M && (M = w), z < f && -f < z && (z = w), L < f && -f < L && (L = 0)), _ = T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix3d(" : "matrix3d(", _ += (e < f && -f < e ? w : e) + x + (r < f && -f < r ? w : r) + x + (a < f && -f < a ? w : a), _ += x + (c < f && -f < c ? w : c) + x + (i < f && -f < i ? w : i) + x + (o < f && -f < o ? w : o), C || O || 1 !== A ? (_ += x + (l < f && -f < l ? w : l) + x + (h < f && -f < h ? w : h) + x + (n < f && -f < n ? w : n), _ += x + (s < f && -f < s ? w : s) + x + (u < f && -f < u ? w : u) + x + (d < f && -f < d ? w : d) + x) : _ += ",0,0,0,0,1,0,", _ += M + x + z + x + L + x + (D ? 1 + -L / D : 1) + ")", I[Ct] = _ } },
                Bt, Yt, Ut, Vt;
            (t = At.prototype).x = t.y = t.z = t.skewX = t.skewY = t.rotation = t.rotationX = t.rotationY = t.zOrigin = t.xPercent = t.yPercent = t.xOffset = t.yOffset = 0, t.scaleX = t.scaleY = t.scaleZ = 1, St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", { parser: function(t, e, i, n, r, o, s) { if (n._lastParsedTransform === s) return r;
                    n._lastParsedTransform = s; var a, l, u, c, h, d, p, f, m, g = t._gsTransform,
                        v = t.style,
                        y = 1e-6,
                        _ = Pt.length,
                        x = s,
                        w = {},
                        b = "transformOrigin",
                        S = Ft(t, I, !0, s.parseTransform); if (n._transform = S, "string" == typeof x.transform && Ct)(l = N.style)[Ct] = x.transform, l.display = "block", l.position = "absolute", D.body.appendChild(N), a = Ft(N, null, !1), S.svg && (p = S.xOrigin, f = S.yOrigin, a.x -= S.xOffset, a.y -= S.yOffset, (x.transformOrigin || x.svgOrigin) && (u = {}, Dt(t, ot(x.transformOrigin), u, x.svgOrigin, x.smoothOrigin, !0), p = u.xOrigin, f = u.yOrigin, a.x -= u.xOffset - S.xOffset, a.y -= u.yOffset - S.yOffset), (p || f) && (m = Ht(N, !0), a.x -= p - (p * m[0] + f * m[2]), a.y -= f - (p * m[1] + f * m[3]))), D.body.removeChild(N), a.perspective || (a.perspective = S.perspective), null != x.xPercent && (a.xPercent = at(x.xPercent, S.xPercent)), null != x.yPercent && (a.yPercent = at(x.yPercent, S.yPercent));
                    else if ("object" == typeof x) { if (a = { scaleX: at(null != x.scaleX ? x.scaleX : x.scale, S.scaleX), scaleY: at(null != x.scaleY ? x.scaleY : x.scale, S.scaleY), scaleZ: at(x.scaleZ, S.scaleZ), x: at(x.x, S.x), y: at(x.y, S.y), z: at(x.z, S.z), xPercent: at(x.xPercent, S.xPercent), yPercent: at(x.yPercent, S.yPercent), perspective: at(x.transformPerspective, S.perspective) }, null != (d = x.directionalRotation))
                            if ("object" == typeof d)
                                for (l in d) x[l] = d[l];
                            else x.rotation = d;
                            "string" == typeof x.x && -1 !== x.x.indexOf("%") && (a.x = 0, a.xPercent = at(x.x, S.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (a.y = 0, a.yPercent = at(x.y, S.yPercent)), a.rotation = lt("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : "rotationZ" in x ? x.rotationZ : S.rotation - S.skewY, S.rotation - S.skewY, "rotation", w), Et && (a.rotationX = lt("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : S.rotationX || 0, S.rotationX, "rotationX", w), a.rotationY = lt("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : S.rotationY || 0, S.rotationY, "rotationY", w)), a.skewX = lt(x.skewX, S.skewX - S.skewY), (a.skewY = lt(x.skewY, S.skewY)) && (a.skewX += a.skewY, a.rotation += a.skewY) } for (Et && null != x.force3D && (S.force3D = x.force3D, h = !0), S.skewType = x.skewType || S.skewType || X.defaultSkewType, (c = S.force3D || S.z || S.rotationX || S.rotationY || a.z || a.rotationX || a.rotationY || a.perspective) || null == x.scale || (a.scaleZ = 1); - 1 < --_;)(y < (u = a[i = Pt[_]] - S[i]) || u < -y || null != x[i] || null != R[i]) && (h = !0, r = new yt(S, i, S[i], u, r), i in w && (r.e = w[i]), r.xs0 = 0, r.plugin = o, n._overwriteProps.push(r.n)); return u = x.transformOrigin, S.svg && (u || x.svgOrigin) && (p = S.xOffset, f = S.yOffset, Dt(t, ot(u), a, x.svgOrigin, x.smoothOrigin), r = _t(S, "xOrigin", (g ? S : a).xOrigin, a.xOrigin, r, b), r = _t(S, "yOrigin", (g ? S : a).yOrigin, a.yOrigin, r, b), (p !== S.xOffset || f !== S.yOffset) && (r = _t(S, "xOffset", g ? p : S.xOffset, S.xOffset, r, b), r = _t(S, "yOffset", g ? f : S.yOffset, S.yOffset, r, b)), u = It ? null : "0px 0px"), (u || Et && c && S.zOrigin) && (Ct ? (h = !0, i = kt, u = (u || Z(t, i, I, !1, "50% 50%")) + "", (r = new yt(v, i, 0, 0, r, -1, b)).b = v[i], r.plugin = o, r.xs0 = r.e = Et ? (l = S.zOrigin, u = u.split(" "), S.zOrigin = (2 < u.length && (0 === l || "0px" !== u[2]) ? parseFloat(u[2]) : l) || 0, r.xs0 = r.e = u[0] + " " + (u[1] || "50%") + " 0px", (r = new yt(S, "zOrigin", 0, 0, r, -1, r.n)).b = l, S.zOrigin) : u) : ot(u + "", S)), h && (n._transformType = S.svg && It || !c && 3 !== this._transformType ? 2 : 3), r }, prefix: !0 }), St("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), St("borderRadius", { defaultValue: "0px", parser: function(t, e, i, n, r, o) { e = this.format(e); var s, a, l, u, c, h, d, p, f, m, g, v, y, _, x, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        S = t.style; for (f = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), s = e.split(" "), a = 0; a < b.length; a++) this.p.indexOf("border") && (b[a] = $(b[a])), -1 !== (c = u = Z(t, b[a], I, !1, "0px")).indexOf(" ") && (c = (u = c.split(" "))[0], u = u[1]), h = l = s[a], d = parseFloat(c), v = c.substr((d + "").length), "" === (g = (y = "=" === h.charAt(1)) ? (p = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), p *= parseFloat(h), h.substr((p + "").length - (p < 0 ? 1 : 0)) || "") : (p = parseFloat(h), h.substr((p + "").length))) && (g = T[i] || v), g !== v && (_ = K(t, "borderLeft", d, v), x = K(t, "borderTop", d, v), u = "%" === g ? (c = _ / f * 100 + "%", x / m * 100 + "%") : "em" === g ? (c = _ / (w = K(t, "borderLeft", 1, "em")) + "em", x / w + "em") : (c = _ + "px", x + "px"), y && (h = parseFloat(c) + p + g, l = parseFloat(u) + p + g)), r = xt(S, b[a], c + " " + u, h + " " + l, !1, "0px", r); return r }, prefix: !0, formatter: mt("0px 0px 0px 0px", !1, !0) }), St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function(t, e, i, n, r, o) { return xt(t.style, i, this.format(Z(t, i, I, !1, "0px 0px")), this.format(e), !1, "0px", r) }, prefix: !0, formatter: mt("0px 0px", !1, !0) }), St("backgroundPosition", { defaultValue: "0 0", parser: function(t, e, i, n, r, o) { var s, a, l, u, c, h, d = "background-position",
                        p = I || G(t, null),
                        f = this.format((p ? P ? p.getPropertyValue(d + "-x") + " " + p.getPropertyValue(d + "-y") : p.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        m = this.format(e); if (-1 !== f.indexOf("%") != (-1 !== m.indexOf("%")) && m.split(",").length < 2 && ((h = Z(t, "backgroundImage").replace(b, "")) && "none" !== h)) { for (s = f.split(" "), a = m.split(" "), H.setAttribute("src", h), l = 2; - 1 < --l;)(u = -1 !== (f = s[l]).indexOf("%")) !== (-1 !== a[l].indexOf("%")) && (c = 0 === l ? t.offsetWidth - H.width : t.offsetHeight - H.height, s[l] = u ? parseFloat(f) / 100 * c + "px" : parseFloat(f) / c * 100 + "%");
                        f = s.join(" ") } return this.parseComplex(t.style, f, m, r, o) }, formatter: ot }), St("backgroundSize", { defaultValue: "0 0", formatter: ot }), St("perspective", { defaultValue: "0px", prefix: !0 }), St("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), St("transformStyle", { prefix: !0 }), St("backfaceVisibility", { prefix: !0 }), St("userSelect", { prefix: !0 }), St("margin", { parser: gt("marginTop,marginRight,marginBottom,marginLeft") }), St("padding", { parser: gt("paddingTop,paddingRight,paddingBottom,paddingLeft") }), St("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function(t, e, i, n, r, o) { var s, a, l; return e = P < 9 ? (a = t.currentStyle, l = P < 8 ? " " : ",", s = "rect(" + a.clipTop + l + a.clipRight + l + a.clipBottom + l + a.clipLeft + ")", this.format(e).split(",").join(l)) : (s = this.format(Z(t, this.p, I, !1, this.dflt)), this.format(e)), this.parseComplex(t.style, s, e, r, o) } }), St("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), St("autoRound,strictUnits", { parser: function(t, e, i, n, r) { return r } }), St("border", { defaultValue: "0px solid #000", parser: function(t, e, i, n, r, o) { var s = Z(t, "borderTopWidth", I, !1, "0px"),
                        a = this.format(e).split(" "),
                        l = a[0].replace(E, ""); return "px" !== l && (s = parseFloat(s) / K(t, "borderTopWidth", 1, l) + l), this.parseComplex(t.style, this.format(s + " " + Z(t, "borderTopStyle", I, !1, "solid") + " " + Z(t, "borderTopColor", I, !1, "#000")), a.join(" "), r, o) }, color: !0, formatter: function(t) { var e = t.split(" "); return e[0] + " " + (e[1] || "solid") + " " + (t.match(dt) || ["#000"])[0] } }), St("borderWidth", { parser: gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), St("float,cssFloat,styleFloat", { parser: function(t, e, i, n, r, o) { var s = t.style,
                        a = "cssFloat" in s ? "cssFloat" : "styleFloat"; return new yt(s, a, 0, 0, r, -1, i, !1, 0, s[a], e) } });
            var Qt = function(t) {
                var e, i = this.t,
                    n = i.filter || Z(this.data, "filter") || "",
                    r = this.s + this.c * t | 0;
                100 === r && (e = -1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), !Z(this.data, "filter")) : (i.filter = n.replace(s, ""), !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(A, "opacity=" + r))
            };
            St("opacity,alpha,autoAlpha", { defaultValue: "1", parser: function(t, e, i, n, r, o) { var s = parseFloat(Z(t, "opacity", I, !1, "1")),
                        a = t.style,
                        l = "autoAlpha" === i; return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + s), l && 1 === s && "hidden" === Z(t, "visibility", I) && 0 !== e && (s = 0), F ? r = new yt(a, "opacity", s, e - s, r) : ((r = new yt(a, "opacity", 100 * s, 100 * (e - s), r)).xn1 = l ? 1 : 0, a.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = o, r.setRatio = Qt), l && ((r = new yt(a, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== s ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r } });
            var $t = function(t, e) { e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(a, "-$1").toLowerCase())) : t.removeAttribute(e)) },
                Gt = function(t) { if (this.t._gsClassPT = this, 1 === t || 0 === t) { this.t.setAttribute("class", 0 === t ? this.b : this.e); for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : $t(i, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null) } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e) };
            St("className", { parser: function(t, e, i, n, r, o, s) { var a, l, u, c, h, d = t.getAttribute("class") || "",
                        p = t.style.cssText; if ((r = n._classNamePT = new yt(t, i, 0, 0, r, 2)).setRatio = Gt, r.pr = -11, f = !0, r.b = d, l = tt(t, I), u = t._gsClassPT) { for (c = {}, h = u.data; h;) c[h.p] = 1, h = h._next;
                        u.setRatio(1) } return (t._gsClassPT = r).e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", r.e), a = et(t, l, tt(t), s, c), t.setAttribute("class", d), r.data = a.firstMPT, t.style.cssText = p, r = r.xfirst = n.parse(t, a.difs, r, o) } });
            var Zt = function(t) { if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) { var e, i, n, r, o, s = this.t.style,
                        a = m.transform.parse; if ("all" === this.e) r = !(s.cssText = "");
                    else
                        for (n = (e = this.e.split(" ").join("").split(",")).length; - 1 < --n;) i = e[n], m[i] && (m[i].parse === a ? r = !0 : i = "transformOrigin" === i ? kt : m[i].p), $t(s, i);
                    r && ($t(s, Ct), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform)) } };
            for (St("clearProps", { parser: function(t, e, i, n, r) { return (r = new yt(t, i, 0, 0, r, 2)).setRatio = Zt, r.e = e, r.pr = -10, r.data = n._tween, f = !0, r } }), t = "bezier,throwProps,physicsProps,physics2D".split(","), wt = t.length; wt--;) Tt(t[wt]);
            (t = X.prototype)._firstPT = t._lastParsedTransform = t._transform = null, t._onInitTween = function(t, e, i) { if (!t.nodeType) return !1;
                this._target = t, this._tween = i, this._vars = e, C = e.autoRound, f = !1, T = e.suffixMap || X.suffixMap, I = G(t, ""), p = this._overwriteProps; var n, r, o, s, a, l, u, c, h, d = t.style; if (g && "" === d.zIndex && (("auto" === (n = Z(t, "zIndex", I)) || "" === n) && this._addLazySet(d, "zIndex", 0)), "string" == typeof e && (s = d.cssText, n = tt(t, I), d.cssText = s + ";" + e, n = et(t, n, tt(t)).difs, !F && x.test(e) && (n.opacity = parseFloat(RegExp.$1)), e = n, d.cssText = s), e.className ? this._firstPT = r = m.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = r = this.parse(t, e, null), this._transformType) { for (h = 3 === this._transformType, Ct ? v && (g = !0, "" === d.zIndex && (("auto" === (u = Z(t, "zIndex", I)) || "" === u) && this._addLazySet(d, "zIndex", 0)), y && this._addLazySet(d, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (h ? "visible" : "hidden"))) : d.zoom = 1, o = r; o && o._next;) o = o._next;
                    c = new yt(t, "transform", 0, 0, null, 2), this._linkCSSP(c, null, o), c.setRatio = Ct ? Xt : qt, c.data = this._transform || Ft(t, I, !0), c.tween = i, c.pr = -1, p.pop() } if (f) { for (; r;) { for (l = r._next, o = s; o && o.pr > r.pr;) o = o._next;
                        (r._prev = o ? o._prev : a) ? r._prev._next = r: s = r, (r._next = o) ? o._prev = r : a = r, r = l }
                    this._firstPT = s } return !0 }, t.parse = function(t, e, i, n) { var r, o, s, a, l, u, c, h, d, p, f = t.style; for (r in e) u = e[r], (o = m[r]) ? i = o.parse(t, u, r, this, i, n, e) : (l = Z(t, r, I) + "", d = "string" == typeof u, "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || d && w.test(u) ? (d || (u = (3 < (u = ht(u)).length ? "rgba(" : "rgb(") + u.join(",") + ")"), i = xt(f, r, l, u, !0, "transparent", i, 0, n)) : d && L.test(u) ? i = xt(f, r, l, u, !0, null, i, 0, n) : (c = (s = parseFloat(l)) || 0 === s ? l.substr((s + "").length) : "", ("" === l || "auto" === l) && (c = "width" === r || "height" === r ? (s = rt(t, r, I), "px") : "left" === r || "top" === r ? (s = J(t, r, I), "px") : (s = "opacity" !== r ? 0 : 1, "")), "" === (h = (p = d && "=" === u.charAt(1)) ? (a = parseInt(u.charAt(0) + "1", 10), u = u.substr(2), a *= parseFloat(u), u.replace(E, "")) : (a = parseFloat(u), d ? u.replace(E, "") : "")) && (h = r in T ? T[r] : c), u = a || 0 === a ? (p ? a + s : a) + h : e[r], c !== h && "" !== h && (a || 0 === a) && s && (s = K(t, r, s, c), "%" === h ? (s /= K(t, r, 100, "%") / 100, !0 !== e.strictUnits && (l = s + "%")) : "em" === h || "rem" === h || "vw" === h || "vh" === h ? s /= K(t, r, 1, h) : "px" !== h && (a = K(t, r, a, h), h = "px"), p && (a || 0 === a) && (u = a + s + h)), p && (a += s), !s && 0 !== s || !a && 0 !== a ? void 0 !== f[r] && (u || u + "" != "NaN" && null != u) ? (i = new yt(f, r, a || s || 0, 0, i, -1, r, !1, 0, l, u)).xs0 = "none" !== u || "display" !== r && -1 === r.indexOf("Style") ? u : l : U("invalid " + r + " tween value: " + e[r]) : (i = new yt(f, r, s, a - s, i, 0, r, !1 !== C && ("px" === h || "zIndex" === r), 0, l, u)).xs0 = h)), n && i && !i.plugin && (i.plugin = n); return i }, t.setRatio = function(t) { var e, i, n, r = this._firstPT,
                    o = 1e-6; if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; r;) { if (e = r.c * t + r.s, r.r ? e = Math.round(e) : e < o && -o < e && (e = 0), r.type)
                                if (1 === r.type)
                                    if (2 === (n = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                    else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                            else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                            else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                            else { for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                r.t[r.p] = i } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                            else r.t[r.p] = e + r.xs0;
                            r = r._next } else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                    else
                        for (; r;) { if (2 !== r.type)
                                if (r.r && -1 !== r.type)
                                    if (e = Math.round(r.s + r.c), r.type) { if (1 === r.type) { for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                            r.t[r.p] = i } } else r.t[r.p] = e + r.xs0;
                            else r.t[r.p] = r.e;
                            else r.setRatio(t);
                            r = r._next } }, t._enableTransforms = function(t) { this._transform = this._transform || Ft(this._target, I, !0), this._transformType = this._transform.svg && It || !t && 3 !== this._transformType ? 2 : 3 };
            var Kt = function(t) { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0) };
            t._addLazySet = function(t, e, i) { var n = this._firstPT = new yt(t, e, 0, 0, this._firstPT, 2);
                n.e = i, n.setRatio = Kt, n.data = this }, t._linkCSSP = function(t, e, i, n) { return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t }, t._kill = function(t) { var e, i, n, r = t; if (t.autoAlpha || t.alpha) { for (i in r = {}, t) r[i] = t[i];
                    r.opacity = 1, r.autoAlpha && (r.visibility = 1) } return t.className && (e = this._classNamePT) && ((n = e.xfirst) && n._prev ? this._linkCSSP(n._prev, e._next, n._prev._prev) : n === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, n._prev), this._classNamePT = null), o.prototype._kill.call(this, r) };
            var Jt = function(t, e, i) { var n, r, o, s; if (t.slice)
                    for (r = t.length; - 1 < --r;) Jt(t[r], e, i);
                else
                    for (r = (n = t.childNodes).length; - 1 < --r;) s = (o = n[r]).type, o.style && (e.push(tt(o)), i && i.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Jt(o, e, i) };
            return X.cascadeTo = function(t, e, i) { var n, r, o, s, a = q.to(t, e, i),
                    l = [a],
                    u = [],
                    c = [],
                    h = [],
                    d = q._internals.reservedProps; for (t = a._targets || a.target, Jt(t, u, h), a.render(e, !0, !0), Jt(t, c), a.render(0, !0, !0), a._enabled(!0), n = h.length; - 1 < --n;)
                    if ((r = et(h[n], u[n], c[n])).firstMPT) { for (o in r = r.difs, i) d[o] && (r[o] = i[o]); for (o in s = {}, r) s[o] = u[n][o];
                        l.push(q.fromTo(h[n], e, s, r)) }
                return l }, o.activate([X]), X
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) { "use strict"; var e = function() { return (_gsScope.GreenSockGlobals || _gsScope)[t] }; "function" == typeof define && define.amd ? define(["../TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = e()) }("CSSPlugin"), //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
    ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var s = document.documentElement,
            a = window,
            o = function(t, e) { var i = "x" === e ? "Width" : "Height",
                    n = "scroll" + i,
                    r = "client" + i,
                    o = document.body; return t === a || t === s || t === o ? Math.max(s[n], o[n]) - (a["inner" + i] || s[r] || o[r]) : t[n] - t["offset" + i] },
            t = _gsScope._gsDefine.plugin({
                propName: "scrollTo",
                API: 2,
                version: "1.7.6",
                //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
                init: function(t, e, i) { return this._wdw = t === a, this._target = t, this._tween = i, "object" != typeof e && (e = { y: e }), this.vars = e, this._autoKill = !1 !== e.autoKill, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != e.x ? (this._addTween(this, "x", this.x, "max" === e.x ? o(t, "x") : e.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != e.y ? (this._addTween(this, "y", this.y, "max" === e.y ? o(t, "y") : e.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0 },
                //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
                set: function(t) {
                    this._super.setRatio.call(this, t);
                    var e = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                        i = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                        n = i - this.yPrev,
                        r = e - this.xPrev;
                    this.x < 0 && ( //can't scroll to a position less than 0! Might happen if someone uses a Back.easeOut or Elastic.easeOut when scrolling back to the top of the page (for example)
                        this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (
                        //note: iOS has a bug that throws off the scroll by several pixels, so we need to check if it's within 7 pixels of the previous one that we set instead of just looking for an exact match.
                        !this.skipX && (7 < r || r < -7) && e < o(this._target, "x") && (this.skipX = !0), !this.skipY && (7 < n || n < -7) && i < o(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? a.scrollTo(this.skipX ? e : this.x, this.skipY ? i : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                }
            }),
            e = t.prototype;
        t.max = o, e.getX = function() { return this._wdw ? null != a.pageXOffset ? a.pageXOffset : null != s.scrollLeft ? s.scrollLeft : document.body.scrollLeft : this._target.scrollLeft }, e.getY = function() { return this._wdw ? null != a.pageYOffset ? a.pageYOffset : null != s.scrollTop ? s.scrollTop : document.body.scrollTop : this._target.scrollTop }, e._kill = function(t) { return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t) }
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()();