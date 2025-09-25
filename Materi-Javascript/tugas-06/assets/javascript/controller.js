import users from "./data.js";
const index = () => {
    // Tampilkan data menggunakan map() untuk memformat
    const displayData = users.map((user, index) => {
        return `${index + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`;
    });
    
    console.log("=== DAFTAR DATA USERS ===");
    displayData.forEach(item => console.log(item));
    console.log("========================\n");
};
const store = (user) => {
    users.push(user);
    console.log("Data berhasil ditambahkan:", user);
};
const destroy = (index) => {
    if (index >= 0 && index < users.length) {
        const deletedUser  = users.splice(index, 1)[0];
        console.log("Data berhasil dihapus:", deletedUser );
    } else {
        console.log("Index tidak valid!");
    }
};
export { index, store, destroy };
