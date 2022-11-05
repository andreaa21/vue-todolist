/*

**Descrizione:**
Rifare l’esercizio della to do list.
Ogni todo sarà un oggetto, formato da due proprietà:
- `text`, una stringa che indica il testo del todo
- `done`, un booleano (true/false) che indica se il todo è stato fatto oppure no
Steps:
1. avere un elenco di task da fare o fatti
2. stamparli in pagina
3. al click del task fare il toggle del task fatto o meno
4. al click della croce eliminare il task se fatto, altrimenti scrivere un messaggio di errore
5. dopo aver scritto il task con invio o al click del bottone aggiungere il nuovo task (come non fatto) in cima all’elenco dei task
6. verificare la lunghezza minima del nuovo task
7. se l’elenco è vuoto non mostrare la lista ma mostrare il messaggio “Non ci sono task”

*/

const {createApp} = Vue;

createApp({
    data(){
        return{
            logoImg: 'img/logo.png',
            errorMsg: '',
            newTaskText: '',
            tasks:[
                {
                    text: 'Sviluppare un carousel con autoscroll',
                    done: false
                },
                {
                    text: 'Portare a spasso il cane',
                    done: false
                },
                {
                    text: 'Altra cosa da fare che non mi viene in mente',
                    done: false
                },
                {
                    text: 'taskk',
                    done: false
                }
            ]
        }
    },
    methods: {
        deleteTask(index){
            this.errorMsg = '';
            if(this.tasks[index].done){
                this.tasks.splice(index,1)
            }else{
                this.errorMsg = "Puoi eliminare un task solo se è stato fatto!"
            }
        },
        addNewTask(){
            this.errorMsg = '';
            if(this.newTaskText.length < 5){
                this.errorMsg = 'Inserisci un task (almeno 5 caratteri)'
            }else {
                const newTask = 
                {
                    text: this.newTaskText,
                    done:false
                }
                this.tasks.unshift(newTask);
                this.newTaskText = '';
            }   
        }
    }
}).mount('#app')



