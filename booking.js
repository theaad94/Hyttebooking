		window.onload= oppstart;

		var melding = "Takk for bestillingen. Du vil motta en bekreftelse på mail";

		function oppstart () {

			document.getElementById("btn").onclick = check;
		}

		function check(){
			var fornavn = document.getElementById("fnavn").value;
			var etternavn = document.getElementById("enavn").value;
			var hytte = document.getElementById("hytte").value;
			var antPers = document.getElementById("antPers").value;
			var ankomst = document.getElementById("ankomst").value;
			var hjemreise = document.getElementById("hjemreise").value;
			var mail = document.getElementById("mail").value;

			if(fornavn =="" && etternavn ==""){
				alert("Du må skrive inn fornavn og etternavn");
					return false;
			}

			else if(fornavn ==""){
				alert("Du må skrive inn fornavn");
					return false;
			}

			else if(etternavn ==""){
				alert("Du må skrive inn etternavn");
					return false;
			}

			else if(mail ==""){
				alert("Du må skrive inn en epostadresse");
					return false;
			}

			else if(hytte ==""){
				alert("Du må skrive inn etternavn");
					return false;
			}

			else if(ankomst ==""){
				alert("Du må velge dato for ankomst");
					return false;
			}

			else if(hjemreise ==""){
				alert("Du må velge dato for hjemreise");
					return false;
			}


			else{
				alert(melding);
			}


		}

	function myMap() {
  		var mapCanvas = document.getElementById("map");
  		var mapOptions = {
    		center: new google.maps.LatLng(61.25, 8.917),
    		zoom: 10
  	}
  		var map = new google.maps.Map(mapCanvas, mapOptions);
}
