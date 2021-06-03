//Muuttujien määrittely

let nopeus = document.getElementById("nopeus");
let nopeus2 = document.getElementById("nopeus2");
let nopeusLuku = document.getElementById("luku");
let nopeusLuku2 = document.getElementById("luku2");
let tuloste = document.getElementById("luku");
let matka = document.getElementById("matka");
let tulos = document.getElementById("tulos");
let aika = document.getElementById("aika");
let aika2 = document.getElementById("aika2");
let saastoAika = document.getElementById("saastoAika");
let kulutus1 = document.getElementById("kulutus1");
let kulutus2 = document.getElementById("kulutus2");
let saastoPolttoaine = document.getElementById("saastoPolttoaine");
let nopeus3 = document.getElementById("nopeus3");
let nopeus4 = document.getElementById("nopeus4");

//Polttoaineen kulutuskerroin nopeuden mukaan
const kerroin = 1.009;

//Nopeussäätimen sliderin muutoksesta automaattinen päivitys numeromuotoon ja päinvastoin
nopeusLuku.value = nopeus.value;
nopeusLuku2.value = nopeus2.value;
nopeus3.innerHTML = nopeus.value;
nopeus4.innerHTML = nopeus2.value;

nopeus.oninput = function(){
    nopeusLuku.value = this.value;
    nopeus3.innerHTML = this.value;
}
nopeusLuku.oninput = function(){
    nopeus.value = this.value;
    nopeus3.innerHTML = this.value;
}
nopeus2.oninput = function(){
    nopeusLuku2.value = this.value;
    nopeus4.innerHTML = this.value;
}
nopeusLuku2.oninput = function(){
    nopeus2.value = this.value;
    nopeus4.innerHTML = this.value;
}

//Varsinaisen ohjelman suoritus
//Parametriksi syötteen nopeudet, sekä annettu matka
//Suorittaa tarvittavat laskutoimitukset riippuen valitusta autosta


function kulutusLaskuri (nopeus, nopeus2, matka){

    if (document.getElementById("A").checked)
    {
        let kulutus = 0.03;
        for (let i = 1; i < nopeus; i++) {
            kulutus *= kerroin;
        }
        kulutus1.innerHTML = pyoristys(kulutus*matka, 3) + " litraa";
        kulutus1.value = kulutus*matka;

        kulutus = 0.03;
        for (let i = 1; i < nopeus2; i++) {
            kulutus *= kerroin;
        }
        kulutus2.innerHTML = pyoristys(kulutus*matka, 3) + " litraa";
        kulutus2.value=kulutus*matka;

        saastoPolttoaine.innerHTML = pyoristys(kulutus1.value > kulutus2.value ? kulutus1.value-kulutus2.value : kulutus2.value-kulutus1.value, 3);
        saastoPolttoaine.innerHTML += " litraa enemmän";
    }
    if (document.getElementById("B").checked)
    {
        let kulutus = 0.035;
        for (let i = 1; i < nopeus; i++) {
            kulutus *= kerroin;
        }
        kulutus1.innerHTML = pyoristys(kulutus*matka, 3) + " litraa";
        kulutus1.value = kulutus*matka;

        kulutus = 0.035;
        for (let i = 1; i < nopeus2; i++) {
            kulutus *= kerroin;
        }
        kulutus2.innerHTML = pyoristys(kulutus*matka, 3) + " litraa";
        kulutus2.value=kulutus*matka;

        saastoPolttoaine.innerHTML = pyoristys(kulutus1.value > kulutus2.value ? kulutus1.value-kulutus2.value : kulutus2.value-kulutus1.value, 3);
        saastoPolttoaine.innerHTML += " litraa enemmän";
    }
    if (document.getElementById("C").checked)
    {
        let kulutus = 0.04;
        for (let i = 1; i < nopeus; i++) {
            kulutus *= kerroin;
        }
        kulutus1.innerHTML = pyoristys(kulutus*matka, 3) + " litraa";
        kulutus1.value = kulutus*matka;

        kulutus = 0.04;
        for (let i = 1; i < nopeus2; i++) {
            kulutus *= kerroin;
        }
        kulutus2.innerHTML = pyoristys(kulutus*matka, 3) + " litraa";
        kulutus2.value=kulutus*matka;

        saastoPolttoaine.innerHTML = pyoristys(kulutus1.value > kulutus2.value ? kulutus1.value-kulutus2.value : kulutus2.value-kulutus1.value, 3);
        saastoPolttoaine.innerHTML += " litraa enemmän";
    }
}

//Funktio säästetyn ajan laskemiseen
function aikaLaskuri(matka, nopeus, nopeus2){
    let kesto = matka/nopeus;
    let kesto2 = matka/nopeus2;
    aika.innerHTML = aikayksikot(kesto*3600);
    aika2.innerHTML = aikayksikot(kesto2*3600);
    saastoAika.innerHTML = kesto > kesto2 ? aikayksikot((kesto*3600)-(kesto2*3600)) : aikayksikot((kesto2*3600)-(kesto*3600));
}

//Matkaan kuluvan ja säästetyn ajan muutos luettavampaan muotoon
function aikayksikot(sekunnit) {
    let tun = Math.floor(sekunnit / 3600);
    let min = Math.floor(sekunnit % 3600 / 60);
    let sek = Math.floor(sekunnit % 3600 % 60);
    let tunEsitys = tun > 0 ? tun + (tun == 1 ? " tunti" : " tuntia") + (min > 0 || sek > 0 ? ", ":"") : "";
    let minEsitys = min > 0 ? min + (min == 1 ? " minuutti" : " minuuttia") + (sek > 0 ? ", ":"") : "";
    let sekEsitys = sek > 0 ? sek + (sek == 1 ? " sekunti" : " sekuntia") : "";
    return tunEsitys + minEsitys + sekEsitys;
}

//Funktio lukujen pyöristämiseen 
function pyoristys(arvo, desimaalit) {
    return Number(Math.round(arvo + 'e' + desimaalit) + 'e-' + desimaalit);
}
document.getElementById("lasku").addEventListener("click", () => kulutusLaskuri(luku.value, luku2.value, matka.value));
document.getElementById("lasku").addEventListener("click", () => aikaLaskuri(matka.value, luku.value, luku2.value));
