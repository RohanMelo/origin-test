import { useAppSelector } from '../store/hooks/hooks';
import Button from './Button';

import CurrencyInput from './CurrencyInput';
import DatePicker from './DatePicker';
import DepositsCard from './DepositsCard';

export default function GoalCard(): JSX.Element {
  const { selectedGoal } = useAppSelector((state) => state.goal);

  return (
    <div className="bg-white w-full sm:max-w-[560px] rounded px-6 py-8 sm:px-10 shadow-md">
      <div className="flex items-center mb-6 sm:mb-7">
        <div className="">
          <img
            src={selectedGoal.icon}
            alt={selectedGoal.title}
            className="h-16 w-16"
          />
        </div>
        <div className="flex flex-col ml-4">
          <h3 className="text-lg text-textprimary font-rubik capitalize">
            {selectedGoal.title}
          </h3>
          <p className="text-maingray capitalize">{selectedGoal.goalKind}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-y-4 sm:gap-y-0 gap-x-4 pb-6">
        <CurrencyInput />
        <DatePicker />
      </div>
      <DepositsCard />
      <div className="flex justify-center pt-6">
        <Button text={'Confirm'} />
      </div>
    </div>
  );
}
