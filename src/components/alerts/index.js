import React from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import AlertContext from "../../context/alerts/AlertContext";
import { connect } from "react-redux";
import './alert.css'

const Alert = ({alerts}) => {
 
  return (
      <TransitionGroup className="todo-list">
      {alerts.length > 0 &&
      alerts.map((alert) => {
          return (
            <CSSTransition classNames="item" timeout={1000}>
              <div className={`alert-box  alert-success`}>
                <div>
                  {alert.type === "alert-success" ? (
                    <FaCheckCircle size={25} />
                  ) : (
                    <RiErrorWarningFill size={25} />
                  )}
                </div>
                <p>{alert.msg}</p>
                <div
                  className="toast-close"
                  onClick={() => {
                    removeAlert();
                    console.log("alert Removed");
                  }}
                >
                  <FaTimes />
                </div>
              </div>
            </CSSTransition>
          );
     })}
    </TransitionGroup>
  );
};


const mapStateToProps=(state) => ({
    alerts: state.alerts
})
export default connect(mapStateToProps)(Alert);
