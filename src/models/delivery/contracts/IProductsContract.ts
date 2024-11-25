export interface IProductsResponseContract {
    id: string
    name: string
    product_slug: string
    category: string
    image: string
    size_type: string[]
    discount: number
    price: number
    in_stock: boolean
    created_at: string
    updated_at: string
}