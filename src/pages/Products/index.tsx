/* new 2 */

import {FC, useEffect} from "react";
import {useGetProducts} from "../../hooks/API/Products/useGetProducts.tsx";
import {useMessage} from "../../hooks/useMessages.tsx";

export const Products: FC = () => {
    const { error: showError, success: showSuccess } = useMessage()
    const { result: products, loading: isProductsLoading, execute: getProducts } = useGetProducts({
        onError: () => showError("Ошибка при получении товаров")
    })
    useEffect(() => {
        getProducts()
    }, [])
    console.log(products);
    return (
        <div>
            {isProductsLoading && <p>Загрузка...</p>}
            {products && products.data && (
                <ul>
                    {products.data.map((product: any) => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}