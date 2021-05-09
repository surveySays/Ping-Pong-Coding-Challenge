import React, { useState } from "react";

//Firebase
import { db } from "./Firebase";

export function LoadLeaders() {
  const [leaders, setLeaders] = useState([]);

  React.useEffect(() => {
    db.collection("leaderboard")
      .orderBy("wins", "desc")
      .onSnapshot((snapshot) => {
        if (!snapshot) {
          return;
        }
        const newLeaders = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLeaders(newLeaders);
      });
  }, []);

  return leaders;
}
