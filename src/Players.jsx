/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaFlag } from "react-icons/fa";

export default function Players({handleSelectedPlayer}) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data.players));
  }, []);
  return (
    <div>
      <h1 className="font-bold text-2xl w-[80%] mx-auto py-8">Available Players</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-[85%] mx-auto">
      {players.map((player) => (
        <div
          key={player.playerId}
          className="card border-2"
        >
          <figure className="w-[90%] mx-auto pt-4">
            <img className="object-fill rounded-2xl h-60 w-full " src={player.image} />
          </figure>
          <div className="card-body pt-6">
            <p className="flex items-center text-xl font-bold gap-2"><IoPerson />{player.name}</p>

            <div className="flex justify-between border-b-2 pb-5">
            <p className="flex items-center gap-3 font-normal"><FaFlag></FaFlag>{player.country}</p>
            <p className="bg-gray-400 border-2 rounded-md text-center py-1">{player.role}</p>
            </div>

            <p className="flex items-center gap-2 font-bold">Rating : <span>{player.rating}</span><FaStar></FaStar></p>
            <p className="font-bold">Batting type : <span className="font-normal">{player.battingType}</span></p>
            <p className="font-bold">Bowling type : <span className="font-normal">{player.bowlingType}</span> </p>

            <div className="flex items-center">
            <p className="font-bold">Price : ${player.biddingPrice}</p> 
            <button onClick={()=>handleSelectedPlayer(player)} className="btn bg-transparent border-2">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
import { IoPerson } from "react-icons/io5";
import { FaStar } from "react-icons/fa";