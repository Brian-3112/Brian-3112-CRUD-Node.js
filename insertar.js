const { MongoClient } = require('mongodb');

//! Operaciones Crud PARA INSERCIÓN DE DATOS MASIVA

//! CREATE insertMany()
const url =
    'mongodb+srv://parejabrianh12:B123456@cluster0.r8qgzw1.mongodb.net/?retryWrites=true&w=majority';

async function insertarRegistros(registrosNuevos, nombreDB, nombreCollection) {
    const client = new MongoClient(url);
    try {
        await client.connect();
        const result = await client
            .db(nombreDB)
            .collection(nombreCollection)
            .insertMany(registrosNuevos);
        console.log(
            `Se insertaron ${result.insertedCount} registros correctamente.`
        );
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}

module.exports = {
    insertarRegistros,
};


const metodos = require('./insertar.js');
const { faker } = require('@faker-js/faker');


// ---- ------------------Insert De los 2000 Proveedores--------------


// const proveedor = [];

// for (let index = 1; index < 2001; index++) {
//     const Proveedor = {
//         id_proveedor: index,
//         nombre: faker.person.firstName(),
//         telefono: faker.phone.number(),
//         direccion: faker.address.city(),
//         contacto: faker.internet.email(), 
//         estado: faker.helpers.arrayElement([true, false], 1, 1),
//     };

//     proveedor.push(Proveedor);
// }

// // Ejecutando el método

// metodos.insertarRegistros(proveedor, 'colch_star', 'Proveedor');


// --------------------- Insert De los 2000 Compras ---------------------


// const compra = [];

// for (let index = 1; index < 2001; index++) {
//     const Compra = {
//         id_compra: index,
//         total_compra: Math.floor(Math.random() * 1000000) + 1,
//         fecha: faker.date.anytime(),
//         estado: faker.helpers.arrayElement([true, false], 1, 1),
//         fk_detalleCompra: Math.floor(Math.random() * 2000) + 1,
        
//     };

//     compra.push(Compra);
// }
 
// // ---Ejecutando el método ----

// metodos.insertarRegistros(compra, 'colch_star', 'Compra');





//------------------------Insert De los 2000 clientes-----------------------



// const clientes = [];

// for (let index = 1; index < 2001; index++) {
//     const cliente = {
//         id_cliente: index,
//         nombre: faker.person.firstName(),
//         apellido: faker.person.lastName(),
//         telefono: faker.phone.number(),
//         email: faker.internet.email(),
//         direccion: faker.location.city(),
//         estado: faker.helpers.arrayElement([true, false], 1, 1),
//     };

//     clientes.push(cliente);
// }

// // // Ejecutando el método

// metodos.insertarRegistros(clientes, 'colch_star', 'cliente');







//------------------------------insertOne()




// async function crearPropiedad(nuevaPropiedad,db,coleccion){

//     const client = new MongoClient(url);

//     try{ 

//     await client.connect();

//     const result = await client.db(db).collection(coleccion).insertOne(nuevaPropiedad);
//     console.log(result);

//     console.log(`se creo una nueva propiedad con el siguiente id:  ${result.insertedId}`);

//     }catch(e){
//         console.error(e);
//     }finally{

//     await client.close();
//     }
// }


//// insertar de la coleccion Proveedor

// crearPropiedad({
//     id_proveedor: 8000  ,
//     nombre: "pepito",
//     telefono: "304545534",
//     direccion: "calle20·89-9",
//     contacto: "pepitop1@gmail.com", 
//     estado: true,
    
       
// },"colch_star",
// "Proveedor");




// insertar de la coleccion Compra

// crearPropiedad({
//     id_compra: 4000,
//         total_compra: 89023 ,
//         fecha: "2023-03-08T21:07:56.187+00:00",
//         estado: true,
//         fk_detalleCompra:1222333, 

        
// },"colch_star",
// "Compra");



//// insertar de la coleccion cliente

// crearPropiedad({
//    id_cliente:  3001,
//         nombre: "jua",
//         apellido: "perez",
//         telefono: "304344",
//         email: "juaperez@hotmail.com"
//         direccion: "centro"
//         estado: true


        
// },"colch_star",
// "cliente");





