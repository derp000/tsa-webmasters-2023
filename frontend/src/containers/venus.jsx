import interpolate from "./interpolateArcs";

export { arcsData, gData };
export const GLOBE_START = { lat: 10, lng: 190, altitude: 2.5 };

const rift = {
  lat: 22,
  lng: 183.5,
  name: "Devana Chasma",
  info: (
    <p>
      Visit the Alien Rift Zones. These rift zones are made up of parallel
      ridges and valleys hundreds of kilometers long.
    </p>
  ),
  imgUrl: "/src/assets/venus/rift.png",
};

const fotla = {
  lat: -58.5,
  lng: 163.5,
  name: "Fotla Corona",
  info: (
    <p>
      The Floor is Lava! Venus is famous for its coronae, circular patterns
      formed by Venus' core releasing heat. These coronae are often accompanied
      by vast lava lakes.
    </p>
  ),
  imgUrl: "/src/assets/venus/fotla.jpg",
};

const montes = {
  lat: 65,
  lng: 6,
  name: "Maxwell Montes",
  info: (
    <p>
      An alien looking mountain, the elevation is so high that the mountain
      floor is made up of metal. The metal reflects sunlight, making Maxwell
      Montes the brightest spot on Venus.
    </p>
  ),
  imgUrl: "/src/assets/venus/montes.jpg",
};

const venera = {
  lat: -5,
  lng: 351,
  name: "Venera 3",
  info: (
    <p>
      Visit the landing site of Venera 3, the first probe to land on Venus and
      the first successful impact mission by the Soviet Union. After 8 landing
      failures, the Venera 3 success was an important milestone in space
      exploration. Follow in the path of Venera 3 and be inspired by the
      astronomical success story.
    </p>
  ),
  imgUrl: "/src/assets/venus/venera.jpg",
};

const gData = [rift, fotla, montes, venera];
const arcsData = interpolate(gData);
