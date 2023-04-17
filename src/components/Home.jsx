import React from "react";
import { useSelector } from "react-redux";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineLink,
} from "react-icons/ai";

export default function Home() {
  const bets = useSelector((state) => state.bets);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" >
      <div className="home-cards d-flex flex-column flex-lg-row justify-content-center align-items-center vh-100 pt-lg-5 ">
        {bets.map((i) => (
          <div
            className="card shadow mx-4 d-flex flex-direction justify-content-center align-items-center bg-dark text-white p-2 p-md-0"
            id="cards"
            key={i.tableId}
          >
            <img
              className="card-img-top h-md-50  bg-white p-2 rounded-circle shadow bg-body"
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
      <div className="footer d-flex justify-content-center align-items-center position-fixed bottom-0 bg-dark w-100 text-white">
        <a
          href="https://github.com/halituzan"
          rel="no follow noreferrer"
          target="_blank"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/halituzan/"
          rel="no follow noreferrer"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://twitter.com/halituzan"
          rel="no follow noreferrer"
          target="_blank"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          href="https://halituzan.github.io"
          rel="no follow noreferrer"
          target="_blank"
        >
          <AiOutlineLink />
        </a>
      </div>
    </div>
  );
}
