/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Players from '../Players';
import './css/apply.css';
import Selected from './Selected';

export default function AvailablePlayer({ handleIsActiveStatus, isActive,handleSelectedPlayer, selectedPlayers, handleDelete }) {
  return (
    <div>
      <div className="flex justify-end w-[95%] mx-auto mt-14">
        <div className="cursor-pointer text-lg font-bold">
          <span
            onClick={() => handleIsActiveStatus("available")}
            className={`${
              isActive.available ? " active" : ""
            } p-2 rounded-s-xl border-r-2 border-black`}
          >
            Available
          </span>

          <span
            onClick={() => handleIsActiveStatus("selected")}
            className={`${
              !isActive.available ? " active" : ""
            } p-2 rounded-e-xl`}
          >
            Selected ({selectedPlayers.length})
          </span>
        </div>
      </div>
      {isActive.available ? (
        <Players handleSelectedPlayer={handleSelectedPlayer}></Players>
      ) : (
        <Selected
          handleDelete={handleDelete}
          selectedPlayers={selectedPlayers}
          handleIsActiveStatus={handleIsActiveStatus}
        ></Selected>
      )}
    </div>
  );
}
