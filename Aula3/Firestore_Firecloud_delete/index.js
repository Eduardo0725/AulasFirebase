const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.Deletar = functions.https.onRequest(async (req, res) => {
    const arquivo = req.query.codigo;
    const db = admin.firestore();

    db.collection("GreatDevs").get().then(function (querySnapshot) {
        valor = false;
        querySnapshot.forEach(function (doc) {
            if (doc.id == arquivo) {
                doc.ref.delete();
                valor = true;
                return res.send("<strong>Seu arquivo foi removido: " + doc.id + "</strong>");
            }
        })
        if (valor == false) {
            return res.send("<strong>Não foi possível remover o arquivo: " + arquivo + "<strong>");
        }
    })

});