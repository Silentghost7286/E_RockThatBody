// ==========================================================
// 1. DEĞİŞKEN TANIMLARI
// ==========================================================
const kodAlani = document.getElementById('kod-alani');
const metinAlani = document.getElementById('metin-alani');
const muzik = document.getElementById('muzik');
const baslatEkrani = document.getElementById('baslat-ekrani');
const baslatButonu = document.getElementById('baslat-butonu');

// Koda benzeyen karakter seti
const karakterler = "0123456789ABCDEF{}[]();<>=+-*/%&|!~^:?@#$.";
let akisInterval;
let sozZamanlayicilari = []; // Şarkı sözü zamanlayıcılarını tutmak için dizi

// ==========================================================
// 2. ŞARKI SÖZLERİ VE ZAMANLAMALARI
// ==========================================================
const sarkıSozleri = [
    { time: 31.34, text: "I wanna da-" },
    { time: 32.51, text: "I wanna dance in the lights" },
    { time: 35.09, text: "I wanna ro-" },
    { time: 36.45, text: "I wanna rock your body" },
    { time: 39.23, text: "I wanna go" },
    { time: 40.26, text: "I wanna go for a ride" },
    { time: 43.08, text: "Hop in the music" },
    { time: 44.53, text: "and rock your body right" },
    { time: 45.61, text: "Rock that body" },
    { time: 47.44, text: "come on, come on" },
    { time: 48.41, text: "rock that body" },
    { time: 49.48, text: "Rock that body" },
    { time: 51.26, text: "come on, come on" },
    { time: 52.19, text: "rock that body" },
    { time: 53.14, text: "Rock that body" },
    { time: 54.15, text: "come on, come on" },
    { time: 56.09, text: "rock that body" },
    { time: 56.93, text: "Rock that body" },
    { time: 58.96, text: "come on, come on" },
    { time: 59.38, text: "rock that body" },
    { time: 60.86, text: "Let me see your body rock" },
    { time: 61.84, text: "Shakin' it from the bottom to top" },
    { time: 63.84, text: "Freak to what the DJ drop" },
    { time: 64.74, text: "We be the ones to make it hot" },
    { time: 65.56, text: "(to make it hot)" },
    { time: 66.53, text: "Electric shock" },
    { time: 67.43, text: "energy like a billion watts" },
    { time: 69.48, text: "Space be booming" },
    { time: 70.38, text: "the speakers pop" },
    { time: 71.31, text: "Galactic" },
    { time: 72.26, text: "call me Mr. Spock" },
    { time: 73.26, text: "We bumpin' in your parking lot" },
    { time: 75.19, text: "When you're comin' up in the spot" },
    { time: 76.63, text: "Don't bring nothin' we call Pink Dot" },
    { time: 78.04, text: "'Cause we burnin' around the clock" },
    { time: 79.05, text: "Hit the lights" },
    { time: 80.92, text: "and then turn them off" },
    { time: 81.89, text: "If you bring that" },
    { time: 82.87, text: "don't make you stop" },
    { time: 83.77, text: "Like the jungle" },
    { time: 84.74, text: "we run the block" },
    { time: 85.71, text: "No one rollin'" },
    { time: 86.68, text: "the way we rock" },
    { time: 87.65, text: "way we rock" },
    { time: 88.40, text: "I wanna, I wanna rock right now" },
    { time: 91.54, text: "I wanna, I wanna rock right now" },
    { time: 93.73, text: "I wanna, I wanna rock right now" },
    { time: 95.31, text: "I wanna da-" },
    { time: 96.68, text: "I wanna dance in the lights" },
    { time: 98.42, text: "I wanna ro-" },
    { time: 99.36, text: "I wanna rock your body" },
    { time: 101.49, text: "I wanna go" },
    { time: 102.96, text: "I wanna go for a ride" },
    { time: 104.81, text: "Hop in the music" },
    { time: 106.22, text: "and rock your body right" },
    { time: 108.17, text: "Rock that body" },
    { time: 109.59, text: "come on, come on" },
    { time: 110.60, text: "rock that body" },
    { time: 111.52, text: "(rock that body)" },
    { time: 112.43, text: "Rock that body" },
    { time: 113.25, text: "come on, come on" },
    { time: 114.74, text: "rock that body" },
    { time: 115.41, text: "Rock that body" },
    { time: 116.42, text: "come on, come on" },
    { time: 117.58, text: "rock that body" },
    { time: 118.56, text: "(rock your body)" },
    { time: 119.48, text: "Rock that body" },
    { time: 120.76, text: "come on, come on" },
    { time: 121.98, text: "rock that body" }
];


