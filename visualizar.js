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


//------------------------finOne()



// async function encontrarPropiedad(nombrePropiedad,bd,nombrecoleccion){

//     const client = new MongoClient(url);

//     try{

//     await client.connect();
//     const result = await client.db(bd).collection(nombrecoleccion).findOne({
//        cantidadDiseño: nombrePropiedad});
//     if(result){
//         console.log(`Se encontro una propiedad con este requisito ${nombrePropiedad}`)
//         console.log(result);
//     }else{
//         console.log(`No se encontro una propiedad con este requisito ${nombrePropiedad}`)
//     }

//     }catch(e){
//         console.error(e);
//     }finally{

//     await client.close();
//     }
// }


//se debe cambiar en el try catch el nombre de la propiedad por la cua vas a visualizar

// visualizar de la coleccion cliente 
// encontrarPropiedad("Stuart","colch_star","cliente");

// visualizar de la coleccion Proveedor
// encontrarPropiedad("Genesis","colch_star","Proveedor");

// visualizar de la coleccion Compra
// encontrarPropiedad(343759,"colch_star","Compra");

// visualizar de la coleccion DetalleCompra
// encontrarPropiedad(939942,"colch_star","DetalleCompra");






//-------------------------------find()-----------------------




// visualizar de la coleccion Compra
// db.Compra.find({})

// visualizar de la coleccion Proveedor
// db.Proveedor.find({})

// visualizar de la coleccion cliente
// db.cliente.find({})


// visualizar de la coleccion cliente
// db.DetalleCompra.find({})



