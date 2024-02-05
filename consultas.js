//consultar por nombre de objeto("equal");
db.pacientes.find({
    nombre: 'pablo'
})

/**gt: mayor ; gte: mayor o igual; lt: menor ; lte: menor o igual , igual ":"
 * operador non-equal(ne), "no es" o "no tiene"
 */


//consultar usuarios mayores de 30;

db.pacientes.find({
    edad: { $gt: 30 }
});

/**pacientes que no tengan determinada propiedad: EDAD + usuario activo*/

db.pacientes.insertMany([
    user5={
        "nombre": "leonor",
        "apellido": "feresin",
        "edad":64,
        "status": "activo"
    },
    user6={
        "nombre": "soledad",
        "apellido": "feresin",
        "edad":64,
        "status": "inactivo"
    },
    user7={
        "nombre": "leo",
        "apellido": "feresin",
        "edad":64,
        "status": "activo"
    },
])


/**CONSULTAR MEDIANTE DOS PARAMETROS*/

/**todos los usuarios cuyo status no se activo */

/**operador non-equal */

db.pacientes.find({
    "status": { $ne: "activo"}
})

/**operador "and" */

db.pacientes.find({
    $and:[
        {"edad": { $lt: 70}},
        {"status": "activo"}
    ]
}).count();//.count()este metodo cuenta la cantidad de resultado true conforme los parametros de busqueda;
//DEVOLVIO 2; TODO OK,


/**operador "or" */

db.pacientes.find({
    $or: [//recordemos que se el cumplimienta de al menos, uno de los requisitos para que devuelva los documentos;
        {"edad": 27},
        {"edad": 37},
        {"edad": 112}
    ]
});
/**cuando las opciones sobre las que se puede buscar son cientos o incluso miles
 * el operador or no es una buena eleccion
 */

db.pacientes.find({
    edad: {in: [65, 27, 18, 44]}
})


