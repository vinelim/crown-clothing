import { all, call } from 'redux-saga/effects';

import { userSaga } from './user/user.sagas';
import { cartSaga } from './cart/cart.sagas';

export default function* rootSaga() {
    yield all([
        call(userSaga),
        call(cartSaga)
    ])
}