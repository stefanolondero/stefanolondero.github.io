const csvData =
`
    Batman (2008),✅,10
    Her,✅,9.8
    Ready Player One,✅,9.8
    Past Lives,✅,9.7
    Nightcrawler,✅,9.7
    The Creator,✅,9.6
    Transformers - La vendetta del caduto (2009),✅,9.5
    Transformers - L'ultimo cavaliere (2017),✅,9.5
    Everything everywhere all at once,✅,9.5
    Whiplash,✅,9.5
    Parasite,✅,9.5
    Shutter Island,✅,9.5
    WALL-E,✅,9.5
    Venom,✅,9.4
    Transformers 4 - L'era dell'estinzione (2014),✅,9.4
    The Martian,✅,9.3
    The Truman Show,✅,9.3
    Baby Driver,✅,9.3
    Cars 3,✅,9.2
    Joker,✅,9.2
    The Pale Blue Eye,✅,9.2
    The Menu,✅,9.2
    Project X - Una festa che spacca,✅,9.1
    The Secret Life of Walter Mitty,✅,9.1
    Memento,✅,9.1
    Mad Max: Fury Road,✅,9.1
    Prey,✅,9.1
    Transformers 3 (2011),✅,9
    In time,✅,9
    Passengers,✅,9
    Greenbook,✅,9
    Aliens (1986),✅,8.99
    Batman (2022),✅,8.99
    Cars 1,✅,8.9
    Eternal Sunshine of the Spotless Mind,✅,8.9
    Into the wild,✅,8.9
    Oppenheimer,✅,8.7
    Tetris,✅,8.7
    The Grand Budapest Hotel,✅,8.7
    Fight Club,✅,8.7
    The machinist,✅,8.6
    The Big Short,✅,8.6
    Now You See Me - I maghi del crimine,✅,8.5
    John Wick,✅,8.5
    Interstellar,✅,8.5
    Alien (1979),✅,8.4
    Transformers (2007),✅,8.4
    Elemental,✅,8.39
    Uncharted,✅,8.23
    Fantastic Mr. Fox,✅,8.1
    Viaggio al centro della terra,✅,8.1
    "The Imitation Game ",✅,8.1
    Arrival,✅,8
    Edge of Tomorrow,✅,8
    Taxxi,✅,8
    Top Gun: Maverick,✅,8
    Venom - Let There Be Carnage,✅,7.9
    The Whale,✅,7.9
    Le otto Montagne,✅,7.9
    Tenet,✅,7.9
    The Gray Man,✅,7.9
    Midsommar,✅,7.9
    A Dog's Purpose,✅,7.85
    Wedding Daze,✅,7.8
    Taxi Driver,✅,7.3
    American Psycho,✅,7.2
    No Hard Feelings,✅,7.1
    Barbie,✅,7.1
    Inception,✅,7.1
    Cars 2,✅,7
    Interceptor,✅,6.9
    Dream Scenario,✅,6.85
    Spiderhead,✅,6.8
    Lost in Translation / L'amore tradotto,✅,6.5
    Painkiller,✅,6.4
    The Lighthouse,✅,6.4
    Aftersun,✅,6.1
    Viaggio nell'isola misteriosa,✅,5.2
    Gio gio Rabbit,✅,4.7
    The Social Network,✅,4
    Star Wars: L'ascesa di Skywalker,⌚,
    Star Wars: Gli ultimi Jedi,⌚,
    Star Wars: Il risveglio della Forza,⌚,
    Star Wars: Episodio III - La vendetta dei Sith,⌚,
    "Pirati dei Caraibi - La vendetta di Salazar",⌚,
    "Pirati dei Caraibi - Oltre i confini del mare",⌚,
    "Pirati dei Caraibi - Ai confini del mondo",⌚,
    "Pirati dei Caraibi - La maledizione del forziere fantasma",⌚,
    La maledizione della prima luna,⌚,
    Money Shot: The Pornhub Story,⌚,
    Normal People,⌚,
    Patch Adams,⌚,
    The Gangster - The Cop - The Devil,⌚,
    The Revenant,⌚,
    Alien - Prometheus (2012),⌚,
    Alien - Covenant (2017),⌚,
    The Grinch,⌚,
    A hunting in Venice,⌚,
    Moneyball,⌚,

`;

// Split CSV data into rows and columns
const rows = csvData.trim().split('\n').map(row => row.split(','));


// Iterate through the CSV data and create table rows
rows.forEach((rowData, rowIndex) => {
    const row = document.createElement('tr');

// Add the existing cells for each column
rowData.forEach((cellData, index) => {
    const cell = document.createElement('td');

    if (index === 2) {                                  // Assuming "Score" column is at index 2
        const score = parseFloat(cellData.trim());
        const pill = document.createElement('span');
        pill.textContent = score.toFixed(1);
        pill.classList.add('pill2', 'green');
        cell.appendChild(pill);

        // Set background color based on the score value
        if (score >= 7.0 && score <= 10) {
            cell.style.backgroundColor = '#3CB371';
        } else if (score >= 6.0 && score < 7) {
            cell.style.backgroundColor = '#FFF176';
        } else if (score < 6.0) {
            cell.style.backgroundColor = '#ff6961';
        }
        cell.style.textAlign = 'center';
        cell.style.fontWeight = '600';
        
    } else if (cellData.trim() === '✅') {
        const pill = document.createElement('span');
        pill.textContent = 'Watched';
        pill.classList.add('pill1', 'purple');
        cell.appendChild(pill);
    } else if (cellData.trim() === '⌚') {
        const pill = document.createElement('span');
        pill.textContent = 'To be watched';
        pill.classList.add('pill1', 'yellow');
        cell.appendChild(pill);
    } else {
        cell.textContent = cellData.trim();
    }

    row.appendChild(cell);
});

    tableBody.appendChild(row);
});

