import Footer from "../components/Footer";
import './Home.css'

const Home: React.FC = () => {
    return (
        <div className="home-page">
            <main className="home-main">
                <h2>ホームページ</h2>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
