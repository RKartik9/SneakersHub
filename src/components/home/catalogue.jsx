import React from "react";
import CatalogueCard from "./CatalogueCard";
import sneakers1 from "../../assets/sneakers-1.png";
import sneakers2 from "../../assets/sneakers-2.png";
import sneakers3 from "../../assets/sneakers-3.png";
import sneakers4 from "../../assets/sneakers-4.png";
import sneakers5 from "../../assets/sneakers-5.png";
import sneakers6 from "../../assets/sneakers-6.png";

const catalogue = () => {
  const addtoCartHandler = (productNum) => {};
  return (
    <section id="catalogue">
      <h1>Our Products</h1>
      {/* card 1 */}
      <div className="card-1">
        <CatalogueCard
          productNum={1}
          sneakerSrc={sneakers1}
          price={16995.0}
          title="Air Jordan 1 Retro High OG"
          handler={addtoCartHandler}
          delay={0.2}
        />
        <CatalogueCard
          productNum={2}
          sneakerSrc={sneakers2}
          price={12295.0}
          title="Air Jordan 1 Mid SE"
          handler={addtoCartHandler}
          delay={0.5}
        />
        <CatalogueCard
          productNum={3}
          sneakerSrc={sneakers3}
          price={15995.0}
          title="Nike GT Cut 2"
          handler={addtoCartHandler}
          delay={0.8}
        />
      </div>
      {/* card 2 */}
      <div className="card-2">
        <CatalogueCard
          productNum={4}
          sneakerSrc={sneakers4}
          price={11895.0}
          title="Air Jordan 1 Low FlyEase"
          handler={addtoCartHandler}
          delay={1}
        />
        <CatalogueCard
          productNum={5}
          sneakerSrc={sneakers5}
          price={18395.0}
          title="Nike Air Max Plus Mercurial 25"
          handler={addtoCartHandler}
          delay={1.3}
        />
        <CatalogueCard
          productNum={6}
          sneakerSrc={sneakers6}
          price={17247.0}
          title="Air Jordan 5 x DJ Khaled"
          handler={addtoCartHandler}
          delay={1.6}
        />
      </div>
    </section>
  );
};

export default catalogue;
