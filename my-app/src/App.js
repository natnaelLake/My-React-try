import './App.css';
import Posts from './components/Posts/Posts';
import SideBar from './components/Side  bar/SideBar';
import ButtonContext from './components/Context/ButtonContext';
import UserContext from './components/Context/UserContext';
function App() {
    let userData = {
        name: 'nati',
        greet: function () {
            return 'Hello' + this.name;
        }
    }
    return (
        <div className='container mx-auto'>
            <div className='flex'>
                <div className='w-1/5'>
                    <ButtonContext.Provider value='nati web' >
                        <UserContext.Provider>
                            <SideBar name='nati web' />  
                        </UserContext.Provider>
                    </ButtonContext.Provider>
                </div>
            </div>
            
            <div className='w-4/5'>
                <Posts />
            </div>
        </div>
    );
}

export default App;
