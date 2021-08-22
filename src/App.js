import './App.css';

const residents = [
    'Аса',
    'Бека',
    'Ерба',
    'Айдос',
    'Райым',
]

const rooms = [
    'Зал + балкон',
    'Комната Айдоса и Райыма + балкон',
    'Ванна + туалет',
    'Кухня',
    'Команата Асы и Беки + Прихожая',
]

Date.prototype.getWeek = function() {
    let date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    let week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
        - 3 + (week1.getDay() + 6) % 7) / 7);
}
const weekNumber = new Date().getWeek() % residents.length;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Добрый день сучки! Вот таблица уборки!</h1>

          {residents.map((item, idx) => (
              <div key={item}>{item}: {rooms[(idx + weekNumber) % 5]}</div>
          ))}
      </header>
    </div>
  );
}

export default App;
