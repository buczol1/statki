var tura = true;
var statki1AI = [];
var statki2AI = [];
var statki3AI = [];
var statki4AI = [];
function rozstawStatki(flaga){
	if(flaga == true){ //Tworzenie statkow 1 polowych
	//-------------STATKI 1 POLOWE---------------------- 
		while(statki1AI.length < 4){
			var stworzyc = true;
			var rx = random(0,9);
			var ry = random(0,9);
			var xstatku = 800+(int(rx)*50);
			var ystatku = 250+(int(ry)*50);

			for(var k = 0; k < statki1AI.length; k++){
						for(var l = -50; l <= 50; l+=50){
							for(var a = -50; a <= 50; a+=50){
								if(statki1AI[k].x == xstatku+l && statki1AI[k].y == ystatku+a)
									stworzyc = 0;
							}
						}
					}
			if(stworzyc){
				statek1 = new Statek1(xstatku,ystatku,50,true)
				statki1AI.push(statek1);
			}
		}

	//-------------STATKI 2 POLOWE---------------------- 
			while(statki2AI.length < 3){
			var rturn = round(random(0,1));
			var stworzyc = true;
			var rx = random(0,9);
			var ry = random(0,9);
			var x = 800+(int(rx)*50);
			var y = 250+(int(ry)*50);

					if(!rturn && y-50<250) //jezeli statek wychodzi poza plansze nie tworz go
						stworzyc = 0;
					if(rturn && x+50 >= 1300) //jezeli statek wychodzi poza plansze nie tworz go
						stworzyc = 0;
					for(var k = 0; k < statki2AI.length; k++){ // Wykrywanie statkow dwupolowych
						if(rturn){ //Jeśli kładziesz statek poziomo
							if(statki2AI[k].turn){// Wykrywanie poziomych statków
								for(var l = -100; l <= 100; l+=50){
									for(var a = -50; a <= 50; a+=50){
										if(statki2AI[k].x == x+l && statki2AI[k].y == y+a)
											stworzyc = 0;
									}
								}
							}
							else{ // Wykrywanie pionowych statków
								for(var l = -50; l <= 100; l+=50){
									for(var a = -50; a <= 100; a+=50){
										if(statki2AI[k].x == x+l && statki2AI[k].y == y+a)
											stworzyc = 0;
									}
								}
							}
							}								
						else{ //Jeśli kładziesz statek pionowo
							if(statki2AI[k].turn){ // Wykrywanie poziomych statków
								for(var l = -100; l <= 50; l+=50){
									for(var a = -100; a <= 50; a+=50){
										if(statki2AI[k].x == x+l && statki2AI[k].y == y+a)
											stworzyc = 0;
									}
								}
							}
							else{ //Wykrywanie pionowych statków
								for(var l = -50; l <= 50; l+=50){
									for(var a = -100; a <= 100; a+=50){
										if(statki2AI[k].x == x+l && statki2AI[k].y == y+a)
											stworzyc = 0;
									}
								}
							}
						}
					}
					for(var k = 0; k < statki1AI.length; k++){ // wykrywanie statkow jednopolowych
						if(rturn){ //Jeżeli kładziesz statek poziomo
							for(var l = -50; l <= 100; l+=50){
								for(var a = -50; a <= 50; a+=50){
									if(statki1AI[k].x == x+l && statki1AI[k].y == y+a)
										stworzyc = 0;
								}
							}
						}
						else{ // Jeżeli kładziesz statek pionowo
							for(var l = -50; l <= 50; l+=50){
								for(var a = -100; a <= 50; a+=50){
									if(statki1AI[k].x == x+l && statki1AI[k].y == y+a)
										stworzyc = 0;
								}
							}
						}
					}
			if(stworzyc){
				statek2 = new Statek2(x,y,50, rturn, true);
				statki2AI.push(statek2);
			}
	}

	//-------------STATKI 3 POLOWE---------------------- 
while(statki3AI.length < 2){
	var turn = round(random(0,1));
			var stworzyc = true;
			var rx = random(0,9);
			var ry = random(0,9);
			var x = 800+(int(rx)*50);
			var y = 250+(int(ry)*50);
	if(!turn && y-100<250) //jezeli statek wychodzi poza plansze nie tworz go
						stworzyc = 0;
					if(turn && x+100 >= 1300) //jezeli statek wychodzi poza plansze nie tworz go
						stworzyc = 0;
					for(var k = 0; k < statki1AI.length; k++){ // wykrywanie statkow jednopolowych
						if(turn){ // Jeżeli kładziesz statek poziomo
							for(var l = -50; l <= 150; l+=50){
								for(var a = -50; a <= 50; a+=50){
									if(statki1AI[k].x == x+l && statki1AI[k].y == y+a)
										stworzyc = 0;
								}
							}
						}
						else{
							for(var l = -50; l <= 50; l+=50){
								for(var a = -150; a <= 50; a+=50){
									if(statki1AI[k].x == x+l && statki1AI[k].y == y+a)
										stworzyc = 0;
								}
							}							
						}
					}
					for(var k = 0; k < statki2AI.length; k++){ // Wykrywanie statkow dwupolowych
						if(turn){ //Jeśli kładziesz statek poziomo
							if(statki2AI[k].turn){// Wykrywanie poziomych statków
								for(var l = -100; l <= 150; l+=50){
									for(var a = -50; a <= 50; a+=50){
										if(statki2AI[k].x == x+l && statki2AI[k].y == y+a)
											stworzyc = 0;
									}
								}
							}
							else{ // Wykrywanie pionowych statków
								for(var l = -50; l <= 150; l+=50){
									for(var a = -50; a <= 100; a+=50){
										if(statki2AI[k].x == x+l && statki2AI[k].y == y+a)
											stworzyc = 0;
									}
								}
							}								
						}
						else{ //Jeśli kładziesz statek pionowo
							if(statki2AI[k].turn){ // Wykrywanie poziomych statków
								for(var l = -100; l <= 50; l+=50){
									for(var a = -150; a <= 50; a+=50){
										if(statki2AI[k].x == x+l && statki2AI[k].y == y+a)
											stworzyc = 0;
									}
								}
							}
							else{ //Wykrywanie pionowych statków
								for(var l = -50; l <= 50; l+=50){
									for(var a = -150; a <= 100; a+=50){
										if(statki2AI[k].x == x+l && statki2AI[k].y == y+a)
											stworzyc = 0;
									}
								}
							}
						}
					}
					for(var k = 0; k < statki3AI.length; k++){ // Wykrywanie statkow trójpolowych
						if(turn){ //Jeśli kładziesz statek poziomo
							if(statki3AI[k].turn){// Wykrywanie poziomych statków
								for(var l = -150; l <= 150; l+=50){
									for(var a = -50; a <= 50; a+=50){
										if(statki3AI[k].x == x+l && statki3AI[k].y == y+a)
											stworzyc = 0;
									}
								}
							}
							else{ // Wykrywanie pionowych statków
								for(var l = -50; l <= 150; l+=50){
									for(var a = -50; a <= 150; a+=50){
										if(statki3AI[k].x == x+l && statki3AI[k].y == y+a)
											stworzyc = 0;
									}
								}
							}								
						}
						else{ //Jeśli kładziesz statek pionowo
							if(statki3AI[k].turn){ // Wykrywanie poziomych statków
								for(var l = -150; l <= 50; l+=50){
									for(var a = -150; a <= 50; a+=50){
										if(statki3AI[k].x == x+l && statki3AI[k].y == y+a)
											stworzyc = 0;
									}
								}
							}
							else{ //Wykrywanie pionowych statków
								for(var l = -50; l <= 50; l+=50){
									for(var a = -150; a <= 150; a+=50){
										if(statki3AI[k].x == x+l && statki3AI[k].y == y+a)
											stworzyc = 0;
									}
								}
							}
						}
					}
					if(stworzyc){
						statek3 = new Statek3(x,y, 50, turn, true);
						statki3AI.push(statek3);
					}
				}

	//-------------STATKI 4 POLOWE---------------------- 
	while(statki4AI.length < 1){
			var turn = round(random(0,1));
			var stworzyc = true;
			var rx = random(0,9);
			var ry = random(0,9);
			var x = 800+(int(rx)*50);
			var y = 250+(int(ry)*50);

		if(!turn && y-150<250) //jezeli statek wychodzi poza plansze nie tworz go
			stworzyc = 0;
		if(turn && x+150 >= 1300) //jezeli statek wychodzi poza plansze nie tworz go
			stworzyc = 0;
		for(var k = 0; k < statki1AI.length; k++){ // wykrywanie statkow jednopolowych
			if(turn){ // Jeżeli kładziesz statek poziomo
				for(var l = -50; l <= 200; l+=50){
					for(var a = -50; a <= 50; a+=50){
						if(statki1AI[k].x == x+l && statki1AI[k].y == y+a)
							stworzyc = 0;
					}
				}
			}
			else{
				for(var l = -50; l <= 50; l+=50){
					for(var a = -200; a <= 50; a+=50){
						if(statki1AI[k].x == x+l && statki1AI[k].y == y+a)
							stworzyc = 0;
					}
				}							
			}
		}
		for(var k = 0; k < statki2AI.length; k++){ // Wykrywanie statkow dwupolowych
			if(turn){ //Jeśli kładziesz statek poziomo
				if(statki2AI[k].turn){// Wykrywanie poziomych statków
					for(var l = -100; l <= 200; l+=50){
						for(var a = -50; a <= 50; a+=50){
							if(statki2AI[k].x == x+l && statki2AI[k].y == y+a)
								stworzyc = 0;
						}
					}
				}
				else{ // Wykrywanie pionowych statków
					for(var l = -50; l <= 200; l+=50){
						for(var a = -50; a <= 100; a+=50){
							if(statki2AI[k].x == x+l && statki2AI[k].y == y+a)
								stworzyc = 0;
						}
					}
				}								
			}
			else{ //Jeśli kładziesz statek pionowo
				if(statki2AI[k].turn){ // Wykrywanie poziomych statków
					for(var l = -100; l <= 50; l+=50){
						for(var a = -200; a <= 50; a+=50){
							if(statki2AI[k].x == x+l && statki2AI[k].y == y+a)
								stworzyc = 0;
						}
					}
				}
				else{ //Wykrywanie pionowych statków
					for(var l = -50; l <= 50; l+=50){
						for(var a = -200; a <= 100; a+=50){
							if(statki2AI[k].x == x+l && statki2AI[k].y == y+a)
								stworzyc = 0;
						}
					}
				}
			}
		}
		for(var k = 0; k < statki3AI.length; k++){ // Wykrywanie statkow trójpolowych
			if(turn){ //Jeśli kładziesz statek poziomo
				if(statki3AI[k].turn){// Wykrywanie poziomych statków
					for(var l = -150; l <= 200; l+=50){
						for(var a = -50; a <= 50; a+=50){
							if(statki3AI[k].x == x+l && statki3AI[k].y == y+a)
								stworzyc = 0;
						}
					}
				}
				else{ // Wykrywanie pionowych statków
					for(var l = -50; l <= 200; l+=50){
						for(var a = -50; a <= 200; a+=50){
							if(statki3AI[k].x == x+l && statki3AI[k].y == y+a)
								stworzyc = 0;
						}
					}
				}								
			}
			else{ //Jeśli kładziesz statek pionowo
				if(statki3AI[k].turn){ // Wykrywanie poziomych statków
					for(var l = -200; l <= 50; l+=50){
						for(var a = -200; a <= 50; a+=50){
							if(statki3AI[k].x == x+l && statki3AI[k].y == y+a)
								stworzyc = 0;
						}
					}
				}
				else{ //Wykrywanie pionowych statków
					for(var l = -50; l <= 50; l+=50){
						for(var a = -200; a <= 200; a+=50){
							if(statki3AI[k].x == x+l && statki3AI[k].y == y+a)
								stworzyc = 0;
						}
					}
				}
			}
		}
		if(stworzyc){
			statek4 = new Statek4(x,y, 50, turn, true);
			statki4AI.push(statek4);
		}
	}
}
}


