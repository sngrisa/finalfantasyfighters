import React, { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FinalFantasyChar } from '@/pages/fighthing/interfaces/Fighters.interface';
import "./cardComponent.scss";

const CardComponent = ({ cardDetails, idPokemon, setIdPokemon }: { cardDetails: FinalFantasyChar, idPokemon: any, setIdPokemon: any }) => {

    const pictureUrl = cardDetails.pictures.length > 0 ? cardDetails.pictures[0].url : '';
    
    return (
        <>
            <Card className='cursor-pointer rounded overflow-hidden shadow-lg ' onClick={()=> setIdPokemon(cardDetails.id)}>
                <CardHeader className='bg-gray-600 hover:bg-slate-800'>
                    <img
                        src={pictureUrl}
                        alt={cardDetails.name}
                        className='w-full imgCard'
                    />
                </CardHeader>
            </Card>
        </>
    )
}

export default CardComponent;