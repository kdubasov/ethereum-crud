import React from 'react';
import {Route,Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import TransactionsPage from "./pages/TransactionsPage";
import MenuMain from "./general-components/MenuMain/MenuMain";
import Web3 from "web3";
import { Web3ReactProvider } from '@web3-react/core';
import AddNetwork from "./general-components/AddNetwork/AddNetwork";

const Router = () => {

    //ethereum
    function getLibrary(provider) {
        return new Web3(provider)
    }

    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <>
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/transactions'} element={<TransactionsPage />} />
                </Routes>

                <AddNetwork/>
                <MenuMain />
            </>
        </Web3ReactProvider>
    );
};

export default Router;
