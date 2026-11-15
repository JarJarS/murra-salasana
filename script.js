const anonImages = [
    "images/ano1.jpg",
    "images/ano2.jpg",
    "images/ano3.jpg",
    "images/ano4.jpg",
    "images/ano5.jpg",
    "images/hack1.jpg",
    "images/hack2.jpg"
];

const profiles = [
    {
        bio: "<b>@Veeti_09</b><br>Moikka! Syntynyt 2011. Paras peli ikinä on Fortnite. Kotona haukkuu Musti-koira.",
        password: "Musti2011",
        words: ["Musti", "2011", "Fortnite", "Veeti", "09", "Koira", "1234", "Salasana", "Kissa"]
    },
    {
        bio: "<b>@Aada_Gym</b><br>15v | Treenaan salilla 4x viikossa. Lemppari bändi Coldplay ja lempiväri Pinkki!",
        password: "Coldplay15",
        words: ["Coldplay", "15", "Aada", "Pinkki", "Gym", "2026", "Bändi", "Sali", "0000"]
    },
    {
        bio: "<b>@MopoMestari</b><br>Alla kiiltää Derbi ja tallissa soi JVG. Kotikaupunki Jyväskylä. Synttärit 05.05.",
        password: "DerbiJVG",
        words: ["Derbi", "JVG", "Jyväskylä", "0505", "Mopo", "2010", "Koulu", "Kesä", "123"]
    },
    {
        bio: "<b>@LätkäJätkä99</b><br>Jääkiekko on elämä! Pelinumero #14 ja suosikkijoukkue JYP. Koulun jälkeen pleikkaria.",
        password: "JYP14",
        words: ["JYP", "14", "99", "Lätkä", "Kiekko", "Pleikkari", "2026", "Maali", "Jää"]
    },
    {
        bio: "<b>@LunaDraws</b><br>Piirrän animea ja kuuntelen K-poppia. Mun kissa on nimeltään Nöpö ja asun Helsingissä.",
        password: "NöpöAnime",
        words: ["Nöpö", "Anime", "Luna", "Kissa", "Helsinki", "Kpop", "Piirros", "1234", "2012"]
    },
    {
        bio: "<b>@RoniGaming</b><br>CS2 ja Minecraft tulilla joka ilta! Olen 15v ja syntynyt kesäkuussa 2011.",
        password: "Minecraft2011",
        words: ["Minecraft", "2011", "CS2", "Roni", "15", "Kesäkuu", "Peli", "Ilta", "007"]
    },
    {
        bio: "<b>@Ella_Equestrian</b><br>Ratsastus ❤️ Paras heppa tallilla on Myrsky. Kotipaikka Kuopio ja ikää 14v.",
        password: "Myrsky14",
        words: ["Myrsky", "14", "Ella", "Kuopio", "Heppa", "Talli", "2012", "Ratsastus", "123"]
    },
    {
        bio: "<b>@Skeitti_Oskari</b><br>Skeittaan kesät talvet. Lempparimerkki Thrasher ja syntymävuosi 2010.",
        password: "Thrasher2010",
        words: ["Thrasher", "2010", "Oskari", "Skeitti", "Kesä", "Talvi", "16", "Laudat", "999"]
    },
    {
        bio: "<b>@SofiaMusic</b><br>Soitan pianoa ja kuuntelen Taylor Swiftiä 24/7. Lempivuodenaika on Kesä!",
        password: "TaylorKesä",
        words: ["Taylor", "Kesä", "Sofia", "Piano", "Swift", "Musiikki", "247", "15", "Laulu"]
    },
    {
        bio: "<b>@Eetu_Tech</b><br>Rakennan oman pelikoneen! Näyttiksenä RTX4060 ja prossuna Ryzen. Asun Tampereella.",
        password: "RTX4060Tampere",
        words: ["RTX4060", "Tampere", "Eetu", "Ryzen", "Kone", "Peli", "2026", "Tech", "1234"]
    },
    {
        bio: "<b>@Iida_Dance</b><br>Tanssin hiphoppia! Synttärit 12.10. ja kotona odottaa maailman söpöin pupu Pörrö.",
        password: "Pörrö1210",
        words: ["Pörrö", "1210", "Iida", "Hiphop", "Pupu", "Tanssi", "2011", "Söpö", "0000"]
    },
    {
        bio: "<b>@Kalle_Kalastaja</b><br>Viikonloput järvellä virvelin kanssa. Ennätys-hauki 8kg! Kotikaupunki Mikkeli.",
        password: "Hauki8kg",
        words: ["Hauki", "8kg", "Kalle", "Mikkeli", "Järvi", "Virveli", "Kala", "2010", "Kesä"]
    },
    {
        bio: "<b>@Nelli_Baker</b><br>Leivon maailman parhaat korvapuustit! Lempparijäätelö on Suklaa ja ikää 15 vuotta.",
        password: "Suklaa15",
        words: ["Suklaa", "15", "Nelli", "Korvapuusti", "Jäätelö", "Leivonta", "2011", "123", "Kakku"]
    },
    {
        bio: "<b>@Joonas_Fudis</b><br>Jalkapalloa 10 vuotta takana. Suosikkipelaaja Messi ja pelipaidan numero 10.",
        password: "Messi10",
        words: ["Messi", "10", "Joonas", "Fudis", "Maali", "Pallo", "2010", "15", "Kenttä"]
    },
    {
        bio: "<b>@Venla_Art</b><br>Maalaan akvarelleja ja rakastan kahvia. Kissa nimeltä Laku nukkuu aina pöydällä.",
        password: "LakuKahvi",
        words: ["Laku", "Kahvi", "Venla", "Kissa", "Taide", "Maali", "2011", "14", "Pöytä"]
    },
    {
        bio: "<b>@Mikko_Motocross</b><br>Radalla KTM 125cc alla! Syntynyt 2010 ja asun Oulussa.",
        password: "KTM2010",
        words: ["KTM", "2010", "Mikko", "Oulu", "125cc", "Rata", "Crossi", "16", "Bensa"]
    },
    {
        bio: "<b>@Sara_Reader</b><br>Luen fantasiaa yötä päivää. Paras kirjasarja on Harry Potter ja lempiväri Vihreä.",
        password: "PotterVihreä",
        words: ["Potter", "Vihreä", "Sara", "Harry", "Kirja", "Fantasia", "2011", "Taika", "15"]
    },
    {
        bio: "<b>@Aleksi_Coder</b><br>Koodaan Pythonilla ja Javalla. Haaveena tieto- ja viestintätekniikan perustutkinto! Ikä 15.",
        password: "Python15",
        words: ["Python", "15", "Aleksi", "Java", "Koodi", "Amis", "2026", "Tietokone", "101"]
    },
    {
        bio: "<b>@Emilia_Photos</b><br>Valokuvaan luontoa Canon-kameralla. Lempparipaikka on Lappi ja syntymävuosi 2011.",
        password: "CanonLappi",
        words: ["Canon", "Lappi", "Emilia", "2011", "Kuva", "Luonto", "Kamera", "15", "Talvi"]
    },
    {
        bio: "<b>@Tuomas_Sähly</b><br>Salibandy maalivahti! Torjun kaiken. Kotikaupunki Lahti ja pelinumero 33.",
        password: "Lahti33",
        words: ["Lahti", "33", "Tuomas", "Sähly", "Maali", "Maila", "2010", "16", "Pallo"]
    },
    {
        bio: "<b>@Olivia_Travel</b><br>Unelmakohde on Tokio! Opiskelen japania ja lempiruoka on Sushi. Synttärit 2011.",
        password: "TokioSushi",
        words: ["Tokio", "Sushi", "Olivia", "2011", "Japani", "Matka", "15", "Ruoka", "Lentokone"]
    },
    {
        bio: "<b>@Kasper_Cars</b><br>Tuleva automekaanikko! Unelma-auto on BMW M3. Kotona haukkuu Rex-koira.",
        password: "BMWKoira",
        words: ["BMW", "Koira", "Kasper", "Rex", "M3", "Auto", "2010", "Talli", "1234"]
    },
    {
        bio: "<b>@Hanna_Swim</b><br>Uin kilpaa 5 kertaa viikossa. Paras laji on Vapaauinti ja ikää 14 vuotta.",
        password: "Vapaauinti14",
        words: ["Vapaauinti", "14", "Hanna", "Uinti", "Allas", "Vesi", "2012", "Kisa", "100m"]
    },
    {
        bio: "<b>@Leevi_Beats</b><br>Teen omia biittejä FL Studiolla. Kuuntelen räppiä ja asun Turussa. Syntynyt 2010.",
        password: "Turku2010",
        words: ["Turku", "2010", "Leevi", "Biitti", "Räppi", "Studio", "16", "Musiikki", "808"]
    },
    {
        bio: "<b>@Pinja_Nature</b><br>Partiolainen henkeen ja vereen! Paras retkiruoka on Makkaraperunat ja lempiväri Sininen.",
        password: "PartioSininen",
        words: ["Partio", "Sininen", "Pinja", "Retki", "Metsä", "Teltta", "2011", "15", "Nuotio"]
    },
    {
        bio: "<b>@AinoGarden</b><br>Kasvatan parvekkeella tomaatteja ja lempikukkani on tulppaani.",
        password: "TomaattiTulppaani",
        words: ["Tomaatti", "Tulppaani", "Aino", "Puutarha", "Kasvi", "Kesä", "Kastelu", "1234", "Vihreä"]
    },
    {
        bio: "<b>@NooaBoard</b><br>Rullalautailu on parasta, ja aloitin uuden harrastuksen vuonna 2025.",
        password: "Rullalauta2025",
        words: ["Rullalauta", "2025", "Nooa", "Temppu", "Kypärä", "Parkki", "Kesä", "Lauta", "777"]
    },
    {
        bio: "<b>@MeriUkulele</b><br>Soitan ukulelea ja teen usein mangosmoothieta treenien jälkeen.",
        password: "UkuleleMango",
        words: ["Ukulele", "Mango", "Meri", "Musiikki", "Smoothie", "Kitara", "Nuotti", "15", "Kesä"]
    },
    {
        bio: "<b>@OlliKeittiossa</b><br>Paras ruoka on pasta pestokastikkeella. Kokeilen mielelläni uusia reseptejä.",
        password: "PastaPesto",
        words: ["Pasta", "Pesto", "Olli", "Resepti", "Keittiö", "Juusto", "Kokkaus", "123", "Lautanen"]
    },
    {
        bio: "<b>@SiniLukee</b><br>Luettava suosikkini on Hobitti, ja kotona minua odottaa Laku-kissa.",
        password: "HobittiLaku",
        words: ["Hobitti", "Laku", "Sini", "Kirja", "Kissa", "Lukeminen", "Fantasia", "14", "Kirjasto"]
    },
    {
        bio: "<b>@TeemuRetkeilee</b><br>Retkillä mukana ovat aina teltta ja nuotiotarvikkeet.",
        password: "TelttaNuotio",
        words: ["Teltta", "Nuotio", "Teemu", "Retki", "Metsä", "Makuupussi", "Kartta", "Kesä", "1234"]
    },
    {
        bio: "<b>@KerttuKoodaa</b><br>Rakennan pientä robottia ja harjoittelen Python-ohjelmointia.",
        password: "RobottiPython",
        words: ["Robotti", "Python", "Kerttu", "Koodi", "Tietokone", "Ohjelmointi", "Anturi", "101", "Peli"]
    },
    {
        bio: "<b>@JereFutis</b><br>Kannatan FC Interiä ja pelaan itsekin jalkapalloa numerolla 7.",
        password: "FCInter7",
        words: ["FCInter", "7", "Jere", "Jalkapallo", "Pallo", "Maali", "Turku", "Paita", "2012"]
    },
    {
        bio: "<b>@LumiKuvaa</b><br>Valokuvaan luontoa ja haaveilen retkestä Lappiin.",
        password: "KameraLappi",
        words: ["Kamera", "Lappi", "Lumi", "Valokuva", "Luonto", "Retki", "Canon", "Talvi", "123"]
    },
    {
        bio: "<b>@RoopeCraft</b><br>Rakennan Minecraftissa timanttilinnan ystävieni kanssa.",
        password: "MinecraftTimantti",
        words: ["Minecraft", "Timantti", "Roope", "Rakennus", "Linna", "Peli", "Ystävät", "2025", "Craft"]
    },
    {
        bio: "<b>@ElsaTanssii</b><br>Tanssin balettia ja tähtiesitykseni on kevään näytöksessä.",
        password: "BalettiTähti",
        words: ["Baletti", "Tähti", "Elsa", "Tanssi", "Esitys", "Musiikki", "Puku", "Kevät", "14"]
    },
    {
        bio: "<b>@OnniJaRoki</b><br>Perheen koira Roki täytti viime vuonna kymmenen vuotta.",
        password: "Roki2014",
        words: ["Roki", "2014", "Onni", "Koira", "Lelu", "Lenkki", "Ruoka", "Pentu", "1234"]
    },
    {
        bio: "<b>@MillaPiirtää</b><br>Piirrän vesiväreillä usein kettuja ja muita metsän eläimiä.",
        password: "VesiväriKettu",
        words: ["Vesiväri", "Kettu", "Milla", "Piirros", "Metsä", "Taide", "Väri", "15", "Paperi"]
    },
    {
        bio: "<b>@EliasTiede</b><br>Avaruus kiinnostaa, ja Mars on mielestäni aurinkokunnan jännittävin planeetta.",
        password: "MarsAvaruus",
        words: ["Mars", "Avaruus", "Elias", "Planeetta", "Tähti", "Tiede", "Raketti", "2026", "Kuu"]
    },
    {
        bio: "<b>@HelmiLeipoo</b><br>Leivon pullaa, johon lisään aina reilusti kardemummaa.",
        password: "PullaKardemumma",
        words: ["Pulla", "Kardemumma", "Helmi", "Leivonta", "Taikina", "Kaneli", "Uuni", "Suklaa", "123"]
    },
    {
        bio: "<b>@VeeraMatkalla</b><br>Unelmoin Tokiosta ja haluaisin nähdä keväällä kirsikankukkia eli sakuroita.",
        password: "TokioSakura",
        words: ["Tokio", "Sakura", "Veera", "Japani", "Matka", "Kirsikka", "Juna", "2024", "Kaupunki"]
    },
    {
        bio: "<b>@MiroKitara</b><br>Opettelen kitaraa ja kuuntelen paljon Metallican kappaleita.",
        password: "KitaraMetallica",
        words: ["Kitara", "Metallica", "Miro", "Musiikki", "Riffi", "Bändi", "Nuotti", "15", "Keikka"]
    },
    {
        bio: "<b>@AlmaJaNaksu</b><br>Hamsterini Naksu rakastaa porkkanaa ja juoksupyöräänsä.",
        password: "NaksuPorkkana",
        words: ["Naksu", "Porkkana", "Alma", "Hamsteri", "Lemmikki", "Juoksupyörä", "Puru", "Koti", "1234"]
    },
    {
        bio: "<b>@JuliusPyorailee</b><br>Maastopyöräily on lempiharrastukseni ja paras reitti löytyy Kuusamosta.",
        password: "MaastopyöräKuusamo",
        words: ["Maastopyörä", "Kuusamo", "Julius", "Pyörä", "Reitti", "Metsä", "Kypärä", "Kesä", "2013"]
    },
    {
        bio: "<b>@OonaKukat</b><br>Kesällä kasvatan auringonkukkia ja ihailen niiden korkeutta.",
        password: "AuringonkukkaKesä",
        words: ["Auringonkukka", "Kesä", "Oona", "Kukka", "Puutarha", "Aurinko", "Kasvi", "15", "Vesi"]
    }
];