// ==========================================================
// 3. FONKSİYONLAR
// ==========================================================

// Arka plan kod akışını oluşturur ve başlatır
function arkaPlanBaslat() {
    akisInterval = setInterval(() => {
        const sutunSayisi = Math.floor(window.innerWidth / 12);
        let yeniSatir = '';
        for (let i = 0; i < sutunSayisi; i++) {
            yeniSatir += karakterler.charAt(Math.floor(Math.random() * karakterler.length));
        }
        kodAlani.innerText = yeniSatir + '\n' + kodAlani.innerText.substring(0, 10000);
    }, 50);
}

// Tüm şarkı sözü zamanlayıcılarını temizler
function sozleriTemizle() {
    sozZamanlayicilari.forEach(timer => clearTimeout(timer));
    sozZamanlayicilari = [];
}

// Şarkı sözlerini müzikle senkronize şekilde gösterir
function sarkıSozleriniZamanla() {
    sozleriTemizle(); // Önceki zamanlayıcıları temizle
    const baslangicZamani = 31.0; // Şarkının başlayacağı saniye

    sarkıSozleri.forEach(item => {
        // Her bir sözün gösterileceği zamanı hesapla
        const gostermeZamani = (item.time - baslangicZamani) * 1000;

        if (gostermeZamani >= 0) {
            let timer = setTimeout(() => {
                metinAlani.innerText = item.text;
            }, gostermeZamani);
            sozZamanlayicilari.push(timer);
        }
    });
}

// Ön mesajları gösterir ve ardından müziği başlatır
function onMesajlariBaslat() {
    const mesajlar = [
        { metin: "AĞ BAĞLANTISI KURULUYOR...", sure: 1500 },
        { metin: "SİSTEM ANALİZ EDİLİYOR...", sure: 1500 },
        { metin: "BAĞLANTI BAŞARILI...", sure: 1500 }
    ];

    let toplamGecikme = 0;
    metinAlani.style.opacity = '1';

    mesajlar.forEach((mesaj, index) => {
        setTimeout(() => {
            metinAlani.innerText = mesaj.metin;
            // Son mesajdan sonra müziği başlat
            if (index === mesajlar.length - 1) {
                setTimeout(muzikVeSozleriBaslat, mesaj.sure);
            }
        }, toplamGecikme);
        toplamGecikme += mesaj.sure;
    });
}

// Müziği ve şarkı sözlerini başlatır
function muzikVeSozleriBaslat() {
    kodAlani.style.opacity = '0.3'; // Kod akışını karart
    sarkıSozleriniZamanla(); // Sözleri zamanla
    muzik.play(); // Müzik zaten hazır, sadece başlat
}

// ==========================================================
// 4. BAŞLANGIÇ MANTIĞI VE OLAY DİNLEYİCİLERİ
// ==========================================================

// Sayfa yüklendiğinde arka plan kod akışını başlat
document.addEventListener('DOMContentLoaded', arkaPlanBaslat);

// "Başlat" butonuna tıklandığında...
baslatButonu.addEventListener('click', () => {
    // === YENİ VE EN ÖNEMLİ KISIM: SES KİLİDİNİ AÇMA ===
    // Butona basıldığı anda, tarayıcıya sesle etkileşime geçildiğini bildiriyoruz.
    // Sesi çok kısa bir anlığına başlatıp hemen durduruyoruz.
    // Bu, mobil tarayıcıların ve Instagram'ın kısıtlamasını aşar.
    muzik.play();
    muzik.pause();
    // =======================================================

    baslatEkrani.style.display = 'none'; // Başlat ekranını gizle

    muzik.currentTime = 31.0; // Müziği istediğimiz saniyeye ayarla
    onMesajlariBaslat(); // Animasyonları ve sonra müziği başlat
});

// Müzik bittiğinde başa sarıp tekrar çalması için (loop)
muzik.addEventListener('ended', () => {
    muzik.currentTime = 31.0;
    sarkıSozleriniZamanla();
    muzik.play();
});
