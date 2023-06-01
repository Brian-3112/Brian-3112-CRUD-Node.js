//----CREACION DE LA BASE DE DATOS y Colecciones
use("colch_star")

//-- ---------------CREACION DE LA COLECCION DE PROVEEDOR---


//     db.createCollection('Proveedor', {
//     validator: {
//         $jsonSchema: {
//             bsonType: "object", 
//             title: " validación de Proveedor",
//             required: [
//               "id_proveedor",
//               "nombre",
//               "telefono",
//               "direccion",
//               "contacto",
//               "estado",
//             ],
//             properties: {
//               id_proveedor: {
//                     bsonType: 'int',
//                     description:
//                         'Identificador único para el proveedor y es requerido',
//                 },
//                 nombre: {
//                     bsonType: 'string',
//                     description: 'Nombre es un string y es requerido',
//                 },
//                 telefono: {
//                     bsonType: 'string',
//                     description: 'telefono es un string y es requerido',
//                 },
//                 direccion: {
//                     bsonType: 'string',
//                     description: 'direccion es un string y no es requerido',
//                 },
//                 contacto: {
//                     bsonType: 'string',
//                     description: 'contacto es un string y no es requerido',
//                 },
//                 estado: {
//                     bsonType: 'bool',
//                     description: 'el estado es un booleano y es requerido',
//                 },
//             },
//         },
//     },
// });



//----------------------- CREACION DE LA COLECCION DE Compra---

// db.createCollection('Compra', {
//     validator: {
//         $jsonSchema: {
//             bsonType: "object", 
//             title: " validación de Compra",
//             required: [
//               "id_compra",
//               "total_compra",
//               "fecha",
//               "estado",
//               "fk_detalleCompra",
            
//             ],
//             properties: {
//               id_compra: {
//                     bsonType: 'int',
//                     description:'Identificador único para la compra y es requerido',
//                 },
//                 total_compra: {
//                     bsonType: 'int',
//                     description: 'total_compra es un int y es requerido',
//                 },
//                 fecha: {
//                     bsonType: 'string',
//                     description: 'fecha es un string y no es requerido',
//                 },
//                 estado: {
//                     bsonType: 'bool',
//                     description: 'estado es un booleano y no es requerido',
//                 },
//                 fk_detalleCompra: {
//                     bsonType: 'int',
//                     description: 'deatlleCompra es un int y es requerido',
//                 },
//             },
//         },
//     },
// });




//----------------------- CREACION DE LA COLECCION DE cliente---


// db.createCollection('cliente', {
//         validator: {
//             $jsonSchema: {
//                 bsonType: 'object',
//                 title: 'Objeto validación de cliente',
//                 required: [
//                     'id_cliente',
//                     'nombre',
//                     'telefono',
//                     'direccion',
//                     'estado',
//                 ],
//                 properties: {
//                     id_cliente: {
//                         bsonType: 'int',
//                         description:
//                             'Identificador único para el cliente y es requerido',
//                     },
//                     nombre: {
//                         bsonType: 'string',
//                         description: 'Nombre es un string y es requerido',
//                     },
//                     telefono: {
//                         bsonType: 'string',
//                         description: 'Nombre es un string y es requerido',
//                     },
//                     email: {
//                         bsonType: 'string',
//                         description: 'email es un string y no es requerido',
//                     },
//                     direccion: {
//                         bsonType: 'string',
//                         description: 'email es un string y no es requerido',
//                     },
//                     estado: {
//                         bsonType: 'bool',
//                         description: 'el estado es un booleano y es requerido',
//                     },
//                 },
//             },
//         },
//     });

    
// /--------------------- CREACION DE LA COLECCION DE DetalleCompra---

  
//   db.createCollection("DetalleCompra",{
//     validator:{
//       $jsonSchema:{
//         bsonType:"object",
//         title: "objeto  validación DetalleCompra",
//         required:[
//           "id_detalleCompra",
//           "cantidadPrenda",
//           "cantidadDiseño",
//           "precioPrenda",
//           "precioDiseño",
//           "fk_prenda",
//           "fk_diseño",
//           "fk_compra"],
//         properties:{
  
//           id_detalleCompra:{
//             bsonType:"int",
//             description:"identificador unico para el DetalleCompra"
            
//           },
//           cantidadPrenda:{
//             bsonType:"int",
//             description:"cantidad de la prendas"
            
//           },
//           cantidadDiseño:{
//             bsonType:"int",
//             description:"cantidad de diseños "
            
