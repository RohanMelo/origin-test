import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

import { GoalType } from '../../types/goaltype';
import ICONS from '../../styles/icons';
import { formatToLocale, stringToNumber } from '../../utils/currencyUtils';

export interface GoalState {
  selectedGoal: GoalType;
  amount: string;
  reachDate: dayjs.Dayjs;
  initialDate: dayjs.Dayjs;
  monthDiff: number;
  monthlyAmount: number;
  currencySymbol: string;
}

const initialDate = dayjs().add(1, 'month');

const initialState: GoalState = {
  selectedGoal: {
    goalKind: 'saving goal',
    title: 'buy a house',
    icon: ICONS.houseIcon,
  },
  amount: '10,000',
  reachDate: initialDate,
  initialDate,
  monthDiff: 1,
  monthlyAmount: 10000,
  currencySymbol: '$',
};

// It's okay to mutate state here because of the Immer library
export const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    incrementDate: (state) => {
      state.reachDate = dayjs(state.reachDate).add(1, 'month');
      state.monthDiff += 1;

      const numberAmount = stringToNumber(state.amount);
      state.monthlyAmount = +(numberAmount / state.monthDiff).toFixed(2);
    },
    decrementDate: (state) => {
      // already checks for month and year
      if (dayjs(state.initialDate).isSame(state.reachDate, 'month')) {
        return;
      }
      state.reachDate = dayjs(state.reachDate).subtract(1, 'month');
      state.monthDiff -= 1;

      const numberAmount = stringToNumber(state.amount);
      state.monthlyAmount = +(numberAmount / state.monthDiff).toFixed(2);
    },
    setAmount: (state, action: PayloadAction<string>) => {
      const numberAmount = stringToNumber(action.payload);
      const stringAmount = formatToLocale(numberAmount);
      const monthlyAmount = +(numberAmount / state.monthDiff).toFixed(2);
      state.amount = stringAmount;
      state.monthlyAmount = monthlyAmount;
    },
  },
});

export const { incrementDate, decrementDate, setAmount } = goalSlice.actions;

export default goalSlice.reducer;
