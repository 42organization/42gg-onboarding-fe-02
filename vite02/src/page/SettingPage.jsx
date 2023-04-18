import React from "react";
import Icon from "@mdi/react";
import { mdiAccountSettings } from "@mdi/js";

function SettingPage() {
    return (
        <div>
            <h2>설정 페이지</h2>
            <Icon path={mdiAccountSettings} size={3}/>
        </div>
    )
}

export default SettingPage;