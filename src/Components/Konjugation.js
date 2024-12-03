import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Konjugation = () => {
  const [dasVerb, setDasVerb] = useState('')
  const [verben, setVerben] = useState([{}])
  const [loading, setLoading] = useState(false);

  const bringVerbenConjugation = async (e) => {
    e.preventDefault()
    try {

      const response = await axios.get("https://german-verbs.glitch.me/german-verbs-api?verb=" + dasVerb);
      const fetchedWords = response?.data;
      setVerben(fetchedWords.data);
      setLoading(true)
    }
    catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching is done
    }
  }

  const handleChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z]/g, '');
    setDasVerb(value);
  };

  return (
    <div className='flex flex-col justify-center items-center w-full p-4 border-1 rounded '>

      <div className='border-1 rounded border-slate-700 mb-4'>
        <form onSubmit={bringVerbenConjugation}>

          <input type='text'
            className='h-10 rounded pl-1 font-serif bg-gray-200'
            autoComplete='On'
            onChange={handleChange}
            value={dasVerb}
            title="Please enter letters only."
            pattern="[A-Za-z]+"
            required
          /> <input type='submit' value="Submit"
            className='border-2 ml-4 h-10 border-gray-900 rounded-full bg-blue-800 focus:bg-red-600 focus:inset-4 focus:border-lime-600 text-white pl-6 pr-6 font-serif'
          />
        </form>
      </div>


      <div className='min-h-72 border-2 border-slate-200 p-2 rounded w-full flex flex-row gap-4 flex-nowrap max-md:flex-col justify-evenly'>

        <div className='font-serif pl-2 border-2 rounded border-zinc-400 w-44 flex flex-col drop-shadow-xl max-md:w-full'>
          <span className='font-bold w-full text-center'>PRASENS</span>
          <ul>
            <li className='verb-list'>Ich: <span className='verb-span'>{verben?.PRASENS?.S1}</span>  </li>
            <li className='verb-list'>Du: <span className='verb-span'>{verben?.PRASENS?.S2}</span></li>
            <li className='verb-list'>Er/Sie/Es: <span className='verb-span'>{verben?.PRASENS?.S3}</span></li>
            <li className='verb-list'>Wir: <span className='verb-span'>{verben?.PRASENS?.P1}</span></li>
            <li className='verb-list'>Ihr: <span className='verb-span'>{verben?.PRASENS?.P2}</span></li>
            <li className='verb-list'>Sie/sie: <span className='verb-span'>{verben?.PRASENS?.P3}</span></li>
          </ul>
        </div>

        <div className='font-serif pl-2 border-2 rounded border-zinc-400 w-44 flex flex-col drop-shadow-xl max-md:w-full'>
          <span className='font-bold w-full text-center'> PRATERITUM</span>
          <ul>
            <li className='verb-list'>Ich: <span className='verb-span'>{verben?.PRATERITUM?.S1}</span>  </li>
            <li className='verb-list'>Du: <span className='verb-span'>{verben?.PRATERITUM?.S2}</span></li>
            <li className='verb-list'>Er/Sie/Es: <span className='verb-span'>{verben?.PRATERITUM?.S3}</span></li>
            <li className='verb-list'>Wir: <span className='verb-span'>{verben?.PRATERITUM?.P1}</span></li>
            <li className='verb-list'>Ihr: <span className='verb-span'>{verben?.PRATERITUM?.P2}</span></li>
            <li className='verb-list'>Sie/sie: <span className='verb-span'>{verben?.PRATERITUM?.P3}</span></li>
          </ul>
        </div>

        <div className='font-serif pl-2 border-2 rounded border-zinc-400 flex flex-col drop-shadow-xl w-fit max-md:w-full'>
          <span className='font-bold w-full text-center'> PERFEKT</span>
          <ul>
            <li className='verb-list'>Ich: <span className='verb-span'>{verben?.PERFEKT?.S1[0]} {verben?.PERFEKT?.S1[1]}</span>  </li>
            <li className='verb-list'>Du: <span className='verb-span'>{verben?.PERFEKT?.S2[0]} {verben?.PERFEKT?.S2[1]}</span></li>
            <li className='verb-list'>Er/Sie/Es: <span className='verb-span'>{verben?.PERFEKT?.S3[0]} {verben?.PERFEKT?.S3[1]}</span></li>
            <li className='verb-list'>Wir: <span className='verb-span'>{verben?.PERFEKT?.P1[0]} {verben?.PERFEKT?.P1[1]}</span></li>
            <li className='verb-list'>Ihr: <span className='verb-span'>{verben?.PERFEKT?.P2[0]} {verben?.PERFEKT?.P2[1]}</span></li>
            <li className='verb-list'>Sie/sie: <span className='verb-span'>{verben?.PERFEKT?.P3[0]} {verben?.PERFEKT?.P3[1]}</span></li>
          </ul>
        </div>

        <div className='font-serif pl-2 border-2 rounded border-zinc-400 flex flex-col drop-shadow-xl w-fit max-md:w-full'>
          <span className='font-bold w-full text-center'> FUTUR1</span>
          <ul>
            <li className='verb-list'>Ich: <span className='verb-span'>{verben?.FUTUR1?.S1[0]} {verben?.FUTUR1?.S1[1]}</span>  </li>
            <li className='verb-list'>Du: <span className='verb-span'>{verben?.FUTUR1?.S2[0]} {verben?.FUTUR1?.S2[1]}</span></li>
            <li className='verb-list'>Er/Sie/Es: <span className='verb-span'>{verben?.FUTUR1?.S3[0]} {verben?.FUTUR1?.S3[1]}</span></li>
            <li className='verb-list'>Wir: <span className='verb-span'>{verben?.FUTUR1?.P1[0]} {verben?.FUTUR1?.P1[1]}</span></li>
            <li className='verb-list'>Ihr: <span className='verb-span'>{verben?.FUTUR1?.P2[0]} {verben?.FUTUR1?.P2[1]}</span></li>
            <li className='verb-list'>Sie/sie: <span className='verb-span'>{verben?.FUTUR1?.P3[0]} {verben?.FUTUR1?.P3[1]}</span></li>
          </ul>
        </div>

        <div className='font-serif pl-2 border-2 rounded border-zinc-400 flex flex-col drop-shadow-xl w-fit max-md:w-full'>
          <span className='font-bold w-full text-center'> FUTUR2</span>
          <ul>
            <li className='verb-list'>Ich: <span className='verb-span'>{verben?.FUTUR2?.S1[0]} {verben?.FUTUR2?.S1[1]}</span>  </li>
            <li className='verb-list'>Du: <span className='verb-span'>{verben?.FUTUR2?.S2[0]} {verben?.FUTUR2?.S2[1]}</span></li>
            <li className='verb-list'>Er/Sie/Es: <span className='verb-span'>{verben?.FUTUR2?.S3[0]} {verben?.FUTUR2?.S3[1]}</span></li>
            <li className='verb-list'>Wir: <span className='verb-span'>{verben?.FUTUR2?.P1[0]} {verben?.FUTUR2?.P1[1]}</span></li>
            <li className='verb-list'>Ihr: <span className='verb-span'>{verben?.FUTUR2?.P2[0]} {verben?.FUTUR2?.P2[1]}</span></li>
            <li className='verb-list'>Sie/sie: <span className='verb-span'>{verben?.FUTUR2?.P3[0]} {verben?.FUTUR2?.P3[1]}</span></li>
          </ul>
        </div>

        <div className='font-serif pl-2 border-2 rounded border-zinc-400 flex flex-col drop-shadow-xl w-fit max-md:w-full'>
          <span className='font-bold w-full text-center'> PLUSQUAMPERFEKT</span>
          <ul>
            <li className='verb-list'>Ich: <span className='verb-span'>{verben?.PLUSQUAMPERFEKT?.S1[0]} {verben?.PLUSQUAMPERFEKT?.S1[1]}</span>  </li>
            <li className='verb-list'>Du: <span className='verb-span'>{verben?.PLUSQUAMPERFEKT?.S2[0]} {verben?.PLUSQUAMPERFEKT?.S2[1]}</span></li>
            <li className='verb-list'>Er/Sie/Es: <span className='verb-span'>{verben?.PLUSQUAMPERFEKT?.S3[0]} {verben?.PLUSQUAMPERFEKT?.S3[1]}</span></li>
            <li className='verb-list'>Wir: <span className='verb-span'>{verben?.PLUSQUAMPERFEKT?.P1[0]} {verben?.PLUSQUAMPERFEKT?.P1[1]}</span></li>
            <li className='verb-list'>Ihr: <span className='verb-span'>{verben?.PLUSQUAMPERFEKT?.P2[0]} {verben?.PLUSQUAMPERFEKT?.P2[1]}</span></li>
            <li className='verb-list'>Sie/sie: <span className='verb-span'>{verben?.PLUSQUAMPERFEKT?.P3[0]} {verben?.PLUSQUAMPERFEKT?.P3[1]}</span></li>
          </ul>
        </div>



      </div>
    </div>
  )
}

export default Konjugation
