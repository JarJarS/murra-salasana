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
    },
    {
        bio: "<b>@SallaRetkeilee</b><br>Retkeilen Nuuksiossa ja teen retkiruokaa trangialla.",
        password: "NuuksioTrangia",
        words: ["Nuuksio", "Trangia", "Salla", "Retki", "Teltta", "Metsä", "Polku", "Kesä", "Kartta"]
    },
    {
        bio: "<b>@OttoKuvaa</b><br>Kuvaan luontoa kamerallani. Suosikkipaikkani on Saimaa.",
        password: "SaimaaKamera",
        words: ["Saimaa", "Kamera", "Otto", "Valokuva", "Luonto", "Järvi", "Maisema", "Kesä", "Kuva"]
    },
    {
        bio: "<b>@AinoKasvattaa</b><br>Kasvatan parvekkeella tomaatteja ja tuoksuvaa basilikaa.",
        password: "TomaattiBasilika",
        words: ["Tomaatti", "Basilika", "Aino", "Parveke", "Kasvi", "Puutarha", "Multa", "Kesä", "Ruukku"]
    },
    {
        bio: "<b>@EemeliPelaa</b><br>Meillä on perjantaisin lautapeli-ilta. Pelataan usein Catania.",
        password: "CatanPerjantai",
        words: ["Catan", "Perjantai", "Eemeli", "Lautapeli", "Peli-ilta", "Noppa", "Ystävät", "Strategia", "Peli"]
    },
    {
        bio: "<b>@NooraLuistelee</b><br>Talvella luistelen järven jäällä ja käyn usein Rovaniemen kentällä.",
        password: "LuisteluRovaniemi",
        words: ["Luistelu", "Rovaniemi", "Noora", "Jää", "Talvi", "Luistin", "Kenttä", "Kiekko", "Urheilu"]
    },
    ...[
        ["@AavaRevontuli", "Kävin Lapissa katsomassa revontulia ja kuvasin niitä koko illan.", "Lappi", "Revontuli", ["Aava", "Talvi", "Kamera", "Yö", "Pohjoinen", "Tähdet", "Retki"]],
        ["@EliasPurjehtii", "Purjehdin kesäisin Turun saaristossa vanhalla veneelläni.", "Turku", "Purjehdus", ["Elias", "Saaristo", "Vene", "Aallot", "Satama", "Kesä", "Kartta"]],
        ["@HelmiKeraamikko", "Teen savesta keramiikkaa ja lasitan itse tekemäni mukit.", "Savi", "Keramiikka", ["Helmi", "Muki", "Uuni", "Muotoilu", "Lasite", "Taide", "Saviastia"]],
        ["@OskariKiipeilee", "Käyn kiipeilyhallilla ja harjoittelen vaikeampia reittejä.", "Kiipeily", "Seinä", ["Oskari", "Köysi", "Valjaat", "Hallilla", "Reitti", "Korkeus", "Urheilu"]],
        ["@MineaSienestää", "Syksyn lempipuuha on sienestää metsässä ja etsiä kantarelleja.", "Metsä", "Kantarelli", ["Minea", "Sieni", "Syksy", "Kori", "Polku", "Luonto", "Retki"]],
        ["@EetuLeijonat", "Kannustan Leijonia ja katson jääkiekkoa kavereiden kanssa.", "Leijonat", "Jääkiekko", ["Eetu", "Kiekko", "Maali", "Kannustus", "Areena", "Joukkue", "Peli"]],
        ["@SaaraSuklaa", "Kokeilen uusia reseptejä ja teen usein tummaa suklaata jälkiruoaksi.", "Suklaa", "Jälkiruoka", ["Saara", "Resepti", "Kaakao", "Leivonta", "Keittiö", "Vanilja", "Herkku"]],
        ["@MiroTähtitaivas", "Opettelen tunnistamaan tähtikuvioita mökin pihalla.", "Tähti", "Kuvio", ["Miro", "Tähtitaivas", "Kaukoputki", "Mökki", "Yö", "Planeetta", "Avaruus"]],
        ["@IinaJoogaa", "Aloitan aamuni rauhallisella joogalla ja hengitysharjoituksilla.", "Jooga", "Hengitys", ["Iina", "Aamu", "Rauha", "Matto", "Venytely", "Liike", "Hyvinvointi"]],
        ["@VeetiRummut", "Soitan rumpuja bändissä ja harjoittelemme kellarissa joka viikko.", "Rummut", "Bändi", ["Veeti", "Kitara", "Musiikki", "Keikka", "Tahti", "Kellari", "Nuotti"]],
        ["@AinoMehiläiset", "Pidän pientä mehiläistarhaa ja kerään hunajaa loppukesällä.", "Mehiläinen", "Hunaja", ["Aino", "Tarha", "Kukka", "Pölytys", "Kesä", "Purkki", "Luonto"]],
        ["@JoonasLumilauta", "Laskettelen talvisin Levillä ja harjoittelen lumilautatemppuja.", "Levi", "Lumilauta", ["Joonas", "Lumi", "Rinne", "Lauta", "Talvi", "Temppu", "Matka"]],
        ["@RonjaKalligrafia", "Harjoittelen kalligrafiaa ja kirjoitan musteella onnittelukortteja.", "Kalligrafia", "Muste", ["Ronja", "Kirjoitus", "Kortti", "Kynä", "Paperi", "Taide", "Kirje"]],
        ["@TopiKanootilla", "Melon kanootilla Saimaalla ja pysähdyn eväille rantakallioille.", "Saimaa", "Kanootti", ["Topi", "Meloa", "Järvi", "Ranta", "Eväs", "Vesi", "Kesä"]],
        ["@LottaKasvimaa", "Kasvimaallani kasvaa porkkanaa, hernettä ja paljon tuoretta tilliä.", "Porkkana", "Tilli", ["Lotta", "Kasvimaa", "Herne", "Multa", "Kastelu", "Sato", "Puutarha"]],
        ["@RasmusShakki", "Pelaan shakkia verkossa ja ratkon päivittäin uusia tehtäviä.", "Shakki", "Tehtävä", ["Rasmus", "Nappula", "Kuningas", "Strategia", "Peli", "Siirto", "Turnaus"]],
        ["@EmiliaVesiputous", "Vaelluksella Kuusamossa pysähdyin ihailemaan suurta vesiputousta.", "Kuusamo", "Vesiputous", ["Emilia", "Vaellus", "Joki", "Kallio", "Maisema", "Retki", "Luonto"]],
        ["@NikoSähkökitara", "Soitan sähkökitaraa ja keräilen vanhoja rocklevyjä.", "Sähkökitara", "Rock", ["Niko", "Levy", "Vahvistin", "Musiikki", "Riffi", "Bändi", "Keikka"]],
        ["@KerttuPuutarha", "Istutin tänä keväänä puutarhaan pioneja ja valkoisia ruusuja.", "Pioni", "Ruusu", ["Kerttu", "Puutarha", "Kevät", "Kukka", "Kasvi", "Multa", "Kastelu"]],
        ["@ArttuLumiveistos", "Rakensin lumesta pihalle suuren lohikäärmeen ja jäälyhdyn.", "Lumi", "Lohikäärme", ["Arttu", "Veistos", "Jäälyhty", "Talvi", "Piha", "Patsas", "Taide"]],
        ["@EllaSushikokki", "Opettelen tekemään sushia ja rullaan täytteeksi lohta ja kurkkua.", "Sushi", "Lohi", ["Ella", "Riisi", "Kurkku", "Rulla", "Keittiö", "Resepti", "Ruoka"]],
        ["@MattiPerhoset", "Kuvaan perhosia niityllä ja kirjaan ylös löytämäni lajit.", "Perhonen", "Niitty", ["Matti", "Kamera", "Kesä", "Hyönteinen", "Luonto", "Kukka", "Valokuva"]],
        ["@SiniOoppera", "Kävin ensimmäistä kertaa oopperassa ja ihastuin orkesteriin.", "Ooppera", "Orkesteri", ["Sini", "Laulu", "Teatteri", "Musiikki", "Esitys", "Sävel", "Kulttuuri"]],
        ["@LauriKalliomaalaus", "Piirsin kallioon maiseman hiilellä taideleirin aikana.", "Hiili", "Maisema", ["Lauri", "Kallio", "Piirros", "Leiri", "Taide", "Luonto", "Väri"]],
        ["@NooraPihasauna", "Lämmitän mökin pihasaunan ja vilvoittelen välillä järvessä.", "Pihasauna", "Järvi", ["Noora", "Löyly", "Mökki", "Ranta", "Pyyhe", "Kesä", "Vesi"]],
        ["@OttoRobotit", "Rakennan legoista robotteja ja ohjelmoin ne liikkumaan radalla.", "Robotti", "Rata", ["Otto", "Lego", "Koodi", "Ohjelmointi", "Tekniikka", "Moottori", "Peli"]],
        ["@MillaNeuloo", "Neulon villasukkia ja valitsin seuraavaan pariin kirkkaan keltaista lankaa.", "Villasukka", "Keltainen", ["Milla", "Neulonta", "Lanka", "Puikot", "Käsityö", "Väri", "Talvi"]],
        ["@JereMaraton", "Harjoittelen maratonia varten juoksemalla joka aamu rantareitillä.", "Maraton", "Juoksu", ["Jere", "Aamu", "Ranta", "Lenkki", "Urheilu", "Kengät", "Matka"]],
        ["@VenlaPianisti", "Harjoittelen Chopinin kappaleita pianolla musiikkiopistossa.", "Chopin", "Piano", ["Venla", "Nuotti", "Musiikki", "Klassinen", "Sävel", "Konsertti", "Harjoitus"]],
        ["@AkseliJääveistos", "Jääfestivaalilla veistin kirkkaasta jäästä pienen ketun.", "Jääfestivaali", "Kettu", ["Akseli", "Veistos", "Talvi", "Patsas", "Taide", "Lumi", "Kaupunki"]],
        ["@PinjaLuistelija", "Harjoittelen taitoluistelua ja koreografiaa jäähallissa.", "Taitoluistelu", "Koreografia", ["Pinja", "Jää", "Tanssi", "Luistin", "Hallilla", "Urheilu", "Musiikki"]],
        ["@SamuTee", "Kerään erilaisia teelaatuja ja haudutan iltaisin vihreää teetä.", "Tee", "Vihreä", ["Samu", "Teekuppi", "Haudutus", "Kasvi", "Ilta", "Maku", "Keittiö"]],
        ["@AnniKoski", "Kävin koskimelomassa ystävien kanssa ja opettelin uuden melontatekniikan.", "Koski", "Melonta", ["Anni", "Kajakki", "Joki", "Vesi", "Ystävät", "Retki", "Urheilu"]],
        ["@OlliKarting", "Ajan kartingia viikonloppuisin ja haaveilen omasta kilpa-autosta.", "Karting", "Kilpa-auto", ["Olli", "Rata", "Kypärä", "Moottori", "Nopeus", "Viikonloppu", "Harrastus"]],
        ["@HetaOmenapiirakka", "Leivon syksyllä omenapiirakkaa oman pihan omenoista.", "Omena", "Piirakka", ["Heta", "Syksy", "Leivonta", "Kaneli", "Puutarha", "Uuni", "Jälkiruoka"]],
        ["@VilhoGeokätkö", "Etsin geokätköjä uusilla reiteillä ja merkitsen löydöt karttaan.", "Geokätkö", "Kartta", ["Vilho", "Kompassi", "Retki", "Polku", "Luonto", "Seikkailu", "Paikka"]],
        ["@KaisaSarjakuva", "Piirrän omaa sarjakuvaa ja teen hahmoille värikkäät puhekuplat.", "Sarjakuva", "Puhekupla", ["Kaisa", "Piirros", "Hahmo", "Kynä", "Tarina", "Väri", "Taide"]],
        ["@EeroKalenteri", "Suunnittelen paperikalentereita ja koristelen viikkosivut tarroilla.", "Paperikalenteri", "Tarra", ["Eero", "Viikko", "Suunnittelu", "Paperi", "Aika", "Muistiinpano", "Askartelu"]],
        ["@MinttuKoripallo", "Pelaan koripalloa koulun joukkueessa ja treenaan vapaaheittoja.", "Koripallo", "Vapaaheitto", ["Minttu", "Pallo", "Kori", "Joukkue", "Harjoitus", "Urheilu", "Kenttä"]],
        ["@JamiViulu", "Soitan viulua nuoriso-orkesterissa ja harjoittelen uutta konserttikappaletta.", "Viulu", "Konsertti", ["Jami", "Orkesteri", "Musiikki", "Jousi", "Nuotti", "Harjoitus", "Sävel"]],
        ["@SaanaKivikkoranta", "Etsin kesäisin rantakivistä sileitä kiviä askarteluun.", "Rantakivi", "Askartelu", ["Saana", "Kesä", "Ranta", "Järvi", "Kivi", "Maalaus", "Kokoelma"]],
        ["@RoopeKahvipaahto", "Paahdan kotona kahvipapuja ja testaan erilaisia jauhatusasteita.", "Kahvipapu", "Paahto", ["Roope", "Kahvi", "Jauhin", "Maku", "Keittiö", "Aamu", "Kuppi"]],
        ["@MeriDelfiini", "Näin lomalla delfiinejä ja snorklasin kirkkaassa vedessä.", "Delfiini", "Snorklaus", ["Meri", "Loma", "Vesi", "Ranta", "Kala", "Matka", "Aurinko"]],
        ["@JennaRullaluistelu", "Rullaluistelen puistossa ja harjoittelen pysähtymistä alamäessä.", "Rullaluistelu", "Puisto", ["Jenna", "Kypärä", "Pyörä", "Alamäki", "Urheilu", "Kesä", "Reitti"]],
        ["@LeeviPizzauuni", "Teen kotona pizzaa ja paistan sen kiviuunissa rapeaksi.", "Pizza", "Kiviuuni", ["Leevi", "Tomaatti", "Juusto", "Taikina", "Keittiö", "Ruoka", "Resepti"]],
        ["@PihlaTunturi", "Vaelsin tunturin huipulle ja katselin maisemaa pilvien yläpuolelta.", "Tunturi", "Huippu", ["Pihla", "Vaellus", "Pilvi", "Maisema", "Pohjoinen", "Retki", "Kallio"]],
        ["@MaksimMiekka", "Harjoittelen miekkailua seurassa ja opettelen uusia väistöjä.", "Miekkailu", "Väistö", ["Maksim", "Miekka", "Seura", "Harjoitus", "Urheilu", "Ottelu", "Suojus"]],
        ["@LumiPiparkakku", "Leivon piparkakkutalon ja koristelen sen sokerikuorrutuksella.", "Piparkakku", "Kuorrutus", ["Lumi", "Joulu", "Leivonta", "Talo", "Sokeri", "Kaneli", "Makea"]],
        ["@SakariVesiviljely", "Kasvatan yrttejä vesiviljelyjärjestelmässä keittiön ikkunalla.", "Vesiviljely", "Yrtti", ["Sakari", "Basilika", "Kasvi", "Vesi", "Ikkuna", "Kasvatus", "Keittiö"]],
        ["@TuuliSirkus", "Käyn sirkuskoulussa ja harjoittelen ilma-akrobatiaa silkeillä.", "Sirkus", "Akrobatia", ["Tuuli", "Silkki", "Esitys", "Tasapaino", "Harjoitus", "Liike", "Taide"]],
        ["@AapoLautapeli", "Suosikkilautapelissäni rakennetaan junareittejä eri kaupunkien välille.", "Lautapeli", "Junareitti", ["Aapo", "Juna", "Kaupunki", "Kortti", "Strategia", "Noppa", "Ystävät"]],
        ["@SofiaLaventeli", "Istutin parvekelaatikoihin laventelia ja tuoksuvia yrttejä.", "Laventeli", "Parveke", ["Sofia", "Kukka", "Kasvi", "Kesä", "Ruukku", "Puutarha", "Tuoksu"]],
        ["@NellaSähköpyörä", "Kuljen töihin sähköpyörällä ja lataan akun työpäivän aikana.", "Sähköpyörä", "Akku", ["Nella", "Pyörä", "Kypärä", "Työmatka", "Lataus", "Reitti", "Kaupunki"]],
        ["@EemilJalkapallo", "Pelaan maalivahtina paikallisessa jalkapallojoukkueessa.", "Maalivahti", "Jalkapallo", ["Eemil", "Pallo", "Maali", "Kenttä", "Joukkue", "Harjoitus", "Urheilu"]],
        ["@SiiriPuutyö", "Rakensin puusta linnunpöntön ja kiinnitin sen pihakoivuun.", "Linnunpönttö", "Koivu", ["Siiri", "Puu", "Työkalu", "Lintu", "Piha", "Nikkarointi", "Luonto"]],
        ["@TatuElokuva", "Teen lyhytelokuvaa ystävien kanssa ja editoin kohtauksia koneella.", "Lyhytelokuva", "Editointi", ["Tatu", "Kamera", "Kohtaus", "Ystävät", "Käsikirjoitus", "Video", "Taide"]],
        ["@HildaJäätee", "Valmistan kesäisin jääteetä tuoreesta sitruunasta ja mintusta.", "Jäätee", "Sitruuna", ["Hilda", "Minttu", "Kesä", "Juoma", "Kannu", "Keittiö", "Maku"]],
        ["@RikuLohenkalastus", "Lähden aikaisin aamulla joelle kalastamaan lohta perhovavalla.", "Lohenkalastus", "Perhovapa", ["Riku", "Joki", "Aamu", "Kala", "Vapa", "Luonto", "Retki"]],
        ["@AilaKansallispuisto", "Retkeilin Repoveden kansallispuistossa ja ylitin riippusillan.", "Repovesi", "Riippusilta", ["Aila", "Kansallispuisto", "Vaellus", "Metsä", "Silta", "Järvi", "Retki"]],
        ["@JoonatanPelimusiikki", "Sävelsin peliin taustamusiikkia syntetisaattorilla.", "Pelimusiikki", "Syntetisaattori", ["Joonatan", "Sävellys", "Peli", "Ääni", "Nuotti", "Tietokone", "Musiikki"]],
        ["@OonaKukkaprintti", "Painoin kankaalle kukkakuvioita itse tehdyillä leimasimilla.", "Kukkakuvio", "Leimasin", ["Oona", "Kangas", "Painanta", "Askartelu", "Taide", "Väri", "Kukka"]],
        ["@JesseKoiravaljakko", "Kokeilin koiravaljakkoajelua Lapissa ja ihastuin huskyihin.", "Koiravaljakko", "Husky", ["Jesse", "Lappi", "Lumi", "Reki", "Talvi", "Retki", "Koira"]],
        ["@MeriPurje", "Tein purjeveneellä viikon mittaisen matkan Ahvenanmaalle.", "Purjevene", "Ahvenanmaa", ["Meri", "Satama", "Aallot", "Matka", "Kartta", "Kesä", "Vene"]],
        ["@VilmaMansikka", "Kasvatan mansikoita viljelylaatikossa ja teen niistä hilloa.", "Mansikka", "Hillo", ["Vilma", "Puutarha", "Marja", "Kesä", "Sato", "Sokeri", "Keittiö"]],
        ["@MatiasKaukoputki", "Rakensin itse kaukoputken ja katselen sillä kuuta.", "Kaukoputki", "Kuu", ["Matias", "Avaruus", "Planeetta", "Tiede", "Linssi", "Yö", "Tähti"]],
        ["@ElsaTanssisali", "Tanssin kilpatanssia ja harjoittelen uutta valssia.", "Kilpatanssi", "Valssi", ["Elsa", "Tanssi", "Musiikki", "Pari", "Askel", "Kilpailu", "Liike"]],
        ["@LukaMetsäpolku", "Juoksen metsäpoluilla ja kerään reittimerkintöjä sovellukseen.", "Metsäpolku", "Reitti", ["Luka", "Juoksu", "Metsä", "Kartta", "Lenkki", "Luonto", "Kunto"]],
        ["@ElliHunajakakku", "Leivoin hunajakakun isoäitini vanhalla reseptillä.", "Hunaja", "Kakku", ["Elli", "Resepti", "Leivonta", "Jälkiruoka", "Uuni", "Makea", "Perinne"]],
        ["@AriKivipuutarha", "Rakensin pihalle japanilaistyylisen kivipuutarhan.", "Kivipuutarha", "Japani", ["Ari", "Kivi", "Hiekka", "Puutarha", "Rauha", "Kasvi", "Piha"]],
        ["@MimosaMikroskooppi", "Tutkin mikroskoopilla järvivedestä löytyviä pieniä eliöitä.", "Mikroskooppi", "Järvivesi", ["Mimosa", "Tiede", "Eliö", "Näyte", "Laboratorio", "Luonto", "Tutkimus"]],
        ["@TomiLumikenkä", "Kuljen talvella lumikengillä ja etsin jälkiä metsästä.", "Lumikenkä", "Jälki", ["Tomi", "Talvi", "Metsä", "Lumi", "Retki", "Eläin", "Polku"]],
        ["@AlisaKangastus", "Kuvaan auringonlaskuja merenrannalla ja kerään niistä albumia.", "Auringonlasku", "Albumi", ["Alisa", "Kamera", "Meri", "Ranta", "Valokuva", "Ilta", "Taivas"]],
        ["@KimiKitarapedaali", "Soitan kitaraa ja testaan uusia säröpedaaleja kotistudiossa.", "Kitara", "Säröpedaali", ["Kimi", "Studio", "Musiikki", "Vahvistin", "Riffi", "Ääni", "Keikka"]],
        ["@SatuSavusauna", "Kävin ystävien kanssa savusaunassa järven rannalla.", "Savusauna", "Rantasauna", ["Satu", "Löyly", "Järvi", "Ystävät", "Mökki", "Pyyhe", "Kesä"]],
        ["@RoniMetsämarja", "Keräsin metsästä mustikoita ja keitin niistä piirakan.", "Mustikka", "Piirakka", ["Roni", "Metsä", "Marja", "Kesä", "Kori", "Leivonta", "Retki"]],
        ["@KerttuPienoismalli", "Rakennan pienoismallia vanhasta höyryveturista.", "Pienoismalli", "Höyryveturi", ["Kerttu", "Juna", "Pienoisrautatie", "Rakentaminen", "Malli", "Tekniikka", "Harrastus"]],
        ["@JasuSulkakynä", "Kirjoitan päiväkirjaa mustekynällä ja valmistan itse paperin.", "Mustekynä", "Päiväkirja", ["Jasu", "Muste", "Kirjoitus", "Paperi", "Kirje", "Muistiinpano", "Askartelu"]],
        ["@SallaKamelia", "Istutin ikkunalle kamelian ja odotan sen ensimmäisiä kukkia.", "Kamelia", "Ikkuna", ["Salla", "Kasvi", "Kukka", "Ruukku", "Puutarha", "Kevät", "Kasvatus"]],
        ["@EetuPurjelauta", "Harjoittelen purjelautailua tuulisella rannalla.", "Purjelautailu", "Tuuli", ["Eetu", "Lauta", "Meri", "Ranta", "Aallot", "Kesä", "Urheilu"]],
        ["@OlliRamen", "Kokeilen tehdä ramenkeittoa ja haudutan lientä monta tuntia.", "Ramen", "Liemi", ["Olli", "Nuudeli", "Keitto", "Resepti", "Keittiö", "Ruoka", "Mauste"]],
        ["@MallaKaupunkipyörä", "Tutkin kotikaupunkia kaupunkipyörällä ja pysähdyn museoissa.", "Kaupunkipyörä", "Museo", ["Malla", "Pyörä", "Kaupunki", "Matka", "Kypärä", "Historia", "Retki"]],
        ["@JereRatsastus", "Ratsastan islanninhevosella metsäpoluilla viikonloppuisin.", "Islanninhevonen", "Ratsastus", ["Jere", "Hevonen", "Metsä", "Polku", "Talli", "Viikonloppu", "Eläin"]],
        ["@IirisPaperitaide", "Taittelen paperista origamieläimiä ja teen niistä mobileja.", "Origami", "Mobile", ["Iiris", "Paperi", "Taittelu", "Eläin", "Askartelu", "Taide", "Käsityö"]],
        ["@MikkoKuutamo", "Soitan ukulelea kuutamoilloissa mökin kuistilla.", "Ukulele", "Kuutamo", ["Mikko", "Mökki", "Musiikki", "Kuisti", "Yö", "Sävel", "Kesä"]],
        ["@NinaKanelipulla", "Leivon korvapuusteja ja lisään niihin reilusti kanelia.", "Korvapuusti", "Kaneli", ["Nina", "Pulla", "Uuni", "Leivonta", "Taikina", "Kahvi", "Keittiö"]],
        ["@RoopeJääkiipeily", "Kokeilin jääkiipeilyä ja nousin jäätynyttä vesiputousta pitkin.", "Jääkiipeily", "Vesiputous", ["Roope", "Köysi", "Jää", "Kypärä", "Talvi", "Kallio", "Urheilu"]],
        ["@PihlaLuontopolku", "Suunnittelen esteetöntä luontopolkua lähimetsään.", "Luontopolku", "Lähimetsä", ["Pihla", "Metsä", "Reitti", "Luonto", "Kävely", "Kartta", "Suunnittelu"]],
        ["@SamuliVinyyli", "Kerään vinyylilevyjä ja kuuntelen niitä vanhalla levysoittimella.", "Vinyyli", "Levysoitin", ["Samuli", "Musiikki", "Kokoelma", "Neula", "Ääni", "Albumi", "Rock"]],
        ["@LottaLeija", "Rakensin leijan ja lennätin sitä tuulisella pellolla.", "Leija", "Pelto", ["Lotta", "Tuuli", "Taivas", "Lanka", "Kevät", "Askartelu", "Lento"]],
        ["@EliasSukellus", "Suoritin sukelluskurssin ja näin veden alla vanhan hylyn.", "Sukellus", "Hylky", ["Elias", "Meri", "Maski", "Vesi", "Kurssi", "Kala", "Seikkailu"]],
        ["@MaijaKukkaseppele", "Keräsin niittykukkia ja punoin niistä seppeleen juhannukseksi.", "Niittykukka", "Seppele", ["Maija", "Juhannus", "Kesä", "Kukka", "Käsityö", "Perinne", "Luonto"]],
        ["@TimoKelkka", "Rakensin lapsille uuden puisen kelkan talveksi.", "Puukelkka", "Talvi", ["Timo", "Puu", "Nikkarointi", "Lumi", "Pulkka", "Piha", "Työkalu"]],
        ["@VeeraKansantanssi", "Tanssin kansantansseja ja harjoittelen polkan askelia.", "Kansantanssi", "Polkka", ["Veera", "Tanssi", "Musiikki", "Perinne", "Askel", "Puku", "Seura"]],
        ["@AapoMetsäkauris", "Kuvausretkellä näin metsäkauriin aamun usvassa.", "Metsäkauris", "Usva", ["Aapo", "Metsä", "Aamu", "Kamera", "Eläin", "Luonto", "Valokuva"]],
        ["@SiiriKreikkalainen", "Opettelen valmistamaan kreikkalaista salaattia fetajuustosta.", "Kreikka", "Fetajuusto", ["Siiri", "Salaatti", "Tomaatti", "Oliivi", "Resepti", "Ruoka", "Keittiö"]],
        ["@MiroSkeittipuisto", "Harjoittelen uusia temppuja lähialueen skeittipuistossa.", "Skeittipuisto", "Temppu", ["Miro", "Skeitti", "Lauta", "Kypärä", "Rulla", "Urheilu", "Kesä"]],
        ["@NellaTähtitorni", "Vierailin tähtitornissa ja näin Saturnuksen renkaat.", "Tähtitorni", "Saturnus", ["Nella", "Avaruus", "Planeetta", "Kaukoputki", "Yö", "Tiede", "Tähti"]],
        ["@JuliusKukkamaa", "Istutin pihalle auringonkukkia ja mittaan niiden kasvua.", "Auringonkukka", "Kasvu", ["Julius", "Puutarha", "Kesä", "Kukka", "Kasvi", "Multa", "Mittaus"]],
        ["@AadaLaskettelu", "Laskettelin Ylläksellä ja kokeilin uutta rinnettä.", "Ylläs", "Laskettelu", ["Aada", "Rinne", "Lumi", "Sukset", "Talvi", "Matka", "Kypärä"]],
        ["@EemeliPuutarhakeinu", "Nikkaroin puutarhaan puisen keinun ja maalasin sen siniseksi.", "Puutarhakeinu", "Sininen", ["Eemeli", "Puu", "Nikkarointi", "Piha", "Maali", "Kesä", "Työkalu"]],
    ].map(([handle, bio, firstWord, secondWord, distractors]) => ({
        bio: `<b>${handle}</b><br>${bio}`,
        password: firstWord + secondWord,
        words: [firstWord, secondWord, ...distractors]
    }))
];

