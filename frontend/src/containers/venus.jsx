import interpolate from "./interpolateArcs";

export { arcsData, gData };
export const GLOBE_START = { lat: 0, lng: 0, altitude: 2.0 };

const rift = {
  lat: 10,
  lng: 190,
  name: "Venus' Rift Zones",
  info: (
    <p>
      Visit the Alien Rift Zones. These rift zones are made up of parallel
      ridges and valleys hundreds of kilometers long.
    </p>
  ),
  imgUrl: "/src/assets/HuntsvilleRocket.jfif",
};

const coronae = {
  lat: 0,
  lng: 250,
  name: "Venus' Coronae",
  info: (
    <p>
      The Floor is Lava! Venus is famous for its coronoae, circular patterns
      formed by Venus' core releasing heat. These coronae are often accompanied
      by vast lava lakes.
    </p>
  ),
  imgUrl: "/src/assets/HuntsvilleRocket.jfif",
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
  imgUrl: "/src/assets/HuntsvilleRocket.jfif",
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
  imgUrl: "/src/assets/HuntsvilleRocket.jfif",
};

const gData = [rift, coronae, montes, venera];
const arcsData = interpolate(gData);
