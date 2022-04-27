import styles from '../styles/Home.module.css'
import Nav from '../components/nav'
import Footer from '../components/footer'

const Home  = () => {
  return (
    <>
      <Nav />

      <main className={styles.container}>
        <li>
          <ul className={styles.itemContainer}>
            <img src='/icons/fsFish.jpg' alt='Yellow Fish'/>
            <div className={styles.itemDescription}>
              <span>
                <h2>Fish Name</h2>
                <p>
                  usto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provide
                </p>
              </span>
            <div className={styles.colItem}>
              <h5>Php 100</h5>
              <button>Add to Cart</button>
            </div>
          </div>
        </ul>
      </li>
    </main>

    <Footer />
    </>
  )
}

export default Home
