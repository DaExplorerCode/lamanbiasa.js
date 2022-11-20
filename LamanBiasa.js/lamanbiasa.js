
document.write("<u><b>LamanBiasa.js</b></u>")
document.write("</br>")
document.write("</br>")
document.write("<i>memunculkan hasil dari prompt yang anda interaksikan di LamanBiasa.js...</i>")
document.write("</br>")
document.write("</br>")
document.write("</br>")
document.write("</br>")
setTimeout(function(){
  var user = prompt("username nya apa?")
var kode = prompt("Passwordnya?")
}, 2000);


if (user === "vincent" && kode === "vincentngecodeditimedoor") {
  document.write("halo Vincent! Selamat datang di web simple ini!")
  document.write("</br>")
  document.write("</br>")
  document.write("</br>")
}
  else if (user === "vincent" && kode !== "vincentngecodeditimedoor"){
  document.write("username nya sesuai tapi passwordnya engak sesuai 😐") }
    else if (user !== "vincent" && kode === "vincentngecodeditimedoor"){
  document.write("password nya sesuai tapi usernamenya ga sesuai 😐")
}
else if (user !== "vincent" && kode !== "vincentngecodeditimedoor"){
  document.write("username dan password belom sesuai 😐")
}
if (user === "vincent" && kode === "vincentngecodeditimedoor") { var menutapiteks = prompt("kita mau testing apa nih") }
if (menutapiteks === "pengecekangka") {
  document.write("vincent memilih menu tentang pengecek angka 😀🔢")
  document.write("</br>")
  var angka1 = prompt("masukan angka pertama")
  var angka2 = prompt("masukan angka ke dua yang mau dibandingkan dengan angka pertama")
  if (angka1 > angka2) {
    document.write("angka " + angka1 + " lebih besar dari angka " + angka2)
  }
  else if (angka1 < angka2) {
    document.write("angka " + angka1 + " lebih kecil dari angka " + angka2)
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
  document.write("vincent memilih menu tentang pengecek angka 😀🔢 (VERSI GANJIL)")
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
  document.write("vincent memilih menu tentang pengecek umur untuk sim")
  document.write("</br>")
  var umuruntuksim = prompt("masukan umur (dengan format angka) (BOLEH NGASAL SAAL NGETIK NOMOR)")
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

