import React from "react";
import { GlobalStateContext } from "../global/GlobalStateContext";

function GlobalState(props) {
    return (
        <GlobalStateContext>
            {/* Para entregar tudo que há dentro do componente */}
            {props.children}
        </GlobalStateContext>
    )
}

export default GlobalState;