let timeLeft = 60;
let score = 0;
let currentTarget = null;
let currentAttempt = "";
let timerInterval = null;
let usedIndices = [];
const leaderboardStorageKey = "murraSalasanaLeaderboard";
const musicTracks = [
    { src: "audio/Locked_Behind_Glass.mp3", startTime: 33 },
    { src: "audio/Midnight_Overwrite.mp3", startTime: 25 },
    { src: "audio/Midnight_Override2.mp3", startTime: 38 },
    { src: "audio/Nine_Seconds_Left.mp3", startTime: 23 },
    { src: "audio/One_More_Credit.mp3", startTime: 48 },
    { src: "audio/Seconds_Before_The_Lock.mp3", startTime: 48 }
];
let backgroundMusic = document.getElementById("backgroundMusic");
let preloadedMusic = new Audio();
const musicToggle = document.getElementById("musicToggle");
const musicStatus = document.getElementById("musicStatus");
const volumeSlider = document.getElementById("volumeSlider");
const volumeValue = document.getElementById("volumeValue");
let musicMuted = false;
let activeMusicTrack = null;
let nextMusicTrack = null;
let lastMusicTrackIndex = -1;
preloadedMusic.preload = "auto";

document.getElementById("startBtn").addEventListener("click", startGame);
updateMusicVolume();
musicToggle.addEventListener("click", toggleMusic);
volumeSlider.addEventListener("input", updateMusicVolume);
prepareInitialMusicTrack();
renderLeaderboard("startLeaderboard");

