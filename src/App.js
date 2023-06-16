import Banner from "./components/banner/Banner";
import Essential from "./components/essentials/Essential";
import GetTheApp from "./components/get_the_app/GetTheApp";
import TopPicks from "./components/top picks/TopPicks";
import Navbar from "./header/Navbar";
import Homepage from "./screens/homepage/Homepage";

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Banner />
      <Essential />
      <TopPicks />
      <GetTheApp />
    </>
  );
}

export default App;
