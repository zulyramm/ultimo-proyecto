import { BsClock, BsEnvelope, BsGeoAlt, BsWhatsapp } from "react-icons/bs";
import useContact from "../../hooks/useContact";

const ContactMeans = () => {
  const { contactData } = useContact();
  const { attributes } = contactData;

  return (
    <section className="section">
      <div className="container g-elements g-elements--responsive-2 gap-lg">
        <div className="d-flex f-direction-column gap-sm">
          <h3 className="section__title section__title-sm">{attributes?.hero.titulo}</h3>
          <p className="section__text">{attributes?.descripcion}</p>
          <ul className="list d-flex f-direction-column gap-xs">
            <li>
              <h4 className="section__subtitle section__subtitle--xs"><BsGeoAlt /> Dirección</h4>
              <ul className="list">
                <li className="section__text section__text--sm">
                  {attributes?.componentes[0].direccion}, {attributes?.componentes[0].ciudad}, {attributes?.componentes[0].pais}
                </li>
              </ul>
            </li>
            <li>
              <h4 className="section__subtitle section__subtitle--xs"><BsClock /> Horario de atención</h4>
              <ul className="list">
                <li className="section__text section__text--sm">
                  {attributes?.componentes[4].dia}, {attributes?.componentes[4].hora_inicio}, {attributes?.componentes[4].hora_salida}
                </li>
                <li className="section__text section__text--sm">
                  {attributes?.componentes[5].dia}, {attributes?.componentes[5].hora_inicio}, {attributes?.componentes[5].hora_salida}
                </li>
              </ul>
            </li>
            <li>
              <h4 className="section__subtitle section__subtitle--xs"><BsEnvelope /> Correos</h4>
              <ul className="list">
                <li className="section__text section__text--sm">
                  <a href={`mailto:${attributes?.componentes[1].email_corporativo}`} className="list__link">
                    Servicios: {attributes?.componentes[1].email_corporativo}
                  </a>
                </li>
                <li className="section__text section__text--sm">
                  <a href={`mailto:${attributes?.componentes[2].email_corporativo}`} className="list__link">
                    Ventas: {attributes?.componentes[2].email_corporativo}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <h4 className="section__subtitle section__subtitle--xs"><BsWhatsapp /> Celular</h4>
              <ul className="list">
                <li className="section__text section__text--sm">
                  <a
                    href={`https://api.whatsapp.com/send?phone=${attributes?.componentes[3].numero}&text=Deseo información`}
                    className="list__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {attributes?.componentes[3].numero}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="d-flex f-direction-column gap-sm">
          <h3 className="section__title section__title--sm">{attributes?.formulario.titulo}</h3>
          <p className="section__text">{attributes?.formulario.subtitulo}</p>
          <form className="d-flex f-direction-column gap-xs">
            <div className="g-elements g-elements--responsive-2 gap-xs">
              <input type="text" name="name" placeholder="Nombre" className="input" required />
              <input type="email" name="email" placeholder="Correo" className="input" required />
            </div>
            <div className="g-elements g-elements--responsive-2 gap-xs">
              <input type="tel" name="phone" placeholder="Celular" className="input" required />
              <input type="text" name="subject" placeholder="Asunto" className="input" required />
            </div>
            <textarea name="message" placeholder="Mensaje" className="input" required></textarea>
            <button className="button-lg button button--primary">Contactar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMeans;