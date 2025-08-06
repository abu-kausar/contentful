// "use client";
// import React, { useState } from "react";

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// function encode(data: any) {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// }

// const NewsletterForm = () => {
//   const [state, setState] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const handleChange = (e: any) => {
//     setState({ [e.target.name]: e.target.value });
//   };

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     const form = e.target;
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({
//         "form-name": form.getAttribute("name"),
//         ...state,
//       }),
//     })
//       .then(() => {
//         setSubmitted(true);
//       })
//       .catch((error) => alert(error));
//   };

//   if (submitted) {
//     return (
//       <div>
//         <p className="font-body text-xl text-white py-4">
//           Thank you for signing up for the Black Joy Newsletter!
//         </p>
//       </div>
//     );
//   }

//   return (
//     <form
//       name="newsletter"
//       method="post"
//       data-netlify="true"
//       data-netlify-honeypot="bot-field"
//       onSubmit={handleSubmit}
//     >
//       {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
//       <input type="hidden" name="form-name" value="contact" />
//       <div hidden>
//         <label>
//           Don’t fill this out:{" "}
//           <input name="bot-field" onChange={handleChange} />
//         </label>
//       </div>
//       <div className="field">
//         <label className="hidden" htmlFor={"email"}>
//           Email
//         </label>
//         <div>
//           <input
//             type="email"
//             placeholder="Enter email here"
//             name="email"
//             id="email"
//             required={true}
//             onChange={handleChange}
//             className="w-full py-2 pl-2 my-12 bg-white text-black focus:outline-none"
//           />
//         </div>
//       </div>
//       <div className="text-center">
//         <button
//           type="submit"
//           className="self-center font-button text-base font-medium uppercase cursor-pointer bg-transparent hover:bg-white hover:text-black mt-2 px-14 py-2 border-2 border-white rounded-full"
//         >
//           Subscribe
//         </button>
//       </div>
//     </form>
//   );
// };

// export default NewsletterForm;

// NewsletterForm.tsx
"use client";
import React, { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 xl:gap-8">
      <input
        type="email"
        placeholder="Enter email here"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-white rounded-full px-2 md:px-4 py-2 md:py-3 w-full md:w-[540px] text-black"
      />
      <button
        type="submit"
        className="w-[162px] bg-[#E5B946] hover:bg-yellow-500 text-black px-3 md:px-6 py-2 md:py-3 rounded-full font-bold uppercase cursor-pointer"
      >
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;
