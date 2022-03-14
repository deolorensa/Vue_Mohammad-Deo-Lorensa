class kendaraan {
    totalRoda = 0
    kecepatanPerJam = 0
}
class mobil extends kendaraan {
    void (berjalan) {
        tambahKecepatan(10)
    }
    tambahKecepatan( kecepatanBaru ) {
        kecepatanPerJam = kecepatanPerJam +kecepatanBaru
    }
}

void main(mobilCepat, mobilLambat); {
    new mobil()
    berjalan()
}
