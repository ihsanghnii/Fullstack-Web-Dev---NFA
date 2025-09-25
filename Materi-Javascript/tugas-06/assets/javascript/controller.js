import users from "./data.js";

const index = () => {
    const userListElement = document.getElementById("user-list");
    userListElement.innerHTML = "";
    users.map((user, index) => {
        const row = `
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
        userListElement.innerHTML += row;
    });
};

const store = (user) => {
    users.push(user);
};

const destroy = (index) => {
    users.splice(index, 1);
};

export { index, store, destroy };