import { Provider } from "react-redux";
import store from "../store/store";
function ProvideR({children}) {
    return ( 
     <Provider store={store}>
        {children}
     </Provider>
     );
}

export default ProvideR;