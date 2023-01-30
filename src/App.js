function App() {
  return (
    <div className="App">
      <div style={{ background: "var(--tg-theme-bg-color)" }}>bg_color</div>
      <div style={{ background: "var(--tg-theme-text-color)" }}>text_color</div>
      <div style={{ background: "var(--tg-theme-hint-color)" }}>hint_color</div>
      <div style={{ background: "var(--tg-theme-link-color)" }}>link_color</div>
      <div style={{ background: "var(--tg-theme-button-color)" }}>
        button_color
      </div>
      <div style={{ background: "var(--tg-theme-button-text-color)" }}>
        button_text_color
      </div>
      <div style={{ background: "var(--tg-theme-secondary-bg-color)" }}>
        secondary_bg_color
      </div>
    </div>
  );
}

export default App;
