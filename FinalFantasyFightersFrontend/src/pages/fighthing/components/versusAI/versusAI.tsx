import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getPokemonDataById } from '@/services/Pokemon.service';
import React, { useEffect, useState } from 'react';
import "./versusAI.scss";
import DetailsFighterAI from '../detailsFighterAI/detailsFighterAI';
import { FinalFantasyChar } from '../../interfaces/Fighters.interface';

const VersusAI = ({ idPokemon, detailsCombat }: { idPokemon: any, detailsCombat: any }) => {

    let [pokemonselect, setPokemonSelect] = useState<any>({});

    useEffect(() => {
        getPokemonDataById(idPokemon).then((pokemon: FinalFantasyChar) => setPokemonSelect(pokemon), (err) => console.log(err));
    }, [idPokemon])

    const pictureUrl = pokemonselect.length > 0 && pokemonselect[0]?.pictures?.[0]?.url || '';
    const name = pokemonselect.length > 0 && pokemonselect[0]?.name || 'Unknown';


    return (
        <>
            <Card className='border shadow-lg card rounded'>
                <CardHeader className='flex items-center justify-center'>
                    <img src={pictureUrl} alt={name} id='imgVersus' />
                </CardHeader>
                <CardContent className='bg-slate-400 pt-4'>
                    <CardTitle className='flex items-center justify-center'><h1 className='text-4xl uppercase'>{name}</h1></CardTitle>
                    <DetailsFighterAI combatDetails={detailsCombat}/>
                </CardContent>
            </Card>
        </>
    )
}

export default VersusAI;