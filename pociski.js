
class Pocisk{
		constructor(x, y, traf = false){
		this.x = x;
		this.y = y;
		this.traf = traf;
	}

	rysujPocisk(){
		fill(255, 255, 0);
		if(this.traf)
			fill(0,255,0);
		square(this.x+12, this.y+12, 25);
	}
}

function wyswietlPociski(){
	for(var i = 0; i< strzalyAI.length; i++){
		strzalyAI[i].rysujPocisk();
	}
		for(var i = 0; i< pociskiGracz.length; i++){
		pociskiGracz[i].rysujPocisk();
	}
}