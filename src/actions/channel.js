import axios from 'axios';

const ADD_CHANNEL = 'ADD_CHANNEL';
const DELETE_CHANNEL = 'DELETE_CHANNEL';
const UPDATE_CHANNEL_NAME = 'UPDATE_CHANNEL_NAME';
const GOT_CHANNELS = 'GOT_CHANNELS';
const GOT_CHANNELS_FAILURE = 'GOT_CHANNELS_FAILURE';

const API_URL = 'https://pcast.phenixrts.com';
let applicationId = "test";
let secret = "secret";

function addChannel() {
  return {
    type: ADD_CHANNEL
  };
}

function deleteChannel(channelId) {
  return {
    type: DELETE_CHANNEL,
    id: channelId
  };
}

function updateChannelName(channelId, name) {
  return {
    type: UPDATE_CHANNEL_NAME,
    id: channelId,
    name: name
  }
}

function getAllChannels() {
  return function (dispatch) {
    return axios.put(`${API_URL}/pcast/channels`,
      {
        applicationId,
        secret
      },
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    ).then((response) => {
      dispatch({
        type: GOT_CHANNELS,
        channels: response.data.channels
      })
    }).catch((error) => {
      dispatch({
        type: GOT_CHANNELS_FAILURE,
        error
      })
    })
  }
}

export { addChannel, deleteChannel, updateChannelName, getAllChannels, ADD_CHANNEL, DELETE_CHANNEL, UPDATE_CHANNEL_NAME, GOT_CHANNELS, GOT_CHANNELS_FAILURE };