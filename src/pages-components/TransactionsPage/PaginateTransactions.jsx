import React from 'react';
import {Pagination} from "@mui/lab";

const PaginateTransactions = ({allPages,setCurrentPage}) => {

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <Pagination
            showFirstButton
            showLastButton
            count={allPages}
            // variant="outlined"
            color="primary"
            onChange={handleChange}
        />
    );
};

export default PaginateTransactions;
