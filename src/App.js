import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinName, setCoinName] = useState("");
  const [coinCost, setCoinCost] = useState(0);
  const [money, setMoney] = useState(0);
  function onChange(event) {
    const str = event.target.value.split(":");
    console.log(str[0]);
    setCoinName(str[0]);
    setCoinCost(Number(str[1].slice(2, str[1].length - 4)));
  }
  function onChangeMoney(event){
    setMoney(Number(event.target.value));
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);
  return(
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : <div>
        <select onChange={onChange}>
        {coins.map((coin, index) => (
        <option key={index}>
          {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
        </option>))}
      </select>
      <hr />
      <h2>Exchange!</h2>
      <input
        type="number"
        placeholder="Your current money(USD)"
        onChange={onChangeMoney}
        value={money ? money : ""}
      ></input>
      <p>How much {coinName ? coinName : "..."}</p>
      <input
        type="number"
        placeholder="How much"
        value = {(money / coinCost).toFixed(2)}
        disabled/>
      </div>}
    </div>);
}

export default App;