import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const UserNameInput = (props) => {
    const [usr, setUsr] = useState(' ');

    function handleClick(e) {
        fetch('http://0.0.0.0:5000/api/getuserinfo/' + usr)
        .then(res => res.json())
        .then((data) => {
             props.onChange(data);
        })  
        .catch(console.log)
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>

            {/* TODO: learn to style components without putting in here like this mess */}
            <TextField id="outlined-basic" label="Username" variant="outlined"
                onChange={e => setUsr(e.target.value)} />

            <Button style={{
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                borderRadius: 3,
                border: 0,
                color: 'white',
                height: 44,
                margin: "10px",
                padding: '10px 30px',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            }} variant="contained"
                onClick={handleClick}>Search</Button>
        </div>
    );
}

export default UserNameInput;