import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useContact from "../../hooks/useContact";
import useProducts from "../../hooks/useProducts";
import { resetProducts } from "../../redux/slices/productsSlice";
import { peruvianCurrencyFormat } from "../../utils/utils";
import ContainersImage from "../common/containers/ContainersImage";
import LoadersModal from "../common/loaders/LoadersModal";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { loading, product } = useProducts();
  const { contactData } = useContact();

  const { attributes } = product;

  useEffect(() => {
    return (() => {
      dispatch(resetProducts());
    });
  }, []);

  return (
    <article className="section">
      <div className="container d-flex f-direction-column gap-xl">
        {loading && <LoadersModal />}
        <div className="card g-elements g-elements--responsive-2 gap-md">
          <ContainersImage
            src={attributes?.imagen.data[0].attributes?.url}
            alt={attributes?.nombre}
            className="section__img--product"
          />
          <div className="card__body">
           
            <h2 className="card__highlighted card__highlighted--lg">{attributes?.nombre}</h2>
            <h4 className="card__subtitle">{attributes?.slug}</h4>
            <h3 className="card__highlighted card__highlighted--xl">{attributes?.precio && peruvianCurrencyFormat(attributes?.precio)}</h3>
            {/* <p className="card__text card__text--sm">± {attributes?.stock || 0} unidades disponibles</p> */}
            {/* <button className="button button--outline-primary mt-auto">Agregar a carrito</button> */}
            {/* <a
              href={`https://api.whatsapp.com/send?phone=51${contactData.attributes?.componentes[3].numero}&text=Deseo cotizar el producto ${attributes?.nombre}`}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--primary mt-auto"
            >
              Cotizar
            </a> */}
          </div>
        </div>
        <div className="d-flex f-direction-column gap-sm">
          <h3 className="section__title section__title--sm">Descripcion</h3>
          {/* <table className="table">
            {attributes.produ?.map(element => {
              const { id, nombre} = element;
              return (
                <tr key={id}>
                  <td>{nombre}</td>
                  <td>{contenido}</td>
                </tr>
              )
            })}
          </table> */}
        </div>
        <div className="d-flex f-direction-column gap-sm">
          <h3 className="section__title section__title--sm">Ficha técnica</h3>
          <a href={attributes?.nombre} className="button button--secondary" target="_blank" rel="noopener noreferrer" download>Descargar</a>
        </div>
      </div>
    </article>
  );
};

export default ProductDetail;