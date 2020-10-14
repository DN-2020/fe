import React from 'react';
import OrderStatisticsPresenter from './OrderStatisticsPresenter';
const data = [
  {
    id: 'japan',
    color: 'hsl(294, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 214
      },
      {
        x: 'helicopter',
        y: 112
      },
      {
        x: 'boat',
        y: 8
      },
      {
        x: 'train',
        y: 294
      },
      {
        x: 'subway',
        y: 157
      },
      {
        x: 'bus',
        y: 83
      },
      {
        x: 'car',
        y: 177
      },
      {
        x: 'moto',
        y: 179
      },
      {
        x: 'bicycle',
        y: 7
      },
      {
        x: 'horse',
        y: 131
      },
      {
        x: 'skateboard',
        y: 107
      },
      {
        x: 'others',
        y: 182
      }
    ]
  },
  {
    id: 'france',
    color: 'hsl(231, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 256
      },
      {
        x: 'helicopter',
        y: 27
      },
      {
        x: 'boat',
        y: 128
      },
      {
        x: 'train',
        y: 162
      },
      {
        x: 'subway',
        y: 176
      },
      {
        x: 'bus',
        y: 162
      },
      {
        x: 'car',
        y: 107
      },
      {
        x: 'moto',
        y: 130
      },
      {
        x: 'bicycle',
        y: 150
      },
      {
        x: 'horse',
        y: 239
      },
      {
        x: 'skateboard',
        y: 209
      },
      {
        x: 'others',
        y: 121
      }
    ]
  },
  {
    id: 'us',
    color: 'hsl(302, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 236
      },
      {
        x: 'helicopter',
        y: 170
      },
      {
        x: 'boat',
        y: 111
      },
      {
        x: 'train',
        y: 294
      },
      {
        x: 'subway',
        y: 264
      },
      {
        x: 'bus',
        y: 16
      },
      {
        x: 'car',
        y: 229
      },
      {
        x: 'moto',
        y: 165
      },
      {
        x: 'bicycle',
        y: 60
      },
      {
        x: 'horse',
        y: 204
      },
      {
        x: 'skateboard',
        y: 103
      },
      {
        x: 'others',
        y: 234
      }
    ]
  },
  {
    id: 'germany',
    color: 'hsl(321, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 189
      },
      {
        x: 'helicopter',
        y: 42
      },
      {
        x: 'boat',
        y: 171
      },
      {
        x: 'train',
        y: 18
      },
      {
        x: 'subway',
        y: 56
      },
      {
        x: 'bus',
        y: 100
      },
      {
        x: 'car',
        y: 23
      },
      {
        x: 'moto',
        y: 177
      },
      {
        x: 'bicycle',
        y: 189
      },
      {
        x: 'horse',
        y: 94
      },
      {
        x: 'skateboard',
        y: 288
      },
      {
        x: 'others',
        y: 227
      }
    ]
  },
  {
    id: 'norway',
    color: 'hsl(90, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 34
      },
      {
        x: 'helicopter',
        y: 149
      },
      {
        x: 'boat',
        y: 132
      },
      {
        x: 'train',
        y: 169
      },
      {
        x: 'subway',
        y: 146
      },
      {
        x: 'bus',
        y: 235
      },
      {
        x: 'car',
        y: 196
      },
      {
        x: 'moto',
        y: 248
      },
      {
        x: 'bicycle',
        y: 144
      },
      {
        x: 'horse',
        y: 229
      },
      {
        x: 'skateboard',
        y: 243
      },
      {
        x: 'others',
        y: 227
      }
    ]
  }
];
const OrderStatisticsContainer = props => {
  return <OrderStatisticsPresenter {...props} data={data} />;
};

export default OrderStatisticsContainer;
