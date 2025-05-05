import React from 'react';

import s from './CatButton.module.scss';

interface Props {
  onClick: () => void;
  disabled?: boolean;
}

const CatButton: React.FC<Props> = ({ onClick, disabled }) => {
  return (
    <button className={s.catButton} onClick={onClick} disabled={disabled}>
      Get Cat
    </button>
  );
};

export default CatButton;
