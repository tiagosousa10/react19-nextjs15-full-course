//components
import { Bounce, ToastContainer } from "react-toastify";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { Home } from "./pages/Home";

//css
import "./styles/global.css";
import "./styles/theme.css";

export function App() {
    return (
        <TaskContextProvider>
            <Home />;
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </TaskContextProvider>
    );
}
