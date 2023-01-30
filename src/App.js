function App() {
  return (
    <div className="App">
      <div style={{ background: "var(--tg-theme-bg-color)", height: 50 }}>
        bg_color
      </div>
      <div style={{ background: "var(--tg-theme-text-color)", height: 50 }}>
        text_color
      </div>
      <div style={{ background: "var(--tg-theme-hint-color)", height: 50 }}>
        hint_color
      </div>
      <div style={{ background: "var(--tg-theme-link-color)", height: 50 }}>
        link_color
      </div>
      <div style={{ background: "var(--tg-theme-button-color)", height: 50 }}>
        button_color
      </div>
      <div
        style={{ background: "var(--tg-theme-button-text-color)", height: 50 }}
      >
        button_text_color
      </div>
      <div
        style={{ background: "var(--tg-theme-secondary-bg-color)", height: 50 }}
      >
        secondary_bg_color
      </div>
    </div>
  );
}

export default App;
