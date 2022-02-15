import { useAppSelector } from '../store/hooks/hooks';
import { currencyDivision } from '../utils/currencyFormat';
import dayjs from 'dayjs';

export default function DepositsCard(): JSX.Element {
  const { reachDate, monthDiff, amount } = useAppSelector(
    (state) => state.goal
  );
  const monthlyAmount = () => {
    let monthQuantity = monthDiff;
    if (monthDiff === 0) {
      monthQuantity = 1;
    }

    return currencyDivision(amount, monthQuantity);
  };
  return (
    <div className="flex flex-col custom-border h-[155px] mb-8">
      <div className="flex justify-between h-[78px] items-center p-6">
        <p className="text-[18px] sm:text-[20px]">Monthly amount</p>
        <h3 className="text-brandsecondary text-[24px] sm:text-[32px] font-rubik">
          {monthlyAmount()}
        </h3>
      </div>
      <div className="flex items-center text-center sm:text-left h-full sm:h-[80px] bg-backgroundprimary p-6">
        <p className="text-[12px]">
          You&apos;re planning{' '}
          <span className="font-semibold">
            {monthDiff === 0 ? '1' : monthDiff} monthly deposits
          </span>{' '}
          to reach your <span className="font-semibold">{amount}</span> goal by{' '}
          <span className="font-semibold">
            {dayjs(reachDate).format('MMMM, YYYY')}.
          </span>
        </p>
      </div>
    </div>
  );
}
