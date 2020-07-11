import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useSpring, animated } from 'react-spring'

const Role = (props) => {

    let imgsrc = "https://raw.githubusercontent.com/jonathanh8686/clash-analyzer/master/public/assets/roles/";
    if (props["position"] == "FILL" || props["position"] == "UNSELECTED") { // tood: come up with icon for unselected
        imgsrc += "fill.png";
    } else if (props["position"] == "TOP") {
        imgsrc += "top.png";
    } else if (props["position"] == "JUNGLE") {
        imgsrc += "jungle.png";
    } else if (props["position"] == "MIDDLE") {
        imgsrc += "mid.png";
    } else if (props["position"] == "BOTTOM") {
        imgsrc += "bottom.png";
    } else if (props["position"] == "UTILITY") {
        imgsrc += "support.png";
    }

    function openOpGg(username) {
        var win = window.open("https://na.op.gg/summoner/userName="+props.name, '_blank');
        win.focus();
    }

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

    // lol wtf is going on with these divs i have no clue but it suddenly started working

    return (
        <div style={{
            display: "flex",
            margin: "20px 1px 20px 1px",
            flex: "0 0 300px",
            alignSelf: "stretch",
        }}>
            <animated.div style={springProp}>

                <div style={{
                    display: "flex",
                    margin: "20px 1px 20px 1px",
                    flex: "0 0 300px",
                    alignSelf: "stretch",
                }}>
                    <Card className="rolecard"
                        style={{
                            display: "flex",
                            margin: "20px 1px 20px 1px",
                            flex: "0 0 300px",
                            alignSelf: "stretch",
                        }}>
                        <CardActionArea>
                            <CardMedia style={{ width: "33%", marginLeft: "33%" }}
                                image={imgsrc}
                                component="img"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button onClick={openOpGg} size="small" color="primary">
                                view na.op.gg
                            </Button>
                        </CardActions>
                    </Card>
                </div>

            </animated.div>
        </div>
    )
}

export default Role;