Resume Vue Helper

Vuex adalah pola manajemen negara + perpustakaan untuk aplikasi Vue.js. Ini berfungsi sebagai penyimpanan terpusat untuk semua komponen dalam aplikasi, dengan aturan yang memastikan bahwa status hanya dapat dimutasi dengan cara yang dapat diprediksi.

Vuex menggunakan pohon status tunggal - yaitu, objek tunggal ini berisi semua status tingkat aplikasi Anda dan berfungsi sebagai "satu-satunya sumber kebenaran". Ini juga berarti biasanya Anda hanya akan memiliki satu toko untuk setiap aplikasi. Pohon keadaan tunggal memudahkan untuk menemukan bagian tertentu dari keadaan, dan memungkinkan kita untuk dengan mudah mengambil snapshot dari keadaan aplikasi saat ini untuk tujuan debugging.

Terkadang kita mungkin perlu menghitung status turunan berdasarkan status penyimpanan, misalnya memfilter daftar item dan menghitungnya:

Jika lebih dari satu komponen perlu menggunakan ini, kita harus menduplikasi fungsi tersebut, atau mengekstraknya ke helper bersama dan mengimpornya di banyak tempat - keduanya kurang ideal.

Vuex memungkinkan kita untuk mendefinisikan "getter" di toko. Anda dapat menganggapnya sebagai properti yang dihitung untuk toko.
Satu-satunya cara untuk benar-benar mengubah status di toko Vuex adalah dengan melakukan mutasi. Mutasi Vuex sangat mirip dengan event: setiap mutasi memiliki tipe string dan handler. Fungsi handler adalah tempat kami melakukan modifikasi status aktual, dan itu akan menerima status sebagai argumen pertama:

# helper-apps

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
