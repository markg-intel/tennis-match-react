import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function SchedulerModal(props) {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.thisDate}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button className="mr-3" href="/availability">Create Event</Button>
                <Button className="mr-3" href="/proposematch">Find Events</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export function ProposeModal(props) {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <h6 className="card-subtitle mb-2 text-muted" >{props.userFirstname ? `Username: ${props.username} (${props.userFirstname} ${props.userLastname})` : `Username: ${props.username}`}</h6>
                {props.eventLocationTwo==="any" ? 
                    <div className="form-group" >
                    <label for="eventLocation" >Court Location</label>
                    <select className="form-control" name="eventLocation" id="eventLocation"
                        onChange={props.handleInputChange}
                        value={props.eventLocation} >
                        {props.courtList.map((event, j) => (
                            <option value={event} key={j}>{event}</option>
                        ))}
                    </select>
                    </div>
                : <p>Location: {props.eventLocationTwo}</p>}
                
                <form >
                    <div className="form-row">
                        <div className="form-group col" >
                            <label for="startTimeHour" >Start Hour</label>
                            <select className="form-control" name="startTimeHour" id="startTimeHour"
                                onChange={props.handleInputChange}
                                value={props.startTimeHour} >
                                <option value="Choose...">Choose...</option>
                                {props.startIntArr.map((event, j) => (
                                    <option value={event} key={j}>{event}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group col" >
                            <label for="startTimeMinute" >Start Minute</label>
                            <select className="form-control" name="startTimeMinute" id="startTimeMinute"
                                onChange={props.handleInputChange}
                                value={props.startTimeMinute} >
                                <option value="Choose...">Choose...</option>
                                <option value="00">:00</option>
                                <option value="15">:15</option>
                                <option value="30">:30</option>
                                <option value="45">:45</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col" >
                            <label for="endTimeHour" >End Hour</label>
                            <select className="form-control" name="endTimeHour" id="endTimeHour"
                                onChange={props.handleInputChange}
                                value={props.endTimeHour} >
                                <option value="Choose...">Choose...</option>
                                {props.endIntArr.map((event, j) => (
                                    <option value={event} key={j}>{event}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group col" >
                            <label for="endTimeMinute" >End Minute</label>
                            <select className="form-control" name="endTimeMinute" id="endTimeMinute"
                                onChange={props.handleInputChange}
                                value={props.endTimeMinute} >
                                <option value="Choose...">Choose...</option>
                                <option value="00">:00</option>
                                <option value="15">:15</option>
                                <option value="30">:30</option>
                                <option value="45">:45</option>
                            </select>
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button data-userid={props.userid} onClick={props.handleProposeSubmit}>Propose Match</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export function EventDetailsModal(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.eventName}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Date: {props.date}</p>
                <p>Location: {props.location}</p>
                <p>Player One: {props.playerOneUsername} ({props.playerOneFirst} {props.playerOneLast})</p>
                <p>Player Two: {props.playerTwoUsername} ({props.playerTwoFirst} {props.playerTwoLast})</p>
                <p>Start Time: {props.startTime}</p>
                <p>End Time: {props.endTime}</p>
                <Button onClick={props.handleDelete}>Delete</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

