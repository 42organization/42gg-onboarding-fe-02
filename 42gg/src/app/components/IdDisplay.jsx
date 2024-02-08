import { useRecoilValue } from 'recoil';
import { userState } from '../../atom';

const IdDisplay = () => {
  const { id } = useRecoilValue(userState);
  return (
    <div>
      <h1>Your ID is {id}</h1>
    </div>
  );
};

export default IdDisplay;
