import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Submenu.module.css";

const SubMenu = ({ category, products }) => {
  const [isHover, setIsHover] = useState(false);

  const filteredProducts = products.filter(
    (prod) => prod.category === category
  );

  const productSubCategory = [];
  filteredProducts.map((product) => {
    if (!productSubCategory.includes(product.subcategory)) {
      productSubCategory.push(product.subcategory);
    }
  });

  return (
    <div>
      <Link to={category}>
        <h1
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {category}
        </h1>
      </Link>
      {isHover && (
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={isHover ? styles.subMenuOn : styles.subMenuOff}
        >
          <div>
            {productSubCategory.map((subcat) => (
              <div key={subcat}>
                <Link
                  to={category + `/` + subcat}
                  state={{ subcat, filteredProducts }}
                >
                  <h1>{subcat}</h1>{" "}
                </Link>
                <img src="" alt="" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubMenu;