let timeLeft = 60;
let score = 0;
let currentTarget = null;
let currentAttempt = "";
let timerInterval = null;
let usedIndices = [];
const leaderboardStorageKey = "murraSalasanaLeaderboard";
const profileHistoryStorageKey = "murraSalasanaSeenProfiles";
let profileHistoryStorageAvailable = true;
let seenProfilePasswords = loadSeenProfilePasswords();
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

    if (usedIndices.length >= profiles.length) {
        usedIndices = [];
    }
    const availableIndices = profiles
        .map((_, index) => index)
        .filter(index => !usedIndices.includes(index));
    let unseenIndices = availableIndices.filter(index =>
        !seenProfilePasswords.includes(profiles[index].password)
    );
    if (unseenIndices.length === 0) {
        const previousProfilePassword = seenProfilePasswords[seenProfilePasswords.length - 1];
        seenProfilePasswords = [];
        unseenIndices = availableIndices.filter(index =>
            profiles[index].password !== previousProfilePassword
        );
    }
    if (unseenIndices.length === 0) {
        throw new Error("Uutta profiilihaastetta ei löytynyt valittavaksi.");
    }

    const randomIndex = unseenIndices[Math.floor(Math.random() * unseenIndices.length)];
    usedIndices.push(randomIndex);
    currentTarget = profiles[randomIndex];
    seenProfilePasswords.push(currentTarget.password);
    saveSeenProfilePasswords();

    // Vaihdetaan profiilikuva ja teksti
    const imgEl = document.getElementById("profileImg");
    imgEl.style.display = "block";
    imgEl.src = anonImages[Math.floor(Math.random() * anonImages.length)];
    document.getElementById("profileBio").innerHTML = currentTarget.bio;

    // Sekoitetaan sanat tasaisesti
    const shuffled = shuffleItems([...currentTarget.words]);
    const grid = document.getElementById("wordGrid");
    grid.innerHTML = "";

    shuffled.forEach(word => {
        const btn = document.createElement("button");
        btn.innerText = word;
        btn.addEventListener("click", () => selectWord(word));
        grid.appendChild(btn);
    });
}

