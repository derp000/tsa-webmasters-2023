export default function interpolate(arcs) {
  const arcsData = [];
  for (let i = 0; i < arcs.length - 1; i++) {
    arcsData.push({
      startLat: arcs[i]["lat"],
      startLng: arcs[i]["lng"],
      endLat: arcs[i + 1]["lat"],
      endLng: arcs[i + 1]["lng"],
    });
  }

  return arcsData;
}
