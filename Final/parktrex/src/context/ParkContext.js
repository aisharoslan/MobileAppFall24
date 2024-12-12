import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

// Reducer for handling actions related to parks
const parkReducer = (state, action) => {
  switch (action.type) {
    case 'get_parks':
      return action.payload;
    case 'add_park':
      return [...state, action.payload];
    case 'delete_park':
      return state.filter((park) => park.id !== action.payload);
    case 'edit_park':
      return state.map((park) => {
        return park.id === action.payload.id ? action.payload : park;
      });
    default:
      return state;
  }
};

// Fetch all parks from the jsonserver
const getParks = (dispatch) => {
  return async () => {
    try {
      const response = await jsonServer.get('/parks');
      dispatch({ type: 'get_parks', payload: response.data });
    } catch (err) {
      console.error('Error fetching parks:', err);
    }
  };
};

// Add a new park to the jsonserver
const addPark = (dispatch) => {
  return async (title, content, rating, callback) => {
    try {
      const response = await jsonServer.post('/parks', { title, content, rating });
      dispatch({ type: 'add_park', payload: response.data });
      if (callback) {
        callback();
      }
    } catch (err) {
      console.error('Error adding park:', err);
    }
  };
};

// Delete a park from the jsonserver
const deletePark = (dispatch) => {
  return async (id) => {
    try {
      await jsonServer.delete(`/parks/${id}`);
      dispatch({ type: 'delete_park', payload: id });
    } catch (err) {
      console.error('Error deleting park:', err);
    }
  };
};

// Edit an existing park in the jsonserver
const editPark = (dispatch) => {
  return async (id, title, content, rating, callback) => {
    try {
      await jsonServer.put(`/parks/${id}`, { title, content, rating });
      dispatch({ type: 'edit_park', payload: { id, title, content, rating } });
      if (callback) {
        callback();
      }
    } catch (err) {
      console.error('Error editing park:', err);
    }
  };
};

export const { Context, Provider } = createDataContext(
  parkReducer,
  {
    getParks,
    addPark,
    deletePark,
    editPark,
  },
  []
);
