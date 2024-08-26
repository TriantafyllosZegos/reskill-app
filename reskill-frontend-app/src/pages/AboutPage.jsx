import React from "react";

function AboutPage() {
  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full text-center">
          <h1 className="text-4xl font-semibold text-gray-800 mb-6">
            About Me
          </h1>
          <p className="text-justify text-gray-700 text-lg leading-relaxed mb-6">
            Hello! I'm <a>Zegos Triantafyllos</a>, a passionate Computer
            Engineer. I have been working in the field for a year now.
          </p>
          <p className="text-justify text-gray-700 text-lg leading-relaxed mb-6">
            In my free time, I enjoy <a>traveling</a>, playing <a>music</a> and{" "}
            <a>reading</a> books, which help me stay creative and inspired. I'm
            always <a>eager to learn</a> new things and take on exciting
            projects. Let's connect and create something amazing together!
          </p>
          <p className="text-justify text-gray-700 text-lg leading-relaxed ">
            Feel free to explore my work, and don't hesitate to{" "}
            <a href="/contact">reach out</a> if you'd like to collaborate.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
