function Shobika(){

    const a= 'my name is';
    console.log(a);

    const datas =[{fname:'kishore',age:'25',city:'krr'},
    {fname:'Ramesh',age:'24',city:'erode'},
    {fname:'arun',age:'20',city:'cbe'}
]
    return(
        <>
      

        <ul>
          {datas.map((item)=>(
              <li key={item.fname}>
                  <span>{item.fname}</span>
                  <span>{item.age}</span>
                  <span>{item.city}</span>
              </li>
          ))}
        </ul>
        </>
    )
}

export default Shobika;