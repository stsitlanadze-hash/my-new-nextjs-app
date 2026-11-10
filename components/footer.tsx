'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      width: '100%',
      padding: '20px 0',
      textAlign: 'center',
      backgroundColor: '#f1f1f1',
      marginTop: 'auto',
      borderTop: '1px solid #e5e5e5'
    }}>
      <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
        © All Rights Reserved | {currentYear}
      </p>
    </footer>
  );
}
