define("components/layer/layer", function(e, t, i) {
	! function(e, t) {
		"use strict";
		var n, a, o = {
				config: {},
				end: {},
				minIndex: 0,
				minLeft: [],
				btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
				type: ["dialog", "page", "iframe", "loading", "tips"],
				getStyle: function(t, i) {
					var n = t.currentStyle ? t.currentStyle : e.getComputedStyle(t, null);
					return n[n.getPropertyValue ? "getPropertyValue" : "getAttribute"](i)
				}
			},
			r = {
				v: "3.1.1",
				ie: function() {
					var t = navigator.userAgent.toLowerCase();
					return e.ActiveXObject || "ActiveXObject" in e ? (t.match(/msie\s(\d+)/) || [])[1] || "11" : !1
				}(),
				index: e.layer && e.layer.v ? 1e5 : 0,
				alert: function(e, t, i) {
					var a = "function" == typeof t;
					return a && (i = t), r.open(n.extend({
						content: e,
						yes: i
					}, a ? {} : t))
				},
				confirm: function(e, t, i, a) {
					var s = "function" == typeof t;
					return s && (a = i, i = t), r.open(n.extend({
						content: e,
						btn: o.btn,
						yes: i,
						btn2: a
					}, s ? {} : t))
				},
				msg: function(e, i, a) {
					var s = "function" == typeof i,
						f = o.config.skin,
						c = (f ? f + " " + f + "-msg" : "") || "layui-layer-msg",
						u = l.anim.length - 1;
					return s && (a = i), r.open(n.extend({
						content: e,
						time: 3e3,
						shade: !1,
						skin: c,
						title: !1,
						closeBtn: !1,
						btn: !1,
						resize: !1,
						end: a
					}, s && !o.config.skin ? {
						skin: c + " layui-layer-hui",
						anim: u
					} : function() {
						return i = i || {}, (-1 === i.icon || i.icon === t && !o.config.skin) && (i.skin = c + " " + (i.skin ||
							"layui-layer-hui")), i
					}()))
				},
				load: function(e, t) {
					return r.open(n.extend({
						type: 3,
						icon: e || 0,
						resize: !1,
						shade: .01
					}, t))
				},
				tips: function(e, t, i) {
					return r.open(n.extend({
						type: 4,
						content: [e, t],
						closeBtn: !1,
						time: 3e3,
						shade: !1,
						resize: !1,
						fixed: !1,
						maxWidth: 210
					}, i))
				}
			},
			s = function(e) {
				var t = this;
				t.index = ++r.index, t.config = n.extend({}, t.config, o.config, e), document.body ? t.creat() : setTimeout(
					function() {
						t.creat()
					}, 30)
			};
		s.pt = s.prototype;
		var l = ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog", "layui-layer-iframe",
			"layui-layer-content", "layui-layer-btn", "layui-layer-close"
		];
		l.anim = ["layer-anim-00", "layer-anim-01", "layer-anim-02", "layer-anim-03", "layer-anim-04", "layer-anim-05",
			"layer-anim-06"
		], s.pt.config = {
			type: 0,
			shade: .3,
			fixed: !0,
			move: l[1],
			title: "&#x4FE1;&#x606F;",
			offset: "auto",
			area: "auto",
			closeBtn: 1,
			time: 0,
			zIndex: 19891014,
			maxWidth: 360,
			anim: 0,
			isOutAnim: !0,
			icon: -1,
			moveType: 1,
			resize: !0,
			scrollbar: !0,
			tips: 2
		}, s.pt.vessel = function(e, t) {
			var i = this,
				a = i.index,
				r = i.config,
				s = r.zIndex + a,
				f = "object" == typeof r.title,
				c = r.maxmin && (1 === r.type || 2 === r.type),
				u = r.title ? '<div class="layui-layer-title" style="' + (f ? r.title[1] : "") + '">' + (f ? r.title[0] : r.title) +
				"</div>" : "";
			return r.zIndex = s, t([r.shade ? '<div class="layui-layer-shade" id="layui-layer-shade' + a + '" times="' + a +
				'" style="' + ("z-index:" + (s - 1) + "; ") + '"></div>' : "", '<div class="' + l[0] + (" layui-layer-" + o.type[
					r.type]) + (0 != r.type && 2 != r.type || r.shade ? "" : " layui-layer-border") + " " + (r.skin || "") +
				'" id="' + l[0] + a + '" type="' + o.type[r.type] + '" times="' + a + '" showtime="' + r.time + '" conType="' +
				(e ? "object" : "string") + '" style="z-index: ' + s + "; width:" + r.area[0] + ";height:" + r.area[1] + (r.fixed ?
					"" : ";position:absolute;") + '">' + (e && 2 != r.type ? "" : u) + '<div id="' + (r.id || "") +
				'" class="layui-layer-content' + (0 == r.type && -1 !== r.icon ? " layui-layer-padding" : "") + (3 == r.type ?
					" layui-layer-loading" + r.icon : "") + '">' + (0 == r.type && -1 !== r.icon ?
					'<i class="layui-layer-ico layui-layer-ico' + r.icon + '"></i>' : "") + (1 == r.type && e ? "" : r.content ||
					"") + '</div><span class="layui-layer-setwin">' + function() {
					var e = c ?
						'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>' :
						"";
					return r.closeBtn && (e += '<a class="layui-layer-ico ' + l[7] + " " + l[7] + (r.title ? r.closeBtn : 4 == r.type ?
						"1" : "2") + '" href="javascript:;"></a>'), e
				}() + "</span>" + (r.btn ? function() {
					var e = "";
					"string" == typeof r.btn && (r.btn = [r.btn]);
					for (var t = 0, i = r.btn.length; i > t; t++) e += '<a class="' + l[6] + t + '">' + r.btn[t] + "</a>";
					return '<div class="' + l[6] + " layui-layer-btn-" + (r.btnAlign || "") + '">' + e + "</div>"
				}() : "") + (r.resize ? '<span class="layui-layer-resize"></span>' : "") + "</div>"
			], u, n('<div class="layui-layer-move"></div>')), i
		}, s.pt.creat = function() {
			var e = this,
				t = e.config,
				i = e.index,
				s = t.content,
				f = "object" == typeof s,
				c = n("body");
			if (!t.id || !n("#" + t.id)[0]) {
				switch ("string" == typeof t.area && (t.area = "auto" === t.area ? ["", ""] : [t.area, ""]), t.shift && (t.anim =
					t.shift), 6 == r.ie && (t.fixed = !1), t.type) {
					case 0:
						t.btn = "btn" in t ? t.btn : o.btn[0], r.closeAll("dialog");
						break;
					case 2:
						var s = t.content = f ? t.content : [t.content || "http://layer.layui.com", "auto"];
						t.content = '<iframe scrolling="' + (t.content[1] || "auto") + '" allowtransparency="true" id="' + l[4] + i +
							'" name="' + l[4] + i + '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + t.content[
								0] + '"></iframe>';
						break;
					case 3:
						delete t.title, delete t.closeBtn, -1 === t.icon && 0 === t.icon, r.closeAll("loading");
						break;
					case 4:
						f || (t.content = [t.content, "body"]), t.follow = t.content[1], t.content = t.content[0] +
							'<i class="layui-layer-TipsG"></i>', delete t.title, t.tips = "object" == typeof t.tips ? t.tips : [t.tips, !
								0
							], t.tipsMore || r.closeAll("tips")
				}
				if (e.vessel(f, function(a, r, u) {
						c.append(a[0]), f ? function() {
								2 == t.type || 4 == t.type ? function() {
									n("body").append(a[1])
								}() : function() {
									s.parents("." + l[0])[0] || (s.data("display", s.css("display")).show().addClass("layui-layer-wrap").wrap(
										a[1]), n("#" + l[0] + i).find("." + l[5]).before(r))
								}()
							}() : c.append(a[1]), n(".layui-layer-move")[0] || c.append(o.moveElem = u), e.layero = n("#" + l[0] + i), t
							.scrollbar || l.html.css("overflow", "hidden").attr("layer-full", i)
					}).auto(i), n("#layui-layer-shade" + e.index).css({
						"background-color": t.shade[1] || "#000",
						opacity: t.shade[0] || t.shade
					}), 2 == t.type && 6 == r.ie && e.layero.find("iframe").attr("src", s[0]), 4 == t.type ? e.tips() : e.offset(),
					t.fixed && a.on("resize", function() {
						e.offset(), (/^\d+%$/.test(t.area[0]) || /^\d+%$/.test(t.area[1])) && e.auto(i), 4 == t.type && e.tips()
					}), t.time <= 0 || setTimeout(function() {
						r.close(e.index)
					}, t.time), e.move().callback(), l.anim[t.anim]) {
					var u = "layer-anim " + l.anim[t.anim];
					e.layero.addClass(u).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
						function() {
							n(this).removeClass(u)
						})
				}
				t.isOutAnim && e.layero.data("isOutAnim", !0)
			}
		}, s.pt.auto = function(e) {
			var t = this,
				i = t.config,
				o = n("#" + l[0] + e);
			"" === i.area[0] && i.maxWidth > 0 && (r.ie && r.ie < 8 && i.btn && o.width(o.innerWidth()), o.outerWidth() > i.maxWidth &&
				o.width(i.maxWidth));
			var s = [o.innerWidth(), o.innerHeight()],
				f = o.find(l[1]).outerHeight() || 0,
				c = o.find("." + l[6]).outerHeight() || 0,
				u = function(e) {
					e = o.find(e), e.height(s[1] - f - c - 2 * (0 | parseFloat(e.css("padding-top"))))
				};
			switch (i.type) {
				case 2:
					u("iframe");
					break;
				default:
					"" === i.area[1] ? i.maxHeight > 0 && o.outerHeight() > i.maxHeight ? (s[1] = i.maxHeight, u("." + l[5])) : i.fixed &&
						s[1] >= a.height() && (s[1] = a.height(), u("." + l[5])) : u("." + l[5])
			}
			return t
		}, s.pt.offset = function() {
			var e = this,
				t = e.config,
				i = e.layero,
				n = [i.outerWidth(), i.outerHeight()],
				o = "object" == typeof t.offset;
			e.offsetTop = (a.height() - n[1]) / 2, e.offsetLeft = (a.width() - n[0]) / 2, o ? (e.offsetTop = t.offset[0], e.offsetLeft =
				t.offset[1] || e.offsetLeft) : "auto" !== t.offset && ("t" === t.offset ? e.offsetTop = 0 : "r" === t.offset ?
				e.offsetLeft = a.width() - n[0] : "b" === t.offset ? e.offsetTop = a.height() - n[1] : "l" === t.offset ? e.offsetLeft =
				0 : "lt" === t.offset ? (e.offsetTop = 0, e.offsetLeft = 0) : "lb" === t.offset ? (e.offsetTop = a.height() - n[
					1], e.offsetLeft = 0) : "rt" === t.offset ? (e.offsetTop = 0, e.offsetLeft = a.width() - n[0]) : "rb" === t.offset ?
				(e.offsetTop = a.height() - n[1], e.offsetLeft = a.width() - n[0]) : e.offsetTop = t.offset), t.fixed || (e.offsetTop =
				/%$/.test(e.offsetTop) ? a.height() * parseFloat(e.offsetTop) / 100 : parseFloat(e.offsetTop), e.offsetLeft =
				/%$/.test(e.offsetLeft) ? a.width() * parseFloat(e.offsetLeft) / 100 : parseFloat(e.offsetLeft), e.offsetTop +=
				a.scrollTop(), e.offsetLeft += a.scrollLeft()), i.attr("minLeft") && (e.offsetTop = a.height() - (i.find(l[1]).outerHeight() ||
				0), e.offsetLeft = i.css("left")), i.css({
				top: e.offsetTop,
				left: e.offsetLeft
			})
		}, s.pt.tips = function() {
			var e = this,
				t = e.config,
				i = e.layero,
				o = [i.outerWidth(), i.outerHeight()],
				r = n(t.follow);
			r[0] || (r = n("body"));
			var s = {
					width: r.outerWidth(),
					height: r.outerHeight(),
					top: r.offset().top,
					left: r.offset().left
				},
				f = i.find(".layui-layer-TipsG"),
				c = t.tips[0];
			t.tips[1] || f.remove(), s.autoLeft = function() {
					s.left + o[0] - a.width() > 0 ? (s.tipLeft = s.left + s.width - o[0], f.css({
						right: 12,
						left: "auto"
					})) : s.tipLeft = s.left
				}, s.where = [function() {
					s.autoLeft(), s.tipTop = s.top - o[1] - 10, f.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css(
						"border-right-color", t.tips[1])
				}, function() {
					s.tipLeft = s.left + s.width + 10, s.tipTop = s.top, f.removeClass("layui-layer-TipsL").addClass(
						"layui-layer-TipsR").css("border-bottom-color", t.tips[1])
				}, function() {
					s.autoLeft(), s.tipTop = s.top + s.height + 10, f.removeClass("layui-layer-TipsT").addClass(
						"layui-layer-TipsB").css("border-right-color", t.tips[1])
				}, function() {
					s.tipLeft = s.left - o[0] - 10, s.tipTop = s.top, f.removeClass("layui-layer-TipsR").addClass(
						"layui-layer-TipsL").css("border-bottom-color", t.tips[1])
				}], s.where[c - 1](), 1 === c ? s.top - (a.scrollTop() + o[1] + 16) < 0 && s.where[2]() : 2 === c ? a.width() -
				(s.left + s.width + o[0] + 16) > 0 || s.where[3]() : 3 === c ? s.top - a.scrollTop() + s.height + o[1] + 16 - a.height() >
				0 && s.where[0]() : 4 === c && o[0] + 16 - s.left > 0 && s.where[1](), i.find("." + l[5]).css({
					"background-color": t.tips[1],
					"padding-right": t.closeBtn ? "30px" : ""
				}), i.css({
					left: s.tipLeft - (t.fixed ? a.scrollLeft() : 0),
					top: s.tipTop - (t.fixed ? a.scrollTop() : 0)
				})
		}, s.pt.move = function() {
			var e = this,
				t = e.config,
				i = n(document),
				s = e.layero,
				l = s.find(t.move),
				f = s.find(".layui-layer-resize"),
				c = {};
			return t.move && l.css("cursor", "move"), l.on("mousedown", function(e) {
				e.preventDefault(), t.move && (c.moveStart = !0, c.offset = [e.clientX - parseFloat(s.css("left")), e.clientY -
					parseFloat(s.css("top"))
				], o.moveElem.css("cursor", "move").show())
			}), f.on("mousedown", function(e) {
				e.preventDefault(), c.resizeStart = !0, c.offset = [e.clientX, e.clientY], c.area = [s.outerWidth(), s.outerHeight()],
					o.moveElem.css("cursor", "se-resize").show()
			}), i.on("mousemove", function(i) {
				if (c.moveStart) {
					var n = i.clientX - c.offset[0],
						o = i.clientY - c.offset[1],
						l = "fixed" === s.css("position");
					if (i.preventDefault(), c.stX = l ? 0 : a.scrollLeft(), c.stY = l ? 0 : a.scrollTop(), !t.moveOut) {
						var f = a.width() - s.outerWidth() + c.stX,
							u = a.height() - s.outerHeight() + c.stY;
						n < c.stX && (n = c.stX), n > f && (n = f), o < c.stY && (o = c.stY), o > u && (o = u)
					}
					s.css({
						left: n,
						top: o
					})
				}
				if (t.resize && c.resizeStart) {
					var n = i.clientX - c.offset[0],
						o = i.clientY - c.offset[1];
					i.preventDefault(), r.style(e.index, {
						width: c.area[0] + n,
						height: c.area[1] + o
					}), c.isResize = !0, t.resizing && t.resizing(s)
				}
			}).on("mouseup", function() {
				c.moveStart && (delete c.moveStart, o.moveElem.hide(), t.moveEnd && t.moveEnd(s)), c.resizeStart && (delete c.resizeStart,
					o.moveElem.hide())
			}), e
		}, s.pt.callback = function() {
			function e() {
				var e = a.cancel && a.cancel(t.index, i);
				e === !1 || r.close(t.index)
			}
			var t = this,
				i = t.layero,
				a = t.config;
			t.openLayer(), a.success && (2 == a.type ? i.find("iframe").on("load", function() {
				a.success(i, t.index)
			}) : a.success(i, t.index)), 6 == r.ie && t.IE6(i), i.find("." + l[6]).children("a").on("click", function() {
				var e = n(this).index();
				if (0 === e) a.yes ? a.yes(t.index, i) : a.btn1 ? a.btn1(t.index, i) : r.close(t.index);
				else {
					var o = a["btn" + (e + 1)] && a["btn" + (e + 1)](t.index, i);
					o === !1 || r.close(t.index)
				}
			}), i.find("." + l[7]).on("click", e), a.shadeClose && n("#layui-layer-shade" + t.index).on("click", function() {
				r.close(t.index)
			}), i.find(".layui-layer-min").on("click", function() {
				var e = a.min && a.min(i);
				e === !1 || r.min(t.index, a)
			}), i.find(".layui-layer-max").on("click", function() {
				n(this).hasClass("layui-layer-maxmin") ? (r.restore(t.index), a.restore && a.restore(i)) : (r.full(t.index, a),
					setTimeout(function() {
						a.full && a.full(i)
					}, 100))
			}), a.end && (o.end[t.index] = a.end)
		}, o.reselect = function() {
			n.each(n("select"), function() {
				var e = n(this);
				e.parents("." + l[0])[0] || 1 == e.attr("layer") && n("." + l[0]).length < 1 && e.removeAttr("layer").show(),
					e = null
			})
		}, s.pt.IE6 = function() {
			n("select").each(function() {
				var e = n(this);
				e.parents("." + l[0])[0] || "none" === e.css("display") || e.attr({
					layer: "1"
				}).hide(), e = null
			})
		}, s.pt.openLayer = function() {
			var e = this;
			r.zIndex = e.config.zIndex, r.setTop = function(e) {
				var t = function() {
					r.zIndex++, e.css("z-index", r.zIndex + 1)
				};
				return r.zIndex = parseInt(e[0].style.zIndex), e.on("mousedown", t), r.zIndex
			}
		}, o.record = function(e) {
			var t = [e.width(), e.height(), e.position().top, e.position().left + parseFloat(e.css("margin-left"))];
			e.find(".layui-layer-max").addClass("layui-layer-maxmin"), e.attr({
				area: t
			})
		}, o.rescollbar = function(e) {
			l.html.attr("layer-full") == e && (l.html[0].style.removeProperty ? l.html[0].style.removeProperty("overflow") :
				l.html[0].style.removeAttribute("overflow"), l.html.removeAttr("layer-full"))
		}, e.layer = r, r.getChildFrame = function(e, t) {
			return t = t || n("." + l[4]).attr("times"), n("#" + l[0] + t).find("iframe").contents().find(e)
		}, r.getFrameIndex = function(e) {
			return n("#" + e).parents("." + l[4]).attr("times")
		}, r.iframeAuto = function(e) {
			if (e) {
				var t = r.getChildFrame("html", e).outerHeight(),
					i = n("#" + l[0] + e),
					a = i.find(l[1]).outerHeight() || 0,
					o = i.find("." + l[6]).outerHeight() || 0;
				i.css({
					height: t + a + o
				}), i.find("iframe").css({
					height: t
				})
			}
		}, r.iframeSrc = function(e, t) {
			n("#" + l[0] + e).find("iframe").attr("src", t)
		}, r.style = function(e, t, i) {
			{
				var a = n("#" + l[0] + e),
					r = a.find(".layui-layer-content"),
					s = a.attr("type"),
					f = a.find(l[1]).outerHeight() || 0,
					c = a.find("." + l[6]).outerHeight() || 0;
				a.attr("minLeft")
			}
			s !== o.type[3] && s !== o.type[4] && (i || (parseFloat(t.width) <= 260 && (t.width = 260), parseFloat(t.height) -
				f - c <= 64 && (t.height = 64 + f + c)), a.css(t), c = a.find("." + l[6]).outerHeight(), s === o.type[2] ? a.find(
				"iframe").css({
				height: parseFloat(t.height) - f - c
			}) : r.css({
				height: parseFloat(t.height) - f - c - parseFloat(r.css("padding-top")) - parseFloat(r.css("padding-bottom"))
			}))
		}, r.min = function(e) {
			var t = n("#" + l[0] + e),
				i = t.find(l[1]).outerHeight() || 0,
				s = t.attr("minLeft") || 181 * o.minIndex + "px",
				f = t.css("position");
			o.record(t), o.minLeft[0] && (s = o.minLeft[0], o.minLeft.shift()), t.attr("position", f), r.style(e, {
				width: 180,
				height: i,
				left: s,
				top: a.height() - i,
				position: "fixed",
				overflow: "hidden"
			}, !0), t.find(".layui-layer-min").hide(), "page" === t.attr("type") && t.find(l[4]).hide(), o.rescollbar(e), t.attr(
				"minLeft") || o.minIndex++, t.attr("minLeft", s)
		}, r.restore = function(e) {
			{
				var t = n("#" + l[0] + e),
					i = t.attr("area").split(",");
				t.attr("type")
			}
			r.style(e, {
					width: parseFloat(i[0]),
					height: parseFloat(i[1]),
					top: parseFloat(i[2]),
					left: parseFloat(i[3]),
					position: t.attr("position"),
					overflow: "visible"
				}, !0), t.find(".layui-layer-max").removeClass("layui-layer-maxmin"), t.find(".layui-layer-min").show(), "page" ===
				t.attr("type") && t.find(l[4]).show(), o.rescollbar(e)
		}, r.full = function(e) {
			var t, i = n("#" + l[0] + e);
			o.record(i), l.html.attr("layer-full") || l.html.css("overflow", "hidden").attr("layer-full", e), clearTimeout(t),
				t = setTimeout(function() {
					var t = "fixed" === i.css("position");
					r.style(e, {
						top: t ? 0 : a.scrollTop(),
						left: t ? 0 : a.scrollLeft(),
						width: a.width(),
						height: a.height()
					}, !0), i.find(".layui-layer-min").hide()
				}, 100)
		}, r.title = function(e, t) {
			var i = n("#" + l[0] + (t || r.index)).find(l[1]);
			i.html(e)
		}, r.close = function(e) {
			var t = n("#" + l[0] + e),
				i = t.attr("type"),
				a = "layer-anim-close";
			if (t[0]) {
				var s = "layui-layer-wrap",
					f = function() {
						if (i === o.type[1] && "object" === t.attr("conType")) {
							t.children(":not(." + l[5] + ")").remove();
							for (var a = t.find("." + s), r = 0; 2 > r; r++) a.unwrap();
							a.css("display", a.data("display")).removeClass(s)
						} else {
							if (i === o.type[2]) try {
								var f = n("#" + l[4] + e)[0];
								f.contentWindow.document.write(""), f.contentWindow.close(), t.find("." + l[5])[0].removeChild(f)
							} catch (c) {}
							t[0].innerHTML = "", t.remove()
						}
						"function" == typeof o.end[e] && o.end[e](), delete o.end[e]
					};
				t.data("isOutAnim") && t.addClass("layer-anim " + a), n("#layui-layer-moves, #layui-layer-shade" + e).remove(),
					6 == r.ie && o.reselect(), o.rescollbar(e), t.attr("minLeft") && (o.minIndex--, o.minLeft.push(t.attr("minLeft"))),
					r.ie && r.ie < 10 || !t.data("isOutAnim") ? f() : setTimeout(function() {
						f()
					}, 200)
			}
		}, r.closeAll = function(e) {
			n.each(n("." + l[0]), function() {
				var t = n(this),
					i = e ? t.attr("type") === e : 1;
				i && r.close(t.attr("times")), i = null
			})
		};
		var f = r.cache || {},
			c = function(e) {
				return f.skin ? " " + f.skin + " " + f.skin + "-" + e : ""
			};
		r.prompt = function(e, t) {
			var i = "";
			if (e = e || {}, "function" == typeof e && (t = e), e.area) {
				var o = e.area;
				i = 'style="width: ' + o[0] + "; height: " + o[1] + ';"', delete e.area
			}
			var s, l = 2 == e.formType ? '<textarea class="layui-layer-input"' + i + ">" + (e.value || "") + "</textarea>" :
				function() {
					return '<input type="' + (1 == e.formType ? "password" : "text") + '" class="layui-layer-input" value="' + (e.value ||
						"") + '">'
				}(),
				f = e.success;
			return delete e.success, r.open(n.extend({
				type: 1,
				btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
				content: l,
				skin: "layui-layer-prompt" + c("prompt"),
				maxWidth: a.width(),
				success: function(e) {
					s = e.find(".layui-layer-input"), s.focus(), "function" == typeof f && f(e)
				},
				resize: !1,
				yes: function(i) {
					var n = s.val();
					"" === n ? s.focus() : n.length > (e.maxlength || 500) ? r.tips("&#x6700;&#x591A;&#x8F93;&#x5165;" + (e.maxlength ||
						500) + "&#x4E2A;&#x5B57;&#x6570;", s, {
						tips: 1
					}) : t && t(n, i, s)
				}
			}, e))
		}, r.tab = function(e) {
			e = e || {};
			var t = e.tab || {},
				i = "layui-this",
				a = e.success;
			return delete e.success, r.open(n.extend({
				type: 1,
				skin: "layui-layer-tab" + c("tab"),
				resize: !1,
				title: function() {
					var e = t.length,
						n = 1,
						a = "";
					if (e > 0)
						for (a = '<span class="' + i + '">' + t[0].title + "</span>"; e > n; n++) a += "<span>" + t[n].title +
							"</span>";
					return a
				}(),
				content: '<ul class="layui-layer-tabmain">' + function() {
					var e = t.length,
						n = 1,
						a = "";
					if (e > 0)
						for (a = '<li class="layui-layer-tabli ' + i + '">' + (t[0].content || "no content") + "</li>"; e > n; n++)
							a += '<li class="layui-layer-tabli">' + (t[n].content || "no  content") + "</li>";
					return a
				}() + "</ul>",
				success: function(t) {
					var o = t.find(".layui-layer-title").children(),
						r = t.find(".layui-layer-tabmain").children();
					o.on("mousedown", function(t) {
						t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
						var a = n(this),
							o = a.index();
						a.addClass(i).siblings().removeClass(i), r.eq(o).show().siblings().hide(), "function" == typeof e.change &&
							e.change(o)
					}), "function" == typeof a && a(t)
				}
			}, e))
		}, r.photos = function(t, i, a) {
			function o(e, t, i) {
				var n = new Image;
				return n.src = e, n.complete ? t(n) : (n.onload = function() {
					n.onload = null, t(n)
				}, void(n.onerror = function(e) {
					n.onerror = null, i(e)
				}))
			}
			var s = {};
			if (t = t || {}, t.photos) {
				var l = t.photos.constructor === Object,
					f = l ? t.photos : {},
					u = f.data || [],
					d = f.start || 0;
				s.imgIndex = (0 | d) + 1, t.img = t.img || "img";
				var y = t.success;
				if (delete t.success, l) {
					if (0 === u.length) return r.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")
				} else {
					var p = n(t.photos),
						h = function() {
							u = [], p.find(t.img).each(function(e) {
								var t = n(this);
								t.attr("layer-index", e), u.push({
									alt: t.attr("alt"),
									pid: t.attr("layer-pid"),
									src: t.attr("layer-src") || t.attr("src"),
									thumb: t.attr("src")
								})
							})
						};
					if (h(), 0 === u.length) return;
					if (i || p.on("click", t.img, function() {
							var e = n(this),
								i = e.attr("layer-index");
							r.photos(n.extend(t, {
								photos: {
									start: i,
									data: u,
									tab: t.tab
								},
								full: t.full
							}), !0), h()
						}), !i) return
				}
				s.imgprev = function(e) {
					s.imgIndex--, s.imgIndex < 1 && (s.imgIndex = u.length), s.tabimg(e)
				}, s.imgnext = function(e, t) {
					s.imgIndex++, s.imgIndex > u.length && (s.imgIndex = 1, t) || s.tabimg(e)
				}, s.keyup = function(e) {
					if (!s.end) {
						var t = e.keyCode;
						e.preventDefault(), 37 === t ? s.imgprev(!0) : 39 === t ? s.imgnext(!0) : 27 === t && r.close(s.index)
					}
				}, s.tabimg = function(e) {
					return u.length <= 1 ? void 0 : (f.start = s.imgIndex - 1, r.close(s.index), r.photos(t, !0, e))
				}, s.event = function() {
					s.bigimg.hover(function() {
						s.imgsee.show()
					}, function() {
						s.imgsee.hide()
					}), s.bigimg.find(".layui-layer-imgprev").on("click", function(e) {
						e.preventDefault(), s.imgprev()
					}), s.bigimg.find(".layui-layer-imgnext").on("click", function(e) {
						e.preventDefault(), s.imgnext()
					}), n(document).on("keyup", s.keyup)
				}, s.loadi = r.load(1, {
					shade: "shade" in t ? !1 : .9,
					scrollbar: !1
				}), o(u[d].src, function(i) {
					r.close(s.loadi), s.index = r.open(n.extend({
						type: 1,
						id: "layui-layer-photos",
						area: function() {
							var a = [i.width, i.height],
								o = [n(e).width() - 100, n(e).height() - 100];
							if (!t.full && (a[0] > o[0] || a[1] > o[1])) {
								var r = [a[0] / o[0], a[1] / o[1]];
								r[0] > r[1] ? (a[0] = a[0] / r[0], a[1] = a[1] / r[0]) : r[0] < r[1] && (a[0] = a[0] / r[1], a[1] = a[
									1] / r[1])
							}
							return [a[0] + "px", a[1] + "px"]
						}(),
						title: !1,
						shade: .9,
						shadeClose: !0,
						closeBtn: !1,
						move: ".layui-layer-phimg img",
						moveType: 1,
						scrollbar: !1,
						moveOut: !0,
						isOutAnim: !1,
						skin: "layui-layer-photos" + c("photos"),
						content: '<div class="layui-layer-phimg"><img src="' + u[d].src + '" alt="' + (u[d].alt || "") +
							'" layer-pid="' + u[d].pid + '"><div class="layui-layer-imgsee">' + (u.length > 1 ?
								'<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>' :
								"") + '<div class="layui-layer-imgbar" style="display:' + (a ? "block" : "") +
							'"><span class="layui-layer-imgtit"><a href="javascript:;">' + (u[d].alt || "") + "</a><em>" + s.imgIndex +
							"/" + u.length + "</em></span></div></div></div>",
						success: function(e) {
							s.bigimg = e.find(".layui-layer-phimg"), s.imgsee = e.find(".layui-layer-imguide,.layui-layer-imgbar"),
								s.event(e), t.tab && t.tab(u[d], e), "function" == typeof y && y(e)
						},
						end: function() {
							s.end = !0, n(document).off("keyup", s.keyup)
						}
					}, t))
				}, function() {
					r.close(s.loadi), r.msg(
						"&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;", {
							time: 3e4,
							btn: ["&#x4E0B;&#x4E00;&#x5F20;", "&#x4E0D;&#x770B;&#x4E86;"],
							yes: function() {
								u.length > 1 && s.imgnext(!0, !0)
							}
						})
				})
			}
		}, o.run = function(t) {
			n = t, a = n(e), l.html = n("html"), r.open = function(e) {
				var t = new s(e);
				return t.index
			}
		}, o.run(e.jQuery), i.exports = r
	}(window)
});
define("modules/ya-report/ya-report", function(e, t, o) {
	! function() {
		function e(e, t, o, r) {
			function n(e) {
				var o = e || window.event,
					n = o.target || o.srcElement,
					a = o.currentTarget;
				for (Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype
						.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype
						.webkitMatchesSelector || function(e) {
							for (var t = (this.document || this.ownerDocument).querySelectorAll(e), o = t.length; --o >= 0 && t.item(o) !==
								this;);
							return o > -1
						}); n && n !== a;) {
					if (n && n.matches(t)) {
						var c = n;
						r.call(c, Array.prototype.slice.call(arguments))
					}
					n = n && n.parentNode
				}
			}
			o.split(".").forEach(function(t) {
				Array.prototype.slice.call(document.querySelectorAll(e)).forEach(function(e) {
					e.addEventListener(t, n)
				})
			})
		}

		function t(e) {
			var t, o = {};
			if (-1 !== (t = e.indexOf("?")))
				for (var r = e.substring(t + 1, e.length), n = r.split("&"), a = [], c = 0, i = n.length; i > c; c++) a = n[c].split(
					"="), o[a[0]] = a[1];
			return o
		}

		function r(o) {
			var o = o || {},
				r = t(location.search),
				n = o.pro;
			if (!window.YA) return !1;
			var a = {
				pro: n,
				pas: YA.cookie.get("username") || "",
				yyuid: YA.cookie.get("yyuid") || "",
				pageType: "root",
				rso: r.rso || "",
				rso_desc: "",
				eid: "",
				eid_desc: ""
			};
			for (var c in o) a[c] = o[c];
			window.ya = new YA(a.pro, a.pas, {
				pageType: a.pageType,
				yyuid: a.yyuid
			}), ya.reportProductStartUp({
				pro: a.pro,
				rso: a.rso,
				rso_desc: a.rso_desc
			}), ya.startProductHeartbeat({
				pro: a.pro,
				rso: a.rso,
				rso_desc: a.rso_desc
			}), a.eid && ya.reportProductEvent({
				eid: a.eid
			}), e("body", ".clickstat", "click", function() {
				var e = this.getAttribute("eid");
				e && ya.reportProductEvent({
					eid: e
				})
			})
		}

		function n(e, t) {
			var o = document.getElementsByTagName("head")[0] || document.documentElement,
				r = document.createElement("script");
			r.type = "text/javascript", r.async = !0, r.charset = "utf-8", r.src = e, r.onload = r.onreadystatechange =
				function() {
					(!r.readyState || /loaded|complete/.test(r.readyState)) && (t && t(), r.onload = r.onreadystatechange = null, r.parentNode &&
						r.parentNode.removeChild(r))
				}, o.insertBefore(r, null)
		}

		function a(e, t, o) {
			return e.addEventListener ? e.addEventListener(t, o, !1) : e.attachEvent("on" + t, o)
		}

		function c() {
			var e = window.yaReportArr || [];
			if (e.length)
				for (var t = 0; t < e.length; t++) window.ya && ya.reportProductEvent(e[t]);
			window.yaReportArr = [], window.yaReportArr.push = function(e) {
				window.ya && ya.reportProductEvent(e)
			}
		}

		function i(e) {
			a(window, "load", function() {
				s(e)
			}), setTimeout(function() {
				s(e)
			}, 3e3)
		}
		var s = function() {
			var e = !0;
			return function(t) {
				e && (e = !1, n("https://static-jw.msstatic.com/rp/ya-huya.finall.min.js", function() {
					r(t), c()
				}))
			}
		}();
		"function" == typeof define ? o.exports = i : window.yaReport = i
	}()
});
define("components/events/events", function(t, e, r) {
	function n() {
		this.__events = {}, this.__interimCache = {}
	}

	function i(t, e, r) {
		var n = !0;
		if (t) {
			var i = 0,
				o = t.length,
				s = e[0],
				a = e[1],
				c = e[2];
			switch (e.length) {
				case 0:
					for (; o > i; i += 2) n = t[i].call(t[i + 1] || r) !== !1 && n;
					break;
				case 1:
					for (; o > i; i += 2) n = t[i].call(t[i + 1] || r, s) !== !1 && n;
					break;
				case 2:
					for (; o > i; i += 2) n = t[i].call(t[i + 1] || r, s, a) !== !1 && n;
					break;
				case 3:
					for (; o > i; i += 2) n = t[i].call(t[i + 1] || r, s, a, c) !== !1 && n;
					break;
				default:
					for (; o > i; i += 2) n = t[i].apply(t[i + 1] || r, e) !== !1 && n
			}
		}
		return n
	}

	function o(t) {
		return "[object Function]" === Object.prototype.toString.call(t)
	}

	function s(t, e) {
		if (t.forEach) return t.forEach(e);
		for (var r = 0; r < t.length; r += 1) e(t[r], r, t)
	}
	var a = /\s+/;
	n.prototype.on = function(t, e, r) {
		var n, i, o;
		if (!e) return this;
		for (n = this.__events, t = t.split(a); i = t.shift();) o = n[i] || (n[i] = []), o.push(e, r), this.__interimCache[
			i] && (this.trigger.apply(this, [i].concat(this.__interimCache[i])), delete this.__interimCache[i]);
		return this
	}, n.prototype.once = function(t, e, r) {
		var n = this,
			i = function() {
				n.off(t, i), e.apply(r || n, arguments)
			};
		return this.on(t, i, r)
	}, n.prototype.off = function(t, e, r) {
		var n, i, o, s;
		if (!(n = this.__events)) return this;
		if (!(t || e || r)) return delete this.__events, this;
		for (t = t ? t.split(a) : c(n); i = t.shift();)
			if (o = n[i])
				if (e || r)
					for (s = o.length - 2; s >= 0; s -= 2) e && o[s] !== e || r && o[s + 1] !== r || o.splice(s, 2);
				else delete n[i];
		return this
	}, n.prototype.trigger = function(t) {
		var e, r, n, o, s, c, f = [],
			h = !0;
		if (!(e = this.__events)) return this;
		for (t = t.split(a), s = 1, c = arguments.length; c > s; s++) f[s - 1] = arguments[s];
		for (; r = t.shift();)(n = e.all) && (n = n.slice()), (o = e[r]) && (o = o.slice()), "all" !== r && (h = i(o, f,
			this) && h), o || (this.__interimCache[r] = f), h = i(n, [r].concat(f), this) && h;
		return h
	}, n.prototype.emit = n.prototype.trigger;
	var c = Object.keys;
	c || (c = function(t) {
		var e = [];
		for (var r in t) t.hasOwnProperty(r) && e.push(r);
		return e
	}), n.mixTo = function(t) {
		t = o(t) ? t.prototype : t;
		var e = n.prototype,
			r = new n;
		s(Object.keys(e), function(n) {
			t[n] = function() {
				return e[n].apply(r, Array.prototype.slice.call(arguments)), this
			}
		})
	}, r.exports = n
});
define("modules/index/index", function(require, exports, module) {
	function parseQueryString(e) {
		var t, i = {};
		if (-1 !== (t = e.indexOf("?")))
			for (var n = e.substring(t + 1, e.length), r = n.split("&"), o = [], a = 0, s = r.length; s > a; a++) o = r[a].split(
				"="), i[o[0]] = o[1];
		return i
	}

	function addHandler(e, t, i) {
		return e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent("on" + t, i)
	}

	function whiteServerList(e) {
		for (var t = !1, i = [/\.huya\.com$/], n = 0; n < i.length; n++)
			if (i[n].test(e)) {
				t = !0;
				break
			} return t
	}

	function postMessageToParent(e) {
		window.parent.postMessage(JSON.stringify(e), "*")
	}

	function openPolicyTips(e) {
		yaReportArr.push({
			eid: "sys/pageshow/lawwindow"
		});
		var t = e.find(".udb-policy-tips"),
			i = t.attr("timer");
		t.show(), i && clearTimeout(i), i = setTimeout(function() {
			t.hide()
		}, 1500), t.attr("timer", i)
	}

	function getsmScript() {
		var e = function() {
				var e = "static2.fengkongcloud.com",
					t = "https:" === document.location.protocol,
					i = t ? "https://" : "http://",
					n = "/fpv2.js",
					r = i + _smConf.staticHost + n,
					o = navigator.userAgent.toLowerCase(),
					a = /windows\s(?:nt\s5.1)|(?:xp)/.test(o),
					s = /msie\s[678]\.0/.test(o);
				return t && a && s && (r = i + e + n), r
			}(),
			t = document.createElement("script"),
			i = document.getElementsByTagName("script")[0];
		t.src = e, i.parentNode.insertBefore(t, i)
	}

	function SelAreas() {
		this.initialize.apply(this, arguments)
	}

	function sdkInit(e, t) {
		e = e || {}, HwUDBWebSDK.init({
			appid: e.appid || "5002",
			session: "udb_wession",
			domain: e.domain || "huya.com",
			pageUrl: e.pageUrl,
			byPass: 3,
			smid: window.SMSdk || "",
			success: function() {
				postMessageToParent({
					fnName: "initSuccess"
				}), t && t()
			},
			complete: function() {},
			error: function(t) {
				if ("330103" == t.uri && "330100" == t.returnCode) {
					if ("undefined" == typeof e.loginCallback || "undefined" == typeof e.loginAuthCallback) return postMessageToParent(
						1 == loginAfterHandle.loginType ? {
							fnName: "_loginAuthSuccess",
							data: {
								type: loginAfterHandle.thirdLoginType,
								loginTime: t.data.loginTime,
								sign: t.data.sign
							}
						} : {
							fnName: "_loginSuccess",
							data: {
								loginTime: t.data.loginTime,
								sign: t.data.sign
							}
						}), !1;
					var i = e.loginCallback + "&loginTime=" + t.data.loginTime + "&sign=" + t.data.sign;
					1 == loginAfterHandle.loginType && (i = e.loginAuthCallback + "&type=" + loginAfterHandle.thirdLoginType +
						"&loginTime=" + t.data.loginTime + "&sign=" + t.data.sign), HwUDBWebSDK.Html.add({
						tag: "iframe",
						urlList: [{
							id: "udb_exchangesuccess",
							url: i
						}]
					})
				}
				"190159" == t.returnCode && 1 == loginAfterHandle.upgradeStatus && $("#close-udbLogin").click()
			}
		})
	}

	function QuickLogin() {
		this.initialize.apply(this, arguments)
	}

	function Register() {
		this.initialize.apply(this, arguments)
	}

	function AccountLogin() {
		this.initialize.apply(this, arguments)
	}

	function PhoneLogin() {
		this.initialize.apply(this, arguments)
	}

	function ThirdBind() {
		this.initialize.apply(this, arguments)
	}

	function InputLogin() {
		this.initialize.apply(this, arguments)
	}

	function UdbLogin() {
		this.initialize.apply(this, arguments)
	}
	var layer = require("components/layer/layer"),
		yaReport = require("modules/ya-report/ya-report"),
		Events = require("components/events/events"),
		events = new Events,
		_user_action = [],
		_init_time = HwUDBWebSDK.Util.guid(2),
		sdkInitStatus = !1,
		country = new Array("中国-86", "中国香港特别行政区-852", "中国澳门特别行政区-853", "中国台湾地区-886", "阿尔巴尼亚-355", "阿尔及利亚-213", "阿富汗-93",
			"阿根廷-54", "阿拉斯加-1907", "阿联酋-971", "阿鲁巴岛-297", "阿曼-968", "阿塞拜疆-994", "阿森松-247", "埃及-20", "埃塞俄比亚-251", "爱尔兰-353",
			"爱沙尼亚-372", "安道尔共和国-376", "安哥拉-244", "安圭拉岛-1809", "奥地利-43", "澳大利亚-61", "巴巴多斯-1809", "巴哈马-1809", "巴基斯坦-92",
			"巴拉圭-595", "巴勒斯坦-970", "巴林-973", "巴拿马-507", "巴西-55", "保加利亚-359", "贝宁-229", "比利时-32", "冰岛-354", "波多黎各-1809",
			"波黑-387", "波兰-48", "玻利维亚-591", "伯利兹-501", "博茨瓦纳-267", "不丹-975", "布基拉法索-226", "布隆迪-257", "朝鲜-850", "赤道几内亚-240",
			"丹麦-45", "德国-49", "东帝汶-670", "东萨摩亚-684", "多哥-228", "俄罗斯-7", "厄瓜多尔-593", "厄立特里亚-291", "法国-33", "法罗群岛-298",
			"法属圭亚那-594", "梵蒂冈-396", "菲律宾-63", "斐济-679", "芬兰-358", "佛得角-238", "福克兰群岛-500", "冈比亚-220", "刚果-242", "哥伦比亚-57",
			"哥斯达黎加-506", "格陵兰岛-299", "古巴-53", "瓜德罗普-590", "关岛-671", "圭亚那-592", "哈萨克斯坦-7", "海地-509", "韩国-82", "荷兰-31",
			"洪都拉斯-504", "基里巴斯-686", "吉布提-253", "吉尔吉斯斯坦-996", "几内亚-224", "几内亚比绍-245", "加拿大-1", "加纳-233", "加蓬-241", "柬埔寨-855",
			"捷克-420", "津巴布韦-263", "喀麦隆-237", "卡塔尔-974", "科科斯岛-619162", "科克群岛-682", "科摩罗-269", "科特迪瓦-225", "科威特-965",
			"克罗地亚-385", "肯尼亚-254", "拉脱维亚-371", "莱索托-266", "老挝-856", "黎巴嫩-961", "立陶宛-370", "利比里亚-231", "利比亚-218", "列支敦士登-423",
			"留尼旺岛-262", "卢森堡-352", "卢旺达-250", "罗马尼亚-40", "马达加斯加-261", "马尔代夫-960", "马耳他-356", "马拉维-265", "马来西亚-60", "马里-223",
			"马其顿-389", "马提尼克-596", "毛里求斯-230", "毛里塔尼亚-222", "美国-1", "蒙古-976", "孟加拉国-880", "秘鲁-51", "缅甸-95", "摩尔多瓦-373",
			"摩洛哥-212", "摩纳哥-377", "莫桑比克-258", "墨西哥-52", "纳米比亚-264", "南非-27", "南极洲-64672", "南斯拉夫-381", "瑙鲁-674", "尼泊尔-977",
			"尼加拉瓜-505", "尼日尔-227", "尼日利亚-234", "纽埃岛-683", "挪威-47", "诺福克岛-6723", "葡萄牙-351", "普林西比-239", "乔治亚-995", "日本-81",
			"瑞典-46", "瑞士-41", "萨尔瓦多-503", "塞拉利昂-232", "塞内加尔-221", "塞浦路斯-357", "塞舌尔-248", "沙特阿拉伯-966", "圣彼埃尔-508", "圣诞岛-619164",
			"圣多美-239", "圣赫勒拿-290", "圣卢西亚-1809", "圣马力诺-223", "斯里兰卡-94", "斯洛伐克-421", "斯洛文尼亚-386", "斯威士兰-268", "苏丹-249",
			"苏里南-597", "所罗门群岛-677", "索马里-252", "塔吉克斯坦-7", "泰国-66", "坦桑尼亚-255", "汤加-676", "突尼斯-216", "图瓦卢-688", "土耳其-90",
			"土库曼斯坦-993", "瓦努阿图-678", "危地马拉-502", "威克岛-1808", "维尔京群岛-1809", "委内瑞拉-58", "文莱-673", "乌干达-256", "乌克兰-380",
			"乌拉圭-598", "乌兹别克斯坦-998", "西班牙-34", "西萨摩亚-685", "希腊-30", "夏威夷-1808", "新加坡-65", "新西兰-64", "匈牙利-36", "叙利亚-963",
			"牙买加-1876", "亚美尼亚-374", "也门-967", "伊拉克-964", "伊朗-98", "以色列-972", "意大利-39", "印度-91", "印度尼西亚-62", "英国-44", "约旦-962",
			"越南-84", "赞比亚-260", "扎伊尔-243", "乍得-235", "直布罗陀-350", "智利-56", "中非-236", "中途岛-1808"),
		reservedAction = function(e) {
			var t = e;
			try {
				t.length > 30 && t.splice(0, t.length - 30)
			} catch (i) {}
			return t
		},
		userAction = function(e, t, i) {
			try {
				var n = {};
				n[e] = (HwUDBWebSDK.Util.guid(2) - _init_time) / 1e3 + (void 0 != t && "" != t ? "," + t : "") + (void 0 != i &&
					"" != i ? "," + i : ""), _user_action.push(n)
			} catch (r) {}
		},
		buildTrack = function(e) {
			var t = void 0;
			try {
				t = HwUDBWebSDK.Cookie.get("promoter")
			} catch (i) {}
			return void 0 != t && "" != $.trim(t) && (e.hasOwnProperty("data") ? e.data.track = {
				biz: "hyrev",
				source: "web",
				channel: t
			} : e.data = {
				track: {
					biz: "hyrev",
					source: "web",
					channel: t
				}
			}), e
		},
		util = {
			getCookieVal: function(e) {
				for (var t = document.cookie.split("; "), i = 0; i < t.length; i += 1) {
					var n = t[i].split("=");
					if (n[0] == e) return decodeURIComponent(n[1])
				}
				return ""
			},
			setPwStatus: function(e) {
				var t = e.parents(".udb-input-item"),
					i = t.find(".icon-pwd");
				i.off("click").on("click", function() {
					i.hasClass("icon-close") ? (i.removeClass("icon-close").addClass("icon-open"), e.prop("type", "text")) : (i.removeClass(
						"icon-open").addClass("icon-close"), e.prop("type", "password"))
				})
			},
			countDown: function(e) {
				function t() {
					e.text("重新获取").attr("enabled", 2).removeClass("disable"), n && clearInterval(n)
				}
				var i = 60;
				e.attr("enabled", 0).addClass("disable").text("重新获取(60s)");
				var n = setInterval(function() {
					e.text("重新获取(" + --i + "s)"), 0 === i && t()
				}, 1e3);
				return function() {
					t()
				}
			},
			checkTel: function(e, t) {
				var i = /^1\d{10}$/;
				return "86" == t ? i.test(e) ? !0 : !1 : !0
			},
			formErrorTipTimer: null,
			formErrorTip: function(e, t) {
				util.formErrorTipTimer && clearTimeout(util.formErrorTipTimer), t.html("<i></i>" + e).css("visibility",
					"visible"), util.formErrorTipTimer = setTimeout(function() {
					t.html("&nbsp;").css("visibility", "hidden")
				}, 5e3)
			},
			checkPwStrong: function(e, t) {
				var i = [{
						regEx: /[\uFF00-\uFFFF]{1,}/,
						tips: "密码不允许包含全角字符",
						className: "pw-strong-1"
					}, {
						regEx: /[\s]{1,}/,
						tips: "密码不允许含空格",
						className: "pw-strong-1"
					}, {
						regEx: /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9A-Za-z]{1,5}$/,
						tips: "请设置6-20位字母、数字、符号两种以上字符组合密码",
						className: "pw-strong-1"
					}, {
						regEx: /^(?=.*[0-9])(?=.*[#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]])[0-9#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]]{1,5}$/,
						tips: "请设置6-20位字母、数字、符号两种以上字符组合密码",
						className: "pw-strong-1"
					}, {
						regEx: /^(?=.*[A-Za-z])(?=.*[#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]])[A-Za-z#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]]{1,5}$/,
						tips: "请设置6-20位字母、数字、符号两种以上字符组合密码",
						className: "pw-strong-1"
					}, {
						regEx: /^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]])[0-9A-Za-z#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]]{1,5}$/,
						tips: "请设置6-20位字母、数字、符号两种以上字符组合密码",
						className: "pw-strong-1"
					}, {
						regEx: /^[0-9]{1,20}$/,
						tips: "请设置6-20位字母、数字、符号两种以上字符组合密码",
						className: "pw-strong-1"
					}, {
						regEx: /^[A-Za-z]{1,20}$/,
						tips: "请设置6-20位字母、数字、符号两种以上字符组合密码",
						className: "pw-strong-1"
					}, {
						regEx: /^[#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]]{1,20}$/,
						tips: "请设置6-20位字母、数字、符号两种以上字符组合密码",
						className: "pw-strong-1"
					}, {
						regEx: /^(?=.*[A-Za-z])(?=.*[#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]])[A-Za-z#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]]{6,15}$/,
						tips: "强度适中，使用三种字符组合可提高安全性",
						className: "pw-strong-2"
					}, {
						regEx: /^(?=.*[0-9])(?=.*[#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]])[0-9#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]]{6,15}$/,
						tips: "强度适中，使用三种字符组合可提高安全性",
						className: "pw-strong-2"
					}, {
						regEx: /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9A-Za-z]{6,15}$/,
						tips: "强度适中，使用三种字符组合可提高安全性",
						className: "pw-strong-2"
					}, {
						regEx: /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9A-Za-z]{16,20}$/,
						tips: "强度适中，使用三种字符组合可提高安全性",
						className: "pw-strong-2"
					}, {
						regEx: /^(?=.*[0-9])(?=.*[#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]])[0-9#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]]{16,20}$/,
						tips: "强度适中，使用三种字符组合可提高安全性",
						className: "pw-strong-2"
					}, {
						regEx: /^(?=.*[A-Za-z])(?=.*[#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]])[A-Za-z#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]]{16,20}$/,
						tips: "强度适中，使用三种字符组合可提高安全性",
						className: "pw-strong-2"
					}, {
						regEx: /^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]])[0-9A-Za-z#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]]{6,15}$/,
						tips: "强度适中，加大密码长度可提高安全性",
						className: "pw-strong-2"
					}, {
						regEx: /^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]])[0-9A-Za-z#$%&@_<>:;"'=`\,\!\-\+\~\^\$\.\|\{\}\(\)\*\+\?\/\[\]]{16,20}$/,
						tips: "密码安全度极高",
						className: "pw-strong-3"
					}],
					n = null;
				e.on("keyup", function() {
					for (var r = e.val(), o = "", a = "", s = 0; s < i.length; s++)
						if (i[s].regEx.test(r)) {
							o = i[s].tips, a = i[s].className;
							break
						} o && (t.html('<div class="form-pw-check"><div class="pw-strong-icon ' + a +
						'"><span class="strong-icon-1"></span><span class="strong-icon-2"></span><span class="strong-icon-3"></span></div><p>' +
						o + "</p><div>").css("visibility", "visible"), n && clearTimeout(n), n = setTimeout(function() {
						t.html("&nbsp;").css("visibility", "hidden")
					}, 2e3))
				})
			},
			cleanAccountInput: function(e, t, i) {
				e.on("keyup", function() {
					"" != e.val() ? t.show() : t.hide()
				}), t.on("click", function() {
					i && i(), t.hide(), e.val("").focus()
				})
			},
			placeholder: function(e) {
				"placeholder" in document.createElement("input") || (e.find("[placeholder]").each(function() {
					var e = $(this),
						t = e.css("padding-left");
					e.parent().append('<span class="placeholder" data-type="placeholder" style="left: ' + t + '">' + e.attr(
						"placeholder") + "</span>"), "" != e.val() ? e.parent().find("span.placeholder").hide() : e.parent().find(
						"span.placeholder").show()
				}).on("focus", function() {
					$(this).parent().find("span.placeholder").hide()
				}).on("blur", function() {
					var e = $(this);
					"" != e.val() ? e.parent().find("span.placeholder").hide() : e.parent().find("span.placeholder").show()
				}), $("span.placeholder").on("click", function() {
					$(this).hide(), $(this).siblings("[placeholder]").trigger("click"), $(this).siblings("[placeholder]").trigger(
						"focus")
				}))
			}
		};
	window._smReadyFuncs = [], window.SMSdk = {
		ready: function(e) {
			e && _smReadyFuncs.push(e)
		}
	}, window._smConf = {
		organization: "TN83YsuKoZNwEDY5Qe8w",
		staticHost: "static.fengkongcloud.com",
		apiHost: "udbdfp.huya.com"
	}, $.ajax({
		url: "https://static-jw.msstatic.com/rp/version/abtest.min.1.0.0.js",
		dataType: "script",
		cache: !0
	}).done(function() {
		window.ABTEST && window.ABTEST.setABExtParam({
			uid: util.getCookieVal("yyuid") || 0,
			platform: "webadmin",
			variable: {
				mid: util.getCookieVal("__yamid_new") || 0
			}
		}, function(e) {
			var t = e && e.mpConfig && e.mpConfig.sm_switch || 0;
			1 == t && getsmScript()
		})
	}), SelAreas.prototype = {
		initialize: function(e, t, i) {
			e.on("click", function(i) {
				var n = e.find("i"),
					r = e.attr("eid");
				r && yaReportArr.push({
					eid: r
				}), n.hasClass("arrow-down") ? (t.show(), n.attr("class", "arrow-up")) : (t.hide(), n.attr("class",
					"arrow-down")), i.stopPropagation()
			}), $(document).on("click", function() {
				t.is(":visible") && (t.hide(), i.focus(), e.find("i").attr("class", "arrow-down"))
			}), t.on("click", "li", function() {
				var t = $(this),
					i = t.find(".areasNumber").attr("areasCode");
				e.attr("areasCode", i).find("span").text("+" + i)
			})
		}
	};
	var loginAfterHandle = {
		upgradeStatus: !1,
		loginType: "",
		thirdLoginType: "",
		upgradeHints: function(e, t, i) {
			void 0 != e.description && (e.description.toLowerCase().indexOf("http://") > -1 || e.description.toLowerCase().indexOf(
				"https://") > -1) && (this.loginType = t, this.thirdLoginType = i, $(".login-wrap").hide(), $("#login-pop").html(
					'<iframe src="' + e.description + '" frameborder="0" width="100%" height="100%" scrolling="no"></iframe>').show(),
				postMessageToParent({
					fnName: "_setLayerHeight",
					data: {
						height: 390
					}
				}), this.upgradeStatus = !0, postMessageToParent({
					fnName: "_sendUpgradeStatus",
					data: {
						upgradeStatus: this.upgradeStatus
					}
				}))
		},
		huya: function(e, t, i) {
			if (this.upgradeHints(e), "" != i) try {
				HwUDBWebSDK.Cookie.set("udb_accdata", i, HwUDBWebSDK.JSSDK.Global.domain, 30)
			} catch (n) {}
			if ("undefined" == typeof t.loginCallback) return postMessageToParent({
				fnName: "_loginSuccess",
				data: {
					loginTime: e.data.loginTime,
					sign: e.data.sign
				}
			}), !1;
			var r = t.loginCallback + "&loginTime=" + e.data.loginTime + "&sign=" + e.data.sign;
			1 == this.upgradeStatus ? HwUDBWebSDK.Html.add({
				tag: "iframe",
				urlList: [{
					id: "udb_exchangesuccess",
					url: r
				}]
			}) : window.location.href = r
		},
		third: function(e, t) {
			if (this.upgradeHints(e), "undefined" == typeof t.loginAuthCallback) return postMessageToParent({
				fnName: "_loginAuthSuccess",
				data: {
					type: e.data.type,
					loginTime: e.data.loginTime,
					sign: e.data.sign
				}
			}), !1;
			var i = t.loginAuthCallback + "&type=" + e.data.type + "&loginTime=" + e.data.loginTime + "&sign=" + e.data.sign;
			1 == this.upgradeStatus ? HwUDBWebSDK.Html.add({
				tag: "iframe",
				urlList: [{
					id: "udb_exchangesuccess",
					url: i
				}]
			}) : window.location.href = i
		}
	};
	QuickLogin.prototype = {
		initialize: function(e) {
			this.$quickLoginWrap = $("#quick-login-wrap"), this.lockCheckScan = !1, this.lockCheckScanTimer = null, this.options =
				e, this._createHtml(), this._bindEvent()
		},
		login: function() {
			try {
				localStorage.loginMode = "changeQuickLogin"
			} catch (e) {}
			yaReportArr.push({
				eid: "Pageview/QuickLogin"
			}), this.lockCheckScan = !1;
			var t = this;
			this.getQRImageTimer && clearInterval(this.getQRImageTimer), this.getQRImageTimer = setInterval(function() {
				sdkInitStatus && (t._getQRImage(), clearInterval(t.getQRImageTimer))
			}, 30), this.$quickLoginWrap.show()
		},
		cancelCheckScan: function() {
			this.lockCheckScan = !0, this.lockCheckScanTimer && clearTimeout(this.lockCheckScanTimer)
		},
		_createHtml: function() {
			var tmpl = function(obj) {
				{
					var __p = "";
					Array.prototype.join
				}
				with(obj || {}) __p +=
					'<div class="quick-login-section" id="quick-login-section">\r\n    <div class="udb-head-tit">\r\n        <ul class="head-nav hy-cf">\r\n            <li class="on">快速登录</li>\r\n        </ul>\r\n    </div>\r\n    <h3 class="quick-head">请使用<a href="https://www.huya.com/download/" target="_blank" class="clickstat" eid="Click/QuickLogin/Download">虎牙直播APP</a>扫描二维码登录</h3>\r\n    <div class="qr-list" id="qr-list">\r\n        <div class="qr-area" style="display:none">\r\n            <img class="qr-image" id="qr-image" src="">\r\n            <div class="qr-invalid" id="qr-invalid" style="display:none">\r\n                <p></p>\r\n                <div class="refresh"><i></i>刷新</div>\r\n            </div>\r\n            <div class="hy-ellipsis"><label style="display:none"><input type="checkbox" name="R_remember" value="1" class="R_remember" checked>自动登录</label></div>\r\n        </div>\r\n    </div>\r\n    <div class="app-scan" title="虎牙app扫一扫"></div>\r\n\r\n    <div class="change-login clickstat" eid="Click/QuickLogin/AccountLogin">\r\n        <i class="input-login"></i>\r\n        <div class="change-login-tips">帐号密码登录</div>\r\n    </div>\r\n</div>\r\n';
				return __p
			};
			this.$quickLoginWrap.html(tmpl())
		},
		_getQRImage: function() {
			var e = this;
			HwUDBWebSDK.Login.V2.QrCode.image({
				success: function(t) {
					$("#qr-image").attr("src", HwUDBWebSDK.Login.V2.QrCode.url(t.data.qrId)), $(".qr-area").show(), e._checkScanStatus(
						t.data.qrId)
				},
				error: function() {}
			})
		},
		_checkScanStatus: function(e) {
			var t = 300,
				i = this,
				n = function() {
					return t--, 0 > t ? (i._qrErrorStatus("等待扫描超时"), !1) : void i._qrCodeCheck({
						qrId: e,
						pollCallback: function() {
							0 == i.lockCheckScan && (i.lockCheckScanTimer = setTimeout(function() {
								n()
							}, 1e3))
						}
					})
				};
			n()
		},
		_qrCodeCheck: function(obj) {
			var _this = this,
				_remember = this.$quickLoginWrap.find(".R_remember").prop("checked") ? 1 : 0;
			HwUDBWebSDK.Login.V2.QrCode.check({
				data: {
					qrId: obj.qrId,
					remember: _remember,
					behavior: encodeURIComponent(HwUDBWebSDK.Message.stringify(reservedAction(_user_action)))
				},
				success: function(resp) {
					var stage = resp.data.stage;
					if (1 == stage) {
						var tmpl = function(obj) {
							{
								var __p = "";
								Array.prototype.join
							}
							with(obj || {}) __p +=
								'<div class="scan-success">\r\n    <div class="tel-login-success"></div>\r\n    <h2>扫码成功</h2>\r\n    <p>请在手机上确认是否授权登录！</p>\r\n</div>';
							return __p
						};
						$("#quick-login-section").hide(), _this.$quickLoginWrap.append(tmpl()), yaReportArr.push({
							eid: "Pageview/QuickLogin/ScanLogin/SuccessfulScan"
						}), obj.pollCallback && obj.pollCallback()
					} else if (0 != stage && 4 != stage)
						if (2 == stage || 3 == stage) yaReportArr.push({
							eid: "Status/QuickLogin/ScanLogin",
							label: 1
						}), loginAfterHandle.huya(resp, _this.options);
						else {
							var htext = "";
							switch (stage) {
								case 5:
									htext = "二维码已过期";
									break;
								case 6:
									htext = "二维码已失效";
									break;
								case 7:
									htext = "取消登录授权";
									break;
								case 8:
									htext = "扫码账号异常";
									break;
								default:
									htext = "扫码登录失败"
							}
							_this._qrErrorStatus(htext)
						}
					else obj.pollCallback && obj.pollCallback()
				},
				error: function(e) {
					"60043" == e.returnCode && loginAfterHandle.upgradeHints(e, 3)
				}
			})
		},
		_qrErrorStatus: function(e) {
			var t = $(".qr-invalid"),
				i = this;
			t.find("p").text(e), t.show(), $(".refresh").off("click").on("click", function() {
				t.hide(), i._getQRImage()
			})
		},
		_bindEvent: function() {
			var e = this;
			$(".input-login").on("click", function(t) {
				e.$quickLoginWrap.hide(), userAction("button.UDBSdkPage.web", t.pageX, t.pageY);
				try {
					HwUDBWebSDK.Report.Event.click("div.UDBSdkLgn-webQuick")
				} catch (i) {}
				events.emit("inputLogin", e.options)
			});
			var t = $(".app-scan");
			$(".qr-area").on("mousemove", function() {
				var e = $(this).offset().left - 120;
				e > 20 && t.css({
					left: e
				}).show()
			}).on("mouseout", function() {
				t.hide()
			})
		}
	}, Register.prototype = {
		initialize: function(e) {
			this.options = e, this.$registerHeadNav = $("#register-head-nav"), this.$registerForm = $("#register-form"),
				this._createHtml(), this._bindEvent()
		},
		_createHtml: function() {
			var tmpl = function(obj) {
				{
					var __t, __p = "";
					Array.prototype.join
				}
				with(obj || {}) {
					__p +=
						'<div class="udb-input-item udb-input-item-sel hy-cf">\r\n    <div class="udb-form-sel hy-fl sel-areas clickstat" areasCode="86" eid="Click/Register/AreaCode">\r\n        <span>+86</span>\r\n        <i class="arrow-down"></i>\r\n    </div>\r\n    <ul class="udb-sel-list sel-areas-list">\r\n        ';
					for (var i = 0; i < country.length; i++) {
						var $items = country[i].split("-");
						__p += "\r\n        <li>" + (null == (__t = $items[0]) ? "" : __t) +
							'<span class="areasNumber" areasCode="' + (null == (__t = $items[1]) ? "" : __t) + '">+' + (null == (__t =
								$items[1]) ? "" : __t) + "</span></li>\r\n        "
					}
					__p +=
						'\r\n    </ul>\r\n    <input type="number" class="udb-input udb-input-tel hy-fl" autocomplete="off" placeholder="请输入手机号" onkeyup="if(value.length>25)value=value.slice(0,25)">\r\n    <i class="clean-input"></i>\r\n</div>	\r\n<div class="udb-input-item hy-cf">\r\n    <input type="text" class="udb-input udb-input-code hy-fl" autocomplete="off" placeholder="请输入验证码" onkeyup="if(value.length>=6)value=value.slice(0,6);this.value=this.value.replace(/\\D/g,\'\')" onafterpaste="this.value=this.value.replace(/\\D/g,\'\')">\r\n    <span class="get-sms-code hy-fr clickstat" enabled="1" eid="Click/Register/GetCode">获取验证码</span>\r\n</div>\r\n<div class="udb-input-item" style="margin-bottom: 0">\r\n    <input type="password" class="udb-input udb-input-pw" autocomplete="off" placeholder="请设置6-20位至少两种字符组合密码" oncontextmenu="return false" oncopy="return false" oncut="return false" onkeyup="if(value.length>=20)value=value.slice(0,20);" maxlength="20">\r\n    <i class="icon-pwd icon-close"></i>\r\n</div>\r\n<div class="input-error-tips">&nbsp;</div>\r\n<div class="udb-button clickstat" id="reg-btn" eid="Click/Register/Confirm">立即注册</div>\r\n<div class="udb-form-footer policy">\r\n    <span class="udb-policy-tips"></span>\r\n    <label class="clickstat" eid="usr/click/checklist/register">\r\n        <input type="checkbox" name="agreen" value="1" class="agreen">\r\n        请阅读并同意\r\n        <a href="https://hd.huya.com/huyaDIYzt/6811/pc/index.html#diySetTab=5" target="_balnk" class="clickstat" eid="Click/Register/Agreement1">《用户服务协议》</a>\r\n        和\r\n        <a href="https://hd.huya.com/huyaDIYzt/6811/pc/index.html#diySetTab=1" target="_balnk" class="clickstat" eid="Click/Register/Agreement2">《隐私政策》</a>\r\n    </label>\r\n</div>\r\n<div class="udb-form-footer"><span class="returnlogin-btn clickstat" eid="Click/Register/AccountLogin">返回账号登录 &gt;</span></div>'
				}
				return __p
			};
			this.$registerForm.html(tmpl({
				country: country
			}))
		},
		show: function() {
			yaReportArr.push({
				eid: "Pageview/Register"
			}), userAction("page.register"), postMessageToParent({
				fnName: "_setLayerHeight",
				data: {
					height: 370
				}
			}), this.$registerHeadNav.show(), this.$registerForm.show()
		},
		_hide: function() {
			this.$registerHeadNav.hide(), this.$registerForm.hide()
		},
		_openImageAuth: function(resp, imageSrc, phone) {
			var _this = this,
				passStatus = !1,
				refreshImgCode = function(e, t, i) {
					HwUDBWebSDK.Code.Security.image({
						success: function(i) {
							e.attr("src", i.data.data), t.focus()
						},
						error: function(e) {
							util.formErrorTip(e.description, i)
						}
					})
				};
			layer.open({
				type: 0,
				title: "安全验证",
				area: "350px",
				content: function(obj) {
					{
						var __t, __p = "";
						Array.prototype.join
					}
					with(obj || {}) __p +=
						'<div class="udb-layer-form udb-form">\r\n    <div class="udb-input-item udb-imgcode-item hy-cf">\r\n        <input type="text"  class="udb-input udb-input-code hy-fl" autocomplete="off" placeholder="请输入验证码">\r\n        <img src="' +
						(null == (__t = imageSrc) ? "" : __t) +
						'" alt="" class="hy-fr change-image-btn" title="点击刷新">\r\n    </div>\r\n    <div class="input-error-tips">&nbsp;</div>\r\n</div>';
					return __p
				}({
					imageSrc: imageSrc
				}),
				shade: .7,
				skin: "udb-layer-wrap",
				btn: ["确定"],
				end: function() {
					passStatus || HwUDBWebSDK.Cookie.remove("udb_wession")
				},
				btn1: function(e, t) {
					var i = t.find(".udb-input-code"),
						n = t.find(".input-error-tips"),
						r = $.trim(i.val());
					0 == HwUDBWebSDK.Item.Verify.code(r, 1) ? _this._sendCode({
						_phone: phone,
						_code: r,
						successFn: function() {
							util.countDown(_this.$registerForm.find(".get-sms-code")), _this.$registerForm.find(".udb-input-code")
								.focus(), passStatus = !0, layer.msg("验证码已发送", {
									icon: 1
								})
						},
						strategyFn: function() {
							passStatus = !0
						},
						errorFn: function(t) {
							layer.close(e), util.formErrorTip(t.description, _this.$registerForm.find(".input-error-tips"))
						}
					}) : util.formErrorTip("请输入验证码", n)
				},
				success: function(e) {
					var t = e.find(".input-error-tips"),
						i = e.find(".udb-input-code"),
						n = e.find(".change-image-btn");
					i.focus(), void 0 != resp.description && "" != resp.description && util.formErrorTip(resp.description, t),
						i.on("keyup", function(t) {
							13 == t.keyCode && e.find(".layui-layer-btn0").click()
						}), n.on("click", function() {
							refreshImgCode(n, i, t)
						})
				}
			})
		},
		_openSafeAuth: function(e, t) {
			try {
				var i = this,
					n = e.data.split("?"),
					r = parseQueryString(e.data),
					o = [];
				for (var a in r) o.push(a + "=" + encodeURIComponent(r[a]));
				yaReportArr.push({
					eid: "Pageview/Register/authlayer"
				}), layer.open({
					type: 2,
					title: e.selectTitle || "安全验证",
					area: ["350px", "310px"],
					content: n[0] + "?" + o.join("&"),
					shade: .7,
					skin: "udb-auth-" + e.strategy,
					end: function() {
						events.off("udbSafeAuth")
					},
					success: function(e, n) {
						events.once("udbSafeAuth", function(e) {
							layer.close(n), "udbUpLinkAuth" !== e.pageType ? i._sendCode({
								_phone: t,
								_code: e.param.data.authId,
								successFn: function() {
									util.countDown(i.$registerForm.find(".get-sms-code")), i.$registerForm.find(".udb-input-code").focus(),
										layer.msg("验证码已发送", {
											icon: 1
										})
								},
								errorFn: function(e) {
									layer.close(n), util.formErrorTip(e.description, i.$registerForm.find(".input-error-tips"))
								}
							}) : i._openSetPWdLayer(t, e.param.data.authId)
						})
					}
				})
			} catch (s) {
				layer.msg("解析服务器url出错", {
					icon: 2
				})
			}
		},
		_openSetPWdLayer: function(_phone, _code) {
			var _this = this;
			yaReportArr.push({
				eid: "Pageview/Register/UploadSMS/SettingPassword"
			}), layer.open({
				type: 0,
				title: "设置密码",
				area: "350px",
				content: function(obj) {
					{
						var __p = "";
						Array.prototype.join
					}
					with(obj || {}) __p +=
						'<div class="sms-auth-head">\r\n    <h2 style="font-size: 14px;color: #666;">请设置登录密码，完成注册</h2>\r\n</div>	\r\n<div class="udb-layer-form udb-form">\r\n    <div class="udb-input-item">\r\n        <input type="password" class="udb-input udb-input-pw" autocomplete="off" placeholder="请设置6-20位至少两种字符组合密码" oncontextmenu="return false" oncopy="return false" oncut="return false" onkeyup="if(value.length>=20)value=value.slice(0,20);" maxlength="20">\r\n        <i class="icon-pwd icon-close"></i>\r\n    </div>\r\n    <div class="input-error-tips">&nbsp;</div>\r\n</div>';
					return __p
				}(),
				shade: .7,
				skin: "udb-layer-wrap",
				btn: ["确定"],
				btn1: function(e, t) {
					var i = t.find(".input-error-tips"),
						n = t.find(".udb-input-pw"),
						r = $.trim(n.val());
					return 0 != HwUDBWebSDK.Item.Verify.password(r) ? (util.formErrorTip("请设置6-20位字母、数字、符号两种以上字符组合密码", i), n.focus(),
						!1) : (yaReportArr.push({
						eid: "Click/Register/UploadSMS/SettingPassword/Confirm"
					}), void _this._register({
						step: 2,
						data: {
							phone: _phone,
							smsCode: _code,
							password: r
						},
						successFn: function() {
							yaReportArr.push({
								eid: "Status/Register/UploadSMS",
								label: 1
							})
						},
						errorFn: function(e) {
							yaReportArr.push({
								eid: "Status/Register/UploadSMS",
								label: 0
							}), util.formErrorTip(e.description, i)
						}
					}))
				},
				success: function(e) {
					var t = e.find(".input-error-tips"),
						i = e.find(".udb-input-pw");
					util.checkPwStrong(i, t), i.focus(), util.setPwStatus(i)
				}
			})
		},
		_sendCode: function(e) {
			var t = this,
				i = {
					phone: e._phone,
					behavior: encodeURIComponent(HwUDBWebSDK.Message.stringify(reservedAction(_user_action)))
				};
			e._code && void 0 != e._code && "" != e._code && (i.authcode = e._code), HwUDBWebSDK.Code.V2.send({
				data: i,
				success: function(t) {
					e.successFn && e.successFn(t)
				},
				strategy: function(i) {
					e.strategyFn && e.strategyFn(i);
					var n = i.data.strategys;
					if (!$.isArray(n) || !n[0]) return !1;
					var r = n[0] || {};
					4 == r.strategy && t._openImageAuth(i, r.data, e._phone), 4 == r.dataType && t._openSafeAuth(r, e._phone)
				},
				error: function(t) {
					HwUDBWebSDK.Cookie.remove("udb_wession"), e.errorFn && e.errorFn(t)
				}
			})
		},
		_register: function(e) {
			var t = this,
				i = e.data.phone;
			HwUDBWebSDK.Register.V2.phone(buildTrack({
				step: e.step || "1",
				data: {
					phone: e.data.phone,
					smsCode: e.data.smsCode,
					password: e.data.password,
					behavior: encodeURIComponent(HwUDBWebSDK.Message.stringify(reservedAction(_user_action)))
				},
				success: function(n) {
					postMessageToParent({
						fnName: "_setLocalStorage",
						data: {
							key: "HUYA_NEW_USER",
							val: "1"
						}
					}), e.successFn(n);
					try {
						void 0 != i && "" != i && HwUDBWebSDK.Cookie.set("udb_accdata", i, HwUDBWebSDK.JSSDK.Global.domain, 30)
					} catch (r) {}
					if (3 == HwUDBWebSDK.JSSDK.Global.byPass) {
						if ("undefined" == typeof t.options.loginCallback) return postMessageToParent({
							fnName: "_loginSuccess",
							data: {
								loginTime: n.data.loginTime,
								sign: n.data.sign
							}
						}), !1;
						window.location.href = t.options.loginCallback + "&loginTime=" + n.data.loginTime + "&sign=" + n.data.sign
					} else window.location.href =
						"https://lgn.huya.com/lgn/jump/authentication.do?action=authenticate&appid=5060&busiId=5216&direct=1&cks=true&busiUrl=" +
						encodeURIComponent(t.options.loginCallback + "&loginTime=" + n.data.loginTime + "&sign=" + n.data.sign) +
						"&ticket=" + encodeURIComponent(n.data.ticket5060) + "&yyuid=" + n.data.uid
				},
				error: function(t) {
					e.errorFn(t)
				}
			}))
		},
		_bindEvent: function() {
			var e = this,
				t = $(".returnlogin-btn"),
				i = this.$registerForm.find(".sel-areas"),
				n = this.$registerForm.find(".sel-areas-list"),
				r = this.$registerForm.find(".udb-input-tel"),
				o = this.$registerForm.find(".input-error-tips"),
				a = this.$registerForm.find(".udb-input-code"),
				s = this.$registerForm.find(".udb-input-pw"),
				c = this.$registerForm.find(".agreen"),
				u = $("#reg-btn"),
				l = this.$registerForm.find(".get-sms-code");
			util.placeholder(this.$registerForm), new SelAreas(i, n, r), util.setPwStatus(s), this.$registerForm.on(
				"focusin", ".udb-input-tel, .udb-input-code, .udb-input-pw",
				function() {
					var e = $(this);
					e.hasClass("udb-input-tel") ? userAction("input.r.phone") : e.hasClass("udb-input-code") ? userAction(
						"input.r.code") : e.hasClass("udb-input-pw") && userAction("input.r.passwd")
				}), l.on("click", function(t) {
				if (0 == +l.attr("enabled")) return !1;
				var n = i.attr("areasCode"),
					s = $.trim(r.val());
				if (!util.checkTel(s, n)) return util.formErrorTip("请输入正确的手机号", o), r.focus(), !1;
				var c = util.countDown(l);
				e._sendCode({
					_phone: ("86" == n ? "0" : "00") + n + s,
					_code: "",
					successFn: function() {
						a.focus(), layer.msg("验证码已发送", {
							icon: 1
						})
					},
					strategyFn: function() {
						c()
					},
					errorFn: function(e) {
						c(), r.focus(), util.formErrorTip(e.description, o)
					}
				}), userAction("button.UDBSdkRegister.code", t.pageX, t.pageY)
			}), util.checkPwStrong(s, o), t.on("click", function() {
				e._hide(), events.emit("changLoginPan")
			}), u.on("click", function(t) {
				var n = i.attr("areasCode"),
					l = $.trim(r.val()),
					d = $.trim(a.val()),
					p = $.trim(s.val());
				return c.prop("checked") ? util.checkTel(l, n) ? 0 != HwUDBWebSDK.Item.Verify.code(d, 1) ? (util.formErrorTip(
					"请输入验证码", o), a.focus(), !1) : 0 != HwUDBWebSDK.Item.Verify.password(p) ? (util.formErrorTip(
					"请设置6-20位字母、数字、符号两种以上字符组合密码", o), s.focus(), !1) : (l = ("86" == n ? "0" : "00") + n + l, e._register({
					data: {
						phone: l,
						smsCode: d,
						password: p
					},
					successFn: function() {
						yaReportArr.push({
							eid: "Status/Register",
							label: 1
						})
					},
					errorFn: function(e) {
						return 10030 == e.returnCode ? (layer.open({
							type: 2,
							title: "安全验证",
							area: ["350px", "310px"],
							content: e.description,
							shade: .7,
							end: function() {
								events.off("udbSafeAuth")
							},
							success: function(e, t) {
								events.once("udbSafeAuth", function() {
									layer.close(t), u.trigger("click")
								})
							}
						}), !1) : ("210009" == e.returnCode && a.focus(), yaReportArr.push({
							eid: "Status/Register",
							label: 0
						}), void util.formErrorTip(e.description, o))
					}
				}), void userAction("button.UDBSdkRegister", t.pageX, t.pageY)) : (util.formErrorTip("请输入正确的手机号", o), r.focus(),
					!1) : (openPolicyTips(e.$registerForm), !1)
			});
			var d = r.siblings(".clean-input");
			util.cleanAccountInput(r, d), r.on("keyup", function(e) {
				13 == e.keyCode && a.focus()
			}), a.on("keyup", function(e) {
				13 == e.keyCode && s.focus()
			}), s.on("keyup", function(e) {
				13 == e.keyCode && u.click()
			})
		}
	}, AccountLogin.prototype = {
		initialize: function(e) {
			this.options = e, this.$accountLoginForm = $("#account-login-form"), this.authErrorNum = {
				img: 0,
				yy: 0
			}, this._createHtml(), this._bindEvent()
		},
		_createHtml: function() {
			var tmpl = function(obj) {
				{
					var __p = "";
					Array.prototype.join
				}
				with(obj || {}) __p +=
					'<div class="udb-input-item">\r\n    <input type="text" class="udb-input udb-input-account" autocomplete="off" placeholder="手机号/虎牙号" maxlength="40">\r\n    <i class="clean-input"></i>\r\n</div>\r\n<div class="udb-input-item">\r\n    <input type="password"  class="udb-input udb-input-pw" autocomplete="off" maxlength="50" placeholder="密码" oncontextmenu="return false" oncopy="return false" oncut="return false">\r\n</div>\r\n<div class="udb-input-item udb-imgcode-item hy-cf udb-auth-item" style="display:none">\r\n    <input type="text"  class="udb-input udb-input-code hy-fl" autocomplete="off" placeholder="请输入验证码">\r\n    <img src="" alt="" class="hy-fr change-image-btn clickstat" title="点击刷新" eid="Click/AccountLogin/ImageVerification/Refresh">\r\n</div>\r\n<div class="udb-input-item udb-yycode-item hy-cf udb-auth-item" style="display:none">\r\n    <input type="text"  class="udb-input udb-input-code hy-fl" autocomplete="off" placeholder="请输入6位数字动态口令" onkeyup="if(value.length>=6)value=value.slice(0,6);this.value=this.value.replace(/\\D/g,\'\')" onafterpaste="this.value=this.value.replace(/\\D/g,\'\')">\r\n</div>\r\n<div class="udb-form-item hy-cf" style="margin-bottom: 15px">\r\n    <label style="display:none"><input type="checkbox" name="R_remember" value="1" class="R_remember clickstat" eid="Click/AccountLogin/AutoLogin" checked>自动登录</label>\r\n    <div class="input-error-tips" style="float: left; width: 240px; margin: 0">&nbsp;</div>\r\n    <a class="forget-pwd-a clickstat" href="https://aq.huya.com/p/find.html" target="_blank" eid="Click/AccountLogin/ForgetPassword">忘记密码?</a>\r\n</div>\r\n\r\n<div class="udb-button clickstat" id="login-btn" eid="Click/AccountLogin/Login" strategy="0">登录</div>\r\n<div class="udb-form-footer"><span class="go-register clickstat" eid="Click/AccountLogin/Register">快速注册 &gt;</span></div>';
				return __p
			};
			this.$accountLoginForm.html(tmpl())
		},
		_strategyAuth: function(e) {
			var t = this;
			HwUDBWebSDK.Strategy.auth({
				data: {
					strategy: e.strategysItem.strategy,
					behavior: encodeURIComponent(HwUDBWebSDK.Message.stringify(reservedAction(_user_action))),
					uid: e.strategysItem.uid,
					authcode: e.param.authcode || "",
					randomStr: e.param.randomStr || "",
					remember: e.param.remember
				},
				success: function(t) {
					yaReportArr.push({
						eid: "Status/AccountLogin",
						label: "1"
					}), e.successFn && e.successFn(t)
				},
				strategy: function(i) {
					var n = i.data.strategys;
					if (!$.isArray(n) || !n[0]) return !1;
					var r = n[0] || {};
					4 == r.strategy && t._openImageAuth(r, e.param, i.returnCode), 8 == r.strategy && t._openPhoneAuth(r, e.param),
						16 == r.strategy && t._openYYAuth(r, e.param), yaReportArr.push({
							eid: "Status/AccountLogin",
							label: "0"
						}), e.strategyFn && e.strategyFn(i)
				},
				error: function(t) {
					yaReportArr.push({
						eid: "Status/AccountLogin",
						label: "0"
					}), e.errorFn && e.errorFn(t)
				}
			})
		},
		_openPhoneAuth: function(strategysItem, param) {
			var _this = this;
			yaReportArr.push({
				eid: "Pageview/AccountLogin/SMSVerification"
			}), layer.open({
				type: 0,
				title: "短信安全验证",
				area: "350px",
				content: function(obj) {
					{
						var __t, __p = "";
						Array.prototype.join
					}
					with(obj || {}) __p +=
						'<div class="sms-auth-head">\r\n    <h2>为了保证您的帐号安全，本次登录需要进行信息验证</h2>\r\n    <p>验证码将发送至 ' + (null == (__t =
							strategysItem.promptContent) ? "" : __t) +
						'</p>\r\n</div>		\r\n<div class="udb-layer-form udb-form udb-smslayer-form">\r\n    <div class="udb-input-item hy-cf">\r\n        <input type="text" class="udb-input udb-input-code hy-fl" autocomplete="off" placeholder="请输入短信验证码">\r\n        <span class="get-sms-code hy-fr clickstat" enabled="1" eid="Click/AccountLogin/SMSVerification/GetCode">获取验证码</span>\r\n    </div>\r\n    <div class="udb-form-item hy-cf">\r\n        <a class="forget-tel-a clickstat" href="https://aq.huya.com/p/appeal/appeal.html" target="_blank" eid="Click/AccountLogin/SMSVerification/Appeal">收不到验证码?</a>\r\n    </div>	\r\n    <div class="input-error-tips">&nbsp;</div>\r\n</div>';
					return __p
				}({
					strategysItem: strategysItem
				}),
				shade: .7,
				skin: "udb-layer-wrap",
				btn: ["确定"],
				btn1: function(e, t) {
					var i = t.find(".udb-input-code"),
						n = t.find(".get-sms-code"),
						r = t.find(".input-error-tips"),
						o = $.trim(i.val());
					return 1 == +n.attr("enabled") ? (util.formErrorTip("请先获取验证码", r), !1) : 0 != HwUDBWebSDK.Item.Verify.code(
						o, 1) ? (util.formErrorTip("请输入短信验证码", r), !1) : (param.authcode = o, yaReportArr.push({
						eid: "Click/AccountLogin/SMSVerification/Confirm"
					}), void _this._strategyAuth({
						strategysItem: strategysItem,
						param: param,
						successFn: function(t) {
							layer.close(e), yaReportArr.push({
								eid: "Status/AccountLogin/SMSVerification/Success"
							}), loginAfterHandle.huya(t, _this.options, param.userName)
						},
						strategyFn: function() {
							yaReportArr.push({
								eid: "Status/AccountLogin/SMSVerification/Fail"
							})
						},
						errorFn: function(t) {
							"60043" == t.returnCode ? (layer.close(e), loginAfterHandle.upgradeHints(t, 3)) : (yaReportArr.push({
								eid: "Status/AccountLogin/SMSVerification/Fail"
							}), util.formErrorTip(t.description, r))
						}
					}))
				},
				success: function(e) {
					var t = e.find(".udb-input-code"),
						i = e.find(".get-sms-code"),
						n = e.find(".input-error-tips");
					i.on("click", function() {
						if (0 == +i.attr("enabled")) return !1;
						var e = util.countDown(i);
						HwUDBWebSDK.Strategy.Code.code({
							data: {
								strategy: strategysItem.strategy,
								uid: strategysItem.uid
							},
							success: function() {
								layer.tips("验证码已发送", i, {
									tips: [1, "#3595CC"],
									time: 3e3
								}), t.focus()
							},
							error: function(t) {
								e(), util.formErrorTip(t.description, n)
							}
						})
					}), t.on("keyup", function(t) {
						13 == t.keyCode && e.find(".layui-layer-btn0").click()
					})
				}
			})
		},
		_openYYAuth: function(e) {
			var t = this;
			yaReportArr.push({
				eid: "Pageview/AccountLogin/TokenVerification"
			});
			var i = this.$accountLoginForm.find(".input-error-tips"),
				n = $("#login-btn"),
				r = this.$accountLoginForm.find(".udb-yycode-item"),
				o = r.find(".udb-input-code");
			r.show(), o.val("").focus(), 0 == this.authErrorNum.yy ? this.authErrorNum.yy = 1 : (yaReportArr.push({
				eid: "Status/AccountLogin/TokenVerification/Fail"
			}), util.formErrorTip("动态口令错误", i)), postMessageToParent({
				fnName: "_setLayerHeight",
				data: {
					height: 370
				}
			}), o.off("keyup").on("keyup", function(e) {
				13 == e.keyCode && n.click()
			}), n.attr("strategy", e.strategy), events.off("loginYYAuth").on("loginYYAuth", function(n) {
				t._strategyAuth({
					strategysItem: e,
					param: n,
					successFn: function(e) {
						yaReportArr.push({
							eid: "Status/AccountLogin/TokenVerification/Success"
						}), loginAfterHandle.huya(e, t.options, n.userName)
					},
					strategyFn: function() {
						yaReportArr.push({
							eid: "Status/AccountLogin/TokenVerification/Fail"
						})
					},
					errorFn: function(e) {
						"60043" == e.returnCode ? loginAfterHandle.upgradeHints(e, 3) : (yaReportArr.push({
							eid: "Status/AccountLogin/TokenVerification/Fail"
						}), util.formErrorTip(e.description, i))
					}
				})
			})
		},
		_openImageAuth: function(e, t, i) {
			var n = this,
				r = this.$accountLoginForm.find(".input-error-tips");
			if (void 0 != e.level && 3 == e.level) return util.formErrorTip(
				'帐号登录环境异常，请使用<span style="color:#005B9C; cursor: pointer;" class="strategyQuick">快速安全登录</span>', r), $(
				".strategyQuick").on("click", function() {
				$(".quick-icon").trigger("click")
			}), !1;
			0 == this.authErrorNum.img ? this.authErrorNum.img = 1 : (yaReportArr.push({
				eid: "Status/AccountLogin/ImageVerification/Fail"
			}), util.formErrorTip("图片验证码错误", r)), yaReportArr.push({
				eid: "Pageview/AccountLogin/ImageVerification"
			});
			var o = $("#login-btn"),
				a = this.$accountLoginForm.find(".udb-imgcode-item"),
				s = a.find(".change-image-btn"),
				c = a.find(".udb-input-code");
			a.show(), c.val("").focus(), s.attr("src", e.data), postMessageToParent({
				fnName: "_setLayerHeight",
				data: {
					height: 370
				}
			}), s.off("click").on("click", function() {
				HwUDBWebSDK.Strategy.Code.code({
					data: {
						strategy: e.strategy,
						uid: e.uid
					},
					success: function(e) {
						s.attr("src", e.data.data), c.focus()
					},
					error: function(e) {
						util.formErrorTip(e.description, r)
					}
				})
			}), c.off("keyup").on("keyup", function(e) {
				13 == e.keyCode && o.click()
			}), "10039" == i ? o.attr("strategy", 0) : (o.attr("strategy", e.strategy), events.off("loginImageAuth").on(
				"loginImageAuth",
				function(t) {
					n._strategyAuth({
						strategysItem: e,
						param: t,
						successFn: function(e) {
							yaReportArr.push({
								eid: "Status/AccountLogin/ImageVerification/Success"
							}), loginAfterHandle.huya(e, n.options, t.userName)
						},
						strategyFn: function() {
							yaReportArr.push({
								eid: "Status/AccountLogin/ImageVerification/Fail"
							})
						},
						errorFn: function(e) {
							"60043" == e.returnCode ? loginAfterHandle.upgradeHints(e, 3) : (yaReportArr.push({
								eid: "Status/AccountLogin/ImageVerification/Fail"
							}), util.formErrorTip(e.description, r))
						}
					})
				}))
		},
		_openSafeAuth: function(e) {
			if (e.data.indexOf("qr_auth") > -1) return layer.msg("为了您的账号安全，请进行扫码登录", {
				icon: 1
			}), $(".quick-icon").trigger("click"), !1;
			try {
				var t = e.data.split("?"),
					i = parseQueryString(e.data),
					n = [],
					r = $("#login-btn");
				for (var o in i) n.push(o + "=" + encodeURIComponent(i[o]));
				layer.open({
					type: 2,
					title: e.selectTitle || "安全验证",
					area: ["350px", "310px"],
					content: t[0] + "?" + n.join("&"),
					shade: .7,
					skin: "udb-auth-" + e.strategy,
					end: function() {
						events.off("udbSafeAuth")
					},
					success: function(e, t) {
						events.once("udbSafeAuth", function(e) {
							layer.close(t), r.trigger("click", {
								authId: e.param.data.authId
							})
						})
					}
				})
			} catch (a) {
				layer.msg("解析服务器url出错", {
					icon: 2
				})
			}
		},
		
		
		_login: function(e, t, i) {
			var n = this;
			HwUDBWebSDK.Login.V2.account({
				data: e,
				success: function(t) {
					yaReportArr.push({
						eid: "Status/AccountLogin",
						label: "1"
					}), loginAfterHandle.huya(t, n.options, e.userName)
				},
				strategy: function(i) {
					var r = i.data.strategys;
					if (yaReportArr.push({
							eid: "Status/AccountLogin",
							label: "0"
						}), !$.isArray(r) || !r[0]) return !1;
					var o = r[0] || {};
					return "10039" == i.returnCode ? (4 == o.strategy && n._openImageAuth(o, e, i.returnCode), 4 == o.dataType &&
						n._openSafeAuth(o), !1) : o.uid < 1 ? (util.formErrorTip("用户名或密码错误", t), !1) : (4 == o.strategy && n._openImageAuth(
							o, e, i.returnCode), 8 == o.strategy && n._openPhoneAuth(o, e), 16 == o.strategy && n._openYYAuth(o, e),
						void(4 == o.dataType && n._openSafeAuth(o)))
				},
				error: function(e) {
					var n = e.returnCode;
					return yaReportArr.push({
						eid: "Status/AccountLogin",
						label: "0"
					}), "10035" == n ? (util.formErrorTip(
						'该帐号未开通YY号登录权限，请先到<a style="color:#005B9C; margin:0 3px" href="https://aq.yy.com" target="_blank">YY安全中心</a>开通',
						t), !1) : "60043" == n ? (loginAfterHandle.upgradeHints(e, 3), !1) : (("10005" == n || "2001" == n) && i.hide()
						.find(".udb-input-code").val(""), void util.formErrorTip(e.description, t))
				}
			})
		},
		_bindEvent: function() {
			var e = this,
				t = this.$accountLoginForm.find(".go-register"),
				i = this.$accountLoginForm.find(".udb-input-account"),
				n = this.$accountLoginForm.find(".udb-input-pw"),
				r = this.$accountLoginForm.find(".R_remember"),
				o = this.$accountLoginForm.find(".udb-auth-item"),
				a = this.$accountLoginForm.find(".udb-imgcode-item"),
				s = a.find(".udb-input-code"),
				c = this.$accountLoginForm.find(".udb-yycode-item"),
				u = c.find(".udb-input-code"),
				l = this.$accountLoginForm.find(".input-error-tips"),
				d = $("#login-btn");
			util.placeholder(this.$accountLoginForm), t.on("click", function(e) {
				userAction("button.UDBSdkPage.register", e.pageX, e.pageY), events.emit("changRegister")
			}), d.on("click", function(t, o) {
				var p = HwUDBWebSDK.Item.Verify,
					g = $.trim(i.val()),
					h = $.trim(n.val()),
					f = r.prop("checked") ? 1 : 0,
					m = d.attr("strategy"),
					y = p.account(g, 1),
					b = "";
				userAction("button.UDBSdkLogin", t.pageX, t.pageY);
				var v = {
					userName: g,
					password: HwUDBWebSDK.Security.SHA1.hexEncode(h),
					remember: f,
					behavior: encodeURIComponent(HwUDBWebSDK.Message.stringify(reservedAction(_user_action)))
				};
				if (0 != y) return 1 == y ? util.formErrorTip("您没有输入用户名", l) : util.formErrorTip("用户名不能超过50个字节", l), i.focus(),
					!1;
				if (0 != p.password(h, 1)) return n.focus(), util.formErrorTip("请输入密码", l), !1;
				if (a.is(":visible")) {
					if (b = $.trim(s.val()), 0 != p.code(b, 1)) return util.formErrorTip("请输入验证码", l), !1;
					v.authcode = b
				}
				if (c.is(":visible")) {
					if (b = $.trim(u.val()), 0 != p.code(b, 1)) return util.formErrorTip("请输入6位数字动态口令", l), !1;
					v.authcode = b
				}
				o && o.authId && (v.authId = o.authId), m && m > 0 ? 4 == m ? events.emit("loginImageAuth", v) : 16 == m &&
					events.emit("loginYYAuth", v) : e._login(v, l, a)
			}), this.$accountLoginForm.on("focusin", ".udb-input-account, .udb-input-pw", function() {
				var e = $(this);
				e.hasClass("udb-input-account") ? userAction("input.l.account") : e.hasClass("udb-input-pw") && userAction(
					"input.l.passwd")
			});
			var p = i.siblings(".clean-input");
			i.on("keyup", function(e) {
				o.hide(), d.attr("strategy", 0), postMessageToParent({
					fnName: "_setLayerHeight",
					data: {
						height: 340
					}
				}), 13 == e.keyCode && n.focus()
			}), util.cleanAccountInput(i, p, function() {
				o.hide(), d.attr("strategy", 0), postMessageToParent({
					fnName: "_setLayerHeight",
					data: {
						height: 340
					}
				})
			}), n.on("keyup", function(e) {
				13 == e.keyCode && d.click()
			})
		}
	}, PhoneLogin.prototype = {
		initialize: function(e) {
			this.options = e, this.$phoneLoginForm = $("#phone-login-form"), this._createHtml(), this._bindEvent()
		},
		_createHtml: function() {
			var tmpl = function(obj) {
				{
					var __t, __p = "";
					Array.prototype.join
				}
				with(obj || {}) {
					__p +=
						'<div class="udb-input-item udb-input-item-sel hy-cf">\r\n    <div class="udb-form-sel hy-fl sel-areas" areasCode="86" eid="Click/SMSLogin/AreaCode">\r\n        <span>+86</span>\r\n        <i class="arrow-down"></i>\r\n    </div>\r\n    <ul class="udb-sel-list sel-areas-list">\r\n        ';
					for (var i = 0; i < country.length; i++) {
						var $items = country[i].split("-");
						__p += "\r\n        <li>" + (null == (__t = $items[0]) ? "" : __t) +
							'<span class="areasNumber" areasCode="' + (null == (__t = $items[1]) ? "" : __t) + '">+' + (null == (__t =
								$items[1]) ? "" : __t) + "</span></li>\r\n        "
					}
					__p +=
						'\r\n    </ul>\r\n    <input type="number" class="udb-input udb-input-tel hy-fl" placeholder="请输入手机号" onkeyup="if(value.length>25)value=value.slice(0,25)" autocomplete="off">\r\n    <i class="clean-input"></i>\r\n</div>	\r\n<div class="udb-input-item hy-cf">\r\n    <input type="text" class="udb-input udb-input-code hy-fl" autocomplete="off" placeholder="请输入验证码" onkeyup="if(value.length>=6)value=value.slice(0,6);this.value=this.value.replace(/\\D/g,\'\')" onafterpaste="this.value=this.value.replace(/\\D/g,\'\')">\r\n    <span class="get-sms-code hy-fr clickstat" enabled="1" eid="Click/SMSLogin/GetCode">获取验证码</span>\r\n</div>\r\n<div class="udb-form-item hy-cf" style="margin-bottom: 15px">\r\n    <label style="display:none"><input type="checkbox" name="R_remember" value="1" class="R_remember" checked>自动登录</label>\r\n    <div class="input-error-tips" style="float: left; width: 240px; margin: 0">&nbsp;</div>\r\n    <a class="forget-tel-a clickstat" href="https://aq.huya.com/p/appeal/appeal.html" target="_blank" eid="Click/SMSLogin/Appeal">收不到验证码?</a>\r\n</div>	\r\n<div class="udb-button clickstat" id="phone-login-btn" eid="Click/SMSLogin/Confirm">登录</div>\r\n<div class="udb-form-footer policy" style="display: none">\r\n    <span class="udb-policy-tips"></span>\r\n    <label class="clickstat" eid="usr/click/checklist/smsLogin">\r\n        <input type="checkbox" name="agreen" value="1" class="agreen">\r\n        已阅读并同意\r\n        <a href="https://hd.huya.com/huyaDIYzt/6811/pc/index.html#diySetTab=5" target="_balnk" class="clickstat" eid="Click/SMSLogin/Agreement1">《用户服务协议》</a>\r\n        和\r\n        <a href="https://hd.huya.com/huyaDIYzt/6811/pc/index.html#diySetTab=1" target="_balnk" class="clickstat" eid="Click/SMSLogin/Agreement2">《隐私政策》</a>\r\n    </label>\r\n</div>\r\n<div class="udb-form-footer"><span class="go-register clickstat" eid="Click/SMSLogin/Register">快速注册 &gt;</span></div>'
				}
				return __p
			};
			this.$phoneLoginForm.html(tmpl({
				country: country
			}))
		},
		_login: function(e, t) {
			var i = this;
			HwUDBWebSDK.Login.V2.Sms.phone({
				data: e,
				success: function(t) {
					yaReportArr.push({
						eid: "Status/SMSLogin",
						label: 1
					}), loginAfterHandle.huya(t, i.options, e.phone)
				},
				strategy: function(e) {
					var t = e.data.strategys;
					if (!$.isArray(t) || !t[0]) return !1;
					var i = t[0] || {};
					if (4 == i.dataType) {
						if (i.data.indexOf("qr_auth") > -1) return layer.msg("为了您的账号安全，请进行扫码登录", {
							icon: 1
						}), $(".quick-icon").trigger("click"), !1;
						try {
							var n = i.data.split("?"),
								r = parseQueryString(i.data),
								o = [];
							for (var a in r) o.push(a + "=" + encodeURIComponent(r[a]));
							layer.open({
								type: 2,
								title: i.selectTitle || "安全验证",
								area: ["350px", "310px"],
								content: n[0] + "?" + o.join("&"),
								shade: .7,
								end: function() {
									HwUDBWebSDK.Cookie.remove("udb_wession"), events.off("udbSafeAuth")
								},
								success: function(e, t) {
									events.once("udbSafeAuth", function(e) {
										layer.close(t), $("#phone-login-btn").trigger("click", {
											strategy: i.strategy,
											authId: e.param.data.authId
										})
									})
								}
							})
						} catch (s) {
							layer.msg("解析服务器url出错", {
								icon: 2
							})
						}
					}
				},
				error: function(e) {
					if (yaReportArr.push({
							eid: "Status/SMSLogin",
							label: 0
						}), "2013" == e.returnCode) {
						var i = HwUDBWebSDK.Message.decode(e.description);
						i && "object" == typeof i && i.hasOwnProperty("erromsg") && i.erromsg && i.erromsg.hasOwnProperty(
							"content") ? util.formErrorTip(i.erromsg.content, t) : util.formErrorTip(e.description, t)
					} else util.formErrorTip(e.description, t)
				}
			})
		},
		_sendCode: function(e) {
			var t = this,
				i = {
					phone: e._phone,
					behavior: encodeURIComponent(HwUDBWebSDK.Message.stringify(reservedAction(_user_action)))
				};
			HwUDBWebSDK.Code.V2.Sms.send({
				data: i,
				success: function(t) {
					e.successFn && e.successFn(t)
				},
				strategy: function(i) {
					e.strategyFn && e.strategyFn(i);
					var n = i.data.strategys;
					if (!$.isArray(n) || !n[0]) return !1;
					var r = n[0] || {};
					if (4 == r.dataType) {
						if (r.data.indexOf("qr_auth") > -1) return layer.msg("为了您的账号安全，请进行扫码登录", {
							icon: 1
						}), $(".quick-icon").trigger("click"), !1;
						try {
							var o = r.data.split("?"),
								a = parseQueryString(r.data),
								s = [];
							for (var c in a) s.push(c + "=" + encodeURIComponent(a[c]));
							layer.open({
								type: 2,
								title: r.selectTitle || "安全验证",
								area: ["350px", "310px"],
								content: o[0] + "?" + s.join("&"),
								shade: .7,
								end: function() {
									HwUDBWebSDK.Cookie.remove("udb_wession"), events.off("udbSafeAuth")
								},
								success: function(e, i) {
									events.once("udbSafeAuth", function(e) {
										layer.close(i), "udbUpLinkAuth" == e.pageType ? $("#phone-login-btn").trigger("click", {
											strategy: r.strategy,
											authId: e.param.data.authId
										}) : t.$phoneLoginForm.find(".get-sms-code").click()
									})
								}
							})
						} catch (u) {
							layer.msg("解析服务器url出错", {
								icon: 2
							})
						}
					}
				},
				error: function(t) {
					e.errorFn && e.errorFn(t)
				}
			})
		},
		_bindEvent: function() {
			var e = this,
				t = this.$phoneLoginForm.find(".sel-areas"),
				i = this.$phoneLoginForm.find(".sel-areas-list"),
				n = this.$phoneLoginForm.find(".udb-input-tel"),
				r = this.$phoneLoginForm.find(".input-error-tips"),
				o = this.$phoneLoginForm.find(".udb-input-code"),
				a = this.$phoneLoginForm.find(".get-sms-code"),
				s = this.$phoneLoginForm.find(".R_remember"),
				c = this.$phoneLoginForm.find(".policy"),
				u = this.$phoneLoginForm.find(".agreen"),
				l = null,
				d = this.$phoneLoginForm.find(".go-register"),
				p = $("#phone-login-btn");
			util.placeholder(this.$phoneLoginForm), d.on("click", function(e) {
				userAction("button.UDBSdkPage.register", e.pageX, e.pageY), events.emit("changRegister")
			});
			var g = function() {
				c.hide(), u.prop("checked", !1)
			};
			new SelAreas(t, i, n), a.on("click", function() {
				if (0 == +a.attr("enabled")) return !1;
				var i = t.attr("areasCode"),
					s = $.trim(n.val());
				return util.checkTel(s, i) ? (l = util.countDown(a), void e._sendCode({
					_phone: ("86" == i ? "0" : "00") + i + s,
					_code: "",
					successFn: function(e) {
						o.focus(), layer.msg("验证码已发送", {
							icon: 1
						}), e.data.newUser && c.show()
					},
					strategyFn: function() {
						l()
					},
					errorFn: function(e) {
						l(), n.focus(), util.formErrorTip(e.description, r)
					}
				})) : (util.formErrorTip("请输入正确的手机号", r), n.focus(), !1)
			}), this.$phoneLoginForm.on("focusin", ".udb-input-tel, udb-input-code", function() {
				var e = $(this);
				e.hasClass("udb-input-tel") ? userAction("input.l.phone") : e.hasClass("udb-input-code") && userAction(
					"input.l.phonecode")
			}), n.on("keyup", function(e) {
				$.trim(n.val());
				13 == e.keyCode && o.focus(), g(), l && l()
			});
			var h = n.siblings(".clean-input");
			util.cleanAccountInput(n, h), o.on("keyup", function(e) {
				13 == e.keyCode && p.click()
			}), p.on("click", function(i, a) {
				var l = HwUDBWebSDK.Item.Verify,
					d = t.attr("areasCode"),
					p = $.trim(n.val()),
					g = $.trim(o.val()),
					h = s.prop("checked") ? 1 : 0;
				if (c.is(":visible") && !u.prop("checked")) return openPolicyTips(e.$phoneLoginForm), !1;
				if (!util.checkTel(p, d)) return util.formErrorTip("请输入正确的手机号", r), n.focus(), !1;
				if (0 != l.code(g) && !a) return util.formErrorTip("请输入6位短信验证码", r), o.focus(), !1;
				userAction("button.UDBSdkPhoneLogin", i.pageX, i.pageY);
				var f = {
					phone: ("86" == d ? "0" : "00") + d + p,
					authcode: g || "",
					authId: a && a.authId || "",
					remember: h,
					behavior: encodeURIComponent(HwUDBWebSDK.Message.stringify(reservedAction(_user_action)))
				};
				e._login(f, r)
			})
		}
	}, ThirdBind.prototype = {
		initialize: function(e) {
			this.openLayer(e)
		},
		openLayer: function(e) {
			$(".login-wrap").hide(), $("#login-pop").html('<iframe src="' + e.description +
				'" frameborder="0" width="100%" height="100%" scrolling="no"></iframe>').show(), postMessageToParent({
				fnName: "_setLayerHeight",
				data: {
					height: 390
				}
			})
		}
	}, InputLogin.prototype = {
		initialize: function(e) {
			var t = this;
			this.options = e, this.$inputLoginWrap = $("#input-login-wrap"), this.$loginHeadNav = $("#login-head-nav"), this
				.$loginFormWrap = $("#login-form-wrap"), this.$udbForm = this.$loginFormWrap.find(".udb-form"), this.accountLoginObj =
				new AccountLogin(this.options), this.phoneLoginObj = new PhoneLogin(this.options), this.registerObj = new Register(
					this.options), this._bindEvent(), events.on("changLoginPan", function() {
					t._showLoginPan()
				}), events.on("changRegister", function() {
					t.register()
				})
		},
		show: function() {
			if (this.$inputLoginWrap.show(), this.$loginFormWrap.is(":visible")) {
				if (userAction("page.login"), "SMSLogin" == localStorage.loginMode) this.$loginHeadNav.find("li").eq(1).click();
				else try {
					localStorage.loginMode = "AccountLogin"
				} catch (e) {}
				this._setLoginHeight(), yaReportArr.push({
					eid: "Pageview/AccountLogin"
				})
			} else events.emit("changRegister")
		},
		_showLoginPan: function() {
			this.$loginFormWrap.show(), this.$loginHeadNav.show(), this._setLoginHeight()
		},
		_setLoginHeight: function() {
			var e = 370;
			$("#account-login-form").find(".udb-auth-item").is(":visible") || (e = 340), postMessageToParent({
				fnName: "_setLayerHeight",
				data: {
					height: e
				}
			})
		},
		_openSafeAuth: function(e, t) {
			layer.open({
				type: 2,
				title: e.selectTitle || "安全验证",
				area: ["350px", "310px"],
				content: e.data,
				shade: .7,
				skin: "udb-auth-" + e.strategy,
				end: function() {
					events.off("udbSafeAuth")
				},
				success: function(e, i) {
					events.once("udbSafeAuth", function(e) {
						layer.close(i), HwUDBWebSDK.Html.add({
							tag: "iframe",
							urlList: [{
								id: "udb_exchangesuccess",
								url: t + "&authId=" + e.param.data.authId
							}]
						})
					})
				}
			})
		},
		_bindEvent: function() {
			var e = this;
			$(".quick-icon").on("click", function(t) {
				e.$inputLoginWrap.hide(), userAction("button.UDBSdkPage.qrcode", t.pageX, t.pageY);
				try {
					HwUDBWebSDK.Report.Event.click("div.UDBSdkLgn-qrQuick")
				} catch (i) {}
				events.emit("changeQuickLogin", e.options)
			}), e.$loginHeadNav.find("li").on("click", function() {
				var t = $(this),
					i = t.index();
				if (t.addClass("on").siblings().removeClass("on"), e.$udbForm.hide().eq(i).show(), $(".head-nav-bg").attr(
						"class", "head-nav-bg head-nav-bg-" + i), 0 == i) {
					yaReportArr.push({
						eid: "Pageview/AccountLogin"
					});
					try {
						localStorage.loginMode = "AccountLogin"
					} catch (n) {}
					e._setLoginHeight(), userAction("page.accountLogin")
				} else {
					yaReportArr.push({
						eid: "Pageview/SMSLogin"
					});
					try {
						localStorage.loginMode = "SMSLogin"
					} catch (n) {}
					userAction("page.phoneLogin")
				}
			}), $(".third-login-list").on("click", "li", function(t) {
				var i = $(this),
					n = i.attr("data-type");
				userAction("button.UDBSdkLogin." + n, t.pageX, t.pageY), yaReportArr.push({
					eid: "Click/Thirdparty",
					label: n
				}), HwUDBWebSDK.Login.V2.third(buildTrack({
					type: n,
					win: "1",
					data: {
						behavior: encodeURIComponent(HwUDBWebSDK.Message.stringify(reservedAction(_user_action)))
					},
					success: function(t) {
						yaReportArr.push({
							eid: "Status/Thirdparty/Success",
							label: n
						}), loginAfterHandle.third(t, e.options)
					},
					strategy: function(t) {
						var i = t.data.strategys;
						if (!$.isArray(i) || !i[0]) return !1;
						var n = i[0] || {};
						4 == n.dataType && e._openSafeAuth(n, t.data.callbackUrl)
					},
					error: function(e) {
						if (yaReportArr.push({
								eid: "Status/Thirdparty/fail",
								label: n
							}), "2013" == e.returnCode) layer.alert(e.description, {
							title: "错误提示",
							icon: 2,
							skin: "udb-layer-wrap udb-layer-error"
						});
						else if ("60043" == e.returnCode) loginAfterHandle.upgradeHints(e, 1, n);
						else if ("2001" == e.returnCode) {
							new ThirdBind(e)
						} else layer.msg(e.description, {
							icon: 2
						})
					}
				}))
			})
		},
		register: function() {
			this.$loginHeadNav.hide(), this.$loginFormWrap.hide(), this.$inputLoginWrap.show(), this.registerObj.show()
		}
	}, UdbLogin.prototype = {
		initialize: function() {
			var e = this;
			this.inputLoginObj = null, this.quickLoginObj = null, this.listener(), this._bindEvent(), events.on(
				"changeQuickLogin",
				function(t) {
					e._quickLogin(t)
				}), events.on("inputLogin", function(t) {
				e.quickLoginObj && e.quickLoginObj.cancelCheckScan(), e.inputLoginObj = e.inputLoginObj || new InputLogin(t),
					e.inputLoginObj.show()
			})
		},
		_bindEvent: function() {
			$("#close-udbLogin").on("click", function() {
				HwUDBWebSDK.Cookie.remove("udb_wession"), postMessageToParent({
					fnName: "closeUdbLogin",
					data: {
						reLoad: loginAfterHandle.upgradeStatus
					}
				})
			})
		},
		_quickLogin: function(e) {
			this.quickLoginObj = this.quickLoginObj || new QuickLogin(e), this.quickLoginObj.login(), postMessageToParent({
				fnName: "_setLayerHeight",
				data: {
					height: 340
				}
			})
		},
		login: function(e) {
			_user_action.splice(0, _user_action.length), HwUDBWebSDK.Cookie.remove("udb_wession");
			var t = "";
			try {
				t = localStorage.loginMode
			} catch (i) {}
			"changeQuickLogin" == t ? this._quickLogin(e) : (this.inputLoginObj = this.inputLoginObj || new InputLogin(e),
				this.inputLoginObj.show())
		},
		logout: function(e) {
			var t = this;
			this.sdkInitStatusTimer && clearInterval(this.sdkInitStatusTimer), this.sdkInitStatusTimer = setInterval(
				function() {
					sdkInitStatus && (HwUDBWebSDK.Login.V2.logout({
						success: function() {
							e && void 0 != e && e.logoutCallback && void 0 != e.logoutCallback ? HwUDBWebSDK.Html.add({
								tag: "iframe",
								urlList: [{
									id: "udb_exchangesuccess",
									url: e.logoutCallback
								}],
								success: function() {
									postMessageToParent({
										fnName: "_logoutSuccess"
									})
								},
								error: function() {
									postMessageToParent({
										fnName: "_logoutSuccess"
									})
								}
							}) : postMessageToParent({
								fnName: "_logoutSuccess"
							})
						},
						error: function() {
							postMessageToParent({
								fnName: "_logoutFail"
							})
						}
					}), clearInterval(t.sdkInitStatusTimer))
				}, 30)
		},
		register: function(e) {
			_user_action.splice(0, _user_action.length), HwUDBWebSDK.Cookie.remove("udb_wession"), this.inputLoginObj = this
				.inputLoginObj || new InputLogin(e), this.inputLoginObj.register()
		},
		_showLoginPan: function(e) {
			this.inputLoginObj = this.inputLoginObj || new InputLogin(e), events.emit("changLoginPan")
		},
		third: function(e, t) {
			var i = this,
				n = void 0 != t && t.hasOwnProperty("type") ? t.type : "qq";
			_user_action.splice(0, _user_action.length), HwUDBWebSDK.Cookie.remove("udb_wession"), this.sdkInitStatusTimer &&
				clearInterval(this.sdkInitStatusTimer), this.sdkInitStatusTimer = setInterval(function() {
					sdkInitStatus && (HwUDBWebSDK.Login.V2.third(buildTrack({
						width: 520,
						type: n,
						win: "1",
						data: {
							behavior: encodeURIComponent(HwUDBWebSDK.Message.stringify(reservedAction(_user_action)))
						},
						success: function(t) {
							yaReportArr.push({
								eid: "Status/Thirdparty/Success",
								label: n
							}), loginAfterHandle.third(t, e)
						},
						error: function(t) {
							yaReportArr.push({
								eid: "Status/Thirdparty/fail",
								label: n
							}), postMessageToParent({
								fnName: "_showLayer"
							}), "60043" == t.returnCode ? loginAfterHandle.upgradeHints(t, 1, n) : (i._showLoginPan(e),
								setTimeout("2013" == t.returnCode ? function() {
									layer.msg(t.description, {
										icon: 2,
										time: 6e3
									})
								} : function() {
									layer.msg(t.description, {
										icon: 2
									})
								}))
						}
					})), clearInterval(i.sdkInitStatusTimer))
				}, 30)
		},
		listener: function() {
			var e = this;
			addHandler(window, "message", function(t) {
				if (!whiteServerList(t.origin)) return !1;
				var i = {};
				try {
					i = JSON.parse(t.data)
				} catch (t) {}
				"udbSdkWeb" == i.origin && (sdkInit(i.opt, function() {
					sdkInitStatus = !0
				}), e[i.fnName] && e[i.fnName](i.opt, i.args)), "udbSafeAuth" == i.eventType && events.emit("udbSafeAuth", i)
			}), postMessageToParent({
				fnName: "_loginPageOnload"
			})
		}
	}, parseQueryString(window.location.search).noThirdLogin && ($("#login-section-js").css("padding-left", 95), $(
		"#login-side-js").hide()), new UdbLogin, window.performanceInfo.reportFirstScreenTime(), yaReport({
		pro: "huya_web"
	})
});
