import { useState } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import AvailablePlayer from "./component/AvailablePlayer";
import Sendmail from "./component/Sendmail";
import Footer from "./component/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // for coin count
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 10000000);
    toast.success("Coin Added Successfully!");
  }

  const handleMoney = (coin) => {
    if (count > coin) {
      setCount(count - coin);
      toast.success("Player selected successfully");
    } 
  };

  // for available/selected player status
  const [isActive, setIsActive] = useState({
    available: true,
    status: "available",
  });

  // for selected player
  const [selectedPlayers, setSelectedPlayers] = useState([]);
console.log(selectedPlayers);
  const handleSelectedPlayer = (player) => {
    if (selectedPlayers.length >= 6) {
      toast.warning("You have already selected 6 players");
      return;
    }

    if (!selectedPlayers.some((p) => p.playerId === player.playerId)) {
      if (count > player.biddingPrice) {
        handleMoney(player.biddingPrice);
        setSelectedPlayers([...selectedPlayers, player]);
      } else {
        toast.warning("Insufficient coins");
      }
    } else {
      toast.warn("Already selected");
    }
  };

  const handleIsActiveStatus = (status) => {
    if (status === "available") {
      setIsActive({
        available: true,
        status: "available",
      });
    } else {
      setIsActive({
        available: false,
        status: "selected",
      });
    }
  };

  const handleDelete = (id) => {
    console.log(id);
    const remainingPlayer = selectedPlayers.filter((p) => p.playerId != id);
    setSelectedPlayers(remainingPlayer);
    toast.warning("Player Removed");
  };

  return (
    <>
      <Navbar count={count} />
      <Hero handleClick={handleClick} />
      <AvailablePlayer
        handleSelectedPlayer={handleSelectedPlayer}
        handleDelete={handleDelete}
        selectedPlayers={selectedPlayers}
        handleIsActiveStatus={handleIsActiveStatus}
        isActive={isActive}
      />
      <Sendmail></Sendmail>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
