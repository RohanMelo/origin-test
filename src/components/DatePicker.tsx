import dayjs from 'dayjs';
import { useAppSelector, useAppDispatch } from '../store/hooks/hooks';
import { incrementDate, decrementDate } from '../store/slices/goalSlice';
import ICONS from '../styles/icons';

export default function DatePicker(): JSX.Element {
  const dispatch = useAppDispatch();
  const { reachDate } = useAppSelector((state) => state.goal);

  const handleIncrement = () => {
    dispatch(incrementDate());
  };

  const handleDecrement = () => {
    dispatch(decrementDate());
  };
  return (
    <div className="flex flex-col w-full sm:w-5/12">
      <p className="text-textprimary text-[12px] sm:text-sm mb-1">
        Reach goal by
      </p>
      <div className="flex justify-between custom-border h-14 px-5 py-1">
        <img
          src={ICONS.arrowIcon}
          alt="currency icon"
          className="mr-1 cursor-pointer"
          onClick={() => handleDecrement()}
          width="8"
          height="14"
        />
        <div className="flex flex-col justify-center mr-1 text-[14px] sm:text-[16px] text-center leading-tight">
          <p className="font-semibold text-textprimary">
            {dayjs(reachDate).format('MMMM')}
          </p>
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
