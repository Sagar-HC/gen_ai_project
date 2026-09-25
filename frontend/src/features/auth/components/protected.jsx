import React from "react";

import { useAuth } from "../hooks/useAuth";


const Protected = () => {
    const {loading ,user} =useAuth;
    return(
        <div>Protected</div>
    )
}

export default Protected;