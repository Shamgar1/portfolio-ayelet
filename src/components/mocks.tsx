export function LoginMock() {
  return (
    <div className="mock-login" aria-hidden="true">
      <div className="mock-login-card">
        <div className="mock-brand">
          <span className="mock-mark" />
          פורטל סוכנים
        </div>
        <h4>כניסה לחשבון</h4>
        <p className="mock-field-label">אימייל</p>
        <div className="mock-field" />
        <p className="mock-field-label">סיסמה</p>
        <div className="mock-field" />
        <div className="mock-btn" />
      </div>
    </div>
  );
}

export function DashboardMock() {
  return (
    <div className="mock-dash" aria-hidden="true">
      <div className="mock-nav">
        <span>פורטל סוכנים</span>
        <div className="mock-user">
          <span className="mock-avatar" />
          <span>סוכן</span>
        </div>
      </div>
      <div className="mock-dash-body">
        <p className="mock-hello">שלום, סוכן</p>
        <div className="mock-kpis">
          <div className="mock-kpi">
            <span>לידים פתוחים</span>
            <strong>12</strong>
          </div>
          <div className="mock-kpi">
            <span>בטיפול</span>
            <strong>5</strong>
          </div>
          <div className="mock-kpi">
            <span>עמלות</span>
            <strong>₪•••</strong>
          </div>
        </div>
        <div className="mock-table">
          <div className="mock-row">
            <span>לקוח</span>
            <span>סטטוס</span>
            <span>סכום</span>
          </div>
          <div className="mock-row">
            <span>לקוח א׳</span>
            <span>
              <span className="mock-status">בבדיקה</span>
            </span>
            <span>₪•••</span>
          </div>
          <div className="mock-row">
            <span>לקוח ב׳</span>
            <span>
              <span className="mock-status">חדש</span>
            </span>
            <span>₪•••</span>
          </div>
          <div className="mock-row">
            <span>לקוח ג׳</span>
            <span>
              <span className="mock-status">אושר</span>
            </span>
            <span>₪•••</span>
          </div>
        </div>
      </div>
    </div>
  );
}

