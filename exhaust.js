module.exports = function (fun) {
	var aW = [];
	var getInfo = function (t) {
		if (!arguments.length) {
			throw new Error('exhaust callback arguments not be null');
		}
		var aT = [].slice.call(arguments);
		if (arguments.length === 1 && {}.toString.call(t) == '[object Array]') {
			aT = t;
		}
		aW.push(aT);
	};
	fun(getInfo);

	var iT = 1;
	aW.forEach(function (a) {
		iT *= a.length;
	});

	var aC = [];
	var iC = iT;
	aW.forEach(a => {
		var n = a.length;
		iC = iC / n;
		var iS = -1;
		var aS = [];
		for (let i = 0; i < iT; i++) {
			if (!(i % iC)) {
				iS++;
			}
			aS.push(a[iS % n]);
		}
		aC.push(aS);
	});

	aC = aC[0].map(function (e, i) {
		var aR = [];
		aC.forEach(function (o) {
			aR.push(o[i]);
		});
		return aR;
	});

	var aR = aC.map(function (c) {
		var iT = 0;
		return fun(function () {
			return c[iT++];
		});
	});

	return aR;
};