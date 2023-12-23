import React from "react";

import Card from "../Card/Card";

let cardCount = 0;

export default function List(props) {
  console.log(props);
  return (
    <>
      <div className="w-full ml-1 last:mr-1.2">
        <div className="flex items-center justify-between py-1 border-b">
          <div className="flex items-center">
            {
              {
                status: (
                  <>
                    {
                      {
                        Backlog: (
                          <div className="list-icon">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="icon"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ color: "gray" }}
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M7.5 4.21l0 .01"></path>
                              <path d="M4.21 7.5l0 .01"></path>
                              <path d="M3 12l0 .01"></path>
                              <path d="M4.21 16.5l0 .01"></path>
                              <path d="M7.5 19.79l0 .01"></path>
                              <path d="M12 21l0 .01"></path>
                              <path d="M16.5 19.79l0 .01"></path>
                              <path d="M19.79 16.5l0 .01"></path>
                              <path d="M21 12l0 .01"></path>
                              <path d="M19.79 7.5l0 .01"></path>
                              <path d="M16.5 4.21l0 .01"></path>
                              <path d="M12 3l0 .01"></path>
                            </svg>
                          </div>
                        ),
                        Todo: (
                          <div className="list-icon">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="icon"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ color: " gray" }}
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            </svg>
                          </div>
                        ),
                        "In progress": (
                          <div className="list-icon">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              class="icon"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ color: "rgb(245, 200, 66)" }}
                            >
                              <path d="M12 2h-1v9H2v1a10 10 0 0 0 17.07 7.07A10 10 0 0 0 12 2z"></path>
                            </svg>
                          </div>
                        ),
                        Done: (
                          <div className="list-icon">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              class="icon"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ color: "rgb(56, 75, 181)" }}
                            >
                              <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                            </svg>
                          </div>
                        ),
                        Cancelled: (
                          <div className="list-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="gray"
                                d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59z"
                              />
                            </svg>
                          </div>
                        ),
                      }[props.listTitle]
                    }{" "}
                  </>
                ),
                user: <></>,
                priority: (
                  <>
                    {
                      {
                        0: (
                          <div className="card-tag-icon flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 1024 1024"
                            >
                              <path
                                fill="currentColor"
                                d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z"
                              />
                            </svg>
                            <div className="pr-2">No Priority</div>
                          </div>
                        ),
                        1: (
                          <div className="card-tag-icon flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 48 48"
                            >
                              <g fill="currentColor">
                                <path
                                  fill-rule="evenodd"
                                  d="M35 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-4Zm-1 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9ZM19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21Zm3-1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V21a1 1 0 0 0-1-1h-4Z"
                                  clip-rule="evenodd"
                                />
                                <path d="M6 33a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Z" />
                              </g>
                            </svg>
                            <div className="pr-2">LOW</div>
                          </div>
                        ),
                        2: (
                          <div className="card-tag-icon flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 48 48"
                            >
                              <g fill="currentColor">
                                <path d="M19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21ZM6 33a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Z" />
                                <path
                                  fill-rule="evenodd"
                                  d="M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9Zm3-1a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-4Z"
                                  clip-rule="evenodd"
                                />
                              </g>
                            </svg>
                            <div className="pr-2">MEDIUM</div>
                          </div>
                        ),
                        3: (
                          <div className="card-tag-icon flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="currentColor"
                                d="M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9ZM19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21ZM9 30a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H9Z"
                              />
                            </svg>
                            <div className="pr-2">HIGH</div>
                          </div>
                        ),
                        4: (
                          <div className="card-tag-icon flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill="red"
                                d="M5.96 4.457a2.075 2.075 0 1 1 4.08 0l-.856 4.56a1.205 1.205 0 0 1-2.368 0l-.855-4.56ZM9.5 12.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"
                              />
                            </svg>
                            <div className="pr-2">URGENT</div>
                          </div>
                        ),
                      }[props.listTitle]
                    }{" "}
                  </>
                ),
              }[props.groupValue]
            }
            {/* ... Other groupValue conditions */}
            <div className="list-title">
              {
                {
                  priority: (
                    <>
                      {props.priorityList
                        ? props.priorityList.map((priorityProperty) =>
                            priorityProperty.priority === props.listTitle ? (
                              <>{priorityProperty.name}</>
                            ) : null
                          )
                        : null}
                    </>
                  ),
                  status: <>{props.listTitle}</>,
                  user: <>{props.listTitle}</>,
                }[props.groupValue]
              }
            </div>
            <div className="list-sum">{cardCount}</div>
          </div>
          <div className="flex items-center">
            <div className="list-add-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z"
                ></path>
              </svg>
            </div>
            <div className="list-option-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm-7 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 3 7.8zm14 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 17 7.8z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full">
          {props.ticketDetails.map((ticket, item) => {
            if (
              ticket.status === props.listTitle ||
              ticket.priority === props.listTitle ||
              ticket.userObj.name === props.listTitle
            ) {
              cardCount++;
              return <Card cardDetails={ticket} key={item} />;
            }
            return null;
          }, (cardCount = 0))}
        </div>
      </div>
    </>
  );
}
