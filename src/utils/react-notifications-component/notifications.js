import "animate.css";
import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

export const ShowError = () => {
  Store.addNotification({
    title: "Ошибка!",
    message: "Введите логин и пароль",
    type: "danger", // 'default', 'success', 'info', 'warning'
    container: "top-right", // where to position the react-notifications-component
    animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
    animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
    dismiss: {
      duration: 3000,
    },
  });
};
