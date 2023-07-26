const CheckBox = ({ label, name, value, onChange }) => {
    
    return (
      <label>
        <input type="checkbox" name = {name} value={value} onChange={onChange} />
        {label}
      </label>
    );
  };

export default CheckBox;