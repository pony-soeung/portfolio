import './Slider.scss';

const experiences = [
  {
    company: {
      name: 'Digital and You (groupe Silamir)',
      location: 'Paris',
    },
    endDate: '',
    image: '/logo/silamir.png',
    jobTitle: 'Developeur Front/AEM',
    task: [],
    projects: ['Renault'],
    startDate: '2019-06',
    skills: ['AEM', 'JAVA/J2EE', 'HTML/CSS', 'React', 'javascript'],
  },
  {
    company: {
      name: 'SQLI',
      location: 'Levalois',
    },
    endDate: '2018-07',
    image: '/logo/sqli.png',
    jobTitle: 'Expert AEM',
    task: [
      "L'initialisation des projets AEM",
      "La définition de l'architecture front",
      'Etude des besoins client',
      'Estimation de la réalisation des tâches',
      "Echange avec les agences web concernant l'intégration des designs",
      'Revue / audit de code',
      'Formation technique',
    ],
    projects: ['Silvesea', 'Airbus'],
    startDate: '2017-02',
    skills: [
      'AEM',
      'JAVA/J2EE',
      'HTML/CSS',
      'BOOTSTRAP',
      'Adobe Dynamic Media (image/video)',
      'jQuery',
    ],
  },
  {
    company: {
      name: 'Accenture',
      location: 'Paris',
    },
    endDate: '2017-01',
    image: '/logo/accenture.png',
    jobTitle: 'Expert AEM',
    task: [],
    projects: ['BASF', 'AXA,', 'EON', 'Sparebank1', 'SEAT', 'DANONE'],
    startDate: '2014-04',
    skills: ['AEM', 'JAVA/J2EE', 'BOOTSTRAP', 'jQuery', 'HTML/CSS'],
  },
  {
    company: {
      name: 'Valtech',
      location: 'Paris',
    },
    endDate: '2013-09',
    image: '/logo/valtech.png',
    jobTitle: 'Développeur AEM',
    task: [],
    projects: ['Chanel', 'Fondation Louis Vuitton', 'La Banque Postale', 'Rolex'],
    startDate: '2011-11',
    skills: ['CQ5', 'JAVA/J2EE', 'JSP', 'jQuery', 'HTML/CSS'],
  },
  {
    company: {
      name: 'Sopra Steria',
      location: 'Courbevoie',
    },
    endDate: '2011-09',
    image: '/logo/soprasteria.png',
    jobTitle: "Ingénieur d'étude",
    task: [],
    projects: ['SFR', 'Canal+'],
    startDate: '2007-05',
    skills: [
      'JAVA/J2EE',
      'Struts',
      'JSP',
      'jQuery',
      'Prototype',
      'HTML/CSS',
      'PHP5',
      'ZEND',
      'Magento',
      'MVC',
    ],
  },
  {
    company: {
      name: 'w-HA',
      location: 'Boulogne Billancourt',
    },
    endDate: '2006-06',
    image: '/logo/wha.png',
    jobTitle: 'Webmaster et chargé de publication',
    task: [],
    projects: ['interne'],
    startDate: '2005-5',
    skills: ['CMS', 'PHP', 'Javascript', 'HTML/CSS', 'Standard Web', 'Référencement'],
  },
];

/**
 * Return duration between 2 dates in years months
 * @param {*} startDate
 * @param {*} endDate
 */
const getDuration = (endDate, startDate) => {
  const years = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24 * 365);
  const months = (years - Math.floor(years)) * 12;

  const duration = `${Math.floor(years)} ${Math.floor(years) > 1 ? 'ans' : 'an'} ${Math.floor(
    months,
  )} mois`;

  return duration;
};

/**
 * Display slider item job
 * @param {*} param0
 */
const SliderItem = ({ content }: Object) => {
  const { company, endDate, image, jobTitle, task, projects, startDate, skills } = content || {};
  const { name: companyName, location } = company || {};

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const locale = navigator.language || 'fr-FR';

  const endDateObj = endDate ? new Date(endDate) : new Date();
  const startDateObj = new Date(startDate);

  return (
    <li className="Slider__item">
      {image && <img src={image} alt={companyName} className="Slider__logo" />}
      <h2>{jobTitle}</h2>
      <h3>
        {companyName} <small>({location})</small>
      </h3>
      <p>
        <time dateTime={startDate}>{startDateObj.toLocaleString(locale, options)}</time> -{' '}
        <time dateTime={endDate}>{endDateObj.toLocaleDateString(locale, options)}</time>
        <br />
        <small>{getDuration(endDateObj, startDateObj)}</small>
      </p>
      <dl className="Slider__list">
        <dt className="Slider__listTitle">Projects/clients</dt>
        {projects &&
          projects.map(project => (
            <dd className="Slider__listItem" key={project}>
              {project}{' '}
            </dd>
          ))}
      </dl>
      <dl className="Slider__list">
        <dt className="Slider__listTitle">Skills</dt>
        {skills &&
          skills.map(skill => (
            <dd className="Slider__listItem" key={skill}>
              {skill}{' '}
            </dd>
          ))}
      </dl>
      {task && <p className="Slider__copyText">{task}</p>}
    </li>
  );
};

/**
 * Slider
 */
function Slider() {
  return (
    <ul className="Slider">
      {experiences.map(experience => (
        <SliderItem key={experience.startDate} content={experience} />
      ))}
    </ul>
  );
}

export default Slider;
