import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartServiceComponent from '../components/Cards/CardServiceComponent';
import { fetchServices } from '../redux/features/service/serviceSlice';

export const CartService = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.data);
  const serviceStatus = useSelector((state) => state.services.status);
  const error = useSelector((state) => state.services.error);

  useEffect(() => {
    if (serviceStatus === 'idle') {
      dispatch(fetchServices());
    }
  }, [serviceStatus, dispatch]);

  if (serviceStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (serviceStatus === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='w-full h-full flex flex-wrap justify-center items-center mb-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {services.map(service => (
          <CartServiceComponent
            key={service.id}
            image={service.image}
            created_by={service.created_by}
            created_at={service.created_at}
            description={service.description}
            category={service.category}
          />
        ))}
      </div>
    </div>
  );
};
