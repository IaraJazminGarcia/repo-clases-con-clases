// crear las clases Edificio, Piso y Departamento aquí
class Departamento {
    nombre: string;

constructor(nombre:string) {
    this.nombre = nombre;
}

getName() {
    return this.nombre;
}
}


class Piso {
    nombre: string;
    departamentos: Departamento[];

    constructor(nombre:string) {
        this.nombre = nombre;
        this.departamentos = []; // Inicializamos el array de departamentos
        }

        // Método para agregar un departamento
        agregarDepartamento(departamento: Departamento) {
            this.departamentos.push(departamento); // Método para agregar un departamento
        }

          // Método para obtener el listado de departamentos
            getDepartamentos() {
                return this.departamentos;
            }
        }


class Edificio {
    pisos: Piso[];

    constructor(pisos: Piso[] = []) { // Aceptamos un array de pisos como argumento
        this.pisos = pisos; // Inicializamos el array de pisos
    }

    // metodo para agregar un piso
    agregarPiso(piso: Piso) {
        this.pisos.push(piso);
    }

    // Método para agregar un departamento a un piso específico
    addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
        const piso = this.pisos.find(Piso => Piso.nombre === nombreDePiso); // Buscamos el piso por nombre

        if (!piso) {
            console.error(`Error: No existe un pis con nombre"${nombreDePiso}".`);
            return; // Salimos del método si no encontramos el piso
        }

        piso.agregarDepartamento(departamento); // Agregamos el departamento al piso encontrado

    }

    // Método para obtener todos los departamentos de un piso específico
    getDepartamentosByPiso(nombreDePiso:string):Departamento[] {
        const piso = this.pisos.find(pisos => pisos.nombre === nombreDePiso); // Buscamos el piso por nombre

        if (!piso) {
            console.error(`Error: No existe un piso con el nombre "${nombreDePiso}".`);
            return []; //Devolvemos un array vacío si no encontramos el piso
        }

        return piso.departamentos; // Devolvemos el array de departamentos del piso encontrado
    }

    }




// no modificar este test
function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
  
    const deptos = unEdificio.getDepartamentosByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
  
    if (
      Array.isArray(deptosEmpty) &&
      deptosEmpty.length == 0 &&
      deptos.length == 3 &&
      deptos[2].getName() == "depto tres"
    ) {
      console.log("testClaseBandaApartment passed");
    } else {
      throw "testClaseBandaApartment not passed";
    }
  }
  
  function main() {
    testClaseEdificio();
console.log("un nuevo cambio");
  }
  main();
