
import { useState, useEffect } from "react";
import GainsCard from "./components/GainCard";
import HoldingsTable from "./components/HoldingsTable";
import { capitalGainsData } from "./data/capitalGains";
import { holdingsData } from "./data/holdings";
import { updateGains,calculateTotal } from "./utils/calculations";
function App() {
  const [holdings, setHoldings] = useState([]);
  const [selected, setSelected] = useState([]);
  const [base, setBase] = useState(null);
  const [updated, setUpdated] = useState(null);

  useEffect(() => {
    setHoldings(holdingsData);
    setBase(capitalGainsData);
    setUpdated(capitalGainsData);
  }, []);

  useEffect(() => {
    if (!base) return;
    setUpdated(updateGains(base, selected));
  }, [selected]);

  if (!base) return <div>Loading...</div>;

  const pre = calculateTotal(base.stcg, base.ltcg);
  const post = calculateTotal(updated.stcg, updated.ltcg);

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">
        Tax Loss Harvesting
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <GainsCard title="Pre Harvesting" data={base} type="pre" />
        <GainsCard title="After Harvesting" data={updated} />
      </div>

      {pre > post && (
        <div className="mt-4 bg-green-100 text-green-700 p-3 rounded">
          You're going to save ₹{(pre - post).toFixed(2)}
        </div>
      )}

      <HoldingsTable
        holdings={holdings}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}

export default App;