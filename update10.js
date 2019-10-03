
		function myUpdate(arr) {
		var out = "";
		var i;
		for(i = 0; i<arr.length; i++) {
		out += '<a  href="' + arr[i].src + '">' + arr[i].display + '</a><br>';
		}
		document.getElementById("update10").innerHTML = out;
		}
	
	myUpdate([
	{
	"display": "Update available",
	"src": "https://play.google.com/store/apps/details?id=org.kalpataruboi.svb.pbdictionary"
	}
	]);
		