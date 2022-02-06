import './App.css';

import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import Statistics from './components/Statistics/Statistics';
import stats from './components/Statistics/data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

import TransactionHistory from './components/Transactions/TransactionHistory';
import items from './components/Transactions/transactions.json';

import HorizontalLine from './components/HorizontalLine';

function App() {
  return (
    <div className="App">
      <a href="https://github.com/braven85/goit-react-hw-01-components">
        <h1>Oryginalny kod projektu</h1>
      </a>
      {/* Zadanie 1 - Profil w sieci społecznościowej */}
      <HorizontalLine />
      <h2>Zadanie 1 - Profil w sieci społecznościowej</h2>
      <Profile user={user} />
      {/* Zadanie 2 - Sekcja statystyki */}
      <HorizontalLine />
      <h2>Zadanie 2 - Sekcja statystyki</h2>
      <Statistics stats={stats} />
      <Statistics title="Upload stats" stats={stats} />
      {/* Zadanie 3 - Lista znajomych */}
      <HorizontalLine />
      <h2>Zadanie 3 - Lista znajomych</h2>
      <FriendList friends={friends} />
      {/* Zadanie 4 - Historia transakcji */}
      <HorizontalLine />
      <h2>Zadanie 4 - Historia transakcji</h2>
      <TransactionHistory items={items} />
    </div>
  );
}

export default App;
