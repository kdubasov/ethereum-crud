import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';

const ListTransactions = ({dataTrans}) => {

    if (dataTrans.length){
        return (
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
                                <IconButton aria-label="comment">
                                    <InfoOutlinedIcon />
                                </IconButton>
                            }
                        >
                            <ListItemText primary={elem} />
                        </ListItem>
                    ))
                }
            </List>
        );
    }
};

export default ListTransactions;