function startGame() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    timeLeft = 60;
    score = 0;
    usedIndices = [];
    renderGameUI();
    nextProfile();

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timeDisplay").innerText = `Aikaa: ${timeLeft}s`;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
    startBackgroundMusic();
}

function endGame() {
    clearInterval(timerInterval);
    timerInterval = null;
    stopBackgroundMusic();
    backgroundMusic = preloadedMusic;
    preloadedMusic = document.getElementById("backgroundMusic");
    activeMusicTrack = nextMusicTrack;
    prepareNextMusicTrack();
    let scoreSaved = false;
    document.getElementById("gameBox").innerHTML = `
        <h1>Peli päättyi!</h1>
        <p>Murretut tilit: ${score}</p>
        <form class="score-form" id="scoreForm">
            <label for="playerName">Nimimerkki</label>
            <input id="playerName" name="playerName" type="text" maxlength="20" placeholder="Kirjoita nimimerkki" required>
            <button class="btn-start" type="submit">Tallenna tulos</button>
        </form>
        <p id="scoreMessage" class="score-message" role="status"></p>
        <div class="leaderboard" id="endLeaderboard"></div>
        <button class="btn-start" id="startBtn">Pelaa uudelleen</button>
    `;
    renderLeaderboard("endLeaderboard");
    document.getElementById("scoreForm").addEventListener("submit", event => {
        event.preventDefault();
        if (scoreSaved) {
            document.getElementById("scoreMessage").textContent = "Tulos on jo tallennettu tälle pelikerralle.";
            return;
        }

        const name = document.getElementById("playerName").value.trim();
        const message = document.getElementById("scoreMessage");

        if (!name) {
            message.textContent = "Kirjoita nimimerkki ennen tallentamista.";
            return;
        }

        if (saveScore(name, score)) {
            scoreSaved = true;
            document.getElementById("playerName").disabled = true;
            const saveButton = document.querySelector("#scoreForm button[type='submit']");
            saveButton.disabled = true;
            saveButton.textContent = "Tallennettu";
            message.textContent = "Tulos tallennettu.";
            renderLeaderboard("endLeaderboard");
        } else {
            message.textContent = "Tulosta ei voitu tallentaa selaimen paikalliseen tallennukseen.";
        }
    });
    document.getElementById("startBtn").addEventListener("click", startGame);
}

