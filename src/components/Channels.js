import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllChannels } from '../actions/channel';
import { selectChannels } from '../reducers/channels';
import Channel from './Channel';

const displayChannelsNumber = 100;

class Channels extends Component {

  componentDidMount() {
    this.props.getAllChannels()
  }

  render() {
    const { channels, removeChannel, onNameChange } = this.props;
    return (
      <div className='channel-container channel-container--center'>
        {channels.slice(0, displayChannelsNumber).map((channel, id) => (
          <Channel key={id} id={id} {...channel} removeChannel={removeChannel} onNameChange={onNameChange} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  channels: selectChannels(state)
})

const mapDispatchToProps = (dispatch) => ({
  getAllChannels: () => dispatch(getAllChannels())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Channels)