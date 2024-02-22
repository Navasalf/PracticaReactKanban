import './App.css';
import { Kanban } from './Components/kanban/Kanban';

function App() {
  return (
      <div style={{ padding: '50px' }}>
          <h1 style={{ marginBottom: '20px' }}>
              Kanban UI
          </h1>
          <Kanban />
      </div>
  )
}

export default App
