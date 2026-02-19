import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
  once: true,
  easing: "ease-out",
});

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log("УСПЕШНО!", result.text);
          alert("Сообщение отправлено!");
          e.target.reset();
        },
        (error) => {
          console.log("ОШИБКА!", error.text || error);
          alert("Ошибка: " + (error.text || "смотри консоль"));
        },
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-lg"
      >
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-gray-900/70 backdrop-blur-xl border border-red-900/30 rounded-3xl shadow-2xl shadow-red-950/40 p-10 md:p-12"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
          >
            Начнём работу прямо сейчас
          </motion.h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-7">
            <motion.div
              whileFocus="focus"
              variants={{
                focus: { scale: 1.02 },
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <input
                type="text"
                name="user_name"
                placeholder="Твоё имя"
                required
                className="w-full px-6 py-5 bg-gray-800/60 border border-gray-700/80 rounded-xl text-white text-lg placeholder-gray-400 focus:outline-none focus:border-red-600/70 focus:ring-2 focus:ring-red-600/30 transition-all duration-300"
              />
            </motion.div>

            <motion.div
              whileFocus="focus"
              variants={{
                focus: { scale: 1.02 },
              }}
            ></motion.div>

            <motion.div
              whileFocus="focus"
              variants={{
                focus: { scale: 1.02 },
              }}
            >
              <textarea
                name="message"
                placeholder="Сообщение"
                rows={6}
                required
                className="w-full px-6 py-5 bg-gray-800/60 border border-gray-700/80 rounded-xl text-white text-lg placeholder-gray-400 focus:outline-none focus:border-red-600/70 focus:ring-2 focus:ring-red-600/30 transition-all duration-300 resize-none"
              />
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 30px rgba(239, 68, 68, 0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xl font-semibold rounded-xl shadow-lg shadow-red-900/50 transition-all duration-300"
            >
              Отправить
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
