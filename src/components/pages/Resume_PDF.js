import React from "react";
import kevinResume from "../../Assets/Kevin_Reid_Resume_Development.pdf";

const Resume_PDF = () => {
  return (
    <section
      id="Resume"
      className=" resumeContainer mx-auto max-w-12xl px-4"
    >
               <h1 className="text-center text-4xl mb-2 font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          {/* <span className="xl:inline pr-0">Welcome to my </span> */}
          <span className="resumeHeader text-indigo-600 xl:inline">Have a look at my Resume</span>
        </h1>
      <object
        className="resumePDF"
        width="100%"
        height="1000"
        data={kevinResume}
        type="application/pdf"
        aria-label="resume"
        // scrollbar="1|0"
        view="Fit"
      />
    </section>
  );
};

export default Resume_PDF;
