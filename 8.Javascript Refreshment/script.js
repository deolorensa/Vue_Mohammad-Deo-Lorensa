var a = 5;
let b = " kampus merdeka ";
const nama = " Budi ";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];
let asal = " indonesia ";

function perkenalan() {
    return console.log(
        " perkenalkan nama saya " +
        nama +
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        " berasal dari " +
        asal
    );
}

if (terdaftar===true){
    console.log(nama + "terdaftar sebagai kegiatan kampus merdeka")
}
console.log(" array = " + nama)
console.log(" a adalah = " + b)
console.log(" b adalah = " + b)
perkenalan()
