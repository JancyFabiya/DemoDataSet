import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import Logo from "../img/logo.PNG";


function Datadetails() {

  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(true);
  const [productButton, setProductButton] = useState(false);
  const [userButton, setUserButton] = useState(false);


  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then((res) => {
        setProducts(res.data.product);
        setUsers(res.data.user);
        console.log(res.data.product);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);
 

  return (
    <div className="flex ">
      <div
        className={`bg-dark-purple border border-dark-purple h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute
         -right-3 top-9 border border-dark-purple cursor-pointer ${
           !open && "rotate-180"
         }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <img
            src={Logo}
            alt=""
            className={`text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>
        <div
          className={`flex items-center rounded-md bg-light-white mt-6 ${
            !open ? "px-2.5" : "px-4"
          } py-2`}
        >
          <BsSearch
            className={`text-white text-lg block float-left cursor-pointer ${
              open && "mr-2"
            } `}
          />
          <input
            type={"search"}
            placeholder="Search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>
        <ul className="pt-2">
          <li
            className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2
                  "
          >
            <span className="text-2xl block float-left">
              <MdProductionQuantityLimits />
            </span>
            <span
              className={`text-base font-medium flex-1 ${!open && "hidden"}`}
              onClick={() => {
                setProductButton(!productButton);
                setUserButton(false);
              }}
            >
              Product
            </span>
          </li>
          <li
            className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md 
                  "
          >
            <span className="text-2xl block float-left">
              <FaRegUser />
            </span>
            <span
              className={`text-base font-medium flex-1 ${!open && "hidden"}`}
              onClick={() => {
                setUserButton(!userButton);
                setProductButton(false);
              }}
            >
              User
            </span>
          </li>
        </ul>
      </div>

      {/* table */}

      <div className="p-7 w-screen">
        <div className="p-5 h-screen bg-gray-100 ">
          {productButton == true ? (
            <>
              <h1 className="text-xl mb-2">Product:</h1>
              <div className="overflow-auto rounded-lg shadow hidden md:block">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 border-gray-200 min-w-full sm:px-6 lg:px-8">
                    {products.map((product) => (
                      <tr>
                        {Object.keys(product).map((key) => (
                          <>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              {key}
                            </th>
                          </>
                        ))}
                      </tr>
                    ))}
                  </thead>

                  <tbody>
                    {products.map((product) => (
                      <tr className="bg-gray-50">
                        {Object.values(product).map((value) => (
                          <td
                          
                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                          >
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            ""
          )}

          {/* USER */}

       
          {userButton == true ? (
            <>
              <h1 className="text-xl mb-2">Your Product:</h1>
              <div className="overflow-auto rounded-lg shadow hidden md:block">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 border-gray-200 min-w-full sm:px-6 lg:px-8">
                    {users.map((user) => (
                      <tr>
                        {Object.keys(user).map((key) => (
                          <>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {key}
                          </th>
                         
                          </>
                        ))}
                      </tr>
                    ))}
                  </thead>

                  <tbody>
                    {users.map((user) => (
                      <tr className="bg-gray-50">
                        {Object.values(user).map((value) => (
                            <td  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {value}
                            </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            ""
          )}

        </div>
      </div>
    </div>
  );
}

export default Datadetails;
