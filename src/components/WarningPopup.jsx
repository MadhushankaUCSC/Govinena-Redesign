import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function WarningPopup({setWarningStatus}) {

    const [open, setOpen] = React.useState(true);

   

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {

        setOpen(false);
        setWarningStatus(false);
        
    }

    return (
        <div>
            

            <Dialog

                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Warning !"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You are not allowed to make this change !.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={ handleClose} color="primary">
                        Cancel
                    </Button>
                    {/* <Button onClick={ handleClose} color="secondary" autoFocus>
                        Agree
                    </Button> */}
                </DialogActions>
            </Dialog>
        </div>
    );
}