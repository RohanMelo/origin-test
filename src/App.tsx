import { useSelector } from 'react-redux';
import './styles/output.css';
import GoalCard from './components/GoalCard';
import { RootState } from './store/store';

export function App(): JSX.Element {
  const selectedGoal = useSelector(
    (state: RootState) => state.goal.selectedGoal
  );
  return (
    <div
      data-testid="greetings-container"
      className="flex flex-col items-center bg-backgroundprimary h-screen"
    >
      <div className="pt-8 sm:pt-12 pb-6">
        <p className="text-brandprimary">
          Let&apos;s plan your
          <span className="font-semibold"> {selectedGoal.goalKind}.</span>
        </p>
      </div>
      <GoalCard />
    </div>
  );
}
