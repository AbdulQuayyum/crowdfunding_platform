import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from "../Components/Index"
import { useStateContext } from '../Context/Index'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [campaigns, setCampaigns] = useState([])

  const { address, contract, getCampaigns } = useStateContext()

  const fetchCampaigns = async () => {
    setIsLoading(true)
    const data = await getCampaigns()
    setCampaigns(data)
    setIsLoading(false)
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract])

  return (
    <DisplayCampaigns
      campaigns={campaigns}
      isLoading={isLoading}
      title="All Campaigns"
    />
  )
}

export default Home