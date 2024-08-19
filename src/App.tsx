import axios from "axios";
import { useState } from "react";

const App = () => {
  const[question,setQuestion] = useState('');
  const[answer,setAnswer] = useState('');
  const apiData = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyATaz0Rp1o0ysw6BlB6_TecjTJXt61se-4';
  const generateAnswer = async () => {
    setAnswer('loading...');
    try {
      const response = await axios.post(apiData, 
        {
            "contents": [{ "parts": [{ "text": question }] }]
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      setAnswer(response.data.candidates[0].content.parts[0].text);
      console.log('api response', response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "3rem", color: "red", marginTop: "1rem" }}>
        hello pawan
      </h1>
      <textarea className="border-md w-50 m-auto d-block mb-4 mt-4" value={question} onChange={(e)=>setQuestion(e.target.value)} cols={30} rows={10}></textarea>
      <button onClick={generateAnswer} style={{backgroundColor:"red",color:"white",padding:"0.7rem 0.9rem",borderRadius:"8px",display:"block",border:"none",width:"10%",margin:"auto"}}>Create Answer</button>
      <pre className="text-center mt-4" style={{color:"red"}}>{answer}</pre>
    </>
  );
};

export default App;