import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function Edit() {
  const params = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();
  // 1. Fetch das Buch mit der id aus dem URL Parameter.
  useEffect(() => {
    const fetchBook = async () => {
      const data = await fetch(`http://localhost:4000/books/${params.id}`); // Ist standardmäßig ein fetch request.
      const json = await data.json();

      console.log(json);
      setBook(json);
    }
    fetchBook();
  }, [params.id]) // Leerer Array heißt, dass der useEffect nur ausgeführt wird wenn die komponente das erste Mal lädt.
  // 2. Tu alle daten aus dem Buch in die Form
  // 3. Wenn submit geklickt wird, soll ein patch request ausgeführt werden der das Buch im Backend verändert. 

  // key ist z.b "title", value ist "lord of the ringsa"
  const changeBookHandler = (key, value) => {
    setBook((prevState) => { // prevState = {author: "jrr tolkien", title: "lord of the rings", isbn: "alsdkjf", isGoodBook: false}
      return {
        ...prevState, // {author: "jrr tolkien", title: "lord of the rings", isbn: "alsdkjf", isGoodBook: false}
        [key]: value // prevState.title = "lord of the ringsa"
      }
    }) // {author: "jrr tolkien", title: "lord of the ringsa", isbn: "alsdkjf", isGoodBook: false}
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    await fetch(`http://localhost:4000/book/${params.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(book)
    });
    navigate("/");
  }

  return (
    <>
      <form>
        <h1>Edit Book</h1>
        <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
          <label style={{ minWidth: "100px", marginRight: "10px" }}>Title:</label>
          <input
            style={{ flex: "1", minWidth: "400px" }}
            value={book.title || ""} // Asegura que book.title no sea undefined
            onChange={(event) => changeBookHandler("title", event.target.value)}
          />
        </div>
        <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
          <label style={{ minWidth: "100px", marginRight: "10px" }}>Author:</label>
          <input
            style={{ flex: "1", minWidth: "400px" }}
            value={book.author || ""} // Asegura que book.author no sea undefined
            onChange={(event) => changeBookHandler("author", event.target.value)}
          />
        </div>
        <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
          <label style={{ minWidth: "100px", marginRight: "10px" }}>ISBN:</label>
          <input
            style={{ flex: "1", minWidth: "400px" }}
            value={book.ISBN || ""} // Asegura que book.ISBN no sea undefined
            onChange={(event) => changeBookHandler("ISBN", event.target.value)}
          />
        </div>
        <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
          <label style={{ minWidth: "100px", marginRight: "10px" }}>Is Good Book?</label>
          <input
            type="checkbox"
            checked={book.isGoodBook || false} // Asegura que book.isGoodBook no sea undefined
            onChange={(event) => changeBookHandler("isGoodBook", event.target.checked)}
          />
        </div>
        <button onClick={(event) => submitHandler(event)}>Submit</button>
      </form>
    </>
  )
}

export default Edit
