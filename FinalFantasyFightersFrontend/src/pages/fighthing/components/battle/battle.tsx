import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { GiStarfighter } from 'react-icons/gi';
import Swal from "sweetalert2";

const Battle = ({ detailsCharacter, setDetailsCharacter, detailsAICharacter, setDetailsAICharacter }: { detailsCharacter: any, setDetailsCharacter: any, detailsAICharacter: any, setDetailsAICharacter: any }) => {
  const [playerStats, setPlayerStats] = useState({
    hp: 100,
    mp: 100,
    attack: Math.round(Math.random() * 80) + 10,
  });

  const [aiStats, setAiStats] = useState({
    hp: 100,
    mp: 100,
    attack: Math.round(Math.random() * 80) + 10,
  });

  const [isFighting, setIsFighting] = useState(false);
  const [battleInterval, setBattleInterval] = useState<NodeJS.Timeout | null>(null);

  const startBattle = () => {
    Swal.fire({
      position: "center",
      icon: "info",
      title: "Comienza la batalla",
      showConfirmButton: false,
      background: 'black',
      color: 'whitesmoke',
      timer: 3000
    });
  };

  const handleAttack = () => {
    if (isFighting) return;

    setIsFighting(true);
    startBattle();

    const interval = setInterval(() => {
      setPlayerStats(prevPlayer => {
        const newAiHp = aiStats.hp - prevPlayer.attack;
        const newMpAI = aiStats.mp - Math.round(Math.random() * 30) + 1;
        setAiStats(prevAI => ({
          ...prevAI,
          hp: Math.max(0, newAiHp),
          mp: Math.max(0, newMpAI),
        }));

        const newPlayerHp = prevPlayer.hp - aiStats.attack;
        const newMp = prevPlayer.mp - Math.round(Math.random() * 30) + 1;

        const updatedPlayer = {
          ...prevPlayer,
          hp: Math.max(0, newPlayerHp),
          mp: Math.max(0, newMp)
        };

        // Verificar ganadores
        if (updatedPlayer.hp <= 0) {
          loserAlert();
          clearInterval(interval);
          setIsFighting(false);
          return updatedPlayer;
        }

        if (aiStats.hp <= 0) {
          winnerAlert();
          clearInterval(interval);
          setIsFighting(false);
        }

        return updatedPlayer;
      });
    }, 2000); // Ajusta el tiempo según lo necesites (2000 ms = 2 segundos)

    setBattleInterval(interval);
  };

  useEffect(() => {
    setDetailsCharacter({
      hp: playerStats.hp,
      mp: playerStats.mp,
      attack: playerStats.attack,
    });

    setDetailsAICharacter({
      hp: aiStats.hp,
      mp: aiStats.mp,
      attack: aiStats.attack
    });

  }, [playerStats, aiStats]);

  const winnerAlert = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "You Win",
      background: 'black',
      color: 'whitesmoke',
      showConfirmButton: false,
      timer: 2500
    });
  }

  const loserAlert = () => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "You Lose",
      showConfirmButton: false,
      background: 'black',
      color: 'whitesmoke',
      timer: 2500
    });
  }

  return (
    <div className="battle-container">
      <Button className="flex items-center font-bold hover:bg-gray-700" variant="destructive" onClick={handleAttack}>
        <span className='mr-2'><GiStarfighter /></span>Start Battle
      </Button>
    </div>
  );
};

export default Battle;