function startBackgroundMusic() {
    if (musicMuted) {
        return;
    }

    const playTrack = () => {
        if (musicMuted || !timerInterval) {
            return;
        }

        const startTime = activeMusicTrack.startTime;
        backgroundMusic.muted = true;
        const needsSeek = Math.abs(backgroundMusic.currentTime - startTime) > 0.1;
        const playbackPromise = backgroundMusic.play();
        let seekPromise = Promise.resolve();
        if (needsSeek) {
            seekPromise = new Promise(resolve => {
                backgroundMusic.addEventListener("seeked", resolve, { once: true });
                backgroundMusic.currentTime = startTime;
            });
        }

        Promise.all([playbackPromise, seekPromise])
            .then(() => {
                if (!timerInterval) {
                    stopBackgroundMusic();
                    return;
                }
                backgroundMusic.muted = musicMuted;
                musicStatus.textContent = "";
            })
            .catch(error => {
                backgroundMusic.muted = musicMuted;
                console.error("Taustamusiikin toisto ei käynnistynyt.", error);
                musicStatus.textContent = "Musiikki ei käynnistynyt. Tarkista selaimen ääniasetukset.";
            });
    };

    if (backgroundMusic.readyState > 0) {
        playTrack();
    } else {
        backgroundMusic.addEventListener("loadedmetadata", playTrack, { once: true });
    }
}

