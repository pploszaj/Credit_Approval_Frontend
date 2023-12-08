import React, {useState} from "react";

function Form() {

  const [firstName, setfirstName] = useState<string>('');
  const [lastName, setlastName] = useState<string>('');
  const [creditScore, setcreditScore] = useState<number|null>();
  const [income, setIncome] = useState<number|null>();

  const sumbitHandler = () => {

  }

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8">
      <h1 className="text-5xl">Form</h1>
      <form onSubmit={sumbitHandler} className="flex flex-col w-screen justify-center items-center gap-6">
        <input placeholder="First name" type="text" className="pl-1" onChange={(e) => setfirstName(e.target.value)}></input>
        <input placeholder="Last name" type="text" className="pl-1" onChange={(e) => setlastName(e.target.value)}></input>
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender">
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label htmlFor="ethnicity">Ethnicity:</label>
        <select id="ethnicity" name="ethnicity">
          <option value=""></option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="relationship">Relationship Status:</label>
        <select id="relationship" name="relationship">
          <option value=""></option>
          <option value="single">Single</option>
          <option value="married">Married</option>
        </select>
        <label htmlFor="bank_status">Do you have a bank account?</label>
        <select id="bank_status" name="bank_status">
          <option value=""></option>
          <option value="hasAccount">Yes, I have at least one bank account.</option>
          <option value="noAccount">No, I do not have a bank account. I stash all my money under the mattress.</option>
        </select>
        <input type="number" placeholder="Age"/>
        <input type="number" placeholder="Years you've been employed"/>
        <label htmlFor="employment_status">Are you currently employed?</label>
        <select id="employment_status" name="employment_status">
          <option value=""></option>
          <option value="employed">Yes, I am currently employed.</option>
          <option value="unemployed">No, I am not currently employed.</option>
        </select>
        <label htmlFor="employment_status">Do you have any prior defaults?</label>
        <select id="defaults" name="defaults">
          <option value=""></option>
          <option value="hadDefaults">Yes, I have prior defaults.</option>
          <option value="noDefaults">No, I do not hacve prior defaults.</option>
        </select>
        <input placeholder="Debt Owed (in thousands)" type="number" className="pl-1" onChange={(e) => setcreditScore(Number(e.target.value))} ></input>
        <input placeholder="Income" type="number" className="pl-1" onChange={(e) => setIncome(Number(e.target.value))}></input>
        <button type="submit" className="text-blue-700">Submit Form</button>
      </form>
    </div>
  );
}

export default Form;
