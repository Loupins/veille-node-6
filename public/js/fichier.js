(function(){
	$(".sauver").on( "click", function(event) {
		event.preventDefault();
		var parent = $(this).parent();
		var identifiant = parent.eq(0);
		var nom = parent.eq(1);
		var prenom = parent.eq(2);
		var telephone = parent.eq(3);
		var courriel = parent.eq(4);
		$("mon_formulaire_cache").eq(0).val(identifiant);
		$("mon_formulaire_cache").eq(1).val(nom);
		$("mon_formulaire_cache").eq(2).val(prenom);
		$("mon_formulaire_cache").eq(3).val(telephone);
		$("mon_formulaire_cache").eq(4).val(courriel);
		$("mon_formulaire_cache").submit();
	});

	$("tr th a").on( "click", function(event) {
		var cles = ["id", "nom", "prenom", "telephone", "courriel"];
		var url = window.location.href.split("/");
		var cle = url[4];
		if(url[5] == 'asc') {
			document.querySelectorAll("tr")[0].children[cles.indexOf(cle)].children[0].setAttribute("href", "/trier/"+cle+"/desc");
		} else {
			document.querySelectorAll("tr")[0].children[cles.indexOf(cle)].children[0].setAttribute("href", "/trier/"+cle+"/asc");
		}
	});
}());