var a = 5;
let b = " kampus merdeka ";
const nama = " Budi ";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
    let asal = " indonesia ";
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
