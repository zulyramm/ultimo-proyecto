import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useContact from "../../../hooks/useContact";
import useProducts from "../../../hooks/useProducts";
import { incrementProductsPage } from "../../../redux/slices/productsSlice";
import { peruvianCurrencyFormat } from "../../../utils/utils";
import ContainersImage from "../../common/containers/ContainersImage";

const ProductsGallery = ({ products }) => {
  const dispatch = useDispatch()
  const { contactData } = useContact();
  const { productsMeta, productsPage } = useProducts();

  return (
    products.length > 0 ?
      <div className="d-flex f-direction-column gap-lg">
        <ul className="list g-elements g-elements--products-gallery gap-md">
          {products.map(element => {
            // const { nombre, precio, slug, marca, imagen } = element.attributes;
            const { nombre, precio, imagen,slug } = element.attributes;
            return (
              <li key={element.id} className="card card--products">
                {/* <button
                  className="button button--primary button--circle button--products"
                >
                  <BsCartPlus />
                </button> */}
                <Link to={`/productos/${slug}`}>
                  <ContainersImage
                    src={imagen.data[0].attributes.formats.thumbnail.url}
                    alt={nombre}
                    className="card__header-img card__header-img--products"
                  />
                </Link>
                <div className="card__body card__body--products">
                  {/* <h3 className="card__subtitle card__subtitle--sm">{marca.data[0]?.attributes.nombre ?? 'EAKON'}</h3> */}
                  <Link to={`/productos/${slug}`} className="card__title card__title--sm">{nombre}</Link>
                  <h4 className="card__highlighted mt-auto">{peruvianCurrencyFormat(precio)}</h4>
                  <a
                    href={`https://api.whatsapp.com/send?phone=51${contactData.attributes?.componentes[3].numero}&text=Pedido ${nombre}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--primary"
                  >
                    Agregar
                  </a>
                </div>
              </li>
            );
          })}
        </ul >
        {
          productsPage < productsMeta.pagination?.pageCount
          &&
          <button
            className="button button--primary button--lg a-self-center"
            onClick={() => dispatch(incrementProductsPage())}
          >
            Ver más
          </button>
        }
      </div >
      :
      <h3 className="section__subtitle t-align-center f-elements f-elements--center">No hay productos 404</h3>
  );
};

export default ProductsGallery;