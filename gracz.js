var turn = true;
var gra = false;
var pociskiGracz = [];
var wyborStatku = 0;
function keyTyped() {
	if(key === 'a'){
		turn = !turn;
	}
// ROZSTAWIANIE STATKÓW
}
function czyscPola() {
	for(var i = 100; i < 600; i+=50){
		for(var j = 250; j < 750; j+=50){
			fill(255);
			square(i,j,50);
		}
	}
}

function podswietlanie() {
	var podX = floor(mouseX/50)*50 
	var podY = floor(mouseY/50)*50
	if(mouseX>=100 && mouseX < 600 && mouseY > 250 && mouseY <= 750){
		if(wyborStatku == 0){
			fill(255,0,0,150);
			square(podX,podY,50);
		}
		if(wyborStatku == 1 && turn){
			fill(255,0,150,150);
			square(podX,podY,50);
			if(podX<550)
			square(podX+50,podY,50);	
		}
		if(wyborStatku == 1 && !turn){
			fill(255,0,150,150);
			square(podX,podY,50);
			if(podY>=300)
			square(podX,podY-50,50);
		}	
		if(wyborStatku == 2 && turn){
			fill(255,120,0,150);
			square(podX,podY,50);
			if(podX<550)
				square(podX+50,podY,50);
			if(podX<500)
				square(podX+100,podY,50);
		}
		if(wyborStatku == 2 && !turn){
			fill(255,120,0,150);
			square(podX,podY,50);
			if(podY>=300)
				square(podX,podY-50,50);
			if(podY>=350)
				square(podX,podY-100,50);
		}
		if(wyborStatku == 3 && turn){
			fill(0,0,255,150);
			square(podX,podY,50);
			if(podX<550)
				square(podX+50,podY,50);
			if(podX<500)
				square(podX+100,podY,50);
			if(podX<450)
				square(podX+150,podY,50);
		}
		if(wyborStatku == 3 && !turn){
			fill(0,0,255,150);
			square(podX,podY,50);
			if(podY>=300)
				square(podX,podY-50,50);
			if(podY>=350)
				square(podX,podY-100,50);
			if(podY>=400)
				square(podX,podY-150,50);
		}
	}
}

