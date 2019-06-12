var rand = (function () {
	var today = new Date();
	var seed = today.getTime();

	function rnd() {
		seed = (seed * 9301 + 49297) % 233280;
		return seed / (233280.0)
	};
	return function rand(number) {
		return Math.ceil(rnd(seed) * number)
	}
})();

var arr_wx = ['13004207054', '13185304841', '13085647249'];

var wxindex = getCookie("wx_index");

if (wxindex != "") {
	var wx_index = wxindex;
} else {
	var wx_index = rand(arr_wx.length) - 1;
	setCookie("wx_index", wx_index, 5);
}

var stxlwx = arr_wx[wx_index];

//var img =  arr_wx[wx_index];

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 60 * 1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}