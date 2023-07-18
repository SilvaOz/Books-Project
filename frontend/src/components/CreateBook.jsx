import { useState } from "react"
import { useNavigate } from "react-router-dom";


function CreateBook() {
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  const changeBookHandler = (key, value) => {
    setBook((prevState) => {
      return {
        ...prevState,
        [key]: value
      }
    })
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    await fetch(`http://localhost:4000/books`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(book)
    });
    navigate("/");
  }

  return (
    <form>
    <h1>Create a New Book</h1>
    <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
      
      <input
        placeholder="Title"
        value={book.title}
        onChange={(event) => changeBookHandler("title", event.target.value)}
      />
    </div>
    <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
      <input
        placeholder="Author"
        value={book.author}
        onChange={(event) => changeBookHandler("author", event.target.value)}
      />
    </div>
    <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
      <input
        placeholder="ISBN"
        value={book.ISBN}
        onChange={(event) => changeBookHandler("ISBN", event.target.value)}
      />
    </div>
    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <label style={{ marginRight: "10px" }}>Is Good Book?</label>
      <input
        type="checkbox"
        value={book.isGoodBook}
        onChange={(event) => changeBookHandler("isGoodBook", event.target.checked)}/>
    </div>
    <button onClick={(event) => submitHandler(event)}>Submit</button>
  </form>
  

  )
}

export default CreateBook
