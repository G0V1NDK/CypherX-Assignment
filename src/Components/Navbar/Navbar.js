import React, { useState } from 'react'
import filterIcon from '../../Assets/Images/filter.svg'
import downIcon from '../../Assets/Images/Down.svg'

export default function Navbar(props) {
    const [isRotated, setIsRotated] = useState(false);
    const [toggleFilter, settoggleFilter] = useState(false);

    function handleToggleData(e) {
        settoggleFilter(!toggleFilter);
        setIsRotated(!isRotated);
        if (e.target.value !== undefined) {
            props.handleGroupValue(e.target.value);
        }
    }
    function handleOrder(e) {
        settoggleFilter(!toggleFilter);
        if (e.target.value !== undefined) {
            props.handleOrderValue(e.target.value);
        }
    }

    return (
        <>
          <section className="mb-8">
            <div className=" w-fit h-8vh ml-4 py-4 cursor-pointer">
              <div>
                <div
                  className="flex items-center p-1 border rounded shadow-sm cursor-pointer"
                  onClick={handleToggleData}
                >
                  <div className="flex items-center mr-2">
                    <img src={filterIcon} alt="icon" className="h-5 fill-current text-gray-500" />
                  </div>
                  <div className="font-normal text-gray-700">Display</div>
                  <div className="flex items-center ml-3">
                    <img
                      src={downIcon}
                      alt="icon"
                      style={{ transform: `rotate(${isRotated ? 180 : 0}deg)` }}
                      className="h-5"
                    />
                  </div>
                </div>
                <div className={`${toggleFilter ? 'block' : 'hidden'} absolute z-2 mt-2 p-4 w-80 bg-white border rounded`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-gray-500 font-semibold">Grouping</div>
                    <select value={props.groupValue} onChange={handleToggleData} className='py-2 pr-6 pl-2 border rounded'>
                      <option value="status">Status</option>
                      <option value="user">User</option>
                      <option value="priority">Priority</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-gray-500 font-semibold">Ordering</div>
                    <select value={props.orderValue} onChange={handleOrder} className='py-2 pr-6 pl-2 border rounded'>
                      <option value="priority">Priority</option>
                      <option value="title">Title</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
      
}
