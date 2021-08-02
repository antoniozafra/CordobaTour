/*AUTOR:ANTONIO JESÚS ZAFRA ARIAS*/
/*PRÁCTICA WEB TURÍSTICA DE CÓRDOBA*/

//GUARDAMOS EN VARIABLES LOS TITULOS Y UN PEQUEÑO TEXTO DESCRIPTIVO QUE IREMOS ALTERNANDO DINÁMICAMENTE	
var titulo_puente_romano = "PUENTE ROMANO";
var mensaje_puente_romano = "El puente romano de Córdoba está situado sobre el río Guadalquivir a su paso por Córdoba, y une el barrio del Campo de la Verdad con el Barrio de la Catedral. También conocido como el puente Viejo, ya que fue el único puente con que contó la ciudad durante veinte siglos, hasta la construcción del puente de San Rafael a mediados del siglo XX.";

var titulo_patios = "PATIO DE LOS NARANJOS";
var mensaje_patios = "El patio de los Naranjos está situado en la parte norte del templo. Tiene su origen en el patio de abluciones de la mezquita de Abderramán I, siendo posteriormente ampliado y reformado durante las siguientes etapas constructivas. Recibe su nombre de los 98 naranjos que contiene, que fueron plantados formando hileras a finales del siglo XVIII.";

var titulo_alcazar = "ALCÁZAR";
var mensaje_alcazar = "El Alcázar de los Reyes Cristianos es un edificio de carácter militar de la ciudad de Córdoba, España, ubicado en uno de los márgenes del río Guadalquivir. El monarca Alfonso XI de Castilla ordenó su construcción en el año 1328 sobre el antiguo Alcázar andalusí, antes residencia del gobernador romano y la aduana. El conjunto arquitectónico tiene un carácter sobrio en su exterior y espléndido en su interior, con los magníficos jardines y patios que mantienen una inspiración mudéjar";

var titulo_mezquita = "MEZQUITA DE CÓRDOBA";
var mensaje_mezquita = "Mezquita-catedral de Córdoba, antes «Santa María Madre de Dios» o «Gran Mezquita de Córdoba», actualmente conocida como la Catedral de la Asunción de Nuestra Señora de forma eclesiástica, es un edificio de la ciudad de Córdoba, España.Se empezó a construir como mezquita en el año 786, con la apropiación por los conquistadores musulmanes de la basílica hispanorromana de San Vicente Mártir y la reutilización de parte de los materiales, quedando reservada al culto musulmán.";

var titulo_calahora = "TORRE DE CALAHORRA";
var mensaje_calahorra = "La torre de la Calahorra (en árabe: qala’at al-hurriya) es una fortaleza de origen islámico concebida como entrada y protección del Puente Romano de Córdoba (España). Fue declarada Conjunto Histórico-Artístico en 1931, junto con el puente romano y la puerta del puente.Forma parte del centro histórico de Córdoba que fue declarado Patrimonio de la Humanidad por la Unesco en 1994.Alberga la sede del Museo Vivo de al-Ándalus, inaugurado en 1987 y gestionado por la Fundación Paradigma Córdoba.";


//FUNCION CAMBIAR DATOS
function cambiar_datos(numero) {

	//ABRIMOS UNA ESTRUCTURA SWITCH
	switch (numero) {

		case 1:
			/*PUENTE ROMANO*/

			mostrar_boton();

			document.getElementById("mapa").style.visibility = "hidden";
			document.getElementById("mapa").style.display = "none";


			/*CAMBIAMOS EL TITULO DEL VIDEO*/
			document.getElementById("titulo").innerHTML = titulo_puente_romano;
			/*CAMBIAMOS LA INFORMACION DEL MONUMENTO*/
			document.getElementById("informacion").innerHTML = mensaje_puente_romano;
			//CAMBIAMOS LA DIRECCION DEL VIDEO				
			video = document.getElementById("video_principal");
			video.setAttribute('src', './media/videos/puente_romano.mp4').play();

			//AÑADIMOS MOVIMIENTO A LOS ELEMENTOS QUE HEMOS CAMBIADO
			document.getElementById("contenido").className.replace(/(?:^|\s)MyClass(?!\S)/g, 'animated  zoomIn  delay-1s');

			break;

		case 2:
			/*ALCÁZAR*/

			mostrar_boton();

			document.getElementById("mapa").style.visibility = "hidden";
			document.getElementById("mapa").style.display = "none";

			document.getElementById("titulo").innerHTML = titulo_alcazar;
			/*CAMBIAMOS LA INFORMACION DEL MONUMENTO*/
			document.getElementById("informacion").innerHTML = mensaje_alcazar;
			/*CAMBIAMOS LA DIRECCIÓN  DEL VIDEO*/
			video = document.getElementById("video_principal");
			video.setAttribute('src', './media/videos/alcazar.mp4').play();
			break;

		case 3:
			/*TORRE DE CALAHORRA*/

			mostrar_boton();

			document.getElementById("mapa").style.visibility = "hidden";
			document.getElementById("mapa").style.display = "none";

			document.getElementById("titulo").innerHTML = titulo_calahora;
			/*CAMBIAMOS LA INFORMACION DEL MONUMENTO*/
			document.getElementById("informacion").innerHTML = mensaje_calahorra;
			/*CAMBIAMOS LA DIRECCIÓN  DEL VIDEO*/
			video = document.getElementById("video_principal");
			video.setAttribute('src', './media/videos/calahorra.mp4').play();
			break;
		case 4:
			/*MEZQUITA DE CORDOBA*/

			mostrar_boton();

			document.getElementById("mapa").style.visibility = "hidden";
			document.getElementById("mapa").style.display = "none";

			document.getElementById("titulo").innerHTML = titulo_mezquita;
			/*CAMBIAMOS LA INFORMACION DEL MONUMENTO*/
			document.getElementById("informacion").innerHTML = mensaje_mezquita;
			/*CAMBIAMOS LA DIRECCIÓN  DEL VIDEO*/
			video = document.getElementById("video_principal");
			video.setAttribute('src', './media/videos/mezquita.mp4').play();
			//CAMBIAMIOS LA POSICION DEL PIE DE PAGINA
			document.getElementById("pie").style.position = "fixed"
			break;
		case 5:
			/*PATIO DE LOS NARANJOS*/

			mostrar_boton();

			document.getElementById("mapa").style.visibility = "hidden";
			document.getElementById("mapa").style.display = "none";

			document.getElementById("titulo").innerHTML = titulo_patios;
			/*CAMBIAMOS LA INFORMACION DEL MONUMENTO*/
			document.getElementById("informacion").innerHTML = mensaje_patios;
			/*CAMBIAMOS LA DIRECCIÓN  DEL VIDEO*/
			video = document.getElementById("video_principal");
			video.setAttribute('src', './media/videos/patios.mp4').play();
			break;

	} //FIN SWITCH




} //FIN FUNCION CAMBIAR_DATOS



