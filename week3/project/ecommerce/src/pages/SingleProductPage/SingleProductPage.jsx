import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SingleProduct from './singleProduct/SingleProduct'
import './css/singleProductPage.css'
import ErrorMessage from '../../components/common/Error/ErrorMessage';
import Spinner from '../../components/common/Spinner/Spinner';
import useFetch from '../../hooks/useFetch';

export default function ProductDatail() {
   const { itemId } = useParams();
   const { data, isLoading, errorObj, getFetch } = useFetch()

   // eslint-disable-next-line
   useEffect(() => { getFetch(`https://dummyjson.com/products/${itemId}`) }, [itemId])

   const itemInfo = data;

   return (
      <div className='singleItemContainer'>
         {errorObj.isError && <ErrorMessage errorMsg={errorObj.message} />}
         {isLoading && <Spinner />}
         {itemInfo && <SingleProduct itemInfo={itemInfo} />}
      </div>
   )
}
