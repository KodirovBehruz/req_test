/* new 3 */

import './App.css'
import {Products} from "./pages/Products";
import {DeliveryProvider} from "./hooks/API/useDelivery.tsx";

function App() {
  return (
  <DeliveryProvider>
      <Products />
  </DeliveryProvider>
  )
}

export default App
