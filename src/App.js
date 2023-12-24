import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import List from "./Components/List/List";
import Navbar from "./Components/Navbar/Navbar";

import "./App.css";

const App = () => {
  const statusData = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
  const userData = [
    "Anoop sharma",
    "Yogesh",
    "Shankar Kumar",
    "Ramesh",
    "Suresh",
  ];
  const priorityData = [
    { name: "No priority", priority: 0 },
    { name: "Low", priority: 1 },
    { name: "Medium", priority: 2 },
    { name: "High", priority: 3 },
    { name: "Urgent", priority: 4 },
  ];

  const [groupValue, setgroupValue] = useState(
    getStateLS() || "status"
  );
  const [orderData, setorderData] = useState("title");
  const [ticketDetails, setticketDetails] = useState([]);

  const orderDataByValue = useCallback(
    async (cardsArry) => {
      if (orderData === "priority") {
        cardsArry.sort((a, b) => b.priority - a.priority);
      } else if (orderData === "title") {
        cardsArry.sort((a, b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();

          if (titleA === titleB) {
            return 0;
          } else if (titleA > titleB) {
            return 1;
          } else {
            return -1;
          }
        });
      }
      await setticketDetails(cardsArry);
    },
    [orderData, setticketDetails]
  );

  function saveStateLS(state) {
    localStorage.setItem("groupValue", JSON.stringify(state));
  }

  function getStateLS() {
    const storedState = localStorage.getItem("groupValue");
    if (storedState) {
      return JSON.parse(storedState);
    }
    return null;
  }

  useEffect(() => {
    saveStateLS(groupValue);
    async function fetchData() {
      const response = await axios.get(
        "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
      );
      await extractData(response);
    }
    fetchData();

    async function extractData(response) {
      let cardsData = [];
      if (response.status === 200) {
        for (let i = 0; i < response.data.tickets.length; i++) {
          for (let j = 0; j < response.data.users.length; j++) {
            if (response.data.tickets[i].userId === response.data.users[j].id) {
              let ticketJson = {
                ...response.data.tickets[i],
                userObj: response.data.users[j],
              };
              cardsData.push(ticketJson);
            }
          }
        }
      }
      await setticketDetails(cardsData);
      orderDataByValue(cardsData);
    }
  }, [orderDataByValue, groupValue]);

  function handleGroupValue(value) {
    setgroupValue(value);
    console.log(value);
  }

  function handleOrderData(value) {
    setorderData(value);
    console.log(value);
  }

  return (
    <>
      <Navbar
        groupValue={groupValue}
        orderData={orderData}
        handleGroupValue={handleGroupValue}
        handleOrderData={handleOrderData}
      />
      <section className="canvas-area">
        <div className="w-full grid grid-cols-1 gap-3 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {
            {
              status: (
                <>
                  {statusData.map((listItem, item) => {
                    return (
                      <List
                        groupValue="status"
                        orderData={orderData}
                        listTitle={listItem}
                        listIcon=""
                        statusData={statusData}
                        ticketDetails={ticketDetails}
                        key={item}
                      />
                    );
                  })}
                </>
              ),
              user: (
                <>
                  {userData.map((listItem, item) => {
                    return (
                      <List
                        groupValue="user"
                        orderData={orderData}
                        listTitle={listItem}
                        listIcon=""
                        userData={userData}
                        ticketDetails={ticketDetails}
                        key={item}
                      />
                    );
                  })}
                </>
              ),
              priority: (
                <>
                  {priorityData.map((listItem, item) => {
                    return (
                      <List
                        groupValue="priority"
                        orderData={orderData}
                        listTitle={listItem.priority}
                        listIcon=""
                        priorityData={priorityData}
                        ticketDetails={ticketDetails}
                        key={item}
                      />
                    );
                  })}
                </>
              ),
            }[groupValue]
          }
        </div>
      </section>
    </>
  );
};

export default App;
