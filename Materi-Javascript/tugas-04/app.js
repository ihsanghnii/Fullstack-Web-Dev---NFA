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

    getNama() {
        return this.#nama;
    }

    getTelpon() {
        return this.#nomorTelepon;
    }

    getKendaraan() {
        return this.#kendaraanDisewa;
    }
}

function tampilkanPelanggan() {
    console.log(" --- Daftar Pelanggan Saat Ini --- ");
    for(const pelanggan of daftarPelanggan) {
        if(pelanggan.getKendaraan() !== null) {
            console.log(
                `Nama: ${pelanggan.getNama()}, Telepon: ${pelanggan.getTelpon()}, Kendaraan Sewa: ${pelanggan.getKendaraan()}`
            );
        }
    }
}

const daftarPelanggan = [];
const pelanggan1 = new Pelanggan("budi", "081234567890" , null);
const pelanggan2 = new Pelanggan("dika", "081232337890" , null);
const pelanggan3 = new Pelanggan("jaki", "081234567430" , null);

daftarPelanggan.push(pelanggan1);
daftarPelanggan.push(pelanggan2);
daftarPelanggan.push(pelanggan3);
tampilkanPelanggan();

console.log("\n--- Budi menyewa mobil ---");
pelanggan1.sewa("Mobil");
tampilkanPelanggan();

console.log("\n--- dika menyewa motor ---");
pelanggan2.sewa("Motor");
tampilkanPelanggan();

console.log("\n--- jaki menyewa mobil ---");
pelanggan3.sewa("Mobil");
tampilkanPelanggan();