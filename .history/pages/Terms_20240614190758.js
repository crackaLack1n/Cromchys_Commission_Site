export default function Idk() {
  return(
    <>
    <main className={`${styles.main}`}>
        <div >
          <Image src={'/images/banner2.png'} height={400} width={350} className={styles.image}></Image>
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.containerLeft}>
            <div className={`${styles.contentLeft} ${lilita_One.className}`}>
              <p >About Me!!!1</p>
              <p style={{ opacity: '0.8' }}>About Me!!!1</p>
              <p style={{ opacity: '0.6' }}>About Me!!!1</p>
              <p style={{ opacity: '0.4' }}>About Me!!!1</p>
              <p style={{ opacity: '0.2' }}>About Me!!!1</p>
            </div>
          </div>
          <div className={styles.containerRight}>
            <div className={styles.contentRight}>
              <div className={styles.section}>
                <h2 className={`${styles.heading} ${lilita_One.className}`}>Introduction</h2>
                <p>
                  hihihihi im Cromchy or Lack1n (on Discord) im a digital artist
                  but also a UI/UX designer and Web Developer (dont ask me about JavaScript i still dont know lololol).
                </p>
                <p>
                  I luvb videmeo games
                </p>
              </div>
              <div className={styles.section}>
                <h2 className={`${styles.heading} ${lilita_One.className}`}>Socials/Contact</h2>
                <p>Wanna reach out? Hit me up on Discord @crackalack1n</p>
                <p>Find Me On: </p>
                  <ul>
                    <li>(NSFW) Twitter: @Cromchy_Bones</li>
                    <li> (SFW) Tumblr: alot0ftea </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}