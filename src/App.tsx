import './App.css'

function App() {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      margin: 0, 
      padding: 0,
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0
    }}>
      <iframe
        src="/haru_rpg_build/index.html"
        title="Haru RPG Unity WebGL"
        style={{
          border: 'none',
          width: '100%',
          height: '100%',
          display: 'block',
          margin: 0,
          padding: 0
        }}
        allowFullScreen
      />
    </div>
  )
}

export default App
