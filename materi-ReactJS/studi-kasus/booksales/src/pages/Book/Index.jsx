import { useState } from "react";
import books from "../../utils/books";
import styles from "../../styles/book.module.css";

function Book() {
  const [bookList, setBookList] = useState([...books]);

  const handleClick = () => {
    const newProduk = {
      id: bookList.length + 1,
      title: "Membangun API Modern dengan GraphQL",
      author: "Ahmad Zulkifli",
      year: 2020,
      description:
        "Pelajari cara membuat query data yang lebih efisien dan fleksibel dari backend menggunakan GraphQL.",
      image: "https://example.com/images/graphql-api.jpg",
    };
    setBookList((prevList) => [...prevList, newProduk]);
    alert("Sukses!!! Produk Berhasil Ditambahkan");
  };

  return (
    <div className={styles.bookContainer}>
      <h1 className={styles.title}>Daftar Buku</h1>
      <p className={styles.deskripsi}>
        Terdapat berbagai macam buku yang tersedia untuk dibaca semua orang
      </p>
      <button onClick={handleClick} className={styles.addButton}>
        Tambah Buku
      </button>
      <div className={styles.cardContainer}>
        {bookList.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>Author: {item.author}</p>
            <p>Tahun Terbit: {item.year}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Book;
