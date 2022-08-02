import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/vismay.jpg"
          alt="vismaygamit"
          width={300}
          height={300}
        />
      </div>
      <h1>{`Hi, I'm Vismay.`}</h1>
      <p>I am fullstack developer.</p>
    </section>
  );
};

export default Hero;
