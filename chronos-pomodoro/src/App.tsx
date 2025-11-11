//components
import { Bounce, ToastContainer } from "react-toastify";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { Home } from "./pages/Home";

//css
import "./styles/global.css";
import "./styles/theme.css";
import { MessagesContainer } from "./components/MessagesContainer";

export function App() {
    return (
        <TaskContextProvider>
            <MessagesContainer>
                <Home />;
            </MessagesContainer>
        </TaskContextProvider>
    );
}
