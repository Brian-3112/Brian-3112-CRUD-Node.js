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
//         fecha: JSON.stringify(faker.date.recent()),
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

// // Ejecutando el método

// metodos.insertarRegistros(clientes, 'colch_star', 'cliente');



// // ------Insert De los 2000 DeatallesCompra-----




// const Detallecompra = [];

// for (let index = 1; index < 2001; index++) {
//     const DetalleCompra = {
//         id_detalleCompra: index,
//         cantidadPrenda: Math.floor(Math.random() * 2000) + 1,
//         cantidadDiseño: Math.floor(Math.random() * 1000000) + 1,
//         precioPrenda: Math.floor(Math.random() * 1000000) + 1,
//         precioDiseño: Math.floor(Math.random() * 1000000) + 1,
//         fk_prenda: Math.floor(Math.random() * 2000) + 1,
//         fk_diseño: Math.floor(Math.random() * 2000) + 1,
//         fk_compra: Math.floor(Math.random() * 2000) + 1,
        
        
//     };

//     Detallecompra.push(DetalleCompra);
// }

// // ---- Ejecutando el método-----

// metodos.insertarRegistros(Detallecompra , 'colch_star', 'DetalleCompra');





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


// insertar de la coleccion Proveedor

// crearPropiedad({
//     id_proveedor: 3000,
//     nombre: "pepito",
//     telefono: "304545534",
//     direccion: "calle20·89-9",
//     contacto: "pepitop1@gmail.com", 
//     estado: true,
    
       
// },"colch_starr",
// "Proveedor");




// insertar de la coleccion Compra

// crearPropiedad({
//     id_compra: 3011,
//     total_compra: 89023,
//     fecha: "2023-05-31T21:00:43.444Z",
//     estado: true,
//     fk_detalleCompra: 1222332, 

        
// },"colch_star",
// "Compra");




//// insertar de la coleccion DetalleCompra

// crearPropiedad({
//     id_detalleCompra: 4001,
//     cantidadPrenda: 89023,
//     cantidadDiseño: 384747,
//     precioPrenda: 384747,
//     precioDiseño: 1222332, 
//     fk_prenda:85757,
//     fk_diseño:387,
//     fk_compra:33838,

    
            
// },"colch_star",
// "DetalleCompra");



//// insertar de la coleccion cliente

// crearPropiedad({
//    id_cliente:  3002,
//         nombre: "jua",
//         apellido: "perez",
//         telefono: "304344",
//         email: "juaperez@hotmail.com",
//         direccion: "centro",
//         estado: true,


        
// },"colch_star",
// "cliente");





