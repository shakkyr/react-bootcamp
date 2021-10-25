

const Clicks = (checked,handleChange,label)=> {


   return (
      <div>
          <li><input type='checkbox'
           checked={checked}
           onChange={handleChange}
           label ={label}
            /> </li>
      </div>
      )

}

export default Clicks;