function loadSeenProfilePasswords() {
    let serializedHistory;
    try {
        serializedHistory = localStorage.getItem(profileHistoryStorageKey);
    } catch (error) {
        profileHistoryStorageAvailable = false;
        console.error("Haastehistorian lukeminen epäonnistui.", error);
        return [];
    }

    if (!serializedHistory) {
        return [];
    }

    let savedPasswords;
    try {
        savedPasswords = JSON.parse(serializedHistory);
    } catch (error) {
        console.error("Haastehistorian tulkitseminen epäonnistui.", error);
        return [];
    }

    if (!Array.isArray(savedPasswords)) {
        console.error("Tallennettu haastehistoria ei ole kelvollinen lista.");
        return [];
    }

    const validPasswords = new Set(profiles.map(profile => profile.password));
    return [...new Set(savedPasswords.filter(password =>
        typeof password === "string" && validPasswords.has(password)
    ))];
}

function saveSeenProfilePasswords() {
    if (!profileHistoryStorageAvailable) {
        return;
    }

    try {
        localStorage.setItem(profileHistoryStorageKey, JSON.stringify(seenProfilePasswords));
    } catch (error) {
        profileHistoryStorageAvailable = false;
        console.error("Haastehistorian tallentaminen epäonnistui.", error);
    }
}

function shuffleItems(items) {
    for (let index = items.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [items[index], items[randomIndex]] = [items[randomIndex], items[index]];
    }
    return items;
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