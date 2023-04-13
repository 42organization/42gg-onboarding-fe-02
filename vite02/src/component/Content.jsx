import React from "react";
import Icon from "@mdi/react";
import { mdiAccountAlert } from "@mdi/js";
import styled from "@emotion/styled";

const StyledH2 = styled.h2`
    color: white;
`;

const StyledH4 = styled.h4`
    color: white;
`;

function Content(props) {
    const { title, sub } = props;

    return (
        <div>
            <StyledH2>{title}</StyledH2>
            <StyledH4>{sub}</StyledH4>
            <Icon path={mdiAccountAlert} size={1} />
        </div>
    )

}

export default Content;