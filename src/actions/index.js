import { Actions } from 'react-native-router-flux';
import { CREATE_POST_FORM } from './types';

export const onRegionChange = region => ({
  type: 'REGION_CHANGE',
  payload: region,
});

export const onNewTagPress = () => (dispatch) => {
  dispatch({ type: CREATE_POST_FORM });
  Actions.postTagForm();
};
