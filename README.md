Laravel Boolfolio - API
===

### Milestone 1
nome repo 1: laravel-api    
Aggiungiamo al nostro progetto Laravel una nuovo **Api/ProjectController**.     
Questo controller risponderà a delle richieste via API e si occuperà di restituire la lista dei progetti presenti nel database in formato json.   

### Milestone 2
Testiamo la chiamata API tramite Postman o Thunder Client e assicuriamoci di ricevere i dati correttamente.   

### Milestone 3
nome repo 2: vite-boolfolio   
Iniziamo ad occuparci della parte front-office della nostra applicazione: creiamo un nuovo progetto Vue 3 con Vite e installiamo axios.   
Colleghiamo questo progetto ad una repo separata.   

### Milestone 4
Nel componente principale della nostra Vue App facciamo una chiamata API all’endpoint costruito nel progetto Laravel (milestone 1) e recuperiamo tutti i progetti dal nostro back-end.    
Stampiamo in console i risultati e verifichiamo di ricevere i dati correttamente.   

### Milestone 5
Creiamo un nuovo componente ProjectCard, che corrisponde ad una card per visualizzare un progetto. Utilizziamo questo componente per visualizzare tutti i progetti ricevuti tramite API.    

### Bonus
Gestire la paginazione dei risultati

### Milestone 6 
Aggiungere il vue router al frontend (home, about, progetti, contatti)    
nella rotta progetti chiamare l’API vista ieri e stampare la lista dei progetti     
nel backend creare una nuova API che esponga un singolo progetto in base allo slug passato come paramentro    
creare una rotta che riceva dinamicamente lo slug e che stampi il progetto fornito dall’API   

### Bounus 1
Se il progetto con un determinato slug non è presente reindirizzare alla pagina 404

### Bonus 2
L’API che espone il singolo progetto fornisce anche la url del percorso assoluto dell’immagine (se presente) che poi viene stampata nel front
