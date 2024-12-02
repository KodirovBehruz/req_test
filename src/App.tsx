/* new 3 */

import './App.css'
import {DeliveryProvider} from "./hooks/API/useDelivery.tsx";
import {AppRouter} from "./router/AppRouter.tsx";
import {MessagesProvider} from "./hooks/useMessages.tsx";

export const App = () => {
  return (
    <div id='root'>
      <DeliveryProvider>
        <MessagesProvider>
          <AppRouter />
        </MessagesProvider>
      </DeliveryProvider>
    </div>
  )
}

