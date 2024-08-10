# File Analyzer

## Introduzione
File Analyzer è un'applicazione Node.js che permette di caricare un file di testo e analizzarne il contenuto, mostrando informazioni come il numero di parole, lettere, spazi e parole ripetute.

## Requisiti
- Node.js v14 o superiore
- npm v6 o superiore

## Installazione

1. **Clona il repository:**
    ```bash
    git clone https://github.com/domenicod25/counter-parole.git
    cd counter-parole
    ```

2. **Installa le dipendenze:**
    ```bash
    npm install
    ```

3. **Compila il codice TypeScript:**
    ```bash
    npm run build
    ```

## Esecuzione

1. **Avvia il server:**
    ```bash
    npm start
    ```

2. **Accedi all'applicazione tramite browser:**
    Apri il browser e vai su [http://localhost:3000](http://localhost:3000)

## Sviluppo

Per eseguire il server in modalità di sviluppo, con ricaricamento automatico dei file TypeScript, utilizza:

```bash
npm run start:dev 
```

## Utilizzo

1. Trascina un file di testo nell'area di caricamento o clicca per selezionare un file.
2. Visualizza i risultati direttamente sulla pagina.

## Architettura e Design

- **Model-View-Controller (MVC)**: Il progetto segue una struttura MVC con Express come controller, HTML/JavaScript come vista e `utils.ts` come modello per l'elaborazione dei dati.

## Testing

Esegui i test:
```bash
npm test
