import React from "react";

const DefaultPage = () => {
  const tools = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="#b054e7" d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m7 1.5V9h5.5z"/>
        </svg>
      ),
      text: "PDF ➡️ Word",
    },
    {
      icon: (
       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
        <path fill="#b054e7" d="M200 156c0 6.5-7.33 12-16 12s-16-5.5-16-12s7.33-12 16-12s16 5.5 16 12m32-100v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-88.63 116.88l-44-104a8 8 0 0 0-14.74 0l-44 104a8 8 0 0 0 14.74 6.24L66.84 152h50.32l11.47 27.12a8 8 0 0 0 14.74-6.24M216 124c0-15.44-14.36-28-32-28a34.86 34.86 0 0 0-20.78 6.68a8 8 0 0 0 9.56 12.83A18.84 18.84 0 0 1 184 112c8.56 0 15.8 5.36 16 11.76v8a35.24 35.24 0 0 0-16-3.76c-17.64 0-32 12.56-32 28s14.36 28 32 28a35.1 35.1 0 0 0 16.93-4.26A8 8 0 0 0 216 176ZM73.61 136h36.78L92 92.53Z"/></svg>
      ),
      text: "Text Case Converter",
    },
    {
      icon: (
       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#b054e7" d="M10 14h12v4H10z"/>
       <path fill="#b054e7" d="M12 22H9.562A5.57 5.57 0 0 1 4 16.438v-.876A5.57 5.57 0 0 1 9.562 10H12V6H9.562A9.56 9.56 0 0 0 0 15.562v.876A9.56 9.56 0 0 0 9.562 26H12ZM22.438 6H20v4h2.438A5.57 5.57 0 0 1 28 15.562v.876A5.57 5.57 0 0 1 22.438 22H20v4h2.438A9.56 9.56 0 0 0 32 16.438v-.876A9.56 9.56 0 0 0 22.438 6"/></svg>
      ),
      text: "URL Shortener",
    },
    {
      icon: (
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="none" stroke="#b054e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12.999v-2.343c0-.818 0-1.226-.152-1.594c-.152-.367-.441-.656-1.02-1.235l-4.736-4.736c-.499-.499-.748-.748-1.058-.896a2 2 0 0 0-.197-.082c-.323-.114-.676-.114-1.381-.114c-3.245 0-4.868 0-5.967.886a4 4 0 0 0-.603.603C4 4.588 4 6.21 4 9.455v3.544m9-10.5v.5c0 2.828 0 4.243.879 5.121C14.757 9 16.172 9 19 9h.5m-3 8.001a1 1 0 0 1 1-1H19a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1m-1 0h1m-15 3v-6l2 3l2-3v6m2.5 0v-2.5m0 0v-3.5h1.75a1.75 1.75 0 1 1 0 3.5zm8.5-.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1"/></svg>
      ),
      text: "MP4 ➡️ MP3",
    },
  ];

  return (
    <section className="w-full px-4 py-6">
      <div className="max-w-[900px] mx-auto">
        
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Most Used Tools
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:scale-105 transition duration-200 cursor-pointer"
            >
              <div className="mb-4">{tool.icon}</div>
              <h2 className="font-semibold text-lg">{tool.text}</h2>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DefaultPage;