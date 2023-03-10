import { useRef, useState, } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Submenu.module.css";
import { CSSTransition } from "react-transition-group";
import "../harcsamacska.css";
// import { useHover } from "../hooks/useHover";

const SubMenu = ({ category, products }) => {
  // const [hoverRef, isHovered] = useHover();
  const [opened, setOpened] = useState(false);
  const filteredProducts = products.filter(
    (prod) => prod.category === category
  );

  const {transRef} = useRef()

  const productSubCategory = [];
  filteredProducts.map((product) => {
    if (!productSubCategory.includes(product.subcategory)) {
      productSubCategory.push(product.subcategory);
    }
  });

  const style = {
    appear: "alert-appear",
    appearActive: "alert-active-appear",
    appearDone: "alert-done-appear",
    enter: "alert-enter",
    enterActive: "alert-enter-active",
    enterDone: "alert-enter-done",
    exit: "alert-exit",
    exitActive: "alert-exit-active",
    exitDone: "alert-done-exit",
  };

  return (
    <div>
      <NavLink
        to={category}
        onMouseEnter={() => setOpened(true)}
        onMouseLeave={() => setOpened(false)}
      >
        <h1>{category}</h1>
      </NavLink>
      <CSSTransition
        in={opened}
        noderef={transRef}
        timeout={300}
        classNames={style}
        unmountOnExit
      >
        <div
          noderef={transRef}
          onMouseEnter={() => setOpened(true)}
          onMouseLeave={() => setOpened(false)}
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
