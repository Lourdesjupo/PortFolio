import { useEffect, useRef, useState } from 'react';
import '../src/styles/main.scss';
import Cards from './components/Card';

function App() {
  const [buttonVisible, setButtonVisible] = useState(true);
  const buttonRef = useRef(null);

  useEffect(() => {
    const verificarVisibilidadBoton = () => {
      const botonPos = buttonRef.current.getBoundingClientRect();
      if (botonPos.bottom >= 90) {
        setButtonVisible(true);
      } else {
        setButtonVisible(false);
      }
    };

    window.addEventListener('scroll', verificarVisibilidadBoton);
    return () => {
      window.removeEventListener('scroll', verificarVisibilidadBoton);
    };
  }, []);

  return (
    <>
      <div className='main__container'>
        <header>
          <div className='nav'>
            <img
              className='logo__ljp'
              src='./logo_ljp.png'
              alt='logo_lourdesJuarez'
            />
            <div>
              {' '}
              <a
                className={
                  buttonVisible === true ? 'none' : 'button button_cv_top'
                }
                href='./Lourdes_juarez_FrontEnd.pdf'
                target='_blank'
                rel='noopener noreferrer'
              >
                CV
              </a>
              <a
                className={
                  buttonVisible === true
                    ? 'none'
                    : 'button button_contact_cv_top'
                }
                href='mailto:lourdes.jupo@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Contáctame
              </a>
            </div>
            <nav>
              <ul className='icon__container '>
                <li>
                  <a
                    href='mailto:lourdes.jupo@gmail.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='icon mail'
                  >
                    <img
                      src='./mail.svg'
                      alt='mail: lourdes.jupo@gmail.com'
                      className='icon__img'
                    />
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/Lourdesjupo'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='icon'
                  >
                    <img
                      src='./github-alt.svg'
                      alt='Github/LourdesJupo'
                      className='icon__img'
                    />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/lourdes-ju%C3%A1rez-porto-984392129/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='icon'
                  >
                    <img
                      src='./linkedin.svg'
                      alt='LinkedIn/Lourdes Juarez'
                      className='icon__img'
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          <div className='hero'>
            <img
              className='hero__img'
              src='./programming.png'
              alt='chica programando'
            />
            <section className='hero__content'>
              <h1 className='hero__title'>DESARROLLADORA FRONT-END</h1>
              <p className='hero__desc'>
                ¡Hola! Soy <span className='name'>Lourdes Juárez</span>,
                programadora FrontEnd y futura fullStack. Echa un vistazo a mi{' '}
                <span span className='name'>
                  curriculum.
                </span>
              </p>
              <div>
                <a
                  className='button button_cv'
                  href='./Lourdes_juarez_FrontEnd.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  ref={buttonRef}
                >
                  Ver curriculum
                </a>

                <a
                  className='button button_contact'
                  href='mailto:lourdes.jupo@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Contáctame
                </a>
              </div>
            </section>
          </div>
          <section className='projects'>
            <h3 className='projects_title'>PROYECTOS</h3>
            <Cards />
            {/* incluir imagenes */}
          </section>
          <section className='skills'>
            <h3 className='skills__title'>Skills</h3>
            <ul className='skill_list'>
              <li className='skills__img'>
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
                  alt='HTML5'
                />
              </li>
              <li className='skills__img'>
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'
                  alt='CSS3'
                />
              </li>
              <li className='skills__img'>
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg'
                  alt='SASS'
                />
              </li>
              <li className='skills__img'>
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg'
                  alt='Bootstrap'
                />
              </li>
              <li className='skills__img'>
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
                  alt='JavaScript'
                />
              </li>
              <li className='skills__img'>
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
                  alt='React'
                />
              </li>
              <li className='skills__img'>
                <img
                  src='https://camo.githubusercontent.com/ce0a32825268b09cd5e0fc7c2a09c587a708491427cb794cade8f1866f7284c6/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6a6573746a73696f2f6a6573746a73696f2d69636f6e2e737667'
                  alt='Jest'
                />
              </li>
              <li className='skills__img'>
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg'
                  alt='gulp'
                />
              </li>
              <li className='skills__img'>
                <img src='./vite-logo.svg' alt='Vite' />
              </li>
              <li className='skills__img'>
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg'
                  alt='node'
                />
              </li>
              <li className='skills__img'>
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg'
                  alt='expressJS'
                />
              </li>
              <li className='skills__img'>
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg'
                  alt='mysql'
                />
              </li>
              <li className='skills__img'>
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg'
                  alt='mongoDB'
                />
              </li>
              <li className='skills__img'>
                <img
                  src='https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667'
                  alt='git'
                />
              </li>
              <li className='skills__img'>
                <img
                  src='https://camo.githubusercontent.com/7df0b771c958e1037aaf92e60c9491f7d01628c31d70f822aebe153a2daf2c8a/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769746875622f6769746875622d74696c652e737667'
                  alt='github'
                />
              </li>
            </ul>
          </section>
          <section className='about'>
            <h3 className='about__title'>Sobre mi</h3>
            <p className='about__desc'>
              En mi trayectoria profesional, he desempeñado roles fundamentales
              que abarcan desde la administración y digitalización de datos
              hasta la coordinación de proyectos y la gestión responsable de
              ecommerce. Recientemente decidí dar un giro profesional
              completando un bootcamp que me ha proporcionado las habilidades
              técnicas necesarias para diseñar y crear webs responsivas.
            </p>
          </section>
        </main>
        <footer className='footer'>
          <small>
            <p className='footer__copy'>&copy; Lourdes Juárez</p>
          </small>
        </footer>
      </div>
    </>
  );
}

export default App;
