
import { ADD_CHANNEL, DELETE_CHANNEL, UPDATE_CHANNEL_NAME, GOT_CHANNELS, GOT_CHANNELS_FAILURE } from '../actions/channel';

const channelInitialState = {
  name: ''
}

function channels(state = [], action) {
  switch (action.type) {
    case ADD_CHANNEL: {
      const channels = [...state];

      channels.push({ ...channelInitialState });

      return channels;
    }
    case DELETE_CHANNEL: {
      const channels = [...state];

      channels.splice(action.id, 1);

      return channels;
    }
    case GOT_CHANNELS: {
      const channels = [...state];

      channels.push(...action.channels);

      return channels;
    }
    case GOT_CHANNELS_FAILURE: {
      
      return state.concat([action.error]);
    }
    case UPDATE_CHANNEL_NAME: {
      const channels = [...state];

      channels[action.id] = {
        ...channels[action.id],
        name: action.name
      };

      return channels;
    }
    default:
      return state;
  }

  return state;
}

const selectChannels = (state) => state.channels;

export { channels as default, selectChannels };