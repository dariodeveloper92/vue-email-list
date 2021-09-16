/*Esercizio:
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.*/

// Vue js

Vue.config.devtools = true; // scrivere per attivare l'estenzione sul browser

const app = new Vue ({
    el: '#app',
    data: {
        emails: [   //Array
            'dario.rossi@alice.it',
            'aldo.baglio@alice.it',
            'giacomo.poretti@alice.it',
            'giovanni.storti@alice.it',
            'salvatore.ficarra@alice.it',
            'valentino.picone@alice.it',
            'tony.sperandeo@alice.it',
            'sergio.friscia@alice.it',
            'leo.gullotta@alice.it',
            'antonio.catania@alice.it',
        ],
    },
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/int')
            .then((result) => {
                console.log(result.data)
            });
    }
}) 



/*Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati.*/