function stopBackgroundMusic() {
    backgroundMusic.pause();
    if (backgroundMusic.readyState > 0) {
        backgroundMusic.currentTime = activeMusicTrack.startTime;
    }
}

function selectNextMusicTrack() {
    const availableTracks = musicTracks
        .map((track, index) => ({ track, index }))
        .filter(({ index }) => index !== lastMusicTrackIndex);
    const next = availableTracks[Math.floor(Math.random() * availableTracks.length)];

    lastMusicTrackIndex = next.index;
    return next.track;
}

function prepareInitialMusicTrack() {
    activeMusicTrack = selectNextMusicTrack();
    backgroundMusic.src = activeMusicTrack.src;
    backgroundMusic.load();
    prepareNextMusicTrack();
}

function prepareNextMusicTrack() {
    nextMusicTrack = selectNextMusicTrack();
    preloadedMusic.volume = backgroundMusic.volume;
    preloadedMusic.muted = musicMuted;
    preloadedMusic.src = nextMusicTrack.src;
    preloadedMusic.load();
}

function toggleMusic() {
    musicMuted = !musicMuted;
    backgroundMusic.muted = musicMuted;
    preloadedMusic.muted = musicMuted;
    musicToggle.setAttribute("aria-pressed", String(!musicMuted));
    musicToggle.setAttribute(
        "aria-label",
        musicMuted ? "Ota taustamusiikki käyttöön" : "Mykistä taustamusiikki"
    );
    musicToggle.textContent = musicMuted ? "🔇 Musiikki mykistetty" : "🔊 Musiikki päällä";

    if (!musicMuted && timerInterval && backgroundMusic.paused) {
        startBackgroundMusic();
    }
}

