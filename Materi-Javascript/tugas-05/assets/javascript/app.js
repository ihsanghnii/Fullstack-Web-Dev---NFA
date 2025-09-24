let produkList = [
    {id: 1, nama: "Laptop", harga: 12000000},
    {id: 2, nama: "Smartphone", harga: 5000000},
    {id: 3, nama: "Tablet", harga: 1000000},
    {id: 4, nama: "Headphone", harga: 500000},
    {id: 5, nama: "Smartwatch", harga: 800000}
];

const tombolTambah = document.getElementById("tombolTambah");
const inputNama = document.getElementById("namaProduk");
const inputHarga = document.getElementById("hargaProduk");
const tbody = document.getElementById("daftarProduk");

// Menampilkan produk ke tabel HTML
function tampilkanProduk() {
    tbody.innerHTML = "";

    for(const {id, nama, harga} of produkList) {
        const barisBaru = tbody.insertRow();
        barisBaru.insertCell().textContent = id;
        barisBaru.insertCell().textContent = nama;
        barisBaru.insertCell().textContent = harga;

        const aksi = barisBaru.insertCell();
        const tombolHapus = document.createElement("button");
        tombolHapus.textContent = "Hapus";
        tombolHapus.className = "btn-hapus";
        tombolHapus.addEventListener("click", function() {
            const konfirmasi = confirm(`Anda yakin ingin menghapus "${nama}"?`);
            if (konfirmasi) {
                hapusProduk(id);
                tampilkanProduk();
            }
        });

        aksi.appendChild(tombolHapus);
    }
}

// Menambahkan produk baru
function tambahProduk(nama, harga) {
    const maxId = produkList.length > 0 ? Math.max(...produkList.map(p => p.id)) : 0;
    const newId = maxId + 1;

    const produkBaru = {
        id: newId,
        nama: nama,
        harga: parseInt(harga)
    };

    produkList = [...produkList, produkBaru];
}

// Menghapus produk
function hapusProduk(...ids) {
    produkList = produkList.filter(produk => !ids.includes(produk.id));
}

tombolTambah.addEventListener("click", function() {
    const nama = inputNama.value;
    const harga = inputHarga.value;

    if (nama && harga) {
        tambahProduk(nama, harga);
        tampilkanProduk();

        alert(`Produk "${nama}" Berhasil Ditambahkan`);

        inputNama.value = "";
        inputHarga.value = "";
    } else {
        alert("Nama dan harga produk tidak boleh kosong!");
    }
});

tampilkanProduk();