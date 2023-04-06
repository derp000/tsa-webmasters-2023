export { nasa, esa, huntsville, meteo };

const nasa = (
  <img
    className="lg:mt-10 md:h-64 md:w-64 sm:h-48 sm:w-48 sm:block hidden"
    src="images/NASA_logo.svg"
    alt="Nasa Logo"
    key="nasa_logo"
  />
);
// mt-10 + mt-16
const esa = (
  <img
    className="md:h-32 md:w-64 lg:mt-[6.5rem] sm:h-24 sm:w-48 sm:bg-white sm:block hidden"
    src="images/European_Space_Agency_logo.svg"
    alt="ESA Logo"
    key="esa_logo"
  />
);

// 3:2 image
// was sm:48rem
const huntsville = (
  <img
    className="mt-10 mx-auto sm:h-[46rem] h-96 w-[32rem]"
    src="images/HuntsvilleRocket.jpg"
    alt="Rockets on display in Huntsville"
    key="huntsville"
  />
);

// 3:2
// lg:mt-10 md:h-64 md:w-64 sm:h-48 sm:w-48 sm:block hidden
const meteo = (
  <img
    className="mt-10 mx-auto md:w-[48rem] md:h-[28rem] w-[32rem] h-[18rem]"
    src="images/meteorology.jpg"
    alt="Clouds photographed by the ISS"
    key="meteo"
  />
);
