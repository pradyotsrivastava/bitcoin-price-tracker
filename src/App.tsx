import { useState } from "react";
import AmountInput from "./AmountInput";
import ResultRow from "./ResultRow";

function App() {
  const [amount, setAmount] = useState("");
  return (
    <main className="max-w-2xl mx-auto px-4 py-8 ">
      <h1 className="uppercase text-6xl text-center font-bold bg-gradient-to-br from-purple-600 to to-sky-400 bg-clip-text text-transparent from-30%">
        Find cheapest BTC
      </h1>
      <div className="flex justify-center mt-8">
        <AmountInput
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="mt-8">
        <ResultRow />
        <ResultRow />
        <ResultRow />
        <ResultRow loading={true} />
      </div>
    </main>
  );
}

export default App;
