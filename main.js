

function setup() {//Tworzenie "Płótna" i siatek
	frameRate(30);
	textAlign(CENTER);
	createCanvas(1300, 750);
		for (var i = 0; i <= 10; i++) {
		line(100 + i*50, 250, 100 + i*50, 750);
	}
		for (var i = 0; i <= 10; i++) {
		line(100, 250 + i*50,600 , 250 + i*50);
	}
	for (var i = 0; i <= 10; i++) {
		line(800 + i*50, 250, 800 + i*50, 750);
	}
	for (var i = 0; i <= 10; i++) {
		line(800, 250 + i*50,1300 , 250 + i*50);
	}


	rozstawStatki(true);
}




function draw() {
	czyscPola(); // gracz.js
	podswietlanie(); // gracz.js
	utworzPrzyciski(); // przyciski.js
	rysPrzyciski(); //Zobacz przyciski.js


	//GRA
 	strzaly(); //ai.js
	czyscPolaGra(); // gracz.js
	wyswietlStatki(); // Statki.js
	podswietlanieCelu(); // gracz.js
	wyswietlPociski(); // pociski.js
	end();
}