import dayjs from 'dayjs';

import { useAppSelector } from '../store/hooks/hooks';

export default function DepositsCard(): JSX.Element {
  const { reachDate, monthDiff, amount, currencySymbol, monthlyAmount } =
    useAppSelector((state) => state.goal);

  return (
    <div className="flex flex-col custom-border h-[155px] mb-8">
      <div className="flex justify-between h-[78px] items-center p-6">
        <p className="text-[18px] sm:text-[20px]">Monthly amount</p>
        <h3
          className="text-brandsecondary text-[24px] sm:text-[32px] font-rubik"
          data-cy="deposits-amount"
        >
          {currencySymbol}
          {monthlyAmount}
        </h3>
      </div>
      <div className="flex items-center text-center sm:text-left h-full sm:h-[80px] bg-backgroundprimary p-6">
        <p className="text-[12px]">
          You&apos;re planning{' '}
          <span className="font-semibold" data-cy="deposits-desc-quantity">
            {monthDiff} monthly deposit{monthDiff > 1 ? 's' : ''}
          </span>{' '}
          to reach your{' '}
          <span className="font-semibold" data-cy="deposits-desc-amount">
            {currencySymbol}
            {amount ? amount : '0'}
          </span>{' '}
          goal by{' '}
          <span className="font-semibold" data-cy="deposits-desc-reachdate">
            {dayjs(reachDate).format('MMMM, YYYY')}.
          </span>
        </p>
      </div>
    </div>
  );
}
