import React from 'react'
function Alerts(props) {
    return (
        <div className="container" style={{height: '35px'}}>
        {props.alert &&
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type}</strong> {props.alert.message}
            </div>}
        </div>
    )
}
export default Alerts