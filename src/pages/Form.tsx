import React, { useState } from "react";
import axios from "axios";

type Ethnicity = "White" | "Black" | "Other" | "";
type Gender = "Male" | "Female" | "";
type Citizenship = "By birth" | "By other means" | "Temporary" | "";
type Industry = "Energy" | "Materials" | "Other" | "";
type Relationship = "Single" | "Married" | "";

function Form() {
  const [firstName, setfirstName] = useState<string>("");
  const [lastName, setlastName] = useState<string>("");
  const [gender, setGender] = useState<Gender>("");
  const [age, setage] = useState<number>();
  const [employment, setemployment] = useState<string>("");
  const [yearsemployment, setyearsemployment] = useState<number>();
  const [ethnicity, setethnicity] = useState<Ethnicity>();
  const [drivers, setdrivers] = useState<string>("");
  const [citizenship, setcitizenship] = useState<Citizenship>("");
  const [zipcode, setzipcode] = useState<number>();
  const [defaults, setdefaults] = useState<string>("");
  const [creditScore, setcreditScore] = useState<number>();
  const [industry, setIndustry] = useState<Industry>("");
  const [bankstatus, setbankstatus] = useState<string>("");
  const [income, setIncome] = useState<number>();
  const [relationship, setrelationship] = useState<Relationship>("");
  const [debt, setdebt] = useState<number>();

  const sumbitHandler = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post("/clientdata", {
        firstName,
        lastName,
        gender,
        age,
        employment,
        yearsemployment,
        ethnicity,
        drivers,
        citizenship,
        zipcode,
        defaults,
        creditScore,
        industry,
        bankstatus,
        income,
        relationship,
        debt,
      });
    } catch (e) {
      console.log("Error making POST request");
    }
  };

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
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          ></input>

          <label htmlFor="lastName" className="mr-2 ml-6">
            Last Name:
          </label>
          <input
            id="lastName"
            type="text"
            className="pl-1 border border-gray-300 rounded"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          ></input>
        </div>
        <div className="flex">
          <label htmlFor="gender" className="mr-2">
            Gender:
          </label>
          <select
            id="gender"
            name="gender"
            className="border border-gray-300 rounded"
            value={gender}
            onChange={(e) => setGender(e.target.value as Gender)}
          >
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label htmlFor="ethnicity" className="mr-2 ml-6">
            Ethnicity:
          </label>
          <select
            id="ethnicity"
            name="ethnicity"
            className="border border-gray-300 rounded"
            value={ethnicity}
            onChange={(e) => setethnicity(e.target.value as Ethnicity)}
          >
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
          <select
            id="citizenship"
            name="citizenship"
            className="border border-gray-300 rounded"
            value={citizenship}
            onChange={(e) => setcitizenship(e.target.value as Citizenship)}
          >
            <option value=""></option>
            <option value="By birth">By birth</option>
            <option value="By other means">By other means</option>
            <option value="Temporary">Temporary</option>
          </select>

          <label htmlFor="zipcode" className="mr-2 ml-6">
            Zipcode:
          </label>
          <input
            type="number"
            id="zipcode"
            className="border border-gray-300 rounded"
            value={zipcode}
            onChange={(e) => setzipcode(Number(e.target.value))}
          />
        </div>
        <div className="flex">
          <label htmlFor="relationship" className="mr-2">
            Relationship Status:
          </label>
          <select
            id="relationship"
            name="relationship"
            className="border border-gray-300 rounded"
            value={relationship}
            onChange={(e) => setrelationship(e.target.value as Relationship)}
          >
            <option value=""></option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>

          <label htmlFor="age" className="mr-2 ml-6">
            Age:
          </label>
          <input
            type="number"
            id="age"
            className="border border-gray-300 rounded"
            value={age}
            onChange={(e) => setage(Number(e.target.value))}
          />
        </div>
        <div className="flex">
          <label htmlFor="bank_status" className="mr-2">
            Do you have a bank account?
          </label>
          <select
            id="bank_status"
            name="bank_status"
            className="border border-gray-300 rounded"
            value={bankstatus}
            onChange={(e) => setbankstatus(e.target.value)}
          >
            <option value=""></option>
            <option value="1">Yes, I have at least one bank account.</option>
            <option value="0">
              No, I do not have a bank account. I stash all my money under the
              mattress.
            </option>
          </select>
        </div>
        <div className="flex">
          <label htmlFor="length_of_employment" className="mr-2">
            Years you've been employed:
          </label>
          <input
            type="number"
            id="length_of_employment"
            className="border border-gray-300 rounded"
            value={yearsemployment}
            onChange={(e) => setyearsemployment(Number(e.target.value))}
          />
        </div>
        <div className="flex">
          <label htmlFor="employment_status" className="mr-2">
            Are you currently employed?
          </label>
          <select
            id="employment_status"
            name="employment_status"
            className="border border-gray-300 rounded"
            value={employment}
            onChange={(e) => setemployment(e.target.value)}
          >
            <option value=""></option>
            <option value="1">Yes, I am currently employed.</option>
            <option value="0">No, I am not currently employed.</option>
          </select>
        </div>
        <div className="flex">
          <label htmlFor="defaults" className="mr-2">
            Do you have any prior defaults?
          </label>
          <select
            id="defaults"
            name="defaults"
            className="border border-gray-300 rounded"
            value={defaults}
            onChange={(e) => setdefaults(e.target.value)}
          >
            <option value=""></option>
            <option value="1">Yes, I have prior defaults.</option>
            <option value="0">No, I do not hacve prior defaults.</option>
          </select>
        </div>
        <div className="flex">
          <label htmlFor="driverslicense" className="mr-2">
            Do you have a driver's license?
          </label>
          <select
            id="driverslicense"
            name="driverslicense"
            className="border border-gray-300 rounded"
            value={drivers}
            onChange={(e) => setdrivers(e.target.value)}
          >
            <option value=""></option>
            <option value="1">Yes, I have a driver's license.</option>
            <option value="0">No, I do not have a driver's license.</option>
          </select>
        </div>
        <div className="flex">
          <label htmlFor="industry" className="mr-2">
            What industry do you work in?
          </label>
          <select
            id="industry"
            name="industry"
            className="border border-gray-300 rounded"
            value={industry}
            onChange={(e) => setIndustry(e.target.value as Industry)}
          >
            <option value=""></option>
            <option value="Energy">Energy</option>
            <option value="Materials">Materials</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="flex">
          <label htmlFor="debt" className="mr-2">
            Debt Owed (in thousands):
          </label>
          <input
            type="number"
            id="debt"
            className="pl-1 border border-gray-300 rounded"
            value={debt}
            onChange={(e) => setdebt(Number(e.target.value))}
          ></input>
        </div>
        <div className="flex">
          <label htmlFor="creditscore" className="mr-2">
            {" "}
            Credit Score:
          </label>
          <input
            type="number"
            id="creditscore"
            className="pl-1 border border-gray-300 rounded"
            value={creditScore}
            onChange={(e) => setcreditScore(Number(e.target.value))}
          ></input>
          <label htmlFor="income" className="mr-2 ml-6">
            Income:
          </label>
          <input
            type="number"
            className="pl-1 border border-gray-300 rounded"
            value={income}
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
