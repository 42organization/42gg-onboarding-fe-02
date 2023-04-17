import React from "react";
import Icon from "@mdi/react";
import { mdiAccountAlert } from "@mdi/js";

function PageContents(props) {
    const { title } = props;

    return (
        <div>
            <h2>{title}</h2>
            <Icon path={mdiAccountAlert} size={3} />
        </div>
    )

}

export default PageContents;