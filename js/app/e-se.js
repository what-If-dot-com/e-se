angular.module("e-se", [
    'ui.router', 'ngResource', 'mongolabResourceHttp', 'ngAnimate', 'ui.bootstrap', 'ngMessages'
]).constant('MONGOLAB_CONFIG', {API_KEY: 'YXgR-q92vuVCKlSm-ji3nplDTE7rHIQh', DB_NAME: 'ese'});

    $.fn.drift = function() {
        $(this).each(function(t, i) {
            var r = 0;
            $(window).on("scroll resize", function() {
                function c() {
                    var i = e(t),
                        r = t.prev(),
                        u, n, f;
                    return r.length > 0 && (u = e(r), u.isBeside(i)) ? !0 : (n = t.next(), n.length > 0 && (f = e(n), f.isBeside(i))) ? !0 : !1
                }

                function l() {
                    return t.outerHeight() > u.height()
                }

                function a() {
                    return r == u.scrollTop()
                }

                function o() {
                    return r < u.scrollTop()
                }

                function f() {
                    return u.scrollTop() <= t.offset().top
                }

                function v() {
                    return t.offset().top - u.scrollTop()
                }

                function y() {
                    return u.scrollTop() + u.height() >= t.offset().top + t.height()
                }

                function e(n) {
                    var r = n.offset().left,
                        u = r + n.width(),
                        t = n.offset().top,
                        i = t + n.height();
                    return {
                        top: t,
                        right: u,
                        bottom: i,
                        left: r,
                        isBeside: function(n) {
                            return (n.right >= u || n.left <= r) && (n.bottom > t && n.bottom < i || n.top > t && n.top < i || n.top <= t && n.bottom >= i)
                        }
                    }
                }

                function p() {
                    t.css({
                        "margin-top": "0px"
                    })
                }

                function s(n) {
                    var i = Math.max(0, u.scrollTop() - t.offset().top + parseInt(t.css("margin-top")) + n);
                    i = Math.min(i, h());
                    t.css({
                        "margin-top": i + "px"
                    })
                }

                function w(n) {
                    var i = Math.max(0, u.scrollTop() + u.height() - t.offset().top - t.outerHeight() + parseInt(t.css("margin-top")) - n);
                    i = Math.min(i, h());
                    t.css({
                        "margin-top": i + "px"
                    })
                }

                function h() {
                    var i = t.offset().left,
                        r = t.outerHeight();
                    return t.parent().children().each(function(u, f) {
                        n(f)[0] != t[0] && n(f).is(":visible") && !n(f).is(".clearfix") && (n(f).offset().left == i || n(f).offset().left < i && n(f).offset().left + n(f).width() > i) && (r += n(f).outerHeight())
                    }), Math.max(0, t.parent().height() - r)
                }
                var u = n(window),
                    t = n(i);
                c() ? l() ? o() && y() ? w(10) : (!o() && f() || a() && !f()) && s(10) : (!f() || v() > 0) && s(10) : p();
                r = u.scrollTop()
            })
        })
    };

    $('.pending-surveys').drift();