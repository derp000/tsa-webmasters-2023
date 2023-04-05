import interpolate from "./interpolateArcs";

export { arcsData, gData };
export const GLOBE_START = { lat: 0, lng: 0, altitude: 2.0 };

const tranquil = {
  lat: 0.6742,
  lng: 23.4731,
  name: "Tranquility Base",
  info: (
    <p>
      The landing sight of the Apollo 11 mission. See the first human footsteps
      on the moon.
    </p>
  ),
  imgUrl: "/src/assets/HuntsvilleRocket.jfif",
};

const montes = {
  lat: 18.9,
  lng: -3.7,
  name: "Montes Appenius",
  info: (
    <p>
      The tallest mountain range on the moon and the landing sight of the Apollo
      15 mission.
    </p>
  ),
  imgUrl: "/src/assets/HuntsvilleRocket.jfif",
};

const tycho = {
  lat: -43.37,
  lng: 348.68,
  name: "Tycho Crater",
  info: (
    <p>
      The tallest mountain range on the moon and the landing sight of the Apollo
      15 mission.
    </p>
  ),
  imgUrl: "/src/assets/HuntsvilleRocket.jfif",
};

const copernicus = {
  lat: 10,
  lng: -20,
  name: "Copernicus Crater",
  info: (
    <p>
      Named after the esteemed astrologist Nicolas Copernicus, this crater is
      the brightest spot on the moon, and is easily recognizable as the only
      bright spot in the dark maria.
    </p>
  ),
  imgUrl: "/src/assets/HuntsvilleRocket.jfif",
};

const oceanus = {
  lat: 18.4,
  lng: -57.4,
  name: "Oceanus Procellarum",
  info: (
    <p>
      The largest lunar maria and the only lunar maria to also be designated as
      an ocean. This ocean is 4 million km<sup>2</sup> and is the landing sight
      of the Apollo 12 mission.
    </p>
  ),
  imgUrl: "/src/assets/HuntsvilleRocket.jfif",
};

const arcsData = interpolate([
  tranquil,
  montes,
  oceanus,
  copernicus,
  tycho,
  tranquil,
]);
// [
//   {
//     startLat: tranquil["lat"],
//     startLng: tranquil["lng"],
//     endLat: montes["lat"],
//     endLng: montes["lng"],
//   },
//   {
//     startLat: montes["lat"],
//     startLng: montes["lng"],
//     endLat: oceanus["lat"],
//     endLng: oceanus["lng"],
//   },
//   {
//     startLat: oceanus["lat"],
//     startLng: oceanus["lng"],
//     endLat: copernicus["lat"],
//     endLng: copernicus["lng"],
//   },
//   {
//     startLat: copernicus["lat"],
//     startLng: copernicus["lng"],
//     endLat: tycho["lat"],
//     endLng: tycho["lng"],
//   },
//   {
//     startLat: tycho["lat"],
//     startLng: tycho["lng"],
//     endLat: tranquil["lat"],
//     endLng: tranquil["lng"],
//   },
// ];

const gData = [tranquil, montes, tycho, copernicus, oceanus];
