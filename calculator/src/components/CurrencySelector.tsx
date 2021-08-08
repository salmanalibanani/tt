import React from 'react';
import { FC, ReactElement } from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {Select, FormControl } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dropDown: {
      margin: theme.spacing(1),
      minWidth: 250,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const CurrencySelector: FC<{}> = (): ReactElement => { 
  const classes = useStyles();
  const [sourceCurrency, setSourceCurrency] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSourceCurrency(event.target.value as string);
  };

   return (
    <div>
        <FormControl className={classes.dropDown}>
            <InputLabel id="demo-simple-select-label">Currency</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sourceCurrency}
            onChange={handleChange}
            >
            <MenuItem value={'AUD'}>Australian Dollar</MenuItem>
            <MenuItem value={'USD'}>US Dollar</MenuItem>
            <MenuItem value={'GBP'}>Pound sterling</MenuItem>
            </Select>
        </FormControl>
        
        </div>
    )
};

export default CurrencySelector;
