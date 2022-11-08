import React, {useEffect, useState} from 'react';
import {Container, Typography} from "@mui/material";
import AidosBgLogo from "../general-components/AidosBgLogo";
import ListTransactions from "../pages-components/TransactionsPage/ListTransactions";
import PaginateTransactions from "../pages-components/TransactionsPage/PaginateTransactions";
import {useWeb3React} from "@web3-react/core";
import {web3} from "../constants/web3";

const TransactionsPage = () => {

    const [dataTrans,setDataTrans] = useState([]);
    // console.log(dataTrans);

    // web3
    const {
        account,
        activate,
    } = useWeb3React();

    // paginate
    const [sizePage] = useState(10);
    const [currentPage,setCurrentPage] = useState(1);

    useEffect(() => {
        //transactions hash from getTransactionCount()
        if (account){
            web3.eth.getTransactionCount(account)
                .then(count =>{
                    setDataTrans([]);
                    for(let i=0; i<count; i++){
                        web3.eth.getBlock(count-i).then(block=> {
                            // console.log(block,'block info');
                            for (let trans in block.transactions){
                                setDataTrans(old => [...old,block.transactions[trans]])
                            }
                        });
                    }
                })
        }
    }, [activate,account])

    return (
        <Container style={{display:"flex",alignContent:"center",flexWrap:"wrap"}}>
            <AidosBgLogo />

            <Typography style={{width:"100%",padding:"1em 0"}} variant={"h2"}>
                Transactions
            </Typography>

            <div
                style={{
                    display:"flex",
                    flexDirection:"column",
                    padding:"2em",
                    background:"rgba(255, 255, 255, 0.75)",
                    borderRadius:"2em",
            }}
            >
                {/*Transactions table*/}
                <ListTransactions dataTrans={dataTrans.slice(currentPage,currentPage + sizePage)} />
                {/*Transactions paginate*/}
                <PaginateTransactions allPages={Math.ceil(dataTrans.length/sizePage)} setCurrentPage={setCurrentPage} />
            </div>
        </Container>
    );
};

export default TransactionsPage;
