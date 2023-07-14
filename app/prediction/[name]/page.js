import React from 'react'
import axios from 'axios';

const getPredictedGender = async (name) => {
  try {
    const { data } = await axios.get(`https://api.genderize.io?name=${name}`);
    return data;
  } catch (err) {
    console.log(err.message)
  }
}
const getPredictedAge = async (name) => {
  try {
    const { data } = await axios.get(`https://api.agify.io?name=${name}`);
    return data;
  } catch (err) {
    console.log(err.message)
  }
}
const getPredictedCountry = async (name) => {
  try {
    const { data } = await axios.get(`https://api.nationalize.io?name=${name}`);
    return data;
  } catch (err) {
    console.log(err.message)
  }
}

async function NestedPrediction({ params }) {
  const genderData = getPredictedGender(params.name)
  const ageData = getPredictedAge(params.name)
  const countryData = getPredictedCountry(params.name)

  const [gender, age, country] = await Promise.all([genderData, ageData, countryData])


  return (
    <div>
      <h1>personal info:</h1>
      <h1>{gender?.gender}</h1>
      <h1>{age?.age}</h1>
      <h1>{country?.country[0]?.country_id}</h1>
    </div>
  )
}

export default NestedPrediction
