import { } from "react";
//import ContaineWrapper from "./wraper";
import MyProvider from "./contextProvider";
import Child from "./child";
export default function App(){

    
    return( <>
        <MyProvider>
            <div>i am contextcomponent</div>
            <Child/>
        </MyProvider>

        
        </>
        
    )
}