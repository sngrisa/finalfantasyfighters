import { Progress } from "@/components/ui/progress";
import React, { useEffect, useState } from 'react';


const DetailsFighter = ({ detailsCombat }: { detailsCombat: any }) => {

    const [detailsCharacter, setDetailsCharacter] = useState({
        lv: 100,
        hp: 100,
        mp: 100,
        attack: 20,
    });

    useEffect(() => {
        setDetailsCharacter({
            ...detailsCharacter,
            hp: detailsCombat.hp,
            mp: detailsCharacter.mp
        })
    }, [detailsCharacter]);


    return (
        <>
            <div className='cursor-pointer'>
                <h2 className='flex items-center justify-center mb-4 mt-2'>LV {detailsCharacter.lv}</h2>
                <h2 className='flex items-center'>HP <Progress value={detailsCharacter.hp} className='ml-4 bg-red-700' /></h2>
                <h2 className='flex items-center'>MP <Progress value={detailsCharacter.mp} className='ml-4' /></h2>
                <h2 className='flex items-center'>Attack <Progress value={detailsCharacter.attack} className='ml-4' /></h2>
            </div>
        </>
    )
}

export default DetailsFighter;