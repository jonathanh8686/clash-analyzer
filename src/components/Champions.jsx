import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { useSpring, animated } from 'react-spring'

const Champions = (props) => {

    const [champItems, setChampItems] = useState();


    const springConfig = {
        mass: 100,
        tension: 210,
        friction: 12,
        clamp: true
    }

    const springProp = useSpring({
        config: springConfig,
        opacity: 1,
        from: { opacity: 0 }
    });
    console.log(champItems);


    if (champItems == undefined) {

        var ci = Object.keys(props["champdata"]["champions"]).map(function (key) {
            return [key, props["champdata"]["champions"][key]];
        });

        ci.sort(function (first, second) {
            return second[1] - first[1];
        });

        setChampItems(ci);

        console.log(champItems);
    }

    return (
        <div style={{
            display: "flex",
            margin: "20px 1px 20px 1px",
            flex: "0 0 350px",
            alignSelf: "stretch",
        }}>
            <animated.div style={springProp}>

                <div style={{
                    display: "flex",
                    margin: "20px 1px 20px 1px",
                    flex: "0 0 350px",
                    alignSelf: "stretch",
                }}>
                    <Typography variant="h6">
                        {props.name}
                    </Typography>
                    <div>
                        <List>

                            {champItems != undefined &&
                                champItems.map((value, index) =>
                                    <ListItem key={index}>
                                        <ListItemAvatar>
                                            <Avatar src={"https://raw.githubusercontent.com/jonathanh8686/clash-analyzer/master/public/assets/champions/" + value[0] + ".png"}>

                                            </Avatar>
                                        </ListItemAvatar>

                                        <ListItemText
                                            primary={value[0]}
                                            secondary={value[1]}
                                        />
                                    </ListItem>)
                            }

                        </List>
                    </div>
                </div>

            </animated.div>
        </div>)
}

export default Champions;