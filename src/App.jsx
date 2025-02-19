import './app.css';
import './buttons.css'
import Create from './components/Create'
import List from './components/List';

export default function  App() {
  return (
    <div className='app'>
      <div className='app-bin'>
        <div className='create-bin'>
          <Create />
        </div>
        <div className='list-bin'>
          <List />
        </div>

      </div>      
    </div>
  );
}
