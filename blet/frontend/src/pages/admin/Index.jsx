import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Admin = () => {
  const [data, setdata] = useState([]);
  const [sortType, setsortType] = useState("");

  useEffect(() => {
    axios.get("/menu").then((res) => {
      setdata(res.data);
      console.log(data);
    });
  }, []);

  const deleteMenu = async (id) => {
    await axios.delete(`menu/${id}`);
    setdata(data.filter((elem) => elem._id !== id));
  };

  if (sortType === "a-z") {
    data.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortType === "z-a") {
    data.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortType === "high-low") {
    data.sort((a, b) => b.price - a.price);
  } else if (sortType === "low-high") {
    data.sort((a, b) => a.price - b.price);
  }

  const handleSort = (type) => {
    setsortType(type);
  };

  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title> Admin</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex">
          <h1 className="text-3xl">Menu</h1>
        </div>
        <div className="px-3 py-4 flex items-start flex-col">
          <Link className="p-[3px] relative mb-1.5" to="/post">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Add Menu
            </div>
          </Link>
          <div className="flex gap-1">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleSort("a-z")}
            >
              a-z
            </button>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleSort("z-a")}
            >
              z-a
            </button>
            <button
              class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleSort("high-low")}
            >
              high-low
            </button>
            <button
              class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleSort("low-high")}
            >
              low-high
            </button>
          </div>
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Image</th>
                <th className="text-left p-3 px-5">Name</th>
                <th className="text-left p-3 px-5">Description</th>
                <th className="text-left p-3 px-5">Price</th>
                <th className="text-left p-3 px-5">Edit</th>
                <th className="text-left p-3 px-5">Delete</th>
                <th className="text-left p-3 px-5">Detail</th>
              </tr>
              {data.map((elem) => {
                return (
                  <tr
                    key={elem._id}
                    className="border-b hover:bg-orange-100 bg-gray-100"
                  >
                    <td className="p-3 px-5">
                      <img src={elem.image} alt="" />
                    </td>
                    <td className="p-3 px-5">{elem.name}</td>
                    <td className="p-3 px-5">{elem.description}</td>
                    <td className="p-3 px-5">{elem.price}</td>
                    <td>
                      <button
                        type="button"
                        className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => deleteMenu(elem._id)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <Link
                        to={`/${elem._id}`}
                        type="button"
                        className="text-sm bg-indigo-500 hover:bg-indigo-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Detail
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Admin;
