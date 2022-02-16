import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useAppSelector, useAppDispatch } from '../store/hooks/hooks';
import { incrementDate, decrementDate } from '../store/slices/goalSlice';
import ICONS from '../styles/icons';

export default function DatePicker(): JSX.Element {
  const dispatch = useAppDispatch();
  const { reachDate, initialDate } = useAppSelector((state) => state.goal);
  const [decrementDisabled, setDecrementDisabled] = useState(false);

  useEffect(() => {
    setDecrementDisabled(dayjs(initialDate).isSame(reachDate));
  }, [initialDate, reachDate]);

  const handleIncrement = () => {
    dispatch(incrementDate());
  };

  const handleDecrement = () => {
    if (decrementDisabled) {
      return;
    }
    dispatch(decrementDate());
  };

  const onKeyDown = (key: string): void => {
    switch (key) {
      case 'ArrowLeft':
        handleDecrement();
        break;
      case 'ArrowRight':
        handleIncrement();
        break;
      default:
        break;
    }
  };
  return (
    <div className="flex flex-col w-full sm:w-5/12">
      <p className="text-[12px] sm:text-sm mb-1">Reach goal by</p>

      <div
        className="flex justify-between custom-border h-14 px-5 py-1 focus:outline-0"
        tabIndex={0}
        onKeyDown={(e) => onKeyDown(e.key)}
      >
        <img
          src={ICONS.arrowIcon}
          alt="currency icon"
          className={`mr-1 ${
            decrementDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
          onClick={() => handleDecrement()}
          width="8"
          height="14"
        />
        <div className="flex flex-col justify-center mr-1 text-[14px] sm:text-[16px] text-center leading-tight">
          <p className="font-semibold">{dayjs(reachDate).format('MMMM')}</p>
          <p className="text-maingray">{dayjs(reachDate).format('YYYY')}</p>
        </div>
        <img
          src={ICONS.arrowIcon}
          alt="currency icon"
          className="rotate-180 cursor-pointer"
          onClick={() => handleIncrement()}
          width="8"
          height="14"
        />
      </div>
    </div>
  );
}
