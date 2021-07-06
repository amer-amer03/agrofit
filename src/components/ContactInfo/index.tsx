import styles from "./index.module.scss";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.info}>
        <div>
          <h4 className={styles.title}>ООО «АГРОФИТ»</h4>
          <div className={styles.text}>
            <p>53110 Днепропетровская обл. ул.</p>
            <p>Софиевский р-он с.Ордо-Васильевка</p>
            <p>Строканя Капитана, 55</p>
          </div>
        </div>
        <div>
          <h4 className={styles.title}>Вершинин Вадим Владимирович</h4>
          <p>Директор</p>
          <div className={styles.text}>
            <p>м.т : 067-631-95-20 </p>
            <p>т\ф: +38-05650-2-54-84</p>
            <p>mentha_ua@mail.ru</p>
          </div>
        </div>
        <div>
          <h4 className={styles.title}>
            Наши координаты для программы Navitel:
          </h4>
          <div className={styles.text}>
            <p>N 48012.063'</p>
            <p>E 33042.677</p>
          </div>
        </div>
      </div>
      <div>
        <img className={styles.img} src="/assets/images/Map.jpg" alt="" />
      </div>
    </div>
  );
};
export default ContactInfo;
