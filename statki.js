var statki1 = [];//Tablica statków jednopolowych
var statki2 = [];//Tablica statków dwupolowych
var statki3 = [];//Tablica statków trójpolowych
var statki4 = [];//Tablica statków czteropolowych

class Statek1 { //Statek 1-polowy
	constructor(x, y, len, ai=false, zatop = false){
		this.zatop = zatop;
		this.ai = ai
		this.x = x;
		this.y = y;
		this.len = len;
	}
	rysujStatki() {
		fill(255, 0, 0);
		if(this.ai)
			fill(255);
		if(this.zatop){
			fill(0);
		}
		square(this.x, this.y, this.len);
	}
}
class Statek2 { //Statek 2-polowy
	constructor(x, y, len, turn, ai = false, traf = 0, zatop = false){
		this.zatop = zatop;
		this.ai = ai
		this.x = x;
		this.y = y;
		this.len = len;
		this.traf = traf;
		this.turn = turn;
	}
	rysujStatki() {
		if(this.turn){
			fill(255, 0, 150);
			if(this.traf!=0)
				fill(200,0,115);
			if(this.ai)
				fill(255);
			if(this.zatop)
				fill(0);
			square(this.x, this.y, this.len);
			square(this.x+50, this.y, this.len);
	}
		if(!this.turn){
			fill(255, 0, 150);
			if(this.traf!=0)
				fill(200,0,115);
			if(this.ai)
				fill(255);
			if(this.zatop)
				fill(0);
			square(this.x, this.y, this.len);
			square(this.x, this.y-50, this.len)
		}
	}
}
class Statek3 { //Statek 3-polowy
	constructor(x, y, len, turn, ai=false, traf = 0, zatop = false){
		this.zatop = zatop;
		this.ai = ai
		this.x = x;
		this.y = y;
		this.len = len;
		this.traf = traf;
		this.turn = turn;
	}
	rysujStatki() {
		if(this.turn){
			fill(255, 120, 0);
			if(this.traf!=0)
				fill(200,75,0);
			if(this.ai)
				fill(255);
			if(this.zatop)
				fill(0);
			square(this.x, this.y, this.len);
			square(this.x+50, this.y, this.len);
			square(this.x+100, this.y, this.len);
		}
		if(!this.turn){
			fill(255, 120, 0);
			if(this.traf!=0)
				fill(200,75,0);
			if(this.ai)
				fill(255);
			if(this.zatop)
				fill(0);			
			square(this.x, this.y, this.len);
			square(this.x, this.y-50, this.len);
			square(this.x, this.y-100, this.len);			
		}
	}
}
class Statek4 { //Statek 4-polowy
	constructor(x, y, len, turn, ai=false, traf = 0, zatop = false){
		this.zatop = zatop;
		this.ai = ai
		this.x = x;
		this.y = y;
		this.len = len;
		this.traf = traf;
		this.turn = turn;
	}
	rysujStatki() {
		if(this.turn){
			fill(0, 0, 255);
			if(this.traf!=0)
				fill(0,0,180);
			if(this.ai)
				fill(255);
			if(this.zatop)
				fill(0);			
			square(this.x, this.y, this.len);
			square(this.x+50, this.y, this.len);
			square(this.x+100, this.y, this.len);
			square(this.x+150, this.y, this.len);
		}
		if(!this.turn){
			fill(0, 0, 255);
			if(this.traf!=0)
				fill(0,0,180);
			if(this.ai)
				fill(255);
			if(this.zatop)
				fill(0);				
			square(this.x, this.y, this.len);
			square(this.x, this.y-50, this.len);
			square(this.x, this.y-100, this.len);	
			square(this.x, this.y-150, this.len);		
		}
	}
}

function wyswietlStatki() {
	for(var i = 0; i<statki1.length; i++){ //Rysuj statki
		statki1[i].rysujStatki();
		if(statki1.length == 4)
			wyborStatku = 1;
	}
	for (var i = statki1AI.length - 1; i >= 0; i--) {
		statki1AI[i].rysujStatki();
	}
	for (var i = 0; i < statki2AI.length; i++){
		statki2AI[i].rysujStatki();

	}
	for (var i = 0; i < statki3AI.length; i++){
		statki3AI[i].rysujStatki();
	}

	for (var i = 0; i < statki4AI.length; i++){
		statki4AI[i].rysujStatki();
	}
	for(var i = 0; i<statki2.length; i++){ //Rysuj statki
		statki2[i].rysujStatki();
		if(statki2.length == 3)
			wyborStatku = 2;
	}
	for(var i = 0; i<statki3.length; i++){ //Rysuj statki
		statki3[i].rysujStatki();
		if(statki3.length == 2)
			wyborStatku = 3;
	}
	for(var i = 0; i<statki4.length; i++){ //Rysuj statki
		statki4[i].rysujStatki();
		wyborStatku = 4;
	}
}