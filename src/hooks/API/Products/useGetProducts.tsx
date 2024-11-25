/* new 1 */

import { useDelivery } from '../useDelivery'
import { useFetch } from '../useFetch.tsx'

export const useGetProducts = ({
    onSuccess,
    onError,
}: {
    onSuccess?: () => void
    onError?: () => void
}) => {
    const delivery = useDelivery()
    const { result, loading, execute } = useFetch({
        asyncFunction: delivery.CS.productsActions.products_list,
        onSuccess,
        onError,
    })
    return { result, loading, execute }
}
