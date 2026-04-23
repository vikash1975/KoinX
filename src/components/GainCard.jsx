export default function GainsCard({ title, data, type }) {
  const stcgNet = data.stcg.profits - data.stcg.losses;
  const ltcgNet = data.ltcg.profits - data.ltcg.losses;
  const total = stcgNet + ltcgNet;

  const dark = type === "pre";

  return (
    <div className={`p-6 rounded-2xl shadow-lg ${
      dark ? "bg-gray-900 text-white" : "bg-blue-600 text-white"
    }`}>
      <h2 className="text-lg font-bold mb-4">{title}</h2>

      <div className="space-y-3">
        <div>
          <p>ST Profit: ₹{data.stcg.profits.toFixed(2)}</p>
          <p>ST Loss: ₹{data.stcg.losses.toFixed(2)}</p>
          <p className="font-semibold">Net: ₹{stcgNet.toFixed(2)}</p>
        </div>

        <div>
          <p>LT Profit: ₹{data.ltcg.profits.toFixed(2)}</p>
          <p>LT Loss: ₹{data.ltcg.losses.toFixed(2)}</p>
          <p className="font-semibold">Net: ₹{ltcgNet.toFixed(2)}</p>
        </div>

        <div className="border-t pt-2 font-bold text-lg">
          Total: ₹{total.toFixed(2)}
        </div>
      </div>
    </div>
  );
}