function mousePressed(){ 

	//Tworzenie statków
	if(wyborStatku == 0){ // Tworzenie statku jednopolowego
		var createFlag = 1; //Flaga czy statek ma zostać stworzony (domyślnie true)
		for(var i = 100; i < 600; i+=50){
			for(var j = 250; j < 750; j+=50){
				if(mouseX > i && mouseX < i+50 && mouseY > j && mouseY < j+50){ //Wykrywanie pola w którym znajduje się mysz.
					for(var k = 0; k < statki1.length; k++){
						for(var l = -50; l <= 50; l+=50){
							for(var a = -50; a <= 50; a+=50){
								if(statki1[k].x == i+l && statki1[k].y == j+a)
									createFlag = 0;
							}
						}
					}
					if(createFlag){
						statek1 = new Statek1(i, j, 50);
						statki1.push(statek1);
					}
				}
			}
		}
	}
	if(wyborStatku == 1){ // Tworzenie statków dwupolowych
		var createFlag = 1;  //Flaga czy statek ma zostać stworzony (domyślnie true)
		for(var i = 100; i < 600; i+=50){
			if(statki2.length == 3){
				break;
			}
			for(var j = 250; j < 750; j+=50){
				if(mouseX > i && mouseX < i+50 && mouseY > j && mouseY < j+50){ //Wykrywanie pola w którym znajduje się mysz.
					if(!turn && j-50<250) //jezeli statek wychodzi poza plansze nie tworz go
						createFlag = 0;
					if(turn && i+50 >= 600) //jezeli statek wychodzi poza plansze nie tworz go
						createFlag = 0;
					for(var k = 0; k < statki2.length; k++){ // Wykrywanie statkow dwupolowych
						if(turn){ //Jeśli kładziesz statek poziomo
							if(statki2[k].turn){// Wykrywanie poziomych statków
								for(var l = -100; l <= 100; l+=50){
									for(var a = -50; a <= 50; a+=50){
										if(statki2[k].x == i+l && statki2[k].y == j+a)
											createFlag = 0;
									}
								}
							}
							else{ // Wykrywanie pionowych statków
								for(var l = -50; l <= 100; l+=50){
									for(var a = -50; a <= 100; a+=50){
										if(statki2[k].x == i+l && statki2[k].y == j+a)
											createFlag = 0;
									}
								}
							}								
						}
						else{ //Jeśli kładziesz statek pionowo
							if(statki2[k].turn){ // Wykrywanie poziomych statków
								for(var l = -100; l <= 50; l+=50){
									for(var a = -100; a <= 50; a+=50){
										if(statki2[k].x == i+l && statki2[k].y == j+a)
											createFlag = 0;
									}
								}
							}
							else{ //Wykrywanie pionowych statków
								for(var l = -50; l <= 50; l+=50){
									for(var a = -100; a <= 100; a+=50){
										if(statki2[k].x == i+l && statki2[k].y == j+a)
											createFlag = 0;
									}
								}
							}
						}
					}
					for(var k = 0; k < statki1.length; k++){ // wykrywanie statkow jednopolowych
						if(turn){ //Jeżeli kładziesz statek poziomo
							for(var l = -50; l <= 100; l+=50){
								for(var a = -50; a <= 50; a+=50){
									if(statki1[k].x == i+l && statki1[k].y == j+a)
										createFlag = 0;
								}
							}
						}
						else{ // Jeżeli kładziesz statek pionowo
							for(var l = -50; l <= 50; l+=50){
								for(var a = -100; a <= 50; a+=50){
									if(statki1[k].x == i+l && statki1[k].y == j+a)
										createFlag = 0;
								}
							}
						}
					}					
					if(createFlag){
						statek2 = new Statek2(i, j, 50, turn);
						statki2.push(statek2);
					}
				}
			}
		}		
	}
	if(wyborStatku == 2){// tworzenie statkow 3 polowych
		var createFlag = 1;  //Flaga czy statek ma zostać stworzony (domyślnie true)
		for(var i = 100; i < 600; i+=50){
			if(statki3.length == 2){
				break;
			}
			for(var j = 250; j < 750; j+=50){
				if(mouseX > i && mouseX < i+50 && mouseY > j && mouseY < j+50){ //Wykrywanie pola w którym znajduje się mysz.
					if(!turn && j-100<250) //jezeli statek wychodzi poza plansze nie tworz go
						createFlag = 0;
					if(turn && i+100 >= 600) //jezeli statek wychodzi poza plansze nie tworz go
						createFlag = 0;
					for(var k = 0; k < statki1.length; k++){ // wykrywanie statkow jednopolowych
						if(turn){ // Jeżeli kładziesz statek poziomo
							for(var l = -50; l <= 150; l+=50){
								for(var a = -50; a <= 50; a+=50){
									if(statki1[k].x == i+l && statki1[k].y == j+a)
										createFlag = 0;
								}
							}
						}
						else{
							for(var l = -50; l <= 50; l+=50){
								for(var a = -150; a <= 50; a+=50){
									if(statki1[k].x == i+l && statki1[k].y == j+a)
										createFlag = 0;
								}
							}							
						}
					}
					for(var k = 0; k < statki2.length; k++){ // Wykrywanie statkow dwupolowych
						if(turn){ //Jeśli kładziesz statek poziomo
							if(statki2[k].turn){// Wykrywanie poziomych statków
								for(var l = -100; l <= 150; l+=50){
									for(var a = -50; a <= 50; a+=50){
										if(statki2[k].x == i+l && statki2[k].y == j+a)
											createFlag = 0;
									}
								}
							}
							else{ // Wykrywanie pionowych statków
								for(var l = -50; l <= 150; l+=50){
									for(var a = -50; a <= 100; a+=50){
										if(statki2[k].x == i+l && statki2[k].y == j+a)
											createFlag = 0;
									}
								}
							}								
						}
						else{ //Jeśli kładziesz statek pionowo
							if(statki2[k].turn){ // Wykrywanie poziomych statków
								for(var l = -100; l <= 50; l+=50){
									for(var a = -150; a <= 50; a+=50){
										if(statki2[k].x == i+l && statki2[k].y == j+a)
											createFlag = 0;
									}
								}
							}
							else{ //Wykrywanie pionowych statków
								for(var l = -50; l <= 50; l+=50){
									for(var a = -150; a <= 100; a+=50){
										if(statki2[k].x == i+l && statki2[k].y == j+a)
											createFlag = 0;
									}
								}
							}
						}
					}
					for(var k = 0; k < statki3.length; k++){ // Wykrywanie statkow trójpolowych
						if(turn){ //Jeśli kładziesz statek poziomo
							if(statki3[k].turn){// Wykrywanie poziomych statków
								for(var l = -150; l <= 150; l+=50){
									for(var a = -50; a <= 50; a+=50){
										if(statki3[k].x == i+l && statki3[k].y == j+a)
											createFlag = 0;
									}
								}
							}
							else{ // Wykrywanie pionowych statków
								for(var l = -50; l <= 150; l+=50){
									for(var a = -50; a <= 150; a+=50){
										if(statki3[k].x == i+l && statki3[k].y == j+a)
											createFlag = 0;
									}
								}
							}								
						}
						else{ //Jeśli kładziesz statek pionowo
							if(statki3[k].turn){ // Wykrywanie poziomych statków
								for(var l = -150; l <= 50; l+=50){
									for(var a = -150; a <= 50; a+=50){
										if(statki3[k].x == i+l && statki3[k].y == j+a)
											createFlag = 0;
									}
								}
							}
							else{ //Wykrywanie pionowych statków
								for(var l = -50; l <= 50; l+=50){
									for(var a = -150; a <= 150; a+=50){
										if(statki3[k].x == i+l && statki3[k].y == j+a)
											createFlag = 0;
									}
								}
							}
						}
					}
					if(createFlag){
						statek3 = new Statek3(i,j, 50, turn);
						statki3.push(statek3);
					}
				}
			}
		}
	}
	if(wyborStatku == 3){// tworzenie statkow 4 polowych
		var createFlag = 1;  //Flaga czy statek ma zostać stworzony (domyślnie true)
		for(var i = 100; i < 600; i+=50){
			if(statki4.length == 1){
				break;
			}
			for(var j = 250; j < 750; j+=50){
				if(mouseX > i && mouseX < i+50 && mouseY > j && mouseY < j+50){ //Wykrywanie pola w którym znajduje się mysz.
					if(!turn && j-150<250) //jezeli statek wychodzi poza plansze nie tworz go
						createFlag = 0;
					if(turn && i+150 >= 600) //jezeli statek wychodzi poza plansze nie tworz go
						createFlag = 0;
					for(var k = 0; k < statki1.length; k++){ // wykrywanie statkow jednopolowych
						if(turn){ // Jeżeli kładziesz statek poziomo
							for(var l = -50; l <= 200; l+=50){
								for(var a = -50; a <= 50; a+=50){
									if(statki1[k].x == i+l && statki1[k].y == j+a)
										createFlag = 0;
								}
							}
						}
						else{
							for(var l = -50; l <= 50; l+=50){
								for(var a = -200; a <= 50; a+=50){
									if(statki1[k].x == i+l && statki1[k].y == j+a)
										createFlag = 0;
								}
							}							
						}
					}
					for(var k = 0; k < statki2.length; k++){ // Wykrywanie statkow dwupolowych
						if(turn){ //Jeśli kładziesz statek poziomo
							if(statki2[k].turn){// Wykrywanie poziomych statków
								for(var l = -100; l <= 200; l+=50){
									for(var a = -50; a <= 50; a+=50){
										if(statki2[k].x == i+l && statki2[k].y == j+a)
											createFlag = 0;
									}
								}
							}
							else{ // Wykrywanie pionowych statków
								for(var l = -50; l <= 200; l+=50){
									for(var a = -50; a <= 100; a+=50){
										if(statki2[k].x == i+l && statki2[k].y == j+a)
											createFlag = 0;
									}
								}
							}								
						}
						else{ //Jeśli kładziesz statek pionowo
							if(statki2[k].turn){ // Wykrywanie poziomych statków
								for(var l = -100; l <= 50; l+=50){
									for(var a = -200; a <= 50; a+=50){
										if(statki2[k].x == i+l && statki2[k].y == j+a)
											createFlag = 0;
									}
								}
							}
							else{ //Wykrywanie pionowych statków
								for(var l = -50; l <= 50; l+=50){
									for(var a = -200; a <= 100; a+=50){
										if(statki2[k].x == i+l && statki2[k].y == j+a)
											createFlag = 0;
									}
								}
							}
						}
					}
					for(var k = 0; k < statki3.length; k++){ // Wykrywanie statkow trójpolowych
						if(turn){ //Jeśli kładziesz statek poziomo
							if(statki3[k].turn){// Wykrywanie poziomych statków
								for(var l = -150; l <= 200; l+=50){
									for(var a = -50; a <= 50; a+=50){
										if(statki3[k].x == i+l && statki3[k].y == j+a)
											createFlag = 0;
									}
								}
							}
							else{ // Wykrywanie pionowych statków
								for(var l = -50; l <= 200; l+=50){
									for(var a = -50; a <= 200; a+=50){
										if(statki3[k].x == i+l && statki3[k].y == j+a)
											createFlag = 0;
									}
								}
							}								
						}
						else{ //Jeśli kładziesz statek pionowo
							if(statki3[k].turn){ // Wykrywanie poziomych statków
								for(var l = -200; l <= 50; l+=50){
									for(var a = -200; a <= 50; a+=50){
										if(statki3[k].x == i+l && statki3[k].y == j+a)
											createFlag = 0;
									}
								}
							}
							else{ //Wykrywanie pionowych statków
								for(var l = -50; l <= 50; l+=50){
									for(var a = -200; a <= 200; a+=50){
										if(statki3[k].x == i+l && statki3[k].y == j+a)
											createFlag = 0;
									}
								}
							}
						}
					}
					if(createFlag){
						statek4 = new Statek4(i,j, 50, turn);
						statki4.push(statek4);
						gra = !gra;
					}
				}
			}
		}
	}
	//Strzały
	var sprawTraf = false;
	if(gra && tura){
		var podX = floor(mouseX/50)*50; 
		var podY = floor(mouseY/50)*50;
		var stworzPocisk = true;
		if(mouseX>=800 && mouseX < 1300 && mouseY > 250 && mouseY <= 750){
			for(var i = 0; i < pociskiGracz.length; i++){
				if(podX == pociskiGracz[i].x && podY == pociskiGracz[i].y)
					stworzPocisk = !stworzPocisk;
			}
			if(stworzPocisk){
				for(var i = 0; i < statki1AI.length; i++){ // Sprawdzanie czy pocisk trafił w statek 1
					if(statki1AI[i].x == podX && statki1AI[i].y == podY){
						statki1AI[i].zatop = true;
						sprawTraf = true;
						tura = !tura;
					}
				}
				for(var i = 0; i < statki2AI.length; i++){ // Sprawdzanie czy pocisk trafił w statek 2
					if(statki2AI[i].turn){ // Poziomy
						if((statki2AI[i].x == podX && statki2AI[i].y == podY) || (statki2AI[i].x+50 == podX && statki2AI[i].y == podY)){
							tura = !tura;
							sprawTraf = true;
							if(statki2AI[i].traf == 0)
								statki2AI[i].traf += 1;
							else{
								statki2AI[i].zatop = true;
							}
						}
					}
					else{ // pionowy
						if((statki2AI[i].x == podX && statki2AI[i].y == podY) || (statki2AI[i].x == podX && statki2AI[i].y == podY+50)){
							tura = !tura;
							sprawTraf = true;
							if(statki2AI[i].traf == 0)
								statki2AI[i].traf += 1;
							else{
								statki2AI[i].zatop = true;
							}
						}						
					}
				}
				for(var i = 0; i < statki3AI.length; i++){ // Sprawdzanie czy pocisk trafił w statek 3
					if(statki3AI[i].turn){ // Poziomy
						if((statki3AI[i].x == podX && statki3AI[i].y == podY) || (statki3AI[i].x+50 == podX && statki3AI[i].y == podY) || (statki3AI[i].x+100 == podX && statki3AI[i].y == podY)){
							tura = !tura;
							sprawTraf = true;
							if(statki3AI[i].traf <2)
								statki3AI[i].traf += 1;
							else{
								statki3AI[i].zatop = true;
							}
						}
					}
					else{ // pionowy
						if((statki3AI[i].x == podX && statki3AI[i].y == podY) || (statki3AI[i].x == podX && statki3AI[i].y == podY+50) || (statki3AI[i].x == podX && statki3AI[i].y == podY+100)){
							tura = !tura;
							sprawTraf = true;
							if(statki3AI[i].traf <2)
								statki3AI[i].traf += 1;
							else{
								statki3AI[i].zatop = true;
							}
						}						
					}
				}
				for(var i = 0; i < statki4AI.length; i++){ // Sprawdzanie czy pocisk trafił w statek 4
					if(statki4AI[i].turn){ // Poziomy
						if((statki4AI[i].x == podX && statki4AI[i].y == podY) || (statki4AI[i].x+50 == podX && statki4AI[i].y == podY) || (statki4AI[i].x+100 == podX && statki4AI[i].y == podY) || (statki4AI[i].x+150 == podX && statki4AI[i].y == podY)){
							tura = !tura;
							sprawTraf = true;
							if(statki4AI[i].traf <3)
								statki4AI[i].traf += 1;
							else{
								statki4AI[i].zatop = true;
							}
						}
					}
					else{ // Pionowy
						if((statki4AI[i].x == podX && statki4AI[i].y == podY) || (statki4AI[i].x == podX && statki4AI[i].y == podY+50) || (statki4AI[i].x == podX && statki4AI[i].y == podY+100) || (statki4AI[i].x == podX && statki4AI[i].y == podY+150)){
							tura = !tura;
							sprawTraf = true;
							if(statki4AI[i].traf <3)
								statki4AI[i].traf += 1;
							else{
								statki4AI[i].zatop = true;
							}
						}
					}				
				}
				strzalGracz = new Pocisk(podX, podY, sprawTraf);
				pociskiGracz.push(strzalGracz);
				tura = !tura;
			}
		}
	}
}


function czyscPolaGra() {
	for(var i = 800; i < 1300; i+=50){
		for(var j = 250; j < 750; j+=50){
			fill(255);
			square(i,j,50);
		}
	}
}

//PODŚWIETLANIE CELU

function podswietlanieCelu() {
	if(tura){
		var podX = floor(mouseX/50)*50;
		var podY = floor(mouseY/50)*50;
		if(mouseX>=800 && mouseX < 1300 && mouseY > 250 && mouseY <= 750){
			fill(255,0,255,100);
			square(podX+12,podY+12,25);
		}
	}
}
