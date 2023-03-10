import { useState, useEffect } from "react";
import MainPageProduct from "../components/MainPageProduct";
import { useRouteLoaderData } from "react-router-dom";

function Home() {
  const [data, setData] = useState();

  const test = useRouteLoaderData("root");
  useEffect(() => {
    setData(test.filter((item) => item.onSale === true));
  }, []);

  return (
    <div className="container">
      {data && data.map((item, i) => <MainPageProduct key={i} {...{ item }} />)}
    </div>
  );
}

export default Home;
