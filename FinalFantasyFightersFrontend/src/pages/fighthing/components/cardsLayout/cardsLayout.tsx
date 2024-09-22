import React, { useEffect, useState } from 'react';
import "./cardsLayout.scss";
import { getPokemonsData } from '@/services/Pokemon.service';
import CardComponent from '../card/cardComponent';
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { PiSelectionBackgroundBold } from "react-icons/pi";
import VersusPlayer from '../versusPlayer/versusPlayer';
import VersusAI from '../versusAI/versusAI';
import versusLogo from "./../../../../assets/versus.png";
import { RiUserFill } from "react-icons/ri";
import { PiComputerTowerFill } from "react-icons/pi";
import Battle from '../battle/battle';
import { SiSquareenix } from "react-icons/si";
import { FinalFantasyChar } from '../../interfaces/Fighters.interface';
import Music from '../music/music';

const CardsLayout = () => {
  const [cardsData, setCardsData] = useState<FinalFantasyChar[]>([]);
  const [idPokemon, setIdPokemon] = useState<string | undefined>(undefined);
  const [idRandom, setIdRandom] = useState<string | undefined>(undefined);
  let [detailsCombatPlayer, setDetailsCombatPlayer] = useState({});
  let [detailsCombatAI, setDetailsCombatAI] = useState({});

  useEffect(() => {
    getPokemonsData().then((pokemonData: FinalFantasyChar[]) => setCardsData(pokemonData.slice(0, 16)));
  }, []);

  useEffect(() => {
    if (idPokemon && cardsData.length > 0) {
      const availableIds = cardsData.map(pokemon => pokemon.id.toString());
      const randomId = availableIds[Math.floor(Math.random() * availableIds.length)];
      setIdRandom(randomId);
    }
  }, [idPokemon, cardsData]);


  return (
    <>
      <div className='container mx-auto mt-10'>
        <h1 className='mb-4 titleCards flex items-center text-white'>
          <span className='mr-2 text-red-500 font-bold'><SiSquareenix /></span>Battle of Final Fantasy
        </h1>
        <h2 className='mb-4 subTitleCards flex items-center text-bold text-white'>
          <span className='mr-2 text-red-800'><PiSelectionBackgroundBold /></span>Select your character
        </h2>
        <div className='grid grid-cols-8 gap-4'>
          {cardsData.map((cardData: FinalFantasyChar, idx: number | string) => (
            <CardComponent key={idx} cardDetails={cardData} idPokemon={idPokemon} setIdPokemon={setIdPokemon} />
          ))}
        </div>
        {idPokemon !== undefined && (
          <div className='mt-60 mb-24'>
            <div className='grid grid-rows-1 grid-flow-col gap-4'>
              <div className='col-span-4 border'>
                <h1 className='bg-green-700 pt-4 pb-4 font-bold cursor-pointer text-4xl text-white flex items-center justify-center'>
                  <span className="mr-2 text-slate-100"><RiUserFill /></span>Player
                </h1>
                <VersusPlayer idPokemon={idPokemon} detailsCombat={detailsCombatPlayer} />
              </div>
              <div className='col-span-4'>
                <img src={versusLogo} alt='pokemonFighter' />
                <div className='flex items-center justify-center mt-20 w-full'>
                  <Battle detailsCharacter={detailsCombatPlayer} setDetailsCharacter={setDetailsCombatPlayer} setDetailsAICharacter={setDetailsCombatAI} detailsAICharacter={detailsCombatAI} />
                </div>
              </div>
              <div className='col-span-4 border'>
                <h1 className='bg-red-700 pt-4 pb-4 font-bold cursor-pointer text-4xl text-white flex items-center justify-center'>
                  <span className="mr-2 text-slate-50"><PiComputerTowerFill /></span>AI
                </h1>
                <VersusAI idPokemon={idRandom} detailsCombat={detailsCombatAI} />
              </div>
            </div>
          </div>
        )}
          <Music />
      </div>
    </>
  );
}

export default CardsLayout;