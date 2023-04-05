import interpolate from "./interpolateArcs";

export { arcsData, gData };
export const GLOBE_START = { lat: 30, lng: -190, altitude: 2.0 };

const caloris = {
  lat: 30,
  lng: -190,
  name: "Caloris Basin",
  info: (
    <p>
      The Caloris Basin is a mammoth basin, the largest on Mercury and one of
      the largest in the solar system. On this trip, visit the Caloris Basin to
      learn about the impact and tumult in the formation of the solar system and
      study the Mercury rock composition for signs of previous lava oceans.
    </p>
  ),
  imgUrl: "/src/assets/mercury/caloris.png",
};

const ghost = {
  lat: -1.6,
  lng: -253.1,
  name: "Izquierdo Ghost Crater",
  info: (
    <p>
      Search for mysteries of the past at Mercury's ghost craters. On the cosmic
      time scale, very recently these craters were filled with lava and are now
      obscured or completely hidden.
    </p>
  ),
  imgUrl: "/src/assets/mercury/ghost.png",
};

const pole = {
  lat: 90,
  lng: -135,
  name: "Mercury's Poles",
  info: (
    <p>
      Recent data has supported that ice likely exists at Mercury's poles. The
      poles' low temperatures and shallow basins make them ideal locations for
      ice to accumulate, and the poles are also more reflective, suggesting the
      existence of ice. Find the first signs of water and ice beyond the Earth
      and the Mercury Poles.
    </p>
  ),
  imgUrl: "/src/assets/mercury/pole.jpg",
};

const rembrandt = {
  lat: -32,
  lng: -272,
  name: "Rembrandt Basin",
  info: (
    <p>
      Mercury's Rembrandt Basin has long puzzled astronomers. The basin
      perfectly illustrates a wheel with spokes spinning around an axle. The
      shape of this basin is unlike any other found in the solar system. Though
      the wheel and axle may have been invented on Earth thousands of years ago,
      the wheel and axle were already present on Mercury.
    </p>
  ),
  imgUrl: "/src/assets/mercury/rembrandt.jpg",
};

const gData = [caloris, pole, ghost, rembrandt];
const arcsData = interpolate([...gData, caloris]);
