import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Model( props) {
  const {open,setOpen,index,users}=props
  const handleClose = () => {
    setOpen(false);
  };

  const getData= users.find((item,ind)=>ind==index)
  

  return (
    <div >
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        onClick={handleClose}
        className="test"
      >
        <DialogContent sx={{height:"500px",width:"400px", marginTop:"140px"}}  >
          <DialogContentText id="alert-dialog-slide-description">
          <img src={getData?.image} alt="" height="100px" width="100px" style={{border:"2px solid black",borderRadius:"50%"}} />  
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            <h4> Name :-  {getData?.firstName} {getData?.maidenName} {getData?.lastName} 
          </h4>
          </DialogContentText>
        {/* </DialogContent> */}
        {/* <DialogContent > */}
          <DialogContentText id="alert-dialog-slide-description">
                <h4>Email :- {getData?.email}</h4>
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
                <h4>Gender :- {getData?.gender}</h4>
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}