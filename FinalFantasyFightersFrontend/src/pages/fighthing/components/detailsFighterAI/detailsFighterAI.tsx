import { Progress } from '@/components/ui/progress';
import React, { useEffect, useState } from 'react';

const DetailsFighterAI = ({ combatDetails }: { combatDetails: any }) => {

    const [detailsCharacter, setDetailsCharacter] = useState({
        lv: 50,
        hp: 100,
        mp: 100,
        attack: 50,
    });

    useEffect(() => {
        setDetailsCharacter({
            ...detailsCharacter,
            hp: combatDetails.hp,
            mp: combatDetails.mp
        })
    }, [detailsCharacter])


    return (
        <>
            <div className='cursor-pointer'>
                <h2 className='flex items-center justify-center mb-4 mt-2'>LV {detailsCharacter.lv}</h2>
                <h2 className='flex items-center'>HP <Progress value={detailsCharacter.hp} className='ml-4 bg-red-800' /></h2>
                <h2 className='flex items-center'>MP <Progress value={detailsCharacter.mp} className='ml-4' /></h2>
                <h2 className='flex items-center'>Attack <Progress value={detailsCharacter.attack} className='ml-4' /></h2>
            </div>
        </>
    )
}

export default DetailsFighterAI;