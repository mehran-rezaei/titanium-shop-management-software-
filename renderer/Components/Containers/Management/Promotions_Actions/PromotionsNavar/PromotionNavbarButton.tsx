import Router from 'next/router';
import React from 'react';
import { DeletePromotions } from '../../../../../dataservice/PromotionsProvider';
import usePromotionsStore from '../../../../../store/promotions';

const PromotionNavbarButton = (props:any) => {
    const { image , text , FunctionHandler} = props
    const SelectedPromotions = usePromotionsStore((state) => state.SelectedPromotions);

    const handler = () => {
        if( FunctionHandler === '/newPromotions') {
            Router.push('/newPromotions')
            console.log('yess');
        }
        if( FunctionHandler === 'Delete' && SelectedPromotions !== false ){
            DeletePromotions(SelectedPromotions.id)
            .then(Response => {
                console.log(Response);
            })
            .catch(err => console.log(err)
            )
        }
        else{
            console.log('ee');
            console.log(SelectedPromotions);
        }
    }
    
    return (
        <div onClick={handler} className='flex items-center gap-y-1 flex-col justify-center cursor-pointer'>
        <img src={image} alt="" className='h-9' />
        <h2 className='text-sm font-semibold'>{text}</h2>
        </div>
    );
};

export default PromotionNavbarButton;