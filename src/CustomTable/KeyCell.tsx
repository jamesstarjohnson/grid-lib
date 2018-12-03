import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CopyToClipboardIcon from './CopyToClipboardIcon';

const copyToClipboard = (key: string) => (event: any) => {
  event.stopPropagation();
  if (!(navigator as any).clipboard) {
    console.error('clipboard api is not suported in this browser');
    return;
  }
  (navigator as any).clipboard.writeText(key).then(
    () => undefined,
    () => {
      console.error('saving to clipboard failed');
    },
  );
};

const KeyCell: React.SFC<{ value: string }> = ({ value }) => (
  <React.Fragment>
    {Array.from(Array(32)).map((_, i) => (
      <span key={i}>&#9679;</span>
    ))}
    <IconButton onClick={copyToClipboard(value)}>
      <CopyToClipboardIcon />
    </IconButton>
  </React.Fragment>
);

export default KeyCell;
