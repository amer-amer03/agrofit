import { FC } from "react";
import styles from "./index.module.scss";

interface Props {
  aboutUsRef: React.RefObject<HTMLDivElement>;
}

const AboutUs: FC<Props> = ({ aboutUsRef }) => {
  return (
    <div className={styles.aboutUs}>
      <div>
        <img
          className={styles.image}
          src="/assets/images/AboutUs.jpg"
          alt="field image"
        />
      </div>
      <div className={styles.info}>
        <h3 ref={aboutUsRef} className={styles.title}>
          О Нас
        </h3>
        <p className={styles.text}>
          ООО «АГРОФИТ», основано в 2001г. Основным видом деятельности
          предприятия является выращивание и реализация мяты перечной. Наше
          сырьё используется в фармацевтической и пищевой промышленности.
          Предприятие «АГРОФИТ», является самым крупным производителем данного
          продукта в Украине. Мы поставляем наше сырьё на все ведущие
          предприятия Украины и почти во всех случаях являемся эксклюзивным
          поставщиками мяты перечной на данные предприятия. Высокое качество
          нашего продукта и система гибких цен позволяет нам занимать лидирующие
          позиции на Украинском рынке. Развитие данного сегмента рынка, а это
          производство фито-чаёв, лекарственных сборов, других продуктов
          основанных на фито-сырье, позволяет нам ежегодно наращивать
          производство. За десятилетнюю историю предприятия нами были наработаны
          собственные технологии выращивания культуры мяты перечной, а
          накопленный опыт и коллектив единомышленников, работающий на
          предприятии, позволяет получать стабильно растущий результат. Мы
          внимательно следим за всеми инновациями в сельском хозяйстве и
          стараемся внедрять передовые технологии у себя в производстве.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
