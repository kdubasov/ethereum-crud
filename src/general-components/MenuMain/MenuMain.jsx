import React from 'react';
import {useNavigate} from "react-router";

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
// icons
import SearchIcon from '@mui/icons-material/Search';
import PaidIcon from '@mui/icons-material/Paid';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const actions = [
    { icon: <HomeOutlinedIcon />, name: 'Home', path:'/' },
    { icon: <PaidIcon />, name: 'Balance', path:'/' },
    { icon: <PriceCheckIcon />, name: 'Status', path:'/' },
    { icon: <CurrencyExchangeIcon />, name: 'Transactions', path:'/transactions' },
];

//1976D2

const MenuMain = () => {

    //for navigation without links
    const navigate = useNavigate();

    //url path
    const path = window.location.pathname;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //close with navigate
    const handleCloseLink = path => {
        navigate(path);
        setOpen(false);
    };

    return (
        <SpeedDial
            ariaLabel="SpeedDial tooltip example"
            sx={{ position: 'absolute', bottom: 30, right: 30 }}
            icon={<SearchIcon />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
        >
            {actions
                .filter(action => action.path !== path)
                .map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    tooltipOpen
                    onClick={() => handleCloseLink(action.path)}
                />
            ))}
        </SpeedDial>
    );
};

export default MenuMain;
