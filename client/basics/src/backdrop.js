import './Req/modal.css'

function Backdrop(props){
	return(
		<div className='backdrop' onClick = {props.onClose}/>
	)
}

export default Backdrop;