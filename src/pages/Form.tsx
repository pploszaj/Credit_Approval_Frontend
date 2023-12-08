import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";

type Ethnicity = "White" | "Black" | "Other";
type Gender = "Male" | "Female";
type Citizenship = "By Birth" | "By other means" | "Other";
type Industry = "Energy" | "Materials" | "Other";

function Form() {
  const [firstName, setfirstName] = useState<string>("");
  const [lastName, setlastName] = useState<string>("");
  const [gender, setGender] = useState<Gender>();
  const [age, setage] = useState<number>();
  const [employment, setemployment] = useState<boolean>();
  const [yearsemployment, setyearsemployment] = useState<number>();
  const [ethnicity, setethnicity] = useState<Ethnicity>();
  const [drivers, setdrivers] = useState<boolean>();
  const [citizenship, setcitizenship] = useState<Citizenship>();
  const [zipcode, setzipcode] = useState<number>();
  const [defaults, setdefaults] = useState<boolean>();
  const [creditScore, setcreditScore] = useState<number | null>();
  const [industry, setIndustry] = useState<Industry>();
  const [income, setIncome] = useState<number | null>();

  const sumbitHandler = () => {};

  return (
    <div className="flex flex-col justify-center items-start h-screen gap-8 ml-20">
      <h1 className="text-l">
        Please fill out this form to see if you would get approved today!
      </h1>
      <form
        onSubmit={sumbitHandler}
        className="flex flex-col w-screen justify-center items-start gap-2"
      >
        <div className="flex">
          <label htmlFor="firstName" className="mr-2">
            First Name:
          </label>
          <input
            id="firstName"
            type="text"
            className="pl-1 border border-gray-300 rounded"
            onChange={(e) => setfirstName(e.target.value)}
          ></input>
        
          <label htmlFor="lastName" className="mr-2 ml-6">
            Last Name:
          </label>
          <input
            id="lastName"
            type="text"
            className="pl-1 border border-gray-300 rounded"
            onChange={(e) => setlastName(e.target.value)}
          ></input>
        </div>
        <div className="flex">
          <label htmlFor="gender" className="mr-2">
            Gender:
          </label>
          <select id="gender" name="gender" className="border border-gray-300 rounded">
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        
          <label htmlFor="ethnicity" className="mr-2 ml-6">
            Ethnicity:
          </label>
          <select id="ethnicity" name="ethnicity" className="border border-gray-300 rounded">
            <option value=""></option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex">
          <label htmlFor="citizenship" className="mr-2">
            Citizenship:
          </label>
          <select id="citizenship" name="citizenship" className="border border-gray-300 rounded">
            <option value=""></option>
            <option value="white">By birth</option>
            <option value="black">By other means</option>
            <option value="other">Temporary</option>
          </select>
        
          <label htmlFor="zipcode" className="mr-2 ml-6">
            Zipcode:
          </label>
          <input type="number" id="zipcode" className="border border-gray-300 rounded"/>
        </div>
        <div className="flex">
          <label htmlFor="relationship" className="mr-2">
            Relationship Status:
          </label>
          <select id="relationship" name="relationship" className="border border-gray-300 rounded">
            <option value=""></option>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        
          <label htmlFor="age" className="mr-2 ml-6">
            Age:
          </label>
          <input type="number" id="age" className="border border-gray-300 rounded"/>
        </div>
        <div className="flex">
          <label htmlFor="bank_status" className="mr-2">
            Do you have a bank account?
          </label>
          <select id="bank_status" name="bank_status" className="border border-gray-300 rounded">
            <option value=""></option>
            <option value="hasAccount">
              Yes, I have at least one bank account.
            </option>
            <option value="noAccount">
              No, I do not have a bank account. I stash all my money under the
              mattress.
            </option>
          </select>
        </div>
        <div className="flex">
          <label htmlFor="length_of_employment" className="mr-2">
            Years you've been employed:
          </label>
          <input type="number" id="length_of_employment" className="border border-gray-300 rounded"/>
        </div>
        <div className="flex">
          <label htmlFor="employment_status" className="mr-2">
            Are you currently employed?
          </label>
          <select id="employment_status" name="employment_status" className="border border-gray-300 rounded">
            <option value=""></option>
            <option value="employed">Yes, I am currently employed.</option>
            <option value="unemployed">No, I am not currently employed.</option>
          </select>
        </div>
        <div className="flex">
          <label htmlFor="employment_status" className="mr-2">
            Do you have any prior defaults?
          </label>
          <select id="defaults" name="defaults" className="border border-gray-300 rounded">
            <option value=""></option>
            <option value="hadDefaults">Yes, I have prior defaults.</option>
            <option value="noDefaults">
              No, I do not hacve prior defaults.
            </option>
          </select>
        </div>
        <div className="flex">
          <label htmlFor="driverslicense" className="mr-2">
            Do you have a driver's license?
          </label>
          <select id="driverslicense" name="driverslicense" className="border border-gray-300 rounded">
            <option value=""></option>
            <option value="hasDriversLicense">
              Yes, I have a driver's license.
            </option>
            <option value="noDriversLicense">
              No, I do not have a driver's license.
            </option>
          </select>
        </div>
        <div className="flex">
          <label htmlFor="industry" className="mr-2">
            What industry do you work in?
          </label>
          <select id="industry" name="industry" className="border border-gray-300 rounded">
            <option value=""></option>
            <option value="Energy">Energy.</option>
            <option value="Materials">Materials.</option>
            <option value="Other">Other.</option>
          </select>
        </div>
        <div className="flex">
          <label htmlFor="debt" className="mr-2">
            {" "}
            Debt Owed (in thousands):
          </label>
          <input type="number" id="debt" className="pl-1 border border-gray-300 rounded"></input>
        </div>
        <div className="flex">
          <label htmlFor="creditscore" className="mr-2">
            {" "}
            Credit Score:
          </label>
          <input type="number" id="creditscore" className="pl-1 border border-gray-300 rounded"></input>
          <label htmlFor="income" className="mr-2 ml-6">
            Income:
          </label>
          <input
            type="number"
            className="pl-1 border border-gray-300 rounded"
            onChange={(e) => setIncome(Number(e.target.value))}
          ></input>
        </div>
        <button type="submit" className="text-blue-700">
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default Form;
