import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Main from "./Main";
import { persistor, Store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={Store}>
        <PersistGate persistor={persistor} loading={null}>
          <Main />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
