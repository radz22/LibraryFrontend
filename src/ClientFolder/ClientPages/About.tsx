import React from "react";
import SideBar from "../Components/SideBar";

const About = () => {
  return (
    <div className="w-full  flex gap-5">
      <div className="w-1/4	 bg-[#343a40] h-auto">
        <SideBar />
      </div>

      <div className="w-3/4 px-4 py-5 mt-10">
        <div className="grid grid-cols-2	gap-10 place-items-center">
          <div>
            <img
              src="https://www.jackson.k12.ms.us/cms/lib/MS01910533/Centricity/Domain/1068/Image.jpeg"
              className="w-full h-96		rounded-lg	"
            />
          </div>
          <div>
            <div>
              <p className="text-lg	 tracking-wide 	">
                A library is a collection of books, and possibly other materials
                and media, that is accessible for use by its members and members
                of allied institutions. Libraries provide physical (hard copies)
                or digital (soft copies) materials, and may be a physical
                location, a virtual space, or both. A library's collection
                normally includes printed materials which may be borrowed, and
                usually also includes a reference section of publications which
                may only be utilized inside the premises. Resources such as
                commercial releases of films, television programmes, other video
                recordings, radio, music and audio recordings may be available
                in many formats. These include DVDs, Blu-rays, CDs, cassettes,
                or other applicable formats such as microform. They may also
                provide access to information, music or other content held on
                bibliographic databases.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 w-full">
          <h1 className="text-3xl font-semibold text-[#334455]	">
            School Library Vision and Mission
          </h1>
        </div>

        <div className="mt-32 flex items-center justify-center">
          <div className="w-6/12	flex items-center justify-center">
            <h1 className="text-3xl font-semibold text-[#334455]	">Vision</h1>
          </div>

          <div className="w-6/12	flex items-center justify-center">
            <h1 className="text-3xl font-semibold text-[#334455]	">Mission </h1>
          </div>
        </div>

        <div className="mt-10 flex">
          <div className="w-6/12">
            <p className="text-xl text-[#333]">
              Boyd elementary school library will be the chief academic
              respondent to literacy, research, and writing.
            </p>
          </div>

          <div className="w-6/12	flex items-center justify-center">
            <p className="text-xl text-[#333]">
              The mission of the school library media center is to assist in
              providing a quality education for every child and to encourage
              lifelong literacy and learning through reading. Library media
              centers provide an environment in which students and staff learn
              to access, evaluate and apply information using a variety of print
              and electronic formats. The library media center supports the
              school’s curriculum and assists members of the learning community
              in becoming effective users of information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
