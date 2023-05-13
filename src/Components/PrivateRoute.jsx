import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { useToast } from "@chakra-ui/react";


function PrivateRoute({children}) {
    const toast = useToast();
    let firstName =  JSON.parse(localStorage.getItem("FirstName")) || "";
    console.log("serverFirst",firstName)
  
    if(firstName === ""){
        toast({
            title: "Not Valid",
            description: "You have to Login First",
            variant: "subtle",
            status:'error',
            position: 'top-right',
            duration: 3000,
            isClosable: true,
        })
        return <Navigate to="/"/>
    }
    else{
        return children;
    }
    
}

export default PrivateRoute;