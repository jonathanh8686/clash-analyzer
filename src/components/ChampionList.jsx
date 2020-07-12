import React from 'react';

import Champions from "./Champions";

const ChampionList = (props) => {
    if (props["gamedata"].length != 0) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
            }} className="rowC">

                {Object.keys(props["gamedata"]).map((value, index) =>
                    <Champions champdata={props["gamedata"][value]} name={value} key={index} />
                )}

            </div>
        );
    }
    else return (<div></div>);
}

export default ChampionList;