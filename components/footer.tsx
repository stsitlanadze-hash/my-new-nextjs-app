export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      width: '100%',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f1f1f1',
      marginTop: 'auto'
    }}>
      <p>© All Rights Reserved | {currentYear}</p>
    </footer>
  );
}