import React from "react";
import kevinResume from "../../Assets/Kevin_Reid_Resume_Development.pdf";

const Resume_PDF = () => {
  return (
    <section
      id="Resume"
      className="mx-auto mt-10 max-w-12xl px-4 sm:mt-12 sm:px-6 md:mt-12 lg:mt-14 lg:px-8 xl:mt-14"
    >
      <object
        className="resumePDF"
        width="100%"
        height="1000"
        data={kevinResume}
        type="application/pdf"
        aria-label="resume"
        // scrollbar="1|0"
        // view="Fit"
      />
    </section>
  );
};

export default Resume_PDF;
