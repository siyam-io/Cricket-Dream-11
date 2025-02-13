/* eslint-disable react/prop-types */
import { FaRegTrashAlt } from "react-icons/fa";

export default function Selected({ selectedPlayers, handleDelete, handleIsActiveStatus }) {

  return (
    <div className="space-y-5 w-[80%] mx-auto mt-14">
        <h1 className="font-bold text-2xl">Selected Players : {selectedPlayers.length}/6</h1>
      {selectedPlayers.map((player) => (
        <div className="flex justify-between border-2 rounded-lg px-4 py-2" key={player.playerId}>
          <div className="flex">
            <div className="flex items-center">
            <img
              className="w-14 h-16 rounded-lg object-cover"
              src={player.image}
            />
            </div>
            <div className="pl-4">
              <h3 className="font-bold text-lg">{player.name}</h3>
              <p className="font-normal text-slate-400">{player.role}</p>
              <p className="font-normal text-slate-400">Price : {player.biddingPrice}$</p>
            </div>
          </div>
          <div className="flex items-center">
            <button onClick={()=>handleDelete(player.playerId)} className="btn bg-transparent text-red-500">
              <FaRegTrashAlt />
            </button>
          </div>
        </div>
      ))}

      <button onClick={()=> handleIsActiveStatus('available')} className="btn text-lg font-bold bg-[#D2E727]">Add More Player</button>
    </div>
  );
}
