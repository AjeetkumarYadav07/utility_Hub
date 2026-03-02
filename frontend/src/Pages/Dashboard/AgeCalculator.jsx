import React, { useState } from "react";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [ageData, setAgeData] = useState(null);

  const calculateAge = () => {
    if (!birthDate) return alert("Please select your birth date");

    const today = new Date();
    const dob = new Date(birthDate);

    if (dob > today) return alert("Birth date cannot be in the future");

    // Years, Months, Days
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // Total calculations
    const diffMs = today - dob;
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const totalMonths = years * 12 + months;
    const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
    const totalMinutes = Math.floor(diffMs / (1000 * 60));

    // Next birthday
    const nextBirthday = new Date(
      today.getFullYear(),
      dob.getMonth(),
      dob.getDate()
    );

    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const daysUntilBirthday = Math.ceil(
      (nextBirthday - today) / (1000 * 60 * 60 * 24)
    );

    setAgeData({
      years,
      months,
      days,
      totalMonths,
      totalDays,
      totalHours,
      totalMinutes,
      daysUntilBirthday,
    });
  };

  const reset = () => {
    setBirthDate("");
    setAgeData(null);
  };

  return (
    <section className="min-h-screen flex items-center justify-center   p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8 space-y-6">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Age Calculator
          </h1>
          <p className="text-gray-500 text-sm">
            Calculate your exact age instantly
          </p>
        </div>

        {/* Input */}
        <div className="flex flex-col gap-4">
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div className="flex gap-4">
            <button
              onClick={calculateAge}
              className="flex-1 bg-purple-500 cursor-pointer hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Calculate
            </button>

            <button
              onClick={reset}
              className="flex-1 bg-gray-200 cursor-pointer hover:bg-gray-300 text-gray-700 py-3 rounded-xl font-semibold transition"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Results */}
        {ageData && (
          <div className="bg-purple-50 rounded-xl p-6 space-y-3 text-gray-700 text-sm sm:text-base">
            <p>
              🎂 Your age is{" "}
              <span className="font-semibold text-purple-700">
                {ageData.years} years {ageData.months} months {ageData.days} days
              </span>
            </p>

            <p>
              📅 In months:{" "}
              <span className="font-semibold">{ageData.totalMonths}</span>
            </p>

            <p>
              📆 In days:{" "}
              <span className="font-semibold">{ageData.totalDays}</span>
            </p>

            <p>
              ⏰ In hours:{" "}
              <span className="font-semibold">{ageData.totalHours}</span>
            </p>

            <p>
              🕒 In minutes:{" "}
              <span className="font-semibold">{ageData.totalMinutes}</span>
            </p>

            <p className="pt-3 border-t">
              🎉 Your next birthday is in{" "}
              <span className="font-semibold text-purple-700">
                {ageData.daysUntilBirthday} days
              </span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AgeCalculator;