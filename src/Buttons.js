const Buttons = ({ category, text, onClick }) => {
  const btnType = ['negative', 'positive'].includes(category) ? category : 'default';

  return (
    <button type="button" className={['btn', `btn-${btnType}`].join(' ')} onClick={onClick}>
      {text}
    </button>
  );
};

export default Buttons;
