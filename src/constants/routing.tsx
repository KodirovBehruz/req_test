import { FC } from 'react'
import {Products} from "../pages/Products";


export enum ROUTES {
  INDEX = '/',
  PRODUCTS = '/products',
}

export interface IROUTER {
  path: ROUTES
  component: FC | any
  label?: string
  accesses?: string[]
}

export const ROUTES_ICONS = {
  [ROUTES.INDEX]: '',
}

export const AUTH_ROUTES: IROUTER[] = [
  {
    path: ROUTES.INDEX,
    component: <Products />,
    label: '',
  },
  {
    path: ROUTES.PRODUCTS,
    component: <Products />,
    label: 'Товары',
  },
]
