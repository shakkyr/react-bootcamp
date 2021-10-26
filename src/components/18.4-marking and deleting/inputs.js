

const Clicks = (checked,handleChange,label)=> {


   return (
      
      <input type='checkbox'
            checked={checked}
            onChange={handleChange}
            label ={label}
      /> 

      )

}

export default Clicks;