function clickMe(){
			document.getElementById('first').innerHTML = "Miggy";
		}

function addMe(){
			var x = document.getElementById('fn').value;
			var y = document.getElementById('sn').value;
			var sum = parseInt(x) + parseInt(y);
			document.getElementById('answer').innerHTML = sum;
		}