# Murra salasana

Murra salasana on selainpohjainen tietoturvapeli. Pelissä on 60 sekuntia aikaa ja 150 kuvitteellista profiilihaastetta.
Sama profiili näytetään uudelleen vasta, kun kaikki 150 haastetta on käyty läpi. Haastehistoria tallennetaan selaimeen, joten kierto jatkuu myös pelisessioiden välillä samalla selaimella ja osoitteella.

## Käynnistä peli

1. Avaa projekti Visual Studio Codessa.
2. Avaa `index.html` Live Serverillä.
3. Valitse **Aloita peli**.

Peli toimii staattisena verkkosivuna eikä vaadi erillistä asennusta tai palvelinta. Voit myös käynnistää projektikansion paikallisella staattisella palvelimella ja avata sen selaimessa.

## Pelaaminen

- Valitse profiilin vihjeisiin sopivia sanoja niiden muodostaman salasanan järjestyksessä.
- Oikeasta salasanasta saat pisteen ja peli siirtyy seuraavaan profiiliin.
- Väärän valinnan jälkeen voit yrittää uudelleen tai tyhjentää valinnan.
- Kun aika loppuu, voit tallentaa pisteesi nimimerkillä.

Top 10 -lista näkyy aloitusruudussa ja pelin päätyttyä. Tulokset tallennetaan selaimen paikalliseen tallennustilaan, joten lista on selain- ja osoitekohtainen.

Taustamusiikkia arvotaan kuudesta kappaleesta, eikä sama kappale soi kahdessa peräkkäisessä pelissä. Musiikki alkaa pelin käynnistyessä 20 prosentin äänenvoimakkuudella ja pysähtyy pelin päättyessä. Oikean yläkulman painikkeesta voi mykistää musiikin, ja sen alla olevalla liukusäätimellä voi säätää äänenvoimakkuutta.

## Tiedostot

- `index.html` – pelin sivurakenne
- `style.css` – ulkoasu ja taustaliukuväri
- `script.js` – pelin toiminta, profiilit ja tuloslista
- `images/` – pelin kuvat
- `audio/` – pelin taustamusiikki

## Kuvien tekijät

Kuvien lähde- ja tekijätiedot ovat Pexels-kuvien tiedostonimien mukaiset:

- Tima Miroshnichenko:
  - `pexels-tima-miroshnichenko-5380670.jpg`
  - `pexels-tima-miroshnichenko-5380638.jpg`
  - `pexels-tima-miroshnichenko-5380635.jpg`
  - `pexels-tima-miroshnichenko-5380633.jpg`
- shkrabaanthony: `pexels-shkrabaanthony-5475763.jpg`
- kalistro666: `pexels-kalistro666-25382286.jpg`
- lucasandrade: `pexels-lucasandrade-3148351.jpg`

## Tekoälyn käyttö

Tekoälyä käytettiin apuna pelin suunnittelussa ja toteutuksessa, kuten koodin kirjoittamisessa ja muokkaamisessa.

- Alkuperäinen suunnittelu: Gemini (käyttäjän ilmoittama mallin nimike: Gemini 4 Hydrogen; tarkkaa versiota ei ole vahvistettu).
- Viimeistely ja koodimuutokset: Copilot SDK in VS Code. Käytetyn tekoälymallin nimeä tai versiota ei ollut saatavilla.
- Pelin kuusi taustamusiikkikappaletta generoitiin Google Gemini Prolla käyttäjän kuvausten perusteella:
  - `Locked_Behind_Glass.mp3`
  - `Midnight_Overwrite.mp3`
  - `Midnight_Override2.mp3`
  - `Nine_Seconds_Left.mp3`
  - `One_More_Credit.mp3`
  - `Seconds_Before_The_Lock.mp3`

Tämä on musiikin alkuperätieto, ei väite siitä, että kappaleet olisivat public domain -aineistoa tai tekijänoikeudellisesti yksinoikeudella suojattuja. Googlen [palveluehdot](https://policies.google.com/terms?hl=fi) kertovat, ettei Google vaadi omistajuutta joissakin palveluissa luotuun alkuperäiseen sisältöön. Sisällön suoja ja käyttöoikeudet riippuvat kuitenkin sovellettavasta laista sekä käytetyn Gemini-palvelun ja ominaisuuden ehdoista.
