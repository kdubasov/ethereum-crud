import React, {useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
import DialogTransactions from "./DialogTransactions";

const ListTransactions = ({dataTrans}) => {

    const [openDialog, setOpenDialog] = React.useState(false);

    const [currentTrans,setCurrentTrans] = useState('')

    const setTrans = elem => {
        setCurrentTrans(elem)
        setOpenDialog(true)
    }


    if (dataTrans.length){
        return (
            <>
                <List component="nav" aria-label="main mailbox folders">
                    {
                        dataTrans
                            .map(elem => (
                                <ListItem
                                    key={elem}
                                    // selected={selectedIndex === 3}
                                    // onClick={(event) => handleListItemClick(event, 3)}
                                    disableGutters
                                    secondaryAction={
                                        <IconButton onClick={() => setTrans(elem)}>
                                            <InfoOutlinedIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemText primary={elem} />
                                </ListItem>
                            ))
                    }
                </List>

                {
                    currentTrans &&
                        <DialogTransactions open={openDialog} handleClose={() => setOpenDialog(false)} transaction={currentTrans} />
                }
            </>
        );
    }
};

export default ListTransactions;
