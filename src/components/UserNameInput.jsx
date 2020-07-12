import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: "30px"

    },
}));

const UserNameInput = (props) => {
    const [usr, setUsr] = useState(' ');
    const [inprog, setInProg] = useState(false);

    const classes = useStyles();



    let progressBar = true;
    function handleClick(e) {

        let apiIP = "0.0.0.0";
        //apiIP = "157.245.3.19";

        setInProg(true);
        fetch('http://' + apiIP + ':5000/api/getuserinfo/' + usr)
            .then(res => res.json())
            .then((d1) => {
                fetch('http://' + apiIP + ':5000/api/getmatchinfo/' + JSON.stringify(d1["players"]))
                    .then(res => res.json(''))
                    .then((d2) => {
                        props.onChange(d1, d2);
                        setInProg(false);
                    })
                    .catch(console.log)
            })
            .catch(console.log)
    }

    return (
        <div>
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
            <div style={{ flex: "center" }} className={classes.root}>
                {inprog && <LinearProgress />}
            </div>
        </div>

    );
}

export default UserNameInput;