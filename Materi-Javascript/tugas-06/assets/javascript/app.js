import { index, store, destroy } from "./controller.js";
const main = () => {
    console.log("=== SEBELUM PENAMBAHAN ===\n");
    index();  // Tampilkan data awal (10 items)
    // Tambah dua data baru (minimal 2 seperti tugas)
    const user1 = { nama: 'Rina', umur: 23, alamat: 'Jl. Baru 1', email: 'rina@gmail.com' };
    const user2 = { nama: 'Budi', umur: 26, alamat: 'Jl. Baru 2', email: 'budi@gmail.com' };
    
    store(user1);  // Tambah data pertama
    store(user2);  // Tambah data kedua (sekarang total 12 items)
    console.log("\n=== SETELAH PENAMBAHAN ===\n");
    index();  // Tampilkan setelah tambah
    // Hapus satu data (misalnya index 5, yang merupakan data lama 'Kesya')
    destroy(5);
    console.log("\n=== SETELAH PENGHAPUSAN ===\n");
    index();  // Tampilkan setelah hapus (total 11 items)
};
main();