var wygryw = "";
function sprawdzKoniec() {
	if(gra){
		var koniec = true;
		//Sprawdzanie czy ai ma jeszcze statki
		for (var i = 0; i < statki1AI.length; i++) {
				if(!statki1AI[i].zatop){
					if(!koniec)
						break;
					koniec = !koniec;
				}
			}
		for (var i = 0; i < statki2AI.length; i++) {
				if(!statki2AI[i].zatop){
					if(!koniec)
						break;
					koniec = !koniec;
				}
			}
		for (var i = 0; i < statki3AI.length; i++) {
				if(!statki3AI[i].zatop){
					if(!koniec)
						break;
					koniec = !koniec;
				}
			}
		for (var i = 0; i < statki4AI.length; i++) {
				if(!statki4AI[i].zatop){
					if(!koniec)
						break;
					koniec = !koniec;
				}
			}
		if(koniec){
			wygryw = "Gracz";
			return koniec;
		}
		koniec = true;
		for (var i = 0; i < statki1.length; i++) {
				if(!statki1[i].zatop){
					if(!koniec)
						break;
					koniec = !koniec;
				}
			}
		for (var i = 0; i < statki2.length; i++) {
				if(!statki2[i].zatop){
					if(!koniec)
						break;
					koniec = !koniec;
				}
			}
		for (var i = 0; i < statki3.length; i++) {
				if(!statki3[i].zatop){
					if(!koniec)
						break;
					koniec = !koniec;
				}
			}
		for (var i = 0; i < statki4.length; i++) {
				if(!statki4[i].zatop){
					if(!koniec)
						break;
					koniec = !koniec;
				}
			}
		if(koniec){
			wygryw = "AI";
			return koniec;
		}
	}

}

function end() {
	if(sprawdzKoniec()){
		background(54);
		textSize(100);
		fill(255);
		text("KONIEC",500, 375);
		text("Wygral " + wygryw,500,450);
	}
}