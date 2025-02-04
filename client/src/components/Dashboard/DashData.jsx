import { FaPeopleGroup } from "react-icons/fa6";
import { RiAuctionFill, RiErrorWarningFill } from "react-icons/ri";
import { BsCashStack } from "react-icons/bs";


const admindata = [
    {
        id: 1,
        name: 'User',
        icon: FaPeopleGroup,
        value: 500
    },
    {
        id: 2,
        name: 'Auction',
        icon: RiAuctionFill,
        value: 500
    },
    {
        id: 3,
        name: 'Reported Auction',
        icon: RiErrorWarningFill,
        value: 500
    },
    {
        id: 4,
        name: 'Pltform Income',
        icon: BsCashStack,
        value: 500
    },
]

export { admindata }