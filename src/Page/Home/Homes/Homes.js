import React from 'react';
import Achievement from '../Achievement/Achievement';
import ClientPartner from '../ClientPartner/ClientPartner';
import CoBrand from '../CoBrand/CoBrand';
import ContactUs from '../ContactUs/ContactUs';
import PhotoStream from '../PhotoStream/PhotoStream';
import RecentWork from '../RecentWork/RecentWork';
import TopBanner from '../TopBanner/TopBanner';
import WhatWeDo from '../WhatWeDo/WhatWeDo';

const Homes = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <RecentWork></RecentWork>
            <WhatWeDo></WhatWeDo>
            <ClientPartner></ClientPartner>
            <Achievement></Achievement>
            <PhotoStream></PhotoStream>
            <ContactUs></ContactUs>
            <CoBrand></CoBrand>
        </div>
    );
};

export default Homes;