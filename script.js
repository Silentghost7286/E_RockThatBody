//==========================================================
// 1. HTML ELEMENTLERİNİ SEÇME
//==========================================================
const kodAlani = document.getElementById('kod-alani');
const metinAlani = document.getElementById('metin-alani');
const muzik = document.getElementById('muzik');
const baslatEkrani = document.getElementById('baslat-ekrani');
const baslatButonu = document.getElementById('baslat-butonu');

//==========================================================
// 2. DEĞİŞKENLER VE VERİLER
//==========================================================
const karakterler = "0123456789ABCDEF{}[]<>=+-*/%&|!~^:?@#$";
let kodAkisInterval;
let sarkiSozuInterval;

const onMesajlar = [
    { metin: "AĞ BAĞLANTISI KURULUYOR...", sure: 1500 },
    { metin: "SİSTEM ANALİZ EDİLİYOR...", sure: 1500 },
    { metin: "VERİ AKIŞI BAŞARILI.", sure: 2000 }
];

// Değişken adının "sarkıSozleri" olarak doğru yazıldığına emin olundu
const sarkıSozleri = [
    { time: 31.34, text: "I wanna da-" },
    { time: 32.51, text: "I wanna dance in the lights" },
    { time: 35.09, text: "I wanna ro-" },
    { time: 36.45, text: "I wanna rock your body" },
    { time: 39.23, text: "I wanna go" },
    { time: 40.26, text: "I wanna go for a ride" },
    { time: 43.08, text: "Hop in the music" },
    { time: 46.53, text: "and rock your body right" },
    { time: 47.61, text: "Rock that body" },
    { time: 48.44, text: "come on, come on" },
    { time: 50.41, text: "rock that body" },
    { time: 51.48, text: "Rock that body" },
    { time: 52.26, text: "come on, come on" },
    { time: 54.19, text: "rock that body" },
    { time: 55.14, text: "Rock that body" },
    { time: 56.15, text: "come on, come on" },
    { time: 58.09, text: "rock that body" },
    { time: 58.93, text: "Rock that body" },
    { time: 59.96, text: "come on, come on" },
    { time: 61.38, text: "rock that body" },
    { time: 61.86, text: "Let me see your body rock" },
    { time: 62.84, text: "Shakin' it from the bottom to top" },
    { time: 63.84, text: "Freak to what the DJ drop" },
    { time: 65.74, text: "We be the ones to make it hot" },
    { time: 68.56, text: "(to make it hot)" },
    { time: 69.53, text: "Electric shock" },
    { time: 70.43, text: "energy like a billion watts" },
    { time: 71.48, text: "Space be booming" },
    { time: 73.38, text: "the speakers pop" },
    { time: 74.31, text: "Galactic" },
    { time: 75.26, text: "call me Mr. Spock" },
    { time: 76.26, text: "We bumpin' in your parking lot" },
    { time: 77.19, text: "When you're comin' up in the spot" },
    { time: 79.63, text: "Don't bring nothin' we call Pink Dot" },
    { time: 81.04, text: "'Cause we burnin' around the clock" },
    { time: 84.05, text: "Hit the lights" },
    { time: 84.92, text: "and then turn them off" },
    { time: 85.89, text: "If you bring that" },
    { time: 86.87, text: "don't make you stop" },
    { time: 87.77, text: "Like the jungle" },
    { time: 88.74, text: "we run the block" },
    { time: 89.71, text: "No one rollin'" },
    { time: 90.68, text: "the way we rock" },
    { time: 91.65, text: "way we rock" },
    { time: 95.40, text: "I wanna, I wanna rock right now" },
    { time: 96.54, text: "I wanna, I wanna rock right now" },
    { time: 97.73, text: "I wanna, I wanna rock right now" },
    { time: 98.31, text: "I wanna da-" },
    { time: 101.68, text: "I wanna dance in the lights" },
    { time: 102.42, text: "I wanna ro-" },
    { time: 104.36, text: "I wanna rock your body" },
    { time: 105.49, text: "I wanna go" },
    { time: 107.96, text: "I wanna go for a ride" },
    { time: 111.81, text: "Hop in the music" },
    { time: 113.22, text: "and rock your body right" },
    { time: 114.17, text: "Rock that body" },
    { time: 116.59, text: "come on, come on" },
    { time: 117.60, text: "rock that body" },
    { time: 118.52, text: "Rock that body" },
    { time: 120.43, text: "come on, come on" },
    { time: 123.25, text: "rock that body" },
    { time: 124.74, text: "Rock that body" },
    { time: 125.41, text: "come on, come on" },
    { time: 126.42, text: "rock that body" },
    { time: 127.58, text: "Rock that body" },
    { time: 128.56, text: "come on, come on" },
    { time: 129.48, text: "rock that body" },
    { time: 130.76, text: "Superfly ladies" },
    { time: 131.98, text: "all of my superfly ladies" },
    { time: 134.02, text: "All of my superfly ladies" },
    { time: 135.99, text: "All of my superf-" },
    { time: 137.22, text: "superfly ladies" },
    { time: 138.58, text: "Yeah" },
    { time: 139.45, text: "you could be big bone, large" },
    { time: 140.82, text: "you feel like you own" },
    { time: 142.53, text: "You could be the model type" },
    { time: 144.43, text: "skinny with no appetite" },
    { time: 146.35, text: "Short stack" },
    { time: 147.31, text: "black or white" },
    { time: 148.29, text: "Long as you do what you like" },
    { time: 149.25, text: "Body outta sight" },
    { time: 151.93, text: "body, body outta sight" },
    { time: 154.04, text: "She does the two-step" },
    { time: 154.94, text: "and the tongue drop" },
    { time: 155.91, text: "She does the cabbage patch" },
    { time: 156.89, text: "and the bus stop" },
    { time: 157.85, text: "She like electro" },
    { time: 158.73, text: "she wrote hip-hop" },
    { time: 159.72, text: "She like the reggae" },
    { time: 160.70, text: "she feel punk rock" },
    { time: 161.67, text: "She love samba" },
    { time: 162.66, text: "and the mambo" },
    { time: 163.57, text: "She like to breakdance" },
    { time: 164.55, text: "and calypso" },
    { time: 166.04, text: "Get a lil' crazy" },
    { time: 166.78, text: "get a lil' stupid" },
    { time: 167.97, text: "Get a lil' crazy" },
    { time: 168.94, text: "crazy, crazy" },
    { time: 169.86, text: "I wanna da-" },
    { time: 170.82, text: "I wanna dance in the lights" },
    { time: 173.28, text: "I wanna ro-" },
    { time: 174.73, text: "I wanna rock your body right" },
    { time: 177.13, text: "I wanna go" },
    { time: 178.49, text: "I wanna go for a ride" },
    { time: 180.92, text: "Hop in the music" },
    { time: 182.75, text: "and rock your body right" },
    { time: 184.76, text: "Rock your body right" },
    { time: 190.16, text: "Rock your body right" },
    { time: 203.68, text: "Come on, yeah" },
    { time: 208.14, text: "Rock that body" },
    { time: 209.05, text: "come on, come on" },
    { time: 209.69, text: "rock that body" },
    { time: 211.40, text: "Come on, yeah" },
    { time: 212.08, text: "Rock that body" },
    { time: 212.89, text: "come on, come on" },
    { time: 214.07, text: "rock that body" },
    { time: 215.96, text: "Go, oh, oh, oh, oh-oh-oh" },
    { time: 222.53, text: "Let's go, oh, oh, oh, oh-oh-oh" },
    { time: 225.54, text: "Let's go, oh, oh, oh, oh-oh-oh" },
    { time: 227.00, text: "Let's go, oh, oh, oh, oh-oh-oh" },
    { time: 230.26, text: "I wanna, I wanna rock right now" }
];

