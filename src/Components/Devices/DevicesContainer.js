import React from "react";
import {connect} from 'react-redux'

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container'
import { delDeviceHnd } from "../../Tools/Devices/devicesHandler";

const DevicesContainer = (props) => {
    let {list, filter} = props

    const onDelClick = (deviceId) => {
        console.log('onDelClick', deviceId)
        delDeviceHnd(deviceId)
    }
    

    return (
        <Container className="DevicesContainer">
        <ListGroup as="ol">
            {
                list
                .filter(device => filter.length === 0 ? true : device.model.includes(filter))
                .map(device => (
                    <ListGroup.Item as="li" key={device.id}>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="m-0">{device.model}: {device.color}</p>
                            <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick={() => onDelClick(device.id)}
                            > 
                                Delete
                            </button>
                        </div>
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
        </Container>
    );
};

const mapStateToProps = ({ devices }) => ({
    list: devices.list,
    filter: devices.filter
})
  
export default connect(mapStateToProps)(DevicesContainer);
