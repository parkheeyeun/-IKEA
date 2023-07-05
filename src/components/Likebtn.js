import { useEffect, useState } from "react";

function Like(click){
  const [fade, setFade] = useState('')

  useEffect(() => {
    setFade('end')
  }, [click])
}

return(
  <div>
    <img src='' className={'start'+fade}></img>
  </div>
)