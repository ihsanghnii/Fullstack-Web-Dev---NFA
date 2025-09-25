import { index, store, destroy } from "./controller.js";

const main = () => {
    index();

    const userForm = document.getElementById("form-tambah");
    userForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const nama = document.getElementById("nama").value;
        const umur = document.getElementById("umur").value;
        const alamat = document.getElementById("alamat").value;
        const email = document.getElementById("email").value;

        const newUser = {
            nama: nama,
            umur: parseInt(umur),
            alamat: alamat,
            email: email,
        };

        store(newUser);
        index();
        userForm.reset();
    });

    const userList = document.getElementById("user-list");
    userList.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-btn")) {
            const hapus = event.target.getAttribute("data-index");
            const konfirmasi = confirm(`Apakah Anda yakin ingin menghapus data ini?`);
            
            if (konfirmasi) {
                destroy(parseInt(hapus));
                index();
            }
        }
    });
};

// Jalankan fungsi utama
main();