import { createStore} from 'redux'
import reducers from './reducers/index'

/**
 * Since this example not using any middleware second parameters is empty.
 * Middlewares are like React Saga, React Thunks.
 * **/
const store = createStore(reducers, {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default store;
