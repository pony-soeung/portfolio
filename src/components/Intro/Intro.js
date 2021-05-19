import './Intro.scss';

const skills = [
  {
    label: 'Compétences techniques AEM',
    values: [
      'Développement des composants FRONT (HTL/boîte de dialogue)',
      'Template',
      'Clientlib',
      'Développement Java (sling model / wcmUsePojo)',
      'Requête xpath / jcr-sql2',
      'Dynamic media / scene7',
      'i18n',
    ],
  },
  {
    label: 'Compétences techniques Front',
    values: [
      'React',
      'Javascript Vanilla',
      'HTML',
      'CSS',
      'LESS/SASS',
      'BEM',
      'Bootstrap',
      'Responsive design',
      'Jquery',
      'Grunt, npm',
    ],
  },
];

/**
 *
 */
function Intro() {
  return (
    <div className="Intro">
      <section className="Intro__section">
        <p>Je travaille sur des projets digitaux AEM (Adobe Experience Manager).</p>
      </section>
      {skills &&
        skills.map(section => {
          const { label, values } = section || {};
          return (
            <section className="Intro__section" key={label}>
              <dl className="Intro__list">
                <dt className="Intro__listTitle">{label}</dt>
                {values &&
                  section.values.map(value => (
                    <dd className="Intro__listItem" key={value}>
                      {value}
                    </dd>
                  ))}
              </dl>
            </section>
          );
        })}
    </div>
  );
}

export default Intro;
