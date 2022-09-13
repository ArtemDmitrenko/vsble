import { Link } from 'react-router-dom';

import './tag.scss';

function Tag({ text }) {
  return (
    <Link to={`/`} state={{ searchValue: text }} className="tag">
      {text}
    </Link>
  );
}

export default Tag;
