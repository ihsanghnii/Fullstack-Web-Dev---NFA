class Pelanggan {
    #nama;
    #nomorTelepon;
    #kendaraanDisewa;
    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.#nama = nama;
        this.#nomorTelepon = nomorTelepon;
        this.#kendaraanDisewa = kendaraanDisewa;
    }

    sewa(kendaraan) {
        this.#kendaraanDisewa = kendaraan;
    }
}

const pelanggan1 = new Pelanggan("budi", "081234567890" , null);
console.log("Data Pelanggan :", pelanggan1);
pelanggan1.sewa("alphard");
console.log("Data Penyewa :", pelanggan1);

const daftarPelanggan = [
    
]