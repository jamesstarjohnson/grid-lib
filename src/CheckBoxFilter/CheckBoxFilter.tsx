import * as React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

type Props<
  T extends { [Key in K]: Array<[string, boolean, number]> },
  K extends keyof T
> = {
  onChange(checkedMap: T): void;
  checkedMap: T;
  filterKey: K;
};

class CheckBoxFilter<
  T extends { [Key in K]: Array<[string, boolean, number]> },
  K extends keyof T
> extends React.Component<Props<T, K>> {
  handleChange = (key: string) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { filterKey, checkedMap } = this.props;
    this.props.onChange({
      ...checkedMap,
      [filterKey]: checkedMap[filterKey].map(([x, checked, count]) => {
        if (key !== x) {
          return [x, checked, count];
        }
        return [x, event.target.checked, count];
      }),
    });
  };

  render() {
    const { checkedMap, filterKey } = this.props;
    const checkedFilter = checkedMap[filterKey];
    return (
      <FormControl style={{ paddingBottom: 15, width: '100%' }}>
        <FormLabel>Type</FormLabel>
        <FormGroup>
          {checkedFilter.map(([key, checked, count]) => (
            <div
              key={key}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={checked}
                    onChange={this.handleChange(key)}
                    value={key}
                  />
                }
                label={key}
              />
              <span style={{ fontSize: 14 }}>{count}</span>
            </div>
          ))}
        </FormGroup>
      </FormControl>
    );
  }
}

export default CheckBoxFilter;
