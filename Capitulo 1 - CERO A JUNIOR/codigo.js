dineroCofla = prompt("cuanto dinero tiene cofla? ");
dineroRoberto = prompt("cuanto dinero tiene roberto");
dineroPedro = prompt("cuanto dinero tiene pedro");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla > 0.6 && dineroCofla < 1) {
	alert("confla, comprate el helado de agua");
	alert("y te sobra " + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
		alert("confla, comprate el helado de crema");
		alert("y te sobra " + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
		alert("confla, comprate el helado de heladix");
		alert("y te sobra " + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
		alert("confla, comprate el helado de heladovich");
		alert("y te sobra " + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
		alert("confla, comprate el helado de helardo")
		alert("y te sobra " + (dineroCofla - 1.8));
}
else if (dineroCofla >= 2.9) {
	alert("confla, Helado con confites o el pote de 1/4kg");
	alert("y te sobran " + (dineroCofla - 2.9));
}else {
	alert("lo siento cofla, no te alcanza");
}


if (dineroRoberto > 0.6 && dineroRoberto < 1) {
	alert("Roberto, comprate el helado de agua");
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
		alert("Roberto, comprate el helado de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
		alert("Roberto, comprate el helado de heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
		alert("Roberto, comprate el helado de heladovich");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
		alert("Roberto, comprate el helado de helardo");
}
else if (dineroRoberto >= 2.9) {
	alert("Roberto, Helado con confites o el pote de 1/4kg");
}else {
	alert("lo siento Roberto, no te alcanza");
}

if (dineroPedro > 0.6 && dineroPedro < 1) {
	alert("Pedro, comprate el helado de agua");
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
		alert("Pedro, comprate el helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
		alert("Pedro, comprate el helado de heladix");
}
else if (dineroPedro>= 1.7 && dineroPedro < 1.8) {
		alert("Pedro, comprate el helado de heladovich");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
		alert("Pedro, comprate el helado de helardo");
}
else if (dineroPedro >= 2.9) {
	alert("Pedro, Helado con confites o el pote de 1/4kg");
}else {
	alert("lo siento Pedro, no te alcanza");
}

