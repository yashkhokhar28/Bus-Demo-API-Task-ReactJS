import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.css";
function BusDetails() {
  let params = useParams();
  const navigate = useNavigate();
  const [Buses, setBuses] = useState({});

  useEffect(() => {
    fetch("https://631eb76558a1c0fe9f5630b6.mockapi.io/BusDemo/" + params.id, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setBuses(res);
      });
  }, []);
  return (
    <>
      <div className="main-container">
        <div className="image-container">
          <img src={Buses.BusImage} />
        </div>
        <div className="name-container">
          <h1>
            <p>Bus Name : {Buses.BusName}</p>
          </h1>
          <ul>
            <li>
              <p>Bus RTO Number : {Buses.BusRTONumber}</p>
            </li>
            <li>
              <p>Bus Driver Name : {Buses.BusDriverName}</p>
            </li>
            <li>
              <p>Bus Average : {Buses.BusAverage}</p>
            </li>
            <li>
              <p>Bus No Of KM : {Buses.BusNoOfKM}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          type="button"
          class="btn btn-outline-danger"
          onClick={() => {
            fetch(
              "https://631eb76558a1c0fe9f5630b6.mockapi.io/BusDemo/" +
                params.id,
              {
                method: "DELETE",
              }
            ).then((res) => {
              navigate("/buses");
            });
          }}
        >
          Delete
        </button>

        <button
          type="button"
          class="btn btn-outline-warning"
          onClick={() => {
            navigate("/buses/edit/" + params.id);
          }}
        >
          Edit Bus Info
        </button>
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={() => {
            navigate("/buses");
          }}
        >
          Back
        </button>
      </div>
    </>
  );
}
export default BusDetails;
