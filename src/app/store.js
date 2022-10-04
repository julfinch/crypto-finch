import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';
import { nftApi } from '../services/nftApi';
import { webitApi } from '../services/webitApi';

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        [nftApi.reducerPath]: nftApi.reducer,
        [webitApi.reducerPath]: webitApi.reducer,
    },
        
});