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
    <section id="contact" className="bg-surface px-6 py-20 sm:px-10 lg:px-16">
      <div data-aos="fade-up" data-aos-offset="60">
        <h1 className="text-center text-primary font-bold text-4xl mb-6 ">
          Get In Touch
        </h1>
        <div className="w-20 h-1 bg-accent mx-auto mb-10 rounded-2xl"></div>
      </div>
      <div className="text-secondary mb-7 text-center">
        Have a project in mind? Let's work together
      </div>
      <div className="mx-auto mb-10 max-w-5xl">
        <h1 className=" text-primary font-bold text-4xl mb-4">
          Let's connect
        </h1>

        <div className="text-secondary ">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or want to talk about projects, feel free
          to reach out!
        </div>
      </div>
      <div className="mx-auto mb-10 max-w-5xl">
        <div className="flex items-center gap-5 mb-5">
          <div className="text-accent inline-block bg-surface p-1 rounded-md ">
            <CiMail className="text-3xl" />
          </div>
          <div>
            <h1 className=" text-primary  text-lg mb-1">Email</h1>
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
          <div className="text-accent inline-block bg-surface p-1 rounded-md ">
            <BsTelephone className="text-3xl" />
          </div>
          <div>
            <h1 className=" text-primary  text-lg mb-1">Phone number</h1>
            <a href="tel:+251965075087" target="_blank" className="font-bold">
              +251965075087
            </a>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="text-accent inline-block bg-surface p-1 rounded-md ">
            <SlLocationPin className="text-3xl" />
          </div>
          <div>
            <h1 className=" text-primary  text-lg mb-1">Location</h1>
            <div className="font-bold">Addis Ababa, Ethiopia</div>
          </div>
        </div>
      </div>
      <form
        onSubmit={sendEmail}
        className="mx-auto flex max-w-5xl flex-col gap-5 rounded-3xl bg-card p-6 shadow-sm sm:p-10"
      >
        <label htmlFor="name" className="font-bold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          className="rounded-2xl border border-border bg-page p-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
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
          className="rounded-2xl border border-border bg-page p-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
          required
        ></input>
        <label htmlFor="message" className="font-bold">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Write your message here..."
          name="message"
          className="h-32 rounded-2xl border border-border bg-page p-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
          required
        ></textarea>
        <button
          type="submit"
          className="mt-3 flex items-center justify-center gap-3 rounded-full bg-accent p-3 font-semibold text-ink transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-accent-strong active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-strong"
        >
          <FiSend /> Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
