import React, { useState } from 'react';
import UserNameInput from '../components/UserNameInput';
import RoleList from '../components/RoleList';

const MainPage = () => {
    const [roledata, setRoleData] = useState('');

    return (
        <div>
            <h1>Clash Analyzer</h1>
            <UserNameInput onChange={(value) => setRoleData(value)}/>
            <RoleList clashteam={roledata}/>
        </div>
    )
}

export default MainPage;