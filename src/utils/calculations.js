export const calculateNet = (profits, losses) => profits - losses;

export const calculateTotal = (stcg, ltcg) => {
  return (
    (stcg.profits - stcg.losses) +
    (ltcg.profits - ltcg.losses)
  );
};

export const updateGains = (base, selected) => {
  let updated = JSON.parse(JSON.stringify(base));

  selected.forEach((item) => {
    if (item.stcg.gain > 0)
      updated.stcg.profits += item.stcg.gain;
    else
      updated.stcg.losses += Math.abs(item.stcg.gain);

    if (item.ltcg.gain > 0)
      updated.ltcg.profits += item.ltcg.gain;
    else
      updated.ltcg.losses += Math.abs(item.ltcg.gain);
  });

  return updated;
};