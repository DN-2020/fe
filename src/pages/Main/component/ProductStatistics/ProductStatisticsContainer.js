import React from 'react';
import ProductStatisticsPresenter from './ProductStatisticsPresenter';

const data = [
  {
    id: 'erlang',
    label: 'erlang',
    value: 154,
    color: 'hsl(183, 70%, 50%)'
  },
  {
    id: 'rust',
    label: 'rust',
    value: 428,
    color: 'hsl(99, 70%, 50%)'
  },
  {
    id: 'hack',
    label: 'hack',
    value: 278,
    color: 'hsl(305, 70%, 50%)'
  },
  {
    id: 'python',
    label: 'python',
    value: 329,
    color: 'hsl(56, 70%, 50%)'
  },
  {
    id: 'go',
    label: 'go',
    value: 104,
    color: 'hsl(225, 70%, 50%)'
  }
];

const ProductStatisticsContainer = props => {
  return <ProductStatisticsPresenter {...props} data={data} />;
};

export default ProductStatisticsContainer;
