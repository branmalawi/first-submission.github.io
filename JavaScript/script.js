const banner = document.getElementById("img");
const judul = document.querySelector(".info>h1");
const article = document.querySelector(".info>p")
const detail = document.querySelector(".judul a")
const dropdown = document.querySelector(".dropdown")
const menu = document.querySelector(".menu")
const btn = document.querySelectorAll(".menu a")
const text = [
  "Chichen Itza",
  "Great Wall",
  "Taj Mahal",
  "Machu Picchu",
  "Petra",
  "Christ the Redeemer",
  "Colosseum"
]

const paragraf = [
  "Pyramid at Chichén Itzá adalah sebuah bangunan yang berbentuk Piramida dan dipercayai sebagai pusat kegiatan politik dan ekonomi bangsa Maya yang terletak di Semenanjung Yucatan Meksiko",
  "The Great Wall of China atau Tembok Besar China (ada juga yang menyebutnya Tembok Raksasa China) adalah sebuah Tembok besar yang dibangun tahun 722 SM di Zaman Musim Semi Gugur hingga Dinasti Ming pada Tahun 1655 untuk menghubungkan benteng-benteng pertahanan dengan tujuan untuk  melindungi wilayah China dari penyerangan suku Mongol",
  "Taj Mahal merupakan sebuah Monumen yang didirikan oleh Kaisar Mughal kelima yang bernama Shah Jahan untuk mengenang istri tercintanya Mumtaz Mahal yang wafat saat melahirkan putrinya Gauhara Begum (anak mereka yang ke-14). Monumen yang terletak di Agra India ini merupakan sebuah adi karya arsitektur Mughal yang dibangun pada tahun 1630 dan selesai pada tahun 1653. Taj Mahal ditetapkan sebagai Situs Warisan Dunia oleh UNESCO pada tahun 1983.",
  "Machu Picchu adalah reruntuhan Inka yang terletak di wilayah lembah penggunungan Urubamba, Peru.   Machu Picchu merupakan sebuah kota yang dibangun pada tahun 1450 oleh kerajaan Inka , tetapi ditinggalkan seratus tahun kemudian ketika Kerajaan Inka ditaklukan oleh bangsa Spanyol. Istilah Machu Picchu jika diterjemahkan langsung ke bahasa Indonesia dapat diartikan menjadi 'Gunung Tua'.",
  "Petra adalah sebuah kota yang didirikan dengan ukiran dinding-dinding pada tebing berbatu di Yordania. Kata Petra berasal dari bahasa Yunani yang artinya adalah Batu. Petra merupakan ibukota kerajaan Nabatean yang dibangun oleh Raja Aretas IV pada tahun 9 SM hingga tahun 40 Masehi. Situs ini ditemukan oleh penggelana Swiss yang bernama Johann Ludwig Burckhardt pada tahun 1812.",
  "Christ the Redeemer atau Patung Kristus Penebus adalah sebuah Patung Yesus yang berada di atas gunung Corcovado Kota Rio de Janeiro, Brasil. Patung Yesus ini memiliki ketinggian sekitar 38 meter dan memerlukan 5 tahun untuk menyelesaikannya.  Patung Christ the Redeemer atau Patung Kristus Penebus ini diresmikan pada tanggal 12 Oktober 1931 dan merupakan salah satu dari 5 monumen terbaik di dunia ini.",
  "Roman Colosseum merupakan sebuah bangunan yang diperuntukkan sebagai tempat penyelenggaran pertunjukan yang spektakuler seperti pertarungan antara binatang, pertarungan antara tahanan dan binatang serta pertarungan gladiator.  Situs Colosseum yang berada di Kota Roma Italia ini dibangun oleh Kaisar Vespasian pada masa Domitianus pada tahun 72 Masehi dan diselesaikan oleh anaknya yang bernama Titus pada tahun 80 Masehi."
]


//mengubah gambar banner setiap beberapa detik
let i = 2;
setInterval(() => {
  if (i == 8) {
    return i = 1;
  }
  banner.setAttribute('src', 'ASSET/banner/banner_'+ i +'.jpg');
  judul.innerHTML = text[i-1];
  article.innerHTML = paragraf[i-1];
  detail.setAttribute('href', '#'+i);
  i++
}, 6000);

let j = 2;



//mengaktifkan dan mennonaktifkan dropdown menu dengan mengklick hamburger menu
dropdown.addEventListener("click", function() {
  menu.classList.toggle("play")
  if (j == 3) {
    j = 1
  }
  dropdown.setAttribute('src', 'ASSET/nav/'+j+'_btn.png')
  j++
})



//mennonaktifkan dropdown ketika menu di pilih dan mengubah icon cancel menjadi hamburger menu
btn.forEach(function(e) {
  e.addEventListener("click", function() {
    menu.classList.remove("play")
    j = 2
    dropdown.setAttribute('src', 'ASSET/nav/'+(j-1)+'_btn.png')
  })
})