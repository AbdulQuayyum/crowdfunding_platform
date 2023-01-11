import React, { useContext, createContext } from "react"
import { useAddress, useContract, useMetamask, useContractWrite }  from "@thirdweb-dev/react"
import { ethers } from "ethers"
import { EditionMetadataWithOwnerOutputSchema } from '@thirdweb-dev/sdk'

const StateContext = createContext()

export const StateContextProvider = ({ children }) => {
const { contract } = useContract("0x9d7fd648689Df40bb5D19264A043B2c22DbF76EF")
const { mutateAsync: createCampaign } = useContractWrite(contract, "createCampaigns")

const addresss = useAddress()
const connect = useMetamask()

}

export const useStateContext = useStateContext(StateContext)