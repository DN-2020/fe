import React from 'react';
import { Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import { Main, Search,ProductDetail,Reservation} from '../pages';
import {Reservation} from '../pages'
=======

import { Main, AccountInfoContainer  } from '../pages';
>>>>>>> 59ca7796329eae22226be730967b0fe912aaf1d7

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
<<<<<<< HEAD
    <Route exact path="/search" component={Search} />
    <Route path="/productDetail" component={ProductDetail} />
    <Route path="/reservation" component={Reservation} />

=======
    <Route exact path="/accountinfo" component={AccountInfoContainer} />
>>>>>>> 59ca7796329eae22226be730967b0fe912aaf1d7
  </Switch>
);

export default Routes;
