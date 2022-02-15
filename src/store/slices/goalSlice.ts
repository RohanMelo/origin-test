import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GoalType } from '../../types/goaltype';
import dayjs from 'dayjs';
import ICONS from '../../styles/icons';
import currencyFormat from '../../utils/currencyFormat';

export interface GoalState {
  selectedGoal: GoalType;
  amount: string;
  reachDate: dayjs.Dayjs;
  monthDiff: number;
}

const initialDate = dayjs().add(1, 'month');

const initialState: GoalState = {
  selectedGoal: {
    goalKind: 'saving goal',
    title: 'buy a house',
    icon: ICONS.houseIcon,
  },
  amount: '20.000,00',
  reachDate: initialDate,
  monthDiff: 1,
};

// It's okay to mutate state here because of the Immer library
export const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    incrementDate: (state) => {
      state.reachDate = dayjs(state.reachDate).add(1, 'month');
      state.monthDiff += 1;
    },
    decrementDate: (state) => {
      // already checks for month and year
      if (dayjs().isSame(state.reachDate, 'month')) {
        return;
      }
      state.reachDate = dayjs(state.reachDate).subtract(1, 'month');
      state.monthDiff -= 1;
    },
    setAmount: (state, action: PayloadAction<string>) => {
      const formatted = currencyFormat(action.payload);
      state.amount = formatted;
    },
  },
});

export const { incrementDate, decrementDate, setAmount } = goalSlice.actions;

export default goalSlice.reducer;
