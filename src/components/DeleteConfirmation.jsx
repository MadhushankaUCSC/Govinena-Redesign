import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Axios from 'axios';

export default function DeleteConfirmation({ isOpen, setConfirm, position, id }) {

    const [open, setOpen] = React.useState(!isOpen);

    var token = document.cookie
        .split(";")
        .map((cookie) => cookie.split("="))
        .reduce(
            (accumulator, [key, value]) => ({
                ...accumulator,
                [key.trim()]: decodeURIComponent(value),
            }),
            {}
        ).token;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (key) => {

        setOpen(false);
        // setDeleteConfirm('gtgtgtgtgt');
        if (key === 'Agree') {
            if (position === 'singlePost') {
                console.log("This is the singlePost", id);
                Axios.delete(`${process.env.REACT_APP_BASE_URL}/deletepost/${id}`, {
                    header: {
                        authorization: `Token ${token}`
                    }
                }).then((response) => {
                    //need to get backend response
                    // window.location.reload();
                }).catch((error) => {
                    console.log("This is the error", error);
                });
            } else {
                console.log("This is the list", id);

                Axios.delete(`${process.env.REACT_APP_BASE_URL}/deletelistitem/${id}`, {
                    header: {
                        authorization: `Token ${token}`
                    }
                }).then((response) => {
                    //need to get backend response
                    // window.location.reload();
                }).catch((error) => {
                    console.log("This is the error", error);
                });
            }
        } else {
            // window.location.reload();
            setConfirm(false);
        }
    };

    return (
        <div>{isOpen === true && <IconButton aria-label="delete" color="secondary" onClick={handleClickOpen} style={{ marginLeft: '220px', marginTop: '-90px' }}>
            <DeleteIcon />
        </IconButton>}

            <Dialog

                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Are You Sure Delete This Item?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Once you delete item, you can not undo this operation !.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => { handleClose('Disagree') }} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={() => { handleClose('Agree') }} color="secondary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
