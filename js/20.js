// Métodos de Propiedad

const reproductor = { // Los métodos se pueden crear dentro de un objeto
    reproducir: function() {
        console.log("Reproduciendo Canción")
    },
    pausar: function() {
        console.log("Pausando...")
    },
    crearPlayList: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlayList: function() {
        console.log(`Reproduciendo la playlist: ${nombre}`)
    }
}

reproductor.borrarCancion = function(id) { // Los métodos se pueden crear por fuera de los objetos y funcionar
    console.log(`Eliminando la canción: ${id}`)
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlayList("Cumbia");
reproductor.reproducirPlayList("Cumbia");