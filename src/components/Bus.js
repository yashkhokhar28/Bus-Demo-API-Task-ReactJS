import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
function Bus() {
  const [Buses, setBuses] = useState([]);
  useEffect(() => {
    fetch("https://631eb76558a1c0fe9f5630b6.mockapi.io/BusDemo")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setBuses(res);
      });
  }, []);
  const formatedBus = Buses.map((bs) => {
    return (
      <>
        <div class="card col-md-3 m-3 text-center">
          <img src={bs.BusImage} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{bs.BusName}</h5>
            <p class="card-text">{bs.BusDriverName}</p>
            <Link to={"../buses/" + bs.id}>
              <a href="#" class="btn btn-primary">
                More Info
              </a>
            </Link>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="row justify-content-center">{formatedBus}</div>
    </>
  );
}

export default Bus;
