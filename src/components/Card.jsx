function Cards() {
  const projects = [
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
      img: './Disney_Character.png',
      projectName: 'Disney Character Database',
      tech: '#HTML5, SASS, #JavaScript',
      description:
        'Web Responsive donde almacenar todos tus personajes favoritos de Disney. ',
      github: 'https://github.com/Lourdesjupo/Disney-Characters-Database',
      link: 'https://lourdesjupo.github.io/Disney-Characters-Database/',
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
      img: './Rick_and_Morty.png',
      projectName: 'Buscador Rick And Morty',
      tech: '#HTML5, #SASS, #ReactJS',
      description:
        'Busca tus personajes favoritos de Rick and Morty y averigua su procedencia y otros datos interesantes.',
      github: 'https://github.com/Lourdesjupo/Rick-and-Morty-Character-Finder',
      link: 'https://lourdesjupo.github.io/webResponsive_example/',
    },
    {
      img: './Friends.png',
      projectName: 'Frases favoritas Friends',
      tech: '#HTML5, #SASS, #ReactJS',
      description:
        'Filtra y añade tus frases favoritas de friends. Los datos se guardan en local.',
      github: 'https://github.com/Lourdesjupo/add-and-search-friends-quotes',
      link: 'https://lourdesjupo.github.io/webResponsive_example/',
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
                {' '}
                <img className='button__git' src='./github-alt.svg' alt='' />
              </a>
              <a
                className='card__link'
                href={el.link}
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                <img className='button__link' src='./link-solid.svg' alt='' />
              </a>
            </div>
          </div>
          <img
            className='card__img'
            src={el.img}
            alt={el.projectName + 'preview'}
          />
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
