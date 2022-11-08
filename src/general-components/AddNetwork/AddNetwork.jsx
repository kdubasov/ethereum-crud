import React, {useEffect, useState} from 'react';
import {Button} from "@mui/material";
import {useWeb3React} from "@web3-react/core";
import {injected} from "../../constants/connectorsWeb3";
import {Alert} from "@mui/lab";

const AddNetwork = () => {

    // https://github.com/Shmoji/web3-react-example/blob/main/pages/index.js
    const {
        active,
        account,
        chainId,
        activate,
    } = useWeb3React();

    const [error,setError] = useState('')

    console.info(
        '(ETH PROVIDER) active: ' + active + '\n',
        '(ETH PROVIDER) account: ' + account + '\n',
        '(ETH PROVIDER) chainId: ' + chainId + '\n',
    )

    //for connect account
    async function connect() {
        if (window.ethereum){
            try {
                await activate(injected)
                window.localStorage.setItem('isWalletConnected', 'true')
            } catch (ex) {
                setError('Connect error button!')
            }
        }else {
            setError('Install metamask extension!')
        }
    }

    //for add adk network (auto)
    const addADKNetworkAUTO = async () => {
        await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
                chainId: '0x9d50',
                chainName: 'ADK Mainnet v2.1',
                nativeCurrency: {
                    name: 'ADK',
                    symbol: 'ADK',
                    decimals: 18
                },
                rpcUrls: ['https://api1.mainnet.aidoskuneen.com:9443'],
                blockExplorerUrls: ['https://explorer.mainnet.aidoskuneen.com']
            }]
        })
            .then(res => console.log(res))
            .catch(() => {
                setError('Network connect error!');
            })
    }


    useEffect(() => {
        const connectWalletOnPageLoad = async () => {
            if (window.ethereum){
                if (window.localStorage.getItem('isWalletConnected') === 'true') {
                    try {
                        await activate(injected)
                        window.localStorage.setItem('isWalletConnected', 'true')
                    } catch (ex) {
                        setError('Connect error useEffect!')
                    }
                }
            }else {
                setError('Install metamask extension!')
            }
        }
        connectWalletOnPageLoad().then(console.log)

    }, [activate])


    return (
        <div
            style={{
                position:"absolute",
                right:30,
                top:30,
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center"
        }}
        >

            {
                error &&
                <Alert severity="error">
                    {error}
                </Alert>
            }

            {
                chainId === 40272 ?
                    <Alert style={{marginRight:15}} severity="success">Your network connected</Alert> :
                    <Button style={{marginRight:15}} variant="contained" onClick={addADKNetworkAUTO}>Connect Aidos Network</Button>
            }

            {
                active?
                    <Alert severity="success">Account connected</Alert> :
                    <Button variant="contained" onClick={connect}>Connect</Button>
            }
        </div>
    );
};

export default AddNetwork;