function updateMusicVolume() {
    const volumePercent = Number(volumeSlider.value);
    backgroundMusic.volume = volumePercent / 100;
    preloadedMusic.volume = backgroundMusic.volume;
    volumeValue.value = `${volumePercent} %`;
}

function getLeaderboard() {
    try {
        const savedScores = localStorage.getItem(leaderboardStorageKey);
        if (!savedScores) {
            return [];
        }

        const parsedScores = JSON.parse(savedScores);
        if (!Array.isArray(parsedScores)) {
            throw new Error("Tallennettu tuloslista ei ole taulukko.");
        }

        return parsedScores
            .filter(entry =>
                entry &&
                typeof entry.name === "string" &&
                Number.isInteger(entry.score) &&
                entry.score >= 0
            )
            .sort((a, b) => b.score - a.score);
    } catch (error) {
        console.error("Top 5 -listaa ei voitu lukea.", error);
        return null;
    }
}

function saveScore(name, finalScore) {
    const scores = getLeaderboard();
    if (!scores) {
        return false;
    }

    scores.push({ name, score: finalScore });
    scores.sort((a, b) => b.score - a.score);

    try {
        localStorage.setItem(leaderboardStorageKey, JSON.stringify(scores));
        return true;
    } catch (error) {
        console.error("Tuloslistan tallentaminen epäonnistui.", error);
        return false;
    }
}

