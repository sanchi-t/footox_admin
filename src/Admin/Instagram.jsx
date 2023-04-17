import { useState } from "react";
import ReactDOM from "react-dom/client";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import swal from "sweetalert";
export function MyForm() {
  const data1 = new FormData();

  const [linkInput, setLink] = useState({
    link1: "",
    link2: "",
    link3: "",
  });

  const handleInput = (e) => {
    setLink({ ...linkInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(linkInput);

    data1.append("link1", linkInput.link1);
    data1.append("link2", linkInput.link2);
    data1.append("link3", linkInput.link3);

    console.log(data1.get("link1"));
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}links/`, data1)
      .then((res) => {
        console.log(res.status);

        alert("Success", res.data.message, "success");
        setLink({
          ...linkInput,
          link1: "",
          link2: "",
          link3: "",
        });
      });
  };

  return (
    <>
      <AdminNavbar />
      <form>
        <br />
        <h1 style={{ fontSize: "40px" }}>Instagram Links</h1>
        <br />
        <br />
        <div className="form-group row mb-3 gx-5 g-0">
          <label
            className="col-sm-1.5 col-form-label"
            style={{ fontSize: "20px" }}
          >
            <p style={{ marginLeft: "-1035px" }}>Link 1 </p>
          </label>
          <div className="col-sm-4 mb-3" style={{ marginLeft: "170px" }}>
            <input
              type="text"
              name="link1"
              className="form-control"
              onChange={handleInput}
              value={linkInput.link1}
              style={{ borderColor: "grey" }}
            />
          </div>

          <label
            className="col-sm-1.5 col-form-label"
            style={{ fontSize: "20px" }}
          >
            <p style={{ marginLeft: "-1035px" }}>Link 2</p>
          </label>
          <div className="col-sm-4 mb-3" style={{ marginLeft: "170px" }}>
            <input
              type="text"
              name="link2"
              className="form-control"
              onChange={handleInput}
              value={linkInput.link2}
              style={{ borderColor: "grey" }}
            />
          </div>
          {/* <button className="btn btn-primary col-md-1 form-group mb-3 float-end" onClick={handleSubmit2}>Save</button> */}

          <label
            className="col-sm-1.5 col-form-label"
            style={{ fontSize: "20px" }}
          >
            <p style={{ marginLeft: "-1035px" }}>Link 3</p>
          </label>
          <div className="col-sm-4" style={{ marginLeft: "170px" }}>
            <input
              type="text"
              name="link3"
              onChange={handleInput}
              value={linkInput.link3}
              className="form-control"
              style={{ borderColor: "grey", float: "left" }}
            />
          </div>
          <button
            style={{ float: "right" }}
            className="btn btn-primary col-md-1 form-group mb-3 float-end"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
