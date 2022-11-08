import React from 'react';
import {Container, Typography} from "@mui/material";
import AidosBgLogo from "../general-components/AidosBgLogo";

const MainPage = () => {

    return (
        <Container style={{height:"100vh",display:"flex",alignContent:"center",flexWrap:"wrap"}}>
            <AidosBgLogo />

            <Typography variant="h2">
                Application for tracking transactions in the ethereum network.
            </Typography>

            <Typography variant="h6" fontWeight={300}>
                You can also check the account balance or see the status of the transaction by selecting the menu item you need
            </Typography>
        </Container>
    );
};

export default MainPage;
