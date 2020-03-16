console.dir(firebase);
const db = new FirestoreFeatures(firebase);

Usuario = {
    Usuario: {
        first: "Usuario",
        last: "Usuario",
        born: 0000
    }
};

db.criaColecao("GreatDevs", Usuario);
db.recuperaColecao("GreatDevs");