import { useAppSelector, useAppDispatch } from '../store/hooks/hooks';
import { setAmount } from '../store/slices/goalSlice';
import ICONS from '../styles/icons';

export default function CurrencyInput(): JSX.Element {
  const dispatch = useAppDispatch();
  const { amount } = useAppSelector((state) => state.goal);

  const handleChange = (newAmount: string) => {
    dispatch(setAmount(newAmount));
  };
  return (
    <div className="flex flex-col w-full sm:w-7/12">
      <p className="text-textprimary text-[12px] sm:text-sm mb-1">
        Total amount
      </p>
      <div className="flex custom-border px-5 py-1 h-14 ">
        <img
          src={ICONS.dollarSign}
          alt="currency icon"
          className="mr-1"
          width="14"
          height="16"
        />
        <input
          type="text"
          value={amount}
          onChange={(event) => handleChange(event.target.value)}
          className="text-intermediarygray font-rubik outline-0 appearance-none"
        />
      </div>
    </div>
  );
}
