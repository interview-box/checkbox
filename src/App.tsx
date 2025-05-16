import './styles.css';

type Checkbox = {
  id: number;
  name: string;
  isChecked: boolean;
};

type Props = {
  data: Checkbox[];
};

export const App = (props: Props) => {
  return (
    <div className='container'>
      {props.data.map((checkbox) => (
        <div className='item'>
          <input type='checkbox' checked={checkbox.isChecked} />
          <label>{checkbox.name}</label>
        </div>
      ))}
    </div>
  );
};