function renderLeaderboard(containerId) {
    const container = document.getElementById(containerId);
    const scores = getLeaderboard();
    container.innerHTML = "<h3>Top 10</h3>";

    if (!scores) {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Tuloslistaa ei voitu lukea selaimen tallennustilasta.";
        container.appendChild(errorMessage);
        return;
    }

    if (scores.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent = "Ei vielä tuloksia.";
        container.appendChild(emptyMessage);
        return;
    }

    const list = document.createElement("ol");
    list.className = "leaderboard-list";
    scores.slice(0, 10).forEach((entry, index) => {
        const item = document.createElement("li");
        const rank = document.createElement("span");
        const medal = ["🥇", "🥈", "🥉"][index];
        rank.className = "leaderboard-rank";
        rank.textContent = medal || `${index + 1}.`;
        if (index < 3) {
            item.classList.add(`leaderboard-rank-${index + 1}`);
            rank.setAttribute("aria-label", `${index + 1}. sija`);
        }

        const result = document.createElement("span");
        result.textContent = `${entry.name} — ${entry.score} tiliä`;
        item.append(rank, result);
        list.appendChild(item);
    });
    container.appendChild(list);
}

function renderGameUI() {
    document.getElementById("gameBox").innerHTML = `
        <div class="stats">
            <span id="timeDisplay">Aikaa: ${timeLeft}s</span>
            <span id="scoreDisplay">Murretut tilit: ${score}</span>
        </div>
        <div class="profile-container">
            <img id="profileImg" src="" alt="Kohde" class="profile-avatar" onerror="this.style.display='none'">
            <div class="profile-bio" id="profileBio"></div>
        </div>
        <div class="password-display" id="passwordDisplay">_</div>
        <div class="word-grid" id="wordGrid"></div>
        <button class="btn-action" id="clearBtn">Tyhjennä valinta</button>
    `;

    document.getElementById("clearBtn").addEventListener("click", clearAttempt);
}

function nextProfile() {
    currentAttempt = "";
    const display = document.getElementById("passwordDisplay");
    display.style.color = "#22c55e";
    display.innerText = "_";

    // Varmistetaan ettei sama profiili tule heti uudelleen
    if (usedIndices.length >= profiles.length) {
        usedIndices = [];
    }
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * profiles.length);
    } while (usedIndices.includes(randomIndex));

    usedIndices.push(randomIndex);
    currentTarget = profiles[randomIndex];

    // Vaihdetaan profiilikuva ja teksti
    const imgEl = document.getElementById("profileImg");
    imgEl.style.display = "block";
    imgEl.src = anonImages[Math.floor(Math.random() * anonImages.length)];
    document.getElementById("profileBio").innerHTML = currentTarget.bio;

    // Sekoitetaan sanat
    const shuffled = [...currentTarget.words].sort(() => Math.random() - 0.5);
    const grid = document.getElementById("wordGrid");
    grid.innerHTML = "";

    shuffled.forEach(word => {
        const btn = document.createElement("button");
        btn.innerText = word;
        btn.addEventListener("click", () => selectWord(word));
        grid.appendChild(btn);
    });
}

function selectWord(word) {
    currentAttempt += word;
    const display = document.getElementById("passwordDisplay");
    display.innerText = currentAttempt;

    if (currentAttempt === currentTarget.password) {
        score++;
        document.getElementById("scoreDisplay").innerText = `Murretut tilit: ${score}`;
        display.style.color = "#22c55e";
        setTimeout(nextProfile, 300);
    } else if (!currentTarget.password.startsWith(currentAttempt)) {
        display.style.color = "#ef4444";
        display.innerText = "Väärin!";
        setTimeout(clearAttempt, 400);
    }
}

function clearAttempt() {
    currentAttempt = "";
    const display = document.getElementById("passwordDisplay");
    if (display) {
        display.style.color = "#22c55e";
        display.innerText = "_";
    }
}