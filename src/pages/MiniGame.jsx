import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import RollDice from "../components/dice/RollDice";
import "../components/dice/RollDice.css";
export default function MiniGame() {
  const bets = useSelector((state) => state.bets);

  const [miniAccount, setMiniAccount] = useState(bets[0]);
  const { minBet, maxBet, account } = miniAccount;
  const [choice, setChoise] = useState("");
  const [bet, setBet] = useState(minBet);
  const [selectBet, setSelectBet] = useState(null);

  const [intrvl, setIntrvl] = useState();
  const [diceFace, setDiceFace] = useState(null);
  const [rollTimes, setRollTimes] = useState();

  const faces = 6;
  const maxRollTimes = 10;

  const betHandler = (e) => {
    setBet(e.target.value);
  };

  useEffect(() => {
    if (rollTimes === 0) {
      clearInterval(intrvl);
    }
  });

  useEffect(() => {
    if (rollTimes === 0) {
      clearInterval(intrvl);
      resultDice(diceFace);
    }
  }, [rollTimes]);

  const resultDice = (diceNumber) => {
    if (diceNumber < 4 && choice === "Low") {
      setMiniAccount({
        ...miniAccount,
        account: account + parseFloat((bet * 1.44).toFixed(2)),
      });
      toast.success((bet * 1.44).toFixed(2) + "☘ Kazandınız");
    } else if (diceNumber > 3 && choice === "High") {
      setMiniAccount({
        ...miniAccount,
        account: account + parseFloat((bet * 1.44).toFixed(2)),
      });
      toast.success((bet * 1.44).toFixed(2) + "☘ Kazandınız");
    } else if (diceNumber === 1 && choice === "one") {
      setMiniAccount({
        ...miniAccount,
        account: account + parseFloat((bet * 4).toFixed(2)),
      });
      toast.success((bet * 4).toFixed(2) + "☘ Kazandınız");
    } else if (diceNumber === 2 && choice === "two") {
      setMiniAccount({
        ...miniAccount,
        account: account + parseFloat((bet * 4).toFixed(2)),
      });
      toast.success((bet * 4).toFixed(2) + "☘ Kazandınız");
    } else if (diceNumber === 3 && choice === "three") {
      setMiniAccount({
        ...miniAccount,
        account: account + parseFloat((bet * 4).toFixed(2)),
      });
      toast.success((bet * 4).toFixed(2) + "☘ Kazandınız");
    } else if (diceNumber === 4 && choice === "four") {
      setMiniAccount({
        ...miniAccount,
        account: account + parseFloat((bet * 4).toFixed(2)),
      });
      toast.success((bet * 4).toFixed(2) + "☘ Kazandınız");
    } else if (diceNumber === 5 && choice === "five") {
      setMiniAccount({
        ...miniAccount,
        account: account + parseFloat((bet * 4).toFixed(2)),
      });
      toast.success((bet * 4).toFixed(2) + "☘ Kazandınız");
    } else if (diceNumber === 6 && choice === "six") {
      setMiniAccount({
        ...miniAccount,
        account: account + parseFloat((bet * 4).toFixed(2)),
      });
      toast.success((bet * 4).toFixed(2) + "☘ Kazandınız");
    } else {
      toast.warning("Kaybettiniz");
    }
  };

  function rollDice() {
    setSelectBet(null);
    if (bet < minBet) {
      setBet(minBet);
      toast.warning("Bet miktarı minimum betten küçük olamaz.");
    } else if (bet > maxBet) {
      setBet(maxBet);
      toast.warning("Bet miktarı maksimum betten büyük olamaz.");
    } else {
      clearInterval(intrvl);
      let counter = Math.floor(Math.random() * maxRollTimes + 5);
      setRollTimes(counter);
      const interval = setInterval(() => {
        setDiceFace(Math.floor(Math.random() * faces) + 1);
        counter--;
        setRollTimes(counter);
      }, 100);

      setIntrvl(interval);
    }
  }
  const betSelectHandler = () => {
    if (miniAccount.account < account-bet) {
      console.log(bet)
      setSelectBet(account);
      setMiniAccount({ ...miniAccount, account: account });
    } else {
      console.log(bet)
      console.log(account)
      setSelectBet(bet);
      setMiniAccount({ ...miniAccount, account: account - bet });
    }
  };
  // console.log(diceFace);
  // console.log(choice);
  return (
    <div className="d-flex">
      <div className="left bg-light vh-100">
        <RollDice diceFace={diceFace} />
      </div>
      <div className="right bg-black text-light vh-100 p-5 d-flex flex-column justify-content-start align-items-center">
        <h1 className="border p-3 bg-white text-dark">{miniAccount.betName}</h1>
        <div>
          <div className="d-flex me-2 fs-1 border-bottom border-1">
            <div className="me-2">Hesap:</div>
            <div className="d-flex align-items-center">
              <p className="p-0 m-0"> {miniAccount.account.toFixed(2)}</p>
              <img
                src="/gold.svg"
                alt="Gold"
                style={{ width: "40px", marginLeft: "5px" }}
              />
            </div>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center mt-3">
            <h3 className="m-0 p-0">Oyun Seç</h3>
            <div className="game w-100">
              <div className="h-l d-flex justify-content-evenly w-100">
                <button
                  type="button"
                  name="Low"
                  className="btn btn-warning w-100 my-2 mx-2 position-relative"
                  onClick={(e) => setChoise(e.target.name)}
                >
                  Low
                  <span className="dice-lh position-absolute text-white translate-middle top-0 start-0 bg-success  rounded-circle fw-bold">
                    1.44
                  </span>
                </button>
                <button
                  type="button"
                  className="btn btn-danger w-100 my-2 mx-2 position-relative"
                  name="High"
                  onClick={(e) => setChoise(e.target.name)}
                >
                  High
                  <span className="dice-lh position-absolute translate-middle top-0 start-0 bg-success  rounded-circle fw-bold">
                    1.44
                  </span>
                </button>
              </div>
              <div className="dice-number position-relative d-flex justify-content-evenly p-1 border">
                <img
                  src="/dice-numbers/1.svg"
                  alt="one"
                  name="one"
                  onClick={(e) => setChoise(e.target.name)}
                />
                <img
                  src="/dice-numbers/2.svg"
                  alt="two"
                  name="two"
                  onClick={(e) => setChoise(e.target.name)}
                />
                <img
                  src="/dice-numbers/3.svg"
                  alt="three"
                  name="three"
                  onClick={(e) => setChoise(e.target.name)}
                />
                <img
                  src="/dice-numbers/4.svg"
                  alt="four"
                  name="four"
                  onClick={(e) => setChoise(e.target.name)}
                />
                <img
                  src="/dice-numbers/5.svg"
                  alt="five"
                  name="five"
                  onClick={(e) => setChoise(e.target.name)}
                />
                <img
                  src="/dice-numbers/6.svg"
                  alt="six"
                  name="six"
                  onClick={(e) => setChoise(e.target.name)}
                />
                <span className="py-1 px-1 position-absolute translate-middle top-50 start-0 bg-success rounded-circle fw-bold">
                  4 x
                </span>
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-column align-items-center justify-content-center mt-3"
            id="choice"
          >
            {choice === "" ? "" : <h3>Seçilen Oyun</h3>}
            {choice === "Low" ? (
              <button
                type="button"
                disabled
                className="btn btn-warning w-100 my-2 mx-2"
              >
                Low
              </button>
            ) : choice === "High" ? (
              <button
                type="button"
                disabled
                className="btn btn-danger w-100 my-2 mx-2"
              >
                High
              </button>
            ) : choice === "one" ? (
              <img src="/dice-numbers/1.svg" alt="one" />
            ) : choice === "two" ? (
              <img src="/dice-numbers/2.svg" alt="two" />
            ) : choice === "three" ? (
              <img src="/dice-numbers/3.svg" alt="three" />
            ) : choice === "four" ? (
              <img src="/dice-numbers/4.svg" alt="four" />
            ) : choice === "five" ? (
              <img src="/dice-numbers/5.svg" alt="five" />
            ) : choice === "six" ? (
              <img src="/dice-numbers/6.svg" alt="six" />
            ) : (
              ""
            )}
          </div>

          <div
            className={
              choice === "" || account <= 0
                ? "d-none"
                : "bet-amount mt-3 d-flex flex-column justify-content-center align-items-center mb-3"
            }
          >
            <div className="bet-amount d-flex justify-content-evenly align-items-center my-3">
              <h3 className="m-0 p-0">Bet Miktarı</h3>
              <button
                type="button"
                className="btn btn-success mx-3"
                onClick={() => betSelectHandler()}
                disabled={selectBet !== null}
              >
                Beti Seç
              </button>
            </div>
            <input
              type="number"
              className="form-control w-100 d-flex text-center"
              id="bet-amount"
              value={bet}
              min={minBet}
              max={maxBet}
              onChange={(e) => betHandler(e)}
            />
            <div className="my-3 d-flex justify-content-center align-items-center">
              <div
                className="min-bet bet-buttons bg-warning"
                onClick={() => {
                  setBet(minBet);
                  setSelectBet(null);
                }}
              >
                Min
              </div>
              <div
                className="decrease bet-buttons bg-warning"
                onClick={() => {
                  if (bet > minBet) {
                    setBet(bet - 20);
                  } else {
                    setBet(minBet);
                    setSelectBet(null);
                  }
                }}
              >
                -{minBet}
              </div>

              <div
                className="increase bet-buttons bg-danger"
                onClick={() => {
                  if (bet < maxBet) {
                    setBet(bet + 20);
                  } else {
                    setBet(maxBet);
                    setSelectBet(null);
                  }
                }}
              >
                +{minBet}
              </div>
              <div
                className="min-bet bet-buttons bg-danger"
                onClick={() => {
                  setBet(maxBet);
                }}
              >
                Max
              </div>
            </div>
          </div>
        </div>
        <div className="dice-button mt-3 d-flex flex-column justify-content-center align-items-center">
          <img
            src="/dice.svg"
            alt="dice"
            onClick={rollDice}
            className={selectBet === null || account <= 0 ? "d-none" : ""}
          />
        </div>
      </div>

      <ToastContainer position="top-left" style={{ zIndex: "40" }} />
    </div>
  );
}
