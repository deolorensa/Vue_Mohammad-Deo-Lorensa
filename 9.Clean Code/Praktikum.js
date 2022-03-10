class kendaraan {
    totalRoda = 0
    kecepatanPerJam = 0
}
void main(); {
    mobilCepat = new mobil()
    mobilCepat.berjalan();
}
class mobil extends kendaraan {
    void berjalan(); {
        tambahKecepatan(10);
    }
    tambahKecepatan( kecepatanBaru ) {
        kecepatanPerJam = kecepatanPerJam +kecepatanBaru
    }
}

