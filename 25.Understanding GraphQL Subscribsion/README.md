Resume Section 25 GraphQL Subscription

memungkinkan Anda mengambil data. Tidak seperti kueri, langganan adalah operasi jangka panjang yang dapat mengubah hasilnya seiring waktu. Mereka dapat mempertahankan koneksi aktif ke server GraphQL Anda (paling sering melalui WebSocket), memungkinkan server untuk mendorong pembaruan ke hasil langganan.

GraphQL menggunakan pendekatan berbasis Peristiwa untuk mengimplementasikan operasi berlangganannya. Klien berlangganan untuk beberapa acara tertentu ke server. Server memberi tahu klien setiap kali peristiwa ini dipicu

Overall, our subscription test file looks like this: describe( 'GraphQL API Subscriptions', ( ) => { before( async function() { // Server startup } ) after( async function() { // Server shutdown } ) // Actual tests follow it( 'Should test a subscription', async ( ) => { // ... } ) })

Subscriptions in AWS AppSync are invoked as a response to a mutation. This means that you can make any data source in AWS AppSync real time by specifying a GraphQL schema directive on a mutation. The AWS Amplify client libraries automatically handle subscription connection management.