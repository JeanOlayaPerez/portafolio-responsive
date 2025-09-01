import { User, Mail, MapPin } from "lucide-react";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-white dark:bg-gray-900">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">Sobre mí</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <User className="w-6 h-6 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">Jean Olaya Pérez</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">jeanolayaperez@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">Colombia</span>
          </div>
        </div>
        <p className="mt-6 text-gray-600 dark:text-gray-400 text-center">
          Soy desarrollador web enfocado en crear experiencias digitales modernas, accesibles y responsivas. Me apasiona el diseño mobile-first y la optimización para dispositivos móviles.
        </p>
      </div>
    </section>
  );
};

export default About;
import { User, Mail, MapPin } from "lucide-react";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-white dark:bg-gray-900">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">Sobre mí</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <User className="w-6 h-6 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">Jean Olaya Pérez</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">jeanolayaperez@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">Colombia</span>
          </div>
        </div>
        <p className="mt-6 text-gray-600 dark:text-gray-400 text-center">
          Soy desarrollador web enfocado en crear experiencias digitales modernas, accesibles y responsivas. Me apasiona el diseño mobile-first y la optimización para dispositivos móviles.
        </p>
      </div>
    </section>
  );
};

