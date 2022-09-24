import { createAction } from '@reduxjs/toolkit';

//const filterChange = value => ({
//  type: `FILTER_CHANGE`,
//  payload: value,
//});

const filterChange = createAction('FILTER_CHANGE');

export { filterChange };
