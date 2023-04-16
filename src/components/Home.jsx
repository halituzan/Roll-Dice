import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const bets = useSelector((state) => state.bets);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {bets.map((i) => (
        <div
          className="card shadow mx-4 d-flex flex-direction justify-content-center align-items-center bg-dark text-white p-2"
          id="cards"
          key={i.tableId}
        >
          <img
            className="card-img-top bg-white p-2 rounded-circle shadow bg-body"
            src="/dice.png"
            alt="dice"
            style={{ transform: i.rotate }}
          />
          
          <div className="card-body">
            <h5 className="card-title">{i.betName}</h5>
            <div className="card-boy-bottom d-flex">
              <p className="card-text d-flex justify-content-center align-items-center">
                <span> Hesap: </span>
              </p>
              <p className="ms-1">
                <span className="fw-bold">
                  {i.account === 1000
                    ? "1.000 "
                    : i.account === 10000
                    ? "10.000 "
                    : "100.000 "}
                </span>
                <img src="/gold.svg" alt="Gold" style={{ width: "20px" }} />
              </p>
            </div>
            <div className="card-boy-bottom d-flex">
              <p className="card-text d-flex justify-content-center align-items-center">
                <span> Min Bet: </span>
              </p>
              <p className="ms-1">
                <span className="fw-bold"> {i.minBet} </span>
                <img src="/gold.svg" alt="Gold" style={{ width: "20px" }} />
              </p>
            </div>
            <div className="card-boy-bottom d-flex">
              <p className="card-text d-flex justify-content-center align-items-center">
                <span> Max Bet: </span>
              </p>
              <p className="ms-1">
                <span className="fw-bold"> {i.minBet} </span>
                <img src="/gold.svg" alt="Gold" style={{ width: "20px" }} />
              </p>
            </div>
            <a href={`/${i.url}`} className="btn btn-primary">
              Oyna
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
