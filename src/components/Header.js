import styles from '../css/Header.module.css'

function Header({img,alt}) {
	return (
		<div className={styles.headerContainer}>
			<h1>Rocket<span>Market</span></h1>
			<div className={styles.searchBox}>
				<input type="text" placeholder="Insira um pokémon" className={styles.headerSearchInput}/>
				<a className={styles.searchButton} href="#">
					<i class="fas fa-search"></i>
				</a>
			</div>
			
		</div>
	);
}

export default Header