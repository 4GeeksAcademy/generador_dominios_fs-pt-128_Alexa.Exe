let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'morantes','racoon'];
let domain = ['com', 'net', 'io', 'er', 'es']

//slice substr

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < domain.length; l++) {

                let url = pronoun[i] + adj[j] + noun[k];
                if (url.endsWith(domain[l])) {
                    let newurl = url.slice(0, (url.length - domain[l].length));
                    console.log(newurl + "." + domain[l]); //domain l para recorrer cada index del array

                } else console.log(pronoun[i] + adj[j] + noun[k] + "." + domain[l]);
                //con el "+" concatenamos la fucnión en una sola oración       

            }
        }

    }

}

//proyecto hecho en conjunto...dedicado a los tutores Robert y Carlos, y obvio al profe, Javi.
