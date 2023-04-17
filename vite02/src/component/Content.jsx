import React from "react";
import Icon from "@mdi/react";
import { mdiAccountAlert } from "@mdi/js";

function Content(props) {
    const { title, sub } = props;

    return (
        <div>
            <h2>{title}</h2>
            <h4>{sub}</h4>
            <Icon path={mdiAccountAlert} size={3} />
        </div>
    )

}

export default Content;