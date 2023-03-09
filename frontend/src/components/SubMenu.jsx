import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Submenu.module.css";
import slideTransitions from './SlideTransitions.module.css'

import { CSSTransition } from "react-transition-group";

const SubMenu = ({ category, products }) => {
  const [isHover, setIsHover] = useState(false);
  const nodeRef = useRef(null);
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
      <CSSTransition
        in={isHover}
        nodeRef={nodeRef}
        timeout={300}
        classNames={slideTransitions}
        unmountOnExit
      >
        <div
          ref={nodeRef}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={styles.subMenu}
        >
          <div className={styles.box}>
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
      </CSSTransition>
    </div>
  );
};

export default SubMenu;
