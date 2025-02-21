import "./App.css";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";

function App() {
  const notificationsList = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    {
      id: 3,
      type: "urgent",
      value: "<strong>Urgent requirement</strong> - complete by EOD",
    },
  ];

  return (
    <>
      <div className="root-notifications">
        <Notifications notificationsList={notificationsList} />
      </div>
      <Header />
      <Login />
      <Footer />
    </>
  );
}

export default App;
