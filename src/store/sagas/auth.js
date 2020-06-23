import { put, delay, call } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* logoutSaga(action) {
  yield call([localStorage, 'removeItem'], 'token');
  yield call([localStorage, 'removeItem'], 'expirationTime');
  yield call([localStorage, 'removeItem'], 'userId');
  yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}

export function* authUserSaga(action) {
  yield put(actions.authStart());

  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true,
  };

  const key = 'AIzaSyAUoCswyJQqZPKU1mDvvFr11G9JJxQ6UB0';
  const method = action.isSignUp ? 'signUp' : 'signInWithPassword';
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${method}?key=${key}`;

  try {
    const response = yield axios.post(url, authData);
  
    const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
    yield localStorage.setItem('token', response.data.idToken);
    yield localStorage.setItem('expirationDate', expirationDate);
    yield localStorage.setItem('userId', response.data.localId);
    yield put(actions.authSuccess(response.data.idToken, response.data.localId));
    yield put(actions.checkAuthTimeout(response.data.expiresIn));
  } catch (e) {
    yield put(actions.authFail(e.response.data.error));
  }
}

export function* authCheckState(action) {
  const token = yield localStorage.getItem('token');
  if (!token) {
    yield put(actions.logout());
  } else {
    const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
    if (expirationDate <= new Date()) {
      yield put(actions.logout());
    } else {
      const userId = yield localStorage.getItem('userId');
      const timeDiff = yield (expirationDate.getTime() - new Date().getTime()) / 1000;
      yield put(actions.authSuccess(token, userId));
      yield put(actions.checkAuthTimeout(timeDiff));
    }
  }
}
