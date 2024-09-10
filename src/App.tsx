import { Provider } from "react-redux"
import { persistor, store } from "./app/store"
import Counter from "./features/counter/Counter"
import { PersistGate } from "redux-persist/integration/react"

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Counter />
      </PersistGate>
    </Provider>
  )
}

export default App
