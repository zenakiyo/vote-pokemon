import { useState, useEffect } from "react";
function App() {
  const [alreadyDone, setAlreadyDone] = useState([]);
  function randNum() {
    const randum = Math.floor(Math.random() * 1000) + 1;
    if (alreadyDone.includes(randum)) {
      randNum();
    }
    setAlreadyDone((a) => [...a, randum]);
    return randum;
  }
  const [firstRanNum, setFirstRanNum] = useState(0);
  const [secRanNum, setSecRanNum] = useState(0);
  function imgReload() {
    setFirstRanNum(randNum);
    setSecRanNum(randNum);
  }
  useEffect(() => imgReload(), []);
  return (
    <div className="w-full flex mt-12">
      <div className="w-1/2 justify-center flex flex-col align-middle">
        <img
          className="w-60 mx-auto"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/official-artwork/${firstRanNum}.png`}
          alt="pokemon"
        />
        <button
          className="border px-3 py-1 rounded-md cursor-pointer"
          onClick={imgReload}
        >
          Vote
        </button>
      </div>
      <div className="w-1/2 justify-center flex flex-col align-middle">
        <img
          className="w-60 mx-auto"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/official-artwork/${secRanNum}.png`}
          alt="pokemon"
        />
        <button
          className="border px-3 py-1 rounded-md cursor-pointer"
          onClick={imgReload}
        >
          Vote
        </button>
      </div>
    </div>
  );
}

export default App;
