import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.title} style={{textAlign: "center"}}>
          <strong> &#9991;</strong> Hungry Coders
        </div>

        <div className={styles.container}>
          <div className={styles.h1}>Latest Blogs</div>
          <div className={styles.post}>
            <h2 className={styles.h2}>This is first Blog</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              aliquid error possimus expedita odit. aliquid error possimus
              expedita odit.
            </p>
          </div>
          <div className={styles.post}>
            <h2 className={styles.h2}>This is second Blog</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              aliquid error possimus expedita odit. aliquid error possimus
              expedita odit.
            </p>
          </div>
          <div className={styles.post}>
            <h2 className={styles.h2}>This is third Blog</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              aliquid error possimus expedita odit. aliquid error possimus
              expedita odit.
            </p>
          </div>
          <div className={styles.post}>
            <h2 className={styles.h2}>This is fourth Blog</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              aliquid error possimus expedita odit. aliquid error possimus
              expedita odit.
            </p>
          </div>
          <div className={styles.post}>
            <h2 className={styles.h2}>This is fifth Blog</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              aliquid error possimus expedita odit. aliquid error possimus
              expedita odit.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
