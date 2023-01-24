import React from 'react'
import styles from "@/styles/Blog.module.css";
const about = () => {
  return (
    <div >
        <div className={styles.body}>
        <h2 className={styles.h2}>Introduction</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quidem? Minus, quas! Earum maxime dignissimos rem quisquam omnis voluptatem ab quis. Tempora iure iste asperiores dolores quia eligendi! Doloremque repellat repellendus deleniti est. Blanditiis officiis et explicabo dicta. Quod, blanditiis at similique enim deserunt labore nisi doloribus tempore nihil quam omnis magni ducimus natus sit vel, id reprehenderit nam non quo consectetur ipsa molestias nobis. </p>
        <h2 className={styles.h2}>Services Offered</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quis. Saepe, blanditiis harum cum excepturi maiores atque mollitia quas itaque qui, exercitationem id quaerat magnam repellat quia fugiat hic iure sit vitae officiis eligendi.</p>
        <p>We offer the following services</p>
        <ul className={styles.services}>
            <li>AI Digital Art.</li>
            <li>Graphic Design.</li>
            <li>Freelance Photography.</li>
            <li>Website Creation.<br></br></li>
            <li>Course Creation.</li>
            <li> Content Creation.</li>
            <li>Digital products.</li>
            <li>Content writing services</li>

        </ul>
        <h2 className={styles.h2}>Contact us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos et animi harum assumenda necessitatibus explicabo nam, corporis deleniti, ab ad praesentium blanditiis iste saepe perferendis impedit architecto quia cupiditate? Accusantium est in inventore repellendus unde. Dolores labore deserunt corrupti fugiat ratione perspiciatis illo optio suscipit aliquid cumque nihil soluta earum, assumenda eligendi nulla sed molestias unde?</p>

        </div>
    </div>
  )
}

export default about