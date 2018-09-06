import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteChannel } from '../actions/channel';
import { selectChannels } from '../reducers/channels';

const Channel = ({ id, name, removeChannel, onNameChange }) => (
  <div>
    <input type="text"
      value={name}
      placeholder={`Channel ${id} name`}
      onChange={({ target }) => onNameChange(id, target.value)}>
    </input>
    <button onClick={() => removeChannel(id)}>&times;</button>
  </div>
);

const mapStateToProps = (state) => ({
  channels: selectChannels(state)
})

const mapDispatchToProps = (dispatch) => ({
  removeChannel: (channelId) => dispatch(deleteChannel(channelId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Channel)
