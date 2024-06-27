import React, { useEffect } from 'react'
import { ProductDetail2Card } from '../components/Cards/ProductDetail2'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsById, selectById } from '../redux/features/product/ProductSlide'
import { useParams } from 'react-router-dom'

const ProductDetail2 = () => {
    const param  = useParams()
    const product = useSelector(state=> state?.product?.singleProduct)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProductsById(param?.id))
    })
  return (
    <div>
      <ProductDetail2Card title={product.name} des={product.desc} image={product.image} price={product.price}></ProductDetail2Card>
    </div>

  )
}

export default ProductDetail2
