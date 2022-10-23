const result = record.find(({ year }) => record.result === "W");
function superbowlWin(record) {
  for (const x of record)
  if (x.result==="W")
  return x.year
}
