import React from 'react';
import { connect } from 'react-redux';
import { Enroll, Unenroll } from '../../actions/scheduleActions'
import {Card, ListGroup} from 'react-bootstrap';



/* This component recieves props from the schedule component.
Those props allow this component to map over API data and return the schedule of events.
Through mapStatetoProps and mapdispathtoprops, the component can map the current enrollment of the user based on the
schedule id and allow the user to enroll in a class*/

function ScheduleStructure(props) {
    return(
      <div>
      {props.props.Schedule.map(item => (
        <div key ={item.id}>
          <Card style={{width: '18rem'}}>
          <Card.Header> Schedule Item Details: </Card.Header>
            <ListGroup variant="Flush">
              <ListGroup.Item> Date {item.date} </ListGroup.Item>
              <ListGroup.Item> Time {item.time} </ListGroup.Item>
              <ListGroup.Item> EventType {item.eventType} </ListGroup.Item>
              <ListGroup.Item> Duration {item.duration} </ListGroup.Item>
              <ListGroup.Item> Instructor {item.instructor} </ListGroup.Item>
          {(props.Enrollment.map(object =>
            object.schedule_id).includes(item.id) === true) ?(
            <ListGroup.Item>
              <p>Enroll</p>
              <button onClick={props.Unenroll.bind(this, item.id, props.Auth.username)}>Unenroll</button>
            </ListGroup.Item>
          ) : (
            <ListGroup.Item><button onClick={props.Enroll.bind(this, item.id, props.Auth.username)}> Enroll </button>
            </ListGroup.Item>
          )
        }
            </ListGroup>
          </Card>
        </div>))}
      </div>
    )
  }

const mapStateToProps = (state) => ({
  Auth: state.Auth.user,
  Enrollment: state.Schedule.Enrollment
});

export default connect(mapStateToProps, { Enroll, Unenroll })(ScheduleStructure);
