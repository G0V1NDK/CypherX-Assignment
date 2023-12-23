import React from 'react'

import Card from '../Card/Card'

let cardCount = 0;

export default function List(props) {
    return (
        <>
          <div className="w-full ml-1 last:mr-1.2">
            <div className="flex items-center justify-between py-1 border-b">
              <div className="flex items-center">
                {props.groupValue === 'status' && (
                  <>
                    {props.listTitle === 'Backlog' && (
                      <div className="list-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          style={{ color: 'gray' }}
                        >
                          <path
                            fill="none"
                            d="M0 0h24v24H0z"
                          />
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
                    )}
                    {props.listTitle === 'Todo' && (
                      <div className="list-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          style={{ color: 'gray' }}
                        >
                          <path
                            fill="none"
                            d="M0 0h24v24H0z"
                          />
                          <path
                            d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
                          ></path>
                        </svg>
                      </div>
                    )}
                    {/* ... Other status conditions */}
                  </>
                )}
                {/* ... Other groupValue conditions */}
                <div className="list-title">
                  {/* ... Other title conditions */}
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
              {props.ticketDetails.map((ticket) => {
                if (
                  (ticket.status === props.listTitle) ||
                  (ticket.priority === props.listTitle) ||
                  (ticket.userObj.name === props.listTitle)
                ) {
                  cardCount++;
                  return <Card cardDetails={ticket} />;
                }
                return null;
              }, (cardCount = 0))}
            </div>
          </div>
        </>
      );
}
