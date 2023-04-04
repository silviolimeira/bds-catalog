import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Product } from 'types/product';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import Form from './Form';
import List from './List';

const Products = () => {
  const [page, setPage] = useState<SpringPage<Product>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: '/products',
      withCredentials: true,
      params: {
        page: 0,
        size: 3,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <Switch>
      <Route path="/admin/products" exact>
        <List />
      </Route>
      <Route path="/admin/products/:productId" exact>
        <Form />
      </Route>
    </Switch>
  );
};

export default Products;
