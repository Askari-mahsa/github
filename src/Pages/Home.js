import "./Home.css";
import Header from "../Components/header/Header";
import { useState } from "react";
import { callApi } from "../services/callApi";
import Loading from "../Components/loading/loading";
import { useNavigate } from "react-router";

const Home = () => {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const search = () => {
    setIsLoading(true);
    callApi(text)
      .then((res) => {
        setUsers(res.data.items);
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage("Unable to fetch user list");
        setIsLoading(false);
      });
  };
  const DeleteItem = () => {
    setText("");
    setUsers([]);
    setIsLoading();
    setErrorMessage("");
  };
  const memberprofile = (loginName) => {
    navigate("/Profile", {
      state: {
        loginName,
      },
    });
  };
  return (
    <>
      <Header />
      <div className="submitbutton">
        <input
          className="search-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search Users..."
        ></input>
        <button className="submit-button" onClick={search}>
          search
        </button>
        <button className="clearbutton" onClick={DeleteItem}>
          Delate
        </button>
      </div>
      <div className="main">
        {isLoading ? (
          <Loading />
        ) : (
          users.map((item, index) => {
            return (
              <div key={index} className="card">
                <div className="bodycard">
                  <img alt="profile" src={item.avatar_url}></img>
                  <div className="login" key={item.id}>
                    {item.login}
                  </div>
                  <button
                    className="More"
                    onClick={() => memberprofile(item.login)}
                  >
                    More
                  </button>
                </div>
              </div>
            );
          })
        )}
        <div className="error">{errorMessage}</div>
      </div>
    </>
  );
};

export default Home;
