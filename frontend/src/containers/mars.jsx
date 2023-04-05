import interpolate from "./interpolateArcs";

export { arcsData, gData };
export const GLOBE_START = { lat: 0, lng: 250, altitude: 3.0 };

const canyon = {
  lat: -13.9,
  lng: -59.2,
  name: "Valles Marineris Canyon",
  info: (
    <p>
      Valles Marineris is the largest canyon in the solar system, long enough to
      stretch from Los Angeles to New York City! See this one-of-kind canyon in
      our solar system, all 1,850 miles of it.
    </p>
  ),
  imgUrl: "/src/assets/HuntsvilleRocket.jfif",
};
const fossae = {
  lat: -3.2,
  lng: -163,
  name: "Medusae Fossae",
  info: (
    <p>
      Medusae Fossae is a huge volcanic deposit, a fifth of the size of the
      United States! Some claim its origin came from hundreds of volcanic
      eruptions over 500 million years while others claim its origin is from a
      UFO crash. Either way, see this unforgettable marvel!
    </p>
  ),
  imgUrl: "/src/assets/HuntsvilleRocket.jfif",
};
const mons = {
  lat: 18.65,
  lng: 226.2,
  name: "Olympus Mons",
  info: (
    <p>
      Mars also has the tallest volcano in the solar system. Olympus Mons is the
      size of Arizona and three times taller than Mount Everest. Olympus Mons is
      even greater than its namesake, the legendary Grecian Mount Olympus!{" "}
    </p>
  ),
  imgUrl: "/src/assets/HuntsvilleRocket.jfif",
};
const crater = {
  lat: -5.4,
  lng: 137.8,
  name: "Gale Crater",
  info: (
    <p>
      A decade ago, Curiosity found streambeds, complex organic molecules,
      changes of methane concentrations and other startling signs of life in
      this crater. Continue to search for signs of life in person at Gale
      Crater. This excursion is related to geology, biology, and biochemistry.
    </p>
  ),
  imgUrl: "/src/assets/HuntsvilleRocket.jfif",
};
// const mount = { lat: -5.08, lng: 137.85, name: "4thing", info: "d" };

// function interpolate(...arcs) {
//   const arcsData = [];
//   for (let i = 0; i < arcs.length - 1; i++) {
//     arcsData.push({
//       startLat: arcs[i]["lat"],
//       startLng: arcs[i]["lng"],
//       endLat: arcs[i + 1]["lat"],
//       endLng: arcs[i + 1]["lng"],
//     });
//   }

//   return arcsData;
// }

const arcsData = interpolate(canyon, mons, crater, fossae, canyon)
// [
//   {
//     startLat: canyon["lat"],
//     startLng: canyon["lng"],
//     endLat: mons["lat"],
//     endLng: mons["lng"],
//   },
//   {
//     startLat: mons["lat"],
//     startLng: mons["lng"],
//     endLat: crater["lat"],
//     endLng: crater["lng"],
//   },
//   {
//     startLat: crater["lat"],
//     startLng: crater["lng"],
//     endLat: fossae["lat"],
//     endLng: fossae["lng"],
//   },
//   {
//     startLat: fossae["lat"],
//     startLng: fossae["lng"],
//     endLat: canyon["lat"],
//     endLng: canyon["lng"],
//   },
// ];
console.log("logging arc data")
console.log(arcsData);

const gData = [canyon, fossae, mons, crater];
