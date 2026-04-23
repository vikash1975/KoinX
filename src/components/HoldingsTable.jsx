export default function HoldingsTable({ holdings, selected, setSelected }) {

  const toggleAll = () => {
    if (selected.length === holdings.length) setSelected([]);
    else setSelected(holdings);
  };

  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border rounded-xl">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">
              <input
                type="checkbox"
                onChange={toggleAll}
                checked={selected.length === holdings.length}
              />
            </th>
            <th>Asset</th>
            <th>Holdings</th>
            <th>Price</th>
            <th>STCG</th>
            <th>LTCG</th>
            <th>Sell</th>
          </tr>
        </thead>

        <tbody>
          {holdings.map((item, i) => {
            const isSelected = selected.includes(item);

            return (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => {
                      if (isSelected) {
                        setSelected(selected.filter(x => x !== item));
                      } else {
                        setSelected([...selected, item]);
                      }
                    }}
                  />
                </td>

                <td className="flex items-center gap-2 p-3">
                  <img src={item.logo} className="w-6 h-6" />
                  <div>
                    <p>{item.coin}</p>
                    <p className="text-xs text-gray-500">{item.coinName}</p>
                  </div>
                </td>

                <td>
                  {item.totalHolding}
                  <p className="text-xs text-gray-500">
                    Avg ₹{item.averageBuyPrice}
                  </p>
                </td>

                <td>₹{item.currentPrice}</td>

                <td className={item.stcg.gain >= 0 ? "text-green-600" : "text-red-500"}>
                  ₹{item.stcg.gain.toFixed(2)}
                </td>

                <td className={item.ltcg.gain >= 0 ? "text-green-600" : "text-red-500"}>
                  ₹{item.ltcg.gain.toFixed(2)}
                </td>

                <td>
                  {isSelected ? item.totalHolding : "-"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}