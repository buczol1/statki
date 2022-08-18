function utworzPrzyciski() {
	fill(100);
	rect(100,13,1200,213); // Obszar menu
}
function rysPrzyciski() {
	fill(255);
	textSize(60);
	if(wyborStatku == 0){
		text("Ukladasz statki jednopolowe",500,100);
	}
	if(wyborStatku == 1){
		text("Ukladasz statki dwupolowe",500,100);
	}
	if(wyborStatku == 2){
		text("Ukladasz statki trojpolowe",500,100);
	}
	if(wyborStatku == 3){
		text("Ukladasz statki czteropolowe",500,100);
	}
	if(gra){
		text("strzelasz",500,100);
	}
}