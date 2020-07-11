import React, { useState } from 'react';
import UserNameInput from '../components/UserNameInput';
import RoleList from '../components/RoleList';
import RoleStackedBar from "../components/RoleStackedBar"


const MainPage = () => {
    const [roledata, setRoleData] = useState('');
    const [gamedata, setGameData] = useState([]);

    return (
        <div>
            <h1>Clash Analyzer</h1>
            <UserNameInput onChange={(v1, v2) => 
            {
                setRoleData(v1);
                setGameData(v2);
            }} />
            <RoleList clashteam={roledata} />
            <RoleStackedBar gamedata={gamedata} roledata={roledata}/>

        </div>
    )
}

export default MainPage;