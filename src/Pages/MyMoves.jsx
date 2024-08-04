import "../CustomCSS/Accordion.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
const moment = require("moment");

const MyMoves = () => {
  const [selected, setSelected] = useState(null);
  const [selected2, setSelected2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  const toggle2 = (index) => {
    if (selected2 === index) {
      return setSelected2(null);
    }
    setSelected2(index);
  };

  const getAllData = async () => {
    setLoading(true);
    const response = await axios.get("http://test.api.boxigo.in/sample-data/ ");
    console.log(response.data.Customer_Estimate_Flow);
    if (response.data.Customer_Estimate_Flow) {
      setPosts(response.data.Customer_Estimate_Flow);
    } else {
      setPosts([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      {/* <div>
        {data.map((item, index) => (
          <div className="item">
            <div className="title" onClick={() => toggle(index)}>
              <h2>{item.question}</h2>
              <span>{selected === index ? "-" : "+"}</span>
            </div>
            <div className={selected === index ? "content show " : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div> */}

      <div>
        {posts.map((item, index) => (
          <div className="item">
            <div className="">
              <div className="p-4 bg-card rounded-lg shadow-md bg-white">
                <div className="flex justify-between items-center">
                  <div className="w-[40%]">
                    <h2 className="text-lg font-semibold">From</h2>
                    <p className="text-muted-foreground ">{item.moving_from}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl">➡️</span>
                  </div>
                  <div className="w-[40%]">
                    <h2 className="text-lg font-semibold">To</h2>
                    <p className="text-muted-foreground">{item.moving_to}</p>
                  </div>
                  {/* <div>
                    <h2 className="text-lg font-semibold">Request#</h2>
                    <p className="font-bold text-orange-500">
                      E21418
                    </p>
                  </div> */}
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">🏠</span>
                    <span className="font-semibold">{item.property_size}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl mr-2">📦</span>
                    <span className="font-semibold">{item.total_items}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl mr-2">📍</span>
                    <span className="font-semibold">{item.distance}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl mr-2">🗓️</span>
                    <span className="font-semibold">{`${item.order_date.split(" ")[0]
                      } at ${item.order_date.split(" ")[1]}`}</span>
                  </div>
                  <div className="flex items-center">
                    {/* <span className="text-xl mr-2">✔️</span> */}
                    <input
                      type="checkbox"
                      className="h-4 w-4 mr-2 accent-orange-600  bg-grey-700 text-red-500 cursor-pointer"
                    ></input>
                    <span className="font-semibold">Is flexible</span>
                  </div>
                </div>

                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => toggle(index)}
                    className="hover:bg-orange-500 hover:text-white bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded border-2 border-orange-500"
                  >
                    {selected === index
                      ? "View less details"
                      : "View move details"}
                  </button>
                  <button className="bg-primary text-primary-foreground hover:bg-primary/80 p-2 rounded bg-orange-500 text-white">
                    Quotes Awaiting
                  </button>
                </div>

                <div className="mt-4 flex justify-between">
                  <p className="mt-2 text-sm text-destructive-foreground">
                    <strong>Disclaimer:</strong> Please update your move date
                    before two days of shifting
                  </p>
                  <div>
                    <h2 className="text-lg font-semibold">
                      Request# :{" "}
                      <span className="font-bold text-orange-500">
                        {" "}
                        {item.estimate_id}
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={selected === index ? "content show " : "content"}>
              <div>
                <div className="p-4 bg-white dark:bg-background">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-black text-xl font-bold">
                      Inventory Details
                    </h2>
                    <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded mt-2 bg-slate-900 text-white">
                      Edit Inventory
                    </button>
                  </div>

                  <div className="mt-4 text-orange-600">
                    {item.items.inventory.map((ele, index) => (
                      <div>
                        <div
                          onClick={() => toggle2(index)}
                          className="mb-2 cursor-pointer hover:bg-gray-300 bg-card p-4 rounded-md flex justify-between items-center bg-gray-200"
                        >
                          <div className="text-lg  ">
                            {ele.displayName}{" "}
                            <span className="text-primary font-semibold ml-5 placeholder px-1 rounded-full bg-orange-500 text-white">
                              {ele.category.reduce(
                                (accumulator, object) =>
                                  accumulator +
                                  object.items.reduce(
                                    (accumulator, object) =>
                                      accumulator + object.qty,
                                    0
                                  ),
                                0
                              )}
                            </span>
                          </div>

                          <button className="text-muted-foreground hover:text-muted text-black">
                            {selected2 === index ? "▲" : "▼"}
                          </button>
                        </div>

                        <div
                          className={
                            selected2 === index ? "content show " : "content"
                          }
                        >
                          <div className="p-4 bg-card text-card-foreground rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4">
                              {ele.displayName}{" "}
                              <span className="text-muted">
                                {" "}
                                {ele.category.reduce(
                                  (accumulator, object) =>
                                    accumulator +
                                    object.items.reduce(
                                      (accumulator, object) =>
                                        accumulator + object.qty,
                                      0
                                    ),
                                  0
                                )}
                              </span>
                            </h2>
                            <div className="grid grid-cols-3 gap-4">
                              {ele.category.map((i, index) => (
                                <div>

                                  <div  >
                                    <h3 className="font-semibold">
                                      {i.displayName}
                                    </h3>

                                    <ul className="list-disc pl-5">
                                      {i.items.map((j, index) => (
                                        <div>

                                          <li>
                                            {j.displayName} -{" "}
                                            <span className="font-medium">
                                              {j.qty}
                                            </span>{" "}
                                          </li>

                                        </div>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-black text-xl font-bold">
                      House Details
                    </h2>
                    <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded mt-2 bg-slate-900 text-white">
                      Edit house details
                    </button>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-orange-500">
                      Existing House Details
                    </h3>
                    <table className="min-w-full border border-border mt-2">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-border p-2">
                            Floor No.
                          </th>
                          <th className="border border-border p-2">
                            Elevator Available
                          </th>
                          <th className="border border-border p-2">
                            Packing Required
                          </th>
                          <th className="border border-border p-2">
                            Distance from truck to door
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-2">
                            {item.old_floor_no}
                          </td>
                          <td className="border border-border p-2">
                            {item.old_elevator_availability}
                          </td>
                          <td className="border border-border p-2">
                            {item.packing_service}
                          </td>
                          <td className="border border-border p-2">
                            {item.old_parking_distance}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-muted-foreground mt-2">
                      Additional Information
                    </p>
                    <p className="text-muted-foreground">No additional info</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-orange-500">
                      New House Details
                    </h3>
                    <table className="min-w-full border border-border mt-2">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-border p-2">
                            Floor No.
                          </th>
                          <th className="border border-border p-2">
                            Elevator Available
                          </th>
                          <th className="border border-border p-2">
                            Unpacking Required
                          </th>
                          <th className="border border-border p-2">
                            Distance from truck to door
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-2">
                            {item.new_floor_no}
                          </td>
                          <td className="border border-border p-2">
                            {item.new_elevator_availability}
                          </td>
                          <td className="border border-border p-2">
                            {item.unpacking_service}
                          </td>
                          <td className="border border-border p-2">
                            {item.new_parking_distance}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-muted-foreground mt-2">
                      Additional Information
                    </p>
                    <p className="text-muted-foreground">No additional info</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="p-4 bg-card rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">From</h2>
            <p className="text-muted-foreground">
              Ejipura, Bengaluru, Karnataka
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-2xl">➡️</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold">To</h2>
            <p className="text-muted-foreground">
              HSR Layout, Bengaluru, Karnataka
            </p>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <div className="flex items-center">
            <span className="text-xl mr-2">🏠</span>
            <span className="font-semibold">1 BHK</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl mr-2">📦</span>
            <span className="font-semibold">32</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl mr-2">📍</span>
            <span className="font-semibold">4.8 km</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl mr-2">🗓️</span>
            <span className="font-semibold">Sep 26, 2020 at 6:18 pm</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl mr-2">✔️</span>
            <span className="font-semibold">Is flexible</span>
          </div>
        </div>

        <div className="mt-4 flex justify-between">
          <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded">
            View move details
          </button>
          <button className="bg-primary text-primary-foreground hover:bg-primary/80 p-2 rounded">
            Quotes Awaiting
          </button>
        </div>

        <p className="mt-2 text-sm text-destructive-foreground">
          <strong>Disclaimer:</strong> Please update your move date before two
          days of shifting
        </p>
      </div> */}
    </div >
  );
};

export default MyMoves;
