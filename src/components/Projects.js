import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

// import { useSelector } from "react-redux"; // gets data from the store
// import { useDispatch } from "react-redux"; // updates the store data
// import { changeColor } from "../store/colorStore"; // updates the store data

export default function Projects() {
  // vanilla js section
  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
  };

  // const dispatch = useDispatch(); // send info (a.k.a. "state") to the store
  // const color = useSelector((state) => state.colorStore.color); // get initial value from store

  // jsx section
  return (
    <div style={wrapperStyle} id="projects">
      <h2>PROJECTS</h2>
      <CardGroup>
        <Card>
          <Card.Img variant='top' src='holder.js/100px160' />
          <Card.Body>
            <Card.Title>Bug Tracker</Card.Title>
            <Card.Text>
              This app has user authentication, plus user and administrator login
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>ReactJS, MongoDB, CSS, and Bootstrap</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='holder.js/100px160' />
          <Card.Body>
            <Card.Title>Payroll Portal</Card.Title>
            <Card.Text>This app creates users and generates printable reports</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>ReactJS, MongoDB, CSS, and Bootstrap</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='holder.js/100px160' />
          <Card.Body>
            <Card.Title>Marketing Website</Card.Title>
            <Card.Text>
              This app allows users to comment, and add items to a shopping cart action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>ReactJS, MongoDB, CSS, and Bootstrap</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit amet. Gravida rutrum quisque non tellus orci ac auctor augue. Mi proin sed libero enim sed faucibus turpis in. Pharetra diam sit amet nisl suscipit. Aliquet enim tortor at auctor urna nunc id cursus. Sagittis id consectetur purus ut faucibus. Lacus sed turpis tincidunt id aliquet risus. Curabitur vitae nunc sed velit dignissim. Nisl purus in mollis nunc sed. Et malesuada fames ac turpis egestas. Fermentum iaculis eu non diam. Pretium lectus quam id leo in vitae turpis. Potenti nullam ac tortor vitae. Diam donec adipiscing tristique risus. Egestas integer eget aliquet nibh. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Accumsan in nisl nisi scelerisque.

Nec feugiat in fermentum posuere urna. Suspendisse in est ante in nibh mauris cursus. Turpis cursus in hac habitasse platea dictumst. Vulputate odio ut enim blandit volutpat maecenas volutpat. Dolor morbi non arcu risus quis. Sagittis eu volutpat odio facilisis mauris sit amet. Non tellus orci ac auctor augue. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Et ultrices neque ornare aenean euismod elementum. Eros donec ac odio tempor orci dapibus ultrices. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Orci sagittis eu volutpat odio facilisis mauris sit. Sit amet purus gravida quis blandit turpis. Suspendisse ultrices gravida dictum fusce ut placerat. Massa placerat duis ultricies lacus sed turpis tincidunt id.

Augue ut lectus arcu bibendum at. Augue lacus viverra vitae congue eu consequat ac felis donec. A arcu cursus vitae congue. Pellentesque habitant morbi tristique senectus. Egestas sed tempus urna et pharetra pharetra. Vel eros donec ac odio tempor orci dapibus ultrices. In eu mi bibendum neque egestas congue quisque. Gravida rutrum quisque non tellus orci ac. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Integer quis auctor elit sed vulputate mi sit amet. Laoreet suspendisse interdum consectetur libero id faucibus nisl. In vitae turpis massa sed elementum tempus egestas sed sed. Nunc scelerisque viverra mauris in aliquam. Diam in arcu cursus euismod quis viverra. At tellus at urna condimentum. Rhoncus aenean vel elit scelerisque mauris. Faucibus in ornare quam viverra orci sagittis eu.

Sed enim ut sem viverra. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Fermentum posuere urna nec tincidunt praesent semper. Scelerisque varius morbi enim nunc faucibus a. Velit dignissim sodales ut eu sem integer. Sed nisi lacus sed viverra tellus. At tempor commodo ullamcorper a lacus vestibulum. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Sit amet facilisis magna etiam. Mi eget mauris pharetra et ultrices neque ornare aenean. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Tristique senectus et netus et malesuada fames ac turpis. Sed blandit libero volutpat sed cras. Ut faucibus pulvinar elementum integer enim neque volutpat.

Etiam erat velit scelerisque in. Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. Egestas erat imperdiet sed euismod nisi. Nisi quis eleifend quam adipiscing vitae. Justo laoreet sit amet cursus sit amet dictum sit amet. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Egestas integer eget aliquet nibh. Eget magna fermentum iaculis eu non. Accumsan lacus vel facilisis volutpat est velit. Eget mi proin sed libero enim sed faucibus turpis in. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Maecenas ultricies mi eget mauris pharetra. At risus viverra adipiscing at in tellus integer feugiat. Elementum facilisis leo vel fringilla est. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Consectetur purus ut faucibus pulvinar elementum integer enim. Nisi lacus sed viverra tellus in hac habitasse platea.</h2>
    </div>
  );
}