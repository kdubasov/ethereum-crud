import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {web3} from "../../constants/web3";
import {Skeleton} from "@mui/lab";

const DialogTransactions = ({open,transaction,handleClose}) => {

    const [data,setData] = useState({})
    console.log(data);

    useEffect(() => {
        web3.eth.getTransaction(transaction).then(res => setData(res));
    },[transaction])

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Transaction data
            </DialogTitle>
            <DialogContent>
                {
                    Object.values(data).length ?
                    <DialogContentText id="alert-dialog-description">
                        Block hash: <strong>{(data.blockHash).slice(0,40) + '...'}</strong><br/>
                        Block number: <strong>{(data.blockNumber)}</strong><br/>
                        From: <strong>{(data.from)}</strong><br/>
                        To: <strong>{(data.to)}</strong><br/>
                        Gas: <strong>{(data.gas)}</strong><br/>
                        Hash: <strong>{(data.hash).slice(0,40) + '...'}</strong><br/>
                        Value: <strong>{(data.value)}</strong><br/>
                    </DialogContentText>:
                    <Skeleton animation="wave" />
                }
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogTransactions;