var strzalyAI = [];

function strzaly(){
	if(!tura){
		tura = !tura;
		var rx = int(random(0,9));
		var ry = int(random(0,9));
		var x = 150+rx*50;
		var y = 300+ry*50;

		var zmienna;
		if(strzalyAI.length == 0)
			zmienna = 0;
		else
			zmienna = 1;
		while(zmienna){
			var zmienna2 = 0;
			for(var k = 0; k < strzalyAI.length; k++){		
				if(strzalyAI[k].x == x && strzalyAI[k].y == y){
					console.log("ten sam strzal");
					rx = int(random(0,9));
					ry = int(random(0,9));
					x = 100+rx*50;
					y = 250+ry*50;
					zmienna2 = 1;
				}
			}
			if(!zmienna2)
				break;
		}
		strzalAI = new Pocisk(x,y);
		strzalyAI.push(strzalAI);
		strzalAI.rysujPocisk();

		//Wykrywanie kolizji z 1
		for(var i = 0; i < statki1.length; i++){
			if(strzalAI.x == statki1[i].x && strzalAI.y == statki1[i].y){
				console.log("traf");
				statki1[i].zatop = true;
				tura = !tura;
			}
		}
		//Wykrywanie kolizji z 2
		zmienna3 = false;
		for(var i = 0; i < statki2.length; i++){
			while(true){
			if((strzalAI.x == statki2[i].x && strzalAI.y == statki2[i].y) || (strzalAI.x == statki2[i].x+50 && strzalAI.y == statki2[i].y && statki2[i].turn == 1) || (strzalAI.x == statki2[i].x && strzalAI.y == statki2[i].y-50 && statki2[i].turn == 0)){
			 // Jeśli trafi w któryś z kwadratów 
			 	statki2[i].traf++;
			 	if(statki2[i].traf==2){
			 		statki2[i].zatop = true;
			 	}

				console.log("trafilem");
				rx = int(random(0,3)); // Losuje od 0 do 3 
				if(rx == 0){ // Jeśli 0 to wali pocisk w lewo
					if(strzalAI.x - 50 >= 150) // Jeśli wyjdzie poza plansze zrób po drugiej stronie
					x = strzalAI.x - 50;
					else
						x = strzalAI.x + 50;
				}
				else if(rx == 1){ // Jeśli 1 to wali pocisk w prawo
					if(strzalAI.x + 50 <= 600) // Jeśli wyjdzie poza plansze zrób po drugiej stronie
					x = strzalAI.x + 50;
					else
						x = strzalAI.x - 50;
				}	
				else if(rx == 2){ // Jeśli 2 to wali pocisk w dół
					if(strzalAI.y + 50 <= 700) // Jeśli wyjdzie poza plansze zrób po drugiej stronie
					y = strzalAI.y + 50;
					else
						y = strzalAI.y - 50
				}
				else if(rx == 3){ // Jeśli 3 to wali pocisk w górę
					if(strzalAI.y -50 >= 250) // Jeśli wyjdzie poza plansze zrób po drugiej stronie
					y = strzalAI.y -50;
					else
						y = strzalAI.y + 50			
				}
				strzalAI = new Pocisk(x,y); // Tworzymy ten pocisk
					strzalyAI.push(strzalAI); // Przydaloby sie zrobic wykrywanie czy pocisk juz nie lezy na kwadracie
					strzalAI.rysujPocisk();
				
			}
			else
				break;
		}
					
			}

				//Wykrywanie kolizji z 3

		for(var i = 0; i < statki3.length; i++){
			while(true){
			if((strzalAI.x == statki3[i].x && strzalAI.y == statki3[i].y) || (strzalAI.x == statki3[i].x+50 && strzalAI.y == statki3[i].y && statki3[i].turn == 1) || (strzalAI.x == statki3[i].x+100 && strzalAI.y == statki3[i].y && statki3[i].turn == 1) ||
				(strzalAI.x == statki3[i].x && strzalAI.y == statki3[i].y-50 && statki3[i].turn == 0) || (strzalAI.x == statki3[i].x && strzalAI.y == statki3[i].y-100 && statki3[i].turn == 0)){
			 // Jeśli trafi w któryś z kwadratów 
				statki3[i].traf++;
				if(statki3[i].traf==3)
					statki3[i].zatop = true;
				console.log("trafilem");
				rx = int(random(0,3)); // Losuje od 0 do 3 
				if(rx == 0){ // Jeśli 0 to wali pocisk w lewo
					if(strzalAI.x - 50 >= 150) // Jeśli wyjdzie poza plansze zrób po drugiej stronie
					x = strzalAI.x - 50;
					else
						x = strzalAI.x + 50;
				}
				else if(rx == 1){ // Jeśli 1 to wali pocisk w prawo
					if(strzalAI.x + 50 <= 600) // Jeśli wyjdzie poza plansze zrób po drugiej stronie
					x = strzalAI.x + 50;
					else
						x = strzalAI.x - 50;
				}	
				else if(rx == 2){ // Jeśli 2 to wali pocisk w dół
					if(strzalAI.y + 50 <= 700) // Jeśli wyjdzie poza plansze zrób po drugiej stronie
					y = strzalAI.y + 50;
					else
						y = strzalAI.y - 50
				}
				else if(rx == 3){ // Jeśli 3 to wali pocisk w górę
					if(strzalAI.y -50 >= 250) // Jeśli wyjdzie poza plansze zrób po drugiej stronie
					y = strzalAI.y -50;
					else
						y = strzalAI.y + 50			
				}
				var tworzPocisk = true;
				for(var v = 0; v < strzalyAI.length; v++){
					if(strzalAI.x == strzalyAI[v].x && strzalAI.y == strzalyAI[v]){
						tworzPocisk = false;
					}
				}
				if(!tworzPocisk)
					continue;
				if(tworzPocisk){
					strzalAI = new Pocisk(x,y); // Dodajemy ten pocisk
						strzalyAI.push(strzalAI); // Przydaloby sie zrobic wykrywanie czy pocisk juz nie lezy na kwadracie
						strzalAI.rysujPocisk();					
				}

			}
			else
				break;
					
			}
		}

		//Wykrywanie kolizji z 4

		for(var i = 0; i < statki4.length; i++){
			while(true){
			if((strzalAI.x == statki4[i].x && strzalAI.y == statki4[i].y) || (strzalAI.x == statki4[i].x+50 && strzalAI.y == statki4[i].y && statki4[i].turn == 1) || (strzalAI.x == statki4[i].x+100 && strzalAI.y == statki4[i].y && statki4[i].turn == 1) ||
			  (strzalAI.x == statki4[i].x+150 && strzalAI.y == statki4[i].y && statki4[i].turn == 1) ||(strzalAI.x == statki4[i].x && strzalAI.y == statki4[i].y-50 && statki4[i].turn == 0) || (strzalAI.x == statki4[i].x && strzalAI.y == statki4[i].y-100 && statki4[i].turn == 0) ||
			  (strzalAI.x == statki4[i].x && strzalAI.y == statki4[i].y-150 && statki4[i].turn == 0)){
			 // Jeśli trafi w któryś z kwadratów 
				statki4[i].traf++;
				if(statki4[i].traf == 4)
					statki4[i].zatop = true;
				console.log("trafilem");
				rx = int(random(0,3)); // Losuje od 0 do 3 
				if(rx == 0){ // Jeśli 0 to wali pocisk w lewo
					if(strzalAI.x - 50 >= 150)
					x = strzalAI.x - 50;
					else
						x = strzalAI.x + 50;
				}
				else if(rx == 1){ // Jeśli 1 to wali pocisk w prawo
					if(strzalAI.x + 50 <= 600)
					x = strzalAI.x + 50;
					else
						x = strzalAI.x - 50;
				}	
				else if(rx == 2){ // Jeśli 2 to wali pocisk w dół
					if(strzalAI.y + 50 <= 700)
					y = strzalAI.y + 50;
					else
						y = strzalAI.y - 50
				}
				else if(rx == 3){ // Jeśli 3 to wali pocisk w górę
					if(strzalAI.y -50 >= 250)
					y = strzalAI.y -50;
					else
						y = strzalAI.y + 50			
				}
				strzalAI = new Pocisk(x,y); // Dodajemy ten pocisk
					strzalyAI.push(strzalAI); // Przydaloby sie zrobic wykrywanie czy pocisk juz nie lezy na kwadracie
					strzalAI.rysujPocisk();
			}
			else
				break;
					
			}
		}
	}
}


