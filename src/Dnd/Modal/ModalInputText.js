import Button from 'react-bootstrap/Button'
import React from "react";
import Modal from "react-bootstrap/Modal";
import ListItemText from "@material-ui/core/ListItemText";

import {PostAdd} from "@material-ui/icons";
import ListItemIcon from "@material-ui/core/ListItemIcon";

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   Input text
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button  variant="secondary" onClick={props.onHide}>Close</Button>
                <Button variant="primary" onClick={props.onHide}>
                    Save Changes
                </Button>
            </Modal.Footer>



        </Modal>
    );
}

function ModalInputText()  {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <ListItemIcon>
                <PostAdd onClick={() => setModalShow(true)}/>

            </ListItemIcon>

            <ListItemText primary="Add input text"  onClick={() => setModalShow(true)}/>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
export default ModalInputText

