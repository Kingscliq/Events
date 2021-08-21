import React from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { clearAlert } from "../../store/actions/alert";
// import AlertContext from "../../context/alerts/AlertContext";
import { connect } from "react-redux";
import "./alerts.css";

const Alert = ({ alerts }) => {
  return (
    <TransitionGroup className="todo-list">
      {alerts.length > 0 &&
        alerts.map(alerts => {
          return (
            <CSSTransition classNames="item" timeout={1000}>
              <div className={`alert-box ${alerts.type}`}>
                <div>
                  {alerts.type === "alert-success" ? (
                    <FaCheckCircle size={25} />
                  ) : (
                    <RiErrorWarningFill size={25} />
                  )}
                </div>
                <p style={{ fontSize: "12px" }}>{alerts.msg}</p>
                <div
                  className="toast-close"
                  onClick={() => {
                    clearAlert(alerts.id);
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

const mapStateToProps = state => ({
  alerts: state.alert,
});
export default connect(mapStateToProps)(Alert);
