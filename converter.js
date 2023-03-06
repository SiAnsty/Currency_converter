const RATES = {
  usd: 0.0133,
  eur: 0.0125,
	gbp: 0.0111,
	cny: 0.0916,
	kzt: 5.7738,
	bgn: 0.0244,
	rub: 1
};

function convert({ rub, currency }) {
	if (!RATES[currency]) {
		return null;
	}

	return rub * RATES[currency];
};
