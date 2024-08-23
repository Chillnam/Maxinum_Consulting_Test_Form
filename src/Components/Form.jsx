import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../BLL/FormSlice";

export const Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: "",
    date: "",
    author: "",
    sum: "",
    category: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let editedValue = value;

    if (name === "date") {
      editedValue = new Date(value).toISOString().split("T")[0];
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: editedValue,
    }));
  };

  const handleAdd = () => {
    console.log(formData.date);

    if (
      formData.id &&
      formData.date &&
      formData.author &&
      formData.sum &&
      formData.category
    ) {
      dispatch(addTransaction(formData));
    } else {
      alert("Please fill all necessary fields");
    }
    setFormData({
      id: "",
      date: "",
      author: "",
      sum: "",
      category: "",
      comment: "",
    });
  };

  return (
    <div className="wrapper">
      <p>Add transaction</p>
      <ul>
        <li className="form-elem">
          <p className="text">
            <p>Id</p>
            <p style={{ color: "red", marginLeft: "5px" }}>*</p>
          </p>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="Write transaction number"
          ></input>
        </li>
        <li className="form-elem">
          <p className="text">
            <p>Date</p>
            <p style={{ color: "red", marginLeft: "5px" }}>*</p>
          </p>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          ></input>
        </li>
        <li className="form-elem">
          <p className="text">
            <p>Author</p>
            <p style={{ color: "red", marginLeft: "5px" }}>*</p>
          </p>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Who is making operation"
          ></input>
        </li>
        <li className="form-elem">
          <p className="text">
            <p>Sum</p>
            <p style={{ color: "red", marginLeft: "5px" }}>*</p>
          </p>
          <input
            type="text"
            name="sum"
            value={formData.sum}
            onChange={handleChange}
            placeholder="Total amount sent"
          ></input>
        </li>
        <li className="form-elem">
          <p className="text">
            <p>Category</p>
            <p style={{ color: "red", marginLeft: "5px" }}>*</p>
          </p>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="" selected disabled>
              Select category
            </option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
          </select>
        </li>
        <li className="form-elem">
          <p>Comment</p>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Add comment or description to the operation"
            rows={4}
            cols={30}
          ></textarea>
        </li>
      </ul>
      <div>
        <button onClick={handleAdd}>Submit</button>
      </div>
    </div>
  );
};
