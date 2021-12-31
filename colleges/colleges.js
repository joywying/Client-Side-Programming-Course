// I've included both the universities full names and their nicknames
// use the nicknames for this assignment.  I've included the full names
// so those who aren't familiar with Bay Area universities will know
// what the names of the universities actually are.

var univArray = new Array(
		{name: "Stanford University", nickname: "Stanford", ownership: "private", SATh: 1570, SATl: 1380, tuition: 44757},
		{name: "University of California, Berkeley", nickname: "UC Berkeley", ownership: "public", SATh: 1500, SATl: 1250, tuition: 13844},
		{name: "University of California, Santa Cruz", nickname: "UC Santa Cruz", ownership: "public", SATh: 1280, SATl: 1000, tuition: 13398},
		{name: "San Francisco State University", nickname: "SFSU", ownership: "public", SATh: 1110, SATl: 880, tuition: 6468},
		{name: "San Jose State University", nickname: "SJSU", ownership: "public", SATh: 1160, SATl: 880, tuition: 9496},
		{name: "Sonoma State University", nickname: "Sonoma State", ownership: "public", SATh: 1090, SATl: 880, tuition: 7276},
		{name: "California State University, East Bay", nickname: "CalState East Bay", ownership: "public", SATh: 1010, SATl: 800, tuition: 6550, room: 6435},
		{name: "University of San Francisco", nickname: "USF", ownership: "private", SATh: 1270, SATl: 1070, tuition: 41450},
		{name: "Santa Clara University", nickname: "SCU", ownership: "private", SATh: 1380, SATl: 1190, tuition: 43812},
		{name: "Mills College", nickname: "Mills College", ownership: "private", SATh: 1250, SATl: 1040, tuition: 42918}
		);

function replaceTable(){
	var newTable = document.getElementById("displayTable").getElementsByTagName('tbody')[0];
	var maxSAT = document.getElementById("maxHighSAT").value;
	var minSAT = document.getElementById("minLowSAT").value;
	var tuition = document.getElementById("maxTuition").value;
	var privPub = document.getElementsByName("radioCriteria");

	var numRows = 1;

	for(let i = 0; i < privPub.length; i++){
		if (privPub[i].checked){
			var privPubSelect = privPub[i].value;
		}
	}
	newTable.innerHTML = "<table> <tr><th>Name</th><th>SAT High</th><th>SAT Low</th><th>Tuition</th></tr></table>";

	

	for(let j = 0; j < univArray.length; j++){
		if(univArray[j].SATh <= maxSAT || maxSAT == ""){
			if(univArray[j].SATl >= minSAT || minSAT == ""){
				if(univArray[j].ownership == privPubSelect || privPubSelect == "dc"){
					if(univArray[j].tuition <= tuition || tuition == ""){
						var row = newTable.insertRow(numRows);
						numRows += 1;
						var cell1 = row.insertCell(0);
						var cell2 = row.insertCell(1);
						var cell3 = row.insertCell(2);
						var cell4 = row.insertCell(3);
		
						cell1.innerHTML = univArray[j].nickname;
						cell2.innerHTML = univArray[j].SATh;
						cell3.innerHTML = univArray[j].SATl;
						cell4.innerHTML = univArray[j].tuition;
					}
					
				}
				
			}
			

		}
		
	}

}

document.getElementById("updateButton").addEventListener("click", replaceTable, false);