/* new 2 */

import {FC} from "react";
import {useGetProducts} from "../../hooks/API/Products/useGetProducts.tsx";
import {useMessage} from "../../hooks/useMessages.tsx";

export const Products: FC = () => {
    const { error: showError, success: showSuccess } = useMessage()
    const { result: products, loading: isProductsLoading, execute: getProducts } = useGetProducts({
        onError: () => showError("Ошибка при получении товаров")
    })
    return (
        <div>Hello</div>
    )
}