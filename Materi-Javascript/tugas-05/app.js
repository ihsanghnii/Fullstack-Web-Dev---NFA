// Data Produk
let produkList = [
    {id: 1, nama: "Laptop", harga: 12000000},
    {id: 2, nama: "Smartphone", harga: 5000000},
    {id: 3, nama: "Tablet", harga: 1000000},
    {id: 4, nama: "Headphone", harga: 500000},
    {id: 5, nama: "Smartwatch", harga: 800000}
];

const eventHandler = {

}

// menambahkan produk dengan spread operator
function tambahProduk(id, nama, harga) {
    const produkBaru = {id, nama, harga};
    produkList = [...produkList, produkBaru];
}

function hapusProduk(...ids) {
    produkList = produkList.filter(produk => !ids.includes(produk.id));
}

function tampilkanProduk() {
    for(const {id, nama, harga} of produkList) {
        console.log(`Id Produk : ${id}, Nama Produk : ${nama}, Harga Produk : ${harga}`);
    }
}