//==========================================================
// 3. ANA FONKSİYONLAR
//==========================================================

function kodAkisiniBaslat() {
    const sutunSayisi = Math.floor(window.innerWidth / 7.5);

    kodAkisInterval = setInterval(() => {
        let kodIcerigi = kodAlani.innerText;
        let yeniSatir = "";

        for (let i = 0; i < sutunSayisi; i++) {
            if (Math.random() > 0.1) {
                yeniSatir += karakterler.charAt(Math.floor(Math.random() * karakterler.length));
            } else {
                yeniSatir += " ";
            }
        }
        kodIcerigi = yeniSatir + "\n" + kodIcerigi;
        const satirlar = kodIcerigi.split('\n');
        if (satirlar.length > 100) {
            kodIcerigi = satirlar.slice(0, 100).join('\n');
        }
        kodAlani.innerText = kodIcerigi;
    }, 80);
}

async function metinGoster(mesajListesi, callback) {
    metinAlani.style.opacity = '1';
    kodAlani.classList.add('dimmed');

    for (const mesaj of mesajListesi) {
        metinAlani.innerText = mesaj.metin;
        await new Promise(resolve => setTimeout(resolve, mesaj.sure));
    }

    metinAlani.style.opacity = '0';

    if (callback) {
        callback();
    }
}

function sarkiSozleriniGuncelle() {
    const simdikiZaman = muzik.currentTime;
    const gecerliSoz = sarkıSozleri.slice().reverse().find(soz => simdikiZaman >= soz.time);

    if (gecerliSoz && metinAlani.innerText !== gecerliSoz.text) {
        metinAlani.style.opacity = '0';
        setTimeout(() => {
            metinAlani.innerText = gecerliSoz.text;
            metinAlani.style.opacity = '1';
        }, 150);
    }
}

function muzikVeSozleriBaslat() {
    kodAlani.classList.add('dimmed');

    muzik.currentTime = 31;

    muzik.play().catch(e => console.error("Müzik çalınamadı:", e));
    metinAlani.innerText = "";
    metinAlani.style.opacity = '1';
    if (sarkiSozuInterval) clearInterval(sarkiSozuInterval);
    sarkiSozuInterval = setInterval(sarkiSozleriniGuncelle, 100);
}

//==========================================================
// 4. OLAY DİNLEYİCİLERİ VE BAŞLANGIÇ
//==========================================================

document.addEventListener('DOMContentLoaded', () => {
    kodAkisiniBaslat();
});

baslatButonu.addEventListener('click', () => {
    baslatEkrani.style.transition = "opacity 1s";
    baslatEkrani.style.opacity = '0';
    setTimeout(() => {
        baslatEkrani.style.display = 'none';
    }, 1000);

    setTimeout(() => {
        metinGoster(onMesajlar, muzikVeSozleriBaslat);
    }, 500);
});

muzik.addEventListener('ended', () => {
    muzik.currentTime = 31;
    muzik.play();
});