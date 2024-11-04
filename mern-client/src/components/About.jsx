import React from "react";
import about from "../assets/about2.jpg";
const About = () => {
  return (
    <>
      <div className="px-4 pb-8 lg:px-24 bg-gray-100 pt-24">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg pb-24 lg:p-12">
          {/* Heading Section */}
          <div className="mb-8 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-[#2e4fc7]">
              Welcome to Books.com
            </h3>
          </div>

          {/* Image and Text Section */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={about}
                alt="About Us"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h4 className="text-3xl font-semibold text-[#1e3998] mb-8 flex justify-center ">
                Our Goals Are...
              </h4>
              <ul className=" space-y-3 text-[#0a1643] text-center">
                <li className="font-medium text-lg ">
                  Enhance reader engagement with interactive content.
                </li>{" "}
                <li className="font-medium text-lg ">
                  Provide personalized book recommendations.
                </li>{" "}
                <li className="font-medium text-lg ">
                  Foster a community of book lovers.{" "}
                </li>{" "}
                <li className="font-medium text-lg ">
                  Offer exclusive deals and promotions for loyal readers.{" "}
                </li>{" "}
                <li className="font-medium text-lg ">
                  Share insightful book reviews and author interviews.{" "}
                </li>{" "}
                <li className="font-medium text-lg ">
                  Host virtual book clubs and reading events.{" "}
                </li>{" "}
                <li className="font-medium text-lg ">
                  Create a seamless and enjoyable browsing experience.{" "}
                </li>{" "}
                <li className="font-medium text-lg ">
                  Keep readers informed with a regular newsletter.{" "}
                </li>{" "}
                <li className="font-medium text-lg ">
                  Encourage reader feedback and reviews.{" "}
                </li>{" "}
                <li className="font-medium text-lg ">
                  Promote diverse and inclusive literature.{" "}
                </li>{" "}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 lg:px-24 bg-gray-100">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 lg:p-12 space-y-12  pb-12 mb-4">
          {/* Welcome Section */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1643] mb-4">
              {/* Welcome to Books.comm  */}
            </h2>
            <p className="text-gray-600">
              {/* span is used for creating a Drop Cap */}
              <span className="text-5xl float-left mr-2 leading-3 align-top text-[#0a1643]">
                A
              </span>
              t Books.com, we believe that every book has the power to transform
              lives. Our mission is to connect readers with the stories that
              inspire, educate, and entertain. Whether you're a lifelong
              bibliophile or just discovering the joy of reading, we have
              something special for you.
            </p>
          </div>

          {/* Our Story Section */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1643] mb-4">
              Our Story
            </h2>
            <p className="text-gray-600">
              Founded with a passion for literature and a commitment to
              excellence, Books.com has grown from a small local shop to a
              thriving online bookstore. Our journey began with a simple idea:
              to make books accessible to everyone, everywhere. Today, we are
              proud to offer a vast selection of titles across all genres, from
              timeless classics to the latest bestsellers.
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1643] mb-4">
              Why Choose Us?
            </h2>
            <ul className="list-none space-y-4">
              <li>
                <p className="text-gray-600">
                  <span className="font-semibold text-[#0a1643]">
                    Curated Selection:
                  </span>{" "}
                  Our team of book enthusiasts carefully curates each collection
                  to ensure you find only the best reads.
                </p>
              </li>
              <li>
                <p className="text-gray-600">
                  <span className="font-semibold text-[#0a1643]">
                    Personalized Recommendations:
                  </span>{" "}
                  Not sure what to read next? Our personalized recommendation
                  system helps you discover books tailored to your tastes.
                </p>
              </li>
              <li>
                <p className="text-gray-600">
                  <span className="font-semibold text-[#0a1643]">
                    Community Focused:
                  </span>{" "}
                  Join our vibrant community of readers and participate in book
                  clubs, author events, and more.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1643] mb-4">
              Our Commitment
            </h2>
            <p className="text-gray-600">
              At Books.co, we are dedicated to providing an exceptional shopping
              experience. From our user-friendly website to our fast and
              reliable shipping, we strive to exceed your expectations. Our
              customer support team is always here to help with any questions or
              concerns you may have.
            </p>
          </div>

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1643] mb-4">
              Join Us on Our Journey
            </h2>
            <p className="text-gray-600">
              We invite you to explore our extensive catalog and find your next
              great read. Follow us on social media and subscribe to our
              newsletter for the latest updates, exclusive offers, and literary
              news. Thank you for choosing Books.co as your trusted source for
              books.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
