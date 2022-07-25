import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { WatchLaterProvider } from "./context/watchContext";
import { LikeProvider } from "./context/likeContext";
import { HistoryProvider } from "./context/historyContext";
import { PlaylistProvider } from "./context/playListContext";
import { DataProvider } from "./context/dataContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <DataProvider>
      <AuthProvider>
        <WatchLaterProvider>
          <LikeProvider>
            <HistoryProvider>
              <PlaylistProvider>
                <App />
              </PlaylistProvider>
            </HistoryProvider>
          </LikeProvider>
        </WatchLaterProvider>
      </AuthProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
