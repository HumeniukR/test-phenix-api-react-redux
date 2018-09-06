import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteChannel, addChannel, updateChannelName } from '../actions/channel';
import { selectChannels } from '../reducers/channels';
import Channels from './Channels';

const App = ({ channels, addChannel, removeChannel, onNameChange }) => (
  <div>
    <button onClick={addChannel} className="btn-add--center">Add Channel</button>
    <Channels channels={channels} onNameChange={onNameChange} removeChannel={removeChannel} />
  </div>
);

const mapStateToProps = (state) => ({
  channels: selectChannels(state)
})

const mapDispatchToProps = (dispatch) => ({
  removeChannel: (channelId) => dispatch(deleteChannel(channelId)),
  addChannel: () => dispatch(addChannel()),
  onNameChange: (channelId, name) => dispatch(updateChannelName(channelId, name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)