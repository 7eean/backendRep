class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        (this.nombre = nombre),
        (this.apellido = apellido),
        (this.libros = libros || []),
        (this.mascotas = mascotas || []);
    };

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    };

    addMascotas(mascota){
        this.mascotas.push(mascota);
    };

    countMascotas(){
        return this.mascotas.length;
    };

    addBook(nombre, autor){
        this.libros.push({nombre, autor});
    };

    getBookNames(){
        return this.libros.map(({nombre}) => nombre). join(", ");
    };
};

let usuario = new Usuario('Elon', 'Musk');
console.log(`El nombre completo: ${usuario.getFullName()}.`);
usuario.addMascotas("Gato");
usuario.addMascotas("Perro");
console.log(`El usuario tiene ${usuario.countMascotas()} mascotas`);
usuario.addBook("El senor de las moscas", "Goldwing");
usuario.addBook("Fundacion", "Asimov");
console.log(`Sus libros son: ${usuario.getBookNames()}.`)