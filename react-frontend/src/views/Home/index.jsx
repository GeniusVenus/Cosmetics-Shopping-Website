import './styles.scss';
import Header from '../../components/Header';
export default function Home() {
    return (
        <>
        <div className='container'>
          <p className="header"> Above header 1</p>  
          <p className="below">Below</p>
        </div>
        <Header></Header>
        </>
    );
}