//           },
//           precioPrenda:{
//             bsonType:"int",
//             description:"precio de prendas  "
            
//           },
//           precioDiseño:{
//             bsonType:"int",
//             description:"precio de diseños  "
            
//           },
//           fk_prenda:{
//             bsonType:"int",
//             description:"llave foranea de prenda  "
            
//           },
//           fk_diseño:{
//             bsonType:"int",
//             description:"llave foranea de diseño  "
            
//           },
//           fk_compra:{
//             bsonType:"int",
//             description:"llave foranea de compra  "
            
//           },
  
  
//         }
  
//       }
//     }
  
  
//   })


//-------------$limit y sort---------------


//limit para la coleccion proveedor
// db.Proveedor.find({estado:true},{"id_proveedor":true,"nombre":true,"estado":true}).limit(5)


//limit para la coleccion Compra
// db.Compra.find({"total_compra":{$gte: 689012}}).limit(5)


//limit para la coleccion cliente
//  db.cliente.find({"direccion":"Vallejo"},{"direccion":true}).limit(1)

//limit para la coleccion DetalleCompra
// db.DetalleCompra.find({"cantidadDiseño": { $gte: 50 }}).limit(2)



//sort coleccion Proveedor
// db.Proveedor.find().sort({"nombre": 1})


//sort coleccion Compra
// db.Compra.find().sort({"total_compra": -1})

//sort coleccion cliente
//  db.cliente.find().sort({"direccion": -1})

//sort coleccion DetalleCompra
// db.DetalleCompra.find().sort({"cantidadDiseño": -1})


//------------------------- unwind

// db.cliente.aggregate([
//   {
//     $unwind: "$nombre"
//   },
//   {
//     $sort: {
//       nombre: 1
//     }
//   },
  
// ])


//---------------------------------lookup.-----------------------

// se esta haciendo una relacion de dos coleeciones por el estado
//que tengan igual estado tambien se especifcan que campos traer
//por medio de project  y por medio de match se crea una codicion que
// diga que traiga todos los total compra maypr o igual a 200000

// db.Compra.aggregate([
//     {$lookup: {
//       from: "Proveedor",
//       localField: "estado",
//       foreignField: "estado",
//       as: "Proveedor"
//     }

//     },{
//         $project: {
//           id_compra:1,
//           total_compra:1,
//           estado:1,
//           Proveedor:{
//             id_proveedor:1,
//             nombre:1,
//             contacto:1,
//             estado:1
            
//           }
          
//         }
//     },{$match: { total_compra: { $gte: 200000 } }}

    
// ])


//relacion(lookup) entre la coleccion de proveedores y clientes por el nombre y  otra relacion(lookup) entre
// la coleccion de compra y cliente por el estado

// db.Proveedor.aggregate([
//     {
//        $lookup:
//           {
//             from: "cliente",
//             localField: "nombre",
//             foreignField: "nombre",
//             as: "cliente"
//           }
//     },
//     {
//       $limit: 1
//    },
//     {
//         $lookup:
//            {
//              from: "Compra",
//              localField: "cliente.estado",
//              foreignField: "estado", 
//              as: "Compra"
//            }
//      },
//      {
//       $limit: 1
//    }
    
//  ])



//-----------------------------pipelines

//se esta diciendo cuantas personas hay por cada ciudad  se le hace un orden de mayor a menor
// y se limitan la cantidad de documentos

// db.Proveedor.aggregate([
//   {
//      $group: {
//         _id: "$direccion",
//         cantidad: { $sum: 1 }
//      }
//   },
//   {
//      $sort: { cantidad: -1 }
//   },
//   {
//      $limit: 5
//   }
// ])


//

// db.Proveedor.aggregate([
//    {
//       $group: {
//          _id: "$nombre",
//          cantidad: { $sum: 1 }
//       }
//    },
//    {
//       $sort: { cantidad: -1 }
//    },
//    {
//       $limit: 4
//    },
   
//  ])



// db.Compra.aggregate([
//    {
//       $match: { total_compra: { $gte: 500000 } }
//    },
//    {
//       $sort: { cantidad: -1 }
//    },
//    {
//       $limit: 3
//    },
   


// ])

// db.DetalleCompra.aggregate([
//    {
//       $match: { precioPrenda: { $lte: 3000 } }
//    },
//    {
//       $sort: { cantidad: -1 }
//    },
//    {
//       $limit: 3
//    },{

//     $project: {
//       cantidadPrenda:1,
//       precioPrenda:1
//     }


//    }


// ])



