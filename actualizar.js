const { MongoClient } = require('mongodb');

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



//--------------------------------updateMany




// // actualizar  de la coleccion Proveedor
// db.Proveedor.updateMany({nombre:"Hettie",direccion:"South Rudyborough"},{$set:{nombre:"pepito",direccion:"picacho"}});

// // actualizar  de la coleccion Compra
//db.Compra.updateMany({nombre:"Hettie",direccion:"South Rudyborough"},{$set:{nombre:"pepito",direccion:"picacho"}});

// // actualizar  de la coleccion cliente
// db.cliente.updateMany({nombre:"Hettie",direccion:"South Rudyborough"},{$set:{nombre:"pepito",direccion:"picacho"}});




//---------------------updateMany Upsert




// le actualiamos la direccion a todos los que tengasn apellido "Wintheiser " de la tabla cliente

// db.cliente.updateMany(
//       {
//         apellido: "Wintheiser"
//       },
//       {
//         $set:{"direccion":"colombia"} 
//       },
//       {
//         $upsert:true 
//       }
// ) 

// db.cliente.find({direccion:"colombia"})


// le actualiamos el contacto  a todos los que tengasn direccion "Altenwerthberg" de la tabla Proveedor

// db.Proveedor.updateMany(
//       {
//         direccion: "Altenwerthberg"
//       },
//       {
//         $set:{"contacto":"registro@gmail.com"} 
//       },
//       {
//         $upsert:true 
//       }
// ) 

// db.Proveedor.find({contacto:"registro@gmail.com"})



// le actualiamos la fecha   a todos los que tengan el fk_detalleCompra  634 de la tabla Compra

// db.Compra.updateMany(
//       {
//         fk_detalleCompra: 634
//       },
//       {
//         $set:{"fecha": 2021-10-21} 
//       },
//       {
//         $upsert:true 
//       }
// ) 

// db.Compra.find({fecha: 2021-10-21})





//------------------------------updateOne





// async function actualizarPropiedad(nombrePropiedad, campoActualizar,bd,coleccion){

//     const client = new MongoClient(url);

//     try{

//     await client.connect();
//     const result= client.db(bd).collection(coleccion).updateOne
//     ({nombre:nombrePropiedad},{$set:{summary:campoActualizar}})
//     console.log(`${(await result).matchedCount} propiedades cumplen  con el criterio de busqueda`);
//     console.log(`${(await result).modifiedCount} propiedades  fueron actualizadas`)



//     }catch(e){
//         console.error(e);
//     }finally{

//     await client.close();
//     }
// }

//se debe cambiar en el try catch el nombre de la propiedad la cual vas a cambiar

// // actualizar  de la coleccion cliente
// actualizarPropiedad("Chanel","julio","colch_star","cliente");

// // actualizar  de la coleccion Proveedor
// actualizarPropiedad("Christelle","julio","colch_star","Proveedor");

// // actualizar  de la coleccion Compra
// actualizarPropiedad(756158,10000,"colch_star","Compra");



//--------------------- updateOne con upsert




// es un insert y update  intenta actulizar  un documento si no lo encuentra lo crea

//cliente

// db.cliente.updateOne(
//     {id_cliente: 3},
//     {
//         $set:{ 
//             "nombre": "pepito",
//             "apellido": "hernan",
//             "telefono": "38484747",
//              "email":"hernanbrian@yahoo.com",
//              "direccion":"colombia",
//              "estado": true
//         }
//     },
//     {upsert: true}
//     )


//  db.cliente.findOne({id_cliente:3})


//proveedor

// db.Proveedor.updateOne(
//     {id_proveedor: 4},
//     {
//         $set:{ 
//              "nombre" :"Nike",
//              "telefono":"3485757575",
//              "direccion":"los angeles",
//              "contacto":"nike44@gmail.com",
//              "estado":true
//         }
//     },
//     {upsert: true}
//     )


// db.Proveedor.findOne({id_proveedor:4})



//Compra

// db.Compra.updateOne(
//     {id_compra: 4},
//     {
//         $set:{    
            // "total_compra":1111,
            // "fecha":"2023-05-19",
            // "estado": false,
            // "fk_detalleCompra":450
//         }
//     },
//     {upsert: true}
//     )


// db.Compra.findOne({id_compra:4})





