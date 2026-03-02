import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import axios from "axios";

const RandomUserGenerator = () => {
  const [count, setCount] = useState(10);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  //const clear data 
  const clearData = () =>{
    window.location.reload();
  }
  const usersPerPage = 10;

  // Fetch users
  const fetchUsers = async () => {
    if (count < 1 || count > 100) return alert("Please enter 1-100 users");
    setLoading(true);
    try {
      const res = await axios.get(`https://dummyjson.com/users?limit=${count}`);
      setUsers(res.data.users);
      setCurrentPage(1); // reset page after new fetch
    } catch (error) {
      console.error(error);
      alert("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  // Pagination Logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Export JSON
  const exportJSON = () => {
    if (users.length === 0) return;
    const blob = new Blob([JSON.stringify(users, null, 2)], {
      type: "application/json",
    });
    saveAs(blob, "users.json");
  };

  // Export CSV
  const exportCSV = () => {
    if (users.length === 0) return;
    const header = ["No", "Name", "Email", "Phone", "City"];
    const rows = users.map((u, index) => [
      index + 1,
      `${u.firstName} ${u.lastName}`,
      u.email,
      u.phone,
      u.address.city,
    ]);

    const csvContent = [header, ...rows].map((e) => e.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "users.csv");
  };

  return (
    <section className="mt-5 flex flex-col items-center justify-start p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Generate Random Users and Export
        </h1>

        {/* Input */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            min={1}
            max={100}
            className="border rounded-xl px-4 py-2 w-full sm:w-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={fetchUsers}
            className="px-6 py-2 bg-purple-500 cursor-pointer text-white rounded-md font-semibold hover:bg-purple-600 transition"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate"}
          </button>
          <button 
          className="px-6 py-2 bg-purple-200 hover:bg-purple-500 cursor-pointer text-white rounded-md"
           onClick={clearData} >
            Clear </button>

                  </div>

        {/* Export Buttons */}
        {users.length > 0 && (
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={exportJSON}
              className="px-4 py-2 bg-green-500 cursor-pointer text-white rounded-md hover:bg-green-600 transition"
            >
              Export JSON
            </button>
            <button
              onClick={exportCSV}
              className="px-4 py-2 bg-blue-500 cursor-pointer text-white rounded-md hover:bg-blue-600 transition"
            >
              Export CSV
            </button>
          </div>
        )}

        {/* Table */}
        {users.length > 0 && (
          <>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-purple-100">
                    <th className="border px-4 py-2">No.</th>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Email</th>
                    <th className="border px-4 py-2">Phone</th>
                    <th className="border px-4 py-2">City</th>
                  </tr>
                </thead>
                <tbody>
                  {currentUsers.map((u, index) => (
                    <tr key={u.id} className="hover:bg-purple-50">
                      <td className="border px-4 py-2 text-center">
                        {indexOfFirstUser + index + 1}
                      </td>
                      <td className="border px-4 py-2">
                        {u.firstName} {u.lastName}
                      </td>
                      <td className="border px-4 py-2">{u.email}</td>
                      <td className="border px-4 py-2">{u.phone}</td>
                      <td className="border px-4 py-2">{u.address.city}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-4 mt-4">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
              >
                Previous
              </button>

              <span className="font-semibold">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 cursor-pointer bg-purple-500 text-white rounded-md disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default RandomUserGenerator;