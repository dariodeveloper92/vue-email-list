/*Esercizio:
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.*/

// Vue js

Vue.config.devtools = true; // scrivere per attivare l'estenzione sul browser

const app = new Vue ({
    el: '#app',
    data: {
        emails: [], //array vuota
    },
    mounted() {
        for( i = 0; i < 10; i++) {  // Ciclo per 10 volte axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail') //API mail
            .then((response) => {   //response contiene la stringa della mail
                console.log(response.data.response) // E'la mail

               this.emails.push(response.data.response); // metodo PUSH: pusho le mail all'inerno dell'Array emails vuoto
                console.log(this.emails);
            });
    }}
}) 

/*Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati.*/