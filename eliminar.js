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


//-----------------------------deleteMany


// use("colch_star")
// db.Proveedor.deleteMany({nombre:"Suzanne",telefono:"1-229-517-2745 x840"});


// use("colch_star")
// db.Compra.deleteMany({total_compra: 853125,fk_detalleCompra:1914});


// use("colch_star")
// db.cliente.deleteMany({nombre:"Sunny",apellido:"Hansen"});






// ------------------------deleteOne----------



// async function EliminarPropiedad(nombrePropiedad){
 
//     const client = new MongoClient(url);

//     try{

//     await client.connect();
//     const result= client.db("colch_star").collection("cliente").deleteOne
//     ({
//     email:nombrePropiedad});
//     console.log(`${(await result).deletedCount} propieda(des) fue(ron) eliminadas`);
    



//     }catch(e){
//         console.error(e); 
//     }finally{

//     await client.close();
//     }
// }




// eliminar de la coleccion Compra
//  EliminarPropiedad(418088)

// eliminar de la coleccion Proveedor
//   EliminarPropiedad("South Rudyborough")

// eliminar de la coleccion cliente
//  EliminarPropiedad("Reba_Gutmann@hotmail.com")

