import users from "./data.js"

const userListTabel = document.getElementById("user-list");

const index = () => {
    userListTabel.innerHTML = "";
    const rows = users.map(({nama, umur, alamat, email}, nomor) => {
        return `
        <tr>
            <td>${nomor + 1}</td>
            <td>${nama}</td>
            <td>${umur}</td>
            <td>${alamat}</td>
            <td>${email}</td>
            <td>
                <button class="btn btn-danger btn-sm btn-hapus" data-nama="${nama}">Hapus</button>
            </td>
        </tr>
        `
    }).join("");
    userListTabel.innerHTML = rows;

}

const store = (user) => {
    users.push(user);

}

const destroy = (namaPengguna) => {
    const nomor = users.findIndex(user => user.nama === namaPengguna);
    if(nomor !== -1) {
        users.splice(nomor, 1);
    }
};

userListTabel.addEventListener('click', (event) => {
    if(event.target.classList.contains('btn-hapus')) {
        const namaPengguna = event.target.dataset.nama;
        const konfirmasi = confirm(`yakin ingin hapus ${namaPengguna}?`);
        if (konfirmasi) {
            destroy(namaPengguna);
            index();
        }
    }
})

export {index, store, destroy};