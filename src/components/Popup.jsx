import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField";

export default function Popup() {

    const [open, setOpen] = React.useState(false);
    const buttonStyle = { backgroundColor: 'green', color: 'white', marginTop: '20px', marginBottom: '10px', fontSize: '12px' }
    const today = new Date();
    const date = today.setDate(today.getDate());
    const defaultValue = new Date(date).toISOString().split('T')[0]

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button aria-label="delete" color="secondary" onClick={handleClickOpen} style={buttonStyle}>
                SELECT
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Select Start Growing Date?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You can select start growing date from here !.
                    </DialogContentText>
                    <TextField style={{ margin: '5px' }}
                        type="date"
                        defaultValue={defaultValue}
                    />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} style={{ color: 'green' }} autoFocus>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
