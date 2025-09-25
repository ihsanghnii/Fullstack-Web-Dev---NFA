import users from "./data.js";
const index = () => {
    const tbody = document.getElementById('user-list');
    if (!tbody) {
        console.error("Tbody tidak ditemukan!");
        return;
    }
    // Gunakan map() untuk generate rows HTML
    const rows = users.map((user, index) => {
        return `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${user.nama}</td>
                <td>${user.umur}</td>
                <td>${user.alamat}</td>
                <td>${user.email}</td>
                <td>
                    <button class="btn btn-danger btn-sm delete-btn" data-index="${index}">Hapus</button>
                </td>
            </tr>
        `;
    }).join('');
    tbody.innerHTML = rows;
    console.log("Tabel direfresh - Total rows:", users.length);
};
const store = (user) => {
    console.log("Sebelum push - Length:", users.length);
    users.push(user);
    console.log("Setelah push - Length:", users.length, "Data baru:", user);
    index();
};
const destroy = (index) => {
    console.log("Mencoba hapus index:", index, "Current length:", users.length);
    // Validasi sederhana
    if (isNaN(index) || index < 0 || index >= users.length) {
        console.log("Index tidak valid - Detail:", { index, length: users.length, isNaN: isNaN(index) });
        alert("Data tidak ditemukan! Index: " + index + " (Length: " + users.length + ")");
        return;
    }
    const deletedUser  = users.splice(index, 1)[0];
    console.log("Setelah hapus - Length:", users.length, "Dihapus:", deletedUser );
    index();
    alert("Data berhasil dihapus: " + deletedUser .nama);
};
export { index, store, destroy };