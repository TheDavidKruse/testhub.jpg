import axios from 'axios';

export const fetchCoinData = () => {
  return {type: 'FETCH_COIN', payload: axios.get(`https://coincap.io/front`)}
}

export const changeCoin = (coin) => {
  return {type:'CHANGE_COIN',payload:coin}
}