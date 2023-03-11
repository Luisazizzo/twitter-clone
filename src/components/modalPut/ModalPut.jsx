import { useState } from "react";
import "./index.css";

const ModalPut = ({ setModalPut, modalPut }) => {
  const [inputTitle, setInputTitle] = useState(modalPut.message);
  const [disabled, setDisabled] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setDisabled(true);
    fetch(`https://dummyjson.com/posts/${modalPut.postId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        body: inputTitle,
      }),
    })
      .then((res) => res.json())
      .then(setModalPut(false));
  };

  return (
    <div className="ModalPut">
      <div className="ModalPut__modal">
        <p onClick={() => setModalPut(false)} className="close-modal">
          x
        </p>
        <h3>{modalPut.name}</h3>
        <form onSubmit={submitForm}>
          <textarea
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          ></textarea>
          <input disabled={disabled} type="submit" value="Modifica post" />
        </form>
      </div>
    </div>
  );
};
export default ModalPut;
