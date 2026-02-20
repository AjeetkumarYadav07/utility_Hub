// import React from "react";

// const ConverterLayout = ({
//   title,
//   description,
//   buttonText,
//   acceptType,
// }) => {
//   return (
//     <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
//       <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6 md:p-10">
        
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="font-lato text-2xl md:text-4xl font-bold mb-3">
//             {title}
//           </h1>
//           <p className="font-inter text-gray-600 text-sm md:text-lg">
//             {description}
//           </p>
//         </div>

//         {/* Upload Box */}
//         <div className="border-2 border-dashed border-purple-300 rounded-xl p-8 text-center hover:border-purple-400 transition mb-6">
//           <div className="flex flex-col items-center gap-4">
//             <div className="text-5xl text-purple-400">+</div>

//             <p className="text-gray-500">
//               Drag & Drop your file here
//             </p>

//             <input
//               type="file"
//               accept={acceptType}
//               className="mt-2"
//             />
//           </div>
//         </div>

//         {/* Convert Button */}
//         <div className="text-center">
//           <button className="px-8 py-3 bg-purple-400 text-white rounded-lg font-semibold hover:bg-purple-500 transition">
//             {buttonText}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConverterLayout;
import React from "react";

const ConverterLayout = ({
  title,
  description,
  buttonText,
  acceptType,
  onFileChange,
  onConvert,
  loading,
  selectedFile,
}) => {
  return (
    <section className=" mt-6 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6 md:p-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-lato text-xl md:text-4xl font-bold mb-3">
            {title}
          </h1>
          <p className="font-inter text-gray-600 text-sm md:text-lg">
            {description}
          </p>
        </div>

        {/* Upload Box */}
        <div className="border-2 border-dashed border-purple-300 rounded-xl p-8 text-center hover:border-purple-400 transition mb-6">
          <div className="flex flex-col items-center gap-4">
            <div className="text-5xl text-purple-400">+</div>

            <p className="text-gray-500">
              Drag & Drop your file here
            </p>

            <input
              type="file"
              accept={acceptType}
              onChange={onFileChange}
              className="mt-2"
            />

            {selectedFile && (
              <p className="text-sm text-green-600">
                Selected: {selectedFile.name}
              </p>
            )}
          </div>
        </div>

        {/* Convert Button */}
        <div className="text-center">
          <button
            onClick={onConvert}
            disabled={loading}
            className="px-8 py-3 bg-purple-400 text-white rounded-lg font-semibold hover:bg-purple-500 transition disabled:opacity-50"
          >
            {loading ? "Converting..." : buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConverterLayout;
