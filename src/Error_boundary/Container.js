import Header from "./Header";
import Left_nav from "./Left_nav";
import Content from "./Content";
import {ErrorBoundary} from 'react-error-boundary';
import Dami from "./Dami";
function Container(){
    return(
        <>
        <ErrorBoundary FallbackComponent={Dami}>
             <Header > </Header>
        </ErrorBoundary>
       
        <Left_nav></Left_nav>
        <Content></Content>
        {/* <Dami></Dami> */}
        </>
    )
}

export default Container;