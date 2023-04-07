import { React, useState } from "react";
import AboutUsTSAFrameworks from "./AboutUsTSAFrameworks";

import { Document, Page } from "react-pdf/dist/esm/entry.vite";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import tsaPDF from "../WebDesign.pdf";

import useWindowDimensions from "./viewport";

const AboutUsTSA = () => {
  const { width, height } = useWindowDimensions();
  const pageWidth = width < 1024 ? 320 : 1024;

  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="hero h-fit bg-gradient-to-b from-purple-800 to-fuchsia-800 px-2">
      <div className="hero-content">
        <div className="lg:max-w-5xl max-w-xs">
          <h1 className="md:text-7xl text-xl font-bold mt-8">About Us - TSA</h1>
          <div className="md:gap-10 md:items-start md:mt-10">
            {/* <div className="py-5">
              <h1 className="font-bold md:text-4xl text-lg">Works Cited</h1>
              <div className="md:text-2xl text-sm py-2 leading-loose break-words">
                <AboutUsTSAWorksCited />
              </div>
            </div> */}
            <div className="py-5">
              <h1 className="font-bold md:text-4xl text-lg">
                Research Document and Works Cited
              </h1>
              <Document file={tsaPDF} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(new Array(numPages), (page, i) => (
                  <Page
                    pageNumber={i + 1}
                    key={`page_${i + 1}`}
                    width={pageWidth}
                    className="py-1"
                  />
                ))}
              </Document>
            </div>
            <div className="py-5">
              <h1 className="font-bold md:text-4xl text-lg">Media Citations</h1>
              <div className="md:text-2xl text-md py-2 leading-loose">
                <p className="my-5">
                  All pictures and icons used in this website are copyright free
                  and/or under public domain. Icons were provided by Heroicons.
                </p>
                <p className="my-5">
                  "Heroicons." Heroicons, www.heroicons.com/
                </p>
              </div>
            </div>
            <div className="py-5">
              <h1 className="font-bold md:text-4xl text-lg">Frameworks</h1>
              <div className="md:text-2xl text-md py-2 leading-loose">
                <AboutUsTSAFrameworks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsTSA;
