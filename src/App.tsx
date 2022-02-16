import { useAppSelector } from './store/hooks/hooks';
import './styles/output.css';
import GoalCard from './components/GoalCard';

export function App(): JSX.Element {
  const selectedGoal = useAppSelector((state) => state.goal.selectedGoal);
  return (
    <div className="flex flex-col items-center h-full mb-16 sm:mb-24">
      <div className="pt-8 sm:pt-12 pb-6">
        <p className="text-brandprimary text-lg sm:text-xl">
          Let&apos;s plan your
          <span className="font-semibold"> {selectedGoal.goalKind}.</span>
        </p>
      </div>
      <GoalCard />
    </div>
  );
}
