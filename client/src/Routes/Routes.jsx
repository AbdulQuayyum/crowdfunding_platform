import React from "react";
import { Routes, Route } from "react-router-dom";

import CreateCampaign from "../Views/CreateCampaign";
import CampaignDetails from "../Views/CampaignDetails";
import Home from "../Views/Home";
import Profile from "../Views/Profile";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={< Profile/>} />
            <Route path="/CreateCampaign" element={< CreateCampaign/>} />
            <Route path="/CampaignDetails/:id" element={< CampaignDetails/>} />
        </Routes>
    )
}

export default MainRoutes