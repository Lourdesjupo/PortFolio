function Cards() {
  const projects = [
    
    {
      img: './Disney_character.png',
      projectName: 'Disney Character Database',
      tech: '#HTML5, SASS, #JavaScript',
      description:
        'Web Responsive donde almacenar todos tus personajes favoritos de Disney. ',
      github: 'https://github.com/Lourdesjupo/Disney-Characters-Database',
      link: 'https://lourdesjupo.github.io/Disney-Characters-Database/',
    },
    {
      img: './rick_and_morty.png',
      projectName: 'Buscador Rick And Morty',
      tech: '#HTML5, #SASS, #ReactJS',
      description:
        'Busca tus personajes favoritos de Rick and Morty y averigua su procedencia y otros datos interesantes.',
      github: 'https://github.com/Lourdesjupo/Rick-and-Morty-Character-Finder',
      link: 'https://lourdesjupo.github.io/Rick-and-Morty-Character-Finder/',
    },
    {
      img: './card_generator.png',
      projectName: 'Card Generator',
      tech: '#HTML5, #SASS, #JavaScript',
      description:
        'Proyecto en grupo: Crea tu tarjeta de presentación de forma personalizada. Añade tu foto y perfil y compártelo en redes sociales.',
      github: 'https://github.com/Lourdesjupo/Card-Generator-Adalab-Teamproject',
      link: 'http://beta.adalab.es/project-promo-t-module-2-team-2/index.html',
    },
    {
      img: './ChronoLogica.png',
      projectName: 'ChronoLogica',
      tech: '#ReactJS, #MUI, #Vite, #MySQL, #NodeJS, #ExpressJS',
      description:
        '⌛En proceso. Herramienta de productividad que permite registrar eventos, configurar alertas y trackear el tiempo de tus tareas.',
      github:'https://github.com/Lourdesjupo/Chronologica',
      link: 'https://lourdesjupo.github.io/Chronologica/'

    },

    {
      img: './dados.png',
      projectName: 'Dados y apuestas',
      tech: '#HTML5, #CSS3, #JavaScript',
      description:
      'Mini juego donde podrás poner a prueba tu suerte contra tu máquina. Apuesta una cantidad, elige un número y juega!',
      github: 'https://github.com/Lourdesjupo/Dados-y-apuestas',
      link: 'https://lourdesjupo.github.io/Dados-y-apuestas/',
    },
    {
      img: './Anonymous.png',
      projectName: 'Anonymous Proxy',
      tech: '#HTML5, #CSS3',
      description:
        ' Creación de una página web responsive basada en un diseño proporcionado.',
      github: 'https://github.com/Lourdesjupo/webResponsive_example',
      link: 'https://lourdesjupo.github.io/webResponsive_example/',
    },
    {
      img: './Friends.png',
      projectName: 'Frases favoritas Friends',
      tech: '#HTML5, #SASS, #ReactJS',
      description:
        'Filtra y añade tus frases favoritas de Friends. Los datos se guardan en local.',
      github: 'https://github.com/Lourdesjupo/add-and-search-friends-quotes',
      link: 'https://lourdesjupo.github.io/add-and-search-friends-quotes/',
    },

  ];

  const getProjects = projects.map((el) => {
    return (
      <li key={el.projectName} className='card'>
        <div className='card_img_container'>
          <div className='title'>
            <h4 className='card__title'>{el.projectName}</h4>
            <div className='card__icons'>
              <a
                className='card__link'
                href={el.github}
                target='_blank'
                rel='noreferrer'
              >

                <img className='button__git' src='./github-alt.svg' alt='' />
              </a>
              {el.link && <a
                className='card__link'
                href={el.link }
                target='_blank'
                rel='noreferrer'
              >

                <img className='button__link' src='./link-solid.svg' alt='' />
              </a>}
            </div>
          </div>
          {el.link && <a
                className='card__link'
                href={el.link }
                target='_blank'
                rel='noreferrer'
              >
            <img
              className='card__img'
              src={el.img}
              alt={el.projectName + 'preview'}
            />
          </a>}
          <div className='card_content_container'>
            <p className='card__tech'>{el.tech}</p>
            <p className='card__description'>{el.description}</p>
          </div>
        </div>
      </li>
    );
  });

  return <ul className='card_list'>{getProjects}</ul>;
}

export default Cards;
