import { queryTags, getThings, getChannels } from '@/services/api';

export default {
  namespace: 'monitor',

  state: {
    tags: [],
    things: {},
    channels: {},
  },

  effects: {
    *fetchTags(_, { call, put }) {
      const response = yield call(queryTags);
      yield put({
        type: 'saveTags',
        payload: response.list,
      });
    },

    *fetchThings(_, { call, put }) {
      const response = yield call(getThings);
      yield put({
        type: 'save',
        payload: {'things': response},
      });
    },

    *fetchChannels(_, { call, put }) {
      const response = yield call(getChannels);
      yield put({
        type: 'save',
        payload: {'channels': response},
      });
    },
  },

  reducers: {
    saveTags(state, action) {
      return {
        ...state,
        tags: action.payload,
      };
    },
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
