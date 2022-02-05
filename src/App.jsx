import './App.css';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import stats from './Statistics/data.json';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      {/* Zadanie 1 - Profil w sieci społecznościowej */}
      <Profile user={user} />
      {/* Zadanie 2 - Sekcja statystyki */}
      <Statistics stats={stats} />
      <Statistics title="Upload stats" stats={stats} />
      {/* Zadanie 3 - Lista znajomych */}
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
