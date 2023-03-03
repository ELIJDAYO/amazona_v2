import Spinner from 'react-bootstrap/Spinner';
export default function LoadingBox() {
  return (
    <Spinner animatino="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
