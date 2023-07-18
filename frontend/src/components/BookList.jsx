import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';

function BookList() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const data = await fetch("http://localhost:4000/books");
    const json = await data.json();
    console.log(json);
    setBooks(json);
  }

  useEffect(() => {
    fetchBooks();
  }, []) // Leeres Array sagt, dass useEffect nur beim ersten Laden der Komponente ausgeführt werden soll. 

  const handleDelete = async (id) => {
    await fetch(`http://localhost:4000/book/${id}`, {
      method: "DELETE",
    });
    await fetchBooks();
  }

  return (
    <><h1>Books</h1>
      <div style={{ display: "flex" }}>
        <button
          style={{
            marginLeft: "auto",
          }}
        >
          <Link to="/new">Create New Book</Link>
        </button>
      </div>

      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" }}>
        {books.map((book) => (
          <li
            key={book._id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div>
              {`"${book.title}" by `}
              <span className="cursive-text">{book.author}</span>
            </div>

            <div>
              <button onClick={() => handleDelete(book._id)} style={{ marginLeft: 20, marginRight: 5 }}><FaTrash /></button>
              <button>
                <Link to={`edit/${book._id}`}>Edit</Link>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>

  )
}

export default BookList