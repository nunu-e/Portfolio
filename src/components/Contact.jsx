import emailjs from "emailjs-com";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FiSend } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { toast } from "react-toastify";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success("Email sent successfully!");
          e.target.reset();
        },
        () => {
          toast.error("Failed to send message.");
        },
      );
  };
  return (
    <div id="contact" className="bg-[#fef7f9] pt-25 pb-25">
      <div data-aos="fade-up" data-aos-offset="40">
        <h1 className="text-center text-[#51253be4] font-bold text-4xl mb-6 ">
          Get In Touch
        </h1>
        <div className="w-20 h-1 bg-[#f472b6] mx-auto mb-10 rounded-2xl"></div>
      </div>
      <div className="text-[#9a597b] mb-7 text-center">
        Have a project in mind? Let's work together
      </div>
      <div className="m-12">
        <h1 className=" text-[#51253be4] font-bold text-4xl mb-4">
          Let's connect
        </h1>

        <div className="text-[#9a597b] ">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or want to talk about projects, feel free
          to reach out!
        </div>
      </div>
      <div className="m-12">
        <div className="flex items-center gap-5 mb-5">
          <div className="text-[#f472b6] inline-block bg-[#fceaef] p-1 rounded-md ">
            <CiMail className="text-3xl" />
          </div>
          <div>
            <h1 className=" text-[#51253be4]  text-lg mb-1">Email</h1>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=elbethelambachew2@gmail.com"
              target="_blank"
              className="font-bold"
            >
              elbethelambachew2@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-5 mb-5">
          <div className="text-[#f472b6] inline-block bg-[#fceaef] p-1 rounded-md ">
            <BsTelephone className="text-3xl" />
          </div>
          <div>
            <h1 className=" text-[#51253be4]  text-lg mb-1">Phone number</h1>
            <a href="tel:+251965075087" target="_blank" className="font-bold">
              +251965075087
            </a>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="text-[#f472b6] inline-block bg-[#fceaef] p-1 rounded-md ">
            <SlLocationPin className="text-3xl" />
          </div>
          <div>
            <h1 className=" text-[#51253be4]  text-lg mb-1">Location</h1>
            <div className="font-bold">Addis Ababa, Ethiopia</div>
          </div>
        </div>
      </div>
      <form
        onSubmit={sendEmail}
        className="bg-white rounded-3xl m-12 flex flex-col p-12 gap-5 shadow-sm"
      >
        <label htmlFor="name" className="font-bold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          className="bg-[#fef7f9] p-3 rounded-3xl border border-[#fde2eafd]"
          required
        ></input>
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Yourname@example.com"
          className="bg-[#fef7f9] p-3 rounded-3xl border border-[#fde2eafd]"
          required
        ></input>
        <label htmlFor="message" className="font-bold">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Write your message here..."
          name="message"
          className="bg-[#fef7f9] p-3 rounded-3xl h-32 border border-[#fde2eafd]"
          required
        ></textarea>
        <button
          type="submit"
          className=" flex justify-center items-center gap-3 p-3 rounded-4xl bg-[#f472b6]  text-white font-semibold mt-3 transition-all duration-500 hover:scale-105"
        >
          <FiSend /> Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
