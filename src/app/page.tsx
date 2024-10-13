import Logo from '../../public/logo.png'
import BagImg from '../../public/bag 1.svg'
import SearchImg from '../../public/search-interface-symbol 1.svg'
import MenuImg from '../../public/menuImg.svg'
import Link from 'next/link';
import Image from 'next/image';
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.logo}>
          <Image src={Logo} alt="logo" width={48} height={48} />
          <p className={styles.logo_name}>Planto.</p>
        </div>
        
        <div className={styles.navigation}>
          <div className={styles.nav_container}>
            <button>
              <Link href='/Home'>Home</Link>
            </button>
            <button>
              <Link href='/Home'>Plants Type</Link>
            </button>
            <button>
              <Link href='/More'>More</Link>
            </button>
            <button>
              <Link href='/Home'>Contact</Link>
            </button>
          </div>
        </div>
        <div className={styles.side_menu}>
          <button>
            <Link href='/Home'><Image src={SearchImg} alt="logo" width={25} height={25} /></Link>
          </button>
          <button>
            <Link href='/Home'><Image src={BagImg} alt="logo" width={25} height={25} /></Link>
          </button>
          <button>
            <Link href='/Home'><Image src={MenuImg} alt="logo" width={25} height={25} /></Link>
          </button>
        </div>
      </header>
    </div>
  );
}
