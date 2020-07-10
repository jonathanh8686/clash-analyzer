import React from 'react';
import Role from "./Roles"

import "../App.css"

const RoleList = (props) => {
    if (props["clashteam"]["players"] != undefined) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }} className="rowC">
                {props["clashteam"]["players"].map((value, index) => <Role name={value.name} key={index} />)}
            </div>
        );
    }
    else return (<div></div>);
}

export default RoleList;