import React from "react";
import GoMain from "../component/utils/GoMain";

function NotFound() {
    return (
        <main className="notFound">
            <h1>404</h1>
            <h3>Not Found</h3>
            <h5>The resource requested could not be found on this server!</h5>
            <GoMain />
        </main>
    )
}

export default NotFound;