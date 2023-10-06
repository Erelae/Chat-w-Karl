import { useEffect } from "react";
import s from "./notification.module.scss";

const Notification = ({ title, content, onClose }) => {
  useEffect(() => {
    setTimeout(onClose, 2000);
  }, []);

  return (
    <div className={s.notification}>
      <div className={s.close} onClick={onClose}></div>
      <strong>{title}</strong>
      <p>{content}</p>
    </div>
  );
};

export default Notification;
