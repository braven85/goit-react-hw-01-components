import './App.css';

import Profile from './Profile/Profile';
import user from './Profile/user.json';

import Statistics from './Statistics/Statistics';
import stats from './Statistics/data.json';

import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';

import TransactionHistory from './Transactions/TransactionHistory';
import items from './Transactions/transactions.json';

function App() {
  return (
    <div className="App">
      <a href="https://github.com/braven85/goit-react-hw-01-components">
        <h1>Oryginalny kod projektu</h1>
      </a>
      {/* Zadanie 1 - Profil w sieci społecznościowej */}
      <hr
        style={{
          width: '50%',
          height: '4px',
          backgroundColor: 'black',
          borderRadius: '5px',
          borderWidth: '0',
        }}
      ></hr>
      <h2>Zadanie 1 - Profil w sieci społecznościowej</h2>
      <Profile user={user} />
      {/* Zadanie 2 - Sekcja statystyki */}
      <hr
        style={{
          width: '50%',
          height: '4px',
          backgroundColor: 'black',
          borderRadius: '5px',
          borderWidth: '0',
        }}
      ></hr>
      <h2>Zadanie 2 - Sekcja statystyki</h2>
      <Statistics stats={stats} />
      <Statistics title="Upload stats" stats={stats} />
      {/* Zadanie 3 - Lista znajomych */}
      <hr
        style={{
          width: '50%',
          height: '4px',
          backgroundColor: 'black',
          borderRadius: '5px',
          borderWidth: '0',
        }}
      ></hr>
      <h2>Zadanie 3 - Lista znajomych</h2>
      <FriendList friends={friends} />
      {/* Zadanie 4 - Historia transakcji */}
      <hr
        style={{
          width: '50%',
          height: '4px',
          backgroundColor: 'black',
          borderRadius: '5px',
          borderWidth: '0',
        }}
      ></hr>
      <h2>Zadanie 4 - Historia transakcji</h2>
      <TransactionHistory items={items} />
    </div>
  );
}

export default App;
