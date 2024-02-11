import React from 'react';
import Breadcrumbs from '../Components/Common/BreadCrump/Breadcrumbs';
import NewPromotionConatainer from '../Components/Containers/Management/Promotions_Actions/NewPromotions'
const newPromotions = () => {
    return (
        <div>
            <Breadcrumbs
                items={[
                    {
                        label: "Management",
                        path: "/Management",
                    },
                    {
                        label: "New Promotions",
                        path: "/newPromotions",
                    },
                ]}
            />
            <NewPromotionConatainer/>
        </div>
    );
};

export default newPromotions;