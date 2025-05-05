import React from 'react';

import s from './Controls.module.scss';

interface Props {
  enabled: boolean;
  autoRefresh: boolean;
  setEnabled: (value: boolean) => void;
  setAutoRefresh: (value: boolean) => void;
}

const Controls: React.FC<Props> = ({
  enabled,
  autoRefresh,
  setEnabled,
  setAutoRefresh,
}) => {
  return (
    <div className={s.controls}>
      <label>
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
        />
        Enabled
      </label>
      <label>
        <input
          type="checkbox"
          checked={autoRefresh}
          disabled={!enabled}
          onChange={(e) => setAutoRefresh(e.target.checked)}
        />
        Auto-refresh every 5 seconds
      </label>
    </div>
  );
};

export default Controls;
