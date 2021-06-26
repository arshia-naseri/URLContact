import React, {useState, useEffect} from 'react';
import contact from './contact.vcf'

function App() {

  useEffect(()=>{
    autoClick()
  },[])

  function autoClick(){
    const btnDownload = document.getElementById('btnDownload')
    btnDownload.click()
  }

  return (
    <>
    <a id={'btnDownload'} href={contact} download>This is the page</a>
    </>
  )
}


export default App;
