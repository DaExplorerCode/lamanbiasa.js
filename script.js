document.title = "Welcome!"
let menutapiteks;
var umur = null;
var angka1 = null;
var angka2 = null;
document.write("<i>memunculkan hasil dari prompt yang kamu interaksikan di LamanBiasa.js...</i>");
document.write("</br>");
document.write("</br>");
document.write("</br>");
document.write("</br>");
menutapiteks = prompt("kita mau testing apa nih");
document.title = "LamanBiasaJS - JS Testing";
if (menutapiteks === "pengecekangka") {
  document.write("user memilih menu tentang pengecek angka 😀🔢")
  document.write("</br>")
  var angka1 = prompt("masukan angka pertama")
  var angka2 = prompt("masukan angka ke dua yang mau dibandingkan dengan angka pertama")
  if (angka1 > angka2) {
    document.write("angka " + angka1 + " lebih besar daripada angka " + angka2)
  }
  else if (angka1 < angka2) {
    document.write("angka " + angka1 + " lebih kecil daripada angka " + angka2)
  }
  else if (angka1 = angka2) {
    document.write("lah hasilnya sama")
  }
  else if (angka1 = null) {
    document.write("lah belom ngisi yang angka 1")
  }
  else if (angka2 = null) {
    document.write("lah belom ngisi yang angka 2")
  }
}
if (menutapiteks === "pengecekangkaganjil") {
  document.write("user memilih menu tentang pengecek angka 😀🔢 (VERSI GANJIL)")
  document.write("</br>")
  var angkaganjiltester = prompt("masukan angka yang mau dideteksi oleh LamanBiasa.js")
  if (angkaganjiltester % 2 === 0) {
    document.write("angkanya genap")
  }
  else if (angkaganjiltester % 2 === 1) {
    document.write("angkanya dah ganjil")
  }
  else if (angkaganjiltester = null) {
    document.write("lah belom ngisi")
  }
}
if (menutapiteks === "pengecekumuruntuksim") {
  document.write("user memilih menu tentang pengecek umur untuk sim")
  document.write("</br>")
  var umuruntuksim = prompt("masukan umur (dengan format angka) (BOLEH NGASAL SA NGETIK NOMOR)")
  if (umuruntuksim > 16) {
    document.write("wah bisa tuh dapet sim")
  }
  else if (umuruntuksim < 16) {
    document.write("belom bisa dapet sim")
  }
  else if (umuruntuksim = null) {
    document.write("lah belom ngisi")
  }
}
if (menutapiteks === "mengulangteks") {
  document.write("user memilih menu tentang mengulang teks")
  document.write("</br>")
  document.write("</br>")

  var angkayangmaudirepeat = prompt("angka akhir nya?")

  var angkacount = prompt("count dari berapa nih?")

  var teksuntukrepeat = prompt("teks yang mau kamu repeat")

  for (i = angkacount; i < angkayangmaudirepeat; i++) {
    document.write(teksuntukrepeat)
    document.write("</br>")

    if (angkacount > angkayangmaudirepeat) {
      document.write("lah kok angka count lebih banyak? Jadi undefiend dong :/")
    }
  }
}
if (menutapiteks === "mengacakangka") {
  document.write("user memilih menu tentang mengacak angka")
  document.write("</br>")
  document.write("</br>")

  var angkarandom = prompt("range angkanya (buat ngerandom angkanya) dari 0 ke angka berapa?")
  document.write("Angkanya adalah: " + Math.floor(Math.random() * angkarandom))
}

if (menutapiteks === "penebakumur") {
  document.write("user memilih menu tentang penebak umur")
  document.write("</br>")
  document.write("</br>")
var tahunLahir = prompt("tahun lahir kamu itu berapa?")
var umur = tahun - tahunLahir
//tahunnya udah di defind (bukan tahun lahir), coba liat di 'some_library.js'
document.write("umur kamu itu adalah "+umur+" atau "+(umur-1))
}
