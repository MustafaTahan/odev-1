let name = prompt("Adınızı Giriniz: ");
let myName = document.querySelector("#myName");
myName.innerHTML = `${name}`;

function tarihSaat() {
  let tarih = new Date().toLocaleString("tr-TR");
  let clock = document.querySelector("#myClock");
  clock.innerHTML = `${tarih}`;
}
setInterval(tarihSaat, 1000);