import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Github,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ExternalLink,
  BookOpen,
  Code,
  Briefcase,
  GraduationCap,
  Heart
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const menuItems = {
    accueil: 'Accueil',
    apropos: 'À propos',
    experience: 'Expérience',
    projets: 'Projets',
    formation: 'Formation',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                YT
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(menuItems).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === key ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {Object.entries(menuItems).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section id="accueil" className="min-h-screen flex items-center justify-center pt-16">
          <div className="text-center">
            <div className="relative inline-block">
              <img
                src="https://raw.githubusercontent.com/Yacinetetah/PNG/main/IMG_20250318_125218.jpg"
                alt="Yacine Tetah"
                className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-blue-500/50 shadow-xl shadow-blue-500/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 animate-pulse"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Yacine Tetah
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-300 mb-6">Développeur Full-Stack</h2>
            <p className="max-w-2xl mx-auto text-gray-400 mb-8">
              À la recherche d'une alternance de deux ans dans le cadre d'un Master en Informatique
              débutant en septembre 2025. Disponible pour un rythme de 2 semaines université / 2 semaines entreprise.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/Yacinetetah"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github className="mr-2" size={20} />
                GitHub
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Mail className="mr-2" size={20} />
                Me Contacter
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="apropos" className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">À Propos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Téléphone</h3>
                  <p className="text-gray-400">+33 7 74 80 61 32</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-gray-400">yacinetetah@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Localisation</h3>
                  <p className="text-gray-400">Paris, France</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Github className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">GitHub</h3>
                  <a
                    href="https://github.com/Yacinetetah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    github.com/Yacinetetah
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Compétences Techniques</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Back-End</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Java/JEE', 'Spring Boot', 'Node.js/Express'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Bases de données</h4>
                  <div className="flex flex-wrap gap-2">
                    {['PostgreSQL', 'MySQL'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Front-End</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Angular', 'HTML/CSS', 'JavaScript'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">DevOps</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Docker', 'Jenkins', 'GitLab CI/CD'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Expérience</h2>
          <div className="space-y-12">
            <div className="relative pl-8 border-l-2 border-gray-700">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
              <div className="mb-1 flex items-center">
                <h3 className="text-xl font-semibold">ImmoTech</h3>
                <span className="mx-2">•</span>
                <span className="text-gray-400">Stage Développeur Full-Stack</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">Mai 2023 – Sept 2023</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mr-2" />
                  Développement de fonctionnalités backend avec Java (Spring Boot, Spring Security, Flyway)
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mr-2" />
                  Conception d'une interface d'administration dynamique avec Angular
                </li>
              </ul>
            </div>

            <div className="relative pl-8 border-l-2 border-gray-700">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
              <div className="mb-1 flex items-center">
                <h3 className="text-xl font-semibold">UbyMedia</h3>
                <span className="mx-2">•</span>
                <span className="text-gray-400">Stage Développeur Web</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">Mai 2022 – Sept 2022</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mr-2" />
                  Refonte des interfaces utilisateur avec Symfony/Twig
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mr-2" />
                  Ajout d'interactions dynamiques avec JavaScript (AJAX, événements DOM)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projets" className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-colors">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-blue-400 mr-2" />
                <h3 className="text-xl font-semibold">Application Hybride Collaborative</h3>
              </div>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mr-2" />
                  Développement de microservices REST avec Java/JEE
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mr-2" />
                  Implémentation de notifications en temps réel avec Node.js
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-colors">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-blue-400 mr-2" />
                <h3 className="text-xl font-semibold">Système de Réservation</h3>
              </div>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mr-2" />
                  Développé avec Spring Boot et Angular
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mr-2" />
                  Intégration de tests automatisés (JUnit, Cypress)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="formation" className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Formation</h2>
          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-gray-700">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
              <div className="mb-1">
                <h3 className="text-xl font-semibold">Master MIAGE</h3>
                <p className="text-gray-400">Université Paris-Saclay</p>
                <p className="text-sm text-gray-400">2025–2027</p>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-gray-700">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
              <div className="mb-1">
                <h3 className="text-xl font-semibold">Licence MIAGE</h3>
                <p className="text-gray-400">Université Paris-Saclay</p>
                <p className="text-sm text-gray-400">2024–2025</p>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-gray-700">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
              <div className="mb-1">
                <h3 className="text-xl font-semibold">Baccalauréat Scientifique mention Bien</h3>
                <p className="text-sm text-gray-400">2021</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Centres d'intérêt</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm text-center">
              <Github className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Contributions open-source</h3>
              <p className="text-gray-400">Java/JS</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm text-center">
              <BookOpen className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Veille technologique</h3>
              <p className="text-gray-400">Microservices</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm text-center">
              <Heart className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Sport</h3>
              <p className="text-gray-400">Volleyball en championnat régional</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Me Contacter</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Votre message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2024 Yacine Tetah. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;