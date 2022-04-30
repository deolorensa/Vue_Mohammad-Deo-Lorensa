Resume Section 24 GraphQL Mutation

Sebagian besar diskusi GraphQL berfokus pada pengambilan data, tetapi semua platform data lengkap memerlukan cara untuk memodifikasi data sisi server juga.

Di REST, permintaan apa pun mungkin berakhir menyebabkan beberapa efek samping pada server, tetapi menurut konvensi, disarankan agar seseorang tidak menggunakan permintaan GET untuk mengubah data. GraphQL serupa - secara teknis kueri apa pun dapat diimplementasikan untuk menyebabkan penulisan data. Namun, berguna untuk menetapkan konvensi bahwa setiap operasi yang menyebabkan penulisan harus dikirim secara eksplisit melalui mutasi.

Sama seperti dalam kueri, jika bidang mutasi mengembalikan tipe objek, Anda dapat meminta bidang bersarang. Ini dapat berguna untuk mengambil status baru suatu objek setelah pembaruan.

Mutasi dapat berisi beberapa bidang, seperti kueri. Ada satu perbedaan penting antara kueri dan mutasi, selain namanya:

Sementara bidang kueri dijalankan secara paralel, bidang mutasi dijalankan secara seri, satu demi satu.

Ini berarti bahwa jika kita mengirim dua mutasi incrementCredits dalam satu permintaan, yang pertama dijamin selesai sebelum yang kedua dimulai, memastikan bahwa kita tidak berakhir dengan kondisi balapan dengan diri kita sendiri.