import React from "react";
import Skeleton from 'react-loading-skeleton';
const LoadingComponent = () => {
    return (
        <React.Fragment>
           <Skeleton className="col-12" variant="rect" height={170}/>  
         <Skeleton count={5} className="col-lg-8 offset-lg-4 col-md-8 offset-md-1  mt-5" variant="rect" width={600} height={170}/>
        </React.Fragment>
                    
    )
}

export default LoadingComponent