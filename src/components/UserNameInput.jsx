import React from 'react';


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const UserNameInput = () => {
    return (
        <div style={{
            display:"flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <Button style={{
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                borderRadius: 3,
                border: 0,
                color: 'white',
                height: 44,
                margin: "10px",
                padding: '10px 30px',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            }} className={"root"} variant="contained">Search</Button>
        </div>
    );
}

export default UserNameInput;