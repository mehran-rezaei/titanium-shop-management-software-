import React , { useEffect , useState} from 'react';
import Table from '../../../../Common/Table'
import {columns ,sample_data} from './tableData'
import { GetAllPromotions } from '../../../../../dataservice/PromotionsProvider';
import usePromotionsStore from '../../../../../store/promotions';
const index = () => {
  const AllPromotionsdata = usePromotionsStore((state) => state.AllPromotionsdata);
  const setAllPromotionsdata = usePromotionsStore((state) => state.setAllPromotionsdata);
  const SelectedPromotions = usePromotionsStore((state) => state.SelectedPromotions);
  const setSelectedPromotions = usePromotionsStore((state) => state.setSelectedPromotions);
console.log(SelectedPromotions);

  
    
    const [promotions, setPromotions ] = useState<any>(false)
    useEffect(() => {
        GetAllPromotions()
        .then(Response => {
            console.log(Response);
            setAllPromotionsdata(Response.data)
        })
        .catch(err => console.log(err))
    } ,[])
    return (
        <div className='border border-maingreen/60 mr-2 ml-0.5 h-[82vh]'>
            { AllPromotionsdata &&
            <Table SelectedItemId={1} columns={columns} data={AllPromotionsdata} onClick={setSelectedPromotions} />
              }
        </div>
    );
};

export default index;