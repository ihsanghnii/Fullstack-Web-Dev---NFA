const produk_toko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "keyboard", harga: 350000, stok: 7}
];

function tambahProduk(nama, harga, stok) {
    const produkterakhir = produk_toko[produk_toko.length - 1];
    const newId = produkterakhir.id + 1;
    const produkBaru = {
        id: newId,
        nama: nama,
        harga: harga,
        stok: stok
    };

    produk_toko.push(produkBaru);
}

function hapusProduk(id) {
    const indexProduk = produk_toko.findIndex(produk => produk.id === id);
    if (indexProduk !== -1) {
        produk_toko.splice(indexProduk, 1);
    }

    else {
        alert("Gagal menghapus! Produk tidak ditemukan")
    }
}

function tampilkanProduk() {
    for (let produk of produk_toko) {
        console.log(produk);
    }
}

console.log(" --- Daftar Produk --- ");
tampilkanProduk();

console.log(" --- Tambah Produk baru --- ");
tambahProduk("Monitor", 1500000, 10);
tampilkanProduk();

console.log(" --- Hapus Produk --- ");
hapusProduk(1);
tampilkanProduk();