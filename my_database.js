/**TANTO LA BASE DE DATOS COMO LA COLECCION SE INCORPORARAN AL ESQUEMA CUANDO SE AGREGUE EL PRIMER INGRESO */
paciente={
    'nombre': 'pablo',
    'apellido': 'cisera',
    'edad': 37,
    'estado': 'soltero',
    'direccion': 'calle 57 nº 2034, Reconquista',
}

paciente2={
    'nombre': 'juan',
    'apellido': 'lencia',
    'edad': 27,
    'estado': 'casado',
    'direccion': 'calle 59 s/n, Reconquista',
}
/**INSERTAR OBJETO EN COLECCION */
db.pacientes.insert(paciente2);

//para conocer que existe en una coleccion

db.pacientes.find();

/**si quiero insertar un solo objeto */
paciente3={
    'nombre': 'romero',
    'apellido': 'romerito',
    'edad': 57,
    'estado': 'viudo',
    'direccion': 's/n, Reconquista',
}
db.pacientes.insertOne(paciente3);
    

/**INSERTAR MUCHOS DOCUMENTOS*/

db.pacientes.insertMany([
    paciente={
        'nombre':'javier',
        'apellido':'fontana',
        'edad':28,
        'estado': 'soltero',
        'direccion': 'bajo el puente'
    },
    paciente={
        'nombre':'gladis',
        'apellido':'feresin',
        'edad': 67,
        'estado': 'divorciada',
        'direccion': 'en tu casa'
    }
]);

/**UTILIZANDO EL METODO SAVE() CON UN USUARIO CREADO ES IGUAL A INSERT PERO SI EL USUARIO NO EXISTE LO CREA 
 * Y SI EXISTE LO ACTUALIZA;

teniendo en cuenta la tabla de other.js*/

db.pacientes.save(user1);
user1={
    "nombre": "daniel",
    "apellido": "fontana",
    "edad": 26
};
