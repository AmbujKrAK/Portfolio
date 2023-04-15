import './Form.css'

export const Form = () => {
  return (
    <div className="formMain">
      <h2>Job Post</h2>

      <label>Position </label>
      <input type="text" />

      <lable>Location </lable>
      <input type="text" />

      <label>Position </label>
      <input type="text" />

      <lable>Experince </lable>
      <input type="text" />

      <lable>Employement Type</lable>
      <select>
        <option value=""></option>
        <option value="">Full Time</option>
        <option value="">Part Time</option>
      </select>

      <label>Salary Scale</label>
      <select>
        <option value=""></option>
        <option value="">10 Lac</option>
        <option value="">5 Lac</option>
      </select>

      <label>Icon</label>
      <input type="file" alt='Submit'/>

        <label>Job Description</label>
      <textarea name="" id="" cols="30" rows="2"></textarea>
        
    <input type="submit" />

    </div>
  )
}
