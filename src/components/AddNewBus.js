import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.css";
function AddNewBus() {
  const navigate = useNavigate();
  const params = useParams();
  const [Buses, setBuses] = useState({ BusName: "" });
  useEffect(() => {
    if (params.id > 0) {
      fetch(
        "https://631eb76558a1c0fe9f5630b6.mockapi.io/BusDemo/" + params.id,
        {
          method: "GET",
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setBuses(res);
        });
    }
  }, []);
  return (
    <>
      <div className="container d-grid gap-3 rounded-5 shadow-sm p-3 mb-5 bg-body rounded my-3">
        <div class="input-group">
          <span class="input-group-text">Bus Name</span>
          <input
            value={Buses.BusName}
            type="text"
            aria-label="First name"
            class="form-control"
            onChange={(e) => {
              setBuses({ ...Buses, BusName: e.target.value });
            }}
          />
        </div>
        <div class="input-group">
          <span class="input-group-text">Bus RTO Number</span>
          <input
            value={Buses.BusRTONumber}
            type="text"
            aria-label="First name"
            class="form-control"
            onChange={(e) => {
              setBuses({ ...Buses, BusRTONumber: e.target.value });
            }}
          />
        </div>
        <div class="input-group">
          <span class="input-group-text">Bus Driver Name</span>
          <input
            value={Buses.BusDriverName}
            type="text"
            aria-label="First name"
            class="form-control"
            onChange={(e) => {
              setBuses({
                ...Buses,
                BusDriverName: e.target.value,
              });
            }}
          />
        </div>
        <div class="input-group">
          <span class="input-group-text">Bus Average</span>
          <input
            value={Buses.BusAverage}
            type="text"
            aria-label="First name"
            class="form-control"
            onChange={(e) => {
              setBuses({ ...Buses, BusAverage: e.target.value });
            }}
          />
        </div>
        <div class="input-group">
          <span class="input-group-text">Bus No Of KM</span>
          <input
            value={Buses.BusNoOfKM}
            type="text"
            aria-label="First name"
            class="form-control"
            onChange={(e) => {
              setBuses({ ...Buses, BusNoOfKM: e.target.value });
            }}
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">
            https://example.com/users/
          </span>
          <input
            value={Buses.BusImage}
            type="text"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            onChange={(e) => {
              setBuses({ ...Buses, BusImage: e.target.value });
            }}
          />
        </div>
        <button
          type="button"
          class="btn btn-outline-primary d-grid gap-2"
          onClick={() => {
            if (params.id > 0) {
              fetch(
                "https://631eb76558a1c0fe9f5630b6.mockapi.io/BusDemo/" +
                  params.id,
                {
                  method: "PUT",
                  body: JSON.stringify(Buses),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              ).then(() => {
                navigate("/buses");
              });
            } else {
              fetch("https://631eb76558a1c0fe9f5630b6.mockapi.io/BusDemo", {
                method: "POST",
                body: JSON.stringify(Buses),
                headers: {
                  "Content-Type": "application/json",
                },
              }).then((res) => {
                navigate("/buses");
              });
            }
          }}
        >
          {params.id > 0 && "Edit  "}
          {!(params.id > 0) && "Add  "}
          Bus
        </button>
      </div>
    </>
  );
}
export default AddNewBus;