//FUNCION MOSTAR_BOTON
function mostrar_boton() {
	//MOSTRAMOS AL USUARIO EL BOTON LLAMADO VISITAS GUIADAS
	document.getElementById("visitas_guiadas").style.visibility = "visible";

} //FIN FUNCION MOSTRAR_BOTON




//FUNCION CAMBIAR PAGINA
function cambiar() {
	location.href = "index.html";

}
//FIN FUNCION CAMBIAR_PAGINA




//FUNCION MOSTRAR MAPA
function mostrar_mapa() {
	//MOSTRAMOS AL USUARIO EL MAPA 
	document.getElementById("mapa").style.visibility = "visible";
	//LE AÑADIMOS AL MISMO ELEMENTO LA POSICION DISPLAY_BLOCK
	document.getElementById("mapa").style.display = "block";

	/*GUARDAMOS EL TITULO EN UNA VARIABLE*/
	var elemento = document.getElementById("titulo").innerHTML;

	//NOS DIRIGIMOS A LA FUNCION CAMBIAR_ELEMENTO(ELEMENTO)
	cambiar_mapa(elemento);


}
//FIN FUNCION MOSTRAR MAPA


//AÑADIMOS LA FUNCION CAMBIAR MAPA
function cambiar_mapa(elemento) {
	//ABRIMOS UNA ESTRUCTURA SWITCH
	switch (elemento) {
		//CASO ALCAZAR
		case "ALCÁZAR":

			var mapa = document.getElementById("mapa");
			//CAMBIAMOS LA DIRECCION DEL MAPA PARA QUE SE VEA CORRECTAMENTE
			mapa.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.3332843547523!2d-4.7842658847211075!3d37.8758877797411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d209c64b08419%3A0xcb4ad460f15712f5!2sAlc%C3%A1zar%20de%20los%20Reyes%20Cristianos!5e0!3m2!1ses!2ses!4v1576586588536!5m2!1ses!2ses");
			break;

			//CASO PUENTE ROMANO
		case "PUENTE ROMANO":

			var mapa = document.getElementById("mapa");
			//CAMBIAMOS LA DIRECCION DEL MAPA PARA QUE SE VEA CORRECTAMENTE

			mapa.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6298.598613243487!2d-4.782197895043982!3d37.876682519360934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d209ca1831265%3A0xd6707a33cf6dd271!2sPuente%20Romano%20de%20C%C3%B3rdoba!5e0!3m2!1ses!2ses!4v1576587179957!5m2!1ses!2ses");
			break;


			//CASO TOTRRE DE CALAHORRA	
		case "TORRE DE CALAHORRA":

			var mapa = document.getElementById("mapa");
			//CAMBIAMOS LA DIRECCION DEL MAPA PARA QUE SE VEA CORRECTAMENTE

			mapa.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12597.37394107817!2d-4.7853452076220275!3d37.87564917744437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d2084f0b9086f%3A0xce3c20c82dd92429!2sTorre%20de%20la%20Calahorra!5e0!3m2!1ses!2ses!4v1576587299300!5m2!1ses!2ses");
			break;

			//CASO MEZQUITA DE CORDOBA	
		case "MEZQUITA DE CÓRDOBA":

			var mapa = document.getElementById("mapa");
			//CAMBIAMOS LA DIRECCION DEL MAPA PARA QUE SE VEA CORRECTAMENTE

			mapa.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12596.817092740934!2d-4.788120207620481!3d37.87890527743506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d2082ce1a16cf%3A0xefebc353f81bf636!2sMezquita-Catedral%20de%20C%C3%B3rdoba!5e0!3m2!1ses!2ses!4v1576587397799!5m2!1ses!2ses");
			break;


			//CASO PATIO DE LOS NARANJOS
		case "PATIO DE LOS NARANJOS":

			var mapa = document.getElementById("mapa");

			mapa.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12596.721404653508!2d-4.788586007620216!3d37.87946477743344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d209d2b5b5a9d%3A0x71478a7adb0adb9!2sPatio%20de%20los%20Naranjos!5e0!3m2!1ses!2ses!4v1576587481615!5m2!1ses!2ses");
			break;


	} //FIN SWITCH


}
//FIN FUNCION CAMBIAR MAPA
