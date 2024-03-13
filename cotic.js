var st = "";
var ugl = 0;
var ins = 0;
var time_dins = 0;
var dostugl = 0;
var time_ins = 0;
var time_minins = 0;
var actugl = 0;
var actins = 0;
var predfin = 4.6;
var predugl = [0, 0];
var dostins = 0;
var aktins = 0;
var predins = 0;
var predactugl = [0, 0];
var predactins = [0, 0]
var predins = [0, 0];
var didurnug = false;
var didurnin = false;
var didurnactug = false;
var jumpel = false;
var didurnactin = false;
var bebra = false;
var lola = false;
var kaka = false;
var sahar = [];
var fin = 4.4;
var sum = 0;
var res = 0;
var lastElement;

setTimeout(obroboca, 3)
setInterval(obroboca, 2000);
function dostug() {
	if (didurnug == false) {
		dostugl = ugl;
		
		predugl[0] = predugl[1];
		predugl[1] = dostugl;
		bebra = true;
		
		
		ugl = 0;
		didurnug = true;
	}
	else{
		dostugl += ugl;
		if (predugl[1] > 0) {
			dostugl -= 5;
		}
		predugl[0] = predugl[1];
		predugl[1] = dostugl;
		ugl = 0;
	}
	
}
function dostin() {
	if (didurnin == false) {
		dostins = ins;
		predins[0] = predins[1];
		predins[1] = dostins;
		ins = 0;
		didurnin = true;
	}
	else{
		dostins += ins;
		if (predins[1] > 0) {
			time_dins += 1;
				if (time_dins == 3){
				dostins -= 1;
				time_dins = 0;
			}
			
		}
		predins[0] = predins[1];
		predins[1] = dostins;
		ins = 0;
	}
	
}
function actug() {
	if (didurnactug == false) {
		predactugl[1] = actugl;
		didurnactug = true;
	}
	else if (jumpel == false) {
		if (predugl[0] > 0 ) {
			actugl += 5;
			jumpel = true;
		}
		else {
			actugl = 0;
		}
		predactugl[0] = predactugl[1];
		predactugl[1] = actugl;

	}
	else {
		if (predactugl[1] > 0) {
			if (dostugl == predugl[0] - 5) {
				actugl = predactugl[1] + 5 - 1;
			}
			else if (predugl[0] == dostugl && predugl[0] != 0) {
				actugl += 4;
			}
			else if (predugl[0] > 0) {
				actugl = 5 + predactugl[1] - 1;
			}
			else {
				actugl = predactugl[1] - 1;
				
			}
			predactugl[0] = predactugl[1];
			predactugl[1] = actugl;

			
		}
		else {
			actugl = 0;
			predactugl[1] = actugl;
			jumpel = false;
			if (predugl[0] > 0 ) {
				actugl += 5;
				jumpel = true;
			}
			else {	
				actugl = 0;
			}
		predactugl[0] = predactugl[1];
		predactugl[1] = actugl;

		}
		

	}
	
} 

function actin() {
	if (lola == false) {
		predactins[1] = actins;
		lola = true;
	}
	else if (kaka == false) {
		if (predins[0] > 0 ) {
			actins += 1;
			kaka = true;
		}
		else {
			actins = 0;
		}
		predactins[0] = predactins[1];
		predactins[1] = actins;

	}
	else {
		if (predactins[1] > 0) {
			if (dostins == predins[0] - 1) {
				time_ins += 1;
					if (time_ins == 3){
					actins = predactins[1] + 2 - 1;
					time_ins = 0;
				}
			}
			else if (predins[0] == dostins && predins[0] != 0) {
				time_ins += 1;
					if (time_ins == 3){
					actins += 1;
					time_ins = 0;
				}
				
			}
			else if (predins[0] > 0) {
				time_ins += 1;
					if (time_ins == 3){
					actins = predactins[1] + 2 - 1;
					time_ins = 0;
				}
				
			}
			else {
				time_ins += 1;
					if (time_ins == 3){
					actins = predactins[1] - 1;
					time_ins = 0;
				}
				
				
			}
			predactins[0] = predactins[1];
			predactins[1] = actins;

			
		}
		else {
			actins = 0;
			predactins[1] = actins;
			kaka = false;
			if (predins[0] > 0 ) {
				actins += 1;
				kaka = true;
			}
			else {	
				actins = 0;
			}
		predactins[0] = predactins[1];
		predactins[1] = actins;

		}
		

	}
	
} 

function finalsahar() {
	if (actugl != 0 && actins != 0) {
		sum = -0.02;
	}
	if (actugl != 0 && actins == 0) {
		sum = 0.05;
	}
	if (actugl == 0 && actins != 0) {
		sum = -0.07;
	}
	if (actugl == 0 && actins == 0) {
		sum = 0;
	}
	fin += sum;
	res = fin.toFixed(2);
	sahar.push(res);
}

function obroboca() {
	dostug();
	dostin();
	actug();
	actin();
	finalsahar();
		lastElement = sahar.at(-1);
		document.getElementById("peremen").textContent = lastElement;
		console.dir(sahar);

}
function vhod() {
	
}

function postvhod() {
	okno.style.opacity = "1";
}

function crest() {
	setTimeout(postcrest, 300)
	okno.style.opacity = "0";
	setTimeout(postnajat, 400)
}

function postcrest() {
	over.style.opacity = "0";
}

function postnajat() {
	okno.style.zIndex = "-1";
	over.style.zIndex = "-1";
}

function najatie1() {
	
	ugl += 5;
}
function najatie2() {
	
	ins += 1;
}

function vhodpod() {
	vhodvibor.style.borderBottom = "ridge #009999";
	registrvibor.style.borderBottom = "none";
	osnvhod.style.display = "inline";
	osnreg.style.display = "none";
} 

function regpod() {
	vhodvibor.style.borderBottom = "none";
	registrvibor.style.borderBottom = "ridge #009999";
	osnvhod.style.display = "none";
	osnreg.style.display = "inline";
}