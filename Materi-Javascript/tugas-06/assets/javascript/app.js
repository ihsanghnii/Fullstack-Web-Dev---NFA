import { index, store, destroy } from "./controller.js";
const main = () => {
    // Setup event delegation di document (sekali saja, sebelum index)
    document.addEventListener('click', (e) => {
        console.log("Click event triggered on:", e.target.tagName, e.target.className); // Debug: Apa yang diklik
        // Check jika target adalah button delete-btn (atau child-nya)
        if (e.target.matches('button.delete-btn') || e.target.closest('button.delete-btn')) {
            const button = e.target.matches('button.delete-btn') ? e.target : e.target.closest('button.delete-btn');
            console.log("Target matches delete-btn: true"); // Debug match
            console.log("Raw dataset.index:", button.dataset.index); // Debug raw
            const indexToDelete = Number(button.dataset.index); // Modern parse (NaN jika invalid)
            console.log("Parsed index:", indexToDelete, "(type:", typeof indexToDelete + ")"); // Debug parsed
            if (isNaN(indexToDelete)) {
                console.log("Invalid index - NaN!");
                alert("Error: Index tidak valid!");
                return;
            }
            console.log("Calling destroy with index:", indexToDelete); // Debug call
            // Hilangkan confirm sementara untuk test cepat
            // if (confirm("Yakin hapus?")) {
                destroy(indexToDelete);
            // }
        } else {
            console.log("Click not on delete-btn"); // Debug jika klik salah
        }
    });
    console.log("Event delegation setup di document");
    // Tampilkan data awal SETELAH setup
    index();
    // Handle form submit (event listener dasar)
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nama = document.getElementById('nama').value.trim();
            const umurInput = document.getElementById('umur').value;
            const umur = parseInt(umurInput);
            const alamat = document.getElementById('alamat').value.trim();
            const email = document.getElementById('email').value.trim();
            if (!nama || !umurInput || umur <= 0 || !alamat || !email || isNaN(umur)) {
                alert('Isi semua field dengan benar!');
                return;
            }
            const newUser  = { nama, umur, alamat, email };
            store(newUser );
            form.reset();
            alert("Data ditambahkan: " + nama);
        });
    }
};
document.addEventListener('DOMContentLoaded', main);