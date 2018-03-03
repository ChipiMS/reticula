// ██╗   ██╗ █████╗ ██████╗ ██╗ █████╗ ██████╗ ██╗     ███████╗███████╗
// ██║   ██║██╔══██╗██╔══██╗██║██╔══██╗██╔══██╗██║     ██╔════╝██╔════╝
// ██║   ██║███████║██████╔╝██║███████║██████╔╝██║     █████╗  ███████╗
// ╚██╗ ██╔╝██╔══██║██╔══██╗██║██╔══██║██╔══██╗██║     ██╔══╝  ╚════██║
//  ╚████╔╝ ██║  ██║██║  ██║██║██║  ██║██████╔╝███████╗███████╗███████║
//   ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚══════╝╚══════╝
var xOffset = 0, yOffset = 40, width = 100, height = 100, semester;
// ███████╗██╗   ██╗███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
// ██╔════╝██║   ██║████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
// █████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
// ██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
// ██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
// ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
function createSquare(name, className, x, y){
	console.log(name, className, x, y);
	var div = document.createElement("div");
	div.setAttribute("class", className);
	div.setAttribute("style","position: absolute; top: "+y+"px; left: "+x+"px;");
	var node = document.createTextNode(name);
	div.appendChild(node);
	document.body.appendChild(div);
}
// ███╗   ███╗ █████╗ ██╗███╗   ██╗
// ████╗ ████║██╔══██╗██║████╗  ██║
// ██╔████╔██║███████║██║██╔██╗ ██║
// ██║╚██╔╝██║██╔══██║██║██║╚██╗██║
// ██║ ╚═╝ ██║██║  ██║██║██║ ╚████║
// ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝
semester = 1;
createSquare("Cálculo Diferencial", "normal", xOffset+(semester-1)*width, yOffset+height*0);
createSquare("Fundamentos de Programación", "normal", xOffset+(semester-1)*width, yOffset+height*1);
createSquare("Taller de Ética", "normal", xOffset+(semester-1)*width, yOffset+height*3);
createSquare("Fundamentos de Investigación", "normal", xOffset+(semester-1)*width, yOffset+height*4);
createSquare("Matemáticas Discretas", "normal", xOffset+(semester-1)*width, yOffset+height*5);
semester = 2;
createSquare("Cálculo Integra", "normal", xOffset+(semester-1)*width, yOffset+height*0);
createSquare("Programación Orientada a Objetos", "normal", xOffset+(semester-1)*width, yOffset+height*1);
createSquare("Taller de Administración", "normal", xOffset+(semester-1)*width, yOffset+height*2);
createSquare("Química", "normal", xOffset+(semester-1)*width, yOffset+height*3);
createSquare("Desarrollo Sustentable", "normal", xOffset+(semester-1)*width, yOffset+height*4);
createSquare("Probabilidad y Estadística", "normal", xOffset+(semester-1)*width, yOffset+height*5);
semester = 3;
createSquare("Cálculo Vectorial", "normal", xOffset+(semester-1)*width, yOffset+height*0);
createSquare("Estructura de Datos", "normal", xOffset+(semester-1)*width, yOffset+height*1);
createSquare("Contabilidad Financiera", "normal", xOffset+(semester-1)*width, yOffset+height*2);
createSquare("Investigación de Operaciones", "normal", xOffset+(semester-1)*width, yOffset+height*3);
createSquare("Algebra Lineal", "normal", xOffset+(semester-1)*width, yOffset+height*4);
createSquare("Física General", "normal", xOffset+(semester-1)*width, yOffset+height*5);
semester = 4;
createSquare("Ecuaciones Diferenciales", "normal", xOffset+(semester-1)*width, yOffset+height*0);
createSquare("Tópicos Avanzados de Programación", "normal", xOffset+(semester-1)*width, yOffset+height*1);
createSquare("Métodos Numéricos", "normal", xOffset+(semester-1)*width, yOffset+height*2);
createSquare("Fundamentos de Bases de Datos", "normal", xOffset+(semester-1)*width, yOffset+height*3);
createSquare("Sistemas Operativos", "normal", xOffset+(semester-1)*width, yOffset+height*4);
createSquare("Principios Eléctricos y Aplicaciones Digitales", "normal", xOffset+(semester-1)*width, yOffset+height*5);
semester = 5;
createSquare("Fundamentos de Telecomunicaciones", "normal", xOffset+(semester-1)*width, yOffset+height*0);
createSquare("Fundamentos de Ingeniería de Software", "normal", xOffset+(semester-1)*width, yOffset+height*1);
createSquare("Simulación", "normal", xOffset+(semester-1)*width, yOffset+height*2);
createSquare("Taller de Bases de Datos", "normal", xOffset+(semester-1)*width, yOffset+height*3);
createSquare("Taller de Sistemas Operativos", "normal", xOffset+(semester-1)*width, yOffset+height*4);
createSquare("Arquitectura de Computadoras", "normal", xOffset+(semester-1)*width, yOffset+height*5);
createSquare("Cultura Empresaria", "normal", xOffset+(semester-1)*width, yOffset+height*6);
semester = 6;
createSquare("Redes de Computadora", "normal", xOffset+(semester-1)*width, yOffset+height*0);
createSquare("Ingeniería de Software", "normal", xOffset+(semester-1)*width, yOffset+height*1);
createSquare("Programación Web", "normal", xOffset+(semester-1)*width, yOffset+height*2);
createSquare("Administración de Bases de Datos", "normal", xOffset+(semester-1)*width, yOffset+height*3);
createSquare("Lenguajes y Autómatas I", "normal", xOffset+(semester-1)*width, yOffset+height*4);
createSquare("Lenguajes de interfaz", "normal", xOffset+(semester-1)*width, yOffset+height*5);
createSquare("Graficación", "normal", xOffset+(semester-1)*width, yOffset+height*6);
semester = 7;
createSquare("Conmutación y Enrutamiento de Redes de Datos", "normal", xOffset+(semester-1)*width, yOffset+height*0);
createSquare("Gestión de Proyectos de Software", "normal", xOffset+(semester-1)*width, yOffset+height*1);
createSquare("Tópicos avanzados de programación Web", "normal", xOffset+(semester-1)*width, yOffset+height*2);
createSquare("Taller de Investigación I", "normal", xOffset+(semester-1)*width, yOffset+height*3);
createSquare("Lenguajes y Autómatas II", "normal", xOffset+(semester-1)*width, yOffset+height*4);
createSquare("Inteligencia Artificial", "normal", xOffset+(semester-1)*width, yOffset+height*5);
createSquare("Sistemas Programables", "normal", xOffset+(semester-1)*width, yOffset+height*6);
semester = 8;
createSquare("Administración de Redes", "normal", xOffset+(semester-1)*width, yOffset+height*0);
createSquare("Tópicos avanzados de seguridad en redes convergentes", "normal", xOffset+(semester-1)*width, yOffset+height*1);
createSquare("Programación Avanzada en Tecnologías Móviles", "normal", xOffset+(semester-1)*width, yOffset+height*2);
createSquare("Taller de Investigación II", "normal", xOffset+(semester-1)*width, yOffset+height*3);
createSquare("Tópicos avanzados de bases de datos", "normal", xOffset+(semester-1)*width, yOffset+height*4);
createSquare("Desarrollos Inteligentes", "normal", xOffset+(semester-1)*width, yOffset+height*5);
createSquare("Programación Lógica y Funcional", "normal", xOffset+(semester-1)*width, yOffset+height*6);
semester = 9;
createSquare("Residencias Profesionales", "normal", xOffset+(semester-1)*width, yOffset+height*0);